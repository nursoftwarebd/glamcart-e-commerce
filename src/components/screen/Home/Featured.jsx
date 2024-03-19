"use client";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import Image from "next/image";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import whiteDown from "../../../assets/icons/white_down.svg";
import ProductCard from "../ProductCard";
import { allProduct } from "../../../lib/ProductsData";
import { useEffect, useState } from "react";
import { setShowMore, setShowLess } from "@/redux/slices/ProductsSlice";
const Featured = () => {
  const { featuredProducts } = useSelector((state) => state.products);

  const [visible, setVisible] = useState(8);

  const handleVisibleAdd = () => {
    setVisible(featuredProducts.length);
    // console.log(visible);
  };
  const handleVisibleLow = () => {
    setVisible(8);
    // console.log(visible);
  };

  const dispatch = useDispatch();
  dispatch(allProduct());

  // console.log(featuredProducts);
  return (
    <section className="pt-13 pb-10 bg-backgroundPage">
      <div className="container_fluid">
        {/* title */}
        <SectionTitle heading={"Featured Product"} href={"/products"} />

        {/* featured products */}
        <div className="mt-5  grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {featuredProducts.slice(0, visible).map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="pt-10 flex items-center justify-center">
        {(visible < featuredProducts.length && (
          <button
            onClick={handleVisibleAdd}
            className="w-[175px] h-[45px] rounded-[81px] bg-showMore text-white flex items-center justify-center gap-[5px]"
          >
            <span className="leading-6 font-semibold">Show more</span>
            <Image src={whiteDown} alt="white_down" />
          </button>
        )) || (
          <button
            onClick={handleVisibleLow}
            className="w-[175px] h-[45px] rounded-[81px] bg-showMore text-white flex items-center justify-center gap-[5px]"
          >
            <span className="leading-6 font-semibold">Show less</span>
            <Image src={whiteDown} alt="white_down" className="rotate-180" />
          </button>
        )}
      </div>
    </section>
  );
};

export default Featured;
