(() => {
  const STORAGE_KEY = "sirius-lang";
  const SUPPORTED_LANGS = ["en", "fr"];

  const TRANSLATIONS = {
    en: {
      // Meta per page
      "meta.home.title": "SIRIUS Digital Solutions — Software Engineering, CMS/ECM, CI/CD & AI",
      "meta.home.desc":
        "SIRIUS Digital Solutions builds custom web applications (Symfony, Spring Boot, Angular, React), integrates TYPO3, Ibexa & Nuxeo, automates CI/CD (GitLab, GitHub, Azure), and delivers applied AI & training.",
      "meta.services.title": "Services & Solutions — SIRIUS Digital Solutions",
      "meta.services.desc":
        "Full-stack development (PHP/Symfony, Java/Spring Boot, Angular, React), CMS & Nuxeo integrations, CI/CD pipelines, and AI Second Brain & team training.",
      "meta.portfolio.title": "Portfolio & Case Studies — SIRIUS Digital Solutions",
      "meta.portfolio.desc":
        "Selected software engineering, CMS/ECM integration, CI/CD automation, and applied AI projects by SIRIUS Digital Solutions.",
      "meta.about.title": "About Us — SIRIUS Digital Solutions",
      "meta.about.desc":
        "Discover the engineering background, values, and technical ecosystem behind SIRIUS Digital Solutions.",
      "meta.careers.title": "Join Us — SIRIUS Digital Solutions",
      "meta.careers.desc":
        "Explore engineering opportunities, freelance partnerships, and spontaneous applications at SIRIUS Digital Solutions.",
      "meta.contact.title": "Contact & Quotes — SIRIUS Digital Solutions",
      "meta.contact.desc":
        "Request a project quote, technical audit, or AI team training with SIRIUS Digital Solutions.",
      "meta.legal.title": "Legal Notice & Privacy — SIRIUS Digital Solutions",
      "meta.legal.desc":
        "Legal notice (Mentions légales) and GDPR privacy policy for SIRIUS Digital Solutions.",
      "meta.404.title": "Page Not Found — SIRIUS Digital Solutions",
      "meta.404.desc": "The requested page could not be found.",

      // Shared Chrome
      "skip.content": "Skip to main content",
      "nav.ariaPrimary": "Primary",
      "nav.ariaLang": "Language switcher",
      "nav.menuLabel": "Menu",
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.portfolio": "Portfolio",
      "nav.about": "About",
      "nav.careers": "Join Us",
      "nav.contact": "Contact",
      "nav.cta": "Start a Project",
      "nav.menuOpen": "Open navigation menu",
      "nav.menuClose": "Close navigation menu",

      "footer.tagline":
        "Full-stack software engineering, enterprise CMS & editor integrations, CI/CD automation, and practical AI enablement.",
      "footer.company": "Company",
      "footer.solutions": "Solutions",
      "footer.connect": "Connect",
      "footer.sol.web": "Web & Backend Apps",
      "footer.sol.cms": "TYPO3, Ibexa & Nuxeo",
      "footer.sol.cicd": "CI/CD (GitLab, GitHub, Azure)",
      "footer.sol.ai": "AI, Second Brain & Training",
      "footer.location": "France · Remote Worldwide",
      "footer.rights": "All rights reserved.",
      "footer.legal": "Legal Notice & Privacy",

      // Shared CTA
      "cta.eyebrow": "Ready to build?",
      "cta.title": "Let’s turn your next digital initiative into shipped software.",
      "cta.desc":
        "Share your goals and stack — we will reply within one business day with a clear technical perspective.",
      "cta.primary": "Book a Discovery Call",
      "cta.secondary": "Explore Case Studies",

      // Shared Copy Feedback
      "copy.emailLabel": "Copy email address",
      "copy.btn": "Copy",
      "copy.copied": "Copied",
      "copy.failed": "Copy failed",

      // Home Page
      "home.hero.eyebrow": "Software Engineering & AI Studio",
      "home.hero.title": "Guiding ambitious teams from architecture to production.",
      "home.hero.lead":
        "SIRIUS Digital Solutions builds custom web applications (Symfony, Spring Boot, Angular, React), integrates enterprise content platforms (TYPO3, Ibexa, Nuxeo), automates CI/CD pipelines, and empowers teams with applied AI & training.",
      "home.hero.ctaPrimary": "Start a Project",
      "home.hero.ctaSecondary": "View Portfolio",
      "home.hero.trust1": "Senior-led engineering",
      "home.hero.trust2": "Bilingual EN / FR",
      "home.hero.trust3": "EU & GDPR aligned",

      "home.panel.badge": "Production Ready",
      "home.panel.subtitle": "Core Capabilities",
      "home.panel.p1.title": "Full-Stack Development",
      "home.panel.p1.tag": "Symfony · Spring Boot · Angular · React",
      "home.panel.p2.title": "CMS, DXP & Editor Integration",
      "home.panel.p2.tag": "TYPO3 · Ibexa · Nuxeo",
      "home.panel.p3.title": "CI/CD & Applied AI",
      "home.panel.p3.tag": "GitLab · GitHub · Azure · AI Training",
      "home.panel.foot1": "Automated CI/CD & code quality",
      "home.panel.foot2": "< 24h response SLA",

      "home.stats.1.val": "Full-Stack",
      "home.stats.1.lbl": "PHP (Symfony), Java (Spring Boot), Angular & React",
      "home.stats.2.val": "DXP & ECM",
      "home.stats.2.lbl": "TYPO3, Ibexa & Nuxeo editor integrations",
      "home.stats.3.val": "CI/CD",
      "home.stats.3.lbl": "Automated delivery on GitLab, GitHub & Azure",
      "home.stats.4.val": "AI & Skills",
      "home.stats.4.lbl": "Second Brain systems, agent skills & team training",

      "home.services.eyebrow": "What We Do",
      "home.services.title": "Focused capabilities built for measurable impact",
      "home.services.lead":
        "Every engagement combines clean system design, transparent communication, and production-grade execution.",
      "home.services.1.title": "Web & Backend Engineering",
      "home.services.1.desc":
        "Scalable business applications, APIs, and modern front-ends built with Symfony, Spring Boot, Angular, and React.",
      "home.services.1.link": "Explore web engineering →",
      "home.services.2.title": "CMS, Editors & CI/CD",
      "home.services.2.desc":
        "Deep integrations with TYPO3, Ibexa, and Nuxeo paired with automated GitLab, GitHub, and Azure CI/CD pipelines.",
      "home.services.2.link": "Explore integrations & CI/CD →",
      "home.services.3.title": "Applied AI, Second Brain & Training",
      "home.services.3.desc":
        "Custom AI agent skills, structured Second Brain knowledge systems, and practical training for engineering teams.",
      "home.services.3.link": "Explore AI & training →",

      "home.work.eyebrow": "Selected Work",
      "home.work.title": "Proven architectures across core industries",
      "home.work.lead":
        "Preview representative engagements across web platforms, editor integrations, CI/CD automation, and AI enablement.",
      "home.work.more": "View full portfolio →",
      "home.work.cat.web": "Web & CMS/ECM",
      "home.work.cat.cicd": "CI/CD & DevOps",
      "home.work.cat.ai": "AI & Training",
      "home.work.inspect.ibexa": "View Ibexa & Symfony case study",
      "home.work.inspect.cicd": "View CI/CD automation case study",
      "home.work.inspect.ai": "View AI Second Brain case study",

      "home.process.eyebrow": "How We Work",
      "home.process.title": "A clear, predictable delivery cadence",
      "home.process.1.title": "Discover & Align",
      "home.process.1.desc":
        "Clarify business goals, existing platforms, and technical constraints before writing a single line of code.",
      "home.process.2.title": "Architect",
      "home.process.2.desc":
        "Design modular APIs, CMS/ECM connectors, and release workflows tailored to your stack.",
      "home.process.3.title": "Build & Verify",
      "home.process.3.desc":
        "Ship in weekly increments backed by automated tests, CI/CD checks, and code reviews.",
      "home.process.4.title": "Launch & Enable",
      "home.process.4.desc":
        "Deploy reliably, train your teams, and hand over maintainable documentation.",

      // Services Page
      "services.hero.eyebrow": "Services & Solutions",
      "services.hero.title": "Technical capabilities tailored to your stack and team.",
      "services.hero.lead":
        "From Symfony and Spring Boot platforms to TYPO3, Ibexa, Nuxeo, CI/CD automation, and AI team enablement—we deliver software your team can own.",

      "services.offer.1.meta": "01 · Applications",
      "services.offer.1.title": "Full-Stack Web & Backend Engineering",
      "services.offer.1.desc":
        "Maintainable enterprise web applications, B2B portals, and responsive interfaces engineered with proven frameworks.",
      "services.offer.1.b1": "Backend APIs & domain logic in PHP (Symfony) and Java (Spring Boot)",
      "services.offer.1.b2": "Rich client interfaces with Angular, React, and TypeScript",
      "services.offer.1.b3": "Automated testing, refactoring & WCAG accessibility tuning",

      "services.offer.2.meta": "02 · Content & Editors",
      "services.offer.2.title": "CMS, DXP & Editor Integrations",
      "services.offer.2.desc":
        "Seamless integration and modernization of enterprise content platforms, digital asset repositories, and editorial workflows.",
      "services.offer.2.b1": "Custom platforms & migrations on TYPO3 and Ibexa DXP",
      "services.offer.2.b2": "Nuxeo ECM/DAM connectors, metadata workflows & SSO",
      "services.offer.2.b3": "Headless APIs linking editors to Angular & React front-ends",

      "services.offer.3.meta": "03 · Delivery",
      "services.offer.3.title": "CI/CD & Release Automation",
      "services.offer.3.desc":
        "Predictable, automated build, test, and deployment pipelines across your preferred Git and cloud ecosystems.",
      "services.offer.3.b1": "Pipeline architecture on GitLab CI, GitHub Actions & Azure DevOps",
      "services.offer.3.b2": "Automated quality gates, linting, security scans & staging previews",
      "services.offer.3.b3": "Containerized builds (Docker) & zero-downtime release workflows",

      "services.offer.4.meta": "04 · Intelligence & Enablement",
      "services.offer.4.title": "Applied AI, Second Brain & Training",
      "services.offer.4.desc":
        "Pragmatic AI tooling and structured knowledge workflows designed to multiply engineering and team productivity.",
      "services.offer.4.b1": "Personal & organizational Second Brain knowledge architectures",
      "services.offer.4.b2": "Custom AI agent skills, MCP tooling & coding-assistant workflows",
      "services.offer.4.b3": "Hands-on AI training, workshops & adoption coaching for teams",

      "services.models.eyebrow": "Engagement Models",
      "services.models.title": "Flexible ways to partner",
      "services.models.1.meta": "2–6 Weeks · Fixed Scope",
      "services.models.1.title": "Feature, Integration or MVP",
      "services.models.1.desc":
        "Ideal for shipping a new portal, CMS/Nuxeo connector, CI/CD overhaul, or AI Second Brain setup with clear milestones.",
      "services.models.2.meta": "Ongoing · Sprint Integration",
      "services.models.2.title": "Embedded Engineering",
      "services.models.2.desc":
        "Senior Symfony, Spring Boot, Angular, or React capacity integrated directly into your sprints and Git workflows.",
      "services.models.3.meta": "Workshops & Audits · 1–2 Weeks",
      "services.models.3.title": "AI Training & Stack Audit",
      "services.models.3.desc":
        "Practical team training on AI coding workflows and skills, or focused architecture & CI/CD audits.",

      "services.faq.eyebrow": "FAQ",
      "services.faq.title": "Common questions",
      "services.faq.1.q": "Who owns the source code and intellectual property?",
      "services.faq.1.a":
        "You retain 100% ownership of all custom source code, CI/CD templates, AI skills, and documentation produced during the engagement.",
      "services.faq.2.q": "Can we collaborate in French or English?",
      "services.faq.2.a":
        "Yes. All workshops, training sessions, documentation, and weekly demos can be conducted fluently in English or French.",
      "services.faq.3.q": "How quickly can a project or training kick off?",
      "services.faq.3.a":
        "Discovery calls are typically scheduled within 48 hours, with architecture framing or training prep starting the following week.",
      "services.faq.4.q": "Do you support existing Symfony, TYPO3, Ibexa, or Spring Boot codebases?",
      "services.faq.4.a":
        "Yes. We frequently step into existing applications to upgrade framework versions, improve test coverage, integrate Nuxeo or external APIs, and modernize CI/CD.",
      "services.faq.5.q": "Can you work inside our GitLab, GitHub, or Azure DevOps environment?",
      "services.faq.5.a":
        "Yes. We integrate directly into your GitLab, GitHub, or Azure DevOps repositories, runners, and security policies without disrupting existing teams.",
      "services.faq.6.q": "What does your AI training & Second Brain offering cover?",
      "services.faq.6.a":
        "We design practical Second Brain knowledge bases, build reusable AI agent skills tailored to your codebase, and run hands-on workshops so teams adopt AI safely and effectively.",

      // Portfolio Page
      "portfolio.hero.eyebrow": "Portfolio & Case Studies",
      "portfolio.hero.title": "Representative solutions built for clarity and scale.",
      "portfolio.hero.lead":
        "Explore selected case studies across web & CMS/ECM engineering, CI/CD automation, and applied AI enablement. Select any project to inspect the full architecture and outcomes.",
      "portfolio.filter.aria": "Filter projects by category",
      "portfolio.filter.all": "All Projects",
      "portfolio.filter.web": "Web & CMS/ECM",
      "portfolio.filter.cicd": "CI/CD & DevOps",
      "portfolio.filter.ai": "AI & Training",
      "portfolio.btn.inspect": "View Case Study",
      "portfolio.count.label": "Showing {count} of {total} case studies",
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
        "We believe great software feels effortless to users, clean to developers, and transparent to the teams operating it.",
      "about.story.eyebrow": "Our Philosophy",
      "about.story.title": "Pragmatic engineering over hype",
      "about.story.p1":
        "SIRIUS Digital Solutions was founded to bridge the gap between business objectives and clean, dependable software execution. Too many projects slow down due to brittle integrations, manual release steps, or scattered team knowledge.",
      "about.story.p2":
        "We pair battle-tested backend, front-end, and CMS/ECM foundations with automated CI/CD pipelines and practical AI workflows—including Second Brain systems, custom skills, and hands-on team training.",
      "about.snapshot.title": "Studio Profile",
      "about.snapshot.badge": "France · Remote",
      "about.snapshot.r1.k": "Core Focus",
      "about.snapshot.r1.v": "Web · CMS/ECM · CI/CD · AI",
      "about.snapshot.r2.k": "Working Languages",
      "about.snapshot.r2.v": "English & French",
      "about.snapshot.r3.k": "Engagement",
      "about.snapshot.r3.v": "Build · Integrate · Train",
      "about.snapshot.r4.k": "Delivery Ethos",
      "about.snapshot.r4.v": "Clean, tested, documented",
      "about.values.eyebrow": "Core Principles",
      "about.values.title": "How we make decisions",
      "about.values.1.title": "Clarity First",
      "about.values.1.desc": "Clean domain boundaries, readable code, and honest architectural trade-offs.",
      "about.values.2.title": "Built to Last",
      "about.values.2.desc": "Automated tests, strict typing, and upgrade-friendly framework practices.",
      "about.values.3.title": "Automated Delivery",
      "about.values.3.desc": "Repeatable CI/CD pipelines, quality gates, and zero-surprise deployments.",
      "about.values.4.title": "Human Enablement",
      "about.values.4.desc": "Practical AI skills, Second Brain workflows, and training that empower your team.",
      "about.team.eyebrow": "Leadership",
      "about.team.title": "Meet the studio",
      "about.team.role": "Founder & Principal Software Architect",
      "about.team.bio":
        "Full-stack software architect and AI trainer based in France, specializing in PHP (Symfony, TYPO3, Ibexa), Java (Spring Boot), JavaScript/TypeScript (Angular, React), enterprise content integrations (Nuxeo), CI/CD pipelines (GitLab, GitHub, Azure), and applied AI systems (Second Brain & agent skills).",
      "about.stack.eyebrow": "Technical Ecosystem",
      "about.stack.title": "Tools we trust in production",
      "about.stack.g1": "Backend & Front-End",
      "about.stack.g2": "CMS, DXP & Content Editors",
      "about.stack.g3": "CI/CD & DevOps",
      "about.stack.g4": "AI, Second Brain & Training",

      // Careers / Join Us Page
      "careers.hero.eyebrow": "Join SIRIUS Digital Solutions",
      "careers.hero.title": "Build clean software with engineers who care.",
      "careers.hero.lead":
        "We collaborate with talented developers, CMS/ECM specialists, and freelance partners across France and remote Europe on real-world Symfony, Spring Boot, Angular, React, and AI enablement projects.",
      "careers.hero.cta": "Submit an Application",

      "careers.why.eyebrow": "Why Collaborate",
      "careers.why.title": "An environment built for craft and autonomy",
      "careers.why.1.title": "Modern Engineering Standards",
      "careers.why.1.desc":
        "Work on clean architectures with automated CI/CD (GitLab, GitHub, Azure), code reviews, and zero legacy chaos.",
      "careers.why.2.title": "AI-Augmented Workflows",
      "careers.why.2.desc":
        "Sharpen your skills with structured Second Brain setups, custom agent skills, and practical AI pair-programming.",
      "careers.why.3.title": "Remote-First & Direct",
      "careers.why.3.desc":
        "Flexible remote collaboration, bilingual EN/FR projects, and direct ownership without layers of bureaucracy.",

      "careers.roles.eyebrow": "Open Tracks",
      "careers.roles.title": "Profiles we actively look for",
      "careers.roles.lead":
        "Whether you are looking for a permanent role, freelance partnership, or an internship, select a track below to pre-fill your application.",
      "careers.roles.badge": "Remote / Hybrid",
      "careers.roles.applyBtn": "Apply for this track →",

      "careers.roles.1.meta": "Backend & CMS · PHP",
      "careers.roles.1.title": "PHP / Symfony & CMS Engineer",
      "careers.roles.1.desc":
        "Design and maintain business applications, APIs, and editorial platforms on Symfony, TYPO3, or Ibexa DXP.",
      "careers.roles.2.meta": "Enterprise Backend · Java",
      "careers.roles.2.title": "Java / Spring Boot & Nuxeo Engineer",
      "careers.roles.2.desc":
        "Build resilient Spring Boot services and integrate Nuxeo ECM/DAM content workflows with enterprise systems.",
      "careers.roles.3.meta": "Front-End · TypeScript",
      "careers.roles.3.title": "Front-End Engineer (Angular / React)",
      "careers.roles.3.desc":
        "Craft fast, accessible web interfaces and design-system components connected to headless CMS and REST APIs.",
      "careers.roles.4.meta": "DevOps, AI & Spontaneous",
      "careers.roles.4.title": "CI/CD, AI Training or Open Application",
      "careers.roles.4.desc":
        "Passionate about GitLab/GitHub/Azure pipelines, AI skills, or eager to learn? Tell us how you’d like to contribute.",

      "careers.form.eyebrow": "Candidate Application",
      "careers.form.title": "Tell us about yourself",
      "careers.form.lead":
        "Share your background, preferred stack, and portfolio or LinkedIn link. We review every application directly.",
      "careers.form.name": "Full Name *",
      "careers.form.namePh": "Alex Martin",
      "careers.form.email": "Email Address *",
      "careers.form.emailPh": "alex@email.com",
      "careers.form.phone": "Phone (Optional)",
      "careers.form.phonePh": "+33 6 12 34 56 78",
      "careers.form.location": "City & Remote Preference",
      "careers.form.locationPh": "Paris / Lyon / Full Remote",
      "careers.form.role": "Target Role / Track",
      "careers.form.role.symfony": "PHP / Symfony & CMS (TYPO3, Ibexa)",
      "careers.form.role.java": "Java / Spring Boot & Nuxeo ECM",
      "careers.form.role.frontend": "Front-End (Angular / React / TypeScript)",
      "careers.form.role.cicd": "CI/CD & DevOps (GitLab, GitHub, Azure)",
      "careers.form.role.ai": "AI Workflows, Second Brain & Training",
      "careers.form.role.open": "Spontaneous Application",
      "careers.form.contractLegend": "Collaboration Type",
      "careers.form.contract.cdi": "Permanent (CDI)",
      "careers.form.contract.freelance": "Freelance / Partner",
      "careers.form.contract.intern": "Internship / Alternance",
      "careers.form.experience": "Experience Level",
      "careers.form.exp.junior": "0–2 years (Junior / Intern)",
      "careers.form.exp.mid": "2–5 years (Confirmed)",
      "careers.form.exp.senior": "5–8 years (Senior)",
      "careers.form.exp.lead": "8+ years (Lead / Architect)",
      "careers.form.availability": "Availability",
      "careers.form.avail.immediate": "Immediate",
      "careers.form.avail.1m": "Within 1 month",
      "careers.form.avail.3m": "Within 3 months",
      "careers.form.avail.exploring": "Open to opportunities",
      "careers.form.links": "LinkedIn, GitHub or Portfolio / CV URL",
      "careers.form.linksPh": "https://linkedin.com/in/... or https://github.com/...",
      "careers.form.message": "Background, Stack & Motivation *",
      "careers.form.messagePh":
        "Highlight your key frameworks (Symfony, TYPO3, Ibexa, Spring Boot, Angular, React, Nuxeo, CI/CD, AI), notable projects, and what you are looking for...",
      "careers.form.noteCv":
        "Tip: You can paste a link to your online CV/LinkedIn above, or attach your PDF directly after clicking 'Open in Email Client'.",
      "careers.form.consent":
        "I agree that SIRIUS Digital Solutions may process my application data solely for recruitment purposes, in line with the Privacy Policy.",
      "careers.form.submit": "Submit Application",
      "careers.form.errMessage": "Please share a few lines about your background and stack.",
      "careers.form.errConsent": "Please confirm recruitment privacy consent before submitting.",
      "careers.form.success":
        "Thank you! Your application has been sent. We will review it and reply promptly.",
      "careers.form.fallback":
        "Your candidate application summary is ready. Click below to open it in your email client (you can attach your PDF CV there) or copy the summary:",
      "careers.form.copyBriefBtn": "Copy Application Summary",

      // Contact Page
      "contact.hero.eyebrow": "Contact & Quotes",
      "contact.hero.title": "Tell us about your project.",
      "contact.hero.lead":
        "Request a project quote, book a technical audit, plan an AI team training, or start a general conversation.",
      "contact.info.email.title": "Direct Email",
      "contact.info.email.note": "Ideal for RFPs, technical briefs, training inquiries, or introductions.",
      "contact.info.loc.title": "Location & Timezone",
      "contact.info.loc.val": "France (CET / CEST) · Remote worldwide",
      "contact.info.sla.title": "Response Time",
      "contact.info.sla.val": "Typically within 24 business hours.",
      "contact.form.title": "Request a Quote, Audit or Consultation",
      "contact.form.typeLegend": "How can we help?",
      "contact.form.type.quote": "Project Quote",
      "contact.form.type.quoteDesc": "New app, portal, or CMS/ECM integration",
      "contact.form.type.audit": "Technical Audit",
      "contact.form.type.auditDesc": "Code quality, architecture, or CI/CD review",
      "contact.form.type.training": "AI & Team Training",
      "contact.form.type.trainingDesc": "Second Brain, custom skills, or workshops",
      "contact.form.type.general": "General Inquiry",
      "contact.form.type.generalDesc": "Discovery call, partnership, or question",

      "contact.form.quoteLegend": "Project Scope & Budget",
      "contact.form.engagement": "Engagement Model",
      "contact.form.eng.mvp": "Fixed-Scope Delivery / MVP",
      "contact.form.eng.embedded": "Embedded Senior Engineering",
      "contact.form.eng.undecided": "To be defined together",
      "contact.form.timeline": "Target Timeline",
      "contact.form.time.asap": "Immediate (< 1 month)",
      "contact.form.time.quarter": "1 – 3 months",
      "contact.form.time.later": "3+ months / Flexible",

      "contact.form.auditLegend": "Audit Scope",
      "contact.form.audit.s1": "Architecture & Code Quality (Symfony / Spring Boot / JS)",
      "contact.form.audit.s2": "CMS & Editor Performance (TYPO3 / Ibexa / Nuxeo)",
      "contact.form.audit.s3": "CI/CD Pipelines (GitLab / GitHub / Azure)",
      "contact.form.audit.s4": "Upgrade & Security Readiness",
      "contact.form.existingStack": "Current Stack & Context",
      "contact.form.existingStackPh": "e.g., Symfony 6, TYPO3 v12, Angular 17, GitLab CI...",

      "contact.form.trainingLegend": "Training & AI Enablement",
      "contact.form.training.f1": "AI Coding Workflows & Custom Skills",
      "contact.form.training.f2": "Second Brain Knowledge Architecture",
      "contact.form.training.f3": "Modern Symfony / Angular / React Best Practices",
      "contact.form.training.f4": "CI/CD & Automated Quality Gates",
      "contact.form.teamSize": "Team Size",
      "contact.form.team.1": "Individual / 1–2 people",
      "contact.form.team.small": "Small squad (3–8 people)",
      "contact.form.team.medium": "Department (9–20 people)",
      "contact.form.team.large": "20+ people / Multiple squads",
      "contact.form.format": "Preferred Format",
      "contact.form.fmt.remote": "Remote live workshop",
      "contact.form.fmt.onsite": "On-site (France)",
      "contact.form.fmt.hybrid": "Hybrid",

      "contact.form.name": "Full Name *",
      "contact.form.namePh": "Alex Martin",
      "contact.form.email": "Work Email *",
      "contact.form.emailPh": "alex@company.com",
      "contact.form.phone": "Phone (Optional)",
      "contact.form.phonePh": "+33 6 12 34 56 78",
      "contact.form.company": "Company / Organization",
      "contact.form.companyPh": "Acme SAS",
      "contact.form.service": "Area of Interest",
      "contact.form.service.opt1": "Web & Backend Development (Symfony, Spring Boot, Angular, React)",
      "contact.form.service.opt2": "CMS, DXP & Editor Integration (TYPO3, Ibexa, Nuxeo)",
      "contact.form.service.opt3": "CI/CD & Release Automation (GitLab, GitHub, Azure)",
      "contact.form.service.opt4": "Applied AI (Second Brain, Skills & Team Training)",
      "contact.form.service.opt5": "Technical Audit / Consulting",
      "contact.form.budget": "Estimated Budget (Optional)",
      "contact.form.budget.opt0": "Prefer to discuss later",
      "contact.form.budget.opt1": "< €5,000",
      "contact.form.budget.opt2": "€5,000 – €15,000",
      "contact.form.budget.opt3": "€15,000 – €40,000",
      "contact.form.budget.opt4": "€40,000+",
      "contact.form.message": "Project / Request Details *",
      "contact.form.messagePh": "Share your goals, key deliverables, timeline, and stack details...",
      "contact.form.consent":
        "I agree that SIRIUS Digital Solutions may process this information solely to respond to my inquiry, in line with the Privacy Policy.",
      "contact.form.submit": "Send Request",
      "contact.form.sending": "Sending...",
      "contact.form.errName": "Please enter your name.",
      "contact.form.errEmail": "Please enter a valid work email address.",
      "contact.form.errMessage": "Please share a few details about your project.",
      "contact.form.errConsent": "Please confirm privacy consent before sending.",
      "contact.form.errSummary": "Please review the highlighted fields below.",
      "contact.form.success":
        "Thank you! Your message has been sent. We will reply within one business day.",
      "contact.form.fallback":
        "Your inquiry brief is ready. Click below to open it in your email client, or copy the brief to send from any webmail:",
      "contact.form.mailtoBtn": "Open in Email Client",
      "contact.form.copyBriefBtn": "Copy Project Brief",
      "contact.form.errorNetwork":
        "We could not submit the form right now. Please use your email client below or write directly to contact@siriusds.fr.",

      // Legal Page
      "legal.hero.eyebrow": "Legal & Compliance",
      "legal.hero.title": "Legal Notice & Privacy Policy",
      "legal.hero.lead":
        "Regulatory disclosures (Mentions légales) and GDPR data protection commitments for www.siriusds.fr.",
      "legal.s1.title": "1. Website Publisher (Éditeur du site)",
      "legal.s1.body":
        "This website (www.siriusds.fr) is published by SIRIUS Digital Solutions.",
      "legal.s1.li1": "Brand & Activity: SIRIUS Digital Solutions — Software Engineering, Integrations, CI/CD & AI Training",
      "legal.s1.li2": "Publication Director: Nabih Nadhif",
      "legal.s1.li3": "Jurisdiction: France (full statutory registration details provided on commercial proposals and invoices, or upon request)",
      "legal.s1.li4": "Contact Email: contact@siriusds.fr",
      "legal.s2.title": "2. Hosting Provider (Hébergement)",
      "legal.s2.body":
        "This static website is hosted via GitHub Pages (GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA).",
      "legal.s3.title": "3. Personal Data & GDPR (Protection des données)",
      "legal.s3.body":
        "Data submitted through our contact form or by email (name, email, company, and project message) is used exclusively to evaluate and respond to your inquiry. It is never sold or shared with third parties for marketing.",
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
      "meta.home.title": "SIRIUS Digital Solutions — Développement Logiciel, CMS/GED, CI/CD & IA",
      "meta.home.desc":
        "SIRIUS Digital Solutions conçoit des applications web (Symfony, Spring Boot, Angular, React), intègre TYPO3, Ibexa & Nuxeo, automatise vos pipelines CI/CD (GitLab, GitHub, Azure) et déploie l’IA appliquée & la formation.",
      "meta.services.title": "Services & Solutions — SIRIUS Digital Solutions",
      "meta.services.desc":
        "Développement full-stack (PHP/Symfony, Java/Spring Boot, Angular, React), intégrations CMS/Nuxeo, CI/CD et IA (Second Brain, Skills, Formation).",
      "meta.portfolio.title": "Portfolio & Études de Cas — SIRIUS Digital Solutions",
      "meta.portfolio.desc":
        "Sélection de réalisations en développement web, intégration CMS/GED, automatisation CI/CD et IA appliquée par SIRIUS Digital Solutions.",
      "meta.about.title": "À propos — SIRIUS Digital Solutions",
      "meta.about.desc":
        "Découvrez l’approche, les valeurs d’ingénierie et l’écosystème technique de SIRIUS Digital Solutions.",
      "meta.careers.title": "Nous rejoindre — SIRIUS Digital Solutions",
      "meta.careers.desc":
        "Découvrez nos opportunités d’ingénierie, partenariats freelance et candidatures spontanées chez SIRIUS Digital Solutions.",
      "meta.contact.title": "Contact & Devis — SIRIUS Digital Solutions",
      "meta.contact.desc":
        "Demandez un devis, un audit technique ou une formation IA pour vos équipes avec SIRIUS Digital Solutions.",
      "meta.legal.title": "Mentions Légales & Confidentialité — SIRIUS Digital Solutions",
      "meta.legal.desc":
        "Mentions légales et politique de protection des données (RGPD) de SIRIUS Digital Solutions.",
      "meta.404.title": "Page introuvable — SIRIUS Digital Solutions",
      "meta.404.desc": "La page demandée est introuvable.",

      // Shared Chrome
      "skip.content": "Aller au contenu principal",
      "nav.ariaPrimary": "Navigation principale",
      "nav.ariaLang": "Sélecteur de langue",
      "nav.menuLabel": "Menu",
      "nav.home": "Accueil",
      "nav.services": "Services",
      "nav.portfolio": "Portfolio",
      "nav.about": "À propos",
      "nav.careers": "Nous rejoindre",
      "nav.contact": "Contact",
      "nav.cta": "Démarrer un projet",
      "nav.menuOpen": "Ouvrir le menu de navigation",
      "nav.menuClose": "Fermer le menu de navigation",

      "footer.tagline":
        "Développement web full-stack, intégrations CMS & GED d’entreprise, automatisation CI/CD et accompagnement IA pragmatique.",
      "footer.company": "Entreprise",
      "footer.solutions": "Solutions",
      "footer.connect": "Contact",
      "footer.sol.web": "Applications Web & Backend",
      "footer.sol.cms": "TYPO3, Ibexa & Nuxeo",
      "footer.sol.cicd": "CI/CD (GitLab, GitHub, Azure)",
      "footer.sol.ai": "IA, Second Brain & Formation",
      "footer.location": "France · Remote à l’international",
      "footer.rights": "Tous droits réservés.",
      "footer.legal": "Mentions légales & RGPD",

      // Shared CTA
      "cta.eyebrow": "Prêt à construire ?",
      "cta.title": "Transformons votre prochain projet numérique en produit fiable.",
      "cta.desc":
        "Partagez vos objectifs et votre stack — nous vous répondons sous 24h ouvrées avec un premier éclairage technique.",
      "cta.primary": "Planifier un échange",
      "cta.secondary": "Voir les réalisations",

      // Shared Copy Feedback
      "copy.emailLabel": "Copier l’adresse email",
      "copy.btn": "Copier",
      "copy.copied": "Copié",
      "copy.failed": "Échec de copie",

      // Home Page
      "home.hero.eyebrow": "Studio d’ingénierie logicielle & IA",
      "home.hero.title": "Guider les équipes ambitieuses de l’architecture à la production.",
      "home.hero.lead":
        "SIRIUS Digital Solutions développe vos applications web sur mesure (Symfony, Spring Boot, Angular, React), intègre vos plateformes éditoriales (TYPO3, Ibexa, Nuxeo), automatise vos pipelines CI/CD et forme vos équipes à l’IA appliquée.",
      "home.hero.ctaPrimary": "Démarrer un projet",
      "home.hero.ctaSecondary": "Voir le portfolio",
      "home.hero.trust1": "Ingénierie senior directe",
      "home.hero.trust2": "Bilingue FR / EN",
      "home.hero.trust3": "Conforme UE & RGPD",

      "home.panel.badge": "Prêt pour la prod",
      "home.panel.subtitle": "Expertises clés",
      "home.panel.p1.title": "Développement Full-Stack",
      "home.panel.p1.tag": "Symfony · Spring Boot · Angular · React",
      "home.panel.p2.title": "CMS, DXP & Intégration Éditeurs",
      "home.panel.p2.tag": "TYPO3 · Ibexa · Nuxeo",
      "home.panel.p3.title": "CI/CD & IA Appliquée",
      "home.panel.p3.tag": "GitLab · GitHub · Azure · Formation IA",
      "home.panel.foot1": "CI/CD & qualité automatisée",
      "home.panel.foot2": "Réponse < 24h ouvrées",

      "home.stats.1.val": "Full-Stack",
      "home.stats.1.lbl": "PHP (Symfony), Java (Spring Boot), Angular & React",
      "home.stats.2.val": "DXP & GED",
      "home.stats.2.lbl": "Intégrations éditeurs TYPO3, Ibexa & Nuxeo",
      "home.stats.3.val": "CI/CD",
      "home.stats.3.lbl": "Livraison automatisée sur GitLab, GitHub & Azure",
      "home.stats.4.val": "IA & Skills",
      "home.stats.4.lbl": "Second Brain, skills sur mesure & formation d’équipes",

      "home.services.eyebrow": "Nos expertises",
      "home.services.title": "Des compétences ciblées pour un impact mesurable",
      "home.services.lead":
        "Chaque mission associe architecture propre, communication transparente et exécution prête pour la production.",
      "home.services.1.title": "Développement Web & Backend",
      "home.services.1.desc":
        "Applications métier robustes, APIs et interfaces modernes avec Symfony, Spring Boot, Angular et React.",
      "home.services.1.link": "Découvrir le pôle Web →",
      "home.services.2.title": "CMS, Éditeurs & CI/CD",
      "home.services.2.desc":
        "Intégrations avancées TYPO3, Ibexa et Nuxeo couplées à des pipelines CI/CD automatisés sous GitLab, GitHub et Azure.",
      "home.services.2.link": "Découvrir Intégrations & CI/CD →",
      "home.services.3.title": "IA Appliquée, Second Brain & Formation",
      "home.services.3.desc":
        "Création de systèmes Second Brain, skills d’agents IA sur mesure et formations pratiques pour vos équipes.",
      "home.services.3.link": "Découvrir IA & Formation →",

      "home.work.eyebrow": "Réalisations",
      "home.work.title": "Des architectures éprouvées par secteur",
      "home.work.lead":
        "Aperçu de cas représentatifs couvrant plateformes web, intégrations éditeurs, automatisation CI/CD et montée en compétence IA.",
      "home.work.more": "Voir tout le portfolio →",
      "home.work.cat.web": "Web & CMS/GED",
      "home.work.cat.cicd": "CI/CD & DevOps",
      "home.work.cat.ai": "IA & Formation",
      "home.work.inspect.ibexa": "Voir l’étude de cas Ibexa & Symfony",
      "home.work.inspect.cicd": "Voir l’étude de cas Automatisation CI/CD",
      "home.work.inspect.ai": "Voir l’étude de cas IA Second Brain",

      "home.process.eyebrow": "Notre méthode",
      "home.process.title": "Une cadence de livraison claire et prévisible",
      "home.process.1.title": "Cadrage & Alignement",
      "home.process.1.desc":
        "Clarifier les objectifs métier, l’existant et les contraintes techniques avant la première ligne de code.",
      "home.process.2.title": "Architecture",
      "home.process.2.desc":
        "Concevoir des APIs modulaires, connecteurs CMS/GED et workflows de livraison adaptés à votre stack.",
      "home.process.3.title": "Développement & Tests",
      "home.process.3.desc":
        "Livrer par itérations hebdomadaires avec tests automatisés, contrôles CI/CD et revues de code.",
      "home.process.4.title": "Lancement & Transmission",
      "home.process.4.desc":
        "Déployer sereinement, former vos équipes et transmettre une documentation maintenable.",

      // Services Page
      "services.hero.eyebrow": "Services & Solutions",
      "services.hero.title": "Une expertise technique adaptée à votre stack et vos équipes.",
      "services.hero.lead":
        "De Symfony et Spring Boot aux intégrations TYPO3, Ibexa, Nuxeo, pipelines CI/CD et formations IA : nous livrons des bases saines que vos équipes maîtrisent.",

      "services.offer.1.meta": "01 · Applications",
      "services.offer.1.title": "Développement Web & Backend Full-Stack",
      "services.offer.1.desc":
        "Applications d’entreprise maintenables, portails B2B et interfaces réactives conçues avec des frameworks éprouvés.",
      "services.offer.1.b1": "APIs & logique métier en PHP (Symfony) et Java (Spring Boot)",
      "services.offer.1.b2": "Interfaces clients riches avec Angular, React et TypeScript",
      "services.offer.1.b3": "Tests automatisés, refactoring & accessibilité WCAG",

      "services.offer.2.meta": "02 · Contenu & Éditeurs",
      "services.offer.2.title": "Intégration CMS, DXP & Éditeurs",
      "services.offer.2.desc":
        "Intégration et modernisation de plateformes éditoriales, gestion documentaire (GED/DAM) et workflows de publication.",
      "services.offer.2.b1": "Sites, portails & migrations sur TYPO3 et Ibexa DXP",
      "services.offer.2.b2": "Connecteurs Nuxeo ECM/DAM, métadonnées & authentification SSO",
      "services.offer.2.b3": "APIs headless reliant vos éditeurs à Angular et React",

      "services.offer.3.meta": "03 · Livraison",
      "services.offer.3.title": "CI/CD & Automatisation des déploiements",
      "services.offer.3.desc":
        "Chaînes de build, test et déploiement fiables et reproductibles sur vos outils Git et cloud existants.",
      "services.offer.3.b1": "Pipelines sur GitLab CI, GitHub Actions & Azure DevOps",
      "services.offer.3.b2": "Contrôles qualité automatisés, analyse statique & prévisualisations",
      "services.offer.3.b3": "Conteneurisation Docker & mises en production sans interruption",

      "services.offer.4.meta": "04 · Intelligence & Formation",
      "services.offer.4.title": "IA Appliquée, Second Brain & Formation",
      "services.offer.4.desc":
        "Outillage IA pragmatique et structuration de la connaissance pour démultiplier l’efficacité de vos équipes.",
      "services.offer.4.b1": "Architectures Second Brain pour développeurs et organisations",
      "services.offer.4.b2": "Création de skills IA sur mesure, outils MCP & assistants de code",
      "services.offer.4.b3": "Formations pratiques IA, ateliers et coaching d’équipes",

      "services.models.eyebrow": "Modes d’engagement",
      "services.models.title": "Des formats de collaboration flexibles",
      "services.models.1.meta": "2–6 semaines · Forfait",
      "services.models.1.title": "Projet, Intégration ou MVP",
      "services.models.1.desc":
        "Idéal pour livrer un portail, un connecteur CMS/Nuxeo, une refonte CI/CD ou un système Second Brain avec jalons clairs.",
      "services.models.2.meta": "Continu · Intégré aux sprints",
      "services.models.2.title": "Renfort d’ingénierie",
      "services.models.2.desc":
        "Capacité senior Symfony, Spring Boot, Angular ou React intégrée directement dans vos sprints et dépôts Git.",
      "services.models.3.meta": "Ateliers & Audits · 1–2 semaines",
      "services.models.3.title": "Formation IA & Audit Technique",
      "services.models.3.desc":
        "Montée en compétence pratique sur les workflows et skills IA, ou audit ciblé d’architecture et CI/CD.",

      "services.faq.eyebrow": "FAQ",
      "services.faq.title": "Questions fréquentes",
      "services.faq.1.q": "À qui appartiennent le code source et la propriété intellectuelle ?",
      "services.faq.1.a":
        "Vous conservez 100 % de la propriété du code source, des pipelines CI/CD, des skills IA et de la documentation produits.",
      "services.faq.2.q": "Pouvons-nous collaborer en français ou en anglais ?",
      "services.faq.2.a":
        "Oui. Tous les ateliers, sessions de formation, livrables écrits et démonstrations peuvent se dérouler en français ou en anglais.",
      "services.faq.3.q": "Sous quel délai un projet ou une formation peut-il démarrer ?",
      "services.faq.3.a":
        "Un premier échange de cadrage est généralement planifié sous 48h, avec un démarrage d’architecture ou de formation dès la semaine suivante.",
      "services.faq.4.q": "Intervenez-vous sur des bases existantes Symfony, TYPO3, Ibexa ou Spring Boot ?",
      "services.faq.4.a":
        "Oui. Nous reprenons régulièrement des applications existantes pour monter de version, ajouter des tests, connecter Nuxeo ou des APIs tierces et moderniser la CI/CD.",
      "services.faq.5.q": "Pouvez-vous travailler dans nos environnements GitLab, GitHub ou Azure DevOps ?",
      "services.faq.5.a":
        "Oui. Nous nous intégrons directement dans vos dépôts GitLab, GitHub ou Azure DevOps et vos politiques de sécurité sans perturber vos équipes.",
      "services.faq.6.q": "Que couvre votre accompagnement IA (Second Brain, Skills, Formation) ?",
      "services.faq.6.a":
        "Nous structurons des bases de connaissances Second Brain exploitables par l’IA, concevons des skills d’agents adaptés à vos projets et animons des formations pratiques pour vos équipes.",

      // Portfolio Page
      "portfolio.hero.eyebrow": "Portfolio & Études de cas",
      "portfolio.hero.title": "Des solutions représentatives pensées pour durer.",
      "portfolio.hero.lead":
        "Parcourez notre sélection d’études de cas en ingénierie web & CMS/GED, automatisation CI/CD et déploiement IA. Sélectionnez un projet pour inspecter l’architecture et les résultats.",
      "portfolio.filter.aria": "Filtrer les projets par catégorie",
      "portfolio.filter.all": "Tous les projets",
      "portfolio.filter.web": "Web & CMS/GED",
      "portfolio.filter.cicd": "CI/CD & DevOps",
      "portfolio.filter.ai": "IA & Formation",
      "portfolio.btn.inspect": "Voir l’étude de cas",
      "portfolio.count.label": "{count} étude(s) affichée(s) sur {total}",
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
        "Nous pensons qu’un bon logiciel doit paraître fluide pour l’utilisateur, propre pour le développeur et lisible pour l’équipe qui l’opère.",
      "about.story.eyebrow": "Notre approche",
      "about.story.title": "L’ingénierie pragmatique avant les effets de mode",
      "about.story.p1":
        "SIRIUS Digital Solutions est né d’un constat simple : trop de projets ralentissent à cause d’intégrations fragiles, de livraisons manuelles ou de savoir dispersé.",
      "about.story.p2":
        "Nous associons des fondamentaux solides (backend, front-end et CMS/GED) à une automatisation CI/CD rigoureuse et des pratiques IA utiles : systèmes Second Brain, skills sur mesure et formation d’équipes.",
      "about.snapshot.title": "Profil du Studio",
      "about.snapshot.badge": "France · Remote",
      "about.snapshot.r1.k": "Domaines clés",
      "about.snapshot.r1.v": "Web · CMS/GED · CI/CD · IA",
      "about.snapshot.r2.k": "Langues de travail",
      "about.snapshot.r2.v": "Français & Anglais",
      "about.snapshot.r3.k": "Modes d’action",
      "about.snapshot.r3.v": "Build · Intégration · Formation",
      "about.snapshot.r4.k": "Exigence qualité",
      "about.snapshot.r4.v": "Propre, testé, documenté",
      "about.values.eyebrow": "Nos principes",
      "about.values.title": "Ce qui guide nos choix",
      "about.values.1.title": "Clarté avant tout",
      "about.values.1.desc": "Frontières modulaires, code lisible et arbitrages techniques transparents.",
      "about.values.2.title": "Conçu pour durer",
      "about.values.2.desc": "Tests automatisés, typage strict et bonnes pratiques évolutives.",
      "about.values.3.title": "Livraison automatisée",
      "about.values.3.desc": "Pipelines CI/CD reproductibles, garde-fous qualité et zéro surprise.",
      "about.values.4.title": "Montée en compétence",
      "about.values.4.desc": "Skills IA pragmatiques, Second Brain et formations adaptées au terrain.",
      "about.team.eyebrow": "Direction",
      "about.team.title": "L’équipe du studio",
      "about.team.role": "Fondateur & Architecte Logiciel Principal",
      "about.team.bio":
        "Architecte logiciel full-stack et formateur IA basé en France, spécialisé en PHP (Symfony, TYPO3, Ibexa), Java (Spring Boot), JavaScript/TypeScript (Angular, React), intégrations éditeurs de contenu (Nuxeo), pipelines CI/CD (GitLab, GitHub, Azure) et systèmes IA appliqués (Second Brain & skills).",
      "about.stack.eyebrow": "Écosystème technique",
      "about.stack.title": "Des outils éprouvés en production",
      "about.stack.g1": "Backend & Front-End",
      "about.stack.g2": "CMS, DXP & Éditeurs",
      "about.stack.g3": "CI/CD & DevOps",
      "about.stack.g4": "IA, Second Brain & Formation",

      // Careers / Join Us Page
      "careers.hero.eyebrow": "Rejoindre SIRIUS Digital Solutions",
      "careers.hero.title": "Construisez des logiciels propres avec des ingénieurs exigeants.",
      "careers.hero.lead":
        "Nous collaborons avec des développeurs, experts CMS/GED et partenaires freelances en France et en remote sur des projets concrets Symfony, Spring Boot, Angular, React et IA appliquée.",
      "careers.hero.cta": "Déposer une candidature",

      "careers.why.eyebrow": "Pourquoi nous rejoindre",
      "careers.why.title": "Un cadre pensé pour l’exigence et l’autonomie",
      "careers.why.1.title": "Standards d’ingénierie modernes",
      "careers.why.1.desc":
        "Intervenez sur des architectures propres avec CI/CD automatisée (GitLab, GitHub, Azure), revues de code et qualité continue.",
      "careers.why.2.title": "Workflows augmentés par l’IA",
      "careers.why.2.desc":
        "Montez en puissance grâce à nos systèmes Second Brain, skills d’agents sur mesure et pratiques de développement assisté par l’IA.",
      "careers.why.3.title": "Remote-first & direct",
      "careers.why.3.desc":
        "Organisation flexible à distance, projets bilingues FR/EN et responsabilités claires sans lourdeur administrative.",

      "careers.roles.eyebrow": "Profils recherchés",
      "careers.roles.title": "Les expertises que nous accueillons",
      "careers.roles.lead":
        "CDI, collaboration freelance ou stage/alternance : sélectionnez un profil ci-dessous pour pré-remplir votre candidature.",
      "careers.roles.badge": "Remote / Hybride",
      "careers.roles.applyBtn": "Postuler sur ce profil →",

      "careers.roles.1.meta": "Backend & CMS · PHP",
      "careers.roles.1.title": "Ingénieur PHP / Symfony & CMS",
      "careers.roles.1.desc":
        "Conception et évolution d’applications métier, APIs et plateformes éditoriales sous Symfony, TYPO3 ou Ibexa DXP.",
      "careers.roles.2.meta": "Backend Entreprise · Java",
      "careers.roles.2.title": "Ingénieur Java / Spring Boot & Nuxeo",
      "careers.roles.2.desc":
        "Développement de services Spring Boot robustes et intégration de workflows documentaires Nuxeo ECM/DAM.",
      "careers.roles.3.meta": "Front-End · TypeScript",
      "careers.roles.3.title": "Développeur Front-End (Angular / React)",
      "careers.roles.3.desc":
        "Création d’interfaces rapides et accessibles connectées à des CMS headless et APIs REST.",
      "careers.roles.4.meta": "DevOps, IA & Spontanée",
      "careers.roles.4.title": "CI/CD, Formation IA ou Candidature libre",
      "careers.roles.4.desc":
        "Passionné par GitLab/GitHub/Azure, les skills IA ou motivé pour apprendre à nos côtés ? Présentez-nous votre parcours.",

      "careers.form.eyebrow": "Candidature",
      "careers.form.title": "Parlez-nous de votre parcours",
      "careers.form.lead":
        "Partagez votre profil, votre stack technique et votre lien LinkedIn, GitHub ou portfolio. Chaque candidature est lue directement.",
      "careers.form.name": "Nom complet *",
      "careers.form.namePh": "Camille Martin",
      "careers.form.email": "Adresse email *",
      "careers.form.emailPh": "camille@email.fr",
      "careers.form.phone": "Téléphone (Optionnel)",
      "careers.form.phonePh": "+33 6 12 34 56 78",
      "careers.form.location": "Ville & mobilité / remote",
      "careers.form.locationPh": "Paris / Lyon / Full Remote",
      "careers.form.role": "Profil / Poste visé",
      "careers.form.role.symfony": "PHP / Symfony & CMS (TYPO3, Ibexa)",
      "careers.form.role.java": "Java / Spring Boot & Nuxeo ECM",
      "careers.form.role.frontend": "Front-End (Angular / React / TypeScript)",
      "careers.form.role.cicd": "CI/CD & DevOps (GitLab, GitHub, Azure)",
      "careers.form.role.ai": "IA Appliquée, Second Brain & Formation",
      "careers.form.role.open": "Candidature spontanée",
      "careers.form.contractLegend": "Type de collaboration",
      "careers.form.contract.cdi": "CDI",
      "careers.form.contract.freelance": "Freelance / Partenaire",
      "careers.form.contract.intern": "Stage / Alternance",
      "careers.form.experience": "Niveau d’expérience",
      "careers.form.exp.junior": "0–2 ans (Junior / Stage)",
      "careers.form.exp.mid": "2–5 ans (Confirmé)",
      "careers.form.exp.senior": "5–8 ans (Senior)",
      "careers.form.exp.lead": "8+ ans (Lead / Architecte)",
      "careers.form.availability": "Disponibilité",
      "careers.form.avail.immediate": "Immédiate",
      "careers.form.avail.1m": "Sous 1 mois",
      "careers.form.avail.3m": "Sous 3 mois",
      "careers.form.avail.exploring": "À l’écoute d’opportunités",
      "careers.form.links": "Lien LinkedIn, GitHub ou Portfolio / CV",
      "careers.form.linksPh": "https://linkedin.com/in/... ou https://github.com/...",
      "careers.form.message": "Parcours, stack & motivation *",
      "careers.form.messagePh":
        "Présentez vos frameworks maîtrisés (Symfony, TYPO3, Ibexa, Spring Boot, Angular, React, Nuxeo, CI/CD, IA), vos réalisations et vos attentes...",
      "careers.form.noteCv":
        "Astuce : indiquez le lien vers votre CV/LinkedIn ci-dessus, ou joignez votre PDF directement après avoir cliqué sur « Ouvrir dans la messagerie ».",
      "careers.form.consent":
        "J’accepte que SIRIUS Digital Solutions traite mes données de candidature uniquement à des fins de recrutement, conformément à la politique de confidentialité.",
      "careers.form.submit": "Envoyer ma candidature",
      "careers.form.errMessage": "Veuillez présenter brièvement votre parcours et votre stack.",
      "careers.form.errConsent": "Veuillez accepter la mention de confidentialité avant d’envoyer.",
      "careers.form.success":
        "Merci ! Votre candidature a bien été envoyée. Nous l’étudierons avec attention et vous répondrons rapidement.",
      "careers.form.fallback":
        "Votre récapitulatif de candidature est prêt. Cliquez ci-dessous pour l’ouvrir dans votre messagerie (vous pourrez y joindre votre CV PDF) ou copiez le texte :",
      "careers.form.copyBriefBtn": "Copier la candidature",

      // Contact Page
      "contact.hero.eyebrow": "Contact & Devis",
      "contact.hero.title": "Parlons de votre projet.",
      "contact.hero.lead":
        "Demandez un devis, planifiez un audit technique, organisez une formation IA pour vos équipes ou posez-nous une question.",
      "contact.info.email.title": "Email direct",
      "contact.info.email.note": "Idéal pour un cahier des charges, un besoin formation ou une prise de contact.",
      "contact.info.loc.title": "Localisation & Fuseau",
      "contact.info.loc.val": "France (CET / CEST) · Remote à l’international",
      "contact.info.sla.title": "Délai de réponse",
      "contact.info.sla.val": "Généralement sous 24 heures ouvrées.",
      "contact.form.title": "Demande de devis, audit ou échange",
      "contact.form.typeLegend": "Objet de votre demande",
      "contact.form.type.quote": "Demande de devis",
      "contact.form.type.quoteDesc": "Nouveau projet, portail ou intégration CMS/GED",
      "contact.form.type.audit": "Audit technique",
      "contact.form.type.auditDesc": "Revue de code, architecture ou CI/CD",
      "contact.form.type.training": "IA & Formation",
      "contact.form.type.trainingDesc": "Second Brain, skills sur mesure ou ateliers",
      "contact.form.type.general": "Contact général",
      "contact.form.type.generalDesc": "Échange exploratoire, partenariat ou question",

      "contact.form.quoteLegend": "Périmètre & Budget du devis",
      "contact.form.engagement": "Format d’engagement",
      "contact.form.eng.mvp": "Projet au forfait / MVP",
      "contact.form.eng.embedded": "Renfort d’ingénierie senior",
      "contact.form.eng.undecided": "À définir ensemble",
      "contact.form.timeline": "Échéance souhaitée",
      "contact.form.time.asap": "Immédiat (< 1 mois)",
      "contact.form.time.quarter": "1 – 3 mois",
      "contact.form.time.later": "3+ mois / Flexible",

      "contact.form.auditLegend": "Périmètre de l’audit",
      "contact.form.audit.s1": "Architecture & Qualité de code (Symfony / Spring Boot / JS)",
      "contact.form.audit.s2": "Performance CMS & Éditeurs (TYPO3 / Ibexa / Nuxeo)",
      "contact.form.audit.s3": "Pipelines CI/CD (GitLab / GitHub / Azure)",
      "contact.form.audit.s4": "Préparation montée de version & sécurité",
      "contact.form.existingStack": "Stack actuelle & contexte",
      "contact.form.existingStackPh": "ex. Symfony 6, TYPO3 v12, Angular 17, GitLab CI...",

      "contact.form.trainingLegend": "Formation & Déploiement IA",
      "contact.form.training.f1": "Workflows de code IA & Skills sur mesure",
      "contact.form.training.f2": "Système de connaissances Second Brain",
      "contact.form.training.f3": "Bonnes pratiques Symfony / Angular / React",
      "contact.form.training.f4": "CI/CD & Quality Gates automatisés",
      "contact.form.teamSize": "Taille de l’équipe",
      "contact.form.team.1": "Individuel / 1–2 personnes",
      "contact.form.team.small": "Équipe (3–8 personnes)",
      "contact.form.team.medium": "Département (9–20 personnes)",
      "contact.form.team.large": "20+ personnes / Multi-équipes",
      "contact.form.format": "Format souhaité",
      "contact.form.fmt.remote": "Atelier en ligne (Remote)",
      "contact.form.fmt.onsite": "Présentiel (France)",
      "contact.form.fmt.hybrid": "Hybride",

      "contact.form.name": "Nom complet *",
      "contact.form.namePh": "Camille Martin",
      "contact.form.email": "Email professionnel *",
      "contact.form.emailPh": "camille@entreprise.fr",
      "contact.form.phone": "Téléphone (Optionnel)",
      "contact.form.phonePh": "+33 6 12 34 56 78",
      "contact.form.company": "Entreprise / Organisation",
      "contact.form.companyPh": "Entreprise SAS",
      "contact.form.service": "Domaine souhaité",
      "contact.form.service.opt1": "Développement Web & Backend (Symfony, Spring Boot, Angular, React)",
      "contact.form.service.opt2": "Intégration CMS, DXP & Éditeurs (TYPO3, Ibexa, Nuxeo)",
      "contact.form.service.opt3": "CI/CD & Automatisation (GitLab, GitHub, Azure)",
      "contact.form.service.opt4": "IA Appliquée (Second Brain, Skills & Formation)",
      "contact.form.service.opt5": "Audit Technique / Conseil",
      "contact.form.budget": "Budget estimé (Optionnel)",
      "contact.form.budget.opt0": "À définir ensemble",
      "contact.form.budget.opt1": "< 5 000 €",
      "contact.form.budget.opt2": "5 000 € – 15 000 €",
      "contact.form.budget.opt3": "15 000 € – 40 000 €",
      "contact.form.budget.opt4": "40 000 € +",
      "contact.form.message": "Détails du projet / besoin *",
      "contact.form.messagePh": "Précisez vos objectifs, livrables attendus, délais et stack technique...",
      "contact.form.consent":
        "J’accepte que SIRIUS Digital Solutions traite ces données uniquement pour répondre à ma demande, conformément à la politique de confidentialité.",
      "contact.form.submit": "Envoyer la demande",
      "contact.form.sending": "Envoi en cours...",
      "contact.form.errName": "Veuillez saisir votre nom complet.",
      "contact.form.errEmail": "Veuillez saisir une adresse email professionnelle valide.",
      "contact.form.errMessage": "Veuillez préciser quelques détails sur votre projet.",
      "contact.form.errConsent": "Veuillez accepter la mention de confidentialité avant d’envoyer.",
      "contact.form.errSummary": "Veuillez vérifier les champs indiqués ci-dessous.",
      "contact.form.success":
        "Merci ! Votre message a bien été envoyé. Nous vous répondrons sous un jour ouvré.",
      "contact.form.fallback":
        "Votre récapitulatif est prêt. Cliquez ci-dessous pour l’ouvrir dans votre messagerie ou copiez le texte pour l’envoyer depuis votre webmail :",
      "contact.form.mailtoBtn": "Ouvrir dans la messagerie",
      "contact.form.copyBriefBtn": "Copier le récapitulatif",
      "contact.form.errorNetwork":
        "L’envoi direct a rencontré un problème. Utilisez votre messagerie ci-dessous ou écrivez directement à contact@siriusds.fr.",

      // Legal Page
      "legal.hero.eyebrow": "Informations légales",
      "legal.hero.title": "Mentions légales & Confidentialité",
      "legal.hero.lead":
        "Informations réglementaires et engagements RGPD applicables au site www.siriusds.fr.",
      "legal.s1.title": "1. Éditeur du site",
      "legal.s1.body":
        "Le présent site (www.siriusds.fr) est édité par SIRIUS Digital Solutions.",
      "legal.s1.li1": "Activité : SIRIUS Digital Solutions — Ingénierie logicielle, Intégrations, CI/CD & Formation IA",
      "legal.s1.li2": "Directeur de la publication : Nabih Nadhif",
      "legal.s1.li3": "Implantation : France (mentions d’immatriculation complètes communiquées sur devis, factures et sur simple demande)",
      "legal.s1.li4": "Contact : contact@siriusds.fr",
      "legal.s2.title": "2. Hébergement",
      "legal.s2.body":
        "Ce site statique est hébergé via GitHub Pages (GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis).",
      "legal.s3.title": "3. Données personnelles & RGPD",
      "legal.s3.body":
        "Les données transmises via le formulaire de contact ou par email (nom, email, société et message) sont utilisées uniquement pour traiter et répondre à votre demande. Elles ne sont ni revendues ni cédées à des tiers.",
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
        const idx = pair.indexOf(":");
        if (idx === -1) return;
        const attr = pair.slice(0, idx).trim();
        const key = pair.slice(idx + 1).trim();
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

  if (document.body) {
    applyTranslations();
  }
})();
