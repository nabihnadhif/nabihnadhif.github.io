(() => {
  const CASE_STUDIES = {
    "ibexa-portal": {
      category: "web",
      contactService: "cms",
      stack: ["PHP", "Symfony", "Ibexa DXP", "React", "Docker"],
      en: {
        sector: "Enterprise Portal · PHP / Ibexa DXP",
        metric: "2.4x editorial velocity",
        title: "Multi-Site Customer & Editorial Portal",
        challenge:
          "A multi-brand organization maintained fragmented legacy sites with slow editorial publishing and duplicated customer authentication.",
        solution:
          "Architected a unified Ibexa DXP & Symfony backend exposing clean APIs to React front-end modules, complete with role-based permissions and SSO.",
        outcomes: [
          "Editorial publishing workflow cut from hours to minutes across 4 regional sites",
          "Shared Symfony core eliminated duplicated authentication & business rules",
          "Core Web Vitals green across desktop and mobile client portals"
        ]
      },
      fr: {
        sector: "Portail Entreprise · PHP / Ibexa DXP",
        metric: "Vélocité x2,4",
        title: "Portail client multi-sites & plateforme éditoriale",
        challenge:
          "Une organisation multi-marques maintenait des sites cloisonnés avec une publication lente et une authentification client dupliquée.",
        solution:
          "Architecture unifiée sous Ibexa DXP et Symfony exposant des APIs propres vers des modules React, avec gestion fine des droits et SSO.",
        outcomes: [
          "Temps de mise en ligne éditoriale réduit sur 4 sites régionaux",
          "Socle Symfony mutualisé supprimant les doublons d’authentification",
          "Performances Core Web Vitals au vert sur desktop et mobile"
        ]
      }
    },
    "nuxeo-integration": {
      category: "web",
      contactService: "cms",
      stack: ["Java", "Spring Boot", "Nuxeo ECM", "Angular", "REST API"],
      en: {
        sector: "Content & ECM · Java / Nuxeo",
        metric: "Zero manual asset sync",
        title: "Enterprise Content Hub & Nuxeo Integration",
        challenge:
          "Product documents and media assets stored in Nuxeo required manual exports before appearing in customer-facing Angular applications.",
        solution:
          "Built a Spring Boot integration layer bridging Nuxeo ECM workflows, automated metadata indexing, and a responsive Angular workspace.",
        outcomes: [
          "Real-time synchronization of approved assets from Nuxeo to web portals",
          "Strict access control and audit trail preserved end-to-end",
          "Eliminated manual CSV/PDF exports across product and legal teams"
        ]
      },
      fr: {
        sector: "GED & Contenu · Java / Nuxeo",
        metric: "Zéro synchro manuelle",
        title: "Hub documentaire & intégration Nuxeo ECM",
        challenge:
          "Les documents et médias stockés dans Nuxeo nécessitaient des exports manuels avant d’alimenter les applications clients Angular.",
        solution:
          "Développement d’une passerelle Spring Boot connectée aux workflows Nuxeo, avec indexation de métadonnées et interface Angular réactive.",
        outcomes: [
          "Diffusion temps réel des documents validés depuis Nuxeo vers le portail",
          "Traçabilité et contrôle d’accès conservés de bout en bout",
          "Suppression des exports manuels entre équipes produit et conformité"
        ]
      }
    },
    "typo3-modernization": {
      category: "web",
      contactService: "web",
      stack: ["PHP", "TYPO3", "Symfony", "React", "TypeScript"],
      en: {
        sector: "Digital Experience · TYPO3 & React",
        metric: "+38% mobile conversion",
        title: "TYPO3 Platform Modernization & Headless UI",
        challenge:
          "An aging TYPO3 installation suffered from legacy template coupling, slow page loads, and risky manual upgrades.",
        solution:
          "Upgraded TYPO3 to LTS with clean Symfony-aligned extensions and decoupled interactive customer journeys in React & TypeScript.",
        outcomes: [
          "38% uplift in completed mobile self-service journeys",
          "Clean LTS upgrade path with automated regression tests",
          "Editors retained familiar TYPO3 workflows while gaining instant previews"
        ]
      },
      fr: {
        sector: "Expérience Digitale · TYPO3 & React",
        metric: "+38 % conversion mobile",
        title: "Modernisation TYPO3 & Front-End découplé",
        challenge:
          "Une plateforme TYPO3 vieillissante souffrait d’un fort couplage applicatif, de lenteurs et de montées de version risquées.",
        solution:
          "Migration vers TYPO3 LTS avec extensions structurées selon les standards Symfony et parcours interactifs en React & TypeScript.",
        outcomes: [
          "+38 % de parcours finalisés sur mobile",
          "Trajectoire LTS pérenne couverte par des tests automatisés",
          "Confort éditorial TYPO3 conservé avec prévisualisation instantanée"
        ]
      }
    },
    "cicd-platform": {
      category: "cicd",
      contactService: "cicd",
      stack: ["GitLab CI", "GitHub Actions", "Azure DevOps", "Docker", "SonarQube"],
      en: {
        sector: "DevOps & Quality · CI/CD Automation",
        metric: "4x faster releases",
        title: "Multi-Repo CI/CD & Automated Quality Gates",
        challenge:
          "Engineering squads deployed Symfony, Spring Boot, and Angular services manually, leading to environment drift and late bug discovery.",
        solution:
          "Standardized reusable CI/CD templates across GitLab CI, GitHub Actions, and Azure DevOps with containerized builds and automated quality gates.",
        outcomes: [
          "Release cycle time cut by 4x with repeatable staging & production rollouts",
          "Automated unit, integration, and security checks on every pull request",
          "Consistent Docker build parity from developer laptop to production"
        ]
      },
      fr: {
        sector: "DevOps & Qualité · Automatisation CI/CD",
        metric: "Livraisons 4x plus rapides",
        title: "Pipelines CI/CD multi-dépôts & Quality Gates",
        challenge:
          "Les déploiements manuels de services Symfony, Spring Boot et Angular généraient des écarts d’environnement et des régressions tardives.",
        solution:
          "Standardisation de templates CI/CD réutilisables sous GitLab CI, GitHub Actions et Azure DevOps avec builds conteneurisés et contrôles qualité.",
        outcomes: [
          "Temps de mise en production divisé par 4 entre pré-prod et prod",
          "Tests unitaires, intégration et scans sécurité exécutés à chaque PR",
          "Parité complète des builds Docker du poste développeur au serveur"
        ]
      }
    },
    "ai-second-brain": {
      category: "ai",
      contactService: "ai",
      stack: ["Second Brain", "AI Skills", "MCP", "Markdown", "Workflows"],
      en: {
        sector: "Knowledge & Productivity · Applied AI",
        metric: "-50% onboarding ramp",
        title: "Engineering Second Brain & Custom AI Skills",
        challenge:
          "Architecture decisions, CMS runbooks, and project conventions were scattered across wikis, chats, and individual developer notes.",
        solution:
          "Designed a structured Second Brain repository paired with custom AI agent skills so developers and assistants retrieve verified context instantly.",
        outcomes: [
          "50% faster onboarding for new engineers joining Symfony & Angular repos",
          "Reusable AI skills enforcing team code conventions and review checklists",
          "Zero vendor lock-in using portable Markdown and Git version control"
        ]
      },
      fr: {
        sector: "Connaissance & Productivité · IA Appliquée",
        metric: "Onboarding réduit de 50 %",
        title: "Second Brain technique & Skills IA sur mesure",
        challenge:
          "Décisions d’architecture, procédures CMS et conventions de code étaient dispersées entre wikis, messageries et notes personnelles.",
        solution:
          "Conception d’un Second Brain structuré couplé à des skills d’agents IA sur mesure pour accéder instantanément à un contexte fiable.",
        outcomes: [
          "Montée en autonomie réduite de 50 % sur les dépôts Symfony & Angular",
          "Skills IA réutilisables appliquant les standards et revues de l’équipe",
          "Format Markdown portable sous Git sans dépendance éditeur"
        ]
      }
    },
    "ai-team-training": {
      category: "ai",
      contactService: "ai",
      stack: ["AI Training", "Workshops", "Code Review", "Agent Skills", "Best Practices"],
      en: {
        sector: "Enablement · AI Team Training",
        metric: "100% squad adoption",
        title: "Applied AI Enablement & Developer Training",
        challenge:
          "Development teams used AI tools ad-hoc without shared guardrails, resulting in inconsistent code quality and missed productivity gains.",
        solution:
          "Delivered tailored workshops, live refactoring labs on real Symfony/Angular/Spring Boot repos, and reusable prompt & skill playbooks.",
        outcomes: [
          "Consistent, review-ready AI-assisted coding workflows across the team",
          "Practical guardrails for security, testing, and architecture reviews",
          "Teams equipped to author and maintain their own custom AI skills"
        ]
      },
      fr: {
        sector: "Montée en compétence · Formation IA",
        metric: "100 % d’adoption équipe",
        title: "Programme de formation IA & ateliers pratiques",
        challenge:
          "Les équipes utilisaient l’IA de façon isolée sans cadre partagé, créant des écarts de qualité et peu de gains durables.",
        solution:
          "Animation d’ateliers pratiques sur de vrais dépôts Symfony, Angular et Spring Boot, avec création de playbooks et skills réutilisables.",
        outcomes: [
          "Workflows de développement assisté par IA homogènes et fiables",
          "Garde-fous concrets pour la sécurité, les tests et les revues de code",
          "Équipes autonomes pour créer et maintenir leurs propres skills IA"
        ]
      }
    }
  };

  const TOTAL_PROJECTS = Object.keys(CASE_STUDIES).length;

  let supportsDisplayTransition;
  function canTransitionDisplay() {
    if (supportsDisplayTransition !== undefined) return supportsDisplayTransition;
    if (!window.CSS?.supports?.("transition-behavior", "allow-discrete") || !document.body) {
      return false;
    }
    const probe = document.createElement("div");
    probe.style.cssText = "transition: display 1s allow-discrete !important; display: block;";
    document.body.appendChild(probe);
    getComputedStyle(probe).display;
    probe.style.display = "none";
    supportsDisplayTransition = getComputedStyle(probe).display === "block";
    probe.remove();
    return supportsDisplayTransition;
  }

  function supportsTopLayerExit() {
    return Boolean(window.CSS?.supports?.("overlay", "auto") && canTransitionDisplay());
  }

  async function closeTopLayer(dialog) {
    if (!dialog.open) return;
    if (!supportsTopLayerExit()) {
      dialog.setAttribute("data-closing", "");
      const animations = dialog.getAnimations({ subtree: true });
      if (animations.length > 0) {
        await Promise.race([
          Promise.allSettled(animations.map((a) => a.finished)),
          new Promise((resolve) => setTimeout(resolve, 400))
        ]);
      }
      if (!dialog.hasAttribute("data-closing")) return;
      dialog.removeAttribute("data-closing");
    }
    dialog.close();
  }

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
      const data = CASE_STUDIES[id]?.[lang] || CASE_STUDIES[id]?.en;
      if (!data) return;

      const sectorEl = card.querySelector("[data-project-sector]");
      const titleEl = card.querySelector("[data-project-title]");
      const summaryEl = card.querySelector("[data-project-summary]");
      const metricEl = card.querySelector("[data-project-metric]");

      if (sectorEl) sectorEl.textContent = data.sector;
      if (titleEl) titleEl.textContent = data.title;
      if (summaryEl) summaryEl.textContent = data.challenge;
      if (metricEl) metricEl.textContent = data.metric;
    });
  }

  function initPortfolio() {
    const grid = document.getElementById("portfolio-grid");
    const filterButtons = document.querySelectorAll("[data-filter]");
    const countEl = document.getElementById("portfolio-count");
    const dialog = document.getElementById("case-dialog");

    if (!grid) return;

    let activeFilter = "all";

    function applyFilter(category, animate = false) {
      activeFilter = category;
      let visibleCount = 0;

      grid.querySelectorAll("[data-project-id]").forEach((card) => {
        const cardCat = card.getAttribute("data-category");
        const match = category === "all" || cardCat === category;
        card.hidden = !match;
        if (match) {
          visibleCount += 1;
          if (animate) {
            card.classList.remove("is-filtering");
            void card.offsetWidth;
            card.classList.add("is-filtering");
            card.classList.add("is-visible", "is-settled");
          }
        }
      });

      filterButtons.forEach((btn) => {
        btn.setAttribute("aria-pressed", String(btn.getAttribute("data-filter") === category));
      });

      if (countEl) {
        countEl.textContent = t("portfolio.count.label", {
          count: visibleCount,
          total: TOTAL_PROJECTS
        });
      }
    }

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        applyFilter(btn.getAttribute("data-filter") || "all", true);
      });
    });

    if (dialog) {
      const closeBtns = dialog.querySelectorAll("[data-dialog-close]");
      const ctaLink = dialog.querySelector("[data-dialog-cta]");

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
        const outcomeItems = copy.outcomes.map((item) => {
          const li = document.createElement("li");
          li.textContent = item;
          return li;
        });
        outcomesList.replaceChildren(...outcomeItems);

        const stackList = dialog.querySelector("[data-dialog-stack]");
        const stackItems = study.stack.map((tech) => {
          const span = document.createElement("span");
          span.className = "tag";
          span.textContent = tech;
          return span;
        });
        stackList.replaceChildren(...stackItems);

        if (ctaLink) {
          const serviceParam = study.contactService || study.category;
          ctaLink.setAttribute("href", `contact.html?service=${encodeURIComponent(serviceParam)}`);
        }
      }

      grid.addEventListener("click", (event) => {
        const trigger = event.target.closest("[data-open-project]");
        if (!trigger) return;
        const projectId = trigger.getAttribute("data-open-project");
        dialog.removeAttribute("data-closing");
        populateDialog(projectId);
        dialog.showModal();
      });

      closeBtns.forEach((btn) => {
        btn.addEventListener("click", () => closeTopLayer(dialog));
      });

      dialog.addEventListener("cancel", (event) => {
        if (!supportsTopLayerExit()) {
          event.preventDefault();
          closeTopLayer(dialog);
        }
      });

      if (!("closedBy" in HTMLDialogElement.prototype)) {
        const isOutsideDialog = (event) => {
          const r = dialog.getBoundingClientRect();
          return (
            event.clientX < r.left ||
            event.clientX > r.right ||
            event.clientY < r.top ||
            event.clientY > r.bottom
          );
        };
        let pressedOutside = false;
        dialog.addEventListener("pointerdown", (event) => {
          pressedOutside = isOutsideDialog(event);
        });
        dialog.addEventListener("pointerup", (event) => {
          if (pressedOutside && isOutsideDialog(event)) {
            closeTopLayer(dialog);
          }
          pressedOutside = false;
        });
      }

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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPortfolio);
  } else {
    initPortfolio();
  }
})();
