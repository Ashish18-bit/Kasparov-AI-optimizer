export default function ShortcutHint() {
  return (
    <div className="fixed bottom-4 left-4 flex items-center gap-3 z-50">
      <span className="text-xs text-gray-700">
        <kbd className="bg-gray-800 border border-gray-600 text-gray-400 px-1.5 py-0.5 rounded text-xs">
          Space
        </kbd>
        {" "}Analyze
      </span>
      <span className="text-xs text-gray-700">
        <kbd className="bg-gray-800 border border-gray-600 text-gray-400 px-1.5 py-0.5 rounded text-xs">
          Esc
        </kbd>
        {" "}Reset
      </span>
    </div>
  )
}