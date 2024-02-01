import { footerTop } from "@/data/footerTop";
import Image from "next/image";

const FooterTop = () => {
  return (
    <div className="border-b-[1px] border-[#E5E5E5] pt-6 sm:pt-[53px] pb-6 sm:pb-13">
       <div className="container_fluid">
         <div className="px-0 sm:px-8 lg:px-[74px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-8 2xl:gap-[99px]">
               {footerTop.map((items,index)=>{
                return (
                  <div key={index} className="flex items-center gap-6">
                    <Image src={items.image} alt={`${items.title}`} />
                    <div>
                       <p className="text-xl font-medium text-blackPrimary uppercase">{items.title}</p>
                       <p className="text-base text-grayView">{items.subTitle}</p>
                    </div>
                  </div>
                )
               })}
          </div>  
       </div>
    </div>
  );
};

export default FooterTop;