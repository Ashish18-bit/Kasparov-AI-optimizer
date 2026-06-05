"use client"

import { useEffect } from "react"

type Props = {
  onAnalyze: () => void
  onReset: () => void
}

export default function KeyboardShortcuts({ onAnalyze, onReset }: Props) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      // Space or Enter → analyze
      if (
        (e.key === " " || e.key === "Enter") &&
        !["INPUT", "TEXTAREA", "BUTTON"].includes(
          (e.target as HTMLElement).tagName
        )
      ) {
        e.preventDefault()
        onAnalyze()
      }

      // Escape → reset
      if (e.key === "Escape") {
        onReset()
      }
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [onAnalyze, onReset])

  return null
}