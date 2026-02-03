
import FeaturedProject from "../components/FeaturedProject.tsx";

type Project = {
  title: string;
  summary: string;
  problem: string;
  solution: string;
  techStack: string[];
  links: {
    github: string;
    live?: string;
  };
  previewImage: string;
  impact: string[];
};

const projects: Project[] = [
  {
    title: "Axepress - Campus Event & Noticeboard Platform",
    summary:
      "A central hub where Acadia University students discover events, club updates, and important notices without context switching.",
    problem:
      "Students were missing announcements scattered across emails, posters, and social feeds, leading to lower participation and duplicated communication work for organizers.",
    solution:
      "Designed a responsive MERN experience with curated feeds, real-time moderation, role-based access, and analytics for campus teams.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    links: {
      github: "https://github.com/sarbzcode/Axepress",
    },
    previewImage: "/projects/axepress.jpeg",
    impact: [
      "120+ students onboarded during pilot with feedback loops built into the UI",
      "Dashboards for organizers to triage announcements and track engagement",
      "Reusable component library accelerated future campus initiatives",
    ],
  },
  {
    title: "ShiftSync - Workforce Scheduling & Payroll",
    summary:
      "Currently developing a workforce scheduling and payroll platform to simplify team coordination and automate pay reporting.",
    problem:
      "Small-team managers still depend on manual spreadsheets and chat threads to coordinate coverage, causing confusion and delayed payroll corrections - a problem this project aims to solve.",
    solution:
      "Designing and implementing an end-to-end MERN system with drag-and-drop scheduling, shift conflict detection, and automated payroll calculations. Current milestones focus on refining role-based dashboards and integrating data visualizations.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    links: {
      github: "https://github.com/sarbzcode/ShiftSync",
    },
    previewImage: "/projects/shiftsync.jpeg",
    impact: [
      "Aiming to reduce manual reconciliation time by over 50% through automated shift and payroll summaries.",
      "Enhancing scheduling transparency with real-time updates and role-based access.",
      "Developing modular APIs to support a future mobile dashboard and analytics expansion.",
      "Modular API design supports future mobile clients",
    ],
  },
  {
    title: "CV-GPT",
    summary:
      "Go-powered resume screening tool that ranks resumes against a job description with heuristic scoring + optional OpenAI semantic scoring.",
    problem:
      "Resume screening can be inconsistent and time-intensive when teams compare many formats manually against role requirements.",
    solution:
      "Built a Go pipeline that accepts .txt/.md/.pdf/.docx/.rtf files and outputs ranked results (results.csv) plus a run log with strengths, weaknesses, and scoring explanations. It runs in CLI, Excel macro workbook, and Wails desktop modes, with optional OpenAI embeddings + semantic scoring for richer ranking context.",
    techStack: [
      "Go",
      "TF-IDF",
      "Cosine similarity",
      "OpenAI embeddings (optional)",
      "Semantic scoring (optional)",
      "Wails",
      "Excel VBA",
      "CSV output",
    ],
    links: {
      github: "https://github.com/sarbzcode/CV-GPT",
    },
    previewImage: "/projects/cv-gpt.jpeg",
    impact: [
      "Built during a hackathon and awarded 2nd position",
      "CLI + Excel + desktop (Wails) run modes support different user workflows",
      "PII and demographic redaction runs before scoring",
      "Optional OpenAI mode adds semantic ranking and richer explanations",
    ],
  },
  {
    title: "ChessArena",
    summary:
      "Full-stack chess app with AI difficulty modes, room-based multiplayer, and instant matchmaking (no login required).",
    problem:
      "Most chess apps force account setup or split AI practice and multiplayer into separate experiences, slowing down quick play.",
    solution:
      "Created a unified experience with Beginner/Intermediate/Expert AI modes, AI vs AI spectator play, invite-code rooms, and a Find Opponent queue. Stockfish WASM runs in a web worker while server-authoritative validation keeps multiplayer moves trustworthy.",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "react-chessboard",
      "Socket.IO",
      "Node.js",
      "Fastify",
      "chess.js",
      "Stockfish WASM",
    ],
    links: {
      github: "https://github.com/sarbzcode/ChessArena",
      live: "https://chess.sarbzcode.com",
    },
    previewImage: "/projects/chessarena.jpeg",
    impact: [
      "Multiplayer rooms and instant matchmaking queue",
      "Stockfish WASM worker powers AI modes and AI vs AI gameplay",
      "Live move list, captured pieces, and promotion handling",
    ],
  },
];

declare global {
  interface Window {
    Email?: {
      send: (options: Record<string, unknown>) => Promise<string>;
    };
  }
}

export default function Projects() {
  const featuredProjectTitle = "CV-GPT";
  const rest = projects
    .filter((project) => project.title !== featuredProjectTitle)
    .sort((a, b) => {
      if (a.title === "ChessArena") return -1;
      if (b.title === "ChessArena") return 1;
      return 0;
    });

  return (
    <div className="relative z-10 flex flex-col bg-transparent text-neutral-900 dark:text-neutral-100">
      <section className="relative px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="mt-6 text-4xl font-bold text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl">
            Projects
          </h1>
        </div>
      </section>
      <FeaturedProject />
      

      <section className="relative px-6 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-200 sm:text-3xl">
              Additional builds
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-200/75">
              Each project includes instrumentation, documentation, and handoff
              guides.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {rest.map((project) => {
              const destination = project.links.live ?? project.links.github;
              const destinationLabel = project.links.live
                ? "Open live app"
                : "Open repository";

              return (
                <a
                  key={project.title}
                  href={destination}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col gap-5 rounded-3xl border border-neutral-200/60 bg-white/80 p-8 shadow-xl shadow-blue-500/10 backdrop-blur transition hover:-translate-y-1 hover:border-blue-300/60 hover:shadow-2xl hover:shadow-blue-500/15 dark:border-white/10 dark:bg-white/5 dark:hover:border-blue-300/40"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-neutral-200/70 bg-white/90 shadow-sm shadow-blue-500/5 dark:border-white/10 dark:bg-white/10">
                    <img
                      src={project.previewImage}
                      alt={`${project.title} preview`}
                      loading="lazy"
                      className="h-52 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300">
                      Stack
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-neutral-200/70 bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-700 shadow-sm shadow-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-neutral-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition group-hover:text-blue-800 dark:text-blue-200 dark:group-hover:text-white">
                    {destinationLabel}
                    <span aria-hidden="true">&rarr;</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
