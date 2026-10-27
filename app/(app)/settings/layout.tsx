import { SettingsTabs } from "@/components/settings-tabs";

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-foreground">Settings</h1>
      <p className="mt-1 text-foreground-muted">Manage how Signature Studio looks and behaves for you.</p>
      <SettingsTabs />
      <div className="mt-8">{children}</div>
    </div>
  );
}