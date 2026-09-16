import { Link } from "react-router-dom";
import FeaturedProject from "../components/FeaturedProject";
import GitHubContributions from "../components/GitHubContributions";
import SendMail from "../components/SendMail";
import HackathonProject from "../components/HackathonProject";
import { Education, Experience, Skills } from "../components/ProfileSections";
import { socialLinks } from "../data/portfolio";

export default function Home() {
  return (
    <div className="relative z-10 text-neutral-900 dark:text-neutral-100">
      <section id="home" className="px-6 pb-12 pt-24 sm:px-8 sm:pt-28 lg:px-12">
        <div className="portfolio-container">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700 dark:text-blue-300">
              Data · Software · Research
            </p>
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl">
              Sarbjot Singh
            </h1>
            <p className="text-xl font-medium leading-relaxed text-blue-700 dark:text-blue-100 sm:text-2xl">
              Data Engineer · Software Developer · Data Analytics
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-neutral-700 dark:text-neutral-200 sm:text-lg">
              Bachelor of Applied Computer Science student at Acadia University
              specializing in Data Analytics and Co-op. I build data platforms,
              machine-learning systems, APIs and full-stack applications that
              turn complex problems into reliable, usable products.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="#projects" className="primary-button">
                View Projects <span aria-hidden="true">↓</span>
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                GitHub
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                LinkedIn
              </a>
            </div>
            <ul
              aria-label="Core technologies"
              className="flex flex-wrap gap-2 pt-2"
            >
              {[
                "Python",
                "SQL",
                "TypeScript",
                "FastAPI",
                "PostgreSQL",
                "dbt",
              ].map((tech) => (
                <li key={tech} className="tech-chip">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <FeaturedProject />
      <Experience />
      <Skills />
      <HackathonProject />
      <div className="portfolio-container px-6 text-right sm:px-0">
        <Link
          to="/projects"
          className="text-sm font-semibold text-blue-700 dark:text-blue-200"
        >
          Explore more projects &rarr;
        </Link>
      </div>
      <Education />
      <GitHubContributions />
      <SendMail />
    </div>
  );
}
