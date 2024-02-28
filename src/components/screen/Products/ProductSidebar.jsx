"use client";
import Image from "next/image";
import Link from "next/link";
import bottom from "../../../assets/icons/chevron-down.svg";
import PriceRange from "./PriceRange";
import RatingCheckbox from "./RatingCheckbox";

const ProductSidebar = () => {
  return (
    <>
      <div className="bg-white py-7 w-[300px]">
        <div className="px-5 pb-6 border-b-[2px] border-borderSide">
          <p className="font-medium text-lg text-black3D">Related Categories</p>
          <ol className="list-disc list-inside capitalize">
            <li className="text-grayView leading-6">Men’s fashion</li>
          </ol>
          <ul className="pl-8 capitalize">
            <li className="text-primary leading-6">
              <Link href={"#"}>Men’s Jacket</Link>
            </li>
            <li className="text-grayView leading-6">
              <Link href={"#"}>Mens T-Shirts</Link>
            </li>
            <li className="text-grayView leading-6">
              {" "}
              <Link href={"#"}>Casual Shirts</Link>
            </li>
            <li className="text-grayView leading-6">
              {" "}
              <Link href={"#"}>Summer T-Shirts</Link>
            </li>
          </ul>
        </div>
        <div className="px-5 py-6 border-b-[2px] border-borderSide">
          <div className="flex items-center justify-between w-full">
            <select className="block appearance-none  w-full outline-none">
              <option
                value="option1"
                className="text-lg leading-7 text-blackSec font-medium"
                disabled
                selected
                hidden
              >
                Filter by Price
              </option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <Image src={bottom} alt="bottom" className="w-6 h-6" />
          </div>
          {/* price range */}
          <PriceRange
            initialMin={2500}
            initialMax={7500}
            min={0}
            max={10000}
            step={100}
            priceCap={1000}
          />
        </div>
        <div className="px-5 py-6">
          <div className="flex items-center justify-between w-full">
            <select className="block appearance-none  w-full outline-none">
              <option
                value="option1"
                className="text-lg leading-7 text-blackSec font-medium"
                disabled
                selected
                hidden
              >
                Filter by Rating
              </option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <Image src={bottom} alt="bottom" className="w-6 h-6" />
          </div>

          <RatingCheckbox />
        </div>
      </div>
    </>
  );
};

export default ProductSidebar;
