import { Education, Experience, Skills } from "../components/ProfileSections";

export default function About() {
  return (
    <div className="relative z-10 text-neutral-900 dark:text-neutral-100">
      <header className="portfolio-section pt-24 text-center">
        <h1>About & Experience</h1>
        <p className="mt-4 section-copy">
          Building data systems, ML applications and full-stack products.
        </p>
      </header>
      <Experience />
      <Skills />
      <Education />
    </div>
  );
}
