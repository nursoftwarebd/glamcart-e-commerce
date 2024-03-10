"use client";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";

const AddReview = () => {
  const [ratingValue, setRatingValue] = useState(0);

  const handleRating = (rate) => {
    setRatingValue(rate);
  };

  return (
    <div className="pr-5 xl:pr-14 lg:pr-0 pl-5  xl:pl-14 pt-13 sm:pt-18 pb-10 sm:pb-15 max-w-[745px] space-y-8">
      <div className="space-y-6">
        <h4 className="text-blackSec font-semibold text-2xl leading-9">
          Add Your Review
        </h4>
        <p className="text-lg text-oldGray leading-[27px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
      </div>
      <form action="#" className="space-y-4 md:space-y-8">
        <div className="space-y-3 md:space-y-5">
          <label htmlFor="" className="text-lg leading-[27px] text-blackSec">
            Name *
          </label>
          <input
            type="text"
            className="w-full h-[60px] bg-backgroundPage rounded-[5px] border-[1px] border-oldGray outline-none px-2 lg:px-5"
          />
        </div>
        <div className="space-y-5">
          <label htmlFor="" className="text-lg leading-[27px] text-blackSec">
            Email *
          </label>
          <input
            type="email"
            className="w-full h-[60px] bg-backgroundPage rounded-[5px] border-[1px] border-oldGray outline-none px-2 lg:px-5"
          />
        </div>
        <div className="space-y-5">
          <label htmlFor="" className="text-lg leading-[27px] text-blackSec">
            Review *
          </label>
          <textarea
            name=""
            id=""
            rows="6"
            className="w-full resize-none bg-backgroundPage rounded-[5px] border-[1px] border-oldGray outline-none p-2 lg:p-5"
          ></textarea>
        </div>
        <div className="flex items-center gap-4">
          <h5 className="text-lg text-blackSec font-medium leading-[27px]">
            Rating
          </h5>

          <div>
            <Rating
              onClick={handleRating}
              initialValue={ratingValue}
              size={32}
              iconsCount={5}
              transition
              transitionSpeed={300}
              SVGstyle={{ display: "inline" }}
              starStyle={{
                marginRight: "2px",
              }}
            />
          </div>
        </div>
        <button className="bg-secondary py-3 px-8 rounded-lg">
          <span className="text-lg text-backgroundPage font-medium leading-[27px]">
            Submit
          </span>
        </button>
      </form>
    </div>
  );
};

export default AddReview;
