import Image from "next/image";
const HeroBanner = ({ heroITem }) => {
  return (
    <div className="relative w-full h-[200px] sm:h-[480px] xl:h-[563px]">
      <div className="w-full  h-[200px] sm:h-[480px] xl:h-[563px]">
        <Image
          src={heroITem.img}
          alt="hero-one"
          className="w-full h-full  rounded-[10px]"
        />
      </div>
      <div className="absolute left-4 sm:left-[20px] 2xl:left-[60px] top-[20px] sm:top-[150px] xl:top-[190px] 2xl:top-[150px] space-y-2 sm:space-y-7">
        <h1 className="h1 text-primary max-w-[150px] sm:max-w-[280px] xl:max-w-[380px] 2xl:max-w-[486px]">
          {heroITem.title}
        </h1>
        <p className="max-w-[220px] sm:max-w-[320px] xl:max-w-[405px] 2xl:max-w-[418px] text-sm sm:text-xl text-grayPara xl:leading-[150%] 2xl:leading-[200%]">
          {heroITem.description}
        </p>
        <button className="h-7 sm:h-[44px] bg-secondary rounded-[5px] px-[25px] py-4 sm:py-[10px] flex items-center justify-center">
          <span className="font-semibold text-xs sm:text-base text-white">
            {heroITem.buttonTex}
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
