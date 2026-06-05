type Props = {
  onRun: () => void
}

export default function IdleState({ onRun }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-80 gap-6">

      {/* Tagline */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="text-2xl font-bold text-white">
          AI is the new storefront.
        </h2>
        <p className="text-gray-400 text-sm max-w-md leading-relaxed">
          Your store is being interpreted, not read.
          We show you exactly how AI sees your store —
          and what it's costing you.
        </p>
      </div>

      {/* 3 value props */}
      <div className="grid grid-cols-3 gap-4 w-full max-w-lg">
        {[
          { icon: "🔍", label: "AI Perception", desc: "See what AI agents actually understand" },
          { icon: "⚠", label: "Gap Detection", desc: "Find what's costing you conversions" },
          { icon: "✓", label: "Exact Fixes", desc: "Get copy you can use immediately" }
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 p-4 border border-gray-800 rounded-lg bg-gray-900 text-center"
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="text-xs font-bold text-gray-200">
              {item.label}
            </span>
            <span className="text-xs text-gray-500 leading-relaxed">
              {item.desc}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button
        onClick={onRun}
        className="bg-white text-black font-bold text-sm px-8 py-3 rounded-lg hover:bg-gray-200 transition"
      >
        ▶ Analyze Demo Store
      </button>

      <p className="text-xs text-gray-600 italic">
        Uses a mock Shopify store — no setup required
      </p>
    </div>
  )
}