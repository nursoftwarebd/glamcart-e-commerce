"use client";
import { customer } from "@/data/customer";
import Image from "next/image";
import five_star from "../../../assets/icons/five_star.svg";
import AddReview from "./AddReview";
import Progressbar from "./Progressbar";

const CustomerReview = () => {
  return (
    <div className="mt-7.5  bg-white border border-border">
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
      <div className="">
        <h4 className="pl-14 pb-5 border-b-[2px] border-border/70 text-2xl leading-7 font-medium text-blackPrimary">
          Reviews (4)
        </h4>
        <div className="px-14 pt-5 space-y-9">
          {customer.map((items, index) => (
            <div key={index} className="space-y-6">
              <div className="flex gap-4">
                <div className="w-14 h-14">
                  <Image
                    src={items.image}
                    alt={items.name}
                    className="w-full h-full rounded"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <p className="text-lg leading-[27px] font-medium text-blackSec">
                    {items.name}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-graRate font-medium text-lg leading-[27px]">
                      {items.rate}
                    </span>
                    <Image src={items.star} alt="star" />
                    <p className="text-oldGray text-lg leading-[27px]">
                      {items.time}
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-blackSec text-lg leading-[27px]">
                {items.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <AddReview />
    </div>
  );
};

export default CustomerReview;
