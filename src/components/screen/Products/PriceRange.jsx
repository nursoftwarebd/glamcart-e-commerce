"use client";
import { useState } from "react";

const PriceRange = () => {
  // const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(150);

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
          max="1000"
          step="1"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          className="w-full mt-2"
        />
      </div>
      <div>
        <div className="flex items-center">Price: ৳0 - ৳{maxPrice}</div>
      </div>
    </div>
  );
};

export default PriceRange;
