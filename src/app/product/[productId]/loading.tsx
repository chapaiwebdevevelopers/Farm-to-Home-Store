
export default function LoadingPage() {
  return (
    <main className="container mx-auto px-4">
      {/* Breadcrumb skeleton */}
      <div className="breadcrumbs my-4 text-sm">
        <ul className="flex gap-2">
          <li>
            <div className="skeleton h-4 w-12" />
          </li>
          <li>
            <div className="skeleton h-4 w-16" />
          </li>
          <li>
            <div className="skeleton h-4 w-24" />
          </li>
        </ul>
      </div>

      <div className="w-full p-4">
        {/* Product details skeleton */}
        <section className="card overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
          <div className="card-body flex flex-col items-start justify-between gap-6 p-5 sm:flex-row sm:items-center">
            <div className="flex w-full items-center gap-5">
              <div className="skeleton h-20 w-20 shrink-0 rounded-2xl" />

              <div className="flex-1 space-y-3">
                <div className="skeleton h-7 w-48 max-w-full" />
                <div className="skeleton h-4 w-36 max-w-full" />
                <div className="skeleton h-4 w-64 max-w-full" />
              </div>
            </div>

            {/* Today's price */}
            <div className="flex min-w-[140px] flex-col items-center justify-center self-stretch rounded-2xl bg-gray-50 p-4 sm:self-auto">
              <div className="skeleton mb-2 h-3 w-20" />
              <div className="skeleton mb-2 h-10 w-24" />
              <div className="skeleton mb-3 h-3 w-20" />
              <div className="skeleton h-4 w-14" />
            </div>
          </div>
        </section>
      </div>

      {/* Price summary */}
      <section className="card card-border my-10 border-gray-200 bg-base-100 p-5 sm:p-10">
        <div className="skeleton mb-6 h-8 w-56 max-w-full" />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="card card-md w-full bg-base-100 shadow-sm"
            >
              <div className="card-body space-y-3">
                <div className="skeleton h-4 w-28" />
                <div className="skeleton h-8 w-32" />
                <div className="skeleton h-4 w-40 max-w-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Market-wise prices heading */}
        <div className="my-10">
          <div className="skeleton my-3 h-9 w-80 max-w-full" />

          {/* Market price table */}
          <div className="overflow-x-auto rounded-2xl border-2 border-gray-100">
            <table className="table table-zebra">
              <thead>
                <tr>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <th key={index}>
                      <div className="skeleton h-4 w-20" />
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {Array.from({ length: 8 }).map((_, rowIndex) => (
                  <tr key={rowIndex}>
                    {Array.from({ length: 5 }).map((_, colIndex) => (
                      <td key={colIndex}>
                        <div
                          className={`skeleton h-4 ${
                            colIndex === 0 ? "w-36" : "w-20"
                          }`}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
