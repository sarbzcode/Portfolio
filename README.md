# 🌐 Portfolio — Sarbjot Singh (sarbzcode)

Welcome to the source code of my personal portfolio website — [www.sarbzcode.com](https://www.sarbzcode.com)  
This website represents my work as a **Computer Science student specializing in Data Analytics** at Acadia University and showcases my **projects, skills, and professional journey**.

---

## 🚀 Overview

This portfolio serves as both a personal brand and a technical demonstration of my development skills.  
It is designed to highlight my **academic path**, **software projects**, and **career goals** — blending minimalistic UI design with modern web technologies.

**Live Demo:** [www.sarbzcode.com](https://www.sarbzcode.com)  
**GitHub Repo:** [github.com/sarbzcode/Portfolio](https://github.com/sarbzcode/Portfolio)

---

## 🛠️ Tech Stack

**Frontend:**
- React (Vite + TypeScript)
- Tailwind CSS (Responsive Styling)
- Framer Motion (Animations)
- React Router DOM (Routing)

**Backend:**
- Node.js + Express (Contact Form API)
- Nodemailer (Email Delivery)
- CORS & dotenv Configuration

**Deployment:**
- Frontend → Vercel  
- Backend (Contact Service) → Render / Vercel Functions  

**Version Control:** Git + GitHub

---

## 📂 Project Structure

```
Portfolio/
│
├── public/               # Static assets (images, icons, profile)
├── src/
│   ├── components/       # Reusable UI elements (Navbar, Footer, SendMail, etc.)
│   ├── pages/            # Sections like Home, Projects, Contact
│   ├── data/             # Timeline & skillset arrays
│   ├── App.tsx           # Main routing file
│   └── main.tsx          # Entry point
│
├── server/               # Contact form backend (Express)
│   ├── index.ts          # Handles API routes and nodemailer setup
│
├── package.json
├── tsconfig.json
└── README.md
```

---

## 💡 Features

- **Interactive Hero Section** — Animated introduction with 3D visuals.
- **Dynamic Timeline** — Highlights education, innovation projects, and professional growth.
- **Projects Section** — Displays major works (ShiftSync, Axepress, Betterpedia, etc.).
- **Responsive Design** — Mobile-friendly layout built with Tailwind.
- **Contact Form Integration** — Sends messages directly via backend email service.
- **Dark Mode Support** — Smooth visual transitions for accessibility.

---

## 🧠 Learning Outcomes

Through building this site, I:
- Strengthened my **frontend architecture** and **component modularity** skills.
- Implemented **secure backend communication** for form submissions.
- Designed a **developer-focused personal brand** aligned with modern UI practices.
- Enhanced my deployment skills using **Vercel** and **Render**.

---

## 📸 Preview

![Portfolio Preview](https://www.sarbzcode.com/preview.png)

---

## ⚙️ Setup & Run Locally

```bash
# Clone the repository
git clone https://github.com/sarbzcode/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

For the backend:
```bash
cd server
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## 🧾 License

This project is open-source under the **MIT License**.  
Feel free to explore, fork, or adapt for personal use — credits are appreciated.

---

## 👋 Connect With Me

- **Portfolio:** [www.sarbzcode.com](https://www.sarbzcode.com)
- **LinkedIn:** [linkedin.com/in/sarbzcode](https://www.linkedin.com/in/sarbzcode)
- **GitHub:** [github.com/sarbzcode](https://github.com/sarbzcode)
- **Email:** sarbzcode@gmail.com
