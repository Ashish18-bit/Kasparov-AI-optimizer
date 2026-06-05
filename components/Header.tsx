export default function Header() {
  return (
    <header className="w-full px-6 py-4 border-b border-gray-800 flex items-center justify-between bg-gray-950/80 backdrop-blur sticky top-0 z-40">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
          <span className="text-black text-xs font-black">K</span>
        </div>
        <div>
          <h1 className="text-sm font-bold tracking-tight leading-none">
            KASPAROV
          </h1>
          <p className="text-xs text-gray-500 leading-none mt-0.5">
            AI Readiness Layer for Shopify
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <span className="text-xs text-gray-500 hidden md:block">
          Track 5 — AI Representation Optimizer
        </span>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-gray-400">Live</span>
        </div>
      </div>
    </header>
  )
}