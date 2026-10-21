import Link from "next/link";
import { notFound } from "next/navigation";

type SingleProductProps = {
      params: Promise<{
            productId: string;
      }>;
};

type marketType = {
 division: string;
 market: string;
 max: number;
 min: number;
}

const SingleProductDetails = async ({ params }: SingleProductProps) => {
      const { productId } = await params;
      const response = await fetch(
            `https://openapi.programming-hero.com/api/bazardor/products/${productId}`,
      );
      const product = await response.json();
      if (product.error === "Not found") {
  notFound();
}
      const {markets}:{markets:marketType[]}= product
      console.log(markets);
     
      //Help from Others(Samiul) it's Copyable
      const allMins = product.markets.map((m: { min: number }) => m.min);
      const allMaxs = product.markets.map((m: { max: number }) => m.max);
      const minPrice = Math.min(...allMins);
      const maxPrice = Math.max(...allMaxs);
      const avgPrice = Math.round(
            product.markets.reduce(
                  (sum: number, m: { min: number; max: number }) =>
                        sum + (m.min + m.max) / 2,
                  0,
            ) / product.markets.length,
      );

      return (
            <div className="container mx-auto">
                  {/* breadcumb  */}
                  <div className="breadcrumbs text-sm">
                        <ul>
                              <li>
                                    <Link href="/">হোম</Link>
                              </li>
                              <li>
                                    <Link
                                          href={`/categories/${product.category}`}
                                    >
                                          {product.categoryNameBn}
                                    </Link>
                              </li>
                              <li>{product.nameBn}</li>
                        </ul>
                  </div>
                  {/* at a glance  */}
                  <div className="w-full  mx-auto p-4">
                        <div className="card bg-white border border-gray-100 shadow-sm rounded-3xl overflow-hidden">
                              <div className="card-body p-5 flex flex-row items-center justify-between gap-4">
                                    {/* Left Side */}
                                    <div className="flex items-center gap-5">
                                          <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center text-4xl shadow-inner">
                                                {product.image}
                                          </div>

                                          <div className="flex flex-col gap-1">
                                                <h2 className="text-2xl font-bold text-gray-900">
                                                      {product.nameBn}
                                                </h2>
                                                <p className="text-sm text-gray-500">
                                                      প্রতি{" "}
                                                      {product.unit === "kg"
                                                            ? "কেজি"
                                                            : product.unit}{" "}
                                                      • {product.categoryNameBn}
                                                </p>
                                                <p className="text-sm text-gray-500 mt-1">
                                                      গতকালের তুলনায় আজ দাম{" "}
                                                      <span
                                                            className={
                                                                  product.change
                                                                        .dir ===
                                                                  "up"
                                                                        ? "text-red-500"
                                                                        : "text-green-500"
                                                            }
                                                      >
                                                            {product.change
                                                                  .dir === "up"
                                                                  ? "বেড়েছে"
                                                                  : "কমেছে"}
                                                      </span>{" "}
                                                      {Math.abs(
                                                            product.change.pct,
                                                      )}
                                                      %
                                                </p>
                                          </div>
                                    </div>

                                    {/* Right Side */}
                                    <div className="bg-gray-50 rounded-2xl p-4 flex flex-col items-center justify-center min-w-[140px]">
                                          <span className="text-xs text-gray-500 mb-1">
                                                আজকের দাম
                                          </span>
                                          <div className="text-4xl font-bold text-gray-900 leading-none mb-1">
                                                {product.today}
                                          </div>
                                          <span className="text-xs text-gray-500 mb-2">
                                                টাকা /{" "}
                                                {product.unit === "kg"
                                                      ? "কেজি"
                                                      : product.unit}
                                          </span>

                                          <div
                                                className={`flex items-center gap-1 text-sm font-bold ${product.change.dir === "up" ? "text-red-500" : "text-green-500"}`}
                                          >
                                                {product.change.dir === "up" ? (
                                                      <span>▲</span>
                                                ) : (
                                                      <span>▼</span>
                                                )}
                                                <span>
                                                      {Math.abs(
                                                            product.change.pct,
                                                      )}
                                                      %
                                                </span>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

                  {/* product details  history  */}
                  <div className="my-10 card card-border border-gray-200 bg-base-100 p-10">
                        {/* product details in Short history  */}
                        <h2 className="text-2xl">দামের সারসংক্ষেপ</h2>
                        <div className="flex justify-between gap-3">
                              <div className="card w-96 bg-base-100 card-md shadow-sm">
                                    <div className="card-body">
                                          <p>সর্বনিম্ন দাম</p>
                                          <h2 className="text-2xl text-green-600">
                                                {minPrice} টাকা
                                          </h2>
                                          <p>সবচেয়ে কম দামের বাজার</p>
                                    </div>
                              </div>
                              <div className="card w-96 bg-base-100 card-md shadow-sm">
                                    <div className="card-body">
                                          <p>সর্বাধিক দাম</p>
                                          <h2 className="text-2xl text-green-600">
                                                {maxPrice} টাকা
                                          </h2>
                                          <p>সবচেয়ে বেশি দামের বাজার</p>
                                    </div>
                              </div>
                              <div className="card w-96 bg-base-100 card-md shadow-sm">
                                    <div className="card-body">
                                          <p>গড় দাম</p>
                                          <h2 className="text-2xl text-green-600">
                                                {avgPrice} টাকা
                                          </h2>
                                          <p>প্রতি কেজি-এর হিসাবে</p>
                                    </div>
                              </div>
                        </div>
                        {/* Product Details with table History */}
                        <div className="my-10">
                              <h2 className="text-3xl my-3">বাজারভিত্তিক আজকের দাম</h2>
                              <div className="overflow-x-auto">
                                    <table className="table table-zebra border-2 border-gray-100 rounded-2xl p-2">
                                          {/* head */}
                                          <thead>
                                                <tr>
                                                      <th>বাজার</th>
                                                      <th>বিভাগ</th>
                                                      <th>সর্বনিম্ন</th>
                                                      <th>সর্বাধিক</th>
                                                      <th>গড়</th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                {/* row 1 */}
                                                {
                                                      markets.map((market,i:number) =>
                                                            <tr key={i}>
                                                      <td>{market.market}</td>
                                                      <td>{market.division} </td>
                                                      <td>{market.min} টাকা</td>
                                                      <td>{market.max} টাকা</td>
                                                      <td>{(market.max + market.min)/2 } টাকা</td>
                                                </tr>
                                                      )
                                                }
                                                
                                          </tbody>
                                    </table>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default SingleProductDetails;
