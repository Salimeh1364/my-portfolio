"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Use requestAnimationFrame to prevent synchronous setState warning in ESLint
    const handle = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(handle);
  }, []);

  if (!mounted) {
    return <div className="w-16 h-8" />;
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-3 py-1.5 rounded-full border border-[#D8C7B8] dark:border-[#4A433E] bg-[#EFE8DF] dark:bg-[#2C2825] text-[#2C2825] dark:text-[#EFE8DF] hover:scale-105 transition-all cursor-pointer text-xs font-sans"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}