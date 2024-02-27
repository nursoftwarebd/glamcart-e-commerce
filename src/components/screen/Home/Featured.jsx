"use client";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import whiteDown from "../../../assets/icons/white_down.svg";
import ProductCard from "../ProductCard";

const Featured = () => {
  const [isSingIn, setIsSingIn] = useState(false);
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
      {/* <div className="m-10">
        <button onClick={() => setIsSingIn(!isSingIn)}>Modal</button>
        {isSingIn && (
          <SignUpModal isSingIn={isSingIn} setSignModal={setIsSingIn} />
        )}
      </div> */}
      <div className="pt-10 flex items-center justify-center">
        <button className="w-[175px] h-[45px] rounded-[81px] bg-showMore text-white flex items-center justify-center gap-[5px]">
          <span className="leading-6 font-semibold">Show more</span>
          <Image src={whiteDown} alt="white_down" />
        </button>
      </div>
    </section>
  );
};

export default Featured;
