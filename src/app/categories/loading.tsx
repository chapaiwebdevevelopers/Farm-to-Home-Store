
export default function LoadingPage() {
  return (
    <main className="container mx-auto min-h-[60vh] px-4 py-10">
      {/* Page heading */}
      <section className="mb-8 space-y-3">
        <div className="skeleton h-4 w-32" />
        <div className="skeleton h-10 w-64 max-w-full" />
        <div className="skeleton h-5 w-80 max-w-full" />
      </section>

      {/* Category cards */}
      <section
        aria-label="ক্যাটাগরি লোড হচ্ছে"
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:grid-cols-5"
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="card h-full overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm"
          >
            {/* Card top section */}
            <div className="space-y-5 bg-base-200/40 p-4 sm:p-5">
              <div className="flex items-start justify-between gap-2">
                <div className="skeleton h-16 w-16 shrink-0 rounded-2xl sm:h-20 sm:w-20" />
                <div className="skeleton h-5 w-12 rounded-full" />
              </div>

              <div className="space-y-2">
                <div className="skeleton h-6 w-24 max-w-full" />
                <div className="skeleton h-4 w-36 max-w-full" />
              </div>
            </div>

            {/* Card bottom section */}
            <div className="flex items-center justify-between gap-2 border-t border-base-200 p-3 sm:p-4">
              <div className="skeleton h-4 w-28 max-w-[75%]" />
              <div className="skeleton h-9 w-9 shrink-0 rounded-full" />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
