"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import Pagination from "./paging/Pagination"; // Assuming you have the Pagination component in the same directory

const ITEMS_PER_PAGE = 6; // Number of items to display per page

const AllProducts = () => {
  const allProducts = useSelector((state) => state.allCarts.allProductsItem);
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const items = allProducts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(allProducts.length / ITEMS_PER_PAGE);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="mt-5 grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
      <div className="flex items-center justify-end pt-10 pb-13">
        <Pagination totalPages={totalPages} onPageChange={onPageChange} />
      </div>
    </div>
  );
};

export default AllProducts;
