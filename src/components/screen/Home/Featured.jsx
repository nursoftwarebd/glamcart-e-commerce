"use client";
import SignUpModal from "@/components/common/SignUpModal";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

const Featured = () => {
  const items = useSelector((state) => state.allcarts.items);

  const [isSingIn, setIsSingIn] = useState(false);

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
      <div className="m-10">
        <button onClick={() => setIsSingIn(!isSingIn)}>Modal</button>
        {isSingIn && (
          <SignUpModal isSingIn={isSingIn} setSignModal={setIsSingIn} />
        )}
      </div>
    </section>
  );
};

export default Featured;
