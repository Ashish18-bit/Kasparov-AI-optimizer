"use client"
import KeyboardShortcuts from "./KeyboardShortcuts"
import { useAnalysis } from "@/hooks/useAnalysis"
import InputSection from "./InputSection"
import LossScoreBanner from "./LossScoreBanner"
import AIPerceptionPanel from "./AIPerceptionPanel"
import IssuesPanel from "./IssuesPanel"
import StorePanel from "./StorePanel"
import FixesPanel from "./FixesPanel"
import ComparisonPanel from "./ComparisonPanel"
import LoadingState from "./LoadingState"
import ErrorState from "./ErrorState"
import IdleState from "./IdleState"
import SuccessBadge from "./SuccessBadge"

const DEMO_STORE = {
  title: "Wireless Noise-Cancelling Headphones",
  description: "Great sound. Comfortable fit.",
  price: "79.99",
  shipping: "",
  returns: "Contact us for returns.",
  faq: [
    { q: "Is it waterproof?", a: "" },
    { q: "What is the battery life?", a: "" }
  ],
  reviews: ["Good but slow shipping.", "Sound quality is okay."]
}

export default function Dashboard() {
  const { status, data, error, stage, stageIndex, runId, run } = useAnalysis()

  const result = data?.result

  return (
    <div className="flex flex-col min-h-screen">

      {/* Input Bar — always visible */}
      <InputSection onRun={run} loading={status === "loading"} />

      {/* Success badge — only on success */}
      {status === "success" && runId && (
        <SuccessBadge runId={runId} onRerun={() => run(true)} />
      )}

      {/* Idle */}
      {status === "idle" && (
        <IdleState onRun={() => run(true)} />
      )}

      {/* Loading */}
      {status === "loading" && (
        <LoadingState stage={stage} stageIndex={stageIndex} />
      )}

      {/* Error */}
      {status === "error" && (
        <ErrorState
          message={error || "Unknown error"}
          onRetry={() => run(true)}
        />
      )}

      {/* Success */}
      {status === "success" && result && (
        <div className="flex flex-col gap-4 px-6 py-4">

          {/* Loss Banner */}
          <LossScoreBanner
            score={result.loss_score}
            causes={result.top_causes}
            gain={result.potential_gain}
            summary={result.loss_summary}
            breakdown={result.loss_breakdown}
          />

          {/* 3 Panel Row */}
          <div className="grid grid-cols-3 gap-4">
            <AIPerceptionPanel
              answer={result.ai_perception.answer}
              confidence={result.ai_perception.confidence}
              missing={result.ai_perception.missing_info}
              hesitations={result.ai_perception.hesitations}
            />
            <IssuesPanel issues={result.issues} />
            <StorePanel product={DEMO_STORE} />
          </div>

          {/* Comparison Panel */}
          <div className="border border-gray-800 rounded-lg p-5 bg-gray-900">
            <ComparisonPanel
              beforeAnswer={result.ai_perception.answer}
              beforeConfidence={result.ai_perception.confidence}
              afterAnswer={result.after_simulation.answer}
              afterConfidence={result.after_simulation.confidence}
              delta={result.after_simulation.delta}
            />
          </div>

          {/* Fixes Panel */}
          <FixesPanel
            fixes={result.fixes.map(f => ({
              problem: f.problem,
              before: f.before,
              after: f.after,
              why_this_works: f.why_this_works
            }))}
            improvedAnswer={result.after_simulation.answer}
            improvedConfidence={result.after_simulation.confidence}
            delta={result.after_simulation.delta}
          />
          <KeyboardShortcuts
            onAnalyze={() => run(true)}
            onReset={() => window.location.reload()}
          />          
        </div>
      )}
   
        
    </div>
  )
}