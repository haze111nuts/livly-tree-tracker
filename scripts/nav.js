/* =========================================================
 * Shared top navigation bar (used by both pages):
 *   [App name]  [Tree Viewer] [Tree Checklist]  ......  [🌐 Language ▾]
 * Also holds the small size icons used by the View switch.
 * ========================================================= */

window.LivlyNav = (function () {
  const PAGES = [
    { id: "viewer", href: "index.html", label: (t) => t.navViewer },
    { id: "picker", href: "tree-checklist.html", label: (t) => t.navPicker },
  ];

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
    for (const page of PAGES) {
      const a = document.createElement("a");
      a.href = page.href;
      a.textContent = page.label(t);
      if (page.id === activePage) {
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

  return { render, VIEW_ICONS };
})();
