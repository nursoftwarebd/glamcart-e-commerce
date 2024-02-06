// components/Tabs.js
"use client";

import { useState } from "react";
import AddressBook from "./AddressBook";
import MyAccount from "./MyAccount";
import MyOrder from "./MyOrder";
import MyWishlist from "./MyWishlist";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="pt-6 flex gap-5">
      {/* button */}
      <div className="w-[280px] bg-white shadow-md flex flex-col">
        {tabs.map((tab) => (
          <div key={tab.id} className="border-dashed border-b-[1px]">
            <button
              key={tab.id}
              className={`w-full pl-[18px] py-[14px] text-start account_list outline-none  ${
                activeTab.id === tab.id
                  ? "border-l-[3px] border-secondary text-secondary"
                  : "text-graRate border-l-[3px] border-white"
              } `}
              onClick={() => setActiveTab(tab)}
            >
              {tab.title}
            </button>
          </div>
        ))}
      </div>
      {/* content */}
      <div className="bg-white w-full h-fit">
        {activeTab && renderTabContent(activeTab)}
      </div>
    </div>
  );
};

const renderTabContent = (activeTab) => {
  switch (activeTab.id) {
    case 1:
      return <MyAccount />;
    case 2:
      return <MyOrder />;
    case 3:
      return <MyWishlist />;
    case 4:
      return <AddressBook />;
    default:
      return null;
  }
};

export default Tabs;
