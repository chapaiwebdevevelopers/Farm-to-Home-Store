import AllProducts from "@/components/home/AllProducts";
import React from "react";

const SingleCategory = async ({ params }) => {
      const { categoriesId } = await params;
    const [categoryRes,productRes]= await Promise.all([
        fetch(`https://openapi.programming-hero.com/api/bazardor/categories/${categoriesId}`),
        fetch(`https://api.abcz.workers.dev/api/bazardor/products?category=${categoriesId}`)
    ])
    const [categoryData, productData] = await Promise.all([
        categoryRes.json(),
        productRes.json(),
    ])
    console.log(productData)
      return (
            <div className="container mx-auto my-10">
                  <div className=" flex gap-3 items-center bg-base-100 shadow-sm p-15 my-10">
                        <div className="text-5xl" >{categoryData.icon}</div>
                        <div className="">
                              <h2 className="text-4xl">{categoryData.nameBn}</h2>
                              <p>
                                    {productData.length} টি পণ্যের আজকের দাম ও পরিবর্তন
                              </p>
                             
                        </div>
                  </div>
                  <AllProducts products={productData}></AllProducts>
            </div>
      );
};

export default SingleCategory;
