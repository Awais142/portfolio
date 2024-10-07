// src/Components/About.jsx

import React from "react";
import IconCloudComponent from "../Components/IconCloudComponent";
import AboutTabs from "../Components/AboutTabs";

const About = () => {
  return (
    <div className="flex flex-col px-12 py-16 lg:py-0 text-gray-800 dark:text-gray-200 mt-40 lg:mt-0">
      <h1 className="text-5xl font-bold mb-12 mx-auto text-center bg-gradient-to-r from-orange-300 to-rose-500 dark:from-rose-500 dark:to-orange-300 bg-clip-text text-transparent">
        About Me
      </h1>

      <div className="flex flex-col lg:flex-row">
        {/* Left Section - Widget */}
        <IconCloudComponent />

        {/* Right Section - Tabs */}
        <AboutTabs />
      </div>
    </div>
  );
};

export default About;
