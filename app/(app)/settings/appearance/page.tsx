import { ThemeToggle } from "@/components/theme-toggle";

export const metadata = {
  title: "Appearance",
};

export default function AppearancePage() {
  return (
    <section className="rounded-2xl border border-border bg-surface p-6">
      <h2 className="text-lg font-semibold text-foreground">Theme</h2>
      <p className="mt-1 mb-4 text-sm text-foreground-muted">
        Choose between a light or dark interface. Your choice is saved on this device.
      </p>
      <ThemeToggle />
    </section>
  );
}