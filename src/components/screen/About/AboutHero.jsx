import { aboutUsHero } from "@/data/aboutUsHero";
import Image from "next/image";

const AboutHero = () => {
  return (
    <div className=" relative">
      {aboutUsHero.map((aboutUsHero) => {
        return (
          <div key={aboutUsHero.id} className="">
            <div className="w-full h-[400px] xl:h-[600px]">
              <Image
                src={aboutUsHero.img}
                alt="banner pic"
                className="w-full h-full object-fill"
              />
            </div>
            <div className="absolute top-[80px] sm:top-[100px] md:top-[100px] lg:top-[110px] xl:top-[200px] left-4 sm:left-[80px] md:left-[90px] lg:left-[190px] xl:left-[430px] 2xl:left-[460px] text-center">
              <h2 className="text-2xl md:text-heading30 xl:text-heading44 text-blackPrimary leading-[66px] font-semibold">
                {aboutUsHero.title}
              </h2>
              <p className="w-auto sm:max-w-[480px] md:max-w-[650px] 2xl:max-w-[750px] text-base xl:text-lg text-dark2 leading-5 md:leading-7">
                {aboutUsHero.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutHero;
