import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import FlashProduct from "./FlashProduct";

const FlashDeals = () => {
  return (
    <section className="pt-11.5 bg-backgroundPage">
      <div className="container_fluid">
        {/* title */}
        <SectionTitle heading={"Flash Deals"} href={"/products"} />

        {/* flash Products */}
        <FlashProduct />
      </div>
    </section>
  );
};

export default FlashDeals;
