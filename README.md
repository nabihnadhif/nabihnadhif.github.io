# SIRIUS Digital Solutions

Official static website for **SIRIUS Digital Solutions**, hosted via GitHub Pages at [www.siriusds.fr](https://www.siriusds.fr).

## Features

- **Zero-build static architecture** in `docs/` (Vanilla HTML5, modular CSS, and ES6+ JavaScript)
- **Bilingual (`EN` / `FR`)** switcher via `docs/assets/js/i18n.js` (`localStorage` + `?lang=en|fr`)
- **Responsive dark-navy design system** aligned with the SIRIUS emblem (`docs/assets/css/`)
- **Interactive Portfolio** with category filtering and native `<dialog>` case-study modals
- **Accessible Contact Form** supporting Formspree / Web3Forms endpoints with an automatic `mailto:` fallback
- **French *Mentions légales* & GDPR** template page (`docs/legal.html`), custom `404.html`, `robots.txt`, and `sitemap.xml`

## Structure

```text
.
├── CNAME
├── README.md
└── docs/
    ├── index.html          # Home
    ├── services.html       # Services & Engagement Models + FAQ
    ├── portfolio.html      # Filterable Portfolio & Case Studies
    ├── about.html          # Company Philosophy, Principles & Stack
    ├── contact.html        # Contact Form & Direct Info
    ├── legal.html          # Mentions légales & Privacy Policy
    ├── 404.html            # Custom 404 Page
    ├── CNAME               # GitHub Pages custom domain (www.siriusds.fr)
    ├── robots.txt
    ├── sitemap.xml
    └── assets/
        ├── css/            # tokens, base, layout, components, pages
        ├── images/         # favicon.png, sirius-logo.png
        └── js/             # i18n, main, portfolio, contact
```

## Local Preview

Serve `docs/` locally with Python:

```sh
python3 -m http.server --directory docs 8080
```

Then open <http://localhost:8080>.

## Customization Before Go-Live

1. **Contact Form Endpoint**: Set `data-form-endpoint` in `docs/contact.html` to your Formspree or Web3Forms URL (until configured, submissions fall back to a pre-filled `mailto:contact@siriusds.fr` action).
2. **Legal Disclosures**: Replace the bracketed placeholders (`legal.s1.li1`–`li4` for legal form, SIREN/SIRET, address, publication director) in `docs/assets/js/i18n.js`.
3. **Portfolio & Bio**: Update `CASE_STUDIES` in `docs/assets/js/portfolio.js` and `about.team.bio` in `docs/assets/js/i18n.js`.

## GitHub Pages Deployment

In the GitHub repository settings (**Settings → Pages**):
- **Source**: Deploy from a branch
- **Branch**: `main` · **Folder**: `/docs`
- **Custom domain**: `www.siriusds.fr` (backed by `docs/CNAME`)
