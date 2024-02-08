import { faqData } from "@/data/faqData";
import Image from "next/image";
import { useState } from "react";
import minus from "../../../assets/icons/minus.svg";
import plus from "../../../assets/icons/plus.svg";

const FaqAndHelp = () => {
  const [open, setOpen] = useState(null);

  const handleOpen = (index) => setOpen(open === index ? null : index);

  return (
    <div>
      <div className="bg-white shadow-md">
        <div className="py-3 px-5 border-borderAccount border-b-[.75px]">
          <h4 className="font-rajdhani text-accountBlack text-xl leading-6 tracking-[2%] font-semibold">
            Help & FAQ
          </h4>
        </div>
        <div className="px-5  pb-[30px]">
          {faqData.map((item, index) => (
            <div key={index} className="py-5 border-b-[.75px] border-borderFaq">
              <div
                onClick={() => handleOpen(index)}
                className="cursor-pointer flex items-center justify-between"
              >
                <p className="leading-6 text-blackPrimary">{item.question}</p>
                {open === index ? (
                  <Image src={minus} alt="minus" />
                ) : (
                  <Image src={plus} alt="plus" />
                )}
              </div>

              <div
                className={`overflow-hidden transition-max-height duration-300 ${
                  open === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="pt-4">
                  <p className="font-medium leading-[8px] text-blackPrimary">
                    {item.title}
                  </p>
                  <p className="py-3 max-w-[820px] leading-6 text-grayFaq">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqAndHelp;
