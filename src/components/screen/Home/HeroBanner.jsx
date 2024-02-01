import Image from "next/image";
import heroone from "../../../assets/images/home/heroone.png";
const HeroBanner = () => {
  return (
    <div className="relative ">
    <div className="w-full lg:w-[600px] xl:w-[830px] 2xl:w-[925px] h-[480px] xl:h-[563px]">
      <Image
        src={heroone}
        alt="hero-one"
        className="w-full h-full object-fill rounded-[10px]"
      />
    </div>
    <div className="absolute left-[30px] xl:left-[64px] top-[150px] space-y-7">
      <h1 className="h1 text-primary max-w-[280px] xl:max-w-[486px]">
        Explore Men’s Winter Collection
      </h1>
      <p className="max-w-[320px] xl:max-w-[418px] text-xl text-grayPara xl:leading-[200%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor.{" "}
      </p>
      <button className="bg-secondary rounded-[5px] px-[25px] py-[10px]">
        <span className="font-semibold text-white">SHOP NOW</span>
      </button>
    </div>
  </div>
  );
};

export default HeroBanner;