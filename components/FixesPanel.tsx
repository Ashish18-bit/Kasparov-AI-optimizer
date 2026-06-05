type Fix = {
  problem: string
  before: string
  after: string
  why_this_works?: string
}

type AfterSimulation = {
  answer: string
  confidence: number
  delta: number
}

type Props = {
  fixes: Fix[]
  improvedAnswer: string
  improvedConfidence: number
  delta: number
}

const confidenceColor = (n: number) => {
  if (n >= 70) return "text-green-400"
  if (n >= 40) return "text-yellow-400"
  return "text-red-400"
}

export default function FixesPanel({
  fixes,
  improvedAnswer,
  improvedConfidence,
  delta,
}: Props) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 flex flex-col gap-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
          Fixes + After Simulation
        </h2>
        <span className="text-xs text-gray-500">
          {fixes.length} fixes applied
        </span>
      </div>

      {/* Fixes Grid */}
      <div className="grid grid-cols-1 gap-4">
        {fixes.map((fix, i) => (
          <div
            key={i}
            className="border border-gray-700 rounded-lg overflow-hidden"
          >
            {/* Fix Header */}
            <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
              <span className="text-xs font-semibold text-white">
                <span className="text-gray-500 mr-2">[{i + 1}]</span>
                {fix.problem}
              </span>
            </div>

            {/* Before / After */}
            <div className="grid grid-cols-2 divide-x divide-gray-700">

              {/* Before */}
              <div className="p-4 flex flex-col gap-2">
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                  Before
                </span>
                {fix.before ? (
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {fix.before}
                  </p>
                ) : (
                  <p className="text-xs text-red-400 italic flex items-center gap-1">
                    <span>✗</span> Not provided
                  </p>
                )}
              </div>

              {/* After */}
              <div className="p-4 flex flex-col gap-2 bg-green-950/20">
                <span className="text-xs font-bold text-green-400 uppercase tracking-wider">
                  After
                </span>
                <p className="text-xs text-green-200 leading-relaxed">
                  {fix.after}
                </p>
              </div>
            </div>

            {/* Why This Works */}
            {fix.why_this_works && (
              <div className="border-t border-gray-700 px-4 py-2 bg-gray-800/50">
                <p className="text-xs text-gray-500">
                  <span className="text-gray-400 font-semibold">Why: </span>
                  {fix.why_this_works}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700" />

      {/* After Simulation */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            After Simulation
          </h3>
          <div className="flex items-center gap-3">
            <span className={`text-sm font-bold ${confidenceColor(improvedConfidence)}`}>
              Confidence: {improvedConfidence}%
            </span>
            <span className="text-sm font-bold text-green-400">
              ▲ +{delta}% improvement
            </span>
          </div>
        </div>

        {/* Confidence Bar */}
        <div className="w-full bg-gray-800 rounded-full h-2">
          <div
            className="h-2 rounded-full bg-green-400 transition-all duration-700"
            style={{ width: `${improvedConfidence}%` }}
          />
        </div>

        {/* Improved Answer */}
        <div className="bg-green-950/30 border border-green-800 rounded-lg p-4">
          <p className="text-sm text-green-100 leading-relaxed">
            {improvedAnswer}
          </p>
        </div>

        {/* Delta Callout */}
        <div className="flex items-center gap-3 bg-gray-800 rounded-lg px-4 py-3">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Before</span>
            <span className="text-sm font-bold text-red-400">
              Low confidence
            </span>
          </div>
          <div className="flex-1 flex items-center justify-center text-gray-600 text-lg">
            →
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-500">After</span>
            <span className="text-sm font-bold text-green-400">
              +{delta}% uplift
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}