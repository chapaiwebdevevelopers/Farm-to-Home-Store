import AllProducts from "@/components/home/AllProducts";
import Banner from "@/components/home/Banner";
import PriceTrends from "@/components/home/PriceTrends";


export default function Home() {
  return (
    <main className="container mx-auto">
        <Banner></Banner>
        <PriceTrends></PriceTrends>
        <AllProducts></AllProducts>
      </main>
  );
}
