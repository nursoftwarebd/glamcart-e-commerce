"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { allProduct } from "@/lib/ProductsData";
import Pagination from "./paging/Pagination";
import FlashProductCard from "../FlashProductCard";

const ITEMS_PER_PAGE = 6; // Number of items to display per page

const AllProducts = () => {
  const { AllProducts, loading } = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const items = AllProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(AllProducts.length / ITEMS_PER_PAGE);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allProduct());
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div className="mt-5 grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {items.map((item) => (
          <FlashProductCard key={item.id} item={item} />
        ))}
      </div>
      <div className="flex items-center justify-end pt-10 pb-13">
        <Pagination totalPages={totalPages} onPageChange={onPageChange} />
      </div>
    </div>
  );
};

export default AllProducts;
