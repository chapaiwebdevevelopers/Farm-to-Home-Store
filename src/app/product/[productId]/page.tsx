import React from "react";

type SingleProductProps = {
      params: Promise<{
            productId: string;
      }>;
};

const SingleProductDetails = async ({ params }: SingleProductProps) => {
      const { productId } = await params;
      const response = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${productId}`);
      const products = response.json();
      console.log(response);
      return(
            <div>
                Product ID: {productId}
            </div>
        )

};

export default SingleProductDetails;
