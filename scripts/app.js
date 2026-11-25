/* =========================================================
 * Livly Tree Tracker (Tree Viewer page)
 * Reads window.LIVLY_DATA (filled by data/*.js) and renders
 * one tree grid per account, in Japanese or English.
 * No server needed.
 * ========================================================= */

const DATA_FILES = {
  trees: "data/trees.js",
  livlies: "data/livlies.js",
  accounts: "data/accounts.js",
};

// Local image folders (used when an image field is a filename, not a URL)
const ASSET_DIRS = {
  banner: "assets/banners",
  tree: "assets/trees",
  livly: "assets/livlies",
  icon: "assets/icons",
};


const LANGS = ["ja", "en"];
const LANG_STORAGE_KEY = "livlyTreeViewer.lang";

// Card layouts. "compact" is the default; the last choice is remembered.
// Ordered from biggest cards to smallest.
const VIEWS = ["large", "compact", "tiles", "columns"];
const DEFAULT_VIEW = "compact";
const VIEW_STORAGE_KEY = "livlyTreeViewer.view";
const SHARED_STORAGE_KEY = "livlyTreeViewer.sharedFruit";

/* ---------- language ---------- */

/** ?lang=en in the URL wins, then the last choice, then the browser language. */
function pickLanguage() {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  if (LANGS.includes(fromUrl)) return fromUrl;
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch (e) { /* storage can be unavailable; ignore */ }
  return (navigator.language || "").toLowerCase().startsWith("ja") ? "ja" : "en";
}

function saveLanguage(lang) {
  try { localStorage.setItem(LANG_STORAGE_KEY, lang); } catch (e) { /* ignore */ }
}

let lang = pickLanguage();
let view = pickView();
let sharedFruit = pickShared();

/** "Share fruit across accounts": ?shared=1 / ?shared=0 in the URL wins, then the last choice. Off by default. */
function pickShared() {
  const fromUrl = new URLSearchParams(location.search).get("shared");
  if (fromUrl === "1" || fromUrl === "0") return fromUrl === "1";
  try { return localStorage.getItem(SHARED_STORAGE_KEY) === "1"; } catch (e) { return false; }
}

/** ?view=tiles in the URL wins, then the last choice, then the default. */
function pickView() {
  const fromUrl = new URLSearchParams(location.search).get("view");
  if (VIEWS.includes(fromUrl)) return fromUrl;
  try {
    const saved = localStorage.getItem(VIEW_STORAGE_KEY);
    if (VIEWS.includes(saved)) return saved;
  } catch (e) { /* ignore */ }
  return DEFAULT_VIEW;
}
const ui = () => window.LIVLY_I18N[lang];

/** Picks the current language from a { ja, en } value (falls back to the other one). */
function tr(value) {
  if (value == null) return "";
  if (typeof value === "string") return value;
  return value[lang] || value.ja || value.en || "";
}

/* ---------- helpers ---------- */

/** "https://..." stays as-is; "foo.png" becomes "assets/<kind>/foo.png". */
function resolveImage(value, kind) {
  if (!value) return null;
  if (/^(https?:)?\/\//.test(value) || value.startsWith("data:")) return value;
  return `${ASSET_DIRS[kind]}/${value}`;
}

/** Tiny DOM builder: el("div", {class: "x"}, child1, "text", ...) */
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

function placeholder(text) {
  return el("div", { class: "placeholder" }, text);
}

/** <img> that swaps itself for a fallback element if it fails to load. */
function imgOrFallback(src, alt, className, makeFallback) {
  if (!src) return makeFallback();
  const img = el("img", { src, alt, class: className, loading: "lazy" });
  img.addEventListener("error", () => img.replaceWith(makeFallback()), { once: true });
  return img;
}

/* ---------- text for hovers ---------- */

function recipeText(livly, data) {
  const parts = (livly.recipe || []).map((r) => {
    const fruit = tr(data.trees[r.tree]?.fruit) || r.tree;
    return `${fruit}×${r.count}`;
  });
  if (livly.base) {
    const baseName = tr(data.livlies[livly.base]?.name) || livly.base;
    parts.unshift(ui().baseNeobelmin(baseName));
  }
  return parts.join(" + ");
}

function livlyTooltip(livly, data) {
  return `${tr(livly.name)}\n${ui().potion[livly.potion] || ""}: ${recipeText(livly, data)}`;
}

/** Tree + main Livly + any other Livlies, for small views with one hover target. */
function fullTooltip(tree, data) {
  const livlies = (tree.livlies || []).map((id) => data.livlies[id]).filter(Boolean);
  return [treeTooltip(tree), ...livlies.map((l) => livlyTooltip(l, data))].join("\n\n");
}

function treeTooltip(tree) {
  return [
    tr(tree.name),
    tree.fruit && `${ui().fruit}: ${tr(tree.fruit)}`,
    tree.source && `${ui().source}: ${tr(tree.source)}`,
  ].filter(Boolean).join("\n");
}

/* Simple hover texts (Large cards + Compact):
 *   Livly  -> its name
 *   Banner -> the gacha name
 *   Tree   -> tree name + fruit name */
const hoverLivly = (livly) => tr(livly.name);
const hoverBanner = (tree) => tr(tree.source) || tr(tree.name);
const hoverTree = (tree) =>
  [tr(tree.name), tree.fruit && `${ui().fruit}: ${tr(tree.fruit)}`].filter(Boolean).join("\n");

/* ---------- "+N" tooltip: every Livly this tree's fruit goes into ----------
 * One row per potion chain: a Neobelmin / Mix / Collab that uses the fruit,
 * followed by the Plusterins made from that Neobelmin. Each recipe tree is
 * checked against the account the card belongs to.                        */

const plusterinCache = new Map();
/** Plusterin ids whose base Neobelmin is baseId. */
function plusterinsOf(baseId, data) {
  if (!plusterinCache.has(data)) {
    const byBase = new Map();
    for (const [id, l] of Object.entries(data.livlies)) {
      if (l.base) byBase.set(l.base, [...(byBase.get(l.base) || []), id]);
    }
    plusterinCache.set(data, byBase);
  }
  return plusterinCache.get(data).get(baseId) || [];
}

/** Rows of { id, plus: [plusterin ids] } for everything that uses this tree's fruit. */
function potionChains(tree, data) {
  return (tree.livlies || []).filter((id) => data.livlies[id]).map((id) => ({
    id,
    plus: data.livlies[id].potion === "plusterin" ? [] : plusterinsOf(id, data),
  }));
}

/** How many Livlies the tooltip lists besides the main one. */
function extraCount(tree, data) {
  return potionChains(tree, data).reduce((n, row) => n + 1 + row.plus.length, 0) - 1;
}

/*
 * Ownership passed to cards and tooltips:
 *   own  : trees this account owns
 *   pool : trees that count as available (= own, or every account's trees when fruit is shared)
 */
function treeState(treeId, ownership) {
  if (ownership.own.has(treeId)) return "owned";      // this account
  if (ownership.pool.has(treeId)) return "other";     // another account (shared fruit)
  return "missing";
}

/** Can it be made: every recipe tree is available, and the base Neobelmin can be made. */
function canMake(id, data, ownership, seen = new Set()) {
  const l = data.livlies[id];
  if (!l || seen.has(id)) return false;
  seen.add(id);
  return (l.recipe || []).every((r) => ownership.pool.has(r.tree)) &&
    (!l.base || canMake(l.base, data, ownership, seen));
}

/** The part of a Plusterin's name after its base name, e.g. "P-4". */
function variantLabel(l, data) {
  const base = l.base && data.livlies[l.base];
  const full = tr(l.name);
  return (base && full.replace(tr(base.name), "").trim()) || full;
}

function tipImg(src) {
  return imgOrFallback(resolveImage(src, "livly"), "", "", () => el("span", { class: "lt-ph" }));
}

function buildIngredientTip(tree, data, ownership) {
  const t = ui();
  const rows = potionChains(tree, data);
  const mainId = (tree.livlies || [])[0];
  const box = el("div", { class: "livly-tip", role: "tooltip" },
    el("p", { class: "lt-title" }, t.tipTitle(extraCount(tree, data))));

  for (const row of rows) {
    const l = data.livlies[row.id];
    const ok = canMake(row.id, data, ownership);
    const recipe = (l.recipe || []).map((r) => {
      const rt = data.trees[r.tree];
      return el("span", { class: `lt-ing ${treeState(r.tree, ownership)}` },
        el("span", { class: "lt-ing-pic" }, tipImg(rt && rt.image)), `×${r.count}`);
    });

    const chain = el("div", { class: `lt-chain${ok ? "" : " cannot"}` },
      el("div", { class: `lt-pic type-${l.potion}` }, tipImg(l.image)),
      el("div", {},
        el("div", { class: "lt-name-line" },
          el("span", { class: "lt-name" }, tr(l.name)),
          el("span", { class: `lt-pill type-${l.potion}` }, t.potion[l.potion]),
          row.id === mainId ? el("span", { class: "lt-main" }, t.mainTag) : null,
          el("span", { class: `lt-status ${ok ? "ok" : "no"}` }, ok ? t.canMake : t.missingTrees)),
        el("div", { class: "lt-recipe" }, recipe)));

    if (row.plus.length) {
      chain.append(el("div", { class: "lt-plus" },
        el("span", { class: "lt-arrow" }, "→"),
        row.plus.map((pid) => {
          const p = data.livlies[pid];
          const extraTreeId = (p.recipe || [])[0]?.tree;
          const extraTree = data.trees[extraTreeId];
          const pok = canMake(pid, data, ownership);
          return el("div", { class: `lt-p ${pok ? "ok" : "no"} ${pok && treeState(extraTreeId, ownership) === "other" ? "other" : ""}` },
            el("div", { class: "lt-p-pic" }, tipImg(p.image)),
            variantLabel(p, data),
            extraTree ? el("div", { class: "lt-p-tree" }, tipImg(extraTree.image)) : null);
        })));
    }
    box.append(chain);
  }
  // Key: the actual check badges, not colour names
  box.append(el("div", { class: "lt-legend" },
    el("span", { class: "lt-key" }, el("span", { class: "lt-check owned" }, "✓"), t.keyThisAccount),
    ownership.shared
      ? el("span", { class: "lt-key" }, el("span", { class: "lt-check other" }, "✓"), t.keyOtherAccount)
      : null));
  return box;
}

/** The "+N" chip; shows the tooltip on hover, keyboard focus, or tap. */
// Only one tooltip is open at a time; these close it from anywhere.
let closeOpenTip = null;
const TIP_CLOSE_DELAY = 150;   // ms — time to move the mouse from the chip onto the tooltip
const TIP_GAP = 6;             // px between the chip and the tooltip
document.addEventListener("click", () => closeOpenTip && closeOpenTip());
window.addEventListener("scroll", () => closeOpenTip && closeOpenTip(), { passive: true });

function extraChip(tree, data, ownership, className) {
  const n = extraCount(tree, data);
  if (n <= 0) return null;
  const chip = el("button", { type: "button", class: className, "aria-label": ui().tipTitle(n) }, `+${n}`);
  let tip = null;
  let closeTimer = null;

  const cancelClose = () => { clearTimeout(closeTimer); closeTimer = null; };
  const closeSoon = () => { cancelClose(); closeTimer = setTimeout(hide, TIP_CLOSE_DELAY); };
  const hide = () => {
    cancelClose();
    if (tip) {
      // Play the quick fade-out (see .livly-tip.leaving in style.css), then remove it
      const leaving = tip;
      tip = null;
      leaving.classList.add("leaving");
      const remove = () => leaving.remove();
      leaving.addEventListener("animationend", remove, { once: true });
      setTimeout(remove, 300);   // fallback if animations are turned off
    }
    if (closeOpenTip === hide) closeOpenTip = null;
  };

  const show = () => {
    cancelClose();
    if (tip) return;
    if (closeOpenTip) closeOpenTip();          // close any other open tooltip
    closeOpenTip = hide;
    tip = buildIngredientTip(tree, data, ownership);
    // The mouse can move onto the tooltip; it stays open while the mouse is over it
    tip.addEventListener("mouseenter", cancelClose);
    tip.addEventListener("mouseleave", closeSoon);
    tip.addEventListener("click", (e) => e.stopPropagation());
    document.body.append(tip);
    // Place to the right of the chip, flipping left / up when it would leave the window
    const r = chip.getBoundingClientRect();
    const w = tip.offsetWidth, h = tip.offsetHeight, gap = TIP_GAP, edge = 10;
    let left = r.right + gap;
    if (left + w > innerWidth - edge) left = Math.max(edge, r.left - gap - w);
    const top = Math.max(edge, Math.min(r.top - 12, innerHeight - h - edge));
    tip.style.left = `${left}px`;
    tip.style.top = `${top}px`;
    // Bounce in from the chip's side (right of the chip -> grow from the left edge, and vice versa)
    const side = left >= r.right ? "left" : "right";
    tip.style.setProperty("--tip-origin", `${side} ${Math.max(0, r.top + r.height / 2 - top)}px`);
  };
  chip.addEventListener("mouseenter", show);
  chip.addEventListener("mouseleave", closeSoon);
  chip.addEventListener("focus", show);
  chip.addEventListener("blur", closeSoon);
  // Tap / click opens it (touch screens have no hover); clicking anywhere else closes it
  chip.addEventListener("click", (e) => { e.preventDefault(); e.stopPropagation(); show(); });
  return chip;
}

/* ---------- rendering ---------- */

function renderBanner(tree) {
  const textBanner = () =>
    el("div", { class: "banner-text" }, tr(tree.name), tree.source ? el("small", {}, tr(tree.source)) : null);

  return el("div", { class: "banner", title: hoverBanner(tree) },
    imgOrFallback(resolveImage(tree.banner, "banner"), hoverBanner(tree), "", textBanner));
}

function renderLivlySlot(tree, data, ownership) {
  const [mainId] = tree.livlies || [];
  const main = data.livlies[mainId];
  const slot = el("div", { class: "livly-slot" });

  if (!main) {
    slot.append(placeholder("Livly"));
    return slot;
  }

  const img = imgOrFallback(resolveImage(main.image, "livly"), tr(main.name), "livly-img",
    () => placeholder(tr(main.name)));
  // Hover: Livly name — set on the picture only, so it doesn't pop up over the "+N" tooltip
  slot.append(el("span", { class: "livly-pic", title: hoverLivly(main) },
    main.page ? el("a", { href: main.page, target: "_blank", rel: "noopener" }, img) : img));

  // Plusterin badge
  if (main.potion === "plusterin") {
    slot.append(el("div", {
      class: "plusterin-badge",
      title: hoverLivly(main),
    }, "P"));
  }

  // Other Livlies this tree's fruit goes into: "+N" chip with the ingredient tooltip
  const chip = extraChip(tree, data, ownership, "more-chip");
  if (chip) slot.append(chip);   // no chip when nothing else uses this fruit
  return slot;
}

function renderTreeCard(treeId, data, ownership) {
  const tree = data.trees[treeId];
  if (!tree) {
    return el("article", { class: "tree-card unknown" }, ui().unknownTree(treeId));
  }

  const main = data.livlies[(tree.livlies || [])[0]];
  const type = main?.potion || "neobelmin";

  return el("article", { class: `tree-card type-${type}` },
    renderBanner(tree),
    el("div", { class: "card-body" },
      renderLivlySlot(tree, data, ownership),
      // Hover info: tree name, fruit and where it comes from
      el("div", { class: "tree-slot", title: hoverTree(tree) },
        imgOrFallback(resolveImage(tree.image, "tree"), tr(tree.name), "", () => placeholder("Tree")))
    )
  );
}

/** A · Compact card: small banner on top, Livly + tree underneath. */
function renderCompactCard(treeId, data, ownership) {
  const tree = data.trees[treeId];
  if (!tree) return el("article", { class: "compact-card unknown" }, ui().unknownTree(treeId));

  const main = data.livlies[(tree.livlies || [])[0]];
  const type = main?.potion || "neobelmin";

  // Hover: Livly name — set on the picture only, so it doesn't pop up over the "+N" tooltip
  const livly = el("div", { class: "cc-livly" },
    el("span", { class: "livly-pic", title: main ? hoverLivly(main) : null },
      main ? imgOrFallback(resolveImage(main.image, "livly"), tr(main.name), "", () => placeholder("")) : placeholder("")));
  if (main?.potion === "plusterin") {
    livly.append(el("div", { class: "cc-badge", title: hoverLivly(main) }, "P"));
  }
  // Other Livlies this tree's fruit goes into: "+N" chip with the ingredient tooltip
  const chip = extraChip(tree, data, ownership, "cc-more");
  if (chip) livly.append(chip);   // no chip when nothing else uses this fruit

  return el("article", { class: `compact-card type-${type}` },
    el("div", { class: "cc-banner", title: hoverBanner(tree) },
      imgOrFallback(resolveImage(tree.banner, "banner"), hoverBanner(tree), "",
        () => el("span", {}, tr(tree.source) || tr(tree.name)))),
    el("div", { class: "cc-body" },
      livly,
      el("div", { class: "cc-tree", title: hoverTree(tree) },
        imgOrFallback(resolveImage(tree.image, "tree"), tr(tree.name), "", () => placeholder("")))));
}

/** B · Tile: the tree, with its Livly in a circle on the corner. */
function renderTile(treeId, data) {
  const tree = data.trees[treeId];
  if (!tree) return el("article", { class: "tree-tile-card unknown", title: ui().unknownTree(treeId) }, "?");

  const main = data.livlies[(tree.livlies || [])[0]];
  const type = main?.potion || "neobelmin";
  return el("article", { class: `tree-tile-card type-${type}`, title: fullTooltip(tree, data) },
    imgOrFallback(resolveImage(tree.image, "tree"), tr(tree.name), "", () => placeholder("")),
    main ? el("div", { class: "tt-livly" },
      imgOrFallback(resolveImage(main.image, "livly"), tr(main.name), "", () => placeholder(""))) : null);
}

const CARD_RENDERERS = {
  large: renderTreeCard,
  compact: renderCompactCard,
  tiles: renderTile,
  columns: renderTile,
};

const GRID_CLASS = {
  large: "tree-grid",
  compact: "compact-grid",
  tiles: "tile-grid",
  columns: "tile-grid",
};

function renderAccount(account, data, allTrees) {
  const owned = [...new Set(account.trees || [])];
  const own = new Set(owned);
  // With shared fruit, every account's trees count as available
  const ownership = { own, pool: sharedFruit ? allTrees : own, shared: sharedFruit };
  const renderCard = CARD_RENDERERS[view];

  return el("section", { class: "account" },
    el("div", { class: "account-header" },
      el("h2", {}, tr(account.name)),
      el("span", { class: "account-count" }, ui().treeCount(owned.length))),
    el("div", { class: GRID_CLASS[view] },
      owned.map((id) => renderCard(id, data, ownership)))
  );
}

/** Top bar, header text, legend and the View switch. */
function renderChrome(data) {
  const t = ui();
  document.documentElement.lang = lang;
  document.title = t.pageTitle;
  LivlyNav.render("viewer", lang, (code) => { lang = code; saveLanguage(code); render(); });
  document.getElementById("subtitle").textContent = t.subtitle;

  const stats = document.getElementById("stats");
  stats.textContent = data
    ? t.stats(Object.keys(data.livlies).length, Object.keys(data.trees).length)
    : "";

  document.getElementById("legend").replaceChildren(
    ...Object.entries(t.potion).map(([type, label]) =>
      el("li", {}, el("span", { class: `dot type-${type}` }), label)));

  // "Share fruit across accounts" switch
  const share = document.getElementById("share-toggle");
  share.checked = sharedFruit;
  share.onchange = () => {
    sharedFruit = share.checked;
    try { localStorage.setItem(SHARED_STORAGE_KEY, sharedFruit ? "1" : "0"); } catch (e) { /* ignore */ }
    render();
  };
  document.getElementById("share-label").textContent = t.shareFruit;
  document.getElementById("share-control").title = t.shareFruitHint;

  document.getElementById("view-label").textContent = t.viewLabel;
  document.getElementById("view-switch").replaceChildren(
    ...VIEWS.map((code) => {
      const btn = el("button", {
        type: "button",
        class: code === view ? "active" : null,
        "aria-pressed": String(code === view),
        title: t.views[code],
        onclick: () => {
          if (code === view) return;
          view = code;
          try { localStorage.setItem(VIEW_STORAGE_KEY, code); } catch (e) { /* ignore */ }
          render();
        },
      });
      btn.innerHTML = LivlyNav.VIEW_ICONS[code];   // size icon (static SVG)
      btn.append(el("span", {}, t.views[code]));
      return btn;
    }));
}

function showError(message) {
  document.getElementById("accounts").replaceChildren(el("div", { class: "error-box" },
    el("strong", {}, ui().loadError), el("br"), message, el("br"), ui().consoleHint));
}

function render() {
  const data = window.LIVLY_DATA || {};
  const missing = Object.keys(DATA_FILES).filter((key) => data[key] == null);

  if (missing.length) {
    // Usually a typo (missing comma/bracket) in that file, which stops it from running.
    renderChrome(null);
    showError(ui().missingFiles(missing.map((k) => DATA_FILES[k]).join(", ")));
    return;
  }

  renderChrome(data);
  try {
    const root = document.getElementById("accounts");
    // "columns" puts every account next to each other
    root.className = view === "columns" ? "accounts-columns" : "";
    root.style.setProperty("--account-count", data.accounts.length);
    const allTrees = new Set(data.accounts.flatMap((acc) => acc.trees || []));
    root.replaceChildren(...data.accounts.map((acc) => renderAccount(acc, data, allTrees)));
  } catch (err) {
    console.error(err);
    showError(err.message);
  }
}

render();
