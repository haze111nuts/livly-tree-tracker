/* =========================================================
 * Small pop-up box (shared by both pages), used instead of the
 * browser's own prompt()/confirm() so it matches the page.
 *
 *   const r = await LivlyDialog.open({
 *     title: "Add account", message: "...",
 *     input: { value: "", placeholder: "Account name" },
 *     buttons: [{ label: "Cancel" }, { label: "Add", value: "ok", primary: true }],
 *   });
 *   // r = { value: "ok", text: "typed name" }, or null when cancelled
 * ========================================================= */

window.LivlyDialog = (function () {
  function open({ title, message, input, buttons }) {
    return new Promise((resolve) => {
      const backdrop = document.createElement("div");
      backdrop.className = "dialog-backdrop";
      const box = document.createElement("div");
      box.className = "dialog";
      box.setAttribute("role", "dialog");
      box.setAttribute("aria-modal", "true");

      const h = document.createElement("h3");
      h.textContent = title;
      box.append(h);
      if (message) {
        const p = document.createElement("p");
        p.textContent = message;
        box.append(p);
      }

      let field = null;
      if (input) {
        field = document.createElement("input");
        field.type = "text";
        field.value = input.value || "";
        field.placeholder = input.placeholder || "";
        field.maxLength = 40;
        box.append(field);
      }

      const row = document.createElement("div");
      row.className = "dialog-buttons";
      const close = (value) => {
        document.removeEventListener("keydown", onKey);
        backdrop.remove();
        resolve(value == null ? null : { value, text: field ? field.value.trim() : "" });
      };
      let primary = null;
      for (const b of buttons) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "btn" + (b.primary ? " primary" : "") + (b.danger ? " danger" : "");
        btn.textContent = b.label;
        btn.addEventListener("click", () => close(b.value));
        row.append(btn);
        if (b.primary || b.danger) primary = btn;
      }
      box.append(row);

      function onKey(e) {
        if (e.key === "Escape") close(null);
        if (e.key === "Enter" && field && document.activeElement === field && primary) primary.click();
      }
      document.addEventListener("keydown", onKey);
      backdrop.addEventListener("mousedown", (e) => { if (e.target === backdrop) close(null); });

      backdrop.append(box);
      document.body.append(backdrop);
      (field || primary || row.lastChild).focus();
      if (field) field.select();
    });
  }

  return { open };
})();
