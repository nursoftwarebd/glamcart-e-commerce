import { faqData } from "@/data/faqData";
import Image from "next/image";
import { useState } from "react";
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
        <div className="px-5 pt-5 pb-[30px]">
          {faqData.map((item, index) => (
            <div key={index} className="pb-5 border-b-2">
              <div
                onClick={() => handleOpen(index)}
                className="cursor-pointer flex items-center justify-between"
              >
                <p className="leading-6 text-blackPrimary">{item.question}</p>
                <Image src={plus} alt="plus" />
              </div>
              {open === index && <div>{item.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqAndHelp;
