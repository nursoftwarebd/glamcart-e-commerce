import { socialLinks } from "@/data/footer";
import Image from "next/image";
import Link from "next/link";
import flogo from "../../../assets/footer_logo.png";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
   
       <footer className="bg-white">
          <FooterTop />
           <div className="container_fluid">
             <div className="pt-[59px] pb-[62px] grid grid-cols-6 ">
                  <div className="col-span-2 ">
                        <div className="w-[176px] h-[176px]">
                          <Image src={flogo} alt="footer-logo" className="w-full h-full object-fill" />
                        </div>
                        <p className="max-w-[390px] text-lg leading-7 text-blackPrimary/80">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="flex items-center gap-5 pt-6">
                            {socialLinks.map((socialLink,index)=>(
                              <Link key={index} href={socialLink.href}>
                                  <Image src={socialLink.icon} alt="" />
                              </Link>
                            ))}
                        </div>
                  </div>  
             </div>
           </div>
       </footer>
    
  );
};

export default Footer;