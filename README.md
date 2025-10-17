---
# Sarb's Portfolio  
Data analytics-focused full-stack portfolio for Sarbjot Singh (sarbzcode).

## 🌐 Live Demo
[www.sarbzcode.com](https://www.sarbzcode.com)

## 🧠 Overview
Built as a single-page React application, this portfolio highlights Sarbjot Singh's analytics-driven engineering work. It combines content-rich sections for projects, certifications, and education with a responsive, theme-aware design.
- Hero section introduces Sarbjot's background, skill badges, and social links.
- Animated contact form feeds into a serverless email endpoint backed by Nodemailer.
- Featured project stories and case studies outline real-world impact with reusable UI patterns.
- Glyph-based canvas background and dark/light theme toggle maintain a polished, immersive experience.

## ⚙️ Tech Stack
- Frontend: React 19, TypeScript, React Router, Tailwind CSS, PostCSS, custom CSS utilities, Heroicons, React Icons.
- Interaction & Media: Lottie animations, bespoke canvas glyph background, dependencies in place for @react-three/fiber, @react-three/drei, and Three.js experiments.
- Tooling: Vite (rolldown-vite), ESLint + TypeScript ESLint, Autoprefixer, Tailwind CLI.
- Backend & Deployment: Vercel serverless functions, Node 18+, Nodemailer, dotenv, cors, Express (planned usage), `vercel.json` routing.

## 📂 Project Structure
```
.
|-- src/
|   |-- components/         # Navbar, Footer, GlyphBackground, SendMail, featured cards
|   |-- pages/              # Home, About, Projects, Contact, Certifications views
|   |-- assets/             # Lottie animation data and media
|   |-- css/                # Theme helper styles
|   |-- App.tsx             # Route definitions and layout shell
|   \-- main.tsx            # React entry point with BrowserRouter
|-- api/
|   \-- contact.ts          # Serverless email handler (POST /api/contact)
|-- public/                 # Static assets (profile, icons, meta)
|-- index.html              # Root HTML document and title
|-- vite.config.ts          # Vite plugins and dev proxy configuration
|-- tailwind.config.js      # Tailwind setup with dark mode
\-- vercel.json             # Deployment configuration for Vercel (static + API)
```

## 🚀 Setup & Installation
Step-by-step guide:
```bash
git clone https://github.com/sarbzcode/Portfolio.git
cd Portfolio
npm install
npm run dev
```
The Vite dev server runs on `http://localhost:5173`. For the contact form, run a compatible `/api/contact` handler (for example `vercel dev`) with the environment variables below before testing submissions. Additional scripts: `npm run build` creates the production bundle, `npm run preview` serves the build locally, and `npm run lint` checks formatting and best practices.

## 🔑 Environment Variables
Define these in a `.env` file or your Vercel project settings before deploying the contact endpoint:
- `EMAIL_USER` (required): SMTP username or email address sending messages.
- `EMAIL_PASS` (required): SMTP password or app-specific token.
- `EMAIL_HOST` (optional, default `smtp.gmail.com`): SMTP host.
- `EMAIL_PORT` (optional, default `587`): SMTP port number.
- `EMAIL_SECURE` (optional): Set to `true` if SSL/TLS is required.
- `EMAIL_RECEIVER` (optional): Override destination inbox; defaults to `EMAIL_USER`.

## 🧭 Pages & Key Components
- `src/pages/Home.tsx`: Hero profile, skills badges, certifications preview, featured project call-to-action, and embedded contact form.
- `src/pages/About.tsx`: Timeline of initiatives, education highlights, and categorized tech stack badges.
- `src/pages/Projects.tsx`: Case studies for Axepress and ShiftSync with problem, solution, impact, and stack callouts.
- `src/pages/Contact.tsx`: Social contact cards plus the SendMail form.
- `src/pages/Certifications.tsx`: Detailed certification showcase via reusable `Certification` component.
- `src/components/GlyphBackground.tsx`: Canvas-based animated glyph backdrop reacting to theme and pointer movement.
- `src/components/SendMail.tsx`: Validated contact form with async status handling and error messaging.

## 🚢 Deployment
- `vercel.json` configures a static build output from `npm run build` and mounts serverless functions in `api/`.
- `api/contact.ts` uses Nodemailer within Vercel's Node runtime to send messages; production secrets are managed through Vercel environment variables.
- The Vite dev proxy forwards `/api` requests to `http://localhost:5000`, which can be satisfied by `vercel dev` or a local Express adapter during development.

## 👤 Author
- Sarbjot Singh — computer science (data analytics) student and full-stack developer.
- GitHub: [@sarbzcode](https://github.com/sarbzcode) · LinkedIn: [linkedin.com/in/sarbzcode](https://www.linkedin.com/in/sarbzcode/) · Portfolio: [www.sarbzcode.com](https://www.sarbzcode.com)
