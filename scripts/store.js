/* =========================================================
 * Account storage (shared by both pages).
 * Accounts are saved in this browser's localStorage, so every
 * visitor keeps their own list. Export / import moves it between
 * browsers and devices as a .json file.
 *
 * Saved shape (also the export file's shape):
 *   { "app": "livly-tree-tracker", "version": 1,
 *     "accounts": [ { "id": "...", "name": "Hazy", "trees": ["1001-1-001", ...],
 *                     "wishlist": ["1019-1-001", ...] } ] }
 * "wishlist" = trees the account wants; never includes trees it owns.
 * ========================================================= */

window.LivlyStore = (function () {
  const KEY = "livlyTreeTracker.accounts";
  const APP = "livly-tree-tracker";
  const VERSION = 1;

  // The 3 starter trees every player has and can't discard.
  const STARTERS = ["1001-1-001", "1001-1-003", "1001-1-005"];

  const listeners = [];

  function newId() {
    return "a" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  }

  /** True when this browser lets the page save data (not, e.g., some private modes). */
  function available() {
    try {
      localStorage.setItem(KEY + ".test", "1");
      localStorage.removeItem(KEY + ".test");
      return true;
    } catch (e) { return false; }
  }

  const idList = (value) => (Array.isArray(value) ? value : []).filter((id) => typeof id === "string");

  /** Cleans one account: string name, unique trees, starters always first, wishlist without owned trees. */
  function cleanAccount(acc) {
    const name = typeof acc.name === "string" ? acc.name
      : (acc.name && (acc.name.en || acc.name.ja)) || "";
    const trees = [...new Set([...STARTERS, ...idList(acc.trees)])];
    const owned = new Set(trees);
    const wishlist = [...new Set(idList(acc.wishlist))].filter((id) => !owned.has(id));
    return { id: typeof acc.id === "string" && acc.id ? acc.id : newId(), name: name.trim(), trees, wishlist };
  }

  function list() {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || "null");
      return saved && Array.isArray(saved.accounts) ? saved.accounts.map(cleanAccount) : [];
    } catch (e) { return []; }
  }

  function save(accounts) {
    localStorage.setItem(KEY, JSON.stringify({ app: APP, version: VERSION, accounts }));
    listeners.forEach((fn) => fn());
  }

  function update(id, change) {
    const accounts = list();
    const acc = accounts.find((a) => a.id === id);
    if (!acc) return null;
    change(acc);
    save(accounts);
    return acc;
  }

  return {
    STARTERS,
    available,
    list,
    get: (id) => list().find((a) => a.id === id) || null,

    add(name) {
      const accounts = list();
      const acc = cleanAccount({ name, trees: [] });
      accounts.push(acc);
      save(accounts);
      return acc;
    },
    rename: (id, name) => update(id, (acc) => { acc.name = name.trim(); }),
    remove(id) { save(list().filter((a) => a.id !== id)); },
    /** Owned trees. A tree that becomes owned leaves the wishlist. */
    setTrees: (id, trees) => update(id, (acc) => {
      const clean = cleanAccount({ trees, wishlist: acc.wishlist });
      acc.trees = clean.trees;
      acc.wishlist = clean.wishlist;
    }),

    /** Adds or removes one tree from an account's wishlist (owned trees are ignored). */
    toggleWish: (id, treeId) => update(id, (acc) => {
      if (acc.trees.includes(treeId)) return;
      acc.wishlist = acc.wishlist.includes(treeId)
        ? acc.wishlist.filter((t) => t !== treeId) : [...acc.wishlist, treeId];
    }),

    /** "Got it": moves a wished tree into the owned trees. */
    gotIt: (id, treeId) => update(id, (acc) => {
      if (!acc.trees.includes(treeId)) acc.trees = [...acc.trees, treeId];
      acc.wishlist = acc.wishlist.filter((t) => t !== treeId);
    }),

    /** The object written to the export file. */
    exportData() {
      return { app: APP, version: VERSION, exportedAt: new Date().toISOString(), accounts: list() };
    },

    /**
     * Reads an export file's text. Unknown tree ids are dropped and counted.
     * Throws if the text isn't a tracker file.
     * Returns { accounts, skipped }.
     */
    parseImport(text, knownTrees) {
      const parsed = JSON.parse(text);
      const raw = Array.isArray(parsed) ? parsed : parsed && parsed.accounts;
      if (!Array.isArray(raw) || !raw.length || !raw.every((a) => a && Array.isArray(a.trees))) {
        throw new Error("Not a Livly Tree Tracker file");
      }
      let skipped = 0;
      const accounts = raw.map((a) => {
        const acc = cleanAccount(a);
        for (const key of ["trees", "wishlist"]) {
          const known = acc[key].filter((id) => knownTrees[id]);
          skipped += acc[key].length - known.length;
          acc[key] = known;
        }
        return acc;
      });
      return { accounts, skipped };
    },

    /** mode "replace" swaps everything; "add" appends (with fresh ids). */
    importAccounts(accounts, mode) {
      const incoming = accounts.map((a) => ({ ...a, id: newId() }));
      save(mode === "replace" ? incoming : [...list(), ...incoming]);
    },

    /** fn() runs after any change: on this page, or in another tab of the tool. */
    onChange(fn) {
      listeners.push(fn);
      window.addEventListener("storage", (e) => { if (e.key === KEY) fn(); });
    },

    /** Downloads the export as a .json file. */
    download() {
      const blob = new Blob([JSON.stringify(this.exportData(), null, 2) + "\n"], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `livly-tree-tracker-backup-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.append(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    },
  };
})();
