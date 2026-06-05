type Props = {
  message: string
  onRetry: () => void
}

export default function ErrorState({ message, onRetry }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-72 gap-4">

      {/* Icon */}
      <div className="w-12 h-12 rounded-full border border-red-800 bg-red-950/40 flex items-center justify-center">
        <span className="text-red-400 text-xl">✕</span>
      </div>

      {/* Message */}
      <div className="flex flex-col items-center gap-1">
        <p className="text-red-400 text-sm font-semibold">
          Analysis Failed
        </p>
        <p className="text-gray-500 text-xs max-w-sm text-center leading-relaxed">
          {message}
        </p>
      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-2">
        <button
          onClick={onRetry}
          className="text-xs bg-white text-black font-bold px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          ↺ Retry Demo Store
        </button>
        <button
          onClick={() => window.location.reload()}
          className="text-xs border border-gray-700 text-gray-400 px-4 py-2 rounded hover:border-gray-500 transition"
        >
          Reset
        </button>
      </div>

      {/* Debug hint */}
      <p className="text-xs text-gray-700 italic">
        Make sure backend is running on port 8000
      </p>
    </div>
  )
}