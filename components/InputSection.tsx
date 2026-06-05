type Props = {
  onRun: (useMock: boolean) => void
  loading: boolean
}

export default function InputSection({ onRun, loading }: Props) {
  return (
    <div className="flex items-center gap-4 px-6 py-4 border-b border-gray-800 bg-gray-900/50">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs text-gray-400 font-mono">
          store: mock-headphones.myshopify.com
        </span>
      </div>

      <div className="flex-1" />

      <button
        onClick={() => onRun(false)}
        disabled={loading}
        className="border border-gray-600 text-gray-400 text-xs px-3 py-1.5 rounded hover:border-gray-400 hover:text-gray-200 disabled:opacity-30 transition"
      >
        Connect Real Store
      </button>

      <button
        onClick={() => onRun(true)}
        disabled={loading}
        className="bg-white text-black text-sm font-bold px-5 py-2 rounded hover:bg-gray-200 disabled:opacity-50 transition"
      >
        {loading ? "Running..." : "▶ Analyze Store"}
      </button>
    </div>
  )
}