import AllProducts from '@/components/home/AllProducts';
import React from 'react';
const getProduct = async () => {
      const response = await fetch(
            "https://openapi.programming-hero.com/api/bazardor/products",
      );
      return response.json();
};

const ProductsPage =async () => {
     const products = await getProduct();
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl mt-10'>সব পণ্য</h1>
            <AllProducts  key={products.index} products={products}></AllProducts>
        </div>
    );
};

export default ProductsPage;