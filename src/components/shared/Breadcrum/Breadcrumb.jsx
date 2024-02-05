import Image from "next/image";
import Link from "next/link";
import right from "../../../assets/icons/right.svg";

const Breadcrumb = ({ pageName, breadcrumb }) => {
  return (
    <section className="pb-6">
      <div className="flex">
        {breadcrumb.slice(0, 1).map((item, index) => (
          <div key={index} className="flex items-center">
            <Link href={item.url} className="text-grayBread leading-6">
              {item.name}
            </Link>

            <Image src={right} alt="right" className="mx-2" />
          </div>
        ))}
        {breadcrumb.slice(1).map((item, index) => (
          <div key={index} className="flex items-center">
            <Link href={item.url} className="text-grayBread leading-6">
              {item.name}
            </Link>
            <Image src={right} alt="right" className="mx-2" />
          </div>
        ))}
        <p className="text-grayView">{pageName}</p>
      </div>
    </section>
  );
};

export default Breadcrumb;
