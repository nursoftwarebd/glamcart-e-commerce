"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import closedeye from "../../assets/icons/closed.png";
import facebook from "../../assets/icons/fb.svg";
import google from "../../assets/icons/google.svg";
import logCross from "../../assets/icons/login_cross.svg";
import openeye from "../../assets/icons/open.svg";
import loginpic from "../../assets/images/login/bro.svg";

const LogInModal = ({ openModal, setOpenModal }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div
      className="backdrop flex bg-black bg-opacity-50 justify-center items-center overflow-x-hidden 
  overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div className=" lg:w-[880px]  x1xl:w-[972px] h-auto rounded-[24px]">
        <div className="grid grid-cols-2">
          <div className="bg-blueLogIn rounded-tl-[24px] rounded-bl-[24px] lg:px-10 x1xl:px-[84px] lg:pt-[50px] lg:pb-[35px] xl:pt-[60px] xl:pb-0 x1xl:pt-[80px] x1xl:pb-[50px] x1440:pt-[70px] x1440:pb-[40px]">
            <h3 className="text-heading28 font-semibold leading-[42px] tracking-[3%] text-white">
              Login
            </h3>
            <p className="pt-3 text-lg font-medium leading-[27px] text-white">
              Get access to your Orders, Wishlist and Recommendations
            </p>
            <div className="pt-5">
              <Image
                src={loginpic}
                alt="loginpic"
                className=" w-full md:h-[300px] xl:h-[280px] x1xl:h-[300px] 2xl:h-full object-fill"
              />
            </div>
          </div>
          <div className="backdrop-blur-md bg-white/40 rounded-tr-[24px] rounded-br-[24px]">
            <div className="bg-gradient-to-r from-[#003387]/[20%] to-white/[20%] w-full rounded-tr-[24px] rounded-br-[24px]">
              <div className="flex justify-end">
                <button
                  className="pt-[10px] pr-[10px]"
                  onClick={() => setOpenModal(!openModal)}
                >
                  <Image src={logCross} alt="logCross" />
                </button>
              </div>
              <div className="lg:px-8 x1xl:px-[60px] lg:pt-7 lg:pb-8 xl:pt-4 xl:pb-4  x1xl:pt-10 x1xl:pb-[70px] x1440:pt-9 x1440:pb-[50px] 2xl:pb-[75px]">
                <form className="space-y-5">
                  <h3 className="text-lg xl:text-2xl text-indigoText font-medium leading-9">
                    Welcome to Project Glamcart! Please login.
                  </h3>
                  <input
                    placeholder="Enter Email or Mobile number"
                    type="text"
                    className="w-full h-10 bg-white p-2 border border-borderLog/70 outline-none placeholder:text-sm placeholder:leading-5 placeholder:text-grayEdit/70"
                  />
                  <div className="flex items-center justify-between w-full h-10 bg-white p-2 border border-borderLog/70">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      id="password"
                      name="password"
                      value={password}
                      onChange={handlePasswordChange}
                      placeholder="Enter Password"
                      className="w-[85%] outline-none placeholder:text-sm placeholder:leading-5 placeholder:text-grayEdit/70"
                    />
                    <button type="button" onClick={togglePasswordVisibility}>
                      {passwordVisible ? (
                        <Image
                          src={openeye}
                          alt="openeye"
                          className="w-6 h-6"
                        />
                      ) : (
                        <Image
                          src={closedeye}
                          alt="closedeye"
                          className="w-6 h-6 mix-blend-multiply object-center"
                        />
                      )}
                    </button>
                  </div>
                  <div className="flex items-center justify-end">
                    <Link
                      href={"#"}
                      className="text-sm text-grayView leading-[21px]"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <button className="w-full h-10 rounded-sm flex items-center justify-center bg-secondary">
                    <span className="font-medium text-white leading-6">
                      Log in
                    </span>
                  </button>
                </form>
                <div className="py-[10px] flex items-center justify-center">
                  <div className="w-[215px] flex items-center">
                    <div className="w-[93px] h-[1px] bg-white/90"></div>
                    <p className="px-2 text-sm text-textJnt leading-5 font-openSans">
                      or
                    </p>
                    <div className="w-[93px] h-[1px] bg-white/90"></div>
                  </div>
                </div>
                <div className="w-full flex items-center gap-2">
                  <Link
                    href={"#"}
                    className="w-1/2 h-10 bg-transparent border-[1.5px] border-white/70 rounded-[40px] flex items-center justify-center"
                  >
                    <div className="flex items-center gap-2">
                      <Image src={google} alt="google" />
                      <span className="text-sm text-indigoText font-medium leading-[21px]">
                        Google
                      </span>
                    </div>
                  </Link>
                  <Link
                    href={"#"}
                    className="w-1/2 h-10 bg-transparent border-[1.5px] border-white/70 rounded-[40px] flex items-center justify-center"
                  >
                    <div className="flex items-center gap-2">
                      <Image src={facebook} alt="Facebook" />
                      <span className="text-sm text-indigoText font-medium leading-[21px]">
                        Facebook
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="pt-10">
                  <p className="text-sm leading-[21px] text-grayView">
                    Have no account yet?{" "}
                    <Link href={"#"} className="text-secondary">
                      Create an account
                    </Link>
                  </p>
                  {/* <p
                    onClick={() => setSignModal(!signModal)}
                    className="text-secondary"
                  >
                    Create an account
                  </p>
                  {signModal && (
                    <SignUpModal
                      signModal={signModal}
                      setSignModal={setSignModal}
                    />
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInModal;
