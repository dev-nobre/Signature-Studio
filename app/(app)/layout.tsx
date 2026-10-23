import { Sidebar } from "@/components/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main className="min-w-0 flex-1">
                <div className="mx-auto w-full max-w-5xl px-8 py-10">{children}</div>
            </main>
        </div>
    );
}
