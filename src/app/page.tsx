import AllProducts from "@/components/home/AllProducts";
import Banner from "@/components/home/Banner";
import PriceTrends from "@/components/home/PriceTrends";

const getProduct = async () => {
      const response = await fetch(
            "https://openapi.programming-hero.com/api/bazardor/products",
      );
      return response.json();
};

export default async function Home() {
  const products = await getProduct();
  return (
    <main className="container mx-auto">
        <Banner></Banner>
        <PriceTrends key={products.index} products={products}></PriceTrends>
        <div id="allproduct" className="my-10 space-y-2">
                  <h2 className="text-4xl">সব পণ্য</h2>
        <AllProducts  key={products.index} products={products}></AllProducts>
        </div>
            
      </main>
  );
}
