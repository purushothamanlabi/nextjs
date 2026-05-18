"use client";

import { useEffect, useState } from "react";

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

export default function ClientRenderedCard() {
  const [data, setData] = useState<CryptoAsset[] | null>(null);
  const [timestamp, setTimestamp] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate API fetch delay of 1.5 seconds
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
    <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-zinc-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] md:p-8">
      {/* Glow effect */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400 ring-1 ring-inset ring-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
          💻 CSR (Client Component)
        </span>
        <span className="text-xs text-zinc-500 font-mono">"use client"</span>
      </div>

      <h3 className="text-xl font-bold text-white mb-2">Client-Side Rendered</h3>
      <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
        The browser receives an empty HTML shell, executes JavaScript, and then fetches and mounts the data locally.
      </p>

      {/* Timestamp indicator */}
      <div className="mb-6 rounded-lg bg-zinc-950/80 p-3 border border-zinc-800 font-mono text-xs">
        <div className="flex justify-between items-center text-zinc-500 mb-1">
          <span>Rendered Timestamp:</span>
          <span className="text-blue-400 font-bold">Client-Side</span>
        </div>
        <div className="text-sm font-semibold text-zinc-300">
          {loading ? (
            <span className="text-blue-500/60 animate-pulse">Waiting for JS to mount...</span>
          ) : (
            timestamp
          )}
        </div>
      </div>

      {/* Main content display */}
      <div className="space-y-3 min-h-[170px]">
        {loading ? (
          // Sleek glassmorphism skeleton loaders
          <div className="space-y-3 animate-pulse">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-zinc-800/40 border border-zinc-700/20">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-zinc-700/50" />
                  <div className="space-y-2">
                    <div className="h-4 w-20 rounded bg-zinc-700/50" />
                    <div className="h-3 w-10 rounded bg-zinc-700/30" />
                  </div>
                </div>
                <div className="space-y-2 text-right">
                  <div className="h-4 w-16 rounded bg-zinc-700/50" />
                  <div className="h-3 w-8 rounded bg-zinc-700/30" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          data?.map((coin) => (
            <div
              key={coin.symbol}
              className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/50 transition-all hover:bg-zinc-800/30"
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

      <div className="mt-6 border-t border-zinc-800/60 pt-4">
        <div className="text-xs text-zinc-500 space-y-1 bg-blue-950/10 p-2.5 rounded-lg border border-blue-900/10">
          <div className="font-semibold text-blue-400">💡 Inspection Proof:</div>
          <p>
            Press <kbd className="bg-zinc-800 px-1 rounded text-zinc-400 font-mono">Ctrl + U</kbd> (View Source) and search for <strong className="text-zinc-300">"{mockCryptoData[0].name}"</strong> or the timestamp. You will **not** find them in the source code because they are rendered on the client!
          </p>
        </div>
      </div>
    </div>
  );
}
