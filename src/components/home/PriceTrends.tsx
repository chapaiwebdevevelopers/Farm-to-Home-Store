import React from "react";
import SmallCard from "../shared/SmallCard";
import { IProduct } from "@/type/type";

// const getProduct = async () => {
//       const response = await fetch(
//             "https://openapi.programming-hero.com/api/bazardor/products",
//       );
//       return response.json();
// };

interface productsProps{
      products: IProduct[]
}

const PriceTrends =  ({products}:productsProps) => {
      // const products = await getProduct();
      //   console.log(products);

      return (
            <div>
                  <div>
                        <h2 className="text-3xl my-3">
                              {" "}
                              <span className="text-red-600">▲</span> আজ দাম
                              বেড়েছে
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                              {products
                                    .filter(
                                          (product: IProduct) =>
                                                product.change.pct > 0,
                                    )
                                    .sort(
                                          (a: IProduct, b: IProduct) =>
                                                b.change.pct - a.change.pct,
                                    )
                                    .slice(0, 6)
                                    .map((product: IProduct) => (
                                          <SmallCard
                                                key={product.id}
                                                product={product}
                                          />
                                    ))}
                        </div>
                  </div>
                  <div>
                        <h2 className="text-3xl my-3">
                              {" "}
                              <span className="text-green-600">▼</span> আজ দাম
                              কমেছে
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                              {products
                                    .filter(
                                          (product: IProduct) =>
                                                product.change.pct < 0,
                                    )
                                    .sort(
                                          (a: IProduct, b: IProduct) =>
                                                a.change.pct - b.change.pct,
                                    )
                                    .slice(0, 6)
                                    .map((product: IProduct) => (
                                          <SmallCard
                                                key={product.id}
                                                product={product}
                                          />
                                    ))}
                        </div>
                  </div>
            </div>
      );
};

export default PriceTrends;
