"use client";
// components/Tabs.js
import { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      <div className="flex space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 ${
              activeTab.id === tab.id
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            } rounded`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-4">{activeTab.content}</div>
    </div>
  );
};

export default Tabs;
