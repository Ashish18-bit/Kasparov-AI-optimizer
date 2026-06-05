"use client"

import { useState } from "react"
import { AnalysisResult } from "@/lib/types"
import { analyzeStore } from "@/lib/api"

type Status = "idle" | "loading" | "success" | "error"

type LoadingStage =
  | "Connecting to store..."
  | "Simulating AI agent..."
  | "Detecting gaps..."
  | "Ranking issues..."
  | "Generating fixes..."
  | "Running after simulation..."
  | "Computing conversion loss..."
  | "Finalizing results..."

const STAGES: LoadingStage[] = [
  "Connecting to store...",
  "Simulating AI agent...",
  "Detecting gaps...",
  "Ranking issues...",
  "Generating fixes...",
  "Running after simulation...",
  "Computing conversion loss...",
  "Finalizing results..."
]

export function useAnalysis() {
  const [status, setStatus] = useState<Status>("idle")
  const [data, setData] = useState<AnalysisResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [stage, setStage] = useState<LoadingStage | null>(null)
  const [stageIndex, setStageIndex] = useState(0)
  const [runId, setRunId] = useState<string | null>(null)

  function startStageTimer() {
    let index = 0
    setStage(STAGES[0])
    setStageIndex(0)

    const interval = setInterval(() => {
      index += 1
      if (index >= STAGES.length) {
        clearInterval(interval)
        return
      }
      setStage(STAGES[index])
      setStageIndex(index)
    }, 2800)

    return interval
  }

  async function run(useMock: boolean = true) {
    setStatus("loading")
    setError(null)
    setData(null)
    setRunId(null)

    const timer = startStageTimer()

    try {
      const result = await analyzeStore(useMock)
      clearInterval(timer)
      setStage(null)
      setData(result)
      setRunId(result.id)
      setStatus("success")
    } catch (err: any) {
      clearInterval(timer)
      setStage(null)
      setError(
        err?.response?.data?.detail?.message ||
        err?.message ||
        "Analysis failed. Check backend connection."
      )
      setStatus("error")
    }
  }

  return { status, data, error, stage, stageIndex, runId, run }
}