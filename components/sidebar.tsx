"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clock, PenLine, Users } from "lucide-react";

const navItems = [
  { label: "Team", href: "/team", icon: Users },
  { label: "Signatures", href: "/signatures", icon: PenLine },
  { label: "History", href: "/history", icon: Clock },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-screen w-64 shrink-0 flex-col border-r border-border bg-surface p-4">
      
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-tenant text-lg font-bold text-tenant-foreground">
          S
        </div>
        <span className="text-lg font-semibold leading-tight text-foreground">
          Signature
          <br />
          Studio
        </span>
      </div>
      <nav aria-label="Main navigation">
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            const Icon = item.icon;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tenant ${
                    isActive
                      ? "bg-tenant text-tenant-foreground"
                      : "text-foreground-muted hover:bg-surface-muted hover:text-foreground"
                  }`}
                >
                  <Icon size={20} aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
    </aside>
  );
}