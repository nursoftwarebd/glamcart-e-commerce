"use client";
import { useState } from "react";

const PriceRange = () => {
  // const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  // const handleMinPriceChange = (e) => {
  //   setMinPrice(e.target.value);
  // };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  return (
    <div className="py-5">
      <div className="py-5">
        <input
          type="range"
          min="0"
          max="2500"
          step="1"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          className="w-full h-3 "
        />
      </div>
      <div>
        <div className="flex items-center">Price: ৳1000 - ৳{maxPrice}</div>
      </div>
    </div>
  );
};

export default PriceRange;
