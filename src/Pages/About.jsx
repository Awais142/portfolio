import React, { useState } from "react";
import IconCloud from "../Components/IconCloud";
// Importing icons from your local assets
import VSCodeIcon from "../assets/icons/visual_studio_code.png";
import ReactIcon from "../assets/icons/react.png";
import PythonIcon from "../assets/icons/python.png";
import PostgreSQLIcon from "../assets/icons/postgresql.png";
import NPMIcon from "../assets/icons/npm.png";
import NodeJSIcon from "../assets/icons/nodejs.png";
import NextJSIcon from "../assets/icons/Next.js.png"; // Adjust the name if different
import MySQLIcon from "../assets/icons/mysql.png";
import MongoDBIcon from "../assets/icons/mongodb.png";
import JWTIcon from "../assets/icons/json_web_token.png";
import JavaScriptIcon from "../assets/icons/JavaScript.png";
import HTMLIcon from "../assets/icons/html.png";
import AutomationIcon from "../assets/icons/automation.png";
import BootstrapIcon from "../assets/icons/bootstrap.png";
import CSS3Icon from "../assets/icons/css3.png";
import GitIcon from "../assets/icons/git.png";
import GitHubIcon from "../assets/icons/github.png";
import SassIcon from "../assets/icons/sass.png";

const About = () => {
  const [activeTab, setActiveTab] = useState("Education");

  const tabs = {
    Education: (
      <div className="p-4 text-lg">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-500 dark:to-purple-500 bg-clip-text text-transparent">
          Education
        </h2>
        <p className="mb-2">
          Bachelor of Science in Computer Science, XYZ University (2015 - 2019)
        </p>
        <p>Certification in Full Stack Development from ABC Institute (2020)</p>
      </div>
    ),
    Experience: (
      <div className="p-4 text-lg">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-500 dark:to-purple-500 bg-clip-text text-transparent">
          Experience
        </h2>
        <p className="mb-2">Full Stack Developer, Company A (2019 - Present)</p>
        <p>Software Engineer Intern, Company B (2018 - 2019)</p>
      </div>
    ),
    Skills: (
      <div className="p-4 text-lg">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-500 dark:to-purple-500 bg-clip-text text-transparent">
          Skills
        </h2>
        <p className="mb-4">
          Over the years, I’ve gained extensive knowledge and practical
          experience in web development, working with various technologies and
          frameworks. Here are the technologies I work with daily:
        </p>
        <div className="flex flex-wrap space-x-4">
          {/* Custom Icons for Skills */}
          <img
            src={VSCodeIcon}
            alt="Visual Studio Code"
            className="w-10 h-10 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={ReactIcon}
            alt="React"
            className="w-10 h-10 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={PythonIcon}
            alt="Python"
            className="w-10 h-10 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={PostgreSQLIcon}
            alt="PostgreSQL"
            className="w-10 h-10 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={NPMIcon}
            alt="NPM"
            className="w-10 h-10 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={NodeJSIcon}
            alt="Node.js"
            className="w-10 h-10 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={NextJSIcon}
            alt="Next.js"
            className="w-10 h-10 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={MySQLIcon}
            alt="MySQL"
            className="w-10 h-10 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={MongoDBIcon}
            alt="MongoDB"
            className="w-10 h-10 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={JWTIcon}
            alt="JWT"
            className="w-10 h-10 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={JavaScriptIcon}
            alt="JavaScript"
            className="w-10 h-10 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={HTMLIcon}
            alt="HTML"
            className="w-10 h-10 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={AutomationIcon}
            alt="Automation"
            className="w-10 h-10 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={BootstrapIcon}
            alt="Bootstrap"
            className="w-10 h-10 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={CSS3Icon}
            alt="CSS3"
            className="w-10 h-10 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={GitIcon}
            alt="Git"
            className="w-10 h-10 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={GitHubIcon}
            alt="GitHub"
            className="w-10 h-10 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={SassIcon}
            alt="Sass"
            className="w-10 h-10 hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
    ),
  };

  return (
    <div className="flex flex-col px-12 py-8 text-gray-800 dark:text-gray-200">
      <h1 className="text-5xl font-bold mb-12 mx-auto text-center bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-500 dark:to-purple-500 bg-clip-text text-transparent">
        About Me
      </h1>

      <div className="flex flex-col lg:flex-row">
        {/* Left Section - Widget */}
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

        {/* Right Section - Tabs */}
        <div className="lg:w-1/2 text-lg my-auto">
          {/* Tab Headers */}
          <div className="flex justify-around mb-4 border-b-2 border-gray-200 dark:border-gray-600">
            {["Education", "Experience", "Skills"].map((tab) => (
              <button
                key={tab}
                className={`relative px-4 py-2 transition-all duration-300 ${
                  activeTab === tab
                    ? "font-semibold text-indigo-500 dark:text-indigo-400 after:absolute after:w-full after:h-1 after:bg-indigo-500 after:bottom-0 after:left-0 after:rounded-lg"
                    : "text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-lg transition-all duration-300">
            {tabs[activeTab]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
