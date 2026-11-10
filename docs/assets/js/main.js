(() => {
  function initNavigation() {
    const toggleBtn = document.getElementById("nav-toggle");
    const mobileMenu = document.getElementById("nav-mobile");
    if (!toggleBtn || !mobileMenu) return;

    function setOpen(open) {
      mobileMenu.classList.toggle("is-open", open);
      toggleBtn.setAttribute("aria-expanded", String(open));
      const labelKey = open ? "nav.menuClose" : "nav.menuOpen";
      if (window.SiriusI18n) {
        toggleBtn.setAttribute("aria-label", window.SiriusI18n.t(labelKey));
      }
    }

    toggleBtn.addEventListener("click", () => {
      const isOpen = toggleBtn.getAttribute("aria-expanded") === "true";
      setOpen(!isOpen);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && toggleBtn.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggleBtn.focus();
      }
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900 && toggleBtn.getAttribute("aria-expanded") === "true") {
        setOpen(false);
      }
    });
  }

  function initLanguageSwitchers() {
    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang-btn");
        window.SiriusI18n?.setLang(lang);
      });
    });
  }

  function initActiveNav() {
    const rawFile = window.location.pathname.split("/").pop() || "index.html";
    const normalizedCurrent = rawFile.replace(/\.html$/, "") || "index";
    document.querySelectorAll(".nav-link").forEach((link) => {
      const href = link.getAttribute("href") || "";
      const normalizedHref = href.replace(/\.html$/, "");
      if (normalizedHref === normalizedCurrent) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  function initFooterYear() {
    const year = String(new Date().getFullYear());
    document.querySelectorAll("[data-year]").forEach((el) => {
      el.textContent = year;
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    window.SiriusI18n?.applyTranslations();
    initActiveNav();
    initLanguageSwitchers();
    initNavigation();
    initFooterYear();
  });
})();

