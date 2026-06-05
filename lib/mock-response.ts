import { AnalysisResult } from "./types"

export const MOCK_RESPONSE: AnalysisResult = {
  id: "mock-001",
  status: "ok",
  result: {
    loss_score: 62,
    top_causes: [
      "Missing shipping clarity",
      "Weak product description",
      "No trust signals"
    ],
    potential_gain: 28,
    ai_perception: {
      answer:
        "This product might be okay but I'm unsure about shipping time, return policy, and whether it's waterproof. I cannot confidently recommend it.",
      confidence: 31,
      missing_info: [
        "Shipping policy",
        "Battery life answer",
        "Waterproof clarification"
      ],
      hesitations: [
        "No trust signals present",
        "Description too vague to justify price"
      ]
    },
    issues: [
      {
        title: "No shipping policy",
        type: "missing",
        location: "policies.shipping",
        impact: "High",
        score: 92
      },
      {
        title: "Unanswered FAQ questions",
        type: "missing",
        location: "product.faq",
        impact: "High",
        score: 85
      },
      {
        title: "Weak product description",
        type: "ambiguity",
        location: "product.description",
        impact: "Medium",
        score: 60
      },
      {
        title: "No trust signals",
        type: "trust",
        location: "product.reviews",
        impact: "Medium",
        score: 53
      }
    ],
    fixes: [
    {
        problem: "No shipping policy",
        before: "",
        after: "Free standard shipping on all orders. Delivered in 3–5 business days. Express shipping available at checkout for 1–2 business day delivery.",
        why_this_works: "Gives AI exact delivery timeline and cost — removes biggest purchase blocker."
    },
    {
        problem: "Unanswered FAQ questions",
        before: "Unanswered: Is it waterproof?, What is the battery life?",
        after: "Battery life: 30 hours on a single charge. Not waterproof — avoid exposure to rain or moisture.",
        why_this_works: "Eliminates forced uncertainty — AI no longer has to say it does not know."
    },
    {
        problem: "Weak product description",
        before: "Great sound. Comfortable fit.",
        after: "Experience studio-quality audio with 40mm drivers, active noise cancellation, and a 30-hour battery. Foldable design with memory foam ear cushions for all-day comfort.",
        why_this_works: "Gives AI enough context to justify price and make a confident recommendation."
    }
    ],
    loss_summary: "This store loses ~62% of AI-driven conversions due to missing or unclear data. Fixing top issues recovers ~28%.",
    loss_breakdown: {
      confidence_gap: 53,
      missing_info_gap: 45,
      hesitation_gap: 24,
      recommendation_strength_gap: 30
    },    
    after_simulation: {
      answer:
        "Yes, I recommend this product. It offers 30-hour battery life, ships free in 3–5 days, and has a clear return process. Not waterproof — suitable for everyday indoor use. Price is justified given features.",
      confidence: 84,
      delta: 53
    }
  }
}
