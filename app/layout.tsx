import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Signature Studio",
    template: "%s | Signature Studio",
  },
  description: "Create and manage consistent email signatures for your whole team.",
};

const preferencesScript = `
  try {
    var stored = localStorage.getItem("theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (stored === "dark" || (!stored && prefersDark)) {
      document.documentElement.classList.add("dark");
    }

    var size = localStorage.getItem("font-size");
    if (size === "small" || size === "large") {
      document.documentElement.setAttribute("data-font-size", size);
    }
  } catch (e) {}
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="preferences-script" strategy="beforeInteractive">
          {preferencesScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
