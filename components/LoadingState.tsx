type Props = {
  stage: string | null
  stageIndex: number
}

const STAGES = [
  "Connecting to store",
  "Simulating AI agent",
  "Detecting gaps",
  "Ranking issues",
  "Generating fixes",
  "Running after simulation",
  "Computing conversion loss",
  "Finalizing results"
]

export default function LoadingState({ stage, stageIndex }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-80 gap-8">

      {/* Spinner */}
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-2 border-gray-700" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-white animate-spin" />
      </div>

      {/* Current Stage */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-white font-semibold text-sm">{stage}</p>
        <p className="text-gray-500 text-xs">
          Step {stageIndex + 1} of {STAGES.length}
        </p>
      </div>

      {/* Stage Progress */}
      <div className="flex flex-col gap-2 w-72">
        {STAGES.map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            <div
              className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-300 ${
                i < stageIndex
                  ? "bg-green-500"
                  : i === stageIndex
                  ? "bg-white animate-pulse"
                  : "bg-gray-700"
              }`}
            />
            <span
              className={`text-xs transition-colors duration-300 ${
                i < stageIndex
                  ? "text-green-500"
                  : i === stageIndex
                  ? "text-white"
                  : "text-gray-600"
              }`}
            >
              {s}
            </span>
            {i < stageIndex && (
              <span className="text-green-500 text-xs ml-auto">✓</span>
            )}
          </div>
        ))}
      </div>

      {/* Time warning */}
      <p className="text-xs text-gray-600 italic">
        Analysis takes ~15–25 seconds
      </p>
    </div>
  )
}