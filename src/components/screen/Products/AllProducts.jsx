"use client";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

const AllProducts = () => {
  const items = useSelector((state) => state.allCarts.allProductsItem);

  return (
    <div className="mt-5 grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <ProductCard key={index} item={item} />
      ))}
    </div>
  );
};

export default AllProducts;
