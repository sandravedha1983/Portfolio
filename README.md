# Vedhavathi — Portfolio Website

A responsive, recruiter-focused portfolio built with Next.js App Router, TypeScript, and custom CSS. It uses Next.js static export for GitHub Pages and includes an original inline SVG illustrated avatar.

## Features

- Responsive desktop, tablet, and mobile layouts
- Minimal professional visual style with lavender accents
- Accessible landmarks, skip link, focus styles, and reduced-motion support
- Project, skills, internship, education, and contact sections
- Working email, GitHub, LinkedIn, and in-page navigation links
- GitHub Actions workflow to build and deploy to GitHub Pages
- No fabricated project URLs, metrics, or credentials

## Run locally

Requirements: Node.js 20 or later.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

To verify the production static export:

```bash
npm run build
```

The generated static site is written to `out/`.

## Deploy to GitHub Pages

1. Create a new GitHub repository for this portfolio and push these files to its `main` branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Push to `main` or manually run the **Deploy portfolio to GitHub Pages** workflow from the Actions tab.
5. Wait for the workflow to finish. GitHub will show the published site URL in **Settings → Pages**.

The Next.js configuration detects `GITHUB_REPOSITORY` in Actions and sets the repository subpath automatically. For a custom domain or a `username.github.io` user-site repository, review `next.config.ts` and the Pages settings before deployment.

## Before publishing

- Confirm the contact email and social URLs in `app/page.tsx`.
- Add public repository/demo links to individual project cards only when you have the exact URLs. Current cards intentionally do not invent project links.
- The **Request my resume** button opens an email draft so it works without a resume PDF. If you want a direct PDF download, add your approved resume as `public/resume.pdf`, then change that button to link to `/resume.pdf` (remember the GitHub Pages base path when testing).
- Replace or refine the project descriptions to match the current state of each project before sharing the site with recruiters.
- Add the canonical deployed URL to metadata after the site is published if you need canonical/social preview URLs.

## Profile links used

- GitHub: https://github.com/sandravedha1983
- LinkedIn: https://linkedin.com/in/vedhavathi-sandra
- Email: sandraveda1983@gmail.com

Only known profile links are included. Project-specific repository and live-demo URLs were not provided and have not been fabricated.
