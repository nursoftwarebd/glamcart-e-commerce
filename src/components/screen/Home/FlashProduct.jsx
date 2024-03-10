"use client";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import FlashProductCard from "../FlashProductCard";
import { flashProducts } from "@/data/flashProducts";

const FlashProduct = () => {
  // const items = useSelector((state) => state.allCarts.flashProducts);

  return (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {flashProducts.map((item) => (
        <FlashProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FlashProduct;
