"use client"
import Image from "next/image";
import Link from "next/link";


const CategoryItems = ({category}) => {
   
  const {title, iconImg, iconRight, link} = category

  return (
    <Link href={link} className="bg-white w-full h-[65px] rounded-md shadow-3xl px-[18px] py-4 flex items-center justify-between">
      <div className="flex items-center gap-[10px]">
        <div className="w-[30px] h-[30px]">
          <Image
            src={iconImg}
            alt={`Image for ${title}`}
            className="w-full h-full object-fill"
          />
        </div>
        <p className="text-grayText">{title}</p>
      </div>
      <div className="w-5 h-5">
      <Image
            src={iconRight}
            alt="right_icon"
            className="w-full h-full object-fill"
          />  
      </div>
    </Link>
  );
};

export default CategoryItems;
