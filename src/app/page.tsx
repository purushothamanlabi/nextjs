import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="text-center mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/40 text-xs text-zinc-400 mb-6">
          <span>🚀 Premium Next.js 16 Production Lab Active</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-zinc-200 to-blue-400">
          The Next.js 4-Way Rendering Lab
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed">
          Deep-dive into the four core rendering strategies of modern web applications: **CSR, SSR, SSG, and ISR**. Click any card below to experience its behavior live.
        </p>
      </section>

      {/* 4 Cards Grid */}
      <section className="grid gap-6 md:grid-cols-2 lg:gap-8 mb-16">
        
        {/* CSR Card */}
        <Link 
          href="/csr" 
          className="group relative overflow-hidden rounded-2xl border border-blue-500/20 bg-zinc-900/40 p-6 transition-all duration-300 hover:border-blue-500/40 hover:bg-zinc-900/70 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
        >
          <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/5 blur-2xl group-hover:bg-blue-500/10 transition-all duration-300" />
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400 border border-blue-500/10">
              💻 Client-Side
            </span>
            <span className="text-xs text-zinc-500 font-mono">"use client"</span>
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            CSR (Client-Side Rendering)
          </h3>
          <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
            The browser downloads a barebones page and populates the data using JavaScript execution inside the client.
          </p>
          <div className="mt-6 flex items-center justify-between text-xs">
            <span className="text-zinc-500">Rendered: <strong className="text-blue-400">In Browser</strong></span>
            <span className="font-semibold text-blue-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              Launch Demo &rarr;
            </span>
          </div>
        </Link>

        {/* SSR Card */}
        <Link 
          href="/ssr" 
          className="group relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-zinc-900/40 p-6 transition-all duration-300 hover:border-emerald-500/40 hover:bg-zinc-900/70 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]"
        >
          <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-500/5 blur-2xl group-hover:bg-emerald-500/10 transition-all duration-300" />
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/10">
              ⚡ Dynamic Server
            </span>
            <span className="text-xs text-zinc-500 font-mono">force-dynamic</span>
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
            SSR (Server-Side Rendering)
          </h3>
          <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
            Every request triggers the server to fetch fresh data and pre-compile the page to raw HTML before delivery.
          </p>
          <div className="mt-6 flex items-center justify-between text-xs">
            <span className="text-zinc-500">Rendered: <strong className="text-emerald-400">On every request</strong></span>
            <span className="font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              Launch Demo &rarr;
            </span>
          </div>
        </Link>

        {/* SSG Card */}
        <Link 
          href="/ssg" 
          className="group relative overflow-hidden rounded-2xl border border-amber-500/20 bg-zinc-900/40 p-6 transition-all duration-300 hover:border-amber-500/40 hover:bg-zinc-900/70 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]"
        >
          <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-amber-500/5 blur-2xl group-hover:bg-amber-500/10 transition-all duration-300" />
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400 border border-amber-500/10">
              📦 Static Build
            </span>
            <span className="text-xs text-zinc-500 font-mono">force-static</span>
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
            SSG (Static Site Generation)
          </h3>
          <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
            The page is built **exactly once** during the build stage (`npm run build`). Served instantly to all visitors from cache.
          </p>
          <div className="mt-6 flex items-center justify-between text-xs">
            <span className="text-zinc-500">Rendered: <strong className="text-amber-400">At build time</strong></span>
            <span className="font-semibold text-amber-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              Launch Demo &rarr;
            </span>
          </div>
        </Link>

        {/* ISR Card */}
        <Link 
          href="/isr" 
          className="group relative overflow-hidden rounded-2xl border border-purple-500/20 bg-zinc-900/40 p-6 transition-all duration-300 hover:border-purple-500/40 hover:bg-zinc-900/70 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]"
        >
          <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-purple-500/5 blur-2xl group-hover:bg-purple-500/10 transition-all duration-300" />
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-400 border border-purple-500/10">
              🔄 Background Revalidate
            </span>
            <span className="text-xs text-zinc-500 font-mono">revalidate = 10</span>
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
            ISR (Incremental Static Regeneration)
          </h3>
          <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
            Built at build time, but automatically re-generated in the background after a designated time interval.
          </p>
          <div className="mt-6 flex items-center justify-between text-xs">
            <span className="text-zinc-500">Rendered: <strong className="text-purple-400">At build + revalidated</strong></span>
            <span className="font-semibold text-purple-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              Launch Demo &rarr;
            </span>
          </div>
        </Link>

      </section>

      {/* Comparison Matrix Table */}
      <section className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-white mb-6">Comparison Matrix</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400 text-sm font-semibold">
                <th className="py-3 px-4">Strategy</th>
                <th className="py-3 px-4">Rendered When?</th>
                <th className="py-3 px-4">Initial Load Speed</th>
                <th className="py-3 px-4">Time to First Byte (TTFB)</th>
                <th className="py-3 px-4">SEO Friendliness</th>
                <th className="py-3 px-4">Dynamic Updates</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 text-sm">
              <tr className="hover:bg-zinc-900/35 transition-all">
                <td className="py-4 px-4 font-semibold text-blue-400">CSR</td>
                <td className="py-4 px-4 text-zinc-300">Client-side (Browser)</td>
                <td className="py-4 px-4 text-zinc-300">Fast (Empty shell)</td>
                <td className="py-4 px-4 text-emerald-400">Instant</td>
                <td className="py-4 px-4 text-rose-400">Poor (Requires JS)</td>
                <td className="py-4 px-4 text-emerald-400">Real-time</td>
              </tr>
              <tr className="hover:bg-zinc-900/35 transition-all">
                <td className="py-4 px-4 font-semibold text-emerald-400">SSR</td>
                <td className="py-4 px-4 text-zinc-300">On every visitor request</td>
                <td className="py-4 px-4 text-zinc-300">Instant with data</td>
                <td className="py-4 px-4 text-amber-400">Medium (Wait for server fetch)</td>
                <td className="py-4 px-4 text-emerald-400">Excellent</td>
                <td className="py-4 px-4 text-emerald-400">Real-time</td>
              </tr>
              <tr className="hover:bg-zinc-900/35 transition-all">
                <td className="py-4 px-4 font-semibold text-amber-400">SSG</td>
                <td className="py-4 px-4 text-zinc-300">Once at build time</td>
                <td className="py-4 px-4 text-emerald-400">Instant with data</td>
                <td className="py-4 px-4 text-emerald-400">Instant (From CDN)</td>
                <td className="py-4 px-4 text-emerald-400">Excellent</td>
                <td className="py-4 px-4 text-rose-400">Requires rebuild</td>
              </tr>
              <tr className="hover:bg-zinc-900/35 transition-all">
                <td className="py-4 px-4 font-semibold text-purple-400">ISR</td>
                <td className="py-4 px-4 text-zinc-300">At build + Revalidated in BG</td>
                <td className="py-4 px-4 text-emerald-400">Instant with data</td>
                <td className="py-4 px-4 text-emerald-400">Instant (From CDN)</td>
                <td className="py-4 px-4 text-emerald-400">Excellent</td>
                <td className="py-4 px-4 text-amber-400">Delayed (Interval based)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
