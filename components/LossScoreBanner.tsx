"use client"

import { useEffect, useState } from "react"

type Props = {
  score: number
  causes: string[]
  gain: number
  summary?: string
  breakdown?: {
    confidence_gap: number
    missing_info_gap: number
    hesitation_gap: number
    recommendation_strength_gap: number
  }
}

const AnimatedNumber = ({ value }: { value: number }) => {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 1200
    const steps = 40
    const increment = value / steps
    const interval = duration / steps

    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setDisplay(value)
        clearInterval(timer)
      } else {
        setDisplay(Math.floor(start))
      }
    }, interval)

    return () => clearInterval(timer)
  }, [value])

  return <span>{display}</span>
}

const BreakdownBar = ({
  label,
  value,
}: {
  label: string
  value: number
}) => (
  <div className="flex flex-col gap-1">
    <div className="flex items-center justify-between">
      <span className="text-xs text-gray-400">{label}</span>
      <span className="text-xs text-red-400 font-bold">{value}</span>
    </div>
    <div className="w-full bg-gray-800 rounded-full h-1">
      <div
        className="h-1 rounded-full bg-red-500 transition-all duration-700"
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
)

export default function LossScoreBanner({
  score,
  causes,
  gain,
  summary,
  breakdown,
}: Props) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="w-full border border-red-800 rounded-lg overflow-hidden">

      {/* Main Banner */}
      <div className="bg-red-950/40 px-5 py-4 flex items-center justify-between gap-4">

        {/* Left — Score */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="flex flex-col">
            <span className="text-xs text-red-400 uppercase tracking-widest font-bold">
              AI Conversion Loss
            </span>
            <div className="flex items-end gap-1">
              <span className="text-4xl font-black text-red-400 leading-none">
                <AnimatedNumber value={score} />
              </span>
              <span className="text-xl font-bold text-red-500 pb-0.5">%</span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-10 bg-red-800" />

          {/* Gain */}
          <div className="flex flex-col">
            <span className="text-xs text-green-500 uppercase tracking-widest font-bold">
              Potential Gain
            </span>
            <div className="flex items-end gap-1">
              <span className="text-4xl font-black text-green-400 leading-none">
                +<AnimatedNumber value={gain} />
              </span>
              <span className="text-xl font-bold text-green-500 pb-0.5">%</span>
            </div>
          </div>
        </div>

        {/* Center — Causes */}
        <div className="flex flex-col gap-1.5 flex-1">
          <span className="text-xs text-gray-500 uppercase tracking-wider">
            Top Causes
          </span>
          <div className="flex flex-wrap gap-2">
            {causes.map((c, i) => (
              <span
                key={i}
                className="text-xs bg-red-900/60 border border-red-700 text-red-300 px-3 py-1 rounded-full"
              >
                {c}
              </span>
            ))}
          </div>
          {summary && (
            <p className="text-xs text-gray-400 italic mt-1">{summary}</p>
          )}
        </div>

        {/* Right — Expand Toggle */}
        {breakdown && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs text-gray-500 hover:text-gray-300 border border-gray-700 px-3 py-1.5 rounded transition shrink-0"
          >
            {expanded ? "▲ Hide" : "▼ Breakdown"}
          </button>
        )}
      </div>

      {/* Breakdown Panel (expandable) */}
      {expanded && breakdown && (
        <div className="border-t border-red-900 bg-gray-900 px-5 py-4 grid grid-cols-2 gap-4">
          <BreakdownBar
            label="Confidence Gap"
            value={breakdown.confidence_gap}
          />
          <BreakdownBar
            label="Missing Info Gap"
            value={breakdown.missing_info_gap}
          />
          <BreakdownBar
            label="Hesitation Gap"
            value={breakdown.hesitation_gap}
          />
          <BreakdownBar
            label="Recommendation Gap"
            value={breakdown.recommendation_strength_gap}
          />
        </div>
      )}

      {/* Bottom Progress Bar */}
      <div className="w-full bg-gray-900 h-1.5">
        <div
          className="h-1.5 bg-gradient-to-r from-red-600 to-red-400 transition-all duration-1000"
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  )
}