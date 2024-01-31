import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import FlashProduct from "./FlashProduct";

const FlashDeals = () => {
  return (
    <section className="pt-11.5 bg-backgroundPage">
      <div className="container_fluid">
         {/* title */}
         
         <SectionTitle heading={"Flash Deals"} href={"/flash-products"} />
         
        
         {/* flash Products */}
          <div className="mt-5 grid grid-cols-4 gap-6">
             <FlashProduct />
          </div>
      </div>
    </section>
  );
};

export default FlashDeals;
