/* =========================================================
 * Wishlist (wishlist.html)
 *   My wishlist : trees each account wants, with the Livlies they'd unlock.
 *   Find trees  : every tree an account is missing, one row each, with
 *                 ☆ buttons to add it to any account's wishlist.
 * Wishlists are saved with the accounts in this browser (scripts/store.js).
 * ========================================================= */

const LANGS = ["ja", "en"];
const LANG_STORAGE_KEY = "livlyTreeViewer.lang";          // shared with the other pages
const SHARED_STORAGE_KEY = "livlyTreeViewer.sharedFruit"; // the viewer's "share fruit" switch
const TAB_STORAGE_KEY = "livlyTreeTracker.wishlistTab";
const TABS = ["mine", "find"];
const ALL = "__all__";                                    // "Missing from: All my accounts"

const data = window.LIVLY_DATA || {};
const trees = data.trees || {};
const livlies = data.livlies || {};
const treeIds = Object.keys(trees);                       // wiki order

let lang = pickLanguage();
let tab = pickTab();
const ui = () => window.LIVLY_I18N[lang];

/* ---------- small helpers ---------- */

function pickLanguage() {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  if (LANGS.includes(fromUrl)) return fromUrl;
  const saved = safeGet(LANG_STORAGE_KEY);
  if (LANGS.includes(saved)) return saved;
  return (navigator.language || "").toLowerCase().startsWith("ja") ? "ja" : "en";
}

function pickTab() {
  const fromUrl = new URLSearchParams(location.search).get("tab");
  if (TABS.includes(fromUrl)) return fromUrl;
  const saved = safeGet(TAB_STORAGE_KEY);
  return TABS.includes(saved) ? saved : "mine";
}

function safeGet(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}

function store(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
}

function tr(value) {
  if (value == null) return "";
  if (typeof value === "string") return value;
  return value[lang] || value.ja || value.en || "";
}

function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [key, val] of Object.entries(attrs)) {
    if (val == null || val === false) continue;
    if (key === "class") node.className = val;
    else if (key.startsWith("on")) node.addEventListener(key.slice(2), val);
    else node.setAttribute(key, val);
  }
  for (const child of children.flat()) {
    if (child == null) continue;
    node.append(child instanceof Node ? child : document.createTextNode(child));
  }
  return node;
}

const $ = (id) => document.getElementById(id);

/** URL as-is; a plain filename is looked up in assets/<folder> (same rule as the viewer). */
function imageSrc(value, folder) {
  if (!value) return null;
  return /^(https?:)?\/\//.test(value) || value.startsWith("data:") ? value : `assets/${folder}/${value}`;
}

function img(value, folder, cls) {
  const src = imageSrc(value, folder);
  if (!src) return el("span", { class: `${cls} img-missing` });
  const node = el("img", { src, alt: "", class: cls, loading: "lazy" });
  node.addEventListener("error", () => node.replaceWith(el("span", { class: `${cls} img-missing` })), { once: true });
  return node;
}

const accountName = (acc, index) => acc.name || ui().defaultAccountName(index + 1);
const sharedFruit = () => safeGet(SHARED_STORAGE_KEY) === "1";

/* ---------- what a tree unlocks ---------- */

// Plusterins grouped by the Livly whose Neobelmin they need
const plusterinsByBase = {};
for (const [id, l] of Object.entries(livlies)) {
  if (l.base) (plusterinsByBase[l.base] = plusterinsByBase[l.base] || []).push(id);
}

/** Every Livly that uses this tree's fruit, plus the Plusterins built on them. */
function livliesOf(treeId) {
  const out = [];
  for (const id of trees[treeId].livlies || []) {
    if (!livlies[id]) continue;
    out.push(id);
    if (livlies[id].potion !== "plusterin") out.push(...(plusterinsByBase[id] || []));
  }
  return [...new Set(out)];
}

/** Trees still missing to make this Livly (its recipe, and its base Neobelmin's recipe). */
function missingTrees(livlyId, pool) {
  const need = new Set();
  const seen = new Set();
  (function walk(id) {
    const l = livlies[id];
    if (!l || seen.has(id)) return;
    seen.add(id);
    for (const r of l.recipe || []) if (!pool.has(r.tree)) need.add(r.tree);
    if (l.base) walk(l.base);
  })(livlyId);
  return need.size;
}

/** [{ id, need }] for each Livly, as if this tree were added to the pool. need 0 = could make it. */
function unlocks(treeId, pool) {
  const withTree = new Set(pool).add(treeId);
  return livliesOf(treeId).map((id) => ({ id, need: missingTrees(id, withTree) }));
}

/** Trees counted as available for an account (all accounts' trees when fruit is shared). */
function poolFor(acc, accounts) {
  return sharedFruit() ? new Set(accounts.flatMap((a) => a.trees)) : new Set(acc.trees);
}

/** A Livly picture with its potion colour, a P badge for Plusterins, and ✓ / +N. */
function livlyChip(u, withName) {
  const l = livlies[u.id];
  const t = ui();
  const chip = el("div", {
    class: `wl-livly type-${l.potion}`,
    title: `${tr(l.name)}\n${u.need ? t.livlyNeed(u.need) : t.livlyCan}`,
  },
    l.potion === "plusterin" ? el("span", { class: "wl-p" }, "P") : null,
    img(l.image, "livlies", "wl-livly-img"),
    u.need ? el("i", { class: "wl-need" }, `+${u.need}`) : el("i", { class: "wl-can" }, "✓"));
  return withName ? el("div", { class: "wl-livly-named" }, chip, el("small", {}, tr(l.name))) : chip;
}

/* ---------- header, tabs, key ---------- */

function renderChrome() {
  const t = ui();
  document.documentElement.lang = lang;
  document.title = `${t.wishTitle} · ${t.appName}`;
  LivlyNav.render("wishlist", lang, (code) => { lang = code; store(LANG_STORAGE_KEY, code); render(); });
  $("wish-title").textContent = t.wishTitle;
  $("wish-tabs").replaceChildren(...TABS.map((code) => el("button", {
    type: "button",
    class: code === tab ? "active" : null,
    "aria-pressed": String(code === tab),
    onclick: () => {
      if (code === tab) return;
      tab = code;
      store(TAB_STORAGE_KEY, code);
      const url = new URL(location.href);
      url.searchParams.set("tab", code);
      history.replaceState(null, "", url);
      render();
    },
  }, t.wishTabs[code])));
  $("wish-key").replaceChildren(
    el("span", {}, el("i", { class: "wl-can" }, "✓"), t.wishKeyCan),
    el("span", {}, el("i", { class: "wl-need" }, "+1"), t.wishKeyNeed));
}

/* ---------- My wishlist ---------- */

function renderWishCard(acc, index, treeId, accounts) {
  const t = ui();
  const tree = trees[treeId];
  const u = unlocks(treeId, poolFor(acc, accounts));
  return el("article", { class: "wish-card" },
    el("span", { class: "wish-badge", "aria-hidden": "true" }, "★"),
    el("button", {
      type: "button", class: "wish-remove", title: t.removeWish, "aria-label": t.removeWish,
      onclick: () => { LivlyStore.toggleWish(acc.id, treeId); render(); },
    }, "×"),
    tree.banner ? el("div", { class: "wish-banner", style: `background-image:url("${imageSrc(tree.banner, "banners")}")`, title: tr(tree.source) })
      : el("div", { class: "wish-banner text" }, tr(tree.source)),
    el("div", { class: "wish-name", title: `${tr(tree.name)}\n${t.fruit}: ${tr(tree.fruit)}` }, tr(tree.name)),
    el("div", { class: "wish-body" },
      img(tree.image, "trees", "wish-tree"),
      el("div", { class: "wish-livlies" }, u.map((x) => livlyChip(x, false)))),
    el("div", { class: "wish-foot" },
      el("span", {}, t.readyToMake(u.filter((x) => !x.need).length)),
      el("button", {
        type: "button", class: "btn got-it", title: t.gotItHint,
        onclick: () => { LivlyStore.gotIt(acc.id, treeId); render(); },
      }, t.gotIt)));
}

function renderMine(accounts) {
  const t = ui();
  return accounts.map((acc, i) => {
    const wished = acc.wishlist.filter((id) => trees[id]);
    return el("section", { class: "wish-account" },
      el("div", { class: "wish-account-header" },
        el("h2", {}, accountName(acc, i)),
        el("span", {}, t.wishSummary(wished.length, acc.trees.length))),
      wished.length
        ? el("div", { class: "wish-grid" }, wished.map((id) => renderWishCard(acc, i, id, accounts)))
        : el("p", { class: "wish-empty" }, t.wishEmpty));
  });
}

/* ---------- Find trees ---------- */

/** Text used by the search box: tree, fruit, gacha and Livly names in both languages. */
const searchCache = {};
function searchText(treeId) {
  if (!searchCache[treeId]) {
    const tree = trees[treeId];
    const names = [tree.name, tree.fruit, tree.source, ...livliesOf(treeId).map((id) => livlies[id].name)];
    searchCache[treeId] = names.flatMap((v) => [v?.ja, v?.en]).join(" ").toLowerCase();
  }
  return searchCache[treeId];
}

function renderWishPills(treeId, accounts, row) {
  const t = ui();
  return accounts.map((acc, i) => {
    const name = accountName(acc, i);
    if (acc.trees.includes(treeId)) {
      return el("span", { class: "wish-pill owned", title: t.ownedOn(name) }, `✓ ${name}`);
    }
    const on = acc.wishlist.includes(treeId);
    return el("button", {
      type: "button",
      class: `wish-pill${on ? " on" : ""}`,
      "aria-pressed": String(on),
      title: on ? t.wishOn(name) : t.wishOff(name),
      onclick: () => {
        LivlyStore.toggleWish(acc.id, treeId);
        const fresh = LivlyStore.list();
        row.querySelector(".wish-pills").replaceChildren(...renderWishPills(treeId, fresh, row));
      },
    }, `${on ? "★" : "☆"} ${name}`);
  });
}

function renderFindRow(treeId, accounts, pool) {
  const tree = trees[treeId];
  const u = unlocks(treeId, pool);
  const row = el("div", { class: "find-row" });
  row.append(
    img(tree.image, "trees", "find-tree"),
    el("div", { class: "find-name" },
      el("b", {}, tr(tree.name)),
      el("small", {}, `${tr(tree.fruit)} · ${tr(tree.source)}`)),
    el("div", { class: "find-livlies" }, u.map((x) => livlyChip(x, true))),
    el("div", { class: "wish-pills" }, renderWishPills(treeId, accounts, row)));
  return row;
}

function renderFind(accounts) {
  const t = ui();
  const missing = $("missing-from").value || ALL;
  const target = accounts.find((a) => a.id === missing);
  const owners = target ? new Set(target.trees) : new Set(accounts.flatMap((a) => a.trees));
  const pool = target ? poolFor(target, accounts) : owners;
  const q = $("find-search").value.trim().toLowerCase();
  const onlyUseful = $("only-useful").checked;

  const ids = treeIds.filter((id) => !owners.has(id) &&
    (!q || searchText(id).includes(q)) &&
    (!onlyUseful || unlocks(id, pool).some((x) => !x.need)));
  $("find-count").textContent = t.treeCountShort(ids.length);

  if (!ids.length) return [el("p", { class: "wish-empty" }, t.noResults)];
  return [
    el("div", { class: "find-head" },
      el("span"), el("span", {}, t.colTree), el("span", {}, t.colLivlies), el("span", {}, t.colWish)),
    el("div", { class: "find-rows" }, ids.map((id) => renderFindRow(id, accounts, pool))),
  ];
}

function renderFilters(accounts) {
  const t = ui();
  const select = $("missing-from");
  const current = select.value;
  select.replaceChildren(
    el("option", { value: ALL }, t.allAccounts),
    ...accounts.map((acc, i) => el("option", { value: acc.id }, accountName(acc, i))));
  select.value = accounts.some((a) => a.id === current) ? current : ALL;
  $("missing-label").textContent = t.missingFrom;
  $("find-search").placeholder = t.searchWish;
  $("only-useful-label").textContent = t.onlyUseful;
}

/* ---------- page ---------- */

function render() {
  renderChrome();
  const content = $("wish-content");
  const t = ui();
  if (!treeIds.length) {
    content.replaceChildren(el("div", { class: "error-box" }, t.missingFiles("data/trees.js, data/livlies.js")));
    return;
  }
  if (!LivlyStore.available()) {
    content.replaceChildren(el("div", { class: "error-box" }, t.noStorage));
    return;
  }
  const accounts = LivlyStore.list();
  $("find-filters").hidden = tab !== "find" || !accounts.length;
  if (!accounts.length) {
    content.replaceChildren(el("p", { class: "wish-empty" },
      t.wishNoAccounts, " ", el("a", { href: "index.html" }, t.navViewer)));
    return;
  }
  if (tab === "find") {
    renderFilters(accounts);
    content.replaceChildren(...renderFind(accounts));
  } else {
    content.replaceChildren(...renderMine(accounts));
  }
}

render();
$("missing-from").addEventListener("change", render);
$("only-useful").addEventListener("change", render);
let searchTimer = null;
$("find-search").addEventListener("input", () => { clearTimeout(searchTimer); searchTimer = setTimeout(render, 150); });
// Accounts changed in another tab (Tree Viewer or Checklist)
window.addEventListener("storage", (e) => {
  if (e.key === "livlyTreeTracker.accounts" || e.key === SHARED_STORAGE_KEY) render();
});
