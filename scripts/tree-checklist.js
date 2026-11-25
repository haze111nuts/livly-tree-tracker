/* =========================================================
 * Tree Checklist (tree-checklist.html)
 * Pick an account at the top, then click the trees it owns.
 * Every click is saved straight away to the accounts kept in this
 * browser (scripts/store.js), so the Tree Viewer shows it too.
 * No server needed.
 * ========================================================= */

const LANGS = ["ja", "en"];
const LANG_STORAGE_KEY = "livlyTreeViewer.lang";              // shared with the viewer
const LAST_ACCOUNT_KEY = "livlyTreeTracker.checklistAccount"; // account picked last time
const NEW_ACCOUNT = "__new__";                                // dropdown value for "+ New account…"

const data = window.LIVLY_DATA || {};
const trees = data.trees || {};
const treeIds = Object.keys(trees);                           // display order (same as the wiki)
const isLocked = (id) => LivlyStore.STARTERS.includes(id);    // starter trees can't be unticked

let lang = pickLanguage();
let accountId = null;
let selected = new Set();
const ui = () => window.LIVLY_I18N[lang];

/* ---------- small helpers ---------- */

function pickLanguage() {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  if (LANGS.includes(fromUrl)) return fromUrl;
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch (e) { /* ignore */ }
  return (navigator.language || "").toLowerCase().startsWith("ja") ? "ja" : "en";
}

function store(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
}

function safeGet(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
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

function accountName(acc) {
  const index = LivlyStore.list().findIndex((a) => a.id === acc.id);
  return acc.name || ui().defaultAccountName(index + 1);
}

/* ---------- which account ---------- */

/** ?account=<id> (from the viewer's "Edit trees") wins, then the last one used, then the first. */
function pickAccount() {
  const accounts = LivlyStore.list();
  const wanted = [new URLSearchParams(location.search).get("account"), safeGet(LAST_ACCOUNT_KEY)];
  const found = wanted.map((id) => accounts.find((a) => a.id === id)).find(Boolean) || accounts[0];
  return found ? found.id : null;
}

function useAccount(id) {
  const acc = id && LivlyStore.get(id);
  accountId = acc ? acc.id : null;
  selected = new Set(acc ? acc.trees : []);
  if (accountId) store(LAST_ACCOUNT_KEY, accountId);
  // Keep the address in step, so a refresh stays on this account
  const url = new URL(location.href);
  if (accountId) url.searchParams.set("account", accountId); else url.searchParams.delete("account");
  history.replaceState(null, "", url);
}

async function createAccount() {
  const t = ui();
  const r = await LivlyDialog.open({
    title: t.addTitle,
    input: { value: "", placeholder: t.namePlaceholder },
    buttons: [{ label: t.cancel }, { label: t.add, value: "ok", primary: true }],
  });
  if (r) {
    const acc = LivlyStore.add(r.text || t.defaultAccountName(LivlyStore.list().length + 1));
    useAccount(acc.id);
  }
  renderAll();
}

/* ---------- saving ---------- */

/** Saves the ticks, keeping the account's existing order and adding new trees at the end. */
function save() {
  const acc = LivlyStore.get(accountId);
  if (!acc) return;
  const kept = acc.trees.filter((id) => selected.has(id));
  const added = treeIds.filter((id) => selected.has(id) && !kept.includes(id));
  LivlyStore.setTrees(accountId, [...kept, ...added]);
  const note = $("saved-note");
  if (note) {
    note.textContent = ui().savedNow;
    note.classList.remove("flash"); void note.offsetWidth; note.classList.add("flash");
  }
}

/* ---------- grid ---------- */

function tooltip(t, id) {
  return [
    `${t.name.ja} / ${t.name.en}`,
    `${ui().fruit}: ${tr(t.fruit)}`,
    `${ui().source}: ${tr(t.source)}`,
    isLocked(id) ? ui().alwaysOwned : null,
  ].filter(Boolean).join("\n");
}

/** Text used by the search box: every name in both languages. */
function searchText(t) {
  return [t.name, t.fruit, t.source].flatMap((v) => [v?.ja, v?.en]).join(" ").toLowerCase();
}

function toggle(id, tile) {
  if (isLocked(id) || !accountId) return;
  if (selected.has(id)) selected.delete(id); else selected.add(id);
  tile.classList.toggle("selected", selected.has(id));
  tile.setAttribute("aria-pressed", String(selected.has(id)));
  save();
  renderPanel(false);
  if ($("selected-only").checked) applyFilter();
}

function renderGrid() {
  $("tree-grid").classList.toggle("disabled", !accountId);
  $("tree-grid").replaceChildren(...treeIds.map((id) => {
    const t = trees[id];
    const on = selected.has(id) || (isLocked(id) && !accountId);
    const tile = el("button", {
      type: "button",
      class: `tree-tile${on ? " selected" : ""}${isLocked(id) ? " locked" : ""}`,
      title: tooltip(t, id),
      "aria-pressed": String(on),
      "aria-label": tr(t.name),
      "data-id": id,
      "data-search": searchText(t),
    });
    // URL as-is; a plain filename is looked up in assets/trees (same rule as the viewer)
    const src = /^(https?:)?\/\//.test(t.image) || String(t.image).startsWith("data:") ? t.image : `assets/trees/${t.image}`;
    const img = el("img", { src, alt: "", loading: "lazy" });
    img.addEventListener("error", () => img.replaceWith(el("span", { class: "tile-fallback" }, tr(t.name))), { once: true });
    tile.append(img, el("span", { class: "check" }, isLocked(id) ? "🔒" : "✓"));
    tile.addEventListener("click", () => toggle(id, tile));
    return tile;
  }));
  applyFilter();
}

function applyFilter() {
  const q = $("search").value.trim().toLowerCase();
  const onlySelected = $("selected-only").checked;
  let visible = 0;
  for (const tile of $("tree-grid").children) {
    const show = (!q || tile.dataset.search.includes(q)) && (!onlySelected || tile.classList.contains("selected"));
    tile.hidden = !show;
    if (show) visible++;
  }
  $("no-results").hidden = visible > 0;
}

/* ---------- account dropdown + right-hand panel ---------- */

function renderAccountSelect() {
  const select = $("account-select");
  select.replaceChildren(
    ...LivlyStore.list().map((acc) => el("option", { value: acc.id }, accountName(acc))),
    el("option", { value: NEW_ACCOUNT }, ui().newAccountOption));
  select.value = accountId || NEW_ACCOUNT;
}

/** full = true redraws the panel; false only updates the tree count (keeps the "Saved" note). */
function renderPanel(full = true) {
  const t = ui();
  const panel = $("account-panel");
  const acc = accountId && LivlyStore.get(accountId);
  if (!acc) {
    panel.replaceChildren(el("div", { class: "panel-empty" },
      el("div", { class: "panel-name" }, t.noAccountTitle),
      el("p", {}, t.noAccountText),
      el("button", { type: "button", class: "btn primary", onclick: createAccount }, t.addAccount)));
    return;
  }
  if (!full && $("panel-count")) {
    $("panel-count").textContent = t.ownedCount(selected.size, treeIds.length);
    return;
  }
  panel.replaceChildren(
    el("div", { class: "panel-name" }, accountName(acc)),
    el("div", { id: "panel-count" }, t.ownedCount(selected.size, treeIds.length)),
    el("div", { id: "saved-note", class: "panel-saved", "aria-live": "polite" }, t.savedNote),
    el("a", { class: "panel-link", href: `index.html#account-${encodeURIComponent(acc.id)}` }, t.viewAccount(accountName(acc))));
}

/* ---------- language + static text ---------- */

function renderText() {
  const t = ui();
  document.documentElement.lang = lang;
  document.title = `${t.pickerTitle} · ${t.appName}`;
  LivlyNav.render("picker", lang, (code) => {
    lang = code; store(LANG_STORAGE_KEY, code);
    renderAll();
  });
  $("intro").textContent = t.pickerIntro;
  $("account-label").textContent = t.accountLabel;
  $("search").placeholder = t.search;
  $("selected-only-label").textContent = t.showSelectedOnly;
  $("reset").textContent = t.reset;
  $("reset").disabled = !accountId;
  $("no-results").textContent = t.noResults;
}

function renderAll() {
  renderText();
  renderAccountSelect();
  renderPanel();
  renderGrid();
}

/* ---------- start ---------- */

function init() {
  if (!treeIds.length) {
    $("tree-grid").replaceChildren(el("div", { class: "error-box" }, ui().missingFiles("data/trees.js")));
    return;
  }
  if (!LivlyStore.available()) {
    renderText();
    $("tree-grid").replaceChildren(el("div", { class: "error-box" }, ui().noStorage));
    return;
  }
  try { localStorage.removeItem("livlyTreeViewer.pickerSelection"); } catch (e) { /* old version's key */ }

  useAccount(pickAccount());
  renderAll();

  $("search").addEventListener("input", applyFilter);
  $("selected-only").addEventListener("change", applyFilter);
  $("account-select").addEventListener("change", (e) => {
    if (e.target.value === NEW_ACCOUNT) { createAccount(); return; }
    useAccount(e.target.value);
    renderAll();
  });
  $("reset").addEventListener("click", async () => {
    if (!accountId || selected.size <= LivlyStore.STARTERS.length) return;
    const t = ui();
    const r = await LivlyDialog.open({
      title: t.resetTitle, message: t.resetText,
      buttons: [{ label: t.cancel }, { label: t.reset, value: "ok", danger: true }],
    });
    if (!r) return;
    selected = new Set(LivlyStore.STARTERS);
    save();
    renderPanel(false);
    renderGrid();
  });

  // Accounts changed in another tab (e.g. renamed or deleted in the viewer)
  window.addEventListener("storage", (e) => {
    if (e.key !== "livlyTreeTracker.accounts") return;
    useAccount(LivlyStore.get(accountId) ? accountId : pickAccount());
    renderAll();
  });
}

init();
