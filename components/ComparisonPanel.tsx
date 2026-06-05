type Props = {
  beforeAnswer: string
  beforeConfidence: number
  afterAnswer: string
  afterConfidence: number
  delta: number
}

const ConfidenceMeter = ({
  value,
  color,
}: {
  value: number
  color: "red" | "green"
}) => {
  const barColor = color === "red" ? "bg-red-500" : "bg-green-500"
  const textColor = color === "red" ? "text-red-400" : "text-green-400"

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">AI Confidence</span>
        <span className={`text-sm font-bold ${textColor}`}>{value}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-700 ${barColor}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

export default function ComparisonPanel({
  beforeAnswer,
  beforeConfidence,
  afterAnswer,
  afterConfidence,
  delta,
}: Props) {
  return (
    <div className="flex flex-col gap-4">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
          AI Response — Before vs After
        </h2>
        <span className="text-xs bg-green-900 text-green-300 border border-green-700 px-3 py-1 rounded-full font-bold">
          +{delta}% confidence gain
        </span>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-2 gap-4">

        {/* Before */}
        <div className="flex flex-col gap-3 border border-red-900 rounded-lg p-4 bg-red-950/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
            <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
              Before Fix
            </span>
          </div>

          <ConfidenceMeter value={beforeConfidence} color="red" />

          <div className="border-t border-red-900/50 pt-3">
            <p className="text-sm text-gray-300 leading-relaxed">
              {beforeAnswer}
            </p>
          </div>

          {/* Problem Tags */}
          <div className="flex flex-wrap gap-1 mt-auto pt-2">
            <span className="text-xs bg-red-950 border border-red-800 text-red-400 px-2 py-0.5 rounded">
              Uncertain
            </span>
            <span className="text-xs bg-red-950 border border-red-800 text-red-400 px-2 py-0.5 rounded">
              Missing info
            </span>
            <span className="text-xs bg-red-950 border border-red-800 text-red-400 px-2 py-0.5 rounded">
              No recommendation
            </span>
          </div>
        </div>

        {/* After */}
        <div className="flex flex-col gap-3 border border-green-900 rounded-lg p-4 bg-green-950/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
            <span className="text-xs font-bold text-green-400 uppercase tracking-wider">
              After Fix
            </span>
          </div>

          <ConfidenceMeter value={afterConfidence} color="green" />

          <div className="border-t border-green-900/50 pt-3">
            <p className="text-sm text-gray-100 leading-relaxed">
              {afterAnswer}
            </p>
          </div>

          {/* Success Tags */}
          <div className="flex flex-wrap gap-1 mt-auto pt-2">
            <span className="text-xs bg-green-950 border border-green-800 text-green-400 px-2 py-0.5 rounded">
              Confident
            </span>
            <span className="text-xs bg-green-950 border border-green-800 text-green-400 px-2 py-0.5 rounded">
              Complete
            </span>
            <span className="text-xs bg-green-950 border border-green-800 text-green-400 px-2 py-0.5 rounded">
              Recommends
            </span>
          </div>
        </div>
      </div>

      {/* Delta Bar */}
      <div className="flex flex-col gap-2 bg-gray-800 rounded-lg px-4 py-3">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Before ({beforeConfidence}%)</span>
          <span className="text-green-400 font-bold">+{delta}% uplift</span>
          <span>After ({afterConfidence}%)</span>
        </div>
        <div className="relative w-full bg-gray-700 rounded-full h-3">
          {/* Before marker */}
          <div
            className="absolute top-0 left-0 h-3 rounded-full bg-red-500/40"
            style={{ width: `${beforeConfidence}%` }}
          />
          {/* After fill */}
          <div
            className="absolute top-0 left-0 h-3 rounded-full bg-green-500 transition-all duration-700"
            style={{ width: `${afterConfidence}%` }}
          />
          {/* Before line marker */}
          <div
            className="absolute top-0 h-3 w-0.5 bg-red-400"
            style={{ left: `${beforeConfidence}%` }}
          />
        </div>
      </div>

    </div>
  )
}