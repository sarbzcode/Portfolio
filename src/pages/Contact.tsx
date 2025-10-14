import { FaLinkedin, FaGithub } from "react-icons/fa";
import SendMail from "../components/SendMail.tsx";

const socialLinks = {
  linkedin: "https://www.linkedin.com/in/sarbzcode/",
  github: "https://github.com/sarbzcode",
};

const contactMethods = [
  {
    title: "LinkedIn",
    description:
      "Let's connect professionally—open to internships, co-op roles, and conversations about analytics, product, or developer tooling.",
    actionLabel: "Connect on LinkedIn",
    href: socialLinks.linkedin,
    meta: "DMs open",
    icon: <FaLinkedin className="text-[#0A66C2] text-2xl" />, // LinkedIn blue
  },
  {
    title: "GitHub",
    description:
      "Want to dive into code or propose an issue? Drop a note on GitHub or open a discussion—happy to collaborate on open source.",
    actionLabel: "Explore GitHub",
    href: socialLinks.github,
    meta: "Active weekly",
    icon: <FaGithub className="text-[#181717] dark:text-white text-2xl" />, // GitHub black/white
  },
];

export default function Contact() {
  return (
    <div className="relative z-10 flex flex-col bg-transparent text-neutral-900 dark:text-neutral-100">
      <section className="relative px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mt-6 text-4xl font-bold text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl">
            Contact
          </h1>
        </div>
      </section>

      <section className="relative px-6 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {contactMethods.map((method) => (
            <div
              key={method.title}
              className="rounded-3xl border border-neutral-200/60 bg-white/80 p-6 shadow-xl shadow-blue-500/10 backdrop-blur dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span>{method.icon}</span>
                  <h2 className="text-lg font-semibold text-blue-700 dark:text-blue-200">
                    {method.title}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-200/80">
                    {method.description}
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-between text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-300">
                  <span>{method.meta}</span>
                  <a
                    href={method.href}
                    target={
                      method.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      method.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center justify-center rounded-full bg-white-600 px-6 py-2.5 text-sm font-semibold text-grey shadow-lg shadow-blue-600/30 transition hover:black-600 hover:bg-black-500"
                  >
                    {method.actionLabel}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <SendMail />
    </div>
  );
}
