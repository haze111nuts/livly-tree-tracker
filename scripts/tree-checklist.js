/* =========================================================
 * Tree Checklist (tree-checklist.html)
 * Click the trees an account owns; the "trees": [...] block for
 * data/accounts.js is rebuilt after every click, ready to copy.
 * Uses the same data files as the viewer. No server needed.
 * ========================================================= */

const LANGS = ["ja", "en"];
const LANG_STORAGE_KEY = "livlyTreeViewer.lang";        // shared with the viewer
const SELECTION_STORAGE_KEY = "livlyTreeViewer.pickerSelection";

// The 3 starter trees every player has and can't discard: always selected.
const ALWAYS_OWNED = ["1001-1-001", "1001-1-003", "1001-1-005"];

const data = window.LIVLY_DATA || {};
const trees = data.trees || {};
const treeIds = Object.keys(trees);                      // display + output order

let lang = pickLanguage();
let selected = withStarters(loadSelection());
const ui = () => window.LIVLY_I18N[lang];

/* ---------- small helpers ---------- */

/** A selection set that always includes the starter trees. */
function withStarters(ids) {
  return new Set([...ALWAYS_OWNED.filter((id) => trees[id]), ...ids]);
}

const isLocked = (id) => ALWAYS_OWNED.includes(id);

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

/** Remembers the selection so a refresh doesn't lose your clicks. */
function loadSelection() {
  try {
    const ids = JSON.parse(localStorage.getItem(SELECTION_STORAGE_KEY) || "[]");
    return Array.isArray(ids) ? ids.filter((id) => trees[id]) : [];
  } catch (e) { return []; }
}

function saveSelection() {
  store(SELECTION_STORAGE_KEY, JSON.stringify([...selected]));
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

/* ---------- output text ---------- */

/** Builds the block exactly as it should be pasted into data/accounts.js. */
function buildOutput() {
  const ids = treeIds.filter((id) => selected.has(id));
  if (!ids.length) return '    "trees": []';

  const lines = ids.map((id, i) => {
    const t = trees[id];
    const sep = i < ids.length - 1 ? "," : " ";
    return `      "${id}"${sep} // ${t.name.ja} / ${t.name.en}`;
  });
  return ['    "trees": [', ...lines, "    ]"].join("\n");
}

function updateOutput() {
  $("output").value = buildOutput();
  $("selected-count").textContent = ui().selectedCount(selected.size, treeIds.length);
  $("copy-status").textContent = "";
  saveSelection();
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
  if (isLocked(id)) return;                // starter trees can't be unselected
  if (selected.has(id)) selected.delete(id); else selected.add(id);
  tile.classList.toggle("selected", selected.has(id));
  tile.setAttribute("aria-pressed", String(selected.has(id)));
  updateOutput();
  if ($("selected-only").checked) applyFilter();
}

function renderGrid() {
  $("tree-grid").replaceChildren(...treeIds.map((id) => {
    const t = trees[id];
    const tile = el("button", {
      type: "button",
      class: `tree-tile${selected.has(id) ? " selected" : ""}${isLocked(id) ? " locked" : ""}`,
      title: tooltip(t, id),
      "aria-pressed": String(selected.has(id)),
      "aria-label": tr(t.name),
      "data-id": id,
      "data-search": searchText(t),
    });
    const img = el("img", { src: t.image, alt: "", loading: "lazy" });
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
    const show = (!q || tile.dataset.search.includes(q)) && (!onlySelected || selected.has(tile.dataset.id));
    tile.hidden = !show;
    if (show) visible++;
  }
  $("no-results").hidden = visible > 0;
}

/* ---------- toolbar ---------- */

function renderAccountMenu() {
  const accounts = data.accounts || [];
  $("load-account").replaceChildren(
    el("option", { value: "" }, ui().loadAccount),
    ...accounts.map((acc, i) => el("option", { value: String(i) }, tr(acc.name))));
}

function loadAccount(index) {
  const acc = (data.accounts || [])[index];
  if (!acc) return;
  if (selected.size > ALWAYS_OWNED.length && !confirm(ui().confirmReplace)) return;
  selected = withStarters((acc.trees || []).filter((id) => trees[id]));
  renderGrid();
  updateOutput();
}

async function copyOutput() {
  const text = $("output").value;
  try {
    await navigator.clipboard.writeText(text);
    $("copy-status").textContent = ui().copied;
  } catch (e) {
    // Older/locked-down browsers: fall back to selecting the text and copying it.
    $("output").select();
    const ok = document.execCommand && document.execCommand("copy");
    $("copy-status").textContent = ok ? ui().copied : ui().copyFailed;
  }
}

/* ---------- language + static text ---------- */

function renderText() {
  const t = ui();
  document.documentElement.lang = lang;
  document.title = `${t.pickerTitle} · ${t.appName}`;
  LivlyNav.render("picker", lang, (code) => {
    lang = code; store(LANG_STORAGE_KEY, code);
    renderText(); renderGrid(); updateOutput();
  });
  $("intro").textContent = t.pickerIntro;
  $("search").placeholder = t.search;
  $("selected-only-label").textContent = t.showSelectedOnly;
  $("clear").textContent = t.clear;
  $("copy").textContent = t.copy;
  $("no-results").textContent = t.noResults;
  renderAccountMenu();
}

/* ---------- start ---------- */

function init() {
  if (!treeIds.length) {
    $("tree-grid").replaceChildren(el("div", { class: "error-box" }, ui().missingFiles("data/trees.js")));
    return;
  }
  renderText();
  renderGrid();
  updateOutput();

  $("search").addEventListener("input", applyFilter);
  $("selected-only").addEventListener("change", applyFilter);
  $("load-account").addEventListener("change", (e) => {
    if (e.target.value !== "") loadAccount(Number(e.target.value));
    e.target.value = "";
  });
  $("clear").addEventListener("click", () => {
    if (selected.size <= ALWAYS_OWNED.length || !confirm(ui().confirmClear)) return;
    selected = withStarters([]); renderGrid(); updateOutput();
  });
  $("copy").addEventListener("click", copyOutput);
}

init();
