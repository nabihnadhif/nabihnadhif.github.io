(() => {
  const copyTimers = new WeakMap();
  let lastCopyAnnouncement = "";

  function initResponsiveNavbar() {
    const header = document.querySelector(".site-header");
    const inner = header?.querySelector(".header-inner");
    const menuBtn = document.getElementById("nav-toggle");
    const menu = document.getElementById("site-menu");
    if (!header || !inner || !menuBtn || !menu) return;

    const supportsPopover = Object.hasOwn(HTMLElement.prototype, "popover");
    let wasWide = null;
    let lastHeaderWidth = 0;

    function syncMenuState(isOpen) {
      menuBtn.setAttribute("aria-expanded", String(isOpen));
      const labelKey = isOpen ? "nav.menuClose" : "nav.menuOpen";
      if (window.SiriusI18n) {
        menuBtn.setAttribute("aria-label", window.SiriusI18n.t(labelKey));
      }
    }

    function measureAndLayout(forceMeasure = false) {
      const currentWidth = header.clientWidth;
      if (!forceMeasure && wasWide === false && currentWidth <= lastHeaderWidth) {
        return;
      }
      lastHeaderWidth = currentWidth;

      const wasOpen = supportsPopover
        ? menu.matches(":popover-open")
        : menu.classList.contains("is-open");

      header.classList.add("is-measuring", "is-wide");
      menu.removeAttribute("popover");
      const fits = inner.scrollWidth <= inner.clientWidth + 1;

      if (fits) {
        menu.classList.remove("is-open");
        syncMenuState(false);
      } else {
        header.classList.remove("is-wide");
        if (supportsPopover) {
          menu.setAttribute("popover", "auto");
          if (wasOpen && !menu.matches(":popover-open")) {
            try {
              menu.showPopover();
            } catch {
              // Ignore if detached
            }
          }
        }
        syncMenuState(wasOpen);
      }

      wasWide = fits;
      requestAnimationFrame(() => {
        header.classList.remove("is-measuring");
      });
    }

    if (supportsPopover) {
      menu.addEventListener("toggle", (event) => {
        syncMenuState(event.newState === "open");
      });
    } else {
      menuBtn.addEventListener("click", () => {
        const isOpen = !menu.classList.contains("is-open");
        menu.classList.toggle("is-open", isOpen);
        syncMenuState(isOpen);
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menu.classList.contains("is-open")) {
          menu.classList.remove("is-open");
          syncMenuState(false);
          menuBtn.focus();
        }
      });

      document.addEventListener("click", (event) => {
        if (
          menu.classList.contains("is-open") &&
          !menu.contains(event.target) &&
          !menuBtn.contains(event.target)
        ) {
          menu.classList.remove("is-open");
          syncMenuState(false);
        }
      });
    }

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (supportsPopover && menu.matches(":popover-open")) {
          menu.hidePopover();
        } else if (menu.classList.contains("is-open")) {
          menu.classList.remove("is-open");
          syncMenuState(false);
        }
      });
    });

    if ("ResizeObserver" in window) {
      const ro = new ResizeObserver(() => measureAndLayout(true));
      ro.observe(header);
      ro.observe(menu);
    } else {
      window.addEventListener("resize", () => measureAndLayout(true));
    }

    window.addEventListener("sirius:langchange", () => measureAndLayout(true));
    measureAndLayout(true);
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
    document.querySelectorAll(".site-menu .nav-link").forEach((link) => {
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

  function reportCopy(button, ok) {
    const tip = button.nextElementSibling;
    clearTimeout(copyTimers.get(button));
    button.removeAttribute("data-copied");
    button.removeAttribute("data-failed");

    let message = window.SiriusI18n
      ? window.SiriusI18n.t(ok ? "copy.copied" : "copy.failed")
      : ok
        ? "Copied"
        : "Copy failed";

    if (message === lastCopyAnnouncement) {
      message += "\u00A0";
    }
    lastCopyAnnouncement = message;

    if (tip) tip.textContent = "";
    void button.offsetWidth;
    button.setAttribute(ok ? "data-copied" : "data-failed", "");
    requestAnimationFrame(() => {
      if (tip) tip.textContent = message;
    });

    copyTimers.set(
      button,
      setTimeout(() => {
        button.removeAttribute("data-copied");
        button.removeAttribute("data-failed");
        if (tip) tip.textContent = "";
      }, 2200)
    );
  }

  async function copyElementText(button, target) {
    const text = target.matches("input, textarea")
      ? target.value
      : (target.innerText || target.textContent || "").trim();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      reportCopy(button, true);
    } catch {
      reportCopy(button, false);
    }
  }

  function initCopyButtons() {
    if ("CommandEvent" in window) {
      document.addEventListener(
        "command",
        (event) => {
          if (event.command === "--copy" && event.target) {
            copyElementText(event.source, event.target);
          }
        },
        true
      );
    } else {
      document.addEventListener("click", (event) => {
        const button = event.target.closest('button[command="--copy"]');
        if (!button) return;
        const target = document.getElementById(button.getAttribute("commandfor") || "");
        if (target) copyElementText(button, target);
      });
    }
  }

  function boot() {
    window.SiriusI18n?.applyTranslations();
    initActiveNav();
    initLanguageSwitchers();
    initResponsiveNavbar();
    initFooterYear();
    initCopyButtons();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
