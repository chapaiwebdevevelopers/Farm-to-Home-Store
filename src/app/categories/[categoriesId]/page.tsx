import AllProducts from "@/components/home/AllProducts";
import React, { Suspense } from "react";
type CategoryProps = {
  params: Promise<{
    categoriesId: string;
  }>;
};
const SingleCategory = async ({ params }:CategoryProps) => {
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
                  {/* <Suspense > */}
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
                  {/* </Suspense> */}
            </div>
      );
};

export default SingleCategory;
