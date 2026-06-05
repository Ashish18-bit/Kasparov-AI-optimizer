type Props = {
  answer: string
  confidence: number
  missing: string[]
  hesitations: string[]
}

const confidenceColor = (n: number) => {
  if (n >= 70) return "text-green-400"
  if (n >= 40) return "text-yellow-400"
  return "text-red-400"
}

const confidenceLabel = (n: number) => {
  if (n >= 70) return "High"
  if (n >= 40) return "Moderate"
  return "Low"
}

export default function AIPerceptionPanel({
  answer,
  confidence,
  missing,
  hesitations,
}: Props) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 flex flex-col gap-4 h-full">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
          AI Sees This
        </h2>
        <div className={`flex items-center gap-1 ${confidenceColor(confidence)}`}>
          <span className="text-xs font-bold">
            {confidenceLabel(confidence)}
          </span>
          <span className="text-xs">
            ({confidence}%)
          </span>
        </div>
      </div>

      {/* Confidence Bar */}
      <div className="w-full bg-gray-800 rounded-full h-1.5">
        <div
          className={`h-1.5 rounded-full transition-all duration-500 ${
            confidence >= 70
              ? "bg-green-400"
              : confidence >= 40
              ? "bg-yellow-400"
              : "bg-red-400"
          }`}
          style={{ width: `${confidence}%` }}
        />
      </div>

      {/* AI Answer */}
      <p className="text-gray-100 text-sm leading-relaxed flex-1">
        {answer}
      </p>

      {/* Missing Info */}
      {missing.length > 0 && (
        <div className="bg-red-950 border border-red-800 rounded p-3">
          <p className="text-xs font-semibold text-red-400 mb-2">
            Missing Info
          </p>
          <ul className="space-y-1">
            {missing.map((m, i) => (
              <li key={i} className="text-xs text-red-300 flex gap-2">
                <span>✗</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Hesitations */}
      {hesitations.length > 0 && (
        <div className="bg-yellow-950 border border-yellow-800 rounded p-3">
          <p className="text-xs font-semibold text-yellow-400 mb-2">
            Hesitations
          </p>
          <ul className="space-y-1">
            {hesitations.map((h, i) => (
              <li key={i} className="text-xs text-yellow-300 flex gap-2">
                <span>⚠</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}