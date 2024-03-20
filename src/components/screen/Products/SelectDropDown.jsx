"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const SelectDropDown = () => {
  const dorpDownList = [
    {
      id: 1,
      value: "Newest Items",
    },
    {
      id: 2,
      value: "show Z to A",
    },
    {
      id: 3,
      value: "Low to High",
    },
    {
      id: 4,
      value: "High to Low",
    },
  ];
  const [selectedValue, setSelectedValue] = useState(dorpDownList[0]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="border px-[15px] py-[6px] rounded-[3px] border-[#E9E9E9] relative cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-[18px] leading-7 font-normal text-[#424241] select-none">
          {selectedValue.value}
        </h3>
        <MdKeyboardArrowDown className="text-2xl text-[#424241]" />
      </div>

      <ul
        className={`flex  flex-col gap-2 absolute top-[3rem] border bg-white shadow-md z-40 w-full left-0 duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {dorpDownList.map((item) => (
          <li
            onClick={() => setSelectedValue(item)}
            key={item.id}
            className="py-2 px-[15px] border-b border-[#E9E9E9] text-[#424241] hover:bg-primary hover:text-white cursor-pointer duration-200"
          >
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectDropDown;
