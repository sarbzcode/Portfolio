import { Link } from "react-router-dom";
import FeaturedProject from "../components/FeaturedProject.tsx";
import SendMail from "../components/SendMail.tsx";
import {
  SiReact,
  SiVite,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import {
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaJs
} from "react-icons/fa";
import { 
  SiCplusplus
} from "react-icons/si";
import { TbLetterC } from "react-icons/tb";


const socialLinks = {
  email: "mailto:sarbzcode@gmail.com",
  github: "https://github.com/sarbzcode",
  linkedin: "https://www.linkedin.com/in/sarbzcode/",
};

const profile = "/profile.jpg";



const certifications = [
  "Google Data Analytics Professional Certificate",
  "Applied Software Engineering Fundamentals Specialization",
];

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
                className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:text-white hover:bg-blue-500"
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

      <section className="relative px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-5xl flex-col gap-12 lg:flex-row">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-200 sm:text-3xl">
              Skills
            </h2>
            <p className="mt-4 text-sm text-neutral-600 sm:text-base dark:text-neutral-200/75">
              A toolbelt spanning data analytics, backend engineering, and
              polished frontend experiences.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                {
                  icon: <FaPython className="text-yellow-400" />,
                  name: "Python",
                },
                { icon: <FaJava className="text-red-400" />, name: "Java" },
                {
                  icon: <TbLetterC className="text-gray-500" />,
                  name: "C language",
                },
                {
                  icon: <SiCplusplus className="text-blue-500" />,
                  name: "C++",
                },
                {
                  icon: <FaJs className="text-yellow-500" />,
                  name: "JavaScript",
                },
                {
                  icon: <FaReact className="text-sky-500" />,
                  name: "React",
                },
                {
                  icon: <SiVite className="text-purple-500" />,
                  name: "Vite",
                },

                {
                  icon: <FaNodeJs className="text-green-500" />,
                  name: "Node.js",
                },
                {
                  icon: <SiMongodb className="text-green-600" />,
                  name: "MongoDB",
                },
                {
                  icon: <SiPostgresql className="text-blue-500" />,
                  name: "PostgreSQL"
                },
              ].map((skill, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 rounded-full border border-blue-300/40 bg-blue-500/10 
                 px-4 py-2 min-w-[115px] text-sm font-medium transition-all duration-200 
                 hover:scale-105 hover:shadow-sm hover:shadow-blue-400/30"
                >
                  <span className="text-base">
                    {skill.icon}
                  </span>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 rounded-3xl border border-neutral-200/60 bg-white/80 p-8 text-neutral-800 shadow-xl shadow-blue-500/10 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-neutral-200">
            <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-200 sm:text-3xl">
              Certifications
            </h2>
            <ul className="mt-6 space-y-4 text-sm text-neutral-700 sm:text-base dark:text-neutral-200/85">
              {certifications.map((certification) => (
                <li key={certification} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 -translate-y-0.5 rounded-full bg-blue-500 dark:bg-blue-400" />
                  <span>{certification}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                to="/certifications"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800 dark:text-blue-200 dark:hover:text-white"
              >
                Explore certifications
                <span aria-hidden="true">&gt;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <SendMail />
    </div>
  </>
);

export default HomePage;

