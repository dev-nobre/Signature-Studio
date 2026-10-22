import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="rounded-2xl border border-border bg-surface p-6">
        <h1 className="text-2xl font-semibold text-foreground">Theme test</h1>
        <p className="text-foreground-muted">Secondary text goes here.</p>
        <button className="mt-4 rounded-lg bg-tenant px-4 py-2 font-medium text-tenant-foreground">
          Tenant button
        </button>
        <div className="mt-4">
          <ThemeToggle />
        </div>
      </div>
    </main>
  );
}