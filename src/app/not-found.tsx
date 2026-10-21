import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-green-50 px-4 py-12">
      <div className="w-full max-w-lg text-center">
        {/* 404 */}
        <div className="relative mb-6">
          <h1 className="text-8xl font-black tracking-widest text-green-200 sm:text-9xl">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="rounded-full bg-green-50 px-5 py-2 text-3xl shadow-sm">
              🔍
            </span>
          </div>
        </div>

        {/* Error Message */}
        <h2 className="mb-3 text-2xl font-bold text-green-900 sm:text-3xl">
          পেজটি খুঁজে পাওয়া যায়নি!
        </h2>

        <p className="mx-auto mb-8 max-w-md text-base leading-7 text-green-800/70">
          দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে,
          নাম পরিবর্তন করা হয়েছে অথবা পেজটি পাওয়া যাচ্ছে না।
        </p>

        {/* Home Button */}
        <Link
          href="/"
          className="btn border-none bg-green-700 text-white shadow-md transition-all duration-300 hover:bg-green-800 hover:shadow-lg"
        >
          ← হোম পেজে ফিরে যান
        </Link>

        {/* Footer */}
        <p className="mt-8 text-sm text-green-700/60">
          বাজার দর — প্রতিদিনের বাজারের সঠিক তথ্য
        </p>
      </div>
    </main>
  );
}