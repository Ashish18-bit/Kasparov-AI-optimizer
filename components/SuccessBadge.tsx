type Props = {
  runId: string
  onRerun: () => void
}

export default function SuccessBadge({ runId, onRerun }: Props) {
  return (
    <div className="flex items-center gap-3 px-6 py-2 border-b border-gray-800 bg-gray-900/30">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
        <span className="text-xs text-green-400 font-semibold">
          Analysis complete
        </span>
      </div>
      <span className="text-xs text-gray-600 font-mono">
        id: {runId.slice(0, 8)}...
      </span>
      <div className="flex-1" />
      <button
        onClick={onRerun}
        className="text-xs text-gray-500 hover:text-gray-300 border border-gray-700 px-3 py-1 rounded transition"
      >
        ↺ Re-run
      </button>
    </div>
  )
}