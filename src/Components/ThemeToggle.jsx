import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  // Ensure theme is set correctly on first load
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Ensure the theme is applied on first load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 flex items-center gap-2 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white transition duration-300 shadow-md"
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
