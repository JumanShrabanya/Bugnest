"use client";
import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("all");
  // Filter bugs based on active tab

  return (
    <div className="mt-4 border-b border-gray-200">
      <nav className="-mb-px flex space-x-8">
        {["all", "open", "in-progress", "resolved"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${
              activeTab === tab
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            } whitespace-nowrap pb-3 px-1 border-b-2 font-medium text-sm capitalize`}
          >
            {tab.replace("-", " ")}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Tabs;
