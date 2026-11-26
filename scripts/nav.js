/* =========================================================
 * Shared page chrome (used by every page):
 *  - Top bar:   [App name]  [My trees] [★ Wishlist]  ......  [🌐 Language ▾]
 *  - Section header under it: icon + title + a two-way switch
 *      My trees  : Overview (index.html) | Edit trees (tree-checklist.html)
 *      Wishlist  : My wishlist | Find trees (tabs inside wishlist.html)
 * Also holds the small size icons used by the View switch.
 * ========================================================= */

window.LivlyNav = (function () {
  // Top-bar sections, and which pages belong to each
  const SECTIONS = [
    { id: "trees", href: "index.html", label: (t) => t.navMyTrees, pages: ["viewer", "picker"] },
    { id: "wishlist", href: "wishlist.html", label: (t) => t.navWishlist, pages: ["wishlist"] },
  ];

  const ICONS = {
    trees: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C7 6 5 9.5 5 13a7 7 0 0 0 6 6.9V22h2v-2.1A7 7 0 0 0 19 13c0-3.5-2-7-7-11z"/></svg>',
    wishlist: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z"/></svg>',
  };

  // Icons for the View switch, from biggest cards to smallest
  const VIEW_ICONS = {
    large: '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="1" y="1" width="6.5" height="14" rx="1.5"/><rect x="8.5" y="1" width="6.5" height="14" rx="1.5"/></svg>',
    compact: '<svg viewBox="0 0 16 16" aria-hidden="true">' +
      [1, 6, 11].map((x) => [1, 8.5].map((y) => `<rect x="${x}" y="${y}" width="4" height="6.5" rx="1"/>`).join("")).join("") + "</svg>",
    tiles: '<svg viewBox="0 0 16 16" aria-hidden="true">' +
      [1, 5, 9, 13].map((x) => [1, 5, 9, 13].map((y) => `<rect x="${x}" y="${y}" width="2.6" height="2.6" rx=".6"/>`).join("")).join("") + "</svg>",
    columns: '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="1" y="1" width="4" height="14" rx="1"/><rect x="6" y="1" width="4" height="14" rx="1"/><rect x="11" y="1" width="4" height="14" rx="1"/></svg>',
  };

  /**
   * Fills <nav id="site-nav"> for the given page.
   * onLanguage(code) is called when the language dropdown changes.
   */
  function render(activePage, lang, onLanguage) {
    const nav = document.getElementById("site-nav");
    const i18n = window.LIVLY_I18N;
    const t = i18n[lang];

    const brand = document.createElement("span");
    brand.className = "nav-brand";
    brand.textContent = t.appName;

    const tabs = document.createElement("div");
    tabs.className = "nav-tabs";
    for (const section of SECTIONS) {
      const a = document.createElement("a");
      a.href = section.href;
      a.textContent = section.label(t);
      if (section.pages.includes(activePage)) {
        a.className = "active";
        a.setAttribute("aria-current", "page");
      }
      tabs.append(a);
    }

    const spacer = document.createElement("span");
    spacer.className = "nav-spacer";

    const select = document.createElement("select");
    select.className = "lang-select";
    select.setAttribute("aria-label", t.languageLabel);
    for (const code of Object.keys(i18n)) {
      const opt = document.createElement("option");
      opt.value = code;
      opt.textContent = `🌐 ${i18n[code].langName}`;
      opt.selected = code === lang;
      select.append(opt);
    }
    select.addEventListener("change", () => onLanguage(select.value));

    nav.replaceChildren(brand, tabs, spacer, select);
  }

  /**
   * Fills a <header class="section-header"> with the section's icon, title and switch.
   *   section: "trees" | "wishlist"
   *   tabs: [{ label, href } or { label, onclick }, ...] with active: true on the current one
   */
  function header(container, section, title, tabs) {
    const h1 = document.createElement("h1");
    const icon = document.createElement("span");
    icon.className = `section-icon section-${section}`;
    icon.innerHTML = ICONS[section];
    h1.append(icon, document.createTextNode(title));

    const sw = document.createElement("div");
    sw.className = "segmented section-switch";
    for (const tab of tabs) {
      const item = document.createElement(tab.href ? "a" : "button");
      if (tab.href) item.href = tab.href; else { item.type = "button"; item.addEventListener("click", tab.onclick); }
      item.textContent = tab.label;
      if (tab.active) {
        item.className = "active";
        item.setAttribute("aria-current", "page");
      }
      sw.append(item);
    }
    container.replaceChildren(h1, sw);
  }

  /** The My trees switch: Overview | Edit trees. extraQuery keeps e.g. ?account=… on the edit link. */
  function treesHeader(container, lang, active, editHref = "tree-checklist.html") {
    const t = window.LIVLY_I18N[lang];
    header(container, "trees", t.navMyTrees, [
      { label: t.tabOverview, href: "index.html", active: active === "viewer" },
      { label: t.tabEdit, href: editHref, active: active === "picker" },
    ]);
  }

  return { render, header, treesHeader, VIEW_ICONS };
})();
