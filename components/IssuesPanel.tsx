import { Issue } from "@/lib/types"

type Props = { issues: Issue[] }

const impactStyles = {
  High: {
    badge: "bg-red-950 text-red-400 border border-red-700",
    bar: "bg-red-500"
  },
  Medium: {
    badge: "bg-yellow-950 text-yellow-400 border border-yellow-700",
    bar: "bg-yellow-500"
  },
  Low: {
    badge: "bg-gray-800 text-gray-400 border border-gray-600",
    bar: "bg-gray-500"
  }
}

const typeLabel: Record<string, string> = {
  missing: "Missing",
  ambiguity: "Ambiguous",
  contradiction: "Contradiction",
  trust: "Trust Signal"
}

export default function IssuesPanel({ issues }: Props) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 flex flex-col gap-3 h-full">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
          Revenue Leaks
        </h2>
        <span className="text-xs text-gray-500">
          {issues.length} issues found
        </span>
      </div>

      {/* Issues List */}
      <div className="flex flex-col gap-2 flex-1">
        {issues.map((issue, i) => {
          const styles = impactStyles[issue.impact]
          return (
            <div
              key={i}
              className="border border-gray-700 rounded-lg p-3 flex flex-col gap-2"
            >
              {/* Title + Rank */}
              <div className="flex items-start justify-between gap-2">
                <span className="text-sm font-semibold text-white leading-tight">
                  <span className="text-gray-500 mr-1">[{i + 1}]</span>
                  {issue.title}
                </span>
                <span className="text-xs font-bold text-gray-300 shrink-0">
                  {issue.score}
                </span>
              </div>

              {/* Score Bar */}
              <div className="w-full bg-gray-800 rounded-full h-1">
                <div
                  className={`h-1 rounded-full ${styles.bar}`}
                  style={{ width: `${issue.score}%` }}
                />
              </div>

              {/* Badges */}
              <div className="flex gap-2 flex-wrap">
                <span className={`text-xs px-2 py-0.5 rounded ${styles.badge}`}>
                  {issue.impact}
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-gray-800 text-gray-400 border border-gray-600">
                  {typeLabel[issue.type] || issue.type}
                </span>
              </div>

              {/* Location */}
              <p className="text-xs text-gray-500 font-mono">
                {issue.location}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}