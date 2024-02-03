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
        <div class="flex items-center space-x-4">
  <div class="inline-flex items-center">
    <label
      class="relative flex items-center cursor-pointer"
      htmlFor="checkbox1" 
    >
      <input
        checked={checked}
        onChange={onChange}
        type="checkbox"
        class="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-sm border-[3px] border-checkBorder checked:border-orangeStar checked:bg-orangeStar hover:before:opacity-10"
        id="checkbox1" 
      />
      <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3.5 w-3.5"
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="1"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </span>
    </label>
  </div>
  <div class="">
    <Image src={checkstar} alt="check-star" />
  </div>
</div>

<div class="flex items-center space-x-4">
  <div class="inline-flex items-center">
    <label
      class="relative flex items-center cursor-pointer"
      htmlFor="checkbox2" 
    >
      <input
        checked={checked}
        onChange={onChange}
        type="checkbox"
        class="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-sm border-[3px] border-checkBorder checked:border-orangeStar checked:bg-orangeStar hover:before:opacity-10"
        id="checkbox2" 
      />
      <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3.5 w-3.5"
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="1"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </span>
    </label>
  </div>
  <div class="flex items-center gap-2">
    <Image src={checkstar} alt="check-star" />
    <Image src={checkstar} alt="check-star" />
  </div>
</div>

      </div>
    </>
  );
};

export default Checkbox;
