export default function HackathonProject() {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container space-y-8">
        <h2 className="section-heading">Hackathon Achievement</h2>
        <article className="portfolio-card grid gap-6 p-6 sm:p-8 md:grid-cols-[1fr_240px]">
          <div className="space-y-4">
            <span className="tech-chip">Hackathon — 2nd Place</span>
            <h3 className="text-xl font-semibold">ResumeGPT (CV-GPT)</h3>
            <p className="section-copy">
              A resume-screening desktop application that ranks resumes against
              job descriptions using Go, Wails and JavaScript, with optional
              OpenAI-assisted scoring.
            </p>
            <ul className="flex flex-wrap gap-2">
              {["Go", "Wails", "JavaScript", "OpenAI API"].map((tech) => (
                <li key={tech} className="tech-chip">
                  {tech}
                </li>
              ))}
            </ul>
            <a
              className="inline-block text-sm font-semibold text-blue-700 dark:text-blue-200"
              href="https://github.com/sarbzcode/CV-GPT"
              target="_blank"
              rel="noopener noreferrer"
            >
              View ResumeGPT on GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
          <img
            src="/projects/cv-gpt.jpeg"
            alt="CV-GPT resume screening interface with input controls and ranked results"
            loading="lazy"
            decoding="async"
            width="480"
            height="320"
            className="aspect-[3/2] w-full self-center rounded-2xl border border-blue-200/40 object-cover object-top"
          />
        </article>
      </div>
    </section>
  );
}
