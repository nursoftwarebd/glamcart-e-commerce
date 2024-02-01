import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { flashProducts } from "@/data/flashProducts";
import FlashProduct from "./FlashProduct";

const FlashDeals = () => {
  return (
    <section className="pt-11.5 bg-backgroundPage">
      <div className="container_fluid">
         {/* title */}
         
         <SectionTitle heading={"Flash Deals"} href={"/flash-products"} />
         
        
         {/* flash Products */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {flashProducts.map((products, index)=>(
             <FlashProduct key={index} products={products} />
            ))}
             
          </div>
      </div>
    </section>
  );
};

export default FlashDeals;
