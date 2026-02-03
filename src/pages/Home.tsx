import FeaturedProject from "../components/FeaturedProject.tsx";
import GitHubContributions from "../components/GitHubContributions.tsx";
import SendMail from "../components/SendMail.tsx";

const socialLinks = {
  email: "mailto:sarbzcode@gmail.com",
  github: "https://github.com/sarbzcode",
  linkedin: "https://www.linkedin.com/in/sarbzcode/",
};

const profile = "/profile.jpg";

const HomePage = () => (
  <>
    <div className="relative z-10 flex flex-col bg-transparent text-neutral-900 dark:text-neutral-100">
      <section className="max-w-5xl mx-auto flex min-h-[60vh] flex-col justify-center overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <p className="text-sm uppercase tracking-[0.4em] text-blue-600 dark:text-blue-300">
              Portfolio
            </p>
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl">
              Sarbjot Singh
            </h1>
            <p className="text-lg text-neutral-700 dark:text-blue-100 sm:text-xl">
              Aspiring Software Developer | Data Analytics Enthusiast |
              Full-Stack Engineer
            </p>
            <p className="mx-auto max-w-2xl text-base text-neutral-700/80 dark:text-neutral-200/80 sm:text-lg lg:mx-0">
              I'm a Bachelor of Computer Science (Data Analytics with Co-op)
              student at Acadia University, Passionate about building impactful
              products that blend data-driven insights with intuitive user
              experiences.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 lg:justify-start">
              <a
                href={socialLinks.email}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500 hover:text-white"
              >
                Email
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-neutral-300 px-5 py-2 text-sm font-semibold text-neutral-700 transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-500 dark:border-white/20 dark:text-white dark:hover:text-blue-200"
              >
                GitHub
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-neutral-300 px-5 py-2 text-sm font-semibold text-neutral-700 transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-500 dark:border-white/20 dark:text-white dark:hover:text-blue-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="relative flex-1">
            <div className="profile-ring relative h-64 w-64 sm:-top-5 sm:h-72 sm:w-72 lg:-top-2 lg:h-80 lg:w-80">
              <img
                src={profile}
                alt="Sarbjot Singh portrait"
                loading="lazy"
                className="profile-ring__image h-full w-full rounded-full object-cover shadow-2xl animate-glow"
              />
            </div>
          </div>
        </div>
      </section>
      <FeaturedProject />
      <GitHubContributions />
      <SendMail />
    </div>
  </>
);

export default HomePage;
