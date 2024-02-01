import { customerArea, quickLink, socialLinks } from "@/data/footer";
import Image from "next/image";
import Link from "next/link";
import hphone from "../../../assets/icons/hphone.svg";
import footerbottom from '../../../assets/images/home/bottom.png';
import flogo from "../../../assets/logo.svg";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <footer className="bg-white ">
      <FooterTop />
      <div className="border-b-[1px] border-[#E5E5E5]">
        <div className="container_fluid">
          <div className="pb-[62px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            <div className="col-span-1 sm:col-span-2">
              <div className="w-[176px] h-[176px]">
                <Image
                  src={flogo}
                  alt="footer-logo"
                  className="w-full h-full object-fill"
                />
              </div>
              <p className="max-w-[390px] text-lg leading-7 text-blackPrimary/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex items-center gap-5 pt-6">
                {socialLinks.map((socialLink, index) => (
                  <Link key={index} href={socialLink.href}>
                    <Image src={socialLink.icon} alt="" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="pt-[59px] col-span-1">
              {quickLink.map((quickLink, index) => (
                <div key={index} className="space-y-9">
                  <h4 className="text-xl leading-8 font-medium text-blackPrimary uppercase">
                    {quickLink.title}
                  </h4>
                  <ul className="">
                    {quickLink.links.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className="text-lg leading-[44px] text-blackPrimary/80 capitalize"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="pt-[59px] col-span-1">
              {customerArea.map((customerArea, index) => (
                <div key={index} className="space-y-9">
                  <h4 className="text-xl leading-8 font-medium text-blackPrimary uppercase">
                    {customerArea.title}
                  </h4>
                  <ul className="">
                    {customerArea.links.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className="text-lg leading-[44px] text-blackPrimary/80 capitalize"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="pt-[59px] col-span-1 sm:col-span-2 space-y-9">
              <h4 className="text-xl leading-8 font-medium text-blackPrimary uppercase">
                CONTACT
              </h4>
              <p className="max-w-[340px] text-blackPrimary/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor{" "}
              </p>
              <div className="flex items-center gap-6">
                <div className="w-12 h-[51px]">
                  <Image
                    src={hphone}
                    alt="hphone"
                    className="w-full h-full object-fill"
                  />
                </div>
                <div>
                  <p className="pb-2 text-lg leading-[24px] text-blackPrimary">
                    Have any question?
                  </p>
                  <Link
                    href={"tel:(+972) 8-9584514"}
                    className="text-heading28 leading-[24px] text-secondary font-semibold"
                  >099 456 789</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container_fluid">
        <div className="flex flex-col xl:flex-row items-center justify-between py-4">
             <p className="leading-6">Projectnirvoya -   © 2021 All Rights Reserved</p>
             <div className="flex items-center">
              <p className="leading-7 text-lg font-medium text-secondary/80">Pay With</p>
              <Image src={footerbottom} alt="footerbottom" />
             </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
