import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Rendering Comparison Lab",
  description: "Live interactive comparison of CSR, SSR, SSG, and ISR in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full dark`}>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 font-sans antialiased">
        {/* Sticky Glassmorphic Header */}
        <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-3">
                <Link href="/" className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 font-extrabold text-sm border border-emerald-500/20">
                    ▲
                  </span>
                  <span className="font-bold text-white tracking-tight hover:text-emerald-400 transition-colors">
                    RenderLab
                  </span>
                </Link>
              </div>

              <nav className="flex items-center gap-1 sm:gap-4">
                <Link
                  href="/"
                  className="rounded-lg px-3 py-1.5 text-xs sm:text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all"
                >
                  Dashboard
                </Link>
                <Link
                  href="/csr"
                  className="rounded-lg px-3 py-1.5 text-xs sm:text-sm font-medium text-blue-400 hover:text-white hover:bg-blue-500/10 transition-all"
                >
                  CSR
                </Link>
                <Link
                  href="/ssr"
                  className="rounded-lg px-3 py-1.5 text-xs sm:text-sm font-medium text-emerald-400 hover:text-white hover:bg-emerald-500/10 transition-all"
                >
                  SSR
                </Link>
                <Link
                  href="/ssg"
                  className="rounded-lg px-3 py-1.5 text-xs sm:text-sm font-medium text-amber-400 hover:text-white hover:bg-amber-500/10 transition-all"
                >
                  SSG
                </Link>
                <Link
                  href="/isr"
                  className="rounded-lg px-3 py-1.5 text-xs sm:text-sm font-medium text-purple-400 hover:text-white hover:bg-purple-500/10 transition-all"
                >
                  ISR
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <main className="flex-1 flex flex-col">{children}</main>
      </body>
    </html>
  );
}
