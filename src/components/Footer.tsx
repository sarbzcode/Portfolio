import { Link } from "react-router-dom";


const githubHref = "https://github.com/sarb";
const linkedinHref = "https://www.linkedin.com/in/sarbzcode";
const iconClasses = "h-5 w-5";


function EmailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={iconClasses}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M2.25 4.5A2.25 2.25 0 0 0 0 6.75v10.5A2.25 2.25 0 0 0 2.25 19.5h19.5A2.25 2.25 0 0 0 24 17.25V6.75A2.25 2.25 0 0 0 21.75 4.5H2.25Zm.72 2.72a.75.75 0 0 1 1.06-.06l7.47 6.23a.75.75 0 0 0 .9 0l7.47-6.23a.75.75 0 1 1 .96 1.14l-7.47 6.23a2.25 2.25 0 0 1-2.82 0L3.03 8.3a.75.75 0 0 1-.06-1.08Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={iconClasses}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.389 7.868 10.91.575.106.79-.25.79-.558 0-.276-.01-1.007-.016-1.977-3.2.696-3.877-1.543-3.877-1.543-.523-1.33-1.277-1.684-1.277-1.684-1.044-.714.08-.699.08-.699 1.154.082 1.762 1.186 1.762 1.186 1.027 1.76 2.694 1.252 3.35.957.104-.744.402-1.252.732-1.54-2.555-.29-5.238-1.278-5.238-5.687 0-1.256.45-2.283 1.186-3.089-.119-.29-.513-1.459.112-3.044 0 0 .967-.309 3.17 1.18a11.04 11.04 0 0 1 2.886-.388c.98.005 1.968.132 2.892.388 2.2-1.489 3.164-1.18 3.164-1.18.627 1.585.234 2.754.115 3.044.74.806 1.185 1.833 1.185 3.089 0 4.42-2.688 5.393-5.253 5.676.414.357.783 1.062.783 2.14 0 1.546-.015 2.791-.015 3.171 0 .311.21.67.796.557C20.214 21.382 23.5 17.085 23.5 12 23.5 5.648 18.352.5 12 .5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={iconClasses}
      aria-hidden="true"
    >
      <path d="M20.451 20.451h-3.554v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.941v5.665H9.356V9h3.414v1.561h.047c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.371 4.268 5.455v6.287ZM5.337 7.433a2.065 2.065 0 1 1 0-4.13 2.065 2.065 0 0 1 0 4.13Zm-1.777 13.018h3.554V9H3.56v11.451ZM22.225 0H1.771C.792 0 0 .771 0 1.723v20.554C0 23.228.792 24 1.771 24h20.451C23.2 24 24 23.228 24 22.277V1.723C24 .771 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-white/10 bg-white/70 dark:bg-black/60 backdrop-blur-xl shadow-lg">
      <div className="mx-auto flex w-[90%] max-w-5xl flex-col items-center gap-4 px-6 py-6 text-center sm:w-[80%] sm:flex-row sm:justify-between sm:text-left lg:w-[65%] xl:w-1/2">
        <span className="text-sm font-medium text-black/80 dark:text-white/80 sm:text-base">
          {"\u00A9 2025 Sarb. All rights reserved."}
        </span>
        <nav className="flex items-center gap-4 text-sm font-semibold text-blue-600 dark:text-blue-400 sm:text-base">
          <Link
            to="/Contact"
            className="flex items-center gap-2 transition hover:text-blue-700 dark:hover:text-blue-300"
          >
            <EmailIcon />
            <span>Email</span>
          </Link>
          <a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition hover:text-blue-700 dark:hover:text-blue-300"
          >
            <GitHubIcon />
            <span>GitHub</span>
          </a>
          <a
            href={linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition hover:text-blue-700 dark:hover:text-blue-300"
          >
            <LinkedInIcon />
            <span>LinkedIn</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}
