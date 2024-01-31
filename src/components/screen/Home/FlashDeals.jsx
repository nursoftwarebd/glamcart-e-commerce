import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import Link from "next/link";

const FlashDeals = () => {
  return (
    <section className="pt-11.5 bg-backgroundPage">
      <div className="container_fluid">
         {/* title */}
         <div className="flex items-center justify-between">
         <SectionTitle heading={"Flash Deals"} />
         <Link href={"#"} >s sds </Link>
         </div>
      </div>
    </section>
  );
};

export default FlashDeals;
