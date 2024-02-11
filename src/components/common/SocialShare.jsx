import Image from "next/image";
import facebook from "../../assets/icons/social/facebook.svg";
import linkEnd from "../../assets/icons/social/linkend.svg";
import shared from "../../assets/icons/social/share.svg";
import twitter from "../../assets/icons/social/twiter.svg";
import whats from "../../assets/icons/social/whatsapp.svg";
const SocialShare = () => {
  return (
    <div className="flex items-center gap-3">
      <h5 className="text-lg text-blackPrimary font-semibold  leading-[27px]">
        Share
      </h5>
      <button className="w-11 h-11 rounded-full flex items-center justify-center bg-linkEndBg/15">
        <Image
          src={linkEnd}
          alt="linkEnd"
          className="w-ful h-full object-fill"
        />
      </button>
      <button className="w-11 h-11 rounded-full flex items-center justify-center bg-twitterBg/15">
        <Image
          src={twitter}
          alt="twitter"
          className="w-ful h-full object-fill"
        />
      </button>
      <button className="w-11 h-11 rounded-full flex items-center justify-center bg-facebookBg/15">
        <Image
          src={facebook}
          alt="facebook"
          className="w-ful h-full object-fill"
        />
      </button>
      <button className="w-11 h-11 rounded-full flex items-center justify-center bg-whatsBg/15">
        <Image src={whats} alt="whatApp" className="w-ful h-full object-fill" />
      </button>
      <button className="w-11 h-11 rounded-full flex items-center justify-center bg-shareBg/15">
        <Image src={shared} alt="shared" className="w-ful h-full object-fill" />
      </button>
    </div>
  );
};

export default SocialShare;
