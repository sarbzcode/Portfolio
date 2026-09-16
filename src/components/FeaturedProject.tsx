import { featuredProjects } from "../data/portfolio";

export default function FeaturedProject() {
  return (
    <section id="projects" className="portfolio-section">
      <div className="portfolio-container space-y-8">
        <div className="space-y-3">
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-copy">
            From trustworthy data pipelines to connected web and mobile
            workflows.
          </p>
        </div>
        {featuredProjects.map((project, index) => (
          <article
            key={project.name}
            className="portfolio-card overflow-hidden"
          >
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2">
              <div className="min-w-0 space-y-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-300">
                  0{index + 1} / {project.category}
                </p>
                <div>
                  <h3 className="text-3xl font-bold text-neutral-900 dark:text-white">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-blue-700 dark:text-blue-200">
                    {project.subtitle}
                  </p>
                </div>
                <p className="section-copy">{project.description}</p>
                <ul className="space-y-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-200">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <ul
                  aria-label={project.name + " technologies"}
                  className="flex flex-wrap gap-2"
                >
                  {project.technologies.map((tech) => (
                    <li key={tech} className="tech-chip">
                      {tech}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button"
                  aria-label={"View " + project.name + " source on GitHub"}
                >
                  Source Code <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="min-w-0 space-y-5">
                <figure>
                  <a
                    href={project.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-2xl border border-blue-200/40 bg-blue-50/70 dark:border-blue-400/20"
                    aria-label={"Enlarge " + project.name + " screenshot"}
                  >
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      width="1200"
                      height={index === 0 ? 1575 : 900}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover object-top transition duration-300 hover:scale-[1.02]"
                    />
                  </a>
                  <figcaption className="mt-3 text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
                    {project.caption}
                  </figcaption>
                </figure>
                <div className="rounded-2xl border border-blue-200/50 bg-blue-50/70 p-5 dark:border-blue-400/20 dark:bg-blue-500/5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-200">
                    Architecture
                  </p>
                  <ol className="flex flex-wrap items-center gap-2 text-xs leading-relaxed text-neutral-700 dark:text-neutral-200">
                    {project.architecture.map((step, stepIndex) => (
                      <li key={step}>
                        {stepIndex > 0 && (
                          <span
                            aria-hidden="true"
                            className="mr-2 text-blue-500"
                          >
                            →
                          </span>
                        )}
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
                <p className="text-xs font-medium leading-relaxed text-blue-700 dark:text-blue-200">
                  {project.status}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
