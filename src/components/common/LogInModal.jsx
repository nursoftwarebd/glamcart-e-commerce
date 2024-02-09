import Image from "next/image";
import { useState } from "react";
import logCross from "../../assets/icons/login_cross.svg";

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
      <div className="w-[972px] h-auto rounded-[24px]">
        <div className="grid grid-cols-2">
          <div className="bg-blueLogIn rounded-tl-[24px] rounded-bl-[24px] px-[84px] py-[100px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
            voluptas possimus id ut vero a voluptates rem nihil harum culpa,
            velit dignissimos dolore laudantium. Quasi quisquam sed optio!
            Repellat, quam.
          </div>
          <div className="bg-gradient-to-r from-[#003387]/[20%] to-white/[20%] w-full">
            <div className="flex justify-end">
              <button
                className="pt-[10px] pr-[10px]"
                onClick={() => setOpenModal(!openModal)}
              >
                <Image src={logCross} alt="logCross" />
              </button>
            </div>
            <form className="px-[60px] pt-[60px] pb-[132px]">
              <h3 className="text-2xl text-indigoText font-medium leading-9">
                Welcome to Project Nirvoya! Please login.
              </h3>
              <label htmlFor="password">Password:</label>
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <button type="button" onClick={togglePasswordVisibility}>
                {passwordVisible ? "Hide" : "Show"} Password
              </button>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInModal;
