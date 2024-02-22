"use client";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

const Featured = () => {
  const items = useSelector((state) => state.allcarts.items);

  return (
    <section className="pt-13 pb-10 bg-backgroundPage">
      <div className="container_fluid">
        {/* title */}
        <SectionTitle heading={"Featured Product"} href={"/products"} />

        {/* featured products */}
        <div className="mt-5  grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
