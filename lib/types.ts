export type IssueType = "missing" | "ambiguity" | "contradiction" | "trust"
export type ImpactLevel = "High" | "Medium" | "Low"

export interface Issue {
  title: string
  type: IssueType
  impact: ImpactLevel
  score: number
  location: string
}

export interface Fix {
  problem: string
  before: string
  after: string
  why_this_works?: string
}

export interface AIPerception {
  answer: string
  confidence: number
  missing_info: string[]
  hesitations: string[]
}

export interface AfterSimulation {
  answer: string
  confidence: number
  delta: number
}


export interface LossBreakdown {
  confidence_gap: number
  missing_info_gap: number
  hesitation_gap: number
  recommendation_strength_gap: number
}

export interface AnalysisResult {
  id: string
  status: string
  result: {
    loss_score: number
    top_causes: string[]
    potential_gain: number
    loss_summary?: string
    loss_breakdown?: LossBreakdown
    ai_perception: AIPerception
    issues: Issue[]
    fixes: Fix[]
    after_simulation: AfterSimulation
  }
}