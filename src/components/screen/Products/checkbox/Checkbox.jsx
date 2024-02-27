import Image from "next/image";
import checkstar from "../../../../assets/icons/check-star.svg";

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <>
      <div className="mt-8 space-y-4">
        {/* <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="appearance-none w-6 h-6 border-[3px] rounded-sm"
            checked={checked}
            onChange={onChange}
          />
         ---->> <span>{label}</span>
        </label> */}
        <div className="flex items-center space-x-4">
          <div className="inline-flex items-center">
            <label
              className="relative flex items-center cursor-pointer"
              htmlFor="checkbox1"
            >
              <input
                checked={checked}
                onChange={onChange}
                type="checkbox"
                className="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-sm border-[3px] border-checkBorder checked:border-orangeStar checked:bg-orangeStar hover:before:opacity-10"
                id="checkbox1"
              />
              <span className="absolute text-white transition-opacity opacity-0 pointerEvents-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
          </div>
          <div className="">
            <Image src={checkstar} alt="check-star" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="inline-flex items-center">
            <label
              className="relative flex items-center cursor-pointer"
              htmlFor="checkbox2"
            >
              <input
                type="checkbox"
                className="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-sm border-[3px] border-checkBorder checked:border-orangeStar checked:bg-orangeStar hover:before:opacity-10"
                id="checkbox2"
              />
              <span className="absolute text-white transition-opacity opacity-0 pointerEvents-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Image src={checkstar} alt="check-star" />
            <Image src={checkstar} alt="check-star" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="inline-flex items-center">
            <label
              className="relative flex items-center cursor-pointer"
              htmlFor="checkbox2"
            >
              <input
                type="checkbox"
                className="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-sm border-[3px] border-checkBorder checked:border-orangeStar checked:bg-orangeStar hover:before:opacity-10"
                id="checkbox2"
              />
              <span className="absolute text-white transition-opacity opacity-0 pointerEvents-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Image src={checkstar} alt="check-star" />
            <Image src={checkstar} alt="check-star" />
            <Image src={checkstar} alt="check-star" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="inline-flex items-center">
            <label
              className="relative flex items-center cursor-pointer"
              htmlFor="checkbox2"
            >
              <input
                type="checkbox"
                className="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-sm border-[3px] border-checkBorder checked:border-orangeStar checked:bg-orangeStar hover:before:opacity-10"
                id="checkbox2"
              />
              <span className="absolute text-white transition-opacity opacity-0 pointerEvents-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Image src={checkstar} alt="check-star" />
            <Image src={checkstar} alt="check-star" />
            <Image src={checkstar} alt="check-star" />
            <Image src={checkstar} alt="check-star" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="inline-flex items-center">
            <label
              className="relative flex items-center cursor-pointer"
              htmlFor="checkbox2"
            >
              <input
                type="checkbox"
                className="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-sm border-[3px] border-checkBorder checked:border-orangeStar checked:bg-orangeStar hover:before:opacity-10"
                id="checkbox2"
              />
              <span className="absolute text-white transition-opacity opacity-0 pointerEvents-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Image src={checkstar} alt="check-star" />
            <Image src={checkstar} alt="check-star" />
            <Image src={checkstar} alt="check-star" />
            <Image src={checkstar} alt="check-star" />
            <Image src={checkstar} alt="check-star" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkbox;
