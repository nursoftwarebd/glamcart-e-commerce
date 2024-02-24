"use client";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import FlashProductCard from "../FlashProductCard";

const FlashProduct = () => {
  const items = useSelector((state) => state.allcarts.flashProducts);

  return (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <FlashProductCard key={index} item={item} />
      ))}
    </div>
  );
};

export default FlashProduct;
