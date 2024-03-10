import Link from "next/link";

const SecondaryButton = ({ title, href }) => {
  return (
    <Link
      href={`${href}`}
      // target="_blank"
      className="focus:outline-none w-[120px] md:w-[165px] h-[45px] rounded-[3px] bg-bgCart text-secondary border-[1.5px] border-secondary duration-300 transition ease-in-out text-lg md:text-xl leading-6 font-medium flex items-center justify-center"
      role="button"
    >
      {title}
    </Link>
  );
};

export default SecondaryButton;
