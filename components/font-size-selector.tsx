"use client";

import { useEffect, useState } from "react";

type FontSize = "small" | "default" | "large";

const options = [
  { value: "small" as const, label: "Small", previewClass: "text-[14px]" },
  { value: "default" as const, label: "Default", previewClass: "text-[16px]" },
  { value: "large" as const, label: "Large", previewClass: "text-[18px]" },
];

export function FontSizeSelector() {
  const [size, setSize] = useState<FontSize | null>(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-font-size");
    setSize(current === "small" || current === "large" ? current : "default");
  }, []);

    function applySize(next: FontSize) {
    if (next === "default") {
      document.documentElement.removeAttribute("data-font-size");
    } else {
      document.documentElement.setAttribute("data-font-size", next);
    }
    try {
      localStorage.setItem("font-size", next);
    } catch {}
    setSize(next);
  }

    return (
    <div role="group" aria-label="Font size" className="grid max-w-md grid-cols-3 gap-2">
      {options.map((option) => {
        const isActive = size === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => applySize(option.value)}
            aria-pressed={isActive}
            disabled={size === null}
            className={`flex flex-col items-center gap-1 rounded-lg border px-3 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tenant disabled:opacity-60 ${
              isActive
                ? "border-transparent bg-tenant text-tenant-foreground"
                : "border-border bg-surface text-foreground-muted hover:bg-surface-muted hover:text-foreground"
            }`}
          >
            <span className={`font-semibold ${option.previewClass}`} aria-hidden="true">
              Aa
            </span>
            {option.label}
          </button>
        );
      })}
    </div>
  );
}