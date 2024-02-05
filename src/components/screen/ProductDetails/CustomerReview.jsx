"use client";
import Image from "next/image";
import five_star from "../../../assets/icons/five_star.svg";
import Progressbar from "./Progressbar";

const CustomerReview = () => {
  return (
    <div className="mt-7.5  bg-white border border-red-600">
      <div className="pl-14 pt-10 pb-9 flex items-center gap-[74px]">
        <div className="space-y-5">
          <h5 className="text-black3D font-medium text-xl leading-[30px]">
            Customer reviews
          </h5>
          <div className="flex items-center gap-2">
            <Image src={five_star} alt="five_star" />
            <p className="text-black3D text-sm leading-6">4.6 out of 5</p>
          </div>
        </div>

        <Progressbar />
        <button className="w-[200px] h-10 rounded-[3px] bg-secondary opacity-90 shadow-3xl text-white text-sm font-medium leading-5">
          Write a Review
        </button>
      </div>
    </div>
  );
};

export default CustomerReview;
