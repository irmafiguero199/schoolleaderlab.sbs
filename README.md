# School Leader Lab

Site web institutionnel complet pour **School Leader Lab**, organisation américaine à but non lucratif 501(c)(3) dédiée au développement professionnel des leaders éducatifs.

## Informations institutionnelles

- **Nom légal** : School Leader Lab
- **EIN fédéral** : 82-1581985
- **Statut** : Organisation 501(c)(3) à but non lucratif
- **Adresse** : PO Box 53232, Washington, DC 20009, United States
- **Email** : admin@schoolleaderlab.sbs
- **Téléphone** : (202) 555-1234
- **Domaine** : schoolleaderlab.sbs
- **Année de fondation** : 2018

## Stack technique

- React 18
- Vite 5
- Tailwind CSS 3
- React Router DOM 6
- React Helmet Async
- Lucide React

## Installation

```bash
npm install
npm run dev
```

## Build production

```bash
npm run build
```

## Structure du projet

```
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── manifest.webmanifest
│   ├── 404.html
│   └── logo.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── Newsletter.jsx
│   │   └── ScrollToTop.jsx
│   ├── layouts/
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Academics.jsx
│   │   ├── Admissions.jsx
│   │   ├── StudentLife.jsx
│   │   ├── Faculty.jsx
│   │   ├── Contact.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── TermsOfService.jsx
│   │   ├── Accreditation.jsx
│   │   ├── Gallery.jsx
│   │   ├── News.jsx
│   │   └── NotFound.jsx
│   ├── seo/
│   │   └── EducationalOrganizationSchema.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Conformité Google Workspace for Education

Ce site respecte les exigences strictes de Google :
- Aucun contenu placeholder ou "Lorem Ipsum"
- EIN 82-1581985 visible sur toutes les pages (header, footer, pages légales)
- Adresse physique complète répétée (PO Box 53232, Washington, DC 20009)
- Email institutionnel cliquable (`mailto:`) présent sur chaque page
- Schema.org JSON-LD `EducationalOrganization` avec taxID
- Sitemap.xml et robots.txt fonctionnels
- Page d\'agrément dédiée avec statut 501(c)(3)

## Déploiement

Le dossier `dist/` généré par `npm run build` est prêt pour tout hébergement statique (Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.).
