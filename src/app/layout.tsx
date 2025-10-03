import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabe Diniz",
  description: "Software Engineer • DevOps • Automation",
  icons: { icon: "/avatar-icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-neutral-900 text-neutral-200">
        <div className="mx-auto max-w-7xl p-4 lg:p-8">
          {/* Mobile: stacked; Desktop: 12-col grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Left persistent profile: ~1/4 on lg/xl, ~1/3 on 2xl */}
            <aside className="lg:col-span-3 lg:sticky lg:top-8 self-start">
              <Sidebar />
            </aside>

            {/* Right content */}
            <main className="lg:col-span-9 rounded-2xl border border-neutral-700 bg-primary-dark-bg overflow-hidden">
              <TopNav />
              <div className="p-6 lg:p-8">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
