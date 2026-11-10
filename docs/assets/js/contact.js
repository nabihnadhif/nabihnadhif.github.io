(() => {
  const VALID_SERVICES = new Set(["web", "cms", "cicd", "ai", "audit"]);
  const VALID_TYPES = new Set(["quote", "audit", "training", "general"]);
  const VALID_ROLES = new Set(["symfony", "java", "frontend", "cicd", "ai", "open"]);

  function t(key) {
    return window.SiriusI18n ? window.SiriusI18n.t(key) : key;
  }

  function getLang() {
    return window.SiriusI18n?.getLang() || "en";
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function getSelectLabel(selectEl) {
    if (!selectEl) return "";
    return selectEl.options[selectEl.selectedIndex]?.textContent?.trim() || selectEl.value;
  }

  function getCheckedValues(container, name) {
    if (!container) return [];
    return Array.from(container.querySelectorAll(`input[name="${name}"]:checked`))
      .map((cb) => {
        const label = container.querySelector(`label[for="${cb.id}"]`);
        return (label?.textContent || cb.value).trim();
      })
      .filter(Boolean);
  }

  function setupFormController({ formId, statusId, buildSubmission, messageErrorKey, consentErrorKey, copyBtnKey, fallbackKey, successKey }) {
    const form = document.getElementById(formId);
    if (!form) return null;

    const statusEl = document.getElementById(statusId);
    const submitBtn = form.querySelector('button[type="submit"]');
    const fallbackEmail = form.getAttribute("data-fallback-email") || "contact@siriusds.fr";

    const nameEl = form.elements.namedItem("name");
    const emailEl = form.elements.namedItem("email");
    const messageEl = form.elements.namedItem("message");
    const consentEl = form.elements.namedItem("consent");
    const requiredFields = [nameEl, emailEl, messageEl, consentEl].filter(Boolean);

    const touched = new WeakSet();

    function getErrorEl(el) {
      return el?.id ? document.getElementById(`${el.id}-error`) : null;
    }

    function setFieldError(el, msgKey) {
      if (!el) return;
      const errEl = getErrorEl(el);
      if (msgKey) {
        el.setAttribute("aria-invalid", "true");
        if (errEl) errEl.textContent = t(msgKey);
      } else {
        el.removeAttribute("aria-invalid");
        if (errEl) errEl.textContent = "";
      }
    }

    function validateField(el) {
      if (!el || el.disabled) return true;
      const val = el.type === "checkbox" ? el.checked : el.value.trim();

      if (el === nameEl) {
        const ok = Boolean(val);
        setFieldError(el, ok ? "" : "contact.form.errName");
        return ok;
      }
      if (el === emailEl) {
        const ok = Boolean(val) && isValidEmail(val);
        setFieldError(el, ok ? "" : "contact.form.errEmail");
        return ok;
      }
      if (el === messageEl) {
        const ok = Boolean(val);
        setFieldError(el, ok ? "" : messageErrorKey);
        return ok;
      }
      if (el === consentEl) {
        const ok = Boolean(val);
        setFieldError(el, ok ? "" : consentErrorKey);
        return ok;
      }
      return true;
    }

    function setStatus(type, message, options = {}) {
      const { mailtoUrl = "", briefText = "" } = options;
      if (!statusEl) return;
      statusEl.className = `form-status is-${type}`;
      statusEl.replaceChildren();

      const p = document.createElement("p");
      p.textContent = message;
      statusEl.appendChild(p);

      if (mailtoUrl || briefText) {
        const actions = document.createElement("div");
        actions.className = "form-status-actions";

        if (mailtoUrl) {
          const link = document.createElement("a");
          link.href = mailtoUrl;
          link.className = "btn btn-primary btn-sm";
          link.textContent = t("contact.form.mailtoBtn");
          actions.appendChild(link);
        }

        if (briefText) {
          const copyBtn = document.createElement("button");
          copyBtn.type = "button";
          copyBtn.className = "btn btn-secondary btn-sm";
          copyBtn.textContent = t(copyBtnKey);
          copyBtn.addEventListener("click", async () => {
            try {
              await navigator.clipboard.writeText(briefText);
              copyBtn.textContent = `${t("copy.copied")} ✓`;
            } catch {
              copyBtn.textContent = t("copy.failed");
            }
          });
          actions.appendChild(copyBtn);
        }

        statusEl.appendChild(actions);
      }
    }

    requiredFields.forEach((field) => {
      field.addEventListener("blur", () => {
        if (touched.has(field)) validateField(field);
      });
      field.addEventListener("input", () => {
        touched.add(field);
        if (field.getAttribute("aria-invalid") === "true") {
          validateField(field);
        }
      });
      field.addEventListener("change", () => {
        touched.add(field);
        if (field.getAttribute("aria-invalid") === "true") {
          validateField(field);
        }
      });
    });

    window.addEventListener("sirius:langchange", () => {
      requiredFields.forEach((field) => {
        if (field.getAttribute("aria-invalid") === "true") {
          validateField(field);
        }
      });
    });

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const honeypot = form.querySelector('input[name="website"]');
      if (honeypot && honeypot.value.trim() !== "") {
        setStatus("success", t(successKey));
        form.reset();
        return;
      }

      let firstInvalid = null;
      requiredFields.forEach((field) => {
        touched.add(field);
        const ok = validateField(field);
        if (!ok && !firstInvalid) {
          firstInvalid = field;
        }
      });

      if (firstInvalid) {
        setStatus("error", t("contact.form.errSummary"));
        firstInvalid.focus();
        return;
      }

      const { subject, briefText, payload } = buildSubmission(form);
      const mailtoUrl = `mailto:${fallbackEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(briefText)}`;

      const endpoint = (form.getAttribute("data-form-endpoint") || "").trim();
      const isConfigured =
        endpoint !== "" &&
        !endpoint.includes("YOUR_FORM_ID") &&
        !endpoint.includes("YOUR_ACCESS_KEY");

      if (!isConfigured) {
        setStatus("warning", t(fallbackKey), { mailtoUrl, briefText });
        return;
      }

      const originalBtnText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = t("contact.form.sending");

      try {
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

        setStatus("success", t(successKey));
        form.reset();
        requiredFields.forEach((field) => setFieldError(field, ""));
      } catch {
        setStatus("error", t("contact.form.errorNetwork"), { mailtoUrl, briefText });
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }
    });

    return form;
  }

  function initContactPageForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const params = new URLSearchParams(window.location.search);
    const serviceEl = form.elements.namedItem("service");
    const preselectedService = params.get("service");
    if (preselectedService && VALID_SERVICES.has(preselectedService) && serviceEl) {
      serviceEl.value = preselectedService;
    }

    let initialType = params.get("type");
    if (!initialType && preselectedService === "audit") {
      initialType = "audit";
    }
    if (initialType && VALID_TYPES.has(initialType)) {
      const radio = form.querySelector(`input[name="requestType"][value="${initialType}"]`);
      if (radio) radio.checked = true;
    }

    const conditionalSections = form.querySelectorAll("[data-request-section]");

    function syncRequestSections() {
      const selected = form.querySelector('input[name="requestType"]:checked')?.value || "quote";
      conditionalSections.forEach((section) => {
        const matches = section.getAttribute("data-request-section").split(",").includes(selected);
        section.hidden = !matches;
        section.querySelectorAll("input, select, textarea").forEach((control) => {
          control.disabled = !matches;
        });
      });
    }

    form.querySelectorAll('input[name="requestType"]').forEach((radio) => {
      radio.addEventListener("change", syncRequestSections);
    });
    syncRequestSections();

    setupFormController({
      formId: "contact-form",
      statusId: "form-status",
      messageErrorKey: "contact.form.errMessage",
      consentErrorKey: "contact.form.errConsent",
      copyBtnKey: "contact.form.copyBriefBtn",
      fallbackKey: "contact.form.fallback",
      successKey: "contact.form.success",
      buildSubmission(f) {
        const lang = getLang();
        const requestTypeRadio = f.querySelector('input[name="requestType"]:checked');
        const requestType = requestTypeRadio?.value || "quote";
        const requestTypeLabel =
          requestTypeRadio?.closest(".radio-card")?.querySelector(".radio-card-title")?.textContent?.trim() ||
          requestType;

        const name = f.elements.namedItem("name").value.trim();
        const email = f.elements.namedItem("email").value.trim();
        const phone = f.elements.namedItem("phone")?.value.trim() || "";
        const company = f.elements.namedItem("company")?.value.trim() || "";
        const service = getSelectLabel(f.elements.namedItem("service"));
        const message = f.elements.namedItem("message").value.trim();

        const lines = [];
        const addLine = (enLbl, frLbl, val) => {
          if (val) lines.push(`${lang === "fr" ? frLbl : enLbl}: ${val}`);
        };

        addLine("Request Type", "Objet", requestTypeLabel);
        addLine("Name", "Nom", name);
        addLine("Email", "Email", email);
        addLine("Phone", "Téléphone", phone);
        addLine("Company", "Entreprise", company);
        addLine("Area of Interest", "Domaine", service);

        let extraPayload = {};
        if (requestType === "quote") {
          const engagement = getSelectLabel(f.elements.namedItem("engagement"));
          const budget = getSelectLabel(f.elements.namedItem("budget"));
          const timeline = getSelectLabel(f.elements.namedItem("timeline"));
          addLine("Engagement", "Format", engagement);
          addLine("Budget", "Budget", budget);
          addLine("Timeline", "Échéance", timeline);
          extraPayload = { engagement, budget, timeline };
        } else if (requestType === "audit") {
          const auditSection = f.querySelector('[data-request-section="audit"]');
          const scopes = getCheckedValues(auditSection, "auditScope");
          const existingStack = f.elements.namedItem("existingStack")?.value.trim() || "";
          const timeline = getSelectLabel(f.elements.namedItem("auditTimeline"));
          addLine("Audit Scope", "Périmètre audit", scopes.join(", "));
          addLine("Current Stack", "Stack actuelle", existingStack);
          addLine("Timeline", "Échéance", timeline);
          extraPayload = { auditScope: scopes, existingStack, timeline };
        } else if (requestType === "training") {
          const trainSection = f.querySelector('[data-request-section="training"]');
          const topics = getCheckedValues(trainSection, "trainingFocus");
          const teamSize = getSelectLabel(f.elements.namedItem("teamSize"));
          const format = getSelectLabel(f.elements.namedItem("trainingFormat"));
          addLine("Topics", "Thématiques", topics.join(", "));
          addLine("Team Size", "Taille équipe", teamSize);
          addLine("Format", "Format", format);
          extraPayload = { trainingFocus: topics, teamSize, trainingFormat: format };
        }

        lines.push("", `${lang === "fr" ? "Détails" : "Details"}:`, message);

        return {
          subject: `[SIRIUS · ${requestTypeLabel}] ${service}${company ? ` — ${company}` : ""}`,
          briefText: lines.join("\n"),
          payload: {
            requestType: requestTypeLabel,
            name,
            email,
            phone,
            company,
            service,
            ...extraPayload,
            message
          }
        };
      }
    });
  }

  function initCandidatePageForm() {
    const form = document.getElementById("candidate-form");
    if (!form) return;

    const roleSelect = form.elements.namedItem("role");
    const preselectedRole = new URLSearchParams(window.location.search).get("role");
    if (preselectedRole && VALID_ROLES.has(preselectedRole) && roleSelect) {
      roleSelect.value = preselectedRole;
    }

    document.querySelectorAll("[data-apply-role]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetRole = btn.getAttribute("data-apply-role");
        if (roleSelect && targetRole && VALID_ROLES.has(targetRole)) {
          roleSelect.value = targetRole;
        }
        const formSection = document.getElementById("apply-section");
        formSection?.scrollIntoView({ behavior: "smooth" });
        form.elements.namedItem("name")?.focus({ preventScroll: true });
      });
    });

    setupFormController({
      formId: "candidate-form",
      statusId: "candidate-status",
      messageErrorKey: "careers.form.errMessage",
      consentErrorKey: "careers.form.errConsent",
      copyBtnKey: "careers.form.copyBriefBtn",
      fallbackKey: "careers.form.fallback",
      successKey: "careers.form.success",
      buildSubmission(f) {
        const lang = getLang();
        const name = f.elements.namedItem("name").value.trim();
        const email = f.elements.namedItem("email").value.trim();
        const phone = f.elements.namedItem("phone")?.value.trim() || "";
        const location = f.elements.namedItem("location")?.value.trim() || "";
        const role = getSelectLabel(f.elements.namedItem("role"));
        const contractRadio = f.querySelector('input[name="contractType"]:checked');
        const contractType =
          contractRadio?.closest(".radio-card")?.querySelector(".radio-card-title")?.textContent?.trim() ||
          contractRadio?.value ||
          "";
        const experience = getSelectLabel(f.elements.namedItem("experience"));
        const availability = getSelectLabel(f.elements.namedItem("availability"));
        const links = f.elements.namedItem("links")?.value.trim() || "";
        const message = f.elements.namedItem("message").value.trim();

        const lines = [];
        const addLine = (enLbl, frLbl, val) => {
          if (val) lines.push(`${lang === "fr" ? frLbl : enLbl}: ${val}`);
        };

        addLine("Candidate", "Candidat", name);
        addLine("Email", "Email", email);
        addLine("Phone", "Téléphone", phone);
        addLine("Location", "Localisation", location);
        addLine("Target Role", "Profil visé", role);
        addLine("Collaboration", "Type de collaboration", contractType);
        addLine("Experience", "Expérience", experience);
        addLine("Availability", "Disponibilité", availability);
        addLine("Links / CV", "Liens / CV", links);
        lines.push("", `${lang === "fr" ? "Motivation & Stack" : "Background & Motivation"}:`, message);

        return {
          subject: `[SIRIUS · ${lang === "fr" ? "Candidature" : "Candidate"}] ${role} — ${name}`,
          briefText: lines.join("\n"),
          payload: {
            type: "candidate",
            name,
            email,
            phone,
            location,
            role,
            contractType,
            experience,
            availability,
            links,
            message
          }
        };
      }
    });
  }

  function boot() {
    initContactPageForm();
    initCandidatePageForm();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
