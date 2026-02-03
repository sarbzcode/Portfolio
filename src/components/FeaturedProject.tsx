import { FaGithub } from "react-icons/fa";

const role = "./role.png";
const cvGptPreview = "/projects/cv-gpt-preview.svg";

export default function FeaturedProject() {
  return (
    <section className="relative px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-200 sm:text-3xl">
            Featured Project
          </h2>
          <span className="rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-1 text-xs uppercase tracking-widest text-blue-600 dark:text-blue-200">
            Hackathon 2nd Place
          </span>
        </div>
        <div className="grid gap-6 rounded-3xl border border-neutral-200/60 bg-white/85 p-8 text-neutral-800 shadow-xl shadow-blue-500/10 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-neutral-200 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white sm:text-2xl">
              CV-GPT - Hackathon Resume Screening Platform
            </h3>
            <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-200/85">
              Built in a hackathon where it secured 2nd position, CV-GPT ranks
              resumes against job descriptions with heuristic scoring and
              optional semantic scoring across CLI, Excel, and desktop modes.
            </p>
            <ul className="flex flex-wrap gap-2 text-xs">
              {[
                {
                  icon: (
                    <span style={{ color: "#00ADD8", fontWeight: 700 }}>Go</span>
                  ),
                  label: "Go",
                },
                {
                  icon: (
                    <span style={{ color: "#2563eb", fontWeight: 700 }}>TF</span>
                  ),
                  label: "TF-IDF",
                },
                {
                  icon: (
                    <span style={{ color: "#2563eb", fontWeight: 700 }}>
                      cos
                    </span>
                  ),
                  label: "Cosine",
                },
                {
                  icon: (
                    <span style={{ color: "#16a34a", fontWeight: 700 }}>
                      CLI
                    </span>
                  ),
                  label: "CLI",
                },
                {
                  icon: (
                    <span style={{ color: "#166534", fontWeight: 700 }}>
                      XLS
                    </span>
                  ),
                  label: "Excel VBA",
                },
                {
                  icon: (
                    <span style={{ color: "#4338ca", fontWeight: 700 }}>
                      APP
                    </span>
                  ),
                  label: "Wails",
                },
                {
                  icon: <FaGithub style={{ color: "#181717" }} />,
                  label: "GitHub",
                },
                {
                  icon: (
                    <span style={{ color: "#0f172a", fontWeight: 700 }}>
                      AI
                    </span>
                  ),
                  label: "OpenAI (opt)",
                },
              ].map((tech, i) => (
                <li
                  key={i}
                  className="flex items-center justify-center gap-2 rounded-full border border-blue-300/40 
                         bg-blue-500/10 px-3 py-1 text-neutral-700 dark:text-neutral-200
                         hover:scale-105 hover:shadow-md hover:shadow-blue-400/30 transition-all duration-200"
                  style={{ minWidth: "115px", height: "36px" }} // makes every badge identical in height + width
                >
                  <span className="text-[16px] flex items-center justify-center w-4 h-4">
                    {tech.icon}
                  </span>
                  <span className="font-medium">{tech.label}</span>
                </li>
              ))}
            </ul>

            <div>
              <a
                href="https://github.com/sarbzcode/CV-GPT"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800 dark:text-blue-200 dark:hover:text-white"
              >
                View Project on GitHub
                <span aria-hidden="true">&gt;</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-blue-200/40 bg-blue-50/70 p-6 text-left text-neutral-700 shadow-inner shadow-blue-500/10 dark:border-blue-400/20 dark:bg-blue-500/5 dark:text-blue-100/90">
            <div className="space-y-3">
              <img
                src={cvGptPreview}
                alt="CV-GPT preview"
                loading="lazy"
                className="h-44 w-full rounded-2xl border border-blue-200/70 object-cover dark:border-blue-400/30"
              />
              <p className="text-xs uppercase tracking-wide text-blue-700 dark:text-blue-200">
                Website preview area
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-wide text-blue-600 dark:text-blue-200/90">
              <img
                src={role}
                className="h-10 w-10 object-cover rounded-full border border-blue-300/50 bg-blue-100/80 dark:border-blue-400/30 dark:bg-blue-500/20 "
              />
              <div>
                <p className="font-semibold text-neutral-800 dark:text-blue-100">
                  Achievement
                </p>
                <p className="text-neutral-600 dark:text-blue-100/70">
                  Hackathon 2nd Position
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
