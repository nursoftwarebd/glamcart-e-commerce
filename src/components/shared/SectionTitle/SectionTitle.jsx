"use client"
import Image from "next/image";
import Link from "next/link";
import rightarrow from "../../../assets/icons/arrow-right.svg";

const SectionTitle = ({heading, href}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
      <h2 className='h2 text-blackSec'>{heading}</h2>
      <Link href={`${href}`} className="flex items-center gap-[18px]"> 
          <span className="font-medium text-grayView">View more</span>
          <Image src={rightarrow} alt="right-arrow" />
         </Link>
         </div> 
    </div>
  );
};

export default SectionTitle;