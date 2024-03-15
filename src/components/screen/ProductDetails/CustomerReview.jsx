"use client";
import { customer } from "@/data/customer";
import Image from "next/image";
import five_star from "../../../assets/icons/five_star.svg";
import AddReview from "./AddReview";
import Progressbar from "./Progressbar";
import { Rating } from "@smastrom/react-rating";

const CustomerReview = ({ productReviews }) => {
  return (
    <div className="mt-7.5  bg-white border border-border">
      <div className="pl-5 xl:pl-14 pt-10 pb-9 flex flex-wrap items-center gap-10 sm:gap-[74px]">
        <div className="space-y-2 sm:space-y-5">
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
        <h4 className="pl-5 xl:pl-14 pb-5 border-b-[2px] border-border/70 text-2xl leading-7 font-medium text-blackPrimary">
          Reviews ({productReviews.length})
        </h4>
        <div className="px-5 xl:px-14 pt-5 space-y-9">
          {productReviews.map((items, index) => (
            <div key={index} className="space-y-6">
              <div className="flex gap-4">
                <div className="w-[70px] h-[70px] sm:w-14 sm:h-14">
                  <Image
                    src={items.customerImage}
                    alt={items.name}
                    width={200}
                    height={200}
                    className="w-full h-full rounded object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <p className="text-lg leading-[27px] font-medium text-blackSec">
                    {items.customerName}
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-graRate font-medium text-lg leading-[27px]">
                      {items.rating}
                    </span>
                    <Rating
                      style={{ maxWidth: 100 }}
                      value={items.rating}
                      readOnly
                    />
                    <p className="text-oldGray text-xs sm:text-lg leading-5 sm:leading-[27px]">
                      {items.time}
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-blackSec text-sm sm:text-lg leading-6 sm:leading-[16px]">
                {items.comment}
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
