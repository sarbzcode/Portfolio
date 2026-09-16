import { certifications } from "../data/portfolio";

export default function Certification() {
  return (
    <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
      {certifications.map((certification) => (
        <article key={certification.title} className="portfolio-card p-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-200">
            {certification.provider} · {certification.year}
          </p>
          <h3 className="text-lg font-semibold">{certification.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
            {certification.focus}
          </p>
        </article>
      ))}
    </div>
  );
}
