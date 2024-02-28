import { checkboxRating } from "@/data/checkboxRating";
import Image from "next/image";
import { useState } from "react";

const RatingCheckbox = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handleCheckboxChange = (paymentId) => {
    setSelectedPayment(paymentId);
  };
  const handleTitleClick = (event, paymentId) => {
    event.stopPropagation();
    setSelectedPayment(paymentId);
  };
  return (
    <div className="mt-8">
      <div className="space-y-4">
        {checkboxRating.map((paymentMethod) => (
          <div
            key={paymentMethod.id}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <div className="inline-flex items-center">
                  <label
                    className="relative flex items-center cursor-pointer"
                    htmlFor={`checkbox-${paymentMethod.id}`}
                  >
                    <input
                      type="checkbox"
                      id={`checkbox-${paymentMethod.id}`}
                      checked={selectedPayment === paymentMethod.id}
                      onChange={() => handleCheckboxChange(paymentMethod.id)}
                      className="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-sm  border-[3px] border-[#D0D0D2] checked:border-secondary  checked:bg-secondary hover:before:opacity-10"
                    />
                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
              <div
                onClick={(e) => handleTitleClick(e, paymentMethod.id)}
                className="cursor-pointer leading-6 text-grayView tracking-[2%]"
              >
                <Image src={paymentMethod.logo} alt="d" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingCheckbox;
