import SocialShare from "@/components/common/SocialShare";

const TagAndShare = () => {
  return (
    <div className="mt-8 p-6.5 w-full h-[70px] md:h-[100px] rounded-[5px] bg-white bg-opacity-50 border-[1px] border-checkBorder flex items-center justify-between">
      <div className="flex items-center gap-3">
        <h5 className="text-lg text-blackPrimary font-semibold  leading-[27px]">
          Tags:
        </h5>
        <p className="text-lg text-blackPrimary leading-[27px]">
          Men’s Fashion, Fashion, Dress, Winter
        </p>
      </div>
      <SocialShare />
    </div>
  );
};

export default TagAndShare;
