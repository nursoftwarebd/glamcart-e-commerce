import { tabs } from "@/data/tabs";
import Link from "next/link";

const CustomerLayout = ({ children }) => {
  return (
    <section className="pt-6 pb-21 bg-backgroundPage">
      <div className="container_fluid">
        <h3 className="my_account">My Account</h3>
        <div className="pt-6 flex gap-5">
          <div className="w-[280px] h-fit bg-white shadow-md flex flex-col">
            {tabs.map((tab) => (
              <div key={tab.id} className="border-dashed border-b-[1px]">
                <Link href={tab.link}>{tab.title}</Link>
              </div>
            ))}
          </div>
          <div className="w-full h-fit">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default CustomerLayout;
