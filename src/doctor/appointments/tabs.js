import React, { useState } from 'react';

const Tabs = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div className="w-full">
      <ul className="flex border-b border-gray-300">
        {tabs.map((tab) => (
          <li
            key={tab.label}
            className={`cursor-pointer py-2 px-4 text-center ${
              activeTab === tab.label 
                ? 'border-b-2 border-blue-500 text-blue-500 font-semibold' 
                : 'text-gray-500 hover:text-blue-500'
            }`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="p-4">
        {children.filter(child => child.props.label === activeTab)}
      </div>
    </div>
  );
};

export default Tabs;