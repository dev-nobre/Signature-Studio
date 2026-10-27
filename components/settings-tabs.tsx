"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [{ label: "Appearance", href: "/settings/appearance" }];

export function SettingsTabs() {
  const pathname = usePathname();

  return (
    <nav aria-label="Settings sections" className="mt-6 border-b border-border pb-4">
      <ul className="flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const isActive = pathname.startsWith(tab.href);

          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                aria-current={isActive ? "page" : undefined}
                className={`block rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tenant ${
                  isActive
                    ? "bg-tenant text-tenant-foreground"
                    : "text-foreground-muted hover:bg-surface-muted hover:text-foreground"
                }`}
              >
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}