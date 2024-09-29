import React from "react";
import IconCloud from "../Components/IconCloud";

const About = () => {
  return (
    <div className="flex flex-col px-12 py-8 text-gray-800 dark:text-gray-200">
      {/* Centered Heading */}
      <h1 className="text-5xl font-bold mb-8 mx-auto text-center bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-500 dark:to-purple-500 bg-clip-text text-transparent">
        About Me
      </h1>
      <div className="flex flex-col lg:flex-row">
        {/* Left Section - Widget */}
        <div className="lg:w-1/2 lg:mr-4">
          <IconCloud
            iconSlugs={[
              "typescript",
              "javascript",
              "react",
              "android",
              "html5",
              "css3",
              "nodedotjs",
              "express",
              "nextdotjs",
              "prisma",
              "amazonaws",
              "postgresql",
              "firebase",
              "vercel",
              "docker",
              "git",
              "github",
              "gitlab",
              "visualstudiocode",
              "androidstudio",
              "sonarqube",
              "figma",
              "mongodb",
              "express",
            ]}
          />
        </div>

        {/* Right Section - About Me Content */}
        <div className="lg:w-1/2 text-lg my-auto">
          <p className="mb-4">
            Hi, I’m Awais Akbar, a Full Stack Developer with 5 years of
            experience, hailing from Pakistan! I have a passion for building
            dynamic and responsive web applications, leveraging my expertise in{" "}
            <strong>
              React, MongoDB, Express, Node.js, Python, Git, GitHub, HTML, and
              CSS
            </strong>
            .
          </p>
          <p className="mb-4">
            My journey in web development began five years ago, driven by a
            desire to create innovative solutions that make a difference. I
            enjoy crafting seamless user experiences and believe in the power of
            clean, efficient code.
          </p>
          {/* <p className="mb-4">
            Throughout my career, I’ve worked on a variety of projects, from
            small startups to larger applications, allowing me to refine my
            skills and tackle new challenges.
          </p> */}
          <p className="mb-4">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, participating in hackathons,
            or diving into online courses to learn the latest trends in the
            industry. I also enjoy reading tech blogs, experimenting with new
            programming languages, and collaborating with fellow developers to
            share knowledge and ideas.
          </p>
          <p>
            I’m always excited to connect with new people and explore
            opportunities. Let’s bring your ideas to life together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
