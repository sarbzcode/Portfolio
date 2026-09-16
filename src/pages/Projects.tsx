import HackathonProject from "../components/HackathonProject";
import FeaturedProject from "../components/FeaturedProject.tsx";

type Project = {
  title: string;
  techStack: string[];
  links: { github: string; live?: string };
  previewImage: string;
};

const projects: Project[] = [
  {
    title: "ChessArena",
    techStack: [
      "React",
      "TypeScript",
      "Fastify",
      "Socket.IO",
      "Stockfish WASM",
    ],
    links: {
      github: "https://github.com/sarbzcode/ChessArena",
      live: "https://chess.sarbzcode.com",
    },
    previewImage: "/projects/chessarena.jpeg",
  },
  {
    title: "Axepress",
    techStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    links: { github: "https://github.com/sarbzcode/Axepress" },
    previewImage: "/projects/axepress.jpeg",
  },
  {
    title: "ShyftSync",
    techStack: ["React", "Expo", "Python", "FastAPI", "MongoDB"],
    links: { github: "https://github.com/sarbzcode/ShyftSync" },
    previewImage: "/projects/shiftsync.jpeg",
  },
  {
    title: "Portfolio",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    links: { github: "https://github.com/sarbzcode/Portfolio" },
    previewImage: "/projects/portfolio-preview.svg",
  },
];

export default function Projects() {
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
      <HackathonProject />

      <section className="relative px-6 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-200 sm:text-3xl">
              Additional builds
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-200/75">
              More experiments in software and full-stack development.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project) => {
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
