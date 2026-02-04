import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import Certification from "../components/Certification.tsx";

const techStack = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <SiReact className="text-sky-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-500" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400" />,
      },
      { name: "Vite", icon: <SiVite className="text-purple-500" /> },
      {
        name: "Zustand",
        icon: <span className="font-semibold text-blue-600">Z</span>,
      },
      {
        name: "Chart.js",
        icon: <span className="font-semibold text-emerald-600">CH</span>,
      },
      {
        name: "Three.js",
        icon: <span className="font-semibold text-neutral-700 dark:text-neutral-200">3D</span>,
      },
      {
        name: "react-chessboard",
        icon: <span className="font-semibold text-slate-700 dark:text-slate-200">RB</span>,
      },
    ],
  },
  {
    category: "Backend & Realtime",
    items: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      {
        name: "Express",
        icon: <SiExpress className="text-gray-700 dark:text-gray-200" />,
      },
      {
        name: "Fastify",
        icon: <span className="font-semibold text-neutral-700 dark:text-neutral-200">F</span>,
      },
      {
        name: "Socket.IO",
        icon: <span className="font-semibold text-blue-700 dark:text-blue-300">S</span>,
      },
      {
        name: "Go",
        icon: <span className="font-semibold text-cyan-500">Go</span>,
      },
      {
        name: "Wails",
        icon: <span className="font-semibold text-violet-600">W</span>,
      },
    ],
  },
  {
    category: "Data & Automation",
    items: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      {
        name: "CSV output",
        icon: <span className="font-semibold text-green-700">CSV</span>,
      },
      {
        name: "Excel VBA",
        icon: <span className="font-semibold text-green-700">XLS</span>,
      },
      {
        name: ".txt/.md/.pdf/.docx/.rtf",
        icon: <span className="font-semibold text-neutral-700 dark:text-neutral-200">IO</span>,
      },
    ],
  },
  {
    category: "AI & Intelligence",
    items: [
      {
        name: "OpenAI API",
        icon: <span className="font-semibold text-emerald-600">AI</span>,
      },
      {
        name: "TF-IDF",
        icon: <span className="font-semibold text-indigo-600">TF</span>,
      },
      {
        name: "Cosine similarity",
        icon: <span className="font-semibold text-indigo-600">COS</span>,
      },
      {
        name: "chess.js",
        icon: <span className="font-semibold text-slate-700 dark:text-slate-200">CJ</span>,
      },
      {
        name: "Stockfish WASM",
        icon: <span className="font-semibold text-slate-800 dark:text-slate-100">SF</span>,
      },
    ],
  },
];

const timeline = [
  {
    period: "Jan 2026",
    title: "ChessArena & CV-GPT",
    description:
      "Built ChessArena with AI difficulty modes, room-based multiplayer, and matchmaking, and built CV-GPT for resume screening with heuristic + optional semantic scoring.",
  },
  {
    period: "Sep 2025",
    title: "ShiftSync - Workforce Scheduling & Payroll",
    description:
      "Built ShiftSync to simplify scheduling and payroll workflows with end-to-end planning, role-based dashboards, and automation-focused reporting.",
  },
  {
    period: "Jan 2025",
    title: "Axepress — campus-wide platform",
    description:
      "Led the design and build of an event and noticeboard experience for Acadia University, connecting students, clubs, and campus leadership.",
  },
  {
    period: "2024",
    title: "Innovation Ambassador At LaunchBox",
    description:
      "Working with LaunchBox, Acadia's innovation hub, to support student entrepreneurs through mentorship, workshops, and events.",
  },
  {
    period: "Earlier",
    title: "Betterpedia - Inactive",
    description:
      "Website designed and developed for updating random tech updates and articles such as tutorials, tips and tricks, etc.",
  },
];

export default function About() {
  return (
    <div className="relative z-10 flex flex-col bg-transparent text-neutral-900 dark:text-neutral-100">
      <section className="relative px-6 pt-20 pb-8 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-neutral-200/60 bg-white/80 p-8 shadow-2xl shadow-blue-500/10 backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-200 sm:text-3xl">
              Developer Toolkit
            </h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {techStack.map((group) => (
              <div
                key={group.category}
                className="rounded-3xl border border-neutral-200/70 bg-white/90 p-6 shadow-lg shadow-blue-500/10 backdrop-blur dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item.name}
                      className="inline-flex items-center gap-2 rounded-full border border-neutral-200/70 bg-white/90 px-3 py-1.5 text-xs font-semibold text-neutral-700 shadow-sm shadow-blue-500/10 dark:border-white/10 dark:bg-white/10 dark:text-neutral-100"
                    >
                      <span aria-hidden="true" className="text-sm leading-none">
                        {item.icon}
                      </span>
                      <span>{item.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative px-6 pt-0 pb-8 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-neutral-200/60 bg-white/80 p-8 shadow-2xl shadow-blue-500/10 backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="mb-5 text-2xl font-semibold text-blue-700 dark:text-blue-200 sm:text-3xl">
              Certifications
            </h2>
          </div>
          <Certification />
        </div>
      </section>
      <section className="relative px-6 py-0 pb-8 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-neutral-200/60 bg-white/80 p-8 shadow-2xl shadow-blue-500/10 backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-200 sm:text-3xl">
              Education & Academic Path
            </h2>
            <span className="inline-flex items-center rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-blue-600 dark:text-blue-200">
              2024 – 2028
            </span>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200/70 bg-white/90 p-4 shadow-sm shadow-blue-500/10 dark:border-white/10 dark:bg-white/5">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300">
                Degree
              </h3>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">
                Bachelor of Applied Computer Science
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-200/70">
                Data Analytics with Co-op
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200/70 bg-white/90 p-4 shadow-sm shadow-blue-500/10 dark:border-white/10 dark:bg-white/5">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300">
                University
              </h3>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">
                Acadia University
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-200/70">
                Wolfville, Nova Scotia
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200/70 bg-white/90 p-4 shadow-sm shadow-blue-500/10 dark:border-white/10 dark:bg-white/5">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300">
                Focus
              </h3>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">
                Data Analytics, Full-Stack Development and Software Engineering
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300">
              Highlights
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-200/80">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-500/80 ring-4 ring-blue-500/10" />
                <span>
                  Specialized in Data Analytics, Machine Learning, and Software
                  Engineering
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-500/80 ring-4 ring-blue-500/10" />
                <span>
                  GPA:
                  <span className="ml-2 inline-flex items-center rounded-full border border-blue-400/40 bg-blue-500/10 px-3 py-0.5 text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                    3.65 / 4.33
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-500/80 ring-4 ring-blue-500/10" />
                <span>
                  Integrated Mathematics & Staistics foundation through Calculus
                  1&2 (covering limits, differentiation, integration and
                  series), Applied Statistics.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-500/80 ring-4 ring-blue-500/10" />
                <span>
                  Engaged in cross-disciplinary studies in Economics, Business
                  Analytics, and French Language.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="relative px-6 py-0 pb-8 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-neutral-200/60 bg-white/80 p-8 shadow-2xl shadow-blue-500/10 backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-200 sm:text-3xl">
              Journey snapshot
            </h2>
            <span className="inline-flex items-center rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-blue-600 dark:text-blue-200">
              Always learning
            </span>
          </div>

          <div className="mt-10 space-y-8">
            {timeline.map((entry) => (
              <div
                key={entry.title}
                className="flex flex-col gap-4 sm:flex-row sm:gap-8"
              >
                <div className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300 sm:w-28">
                  {entry.period}
                </div>
                <div className="flex-1 rounded-2xl border border-neutral-200/70 bg-white/90 p-6 shadow-lg shadow-blue-500/5 dark:border-white/10 dark:bg-white/5">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                    {entry.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-200/80">
                    {entry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
