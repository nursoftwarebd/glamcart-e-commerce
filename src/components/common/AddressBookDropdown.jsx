"use client";
// components/Dropdown.js
import { useState } from "react";

const AddressBookDropdown = ({ options, select }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={toggleDropdown}
        className="w-full h-[45px] xl:w-[400px] px-4 py-3 outline-none bg-backgroundPage rounded-[2px] border-[1px] border-grayBorderForm text-graRate flex items-center justify-between"
      >
        {selectedOption ? selectedOption.label : `${select}`}
        <svg
          className="-mr-1 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 12l-8-8 1.5-1.5L10 9.79l6.5-6.29L18 4z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="w-full absolute z-10 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <ul
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <li
                key={option.value}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AddressBookDropdown;
