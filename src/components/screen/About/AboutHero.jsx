import { aboutUsHero } from "@/data/aboutUsHero";

const AboutHero = () => {
  return (
    <div className=" relative">
      {aboutUsHero.map((aboutUsHero) => {
        return (
          <div
            key={aboutUsHero.id}
            className={`h-[600px] w-full  bg-no-repeat bg-left bg-cover flex items-center justify-center`}
            style={{ backgroundImage: `url('/background.jpg')` }}
          >
            <div className="text-center">
              <h2 className="text-2xl md:text-heading30 xl:text-heading44 text-blackPrimary leading-[66px] font-semibold">
                {aboutUsHero.title}
              </h2>
              <p className="max-w-[869px] text-base xl:text-lg text-dark2 leading-5 md:leading-7">
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
