type StoreProduct = {
  title: string
  description: string
  price: string
  shipping: string
  returns: string
  faq: { q: string; a: string }[]
  reviews: string[]
}

type Props = { product: StoreProduct }

const Field = ({
  label,
  value
}: {
  label: string
  value: string
}) => (
  <div className="flex flex-col gap-0.5">
    <span className="text-xs text-gray-500">{label}</span>
    {value ? (
      <span className="text-xs text-gray-200">{value}</span>
    ) : (
      <span className="text-xs text-red-400 flex items-center gap-1">
        <span>✗</span> Not provided
      </span>
    )}
  </div>
)

export default function StorePanel({ product }: Props) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 flex flex-col gap-4 h-full">

      {/* Header */}
      <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
        Your Store
      </h2>

      {/* Core Fields */}
      <div className="flex flex-col gap-3">
        <Field label="Product Title" value={product.title} />
        <Field label="Price" value={product.price ? `$${product.price}` : ""} />
        <Field label="Description" value={product.description} />
        <Field label="Shipping Policy" value={product.shipping} />
        <Field label="Return Policy" value={product.returns} />
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800" />

      {/* FAQ */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-gray-500 font-semibold">FAQ</p>
        {product.faq.length === 0 ? (
          <span className="text-xs text-red-400">No FAQ provided</span>
        ) : (
          product.faq.map((f, i) => (
            <div key={i} className="flex flex-col gap-0.5">
              <span className="text-xs text-gray-300">Q: {f.q}</span>
              {f.a ? (
                <span className="text-xs text-gray-400">A: {f.a}</span>
              ) : (
                <span className="text-xs text-red-400 flex items-center gap-1">
                  <span>✗</span> No answer
                </span>
              )}
            </div>
          ))
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800" />

      {/* Reviews */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-gray-500 font-semibold">
          Reviews ({product.reviews.length})
        </p>
        {product.reviews.length === 0 ? (
          <span className="text-xs text-red-400">No reviews</span>
        ) : (
          product.reviews.map((r, i) => (
            <p key={i} className="text-xs text-gray-400 italic">
              "{r}"
            </p>
          ))
        )}
      </div>
    </div>
  )
}