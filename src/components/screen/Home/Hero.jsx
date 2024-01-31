"use client";
import Image from "next/image";
import heroone from "../../../assets/images/home/heroone.png";
import herothree from "../../../assets/images/home/herothree.png";
import herotwo from "../../../assets/images/home/herotwo.png";

const Hero = () => {
  return (
    <section className="pt-3 bg-backgroundPage">
      <div className="container_fluid">
        <div className="flex items-center gap-7">
          <div className="relative">
            <div className="w-[830px] 2xl:w-[925px] h-[563px]">
              <Image
                src={heroone}
                alt="hero-one"
                className="w-full h-full object-fill rounded-[10px]"
              />
            </div>
            <div className="absolute left-[64px] top-[150px] space-y-7">
              <h1 className="h1 text-primary max-w-[486px]">
                Explore Men’s Winter Collection
              </h1>
              <p className="max-w-[418px] text-xl text-grayPara leading-[200%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.{" "}
              </p>
              <button className="bg-secondary rounded-[5px] px-[25px] py-[10px]">
                <span className="font-semibold text-white">SHOP NOW</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-y-7">
            <div className="relative">
              <div className="w-full h-[267.5px]">
                <Image
                  src={herotwo}
                  alt="hero-two"
                  className="w-full h-full object-fill rounded-[10px]"
                />
              </div>
              <div className="absolute  left-[64px]   bottom-[20px] rounded-[5px]  h-[56px] px-8 py-4  bg-backgroundPage/80 ">
                <h4 className="h4 text-secondary">Groceries collection</h4>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-[267.5px]">
                <Image
                  src={herothree}
                  alt="hero-three"
                  className="w-full h-full object-fill rounded-[10px]"
                />
              </div>
              <div className="absolute  left-[28px]   bottom-[20px] rounded-[5px]  h-[56px] px-8 py-4  bg-backgroundPage/80 ">
                <h4 className="h4 text-secondary">
                  Health & Beauty collection
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
