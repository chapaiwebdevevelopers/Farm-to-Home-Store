
export default function LoadingPage() {
  return (
    <main className="container mx-auto my-10 px-4">
      {/* Category heading skeleton */}
      <div className="my-10 flex items-center gap-3 rounded-xl border border-gray-100 bg-base-100 p-6 shadow-sm sm:p-10">
        <div className="skeleton h-16 w-16 shrink-0 rounded-xl"></div>

        <div className="flex-1 space-y-3">
          <div className="skeleton h-9 w-40 max-w-full"></div>
          <div className="skeleton h-4 w-64 max-w-full"></div>
        </div>
      </div>

      {/* Product count and sorting */}
      <div className="my-3 flex flex-wrap items-center justify-between gap-4">
        <div className="skeleton h-5 w-44"></div>

        <div className="flex items-center gap-4">
          <div className="skeleton h-4 w-12"></div>
          <div className="skeleton h-12 w-48 max-w-full rounded-lg"></div>
        </div>
      </div>

      {/* Product cards skeleton */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="w-full rounded-2xl border border-[#dce5dd] bg-[#fbfdfb] p-4"
          >
            {/* Product name and icon */}
            <div className="flex items-center gap-3">
              <div className="skeleton h-12 w-12 shrink-0 rounded-xl"></div>

              <div className="flex-1 space-y-2">
                <div className="skeleton h-5 w-3/4"></div>
                <div className="skeleton h-4 w-20"></div>
              </div>
            </div>

            {/* Price and price change */}
            <div className="mt-3 flex items-end justify-between">
              <div className="space-y-2">
                <div className="skeleton h-4 w-24"></div>
                <div className="skeleton h-6 w-28"></div>
              </div>

              <div className="skeleton h-7 w-16 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
