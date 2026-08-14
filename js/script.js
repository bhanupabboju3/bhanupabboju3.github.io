// Bhakti Dhara - shared client script
(function () {
  const STORAGE_KEY = "bhakti-theme";
  const THEMES = [
    { value: "saffron", label: "Saffron", swatch: "#e64d13" },
    { value: "light", label: "Light", swatch: "#fbf6ea" },
    { value: "dark", label: "Dark", swatch: "#0f0c1a" },

  ];

  function applyTheme(t) {
    const root = document.documentElement;
    root.classList.remove("dark", "theme-saffron");
    if (t === "dark") root.classList.add("dark");
    if (t === "saffron") root.classList.add("theme-saffron");
  }
  function getTheme() {
    try { return localStorage.getItem(STORAGE_KEY) || "saffron"; } catch { return "saffron"; }
  }
  function setTheme(t) {
    try { localStorage.setItem(STORAGE_KEY, t); } catch {}
    applyTheme(t);
    renderThemeBtn();
  }
  // Apply immediately on script load (script is at end of body, avoids FOUC well enough)
  applyTheme(getTheme());

  function renderThemeBtn() {
    const btn = document.getElementById("themeBtn");
    if (!btn) return;
    const cur = THEMES.find(t => t.value === getTheme()) || THEMES[2];
    btn.querySelector(".swatch").style.backgroundColor = cur.swatch;
    btn.querySelector(".theme-label").textContent = cur.label;
    const menu = document.getElementById("themeMenu");
    if (menu) {
      menu.querySelectorAll("button").forEach(b => {
        const sel = b.dataset.theme === getTheme();
        b.setAttribute("aria-selected", sel ? "true" : "false");
        const check = b.querySelector(".check");
        if (check) check.style.visibility = sel ? "visible" : "hidden";
      });
    }
  }

  function initThemeSwitch() {
    const btn = document.getElementById("themeBtn");
    const menu = document.getElementById("themeMenu");
    if (!btn || !menu) return;
    // Populate options
    menu.innerHTML = THEMES.map(t => `
      <li><button type="button" data-theme="${t.value}" role="option">
        <span class="swatch" style="background:${t.swatch}"></span>
        <span>${t.label}</span>
        <span class="check" aria-hidden="true">✓</span>
      </button></li>`).join("");
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", menu.classList.contains("open") ? "true" : "false");
    });
    menu.addEventListener("click", (e) => {
      const b = e.target.closest("button[data-theme]");
      if (!b) return;
      setTheme(b.dataset.theme);
      menu.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
    document.addEventListener("click", (e) => {
      if (!menu.contains(e.target) && e.target !== btn) {
        menu.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
    renderThemeBtn();
  }

  // Lyrics page actions
  function initActions() {
    const copyBtn = document.getElementById("copyBtn");
    const printBtn = document.getElementById("printBtn");
    if (copyBtn) {
      copyBtn.addEventListener("click", async () => {
        const url = window.location.href;
        try {
          await navigator.clipboard.writeText(url);
          const labelEl = copyBtn.querySelector(".label");
          const original = labelEl.textContent;
          labelEl.textContent = "Link copied!";
          setTimeout(() => { labelEl.textContent = original; }, 1500);
        } catch {
          alert("Could not copy link to clipboard.");
        }
      });
    }
    if (printBtn) printBtn.addEventListener("click", () => window.print());
  }

  document.addEventListener("DOMContentLoaded", () => {
    initThemeSwitch();
    initActions();
  });
})();
