"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clock, Menu, PenLine, Settings, Users, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type NavItem = { label: string; href: string; icon: LucideIcon };

const navItems: NavItem[] = [
  { label: "Team", href: "/team", icon: Users },
  { label: "Signatures", href: "/signatures", icon: PenLine },
  { label: "History", href: "/history", icon: Clock },
];

const settingsItem: NavItem = {
  label: "Settings",
  href: "/settings",
  icon: Settings,
};

function NavLink({
  item,
  pathname,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  onNavigate?: () => void;
}) {
  const isActive = pathname.startsWith(item.href);
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
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
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-3 px-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-tenant text-lg font-bold text-tenant-foreground">
        S
      </div>
      <span className="text-lg font-semibold leading-tight text-foreground">
        Signature
        <br />
        Studio
      </span>
    </div>
  );
}

function SidebarContent({
  pathname,
  onNavigate,
}: {
  pathname: string;
  onNavigate?: () => void;
}) {
  return (
    <div className="flex h-full flex-col p-4">
      <div className="mb-8">
        <Logo />
      </div>

      <nav aria-label="Main navigation">
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink item={item} pathname={pathname} onNavigate={onNavigate} />
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto border-t border-border pt-4">
        <NavLink
          item={settingsItem}
          pathname={pathname}
          onNavigate={onNavigate}
        />
      </div>
    </div>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Desktop: fixed sidebar */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-border bg-surface md:block">
        <SidebarContent pathname={pathname} />
      </aside>

      {/* Mobile: top bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-surface px-4 py-2 md:hidden">
        <Logo />
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tenant"
        >
          <Menu size={24} aria-hidden="true" />
        </button>
      </header>

      {/* Mobile: drawer */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/50"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
            className="relative h-full w-72 max-w-[85%] bg-surface shadow-xl"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="absolute top-3 right-3 flex h-11 w-11 items-center justify-center rounded-lg text-foreground-muted transition-colors hover:bg-surface-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tenant"
            >
              <X size={24} aria-hidden="true" />
            </button>
            <SidebarContent
              pathname={pathname}
              onNavigate={() => setOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}