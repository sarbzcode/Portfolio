import { Link } from "react-router-dom";
import Certification from "../components/Certification";

const Certifications = () => (
  <div className="relative z-10 flex flex-col bg-transparent text-neutral-900 dark:text-neutral-100">
    <section className="relative px-6 pb-24 sm:px-10 lg:px-16">
      <section className="relative flex min-h-[30vh] flex-col items-center justify-center px-6 py-24 text-center sm:px-10 lg:px-16">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/85 via-white/75 to-transparent dark:from-black/60 dark:via-black/30" />
        <div className="relative z-10 max-w-4xl space-y-6">
          <h1 className="text-5xl font-bold text-neutral-900 dark:text-white sm:text-5xl">
            Certifications
          </h1>
        </div>
      </section>
      <Certification />
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="rounded-full border border-neutral-300 my-10 px-5 py-2 text-sm font-semibold text-neutral-700 transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-500 dark:border-white/20 dark:text-white dark:hover:text-blue-200"
        >
          Back to Home
        </Link>
      </div>
    </section>
  </div>
);

export default Certifications;
