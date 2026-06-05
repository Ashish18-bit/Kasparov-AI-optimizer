import axios from "axios"
import { AnalysisResult } from "./types"

const BASE_URL =process.env.NEXT_PUBLIC_API_URL || "https://kasparov-ai-optimizer.onrender.com/"

export async function analyzeStore(useMock: boolean = true): Promise<AnalysisResult> {
  const res = await axios.post(`${BASE_URL}/analyze-store`, { use_mock: useMock })
  return res.data
}

export async function getResult(id: string): Promise<AnalysisResult> {
  const res = await axios.get(`${BASE_URL}/result/${id}`)
  return res.data
}