"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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

export default function CSRPage() {
  const [data, setData] = useState<CryptoAsset[] | null>(null);
  const [timestamp, setTimestamp] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(mockCryptoData);
      const now = new Date();
      setTimestamp(
        now.toLocaleTimeString("en-US", { hour12: false }) +
          "." +
          String(now.getMilliseconds()).padStart(3, "0")
      );
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link href="/" className="text-sm font-semibold text-zinc-500 hover:text-white transition-colors">
          &larr; Back to Dashboard
        </Link>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-zinc-900/60 p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]">
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="flex items-center justify-between mb-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3.5 py-1.5 text-xs font-bold text-blue-400 ring-1 ring-inset ring-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            💻 CSR (Client-Side Rendering)
          </span>
          <span className="text-xs text-zinc-500 font-mono">"use client"</span>
        </div>

        <h1 className="text-3xl font-extrabold text-white mb-3">Client-Side Rendering Page</h1>
        <p className="text-zinc-400 mb-8 leading-relaxed">
          This page arrives in the browser as a completely blank shell containing empty containers. The browser fetches the JavaScript bundle, executes it, fetches the mock API data, and generates the layout completely within your browser.
        </p>

        {/* Live Lab indicators */}
        <div className="grid gap-4 sm:grid-cols-2 mb-8">
          <div className="rounded-xl bg-zinc-950/80 p-4 border border-zinc-800/80 font-mono text-xs">
            <div className="text-zinc-500 mb-1">Rendering Environment:</div>
            <div className="text-sm font-bold text-blue-400">User's Web Browser</div>
          </div>
          <div className="rounded-xl bg-zinc-950/80 p-4 border border-zinc-800/80 font-mono text-xs">
            <div className="text-zinc-500 mb-1">Rendered Timestamp:</div>
            <div className="text-sm font-bold text-zinc-100">
              {loading ? (
                <span className="text-blue-500/60 animate-pulse">Running script...</span>
              ) : (
                timestamp
              )}
            </div>
          </div>
        </div>

        {/* Content Table */}
        <div className="space-y-3 min-h-[170px]">
          {loading ? (
            <div className="space-y-3 animate-pulse">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-zinc-800/20 border border-zinc-700/10">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-zinc-700/40" />
                    <div className="space-y-2">
                      <div className="h-4 w-24 rounded bg-zinc-700/40" />
                      <div className="h-3 w-12 rounded bg-zinc-700/20" />
                    </div>
                  </div>
                  <div className="h-4 w-20 rounded bg-zinc-700/40" />
                </div>
              ))}
            </div>
          ) : (
            data?.map((coin) => (
              <div
                key={coin.symbol}
                className="flex items-center justify-between p-4 rounded-xl bg-zinc-950/40 border border-zinc-850 transition-all hover:bg-zinc-800/20"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-xs font-bold text-blue-400 border border-blue-500/20">
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
            ))
          )}
        </div>

        <div className="mt-8 border-t border-zinc-800/80 pt-6">
          <h4 className="text-sm font-semibold text-white mb-2">View Source Experiment:</h4>
          <p className="text-xs text-zinc-400 leading-relaxed mb-4">
            If you right-click on this page, click **View Page Source (Ctrl + U)**, and search for `Bitcoin`, you will **not** find it. The search engine crawler only sees an empty loading skeleton. This shows why CSR can be bad for SEO.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-5 py-2.5 transition-all shadow-md hover:shadow-blue-600/10"
          >
            🔄 Hard Reload to See Loading State
          </button>
        </div>
      </div>
    </div>
  );
}
