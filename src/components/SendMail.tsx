import { useState } from "react";
import Lottie from "lottie-react";
import mailAnimation from "../assets/mail.json";
import type { ChangeEvent, FormEvent } from "react";

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

export default function SendMail() {
  const [form, setForm] = useState(initialFormState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status !== "loading") {
      setStatus("idle");
    }
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.message.trim()) {
      setErrorMessage("Please include a message before sending.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      let payload: { ok?: boolean; error?: string } = {};
      try {
        payload = await response.json();
      } catch (parseError) {
        payload = {};
      }

      if (!response.ok || payload.ok === false) {
        throw new Error(payload.error || "Unable to send your message right now.");
      }

      setStatus("success");
      setForm(initialFormState);
    } catch (error) {
      console.error("Contact form submission failed", error);
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message right now."
      );
    }
  };

  return (
    <div className="relative z-10 flex flex-col bg-transparent text-neutral-900 dark:text-neutral-100">
      <section className="relative px-6 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-neutral-200/60 bg-white/80 p-8 shadow-2xl shadow-blue-500/10 backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-200 sm:text-3xl">
                Send a quick note
              </h2>
              <div className="hidden lg:flex justify-center mt-10 mx-10">
                <Lottie
                  animationData={mailAnimation}
                  loop
                  autoplay
                  className="w-[90%] max-w-[420px] h-auto opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-neutral-700 dark:text-neutral-200"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-neutral-200/70 bg-white/90 px-4 py-3 text-sm text-neutral-800 shadow-sm shadow-blue-500/10 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-white/5 dark:text-neutral-100"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-neutral-700 dark:text-neutral-200"
                  >
                    Email or contact handle
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="name@email.com"
                    className="mt-2 w-full rounded-xl border border-neutral-200/70 bg-white/90 px-4 py-3 text-sm text-neutral-800 shadow-sm shadow-blue-500/10 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-white/5 dark:text-neutral-100"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-neutral-700 dark:text-neutral-200"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Share context, goals, and timelines so I can respond with specifics."
                    rows={5}
                    className="mt-2 w-full rounded-xl border border-neutral-200/70 bg-white/90 px-4 py-3 text-sm text-neutral-800 shadow-sm shadow-blue-500/10 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-white/5 dark:text-neutral-100"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  aria-busy={status === "loading"}
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-500 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" ? "Sending..." : "Send Email"}
                </button>
                {status === "success" && (
                  <p
                    className="text-sm font-semibold text-blue-600 dark:text-blue-300"
                    role="status"
                  >
                    Thanks! Your message was sent successfully. I'll reply soon.
                  </p>
                )}
                {status === "error" && errorMessage && (
                  <p
                    className="text-sm font-semibold text-red-600 dark:text-red-300"
                    role="alert"
                  >
                    {errorMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
