'use client'
import { IProduct } from "@/type/type";
import React, { useState } from "react";
import SmallCard from "../shared/SmallCard";


interface productsProps{
      products: IProduct[]
}

const AllProducts = ({products}:productsProps) => {
   
      const [sortBy, setSortBy]= useState<"fromHigher"|"fromLower"|"default">("default")
      
      const sortProduct = (products: IProduct[])=> {
            // console.log("Under sortProduct function",products)
            const sortedProduct = [...products]
            // console.log("sortProduct function",sortedProduct)
            if (sortBy==="fromHigher"){
                 return sortedProduct.sort((a,b) => b.today - a.today );
            }else if (sortBy==="fromLower"){
                 return sortedProduct.sort((a,b) => a.today - b.today );
            }
            else{
                return  products
            }
      }
      const sort = sortProduct(products)

      
      
      // console.log(sortProduct(products))
      // console.log(sortBy)
      return (
            <div className="my-10 space-y-2">
                  <h2 className="text-4xl">সব পণ্য</h2>
                  <div className="flex justify-between">
                        <p>মোট {products.length} টি পণ্য দেখানো হচ্ছে</p>
                        <div className="flex items-center space-x-4">
                              <p>সাজান </p>
                              <select
                                    value={sortBy}
                                    onChange={(e)=> setSortBy(e.target.value as "fromHigher"|"fromLower"|"default" )}
                                    defaultValue="default"
                                    className="select"
                              >
                                    <option>ডিফল্ট</option>
                                    <option value="fromHigher">দাম: বেশি থেকে কম </option>
                                    <option value="fromLower">দাম: কম থেকে বেশি</option>
                              </select>
                        </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {sort.map((product: IProduct) => (
                              <SmallCard
                                    key={product.id}
                                    product={product}
                              ></SmallCard>
                        ))}
                  </div>
            </div>
      );
};

export default AllProducts;
