import React from "react";
import Link from "next/link";

interface ICategory {
      id: string;
      slug: string;
      nameBn: string;
      icon: string;
}

const getCategories = async (): Promise<ICategory[]> => {
      const res = await fetch(
            "https://openapi.programming-hero.com/api/bazardor/categories",
      );
      if (!res.ok) {
            throw new Error("Failed to fetch categories");
      }
      const result = await res.json();
     return result;
};

const CategoriesPage = async () => {
      const categories = await getCategories();

      return (
            <section className="container mx-auto px-4 py-10">
                  <div className="mb-8">
                        <span className="text-sm font-semibold text-green-600">
                              আমাদের ক্যাটাগরি
                        </span>
                        <h1 className="mt-2 text-3xl font-bold md:text-4xl">
                              সকল ক্যাটাগরি
                        </h1>

                        <p className="mt-3 text-base-content/60">
                              আপনার প্রয়োজনীয় পণ্য খুঁজে নিন সহজেই।
                        </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:grid-cols-5">
                        {categories.map(category => (
                              <Link
                                    key={category.id}
                                    href={`/categories/${category.slug}`}
                                    className="group block"
                              >
                                    <div className="card h-full overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-lg">
                                          <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-white p-4 sm:p-5">
                                                <div className="flex items-start justify-between gap-2">
                                                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white bg-white text-4xl shadow-sm transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20 sm:text-5xl">
                                                            {category.icon}
                                                      </div>

                                                      <span className="badge badge-success badge-outline badge-sm">
                                                            পণ্য
                                                      </span>
                                                </div>

                                                <h2 className="mt-5 text-lg font-bold text-green-950 sm:text-xl">
                                                      {category.nameBn}
                                                </h2>

                                                <p className="mt-1 text-xs text-green-800/70 sm:text-sm">
                                                      পছন্দের পণ্য বেছে নিন
                                                </p>
                                          </div>
                                          <div className="flex items-center justify-between gap-2 border-t border-base-200 p-3 sm:p-4">
                                                <span className="text-xs font-medium text-base-content/70 transition-colors group-hover:text-green-700 sm:text-sm">
                                                      সব পণ্য দেখুন
                                                </span>

                                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-600 text-xl text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-green-700">
                                                      ↗
                                                </span>
                                          </div>
                                    </div>
                              </Link>
                        ))}
                  </div>

                  {categories.length === 0 && (
                        <div className="rounded-2xl border border-dashed border-base-300 py-16 text-center">
                              <p className="text-lg font-semibold">
                                    কোনো ক্যাটাগরি পাওয়া যায়নি!
                              </p>
                              <p className="mt-2 text-sm text-base-content/60">
                                    পরে আবার চেষ্টা করুন।
                              </p>
                        </div>
                  )}
            </section>
      );
};

export default CategoriesPage;
