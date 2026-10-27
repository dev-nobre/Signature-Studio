"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  function applyTheme(next: Theme) {
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  }
    const options = [
    { value: "dark" as const, label: "Dark", icon: Moon },
    { value: "light" as const, label: "Light", icon: Sun },
  ];
    return (
    <div>
      <p className="mb-2 px-1 text-sm font-medium text-foreground">Appearance</p>
      <div role="group" aria-label="Color theme" className="grid grid-cols-2 gap-2">
        {options.map((option) => {
          const Icon = option.icon;
          const isActive = theme === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => applyTheme(option.value)}
              aria-pressed={isActive}
              aria-label={`${option.label} mode`}
              disabled={theme === null}
              className={`flex items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tenant disabled:opacity-60 ${
                isActive
                  ? "border-transparent bg-tenant text-tenant-foreground"
                  : "border-border bg-surface text-foreground-muted hover:bg-surface-muted hover:text-foreground"
              }`}
            >
              <Icon size={16} aria-hidden="true" />
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}