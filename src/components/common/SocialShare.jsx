import Image from "next/image";
import Link from "next/link";
import facebook from "../../assets/icons/social/facebook.svg";
import linkedin from "../../assets/icons/social/linkend.svg";
import shared from "../../assets/icons/social/share.svg";
import twitter from "../../assets/icons/social/twiter.svg";
import whats from "../../assets/icons/social/whatsapp.svg";
const SocialShare = () => {
  const socialLinks = [
    {
      id: 1,
      link: "https://www.facebook.com/",
      icon: facebook,
    },
    {
      id: 2,
      link: "https://www.twitter.com/",
      icon: twitter,
    },
    {
      id: 3,
      link: "https://www.linkedin.com/",
      icon: linkedin,
    },
    {
      id: 4,
      link: "https://www.whatsapp.com/",
      icon: whats,
    },
  ];

  return (
    <div className="flex items-center gap-3">
      <h5 className="text-lg text-blackPrimary font-semibold  leading-[27px]">
        Share
      </h5>
      {socialLinks.map((item) => (
        <Link
        key={item.id}
          href={item.link}
          className="w-11 h-11 rounded-full flex items-center justify-center bg-linkEndBg/15"
        >
          <Image
            src={item.icon}
            alt={`${item.link} image`}
            className="w-ful h-full object-fill"
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialShare;
