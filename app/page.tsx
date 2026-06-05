import Header from "@/components/Header"
import Dashboard from "@/components/Dashboard"
import DemoScript from "@/components/DemoScript"
import ShortcutHint from "@/components/ShortcutHint"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <Header />
      <Dashboard />
      <DemoScript />
      <ShortcutHint />
    </main>
  )
}