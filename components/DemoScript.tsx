"use client"

import { useState } from "react"

const STEPS = [
  {
    step: "01",
    action: "Click Analyze Store",
    what: "Pipeline starts — AI agent reads the store",
    say: "AI is already selling products. Stores aren't ready."
  },
  {
    step: "02",
    action: "Watch loading stages",
    what: "Each stage represents a real pipeline step",
    say: "We simulate exactly how an AI shopping agent perceives your store."
  },
  {
    step: "03",
    action: "Point to Loss Banner",
    what: "Show loss score + top causes",
    say: "This store is losing 62% of AI-driven conversions."
  },
  {
    step: "04",
    action: "Point to AI Perception panel",
    what: "Show low confidence + missing info",
    say: "The issue isn't the product — it's the representation."
  },
  {
    step: "05",
    action: "Point to Issues panel",
    what: "Show ranked issues with scores",
    say: "We rank every gap by revenue impact — not just list them."
  },
  {
    step: "06",
    action: "Point to Comparison panel",
    what: "Show before vs after side by side",
    say: "Same product. Same price. Completely different AI response."
  },
  {
    step: "07",
    action: "Point to Fixes panel",
    what: "Show before/after text + why it works",
    say: "Every fix is exact copy — ready to paste into Shopify."
  },
  {
    step: "08",
    action: "Close with tagline",
    what: "Summarize value prop",
    say: "We don't improve your store. We improve how AI sells your store."
  }
]

export default function DemoScript() {
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState(0)

  if (!visible) {
    return (
      <button
        onClick={() => setVisible(true)}
        className="fixed bottom-4 right-4 text-xs bg-gray-800 border border-gray-600 text-gray-400 px-3 py-2 rounded-lg hover:border-gray-400 transition z-50"
      >
        📋 Demo Script
      </button>
    )
  }

  const step = STEPS[current]

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl z-50">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
        <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">
          Demo Script
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">
            {current + 1} / {STEPS.length}
          </span>
          <button
            onClick={() => setVisible(false)}
            className="text-gray-600 hover:text-gray-400 text-sm"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Step */}
      <div className="px-4 py-4 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-black text-gray-500">
            STEP {step.step}
          </span>
          <span className="text-xs font-bold text-white">
            {step.action}
          </span>
        </div>

        <p className="text-xs text-gray-400 leading-relaxed">
          {step.what}
        </p>

        <div className="bg-gray-800 border border-gray-600 rounded p-3">
          <p className="text-xs text-gray-300 font-mono leading-relaxed">
            "{step.say}"
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-4 pb-2">
        <div className="w-full bg-gray-800 rounded-full h-1">
          <div
            className="h-1 bg-white rounded-full transition-all duration-300"
            style={{ width: `${((current + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex border-t border-gray-700">
        <button
          onClick={() => setCurrent(Math.max(0, current - 1))}
          disabled={current === 0}
          className="flex-1 py-3 text-xs text-gray-400 hover:text-white disabled:opacity-30 transition border-r border-gray-700"
        >
          ← Prev
        </button>
        <button
          onClick={() => setCurrent(Math.min(STEPS.length - 1, current + 1))}
          disabled={current === STEPS.length - 1}
          className="flex-1 py-3 text-xs text-gray-400 hover:text-white disabled:opacity-30 transition"
        >
          Next →
        </button>
      </div>
    </div>
  )
}