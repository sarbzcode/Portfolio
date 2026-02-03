const githubUsername = "sarbzcode";
const githubProfileUrl = `https://github.com/${githubUsername}`;
const contributionChartUrl = `https://ghchart.rshah.org/2563eb/${githubUsername}`;

export default function GitHubContributions() {
  return (
    <section className="relative px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl rounded-3xl border border-neutral-200/60 bg-white/85 p-8 text-neutral-800 shadow-xl shadow-blue-500/10 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-neutral-200">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-200 sm:text-3xl">
            GitHub Contributions
          </h2>
          <a
            href={githubProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800 dark:text-blue-200 dark:hover:text-white"
          >
            View full GitHub profile
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-200/75">
          Public contribution activity from the last year.
        </p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-neutral-200/70 bg-[#0d1117] p-4 shadow-sm shadow-blue-500/5 dark:border-white/10">
          <img
            src={contributionChartUrl}
            alt={`${githubUsername} GitHub contribution graph`}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="min-w-[760px] w-full"
          />
        </div>
      </div>
    </section>
  );
}
