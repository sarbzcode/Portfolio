
import FeaturedProject from "../components/FeaturedProject.tsx";
const projects = [
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
      "Small-team managers still depend on manual spreadsheets and chat threads to coordinate coverage, causing confusion and delayed payroll corrections — a problem this project aims to solve.",
    solution:
      "Designing and implementing an end-to-end MERN system with drag-and-drop scheduling, shift conflict detection, and automated payroll calculations. Current milestones focus on refining role-based dashboards and integrating data visualizations.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    links: {
      github: "https://github.com/sarbzcode/ShiftSync",
    },
    impact: [
      "Aiming to reduce manual reconciliation time by over 50% through automated shift and payroll summaries.",
      "Enhancing scheduling transparency with real-time updates and role-based access.",
      "Developing modular APIs to support a future mobile dashboard and analytics expansion.",
      "Modular API design supports future mobile clients",
    ],
  }
];

declare global {
  interface Window {
    Email?: {
      send: (options: Record<string, unknown>) => Promise<string>;
    };
  }
}

export default function Projects() {
  const [featured, ...rest] = projects;

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
            {rest.map((project) => (
              <div
                key={project.title}
                className="flex h-full flex-col gap-5 rounded-3xl border border-neutral-200/60 bg-white/80 p-8 shadow-xl shadow-blue-500/10 backdrop-blur dark:border-white/10 dark:bg-white/5"
              >
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-200/80">
                    {project.summary}
                  </p>
                </div>

                <div className="rounded-2xl border border-neutral-200/70 bg-white/90 p-5 shadow-sm shadow-blue-500/5 dark:border-white/10 dark:bg-white/10">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300">
                    Problem & solution
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-200/80">
                    {project.problem}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-200/80">
                    {project.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300">
                    Impact
                  </h4>
                  <ul className="mt-3 space-y-3">
                    {project.impact.map((impact) => (
                      <li key={impact} className="flex items-start gap-3">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-300" />
                        <span className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-200/80">
                          {impact}
                        </span>
                      </li>
                    ))}
                  </ul>
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

                <div className="mt-auto">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800 dark:text-blue-200 dark:hover:text-white"
                  >
                    View repository
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
