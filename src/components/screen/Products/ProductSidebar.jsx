"use client"
import Image from "next/image";
import { useState } from "react";
import bottom from "../../../assets/icons/chevron-down.svg";
import Checkbox from "./checkbox/Checkbox";

const ProductSidebar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
   
  };

  return (
    <div className="bg-white py-7 w-[300px]">
      <div className="px-5 pb-6 border-b-[2px] border-borderSide">
        <p className="font-medium text-lg text-black3D">Related Categories</p>
        <ol className="list-disc list-inside capitalize">
          <li className="text-grayView leading-6">Men’s fashion</li>
        </ol>
        <ul className="pl-8 capitalize">
          <li className="text-primary leading-6">Men’s Jacket</li>
          <li className="text-grayView leading-6">Mens T-Shirts</li>
          <li className="text-grayView leading-6">Casual Shirts</li>
          <li className="text-grayView leading-6">Summer T-Shirts</li>
        </ul>
      </div>
      <div className="px-5 py-6 border-b-[2px] border-borderSide">
        <div className="flex items-center justify-between w-full">
          <select className="block appearance-none  w-full outline-none">         
            <option value="option1" className="text-lg leading-7 text-blackSec font-medium" disabled selected hidden>Filter by Price</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            
          </select>
          <Image src={bottom} alt="bottom" className="w-6 h-6" />
        </div>
        <div className="py-8">
          <input type="range" className="w-full h-full" />
          
        </div>
        <p>Price: ৳1000 - ৳2500 </p>
      </div>
      <div className="px-5 py-6">
      <div className="flex items-center justify-between w-full">
          <select className="block appearance-none  w-full outline-none">         
            <option value="option1" className="text-lg leading-7 text-blackSec font-medium" disabled selected hidden>Filter by Rating</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            
          </select>
          <Image src={bottom} alt="bottom" className="w-6 h-6" />
        </div>
           <Checkbox label="1" checked={isChecked} onChange={handleCheckboxChange} />
        </div> 
    </div>
  );
};

export default ProductSidebar;
