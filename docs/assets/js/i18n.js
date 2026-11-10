(() => {
  const STORAGE_KEY = "sirius-lang";
  const SUPPORTED_LANGS = ["en", "fr"];

  const TRANSLATIONS = {
    en: {
      // Meta per page
      "meta.home.title": "SIRIUS Digital Solutions — Software, Cloud & AI Engineering",
      "meta.home.desc":
        "SIRIUS Digital Solutions designs and builds custom web platforms, cloud data architectures, and practical AI automation.",
      "meta.services.title": "Services & Solutions — SIRIUS Digital Solutions",
      "meta.services.desc":
        "Explore custom software engineering, cloud infrastructure, data pipelines, and AI automation services.",
      "meta.portfolio.title": "Portfolio & Case Studies — SIRIUS Digital Solutions",
      "meta.portfolio.desc":
        "Selected digital products, cloud migrations, and automation systems engineered by SIRIUS Digital Solutions.",
      "meta.about.title": "About Us — SIRIUS Digital Solutions",
      "meta.about.desc":
        "Discover the mission, engineering values, and technical capabilities behind SIRIUS Digital Solutions.",
      "meta.contact.title": "Contact — SIRIUS Digital Solutions",
      "meta.contact.desc":
        "Start a conversation with SIRIUS Digital Solutions about your web, cloud, data, or AI project.",
      "meta.legal.title": "Legal Notice & Privacy — SIRIUS Digital Solutions",
      "meta.legal.desc":
        "Legal notice (Mentions légales) and GDPR privacy policy for SIRIUS Digital Solutions.",
      "meta.404.title": "Page Not Found — SIRIUS Digital Solutions",
      "meta.404.desc": "The requested page could not be found.",

      // Shared Chrome
      "skip.content": "Skip to main content",
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.portfolio": "Portfolio",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.cta": "Start a Project",
      "nav.menuOpen": "Open navigation menu",
      "nav.menuClose": "Close navigation menu",

      "footer.tagline":
        "Engineering reliable web platforms, scalable cloud foundations, and intelligent automation tailored for modern teams.",
      "footer.company": "Company",
      "footer.solutions": "Solutions",
      "footer.connect": "Connect",
      "footer.sol.web": "Web & Mobile Apps",
      "footer.sol.cloud": "Cloud & DevOps",
      "footer.sol.data": "Data Engineering",
      "footer.sol.ai": "AI & Automation",
      "footer.location": "France · Remote Worldwide",
      "footer.rights": "All rights reserved.",
      "footer.legal": "Legal Notice & Privacy",

      // Shared CTA
      "cta.eyebrow": "Ready to build?",
      "cta.title": "Let’s turn your next digital initiative into shipped software.",
      "cta.desc":
        "Share your goals and timeline — we will reply within one business day with a clear technical perspective.",
      "cta.primary": "Book a Discovery Call",
      "cta.secondary": "Explore Case Studies",

      // Home Page
      "home.hero.eyebrow": "Digital Engineering Studio",
      "home.hero.title": "Guiding ambitious teams from architecture to production.",
      "home.hero.lead":
        "SIRIUS Digital Solutions partners with founders and enterprises to build resilient web platforms, modern cloud data pipelines, and pragmatic AI workflows.",
      "home.hero.ctaPrimary": "Start a Project",
      "home.hero.ctaSecondary": "View Portfolio",
      "home.hero.cardCaption":
        "Clarity, velocity, and long-term maintainability across every release.",

      "home.stats.1.val": "End-to-End",
      "home.stats.1.lbl": "From discovery & UX to cloud deployment",
      "home.stats.2.val": "Cloud-Native",
      "home.stats.2.lbl": "Built for resilience, security & cost control",
      "home.stats.3.val": "EN / FR",
      "home.stats.3.lbl": "Bilingual delivery across Europe & remote",
      "home.stats.4.val": "< 24h",
      "home.stats.4.lbl": "Direct engineering response turnaround",

      "home.services.eyebrow": "What We Do",
      "home.services.title": "Focused capabilities built for measurable impact",
      "home.services.lead":
        "Every engagement combines clean system design, transparent communication, and production-grade execution.",
      "home.services.1.title": "Web & Product Engineering",
      "home.services.1.desc":
        "Fast, accessible web applications, customer portals, and APIs built with modern standards.",
      "home.services.2.title": "Cloud & DevOps Foundations",
      "home.services.2.desc":
        "Automated CI/CD, Infrastructure as Code, observability, and zero-downtime deployments.",
      "home.services.3.title": "Data & AI Automation",
      "home.services.3.desc":
        "Reliable ELT pipelines, analytics dashboards, and practical LLM workflows grounded in your data.",
      "home.services.more": "Explore all services →",

      "home.work.eyebrow": "Selected Work",
      "home.work.title": "Templates of impact across industries",
      "home.work.lead":
        "Preview representative engagements across SaaS platforms, cloud modernization, and automated operations.",
      "home.work.more": "View full portfolio →",

      "home.process.eyebrow": "How We Work",
      "home.process.title": "A clear, predictable delivery cadence",
      "home.process.1.title": "Discover & Align",
      "home.process.1.desc":
        "Clarify business goals, constraints, and success metrics before writing a single line of code.",
      "home.process.2.title": "Architect",
      "home.process.2.desc":
        "Design modular boundaries, data models, and pragmatic infrastructure tailored to your scale.",
      "home.process.3.title": "Build & Verify",
      "home.process.3.desc":
        "Ship in weekly increments backed by automated tests, code reviews, and staging previews.",
      "home.process.4.title": "Launch & Evolve",
      "home.process.4.desc":
        "Monitor production health, optimize performance, and hand over clean documentation.",

      // Services Page
      "services.hero.eyebrow": "Services & Solutions",
      "services.hero.title": "Technical capabilities tailored to your stage of growth.",
      "services.hero.lead":
        "Whether launching a v1 product or modernizing mission-critical infrastructure, we deliver clean codebases your team can own.",

      "services.offer.1.meta": "01 · Applications",
      "services.offer.1.title": "Custom Web & Mobile Platforms",
      "services.offer.1.desc":
        "Responsive SaaS interfaces, B2B client portals, and high-reliability backend APIs engineered for speed and accessibility.",
      "services.offer.1.b1": "Architecture & responsive UI implementation",
      "services.offer.1.b2": "REST / GraphQL API design & authentication",
      "services.offer.1.b3": "Core Web Vitals & WCAG accessibility tuning",

      "services.offer.2.meta": "02 · Infrastructure",
      "services.offer.2.title": "Cloud Architecture & DevOps",
      "services.offer.2.desc":
        "Reproducible cloud environments with automated testing, container orchestration, and transparent FinOps cost controls.",
      "services.offer.2.b1": "Terraform / IaC & multi-environment setups",
      "services.offer.2.b2": "GitHub Actions CI/CD & release automation",
      "services.offer.2.b3": "Monitoring, alerting & security hardening",

      "services.offer.3.meta": "03 · Data",
      "services.offer.3.title": "Data Pipelines & Analytics",
      "services.offer.3.desc":
        "Clean ingestion and transformation workflows turning fragmented operational data into trusted decision-making assets.",
      "services.offer.3.b1": "Modern ELT pipelines (BigQuery, dbt, Spark)",
      "services.offer.3.b2": "Data quality checks & schema governance",
      "services.offer.3.b3": "Executive KPI dashboards & self-serve views",

      "services.offer.4.meta": "04 · Intelligence",
      "services.offer.4.title": "AI Integration & Automation",
      "services.offer.4.desc":
        "Pragmatic AI assistants, document processing, and workflow automation integrated safely into existing business tools.",
      "services.offer.4.b1": "RAG knowledge search & internal copilots",
      "services.offer.4.b2": "Automated triage, summarization & extraction",
      "services.offer.4.b3": "Evaluation harnesses & human-in-the-loop guardrails",

      "services.models.eyebrow": "Engagement Models",
      "services.models.title": "Flexible ways to partner",
      "services.models.1.title": "Fixed-Scope MVP",
      "services.models.1.desc":
        "Ideal for validating a new product or internal tool with a defined scope, timeline, and budget.",
      "services.models.2.title": "Embedded Engineering",
      "services.models.2.desc":
        "Senior engineering capacity integrated directly into your sprints, repos, and Slack/Teams channels.",
      "services.models.3.title": "Architecture & Code Audit",
      "services.models.3.desc":
        "Focused 1–2 week review of performance, security, cloud spend, and refactoring roadmap.",

      "services.faq.eyebrow": "FAQ",
      "services.faq.title": "Common questions",
      "services.faq.1.q": "Who owns the source code and intellectual property?",
      "services.faq.1.a":
        "You retain 100% ownership of all custom source code, infrastructure templates, and documentation produced during the engagement.",
      "services.faq.2.q": "Can we collaborate in French or English?",
      "services.faq.2.a":
        "Yes. All workshops, documentation, and weekly demos can be conducted fluently in English or French.",
      "services.faq.3.q": "How quickly can a project kick off?",
      "services.faq.3.a":
        "Discovery calls are typically scheduled within 48 hours, with architecture framing starting the following week.",
      "services.faq.4.q": "Do you support existing codebases?",
      "services.faq.4.a":
        "Yes. We frequently step into legacy or fast-grown codebases to add test coverage, resolve bottlenecks, and modernize deployments.",

      // Portfolio Page
      "portfolio.hero.eyebrow": "Portfolio & Case Studies",
      "portfolio.hero.title": "Representative solutions built for clarity and scale.",
      "portfolio.hero.lead":
        "Explore template case studies across web platforms, cloud data systems, and AI-assisted workflows. Click any project to inspect the full breakdown.",
      "portfolio.filter.all": "All Projects",
      "portfolio.filter.web": "Web & Apps",
      "portfolio.filter.cloud": "Cloud & Data",
      "portfolio.filter.ai": "AI & Automation",
      "portfolio.btn.inspect": "View Case Study",
      "portfolio.count.label": "Showing {count} project(s)",
      "portfolio.modal.challenge": "The Challenge",
      "portfolio.modal.solution": "The Solution",
      "portfolio.modal.outcomes": "Key Outcomes",
      "portfolio.modal.stack": "Technology Stack",
      "portfolio.modal.cta": "Build something similar",
      "portfolio.modal.close": "Close",

      // About Page
      "about.hero.eyebrow": "About SIRIUS Digital Solutions",
      "about.hero.title": "Named after the brightest star — engineered to bring direction to complex tech.",
      "about.hero.lead":
        "We believe great software feels effortless to users and transparent to the teams maintaining it.",
      "about.story.eyebrow": "Our Philosophy",
      "about.story.title": "Pragmatic engineering over hype",
      "about.story.p1":
        "SIRIUS Digital Solutions was founded to bridge the gap between strategic business needs and clean, reliable software execution. Too many digital projects stall under accidental complexity or disconnected vendors.",
      "about.story.p2":
        "We keep teams lean, senior, and directly accountable—pairing solid architectural fundamentals with modern cloud and AI tooling where it delivers real leverage.",
      "about.values.eyebrow": "Core Principles",
      "about.values.title": "How we make decisions",
      "about.values.1.title": "Clarity First",
      "about.values.1.desc": "Simple architectures, readable code, and honest trade-offs.",
      "about.values.2.title": "Built to Last",
      "about.values.2.desc": "Automated checks, typed interfaces, and maintainable modules.",
      "about.values.3.title": "Security by Design",
      "about.values.3.desc": "Least-privilege access, GDPR awareness, and clean dependency hygiene.",
      "about.values.4.title": "Measurable Outcomes",
      "about.values.4.desc": "Every sprint ties back to user value, latency, or operational savings.",
      "about.team.eyebrow": "Leadership",
      "about.team.title": "Meet the studio",
      "about.team.role": "Founder & Principal Solutions Architect",
      "about.team.bio":
        "Replace this template bio with your background, core specialties, certifications, and notable industries served.",
      "about.stack.eyebrow": "Technical Ecosystem",
      "about.stack.title": "Tools we trust in production",

      // Contact Page
      "contact.hero.eyebrow": "Contact",
      "contact.hero.title": "Tell us about your project.",
      "contact.hero.lead":
        "Have a product idea, technical bottleneck, or modernization roadmap? Drop us a note and we’ll respond promptly.",
      "contact.info.email.title": "Direct Email",
      "contact.info.email.note": "Ideal for RFPs, technical briefs, or quick introductions.",
      "contact.info.loc.title": "Location & Timezone",
      "contact.info.loc.val": "France (CET / CEST) · Remote worldwide",
      "contact.info.sla.title": "Response Time",
      "contact.info.sla.val": "Typically within 24 business hours.",
      "contact.form.title": "Send a message",
      "contact.form.name": "Full Name *",
      "contact.form.namePh": "Alex Martin",
      "contact.form.email": "Work Email *",
      "contact.form.emailPh": "alex@company.com",
      "contact.form.company": "Company / Organization",
      "contact.form.companyPh": "Acme SAS",
      "contact.form.service": "Area of Interest",
      "contact.form.service.opt1": "Web & Mobile Application",
      "contact.form.service.opt2": "Cloud & DevOps Architecture",
      "contact.form.service.opt3": "Data Engineering & Analytics",
      "contact.form.service.opt4": "AI Integration & Automation",
      "contact.form.service.opt5": "Technical Audit / Consulting",
      "contact.form.budget": "Estimated Budget (Optional)",
      "contact.form.budget.opt0": "Prefer to discuss later",
      "contact.form.budget.opt1": "< €5,000",
      "contact.form.budget.opt2": "€5,000 – €15,000",
      "contact.form.budget.opt3": "€15,000 – €40,000",
      "contact.form.budget.opt4": "€40,000+",
      "contact.form.message": "Project Details *",
      "contact.form.messagePh": "Share your goals, timeline, and any existing stack details...",
      "contact.form.consent":
        "I agree that SIRIUS Digital Solutions may process this information solely to respond to my inquiry, in line with the Privacy Policy.",
      "contact.form.submit": "Send Message",
      "contact.form.sending": "Sending...",
      "contact.form.errRequired": "Please fill in all required fields and accept the privacy consent.",
      "contact.form.errEmail": "Please enter a valid email address.",
      "contact.form.success":
        "Thank you! Your message has been sent. We will reply within one business day.",
      "contact.form.fallback":
        "Form endpoint not yet configured on this static template. Click below to open your email client with your pre-filled message:",
      "contact.form.mailtoBtn": "Open in Email Client",
      "contact.form.errorNetwork":
        "We could not submit the form right now. Please try again or email contact@siriusds.fr directly.",

      // Legal Page
      "legal.hero.eyebrow": "Legal & Compliance",
      "legal.hero.title": "Legal Notice & Privacy Policy",
      "legal.hero.lead":
        "Regulatory disclosures (Mentions légales) and GDPR data protection commitments for www.siriusds.fr.",
      "legal.s1.title": "1. Website Publisher (Éditeur du site)",
      "legal.s1.body":
        "This website (www.siriusds.fr) is published by SIRIUS Digital Solutions. Before final go-live, replace the bracketed template placeholders below with your registered legal details:",
      "legal.s1.li1": "Company Name / Raison sociale: SIRIUS Digital Solutions [Legal Form: e.g. SASU / EI]",
      "legal.s1.li2": "Registration (SIREN / SIRET): [To be completed]",
      "legal.s1.li3": "Registered Office: [Street Address, Postal Code, City, France]",
      "legal.s1.li4": "Publication Director: [Full Name], contact@siriusds.fr",
      "legal.s2.title": "2. Hosting Provider (Hébergement)",
      "legal.s2.body":
        "This static website is hosted via GitHub Pages (GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA).",
      "legal.s3.title": "3. Personal Data & GDPR (Protection des données)",
      "legal.s3.body":
        "Data submitted through our contact form (name, email, company, and project message) is used exclusively to evaluate and respond to your request. It is never sold or shared with third parties for marketing.",
      "legal.s3.li1": "Retention period: up to 24 months after last correspondence unless a commercial contract is established.",
      "legal.s3.li2": "Your rights: access, rectification, deletion, or portability by emailing contact@siriusds.fr.",
      "legal.s4.title": "4. Cookies & Tracking",
      "legal.s4.body":
        "This site uses zero advertising trackers or third-party analytics cookies. Only a functional localStorage entry ('sirius-lang') is stored locally in your browser to remember your EN/FR language choice.",

      // 404 Page
      "404.eyebrow": "404 · Off Course",
      "404.title": "This page drifted out of orbit.",
      "404.desc":
        "The URL may have moved or no longer exists. Use the links below to navigate back to SIRIUS Digital Solutions.",
      "404.home": "Back to Home",
      "404.contact": "Contact Us"
    },

    fr: {
      // Meta per page
      "meta.home.title": "SIRIUS Digital Solutions — Ingénierie Logicielle, Cloud & IA",
      "meta.home.desc":
        "SIRIUS Digital Solutions conçoit et développe des plateformes web sur mesure, architectures cloud & data et automatisations IA pragmatiques.",
      "meta.services.title": "Services & Solutions — SIRIUS Digital Solutions",
      "meta.services.desc":
        "Découvrez nos services en développement web, architecture cloud, ingénierie data et automatisation IA.",
      "meta.portfolio.title": "Portfolio & Études de Cas — SIRIUS Digital Solutions",
      "meta.portfolio.desc":
        "Sélection de produits numériques, migrations cloud et systèmes d’automatisation réalisés par SIRIUS Digital Solutions.",
      "meta.about.title": "À propos — SIRIUS Digital Solutions",
      "meta.about.desc":
        "Découvrez la mission, les valeurs d’ingénierie et l’expertise technique de SIRIUS Digital Solutions.",
      "meta.contact.title": "Contact — SIRIUS Digital Solutions",
      "meta.contact.desc":
        "Échangez avec SIRIUS Digital Solutions au sujet de votre projet web, cloud, data ou IA.",
      "meta.legal.title": "Mentions Légales & Confidentialité — SIRIUS Digital Solutions",
      "meta.legal.desc":
        "Mentions légales et politique de protection des données (RGPD) de SIRIUS Digital Solutions.",
      "meta.404.title": "Page introuvable — SIRIUS Digital Solutions",
      "meta.404.desc": "La page demandée est introuvable.",

      // Shared Chrome
      "skip.content": "Aller au contenu principal",
      "nav.home": "Accueil",
      "nav.services": "Services",
      "nav.portfolio": "Portfolio",
      "nav.about": "À propos",
      "nav.contact": "Contact",
      "nav.cta": "Démarrer un projet",
      "nav.menuOpen": "Ouvrir le menu de navigation",
      "nav.menuClose": "Fermer le menu de navigation",

      "footer.tagline":
        "Ingénierie de plateformes web fiables, fondations cloud évolutives et automatisations intelligentes pour équipes modernes.",
      "footer.company": "Entreprise",
      "footer.solutions": "Solutions",
      "footer.connect": "Contact",
      "footer.sol.web": "Applications Web & Mobile",
      "footer.sol.cloud": "Cloud & DevOps",
      "footer.sol.data": "Ingénierie Data",
      "footer.sol.ai": "IA & Automatisation",
      "footer.location": "France · Remote à l’international",
      "footer.rights": "Tous droits réservés.",
      "footer.legal": "Mentions légales & RGPD",

      // Shared CTA
      "cta.eyebrow": "Prêt à construire ?",
      "cta.title": "Transformons votre prochain projet numérique en produit fiable.",
      "cta.desc":
        "Partagez vos objectifs et délais — nous vous répondons sous 24h ouvrées avec un premier éclairage technique.",
      "cta.primary": "Planifier un échange",
      "cta.secondary": "Voir les réalisations",

      // Home Page
      "home.hero.eyebrow": "Studio d’ingénierie numérique",
      "home.hero.title": "Guider les équipes ambitieuses de l’architecture à la production.",
      "home.hero.lead":
        "SIRIUS Digital Solutions accompagne dirigeants et équipes techniques dans la création de plateformes web robustes, pipelines data cloud et workflows IA pragmatiques.",
      "home.hero.ctaPrimary": "Démarrer un projet",
      "home.hero.ctaSecondary": "Voir le portfolio",
      "home.hero.cardCaption":
        "Clarté, vélocité et maintenabilité durable à chaque mise en production.",

      "home.stats.1.val": "De bout en bout",
      "home.stats.1.lbl": "De la conception UX au déploiement cloud",
      "home.stats.2.val": "Cloud-Native",
      "home.stats.2.lbl": "Conçu pour la résilience, sécurité & FinOps",
      "home.stats.3.val": "FR / EN",
      "home.stats.3.lbl": "Accompagnement bilingue en France et à distance",
      "home.stats.4.val": "< 24h",
      "home.stats.4.lbl": "Réponse directe par un interlocuteur technique",

      "home.services.eyebrow": "Nos expertises",
      "home.services.title": "Des compétences ciblées pour un impact mesurable",
      "home.services.lead":
        "Chaque mission associe architecture propre, communication transparente et exécution prête pour la production.",
      "home.services.1.title": "Développement Web & Produit",
      "home.services.1.desc":
        "Applications web rapides et accessibles, portails clients et APIs conçues selon les standards modernes.",
      "home.services.2.title": "Fondations Cloud & DevOps",
      "home.services.2.desc":
        "CI/CD automatisée, Infrastructure as Code, observabilité et déploiements sans interruption.",
      "home.services.3.title": "Data & Automatisation IA",
      "home.services.3.desc":
        "Pipelines ELT fiables, tableaux de bord analytiques et workflows LLM ancrés dans vos données.",
      "home.services.more": "Découvrir tous nos services →",

      "home.work.eyebrow": "Réalisations",
      "home.work.title": "Exemples d’impact par secteur",
      "home.work.lead":
        "Aperçu de cas représentatifs couvrant plateformes SaaS, modernisation cloud et automatisation métier.",
      "home.work.more": "Voir tout le portfolio →",

      "home.process.eyebrow": "Notre méthode",
      "home.process.title": "Une cadence de livraison claire et prévisible",
      "home.process.1.title": "Cadrage & Alignement",
      "home.process.1.desc":
        "Clarifier les objectifs métier, contraintes et indicateurs de succès avant la première ligne de code.",
      "home.process.2.title": "Architecture",
      "home.process.2.desc":
        "Concevoir des frontières modulaires, modèles de données et infrastructures adaptées à votre échelle.",
      "home.process.3.title": "Développement & Tests",
      "home.process.3.desc":
        "Livrer par itérations hebdomadaires avec tests automatisés, revues de code et prévisualisations.",
      "home.process.4.title": "Lancement & Évolution",
      "home.process.4.desc":
        "Superviser la production, optimiser les performances et transmettre une documentation claire.",

      // Services Page
      "services.hero.eyebrow": "Services & Solutions",
      "services.hero.title": "Une expertise technique adaptée à votre phase de croissance.",
      "services.hero.lead":
        "Lancement d’un premier produit ou modernisation d’un système critique : nous livrons des bases saines que vos équipes maîtrisent.",

      "services.offer.1.meta": "01 · Applications",
      "services.offer.1.title": "Plateformes Web & Mobile sur mesure",
      "services.offer.1.desc":
        "Interfaces SaaS réactives, portails B2B et APIs haute disponibilité pensées pour la performance et l’accessibilité.",
      "services.offer.1.b1": "Architecture et intégration UI responsive",
      "services.offer.1.b2": "Conception d’APIs REST / GraphQL & authentification",
      "services.offer.1.b3": "Optimisation Core Web Vitals & accessibilité WCAG",

      "services.offer.2.meta": "02 · Infrastructure",
      "services.offer.2.title": "Architecture Cloud & DevOps",
      "services.offer.2.desc":
        "Environnements cloud reproductibles avec intégration continue, conteneurisation et maîtrise des coûts FinOps.",
      "services.offer.2.b1": "Terraform / IaC & environnements multi-stages",
      "services.offer.2.b2": "Pipelines CI/CD GitHub Actions & automatisation",
      "services.offer.2.b3": "Supervision, alertes et durcissement sécurité",

      "services.offer.3.meta": "03 · Data",
      "services.offer.3.title": "Pipelines Data & Analytique",
      "services.offer.3.desc":
        "Flux d’ingestion et de transformation fiables transformant vos données éparses en actifs décisionnels.",
      "services.offer.3.b1": "Pipelines ELT modernes (BigQuery, dbt, Spark)",
      "services.offer.3.b2": "Contrôles de qualité et gouvernance des schémas",
      "services.offer.3.b3": "Tableaux de bord KPI et vues en libre-service",

      "services.offer.4.meta": "04 · Intelligence",
      "services.offer.4.title": "Intégration IA & Automatisation",
      "services.offer.4.desc":
        "Assistants métier, traitement documentaire et automatisation intégrés en toute sécurité à vos outils existants.",
      "services.offer.4.b1": "Recherche documentaire RAG & copilotes internes",
      "services.offer.4.b2": "Tri automatisé, synthèse et extraction structurée",
      "services.offer.4.b3": "Évaluation continue et garde-fous humains",

      "services.models.eyebrow": "Modes d’engagement",
      "services.models.title": "Des formats de collaboration flexibles",
      "services.models.1.title": "MVP au forfait",
      "services.models.1.desc":
        "Idéal pour valider un nouveau produit ou outil interne avec un périmètre, un délai et un budget maîtrisés.",
      "services.models.2.title": "Renfort d’ingénierie",
      "services.models.2.desc":
        "Capacité senior intégrée directement dans vos sprints, dépôts Git et rituels d’équipe.",
      "services.models.3.title": "Audit Technique & Architecture",
      "services.models.3.desc":
        "Revue ciblée sur 1 à 2 semaines : performance, sécurité, coûts cloud et feuille de route.",

      "services.faq.eyebrow": "FAQ",
      "services.faq.title": "Questions fréquentes",
      "services.faq.1.q": "À qui appartiennent le code source et la propriété intellectuelle ?",
      "services.faq.1.a":
        "Vous conservez 100 % de la propriété du code source, des scripts d’infrastructure et de la documentation produits.",
      "services.faq.2.q": "Pouvons-nous collaborer en français ou en anglais ?",
      "services.faq.2.a":
        "Oui. Tous les ateliers, livrables écrits et démonstrations hebdomadaires peuvent se dérouler en français ou en anglais.",
      "services.faq.3.q": "Sous quel délai un projet peut-il démarrer ?",
      "services.faq.3.a":
        "Un premier échange de cadrage est généralement planifié sous 48h, avec un démarrage d’architecture dès la semaine suivante.",
      "services.faq.4.q": "Intervenez-vous sur des applications existantes ?",
      "services.faq.4.a":
        "Oui. Nous reprenons régulièrement des bases existantes pour ajouter des tests, lever des goulets d’étranglement et fiabiliser les déploiements.",

      // Portfolio Page
      "portfolio.hero.eyebrow": "Portfolio & Études de cas",
      "portfolio.hero.title": "Des solutions représentatives pensées pour durer.",
      "portfolio.hero.lead":
        "Parcourez nos études de cas modèles en plateformes web, systèmes cloud & data et automatisation IA. Cliquez sur un projet pour voir le détail.",
      "portfolio.filter.all": "Tous les projets",
      "portfolio.filter.web": "Web & Apps",
      "portfolio.filter.cloud": "Cloud & Data",
      "portfolio.filter.ai": "IA & Automatisation",
      "portfolio.btn.inspect": "Voir l’étude de cas",
      "portfolio.count.label": "{count} projet(s) affiché(s)",
      "portfolio.modal.challenge": "Le défi",
      "portfolio.modal.solution": "La solution",
      "portfolio.modal.outcomes": "Résultats clés",
      "portfolio.modal.stack": "Technologies",
      "portfolio.modal.cta": "Construire un projet similaire",
      "portfolio.modal.close": "Fermer",

      // About Page
      "about.hero.eyebrow": "À propos de SIRIUS Digital Solutions",
      "about.hero.title": "Inspiré par l’étoile la plus brillante — apporter du cap aux systèmes complexes.",
      "about.hero.lead":
        "Nous pensons qu’un bon logiciel doit paraître fluide pour l’utilisateur et lisible pour l’équipe qui l’opère.",
      "about.story.eyebrow": "Notre approche",
      "about.story.title": "L’ingénierie pragmatique avant les effets de mode",
      "about.story.p1":
        "SIRIUS Digital Solutions est né d’un constat simple : trop de projets numériques ralentissent à cause d’une complexité évitable ou d’intermédiaires déconnectés du terrain.",
      "about.story.p2":
        "Nous privilégions des équipes resserrées, expérimentées et responsables, alliant fondamentaux d’architecture éprouvés et leviers cloud & IA réellement utiles.",
      "about.values.eyebrow": "Nos principes",
      "about.values.title": "Ce qui guide nos choix",
      "about.values.1.title": "Clarté avant tout",
      "about.values.1.desc": "Architectures sobres, code lisible et arbitrages transparents.",
      "about.values.2.title": "Conçu pour durer",
      "about.values.2.desc": "Tests automatisés, typage strict et modules maintenables.",
      "about.values.3.title": "Sécurité intégrée",
      "about.values.3.desc": "Moindre privilège, conformité RGPD et hygiène des dépendances.",
      "about.values.4.title": "Impact mesurable",
      "about.values.4.desc": "Chaque itération sert la valeur utilisateur, la latence ou les coûts.",
      "about.team.eyebrow": "Direction",
      "about.team.title": "L’équipe du studio",
      "about.team.role": "Fondateur & Architecte Solutions Principal",
      "about.team.bio":
        "Remplacez cette biographie modèle par votre parcours, vos spécialités techniques, certifications et secteurs accompagnés.",
      "about.stack.eyebrow": "Écosystème technique",
      "about.stack.title": "Des outils éprouvés en production",

      // Contact Page
      "contact.hero.eyebrow": "Contact",
      "contact.hero.title": "Parlons de votre projet.",
      "contact.hero.lead":
        "Un nouveau produit, un défi d’architecture ou un projet d’automatisation ? Écrivez-nous pour échanger rapidement.",
      "contact.info.email.title": "Email direct",
      "contact.info.email.note": "Idéal pour un cahier des charges, un besoin précis ou une prise de contact.",
      "contact.info.loc.title": "Localisation & Fuseau",
      "contact.info.loc.val": "France (CET / CEST) · Remote à l’international",
      "contact.info.sla.title": "Délai de réponse",
      "contact.info.sla.val": "Généralement sous 24 heures ouvrées.",
      "contact.form.title": "Envoyer un message",
      "contact.form.name": "Nom complet *",
      "contact.form.namePh": "Camille Martin",
      "contact.form.email": "Email professionnel *",
      "contact.form.emailPh": "camille@entreprise.fr",
      "contact.form.company": "Entreprise / Organisation",
      "contact.form.companyPh": "Entreprise SAS",
      "contact.form.service": "Domaine souhaité",
      "contact.form.service.opt1": "Application Web & Mobile",
      "contact.form.service.opt2": "Architecture Cloud & DevOps",
      "contact.form.service.opt3": "Ingénierie Data & Analytique",
      "contact.form.service.opt4": "Intégration IA & Automatisation",
      "contact.form.service.opt5": "Audit Technique / Conseil",
      "contact.form.budget": "Budget estimé (Optionnel)",
      "contact.form.budget.opt0": "À définir ensemble",
      "contact.form.budget.opt1": "< 5 000 €",
      "contact.form.budget.opt2": "5 000 € – 15 000 €",
      "contact.form.budget.opt3": "15 000 € – 40 000 €",
      "contact.form.budget.opt4": "40 000 € +",
      "contact.form.message": "Détails du projet *",
      "contact.form.messagePh": "Décrivez vos objectifs, échéances et contexte technique éventuel...",
      "contact.form.consent":
        "J’accepte que SIRIUS Digital Solutions traite ces données uniquement pour répondre à ma demande, conformément à la politique de confidentialité.",
      "contact.form.submit": "Envoyer le message",
      "contact.form.sending": "Envoi en cours...",
      "contact.form.errRequired":
        "Veuillez renseigner tous les champs obligatoires et accepter la case de consentement.",
      "contact.form.errEmail": "Veuillez saisir une adresse email valide.",
      "contact.form.success":
        "Merci ! Votre message a bien été envoyé. Nous vous répondrons sous un jour ouvré.",
      "contact.form.fallback":
        "Aucun endpoint de formulaire n’est encore configuré sur ce modèle statique. Cliquez ci-dessous pour ouvrir votre messagerie avec le texte pré-rempli :",
      "contact.form.mailtoBtn": "Ouvrir dans la messagerie",
      "contact.form.errorNetwork":
        "Impossible d’envoyer le formulaire pour le moment. Réessayez ou écrivez directement à contact@siriusds.fr.",

      // Legal Page
      "legal.hero.eyebrow": "Informations légales",
      "legal.hero.title": "Mentions légales & Confidentialité",
      "legal.hero.lead":
        "Informations réglementaires et engagements RGPD applicables au site www.siriusds.fr.",
      "legal.s1.title": "1. Éditeur du site",
      "legal.s1.body":
        "Le présent site (www.siriusds.fr) est édité par SIRIUS Digital Solutions. Avant mise en ligne définitive, remplacez les champs modèles ci-dessous par vos informations légales :",
      "legal.s1.li1": "Raison sociale : SIRIUS Digital Solutions [Forme juridique : ex. SASU / EI]",
      "legal.s1.li2": "Numéro SIREN / SIRET : [À compléter]",
      "legal.s1.li3": "Siège social : [Adresse complète, Code postal, Ville, France]",
      "legal.s1.li4": "Directeur de la publication : [Nom complet], contact@siriusds.fr",
      "legal.s2.title": "2. Hébergement",
      "legal.s2.body":
        "Ce site statique est hébergé via GitHub Pages (GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis).",
      "legal.s3.title": "3. Données personnelles & RGPD",
      "legal.s3.body":
        "Les données transmises via le formulaire de contact (nom, email, société et message) sont utilisées uniquement pour traiter et répondre à votre demande. Elles ne sont ni revendues ni cédées à des tiers.",
      "legal.s3.li1":
        "Durée de conservation : 24 mois maximum après le dernier échange hors relation contractuelle.",
      "legal.s3.li2":
        "Vos droits (accès, rectification, suppression, portabilité) : écrivez à contact@siriusds.fr.",
      "legal.s4.title": "4. Cookies & Traceurs",
      "legal.s4.body":
        "Ce site n’utilise aucun cookie publicitaire ni traceur tiers. Seule une clé technique locale ('sirius-lang') est enregistrée dans votre navigateur pour mémoriser votre choix de langue FR/EN.",

      // 404 Page
      "404.eyebrow": "404 · Hors trajectoire",
      "404.title": "Cette page a quitté son orbite.",
      "404.desc":
        "L’adresse demandée a peut-être été déplacée ou n’existe plus. Utilisez les liens ci-dessous pour revenir sur le site.",
      "404.home": "Retour à l’accueil",
      "404.contact": "Nous contacter"
    }
  };

  function detectInitialLang() {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("lang");
    if (SUPPORTED_LANGS.includes(fromQuery)) return fromQuery;

    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (SUPPORTED_LANGS.includes(saved)) return saved;
    } catch {
      // Ignore storage access restrictions
    }

    const browserLang = (navigator.language || "en").slice(0, 2).toLowerCase();
    return SUPPORTED_LANGS.includes(browserLang) ? browserLang : "en";
  }

  let currentLang = detectInitialLang();

  function t(key, vars = {}) {
    const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
    let text = dict[key] ?? TRANSLATIONS.en[key] ?? key;
    for (const [k, v] of Object.entries(vars)) {
      text = text.replace(`{${k}}`, String(v));
    }
    return text;
  }

  function applyTranslations() {
    document.documentElement.lang = currentLang;

    const pageId = document.body.dataset.page;
    if (pageId) {
      const titleKey = `meta.${pageId}.title`;
      const descKey = `meta.${pageId}.desc`;
      if (TRANSLATIONS[currentLang]?.[titleKey]) {
        document.title = t(titleKey);
      }
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && TRANSLATIONS[currentLang]?.[descKey]) {
        metaDesc.setAttribute("content", t(descKey));
      }
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key) el.textContent = t(key);
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const spec = el.getAttribute("data-i18n-attr");
      if (!spec) return;
      spec.split(",").forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        if (attr && key) el.setAttribute(attr, t(key));
      });
    });

    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      const active = btn.getAttribute("data-lang-btn") === currentLang;
      btn.setAttribute("aria-pressed", String(active));
    });

    window.dispatchEvent(new CustomEvent("sirius:langchange", { detail: { lang: currentLang } }));
  }

  function setLang(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) return;
    currentLang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore storage errors
    }
    applyTranslations();
  }

  window.SiriusI18n = {
    getLang: () => currentLang,
    setLang,
    t,
    applyTranslations
  };
})();

