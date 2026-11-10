(() => {
  const CASE_STUDIES = {
    "saas-portal": {
      category: "web",
      stack: ["TypeScript", "Next.js", "PostgreSQL", "Stripe", "Docker"],
      en: {
        sector: "B2B SaaS · FinTech",
        title: "Multi-Tenant Client & Billing Portal",
        challenge:
          "A growing financial services provider relied on spreadsheets and manual PDFs to onboard enterprise clients and reconcile monthly usage billing.",
        solution:
          "Designed and shipped a role-based customer portal with automated invoice generation, SSO authentication, and real-time usage dashboards.",
        outcomes: [
          "65% faster client onboarding time",
          "Zero billing reconciliation discrepancies across 40+ enterprise accounts",
          "99.95% uptime SLA with automated E2E regression checks"
        ]
      },
      fr: {
        sector: "SaaS B2B · FinTech",
        title: "Portail client multi-tenant & facturation",
        challenge:
          "Un prestataire financier en croissance s’appuyait sur des tableurs et PDF manuels pour l’onboarding client et le suivi de facturation mensuelle.",
        solution:
          "Conception et mise en production d’un portail sécurisé avec rôles, facturation automatisée, SSO et tableaux de bord temps réel.",
        outcomes: [
          "Réduction de 65 % du délai d’onboarding client",
          "Zéro écart de facturation sur plus de 40 comptes entreprises",
          "Disponibilité de 99,95 % avec tests E2E automatisés"
        ]
      }
    },
    "cloud-lakehouse": {
      category: "cloud",
      stack: ["Google Cloud", "BigQuery", "dbt", "Terraform", "GitHub Actions"],
      en: {
        sector: "Retail & Logistics · Cloud & Data",
        title: "Unified Cloud Data Warehouse & CI/CD",
        challenge:
          "Siloed ERP, e-commerce, and warehouse exports caused 48-hour reporting delays and conflicting KPI definitions across teams.",
        solution:
          "Provisioned an Infrastructure-as-Code BigQuery lakehouse with modular dbt models, automated data quality assertions, and scheduled orchestration.",
        outcomes: [
          "Reporting latency reduced from 48 hours to 15 minutes",
          "Single governed KPI layer shared across Finance and Ops",
          "32% cloud query cost savings via partitioning & clustering"
        ]
      },
      fr: {
        sector: "Retail & Logistique · Cloud & Data",
        title: "Entrepôt de données Cloud unifié & CI/CD",
        challenge:
          "Des exports ERP, e-commerce et entrepôt cloisonnés entraînaient 48h de retard de reporting et des KPI contradictoires.",
        solution:
          "Déploiement d’un socle BigQuery via Terraform avec transformations dbt modulaires, tests de qualité automatisés et orchestration planifiée.",
        outcomes: [
          "Latence de reporting réduite de 48h à 15 minutes",
          "Référentiel KPI unique partagé entre Finance et Opérations",
          "32 % d’économies sur les requêtes cloud grâce au partitionnement"
        ]
      }
    },
    "ai-ops-copilot": {
      category: "ai",
      stack: ["Python", "FastAPI", "Vertex AI / LLMs", "pgvector", "Cloud Run"],
      en: {
        sector: "Operations · AI & Automation",
        title: "Internal Knowledge & Document Triage Assistant",
        challenge:
          "Support engineers spent hours manually searching fragmented PDFs, runbooks, and past tickets to resolve recurring customer inquiries.",
        solution:
          "Built a citation-backed RAG assistant with automated document indexing, confidence scoring, and one-click draft responses for human review.",
        outcomes: [
          "45% reduction in average ticket first-response time",
          "100% source citations with zero unverified auto-sends",
          "Serverless deployment scaling cleanly to zero off-hours"
        ]
      },
      fr: {
        sector: "Opérations · IA & Automatisation",
        title: "Assistant documentaire & triage de tickets",
        challenge:
          "Les équipes support passaient plusieurs heures à chercher des réponses dans des PDF, procédures et anciens tickets dispersés.",
        solution:
          "Développement d’un assistant RAG avec citations de sources, indexation automatisée, score de confiance et brouillons validés par l’humain.",
        outcomes: [
          "Temps de première réponse réduit de 45 %",
          "100 % des réponses sourcées sans envoi autonome non vérifié",
          "Déploiement serverless avec coût nul hors heures ouvrées"
        ]
      }
    },
    "booking-platform": {
      category: "web",
      stack: ["HTML/CSS", "TypeScript", "Node.js", "PostgreSQL", "Cloudflare"],
      en: {
        sector: "Healthcare / Services · Web Platform",
        title: "High-Speed Booking & Scheduling Web App",
        challenge:
          "Legacy appointment software suffered from slow mobile load times, high abandonment rates, and manual SMS reminders.",
        solution:
          "Rebuilt the customer-facing booking flow with mobile-first UX, real-time slot locking, and automated calendar notifications.",
        outcomes: [
          "Lighthouse performance score improved from 54 to 98",
          "28% uplift in completed mobile bookings",
          "Automated reminders cut no-shows by half"
        ]
      },
      fr: {
        sector: "Santé / Services · Plateforme Web",
        title: "Application de réservation haute performance",
        challenge:
          "L’outil existant souffrait de lenteurs mobiles, d’un fort taux d’abandon et de rappels manuels chronophages.",
        solution:
          "Refonte complète du parcours mobile-first avec verrouillage de créneaux en temps réel et notifications calendrier automatisées.",
        outcomes: [
          "Score de performance Lighthouse passé de 54 à 98",
          "+28 % de réservations finalisées sur mobile",
          "Rendez-vous non honorés divisés par deux"
        ]
      }
    },
    "devops-modernization": {
      category: "cloud",
      stack: ["Kubernetes", "Terraform", "Prometheus", "OpenTelemetry", "GitHub Actions"],
      en: {
        sector: "Industrial SaaS · DevOps",
        title: "Zero-Downtime Release & Observability Upgrade",
        challenge:
          "Manual server deployments required late-night maintenance windows and lacked visibility into microservice bottlenecks.",
        solution:
          "Standardized containerized deployments with canary rollouts, OpenTelemetry tracing, and actionable SLO dashboards.",
        outcomes: [
          "Deployments shifted from monthly nights to daily daytime releases",
          "Mean time to detect (MTTD) incidents cut under 3 minutes",
          "Full audit trail across staging and production environments"
        ]
      },
      fr: {
        sector: "SaaS Industriel · DevOps",
        title: "Déploiements sans interruption & Observabilité",
        challenge:
          "Les mises en production manuelles imposaient des fenêtres nocturnes sans visibilité fine sur les ralentissements.",
        solution:
          "Standardisation conteneurisée avec déploiements progressifs, traces OpenTelemetry et tableaux de bord SLO.",
        outcomes: [
          "Mises en production passées de mensuelles (nuit) à quotidiennes",
          "Détection d’incidents (MTTD) ramenée sous 3 minutes",
          "Traçabilité complète entre pré-production et production"
        ]
      }
    },
    "invoice-extraction": {
      category: "ai",
      stack: ["Python", "Document AI", "BigQuery", "Cloud Workflows", "REST API"],
      en: {
        sector: "Finance Ops · AI & Automation",
        title: "Automated Supplier Invoice Extraction Pipeline",
        challenge:
          "Accounting teams manually keyed line items from hundreds of heterogeneous supplier PDFs every week.",
        solution:
          "Implemented an automated ingestion pipeline combining OCR extraction, validation rules, and exception routing into the ERP.",
        outcomes: [
          "80% of standard invoices processed touch-free",
          "Validation exceptions flagged automatically with bounding-box context",
          "Saved 20+ hours of manual data entry per week"
        ]
      },
      fr: {
        sector: "Finance Ops · IA & Automatisation",
        title: "Extraction automatisée de factures fournisseurs",
        challenge:
          "Les équipes comptables saisissaient manuellement les lignes de centaines de factures PDF hétérogènes chaque semaine.",
        solution:
          "Mise en place d’un pipeline combinant extraction OCR, règles de validation métier et routage des exceptions vers l’ERP.",
        outcomes: [
          "80 % des factures standards traitées sans saisie manuelle",
          "Anomalies signalées automatiquement avec contexte visuel",
          "Plus de 20 heures économisées chaque semaine"
        ]
      }
    }
  };

  function getLang() {
    return window.SiriusI18n?.getLang() || "en";
  }

  function t(key, vars) {
    return window.SiriusI18n ? window.SiriusI18n.t(key, vars) : key;
  }

  function renderCardsText() {
    const lang = getLang();
    document.querySelectorAll("[data-project-id]").forEach((card) => {
      const id = card.getAttribute("data-project-id");
      const data = CASE_STUDIES[id]?.[lang];
      if (!data) return;

      const sectorEl = card.querySelector("[data-project-sector]");
      const titleEl = card.querySelector("[data-project-title]");
      const summaryEl = card.querySelector("[data-project-summary]");

      if (sectorEl) sectorEl.textContent = data.sector;
      if (titleEl) titleEl.textContent = data.title;
      if (summaryEl) summaryEl.textContent = data.challenge;
    });
  }

  function initPortfolio() {
    const grid = document.getElementById("portfolio-grid");
    const filterButtons = document.querySelectorAll("[data-filter]");
    const countEl = document.getElementById("portfolio-count");
    const dialog = document.getElementById("case-dialog");

    if (!grid) return;

    let activeFilter = "all";

    function applyFilter(category) {
      activeFilter = category;
      let visibleCount = 0;

      grid.querySelectorAll("[data-project-id]").forEach((card) => {
        const cardCat = card.getAttribute("data-category");
        const match = category === "all" || cardCat === category;
        card.hidden = !match;
        if (match) visibleCount += 1;
      });

      filterButtons.forEach((btn) => {
        btn.setAttribute("aria-pressed", String(btn.getAttribute("data-filter") === category));
      });

      if (countEl) {
        countEl.textContent = t("portfolio.count.label", { count: visibleCount });
      }
    }

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        applyFilter(btn.getAttribute("data-filter") || "all");
      });
    });

    if (dialog) {
      const closeBtn = dialog.querySelector("[data-dialog-close]");

      function populateDialog(projectId) {
        const study = CASE_STUDIES[projectId];
        if (!study) return;
        const lang = getLang();
        const copy = study[lang] || study.en;

        dialog.dataset.openProject = projectId;
        dialog.querySelector("[data-dialog-sector]").textContent = copy.sector;
        dialog.querySelector("[data-dialog-title]").textContent = copy.title;
        dialog.querySelector("[data-dialog-challenge]").textContent = copy.challenge;
        dialog.querySelector("[data-dialog-solution]").textContent = copy.solution;

        const outcomesList = dialog.querySelector("[data-dialog-outcomes]");
        outcomesList.innerHTML = "";
        copy.outcomes.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item;
          outcomesList.appendChild(li);
        });

        const stackList = dialog.querySelector("[data-dialog-stack]");
        stackList.innerHTML = "";
        study.stack.forEach((tech) => {
          const span = document.createElement("span");
          span.className = "tag";
          span.textContent = tech;
          stackList.appendChild(span);
        });
      }

      grid.addEventListener("click", (event) => {
        const trigger = event.target.closest("[data-open-project]");
        if (!trigger) return;
        const projectId = trigger.getAttribute("data-open-project");
        populateDialog(projectId);
        dialog.showModal();
      });

      closeBtn?.addEventListener("click", () => dialog.close());

      dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
          dialog.close();
        }
      });

      window.addEventListener("sirius:langchange", () => {
        renderCardsText();
        applyFilter(activeFilter);
        if (dialog.open && dialog.dataset.openProject) {
          populateDialog(dialog.dataset.openProject);
        }
      });
    } else {
      window.addEventListener("sirius:langchange", () => {
        renderCardsText();
        applyFilter(activeFilter);
      });
    }

    renderCardsText();
    applyFilter("all");

    if (dialog) {
      const requestedProject = new URLSearchParams(window.location.search).get("project");
      if (requestedProject && CASE_STUDIES[requestedProject]) {
        const triggerBtn = grid.querySelector(`[data-open-project="${requestedProject}"]`);
        triggerBtn?.click();
      }
    }
  }

  document.addEventListener("DOMContentLoaded", initPortfolio);
})();

