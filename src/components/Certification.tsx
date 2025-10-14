const certificationDetails = [
  {
    title: "Google Data Analytics Professional Certificate",
    provider: "Google / Coursera",
    issued: "2025",
    highlights: [
      "Applied data cleaning, visualization, and storytelling techniques to case studies simulating real-world analytics projects.",
      "Explored data ethics, problem solving, and critical thinking for data-driven decision making.",
    ],
    skills: [
      "Data Cleaning",
      "Problem Solving",
      "Critical Thinking",
      "Data Ethics",
      "Data Visualization",
      "SQL",
      "R",
      "Tableau",
      "Spreadsheets",
      "Data Storytelling",
    ],
  },
  {
    title: "Applied Software Engineering Fundamentals Specialization",
    provider: "IBM / Coursera",
    issued: "2025",
    highlights: [
      "Developed and deployed Python applications, leveraging APIs, Libraries(NumPy, Pandas), and Flask web framework.",
      "Completed projects involving open-source collaboration, automation scripts, and AI-enabled web apps.",
    ],
    skills: [
      "Git/Github",
      "Python",
      "Flask",
      "NumPy",
      "Pandas",
      "REST APIs",
      "Software Development Life Cycle",
      "Software Architecture",
    ],
  },
];

export default function Certification() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10">
      {certificationDetails.map((certification) => (
        <article
          key={certification.title}
          className="group rounded-3xl border border-neutral-200/70 bg-white/85 p-8 text-left text-neutral-800 shadow-xl shadow-blue-500/10 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20 dark:border-white/10 dark:bg-white/5 dark:text-neutral-100"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-xs font-semibold text-neutral-900 dark:text-white sm:text-2xl">
                {certification.title}
              </h2>
              <p className="mt-1 text-xs uppercase tracking-widest text-blue-600 dark:text-blue-200">
                {certification.provider}
              </p>
            </div>
            <div className="shrink-0 rounded-full border border-blue-300/40 bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:border-blue-400/30 dark:bg-blue-500/15 dark:text-blue-100">
              Issued {certification.issued}
            </div>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-[1.5fr_1fr]">
            <ul className="space-y-3 text-sm text-neutral-700 dark:text-neutral-200/80">
              {certification.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-300" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-200">
                Core Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {certification.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-neutral-200/60 bg-white/80 px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm shadow-blue-500/10 dark:border-white/15 dark:bg-white/10 dark:text-blue-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
