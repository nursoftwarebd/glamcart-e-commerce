import { commentsData } from "@/data/commentsData";
import Image from "next/image";
import customer from "../../../assets/images/blogDetails/comments.png";

const Comments = () => {
  return (
    <div className="pt-15">
      <h4 className="text-2xl text-blackSec font-semibold leading-9">
        Comments
      </h4>
      <div className="pt-7.5 space-y-[30px]">
        {commentsData.map((commentsData) => {
          return (
            <div key={commentsData.id} className="">
              <div className="flex gap-[18px]">
                <Image src={customer} alt="customer" />
                <div className="flex flex-col justify-between">
                  <h5 className="text-lg text-blackSec font-semibold leading-[27px]">
                    {commentsData.name}
                  </h5>
                  <p className="text-lg text-oldGray leading-[27px]">
                    {commentsData.date}
                  </p>
                </div>
              </div>
              <p className="pt-5 text-lg text-blackSec leading-[27px]">
                {commentsData.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
