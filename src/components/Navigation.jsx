import React, { useEffect, useState } from "react";

export default function Navigation() {
  const [isDark, setIsDark] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const nav = ["Home", "About", "Skills", "Projects", "Certifications", "Experience", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent"
        >
          Krishna Priya
        </button>

        <div className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500">
              {n}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsDark((v) => !v)}
          className="rounded-lg px-3 py-2 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
          aria-label="Toggle theme"
        >
          {isDark ? "🌞 Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
