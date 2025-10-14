import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const DARK_THEME_BACKGROUND = "#050608";
const LIGHT_THEME_BACKGROUND = "#f4f6fb";
const THEME_STORAGE_KEY = "theme";
const CODex_EVENT = "codex-background-change";

function getInitialTheme(): boolean {
  if (typeof window === "undefined") return true;
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  if (saved === "dark") return true;
  if (saved === "light") return false;
  return true;
}

export default function Navbar() {
  const [isDark, setIsDark] = useState<boolean>(getInitialTheme);
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const root = document.documentElement;
    const baseColor = isDark ? DARK_THEME_BACKGROUND : LIGHT_THEME_BACKGROUND;

    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem(THEME_STORAGE_KEY, "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem(THEME_STORAGE_KEY, "light");
    }

    root.style.setProperty("--codex-background", baseColor);

    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent(CODex_EVENT, {
          detail: {
            theme: isDark ? "dark" : "light",
            baseColor,
          },
        }),
      );
    }
  }, [isDark]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const current = window.scrollY;
      const scrollDelta = current - lastScrollY.current;
      const closeToTop = current <= 80;

      setIsHidden((prev) => {
        if (closeToTop) {
          return false;
        }

        if (scrollDelta > 6 && !prev) {
          return true;
        }

        if (scrollDelta < -6 && prev) {
          return false;
        }

        return prev;
      });

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinkClass = "transition hover:text-blue-600 dark:hover:text-blue-400";

  const navClassName = `fixed top-1 left-1/2 -translate-x-1/2
    w-[80%] sm:w-[70%] lg:w-[60%] xl:w-1/2
    max-w-5xl
    z-50 px-3 py-1
    rounded-full border border-white/10
    bg-white/70 dark:bg-black/60
    backdrop-blur-xl shadow-lg
    flex items-center justify-between ${
      isHidden ? "-translate-y-full" : "translate-y-0"
    }`;

  return (
    <nav className={navClassName}>
      <div className="relative mx-auto flex w-full max-w-5xl items-center gap-1 px-3 py-2 sm:px-8">
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide text-blue-600 dark:text-blue-400"
        >
          <span className="sm:hidden">S.</span>
          <span className="hidden sm:inline">Sarb.</span>
        </Link>

        <div className="ml-auto flex items-center gap-2 sm:gap-5">
          <ul className="hidden items-center gap-x-5 text-sm font-semibold sm:flex sm:text-xl">
            <li>
              <Link
                to="/"
                className={navLinkClass}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={navLinkClass}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={navLinkClass}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={navLinkClass}
              >
                Contact
              </Link>
            </li>
          </ul>

          <button
            type="button"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            ref={buttonRef}
            onClick={() => setIsDark((v) => !v)}
            className="rounded-full bg-gray-200 p-2 text-slate-600 transition hover:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
          >
            {isDark ? (
              <SunIcon className="h-5 w-5 text-amber-300" />
            ) : (
              <MoonIcon className="h-5 w-5 text-slate-600 dark:text-white" />
            )}
          </button>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full bg-gray-200 p-2 text-slate-600 transition hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:hidden"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>

        {isMenuOpen ? (
          <div className="absolute left-3 right-3 top-full mt-2 overflow-hidden rounded-2xl border border-white/10 bg-white/90 shadow-lg backdrop-blur-lg dark:border-white/10 dark:bg-black/80">
            <ul className="flex flex-col divide-y divide-slate-200/60 text-base font-semibold text-slate-700 dark:divide-white/10 dark:text-slate-100">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`${navLinkClass} block px-4 py-3`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className={`${navLinkClass} block px-4 py-3`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  onClick={() => setIsMenuOpen(false)}
                  className={`${navLinkClass} block px-4 py-3`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className={`${navLinkClass} block px-4 py-3`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
