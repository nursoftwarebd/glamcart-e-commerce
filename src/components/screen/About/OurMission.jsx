import { ourMission } from "@/data/ourMission";
import Image from "next/image";
import Link from "next/link";
import Title from "./Title";

const OurMission = () => {
  return (
    <div className="pt-15">
      <div className="container_fluid">
        <Title
          heading="Our Mission"
          sebHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
        <div className="pt-10 grid grid-cols-3 gap-7">
          {ourMission.map((ourMission) => {
            return (
              <div
                key={ourMission.id}
                className="bg-white pl-8 pr-11 py-14 shadow-md rounded-[14px]"
              >
                <div className="flex items-center gap-5">
                  <div className="w-[70px] h-[70px] bg-lightPink rounded-full flex items-center justify-center">
                    <Image
                      src={ourMission.img}
                      alt={`our mission ${ourMission.title}`}
                    />
                  </div>
                  <h3 className="text-heading30 leading-[40px] text-blackPrimary font-semibold">
                    {ourMission.title}
                  </h3>
                </div>
                <p className="pt-7.5 text-darkBlack leading-7">
                  {ourMission.description}
                </p>
                <div className="pt-[26px]">
                  <Link
                    href={ourMission.link}
                    className="text-lg font-openSans font-semibold leading-7 text-secondary"
                  >
                    {ourMission.learn}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurMission;
