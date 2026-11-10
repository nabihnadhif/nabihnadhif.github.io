(() => {
  function t(key) {
    return window.SiriusI18n ? window.SiriusI18n.t(key) : key;
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const statusEl = document.getElementById("form-status");
    const submitBtn = form.querySelector('button[type="submit"]');
    const fallbackEmail = form.getAttribute("data-fallback-email") || "contact@siriusds.fr";

    function setStatus(type, message, mailtoUrl = "") {
      statusEl.className = `form-status is-${type}`;
      statusEl.textContent = "";

      const p = document.createElement("p");
      p.textContent = message;
      statusEl.appendChild(p);

      if (mailtoUrl) {
        const link = document.createElement("a");
        link.href = mailtoUrl;
        link.className = "btn btn-secondary btn-sm";
        link.style.marginTop = "0.65rem";
        link.textContent = t("contact.form.mailtoBtn");
        statusEl.appendChild(link);
      }
    }

    function clearFieldErrors() {
      form.querySelectorAll("[aria-invalid]").forEach((el) => {
        el.removeAttribute("aria-invalid");
      });
    }

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      clearFieldErrors();

      // Honeypot check (silent ignore for automated bots)
      const honeypot = form.querySelector('input[name="website"]');
      if (honeypot && honeypot.value.trim() !== "") {
        setStatus("success", t("contact.form.success"));
        form.reset();
        return;
      }

      const nameEl = form.elements.namedItem("name");
      const emailEl = form.elements.namedItem("email");
      const companyEl = form.elements.namedItem("company");
      const serviceEl = form.elements.namedItem("service");
      const budgetEl = form.elements.namedItem("budget");
      const messageEl = form.elements.namedItem("message");
      const consentEl = form.elements.namedItem("consent");

      const name = nameEl.value.trim();
      const email = emailEl.value.trim();
      const company = companyEl.value.trim();
      const service = serviceEl.options[serviceEl.selectedIndex]?.textContent?.trim() || serviceEl.value;
      const budget = budgetEl.options[budgetEl.selectedIndex]?.textContent?.trim() || budgetEl.value;
      const message = messageEl.value.trim();

      let hasError = false;
      if (!name) {
        nameEl.setAttribute("aria-invalid", "true");
        hasError = true;
      }
      if (!email) {
        emailEl.setAttribute("aria-invalid", "true");
        hasError = true;
      }
      if (!message) {
        messageEl.setAttribute("aria-invalid", "true");
        hasError = true;
      }
      if (!consentEl.checked) {
        consentEl.setAttribute("aria-invalid", "true");
        hasError = true;
      }

      if (hasError) {
        setStatus("error", t("contact.form.errRequired"));
        return;
      }

      if (!isValidEmail(email)) {
        emailEl.setAttribute("aria-invalid", "true");
        setStatus("error", t("contact.form.errEmail"));
        return;
      }

      const endpoint = (form.getAttribute("data-form-endpoint") || "").trim();
      const isConfigured =
        endpoint !== "" &&
        !endpoint.includes("YOUR_FORM_ID") &&
        !endpoint.includes("YOUR_ACCESS_KEY");

      const mailSubject = encodeURIComponent(
        `[SIRIUS Website] ${service}${company ? ` — ${company}` : ""}`
      );
      const mailBody = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nCompany: ${company || "-"}\nService: ${service}\nBudget: ${budget}\n\nMessage:\n${message}`
      );
      const mailtoUrl = `mailto:${fallbackEmail}?subject=${mailSubject}&body=${mailBody}`;

      if (!isConfigured) {
        setStatus("warning", t("contact.form.fallback"), mailtoUrl);
        return;
      }

      const originalBtnText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = t("contact.form.sending");

      try {
        const payload = {
          name,
          email,
          company,
          service,
          budget,
          message
        };

        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        setStatus("success", t("contact.form.success"));
        form.reset();
      } catch {
        setStatus("error", t("contact.form.errorNetwork"), mailtoUrl);
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }
    });
  }

  document.addEventListener("DOMContentLoaded", initContactForm);
})();

