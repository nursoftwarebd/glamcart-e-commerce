const RoundedCheckbox = () => {
  return (
    <div className="flex items-center">
      <div className="inline-flex items-center">
        <label
          className="relative flex items-center cursor-pointer"
          htmlFor="checkbox"
        >
          <input
            type="checkbox"
            className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border-[2px] border-[#CBD5E0] checked:border-[#005eb8] checked:bg-[#005eb8] hover:before:opacity-10"
            id="checkbox"
          />
          <span className="absolute text-white transition-opacity opacity-0 pointerEvents-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
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
    </div>
  );
};

export default RoundedCheckbox;
