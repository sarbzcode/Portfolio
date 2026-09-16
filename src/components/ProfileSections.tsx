import {
  CodeBracketIcon,
  CircleStackIcon,
  CommandLineIcon,
  CpuChipIcon,
  ServerStackIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { skillGroups } from "../data/portfolio";
import Certification from "./Certification";

const skillIcons = [
  CodeBracketIcon,
  CommandLineIcon,
  CircleStackIcon,
  ServerStackIcon,
  CpuChipIcon,
  WrenchScrewdriverIcon,
];

export function Experience() {
  return (
    <section id="experience" className="portfolio-section">
      <div className="portfolio-container space-y-8">
        <h2 className="section-heading">Research Experience</h2>
        <article className="portfolio-card p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-300">
                Research Assistant
              </p>
              <h3 className="text-xl font-semibold sm:text-2xl">
                Sepsis Prediction System
              </h3>
              <p className="mt-2 section-copy">
                Acadia University · Wolfville, Nova Scotia
              </p>
            </div>
            <p className="shrink-0 text-sm text-blue-700 dark:text-blue-200">
              March 2026 – Present
            </p>
          </div>
          <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-relaxed text-neutral-700 dark:text-neutral-200">
            <li>
              Processed 1.55M+ hourly ICU observations from 40,332 patients and
              engineered 280 model features using Python.
            </li>
            <li>
              Trained Logistic Regression, Random Forest and XGBoost with a
              patient-separated 70/15/15 split; XGBoost reached 0.830 AUROC on
              held-out patient data.
            </li>
            <li>
              Built Streamlit and CLI tools for model comparison, hourly risk
              visualization and patient-level prediction export.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="portfolio-section">
      <div className="portfolio-container space-y-8">
        <h2 className="section-heading">Technical Skills</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = skillIcons[index];
            return (
              <article key={group.category} className="portfolio-card p-6">
                <Icon
                  aria-hidden="true"
                  className="mb-4 h-6 w-6 text-blue-600 dark:text-blue-300"
                />
                <h3 className="text-sm font-semibold text-blue-700 dark:text-blue-200">
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="tech-chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="portfolio-section">
      <div className="portfolio-container space-y-8">
        <h2 className="section-heading">Education & Certifications</h2>
        <article className="portfolio-card p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-3 sm:flex-row">
            <div>
              <h3 className="text-xl font-semibold">Acadia University</h3>
              <p className="mt-1 section-copy">
                Wolfville, Nova Scotia · 2024 – 2027
              </p>
            </div>
            <span className="tech-chip self-start">GPA: 3.66 / 4.33</span>
          </div>
          <p className="mt-5 font-medium">
            Bachelor of Applied Computer Science
          </p>
          <p className="mt-1 section-copy">Data Analytics, Co-op</p>
          <p className="mt-5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
            <span className="font-semibold">Relevant coursework:</span> Data
            Analytics · Statistics · Database Management Systems · Data
            Structures & Algorithms · Software Engineering
          </p>
        </article>
        <Certification />
      </div>
    </section>
  );
}
