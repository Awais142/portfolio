// src/Components/LeftSection.jsx

import React from "react";
import IconCloud from "./IconCloud";

const IconCloudComponent = () => {
  return (
    <div className="lg:w-1/2 lg:mr-4">
      <div className="flex justify-center items-center">
        <IconCloud
          iconSlugs={[
            "typescript",
            "javascript",
            "react",
            "html5",
            "css3",
            "nodedotjs",
            "express",
            "mongodb",
            "git",
            "github",
            "python",
            "bootstrap",
            "docker",
            "nextdotjs",
          ]}
        />
      </div>
    </div>
  );
};

export default IconCloudComponent;
