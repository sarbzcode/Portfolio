# SarbzCode Portfolio

Personal portfolio for Sarbjot Singh: data engineering, software development, data analytics and machine learning.

[Live website](https://sarbzcode.com) · [GitHub](https://github.com/sarbzcode) · [LinkedIn](https://www.linkedin.com/in/sarbzcode/)

## Stack and structure

React 19, TypeScript, React Router, Vite and Tailwind CSS. The original blue palette, light/dark themes, system typography, translucent rounded cards and animated canvas glyph background are retained. Reduced-motion preferences disable the glyph and contact animations.

- `src/pages/Home.tsx`: text-focused hero, featured projects, research, skills, hackathon achievement, education/certifications, contributions and contact.
- `src/data/portfolio.ts`: typed featured-project data, skills, certifications and social links.
- `src/components/FeaturedProject.tsx`: shared flagship project cards on Home and Projects.
- `src/components/ProfileSections.tsx`: shared research, skills and education sections.
- `src/components/HackathonProject.tsx`: ResumeGPT's second-place hackathon achievement.
- `src/pages/Projects.tsx`: flagship projects followed by ResumeGPT and additional builds.
- `src/pages/About.tsx`, `Contact.tsx`, `Certifications.tsx`: existing routes remain available.
- `src/components/GitHubContributions.tsx`: external contribution chart for sarbzcode, with a profile-link fallback if unavailable.
- `src/components/SendMail.tsx` and `api/contact.ts`: existing serverless contact flow.
- `src/index.css`: Tailwind utilities and shared styles derived from the original cards/buttons.
- `public/projects/`: local project visuals, including optimized authentic WebP screenshots.
- `index.html`: title, description, canonical, Open Graph and Twitter metadata.
- `vercel.json`: existing static build and API routing.

No resume PDF or configured resume URL was present during the refresh, so the hero does not render a resume button.

## Development and checks

Use the Node version declared in `package.json` (20.x).

```sh
npm ci
npm run dev
node node_modules/eslint/bin/eslint.js .
node node_modules/typescript/bin/tsc -b --pretty false
npm run build
npm run preview
```

On Windows with restricted PowerShell scripts, use `npm.cmd`. The repository does not define npm lint, typecheck or test scripts; ESLint and TypeScript are invoked directly. No dependencies were added for the refresh.

Vite serves the frontend at localhost:5173 and proxies /api to localhost:5000. Testing real email delivery requires a compatible API runtime such as Vercel's development runtime and configured SMTP credentials.

## Contact configuration

Keep these values in the deployment environment, never in committed files:

- `EMAIL_USER`, `EMAIL_PASS`: required SMTP credentials.
- `EMAIL_HOST`: defaults to smtp.gmail.com.
- `EMAIL_PORT`: defaults to 587.
- `EMAIL_SECURE`: true to use SSL/TLS.
- `EMAIL_RECEIVER`: optional destination; defaults to EMAIL_USER.

The public contact address is sarbzcode@gmail.com. Client success requires an explicit successful API response; failed messages remain editable.

## Content and screenshot provenance

Project source was inspected on September 16, 2026:

- [CanadaPulse](https://github.com/sarbzcode/CanadaPulse/tree/274062b064a691a52bce31ab07b15fb9dc69f540): README, architecture/data model/deployment documentation, ingestion code, SQL models, Airflow DAG, frontend pages, tests and CI. The 16 dbt SQL models and four instantiated DAG tasks were verified in source. Its screenshot is `docs/screenshots/overview.png`, resized to 1200 × 1575 and encoded as WebP (71 KB). It is an actual local warehouse capture, not current live data.
- [ValleyCabs](https://github.com/sarbzcode/ValleyCabs/tree/7d7d29d692d9d87a37e8b06e244a49d0f62d7f75): README, architecture/deployment notes, booking/payment/tracking/notification services, shared TypeScript package, web/mobile structure, browser tests and CI. Its screenshot is `docs/screenshots/admin-overview.png`, resized to 1200 × 900 and encoded as WebP (34 KB). The interface uses fictional intercepted documentation fixtures.

CanadaPulse remains a scheduled/batch platform with public hosting pending. ValleyCabs remains an active portfolio MVP with provider-backed acceptance, native-device verification and deployment pending. Neither card has an unverified live-demo link.

The CanadaPulse verification ledger records 67 dbt tests, 26 Python tests and a historical Spark run of 13,860 observations into 1,188 annual groups. Those executions were not rerun for this portfolio update, and these totals are not published on the cards. ValleyCabs GPS/payment/API/notification timing figures and production usage claims are also omitted.

Education, certifications and research metrics come from the supplied resume brief. The visible research summary uses three bullets; it does not imply a clinically deployed product.

## Refresh verification

- Production build, repository ESLint and TypeScript project checks.
- Chromium responsive checks at 375, 430, 768, 1024 and 1440 pixels in both themes.
- Local image loading, horizontal overflow, heading structure and browser exceptions.
- Keyboard skip link, mobile menu/Escape, section links and cross-route navigation.
- Contact validation and intercepted success/error responses; no real email sent.
- Automated WCAG A/AA checks using axe.
- Public GitHub links (including the remote branch's ShyftSync rename), existing ChessArena demo and contribution endpoint checked. LinkedIn returns HTTP 999 to automated clients; the original profile URL is preserved.

The existing build reports Lottie eval/chunk-size and stale browser-data warnings. These do not prevent a successful build; dependencies were not upgraded.

## Deployment

The existing Vercel configuration runs `scripts/run-vite-build.cjs` and serves `dist`, with `/api/*` routed to serverless functions. A connected Vercel Git deployment can rebuild after the main-branch push. SMTP settings remain required for actual email delivery.

The repository already tracked dependency and build files before this refresh. New ignore rules prevent additional untracked dependencies, builds, environment files and test artifacts from being staged; they do not untrack historical files.
