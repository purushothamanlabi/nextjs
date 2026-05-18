import Link from "next/link";

// Force Next.js to build this page as a completely static route (SSG) at build time
export const dynamic = "force-static";

interface CryptoAsset {
  name: string;
  symbol: string;
  price: string;
  change: string;
}

const mockCryptoData: CryptoAsset[] = [
  { name: "Bitcoin", symbol: "BTC", price: "$96,432.50", change: "+4.2%" },
  { name: "Ethereum", symbol: "ETH", price: "$3,412.80", change: "-0.8%" },
  { name: "Solana", symbol: "SOL", price: "$187.25", change: "+12.4%" },
];

export default async function SSGPage() {
  // Generate Server timestamp at build time
  const now = new Date();
  const timestamp =
    now.toLocaleTimeString("en-US", { hour12: false }) +
    "." +
    String(now.getMilliseconds()).padStart(3, "0");

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link href="/" className="text-sm font-semibold text-zinc-500 hover:text-white transition-colors">
          &larr; Back to Dashboard
        </Link>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-zinc-900/60 p-8 backdrop-blur-xl transition-all duration-350 hover:border-amber-500/40 hover:shadow-[0_0_40px_rgba(245,158,11,0.15)]">
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="flex items-center justify-between mb-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3.5 py-1.5 text-xs font-bold text-amber-400 ring-1 ring-inset ring-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            📦 SSG (Static Site Generation)
          </span>
          <span className="text-xs text-zinc-500 font-mono">force-static</span>
        </div>

        <h1 className="text-3xl font-extrabold text-white mb-3">Static Site Generation Page</h1>
        <p className="text-zinc-400 mb-8 leading-relaxed">
          This page is built **exactly once** when you run the command `npm run build`. The resulting HTML file is cached on the disk or CDN and served instantaneously to all future visitors. It is extremely fast and lightweight.
        </p>

        {/* Live Lab indicators */}
        <div className="grid gap-4 sm:grid-cols-2 mb-8">
          <div className="rounded-xl bg-zinc-950/80 p-4 border border-zinc-800/80 font-mono text-xs">
            <div className="text-zinc-500 mb-1">Rendering Environment:</div>
            <div className="text-sm font-bold text-amber-400">Build-Time Compilation</div>
          </div>
          <div className="rounded-xl bg-zinc-950/80 p-4 border border-zinc-800/80 font-mono text-xs">
            <div className="text-zinc-500 mb-1">Rendered Timestamp:</div>
            <div className="text-sm font-bold text-zinc-100">{timestamp}</div>
          </div>
        </div>

        {/* Content Table */}
        <div className="space-y-3">
          {mockCryptoData.map((coin) => (
            <div
              key={coin.symbol}
              className="flex items-center justify-between p-4 rounded-xl bg-zinc-950/40 border border-zinc-850 transition-all hover:bg-zinc-800/20"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/10 text-xs font-bold text-amber-400 border border-amber-500/20">
                  {coin.symbol[0]}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{coin.name}</div>
                  <div className="text-xs text-zinc-500 font-mono">{coin.symbol}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono text-sm text-zinc-300 font-semibold">{coin.price}</div>
                <div
                  className={`text-xs font-semibold ${
                    coin.change.startsWith("+") ? "text-emerald-400" : "text-rose-400"
                  }`}
                >
                  {coin.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-zinc-800/80 pt-6">
          <h4 className="text-sm font-semibold text-white mb-2">View Source & Reload Experiment:</h4>
          <p className="text-xs text-zinc-400 leading-relaxed mb-4">
            If you refresh this page, the timestamp `{timestamp}` **will never change**! It shows the exact millisecond this project was built (`npm run build`). The static HTML is delivered instantly, making this perfect for blogs, documentation, and product pages.
          </p>
          <a 
            href="/ssg" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm px-5 py-2.5 transition-all shadow-md hover:shadow-amber-600/10"
          >
            🔄 Refresh (Timestamp Will Stay Identical)
          </a>
        </div>
      </div>
    </div>
  );
}
