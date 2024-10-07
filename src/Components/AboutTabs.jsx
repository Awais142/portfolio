import React, { useState } from "react";
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

// Icons for the timeline
import UniIcon from "../assets/icons/university.png"; // Education icon
import CertIcon from "../assets/icons/certification.png"; // Certification icon
import JobIcon from "../assets/icons/job.png"; // Job icon
import InternshipIcon from "../assets/icons/internship.png"; // Internship icon

const RightSection = () => {
  const [activeTab, setActiveTab] = useState("Education");

  const tabs = {
    Education: (
      <div className="p-4 text-lg">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-300 to-rose-400 dark:from-rose-500 dark:to-orange-300 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="relative border-l-2 border-gray-300 dark:border-gray-700 mt-2">
          {[
            {
              icon: UniIcon,
              title: "Allama Iqbal Open University",
              description:
                "Bachelor of Science in Computer Science (2016 - 2020)",
            },
            {
              icon: CertIcon,
              title: "Certification in Full Stack Development",
              description: "(2020)",
            },
            {
              icon: JobIcon,
              title: "DEF College",
              description: "Diploma in Software Engineering (2014 - 2015)",
            },
            {
              icon: InternshipIcon,
              title: "GHI Training Center",
              description: "Web Development Workshop (2013)",
            },
          ].map((item, index) => (
            <div key={index} className="mb-4 ml-4 flex items-start">
              <div className="bg-gradient-to-r from-orange-300 to-rose-400 dark:from-rose-400 dark:to-orange-300 p-2 rounded-full">
                <img src={item.icon} alt={item.title} className="w-6 h-6" />
              </div>
              <div className="ml-2">
                <span className="font-semibold">{item.title}</span>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    Experience: (
      <div className="p-4 text-lg">
        <h2 className="text-3xl font-bold bg-gradient-to-l from-orange-300 to-rose-400 dark:from-rose-500 dark:to-orange-300 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="relative border-l-2 border-gray-300 mt-2 dark:border-gray-700">
          {[
            {
              icon: JobIcon,
              title: "Freelance",
              description: "Web Developer (July 2024 - Present)",
            },
            {
              icon: JobIcon,
              title: "Nooreh Fashion",
              description: "Full Stack Developer (June 2023 - July 2024)",
            },
            {
              icon: InternshipIcon,
              title: "Front End Developer",
              description:
                "University of South Asia (September 2022 - June 2023)",
            },
            {
              icon: InternshipIcon,
              title: "Company C",
              description: "Front End Developer Internship (June 2021 - 2022)",
            },
            {
              icon: InternshipIcon,
              title: "BSM Software Solution",
              description: "Android App Development Internship (Summer 2021)",
            },
          ].map((item, index) => (
            <div key={index} className="mb-4 ml-4 flex items-start">
              <div className="bg-gradient-to-r from-orange-300 to-rose-400 dark:from-rose-400 dark:to-orange-300 p-2 rounded-full">
                <img src={item.icon} alt={item.title} className="w-6 h-6" />
              </div>
              <div className="ml-2">
                <span className="font-semibold">{item.title}</span>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    Skills: (
      <div className="p-4 text-lg">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-300 to-rose-400 dark:from-rose-500 dark:to-orange-300 bg-clip-text text-transparent">
          Skills
        </h2>
        <p className="mb-4 mt-2">
          Over the years, I’ve gained extensive knowledge and practical
          experience in web development, working with various technologies and
          frameworks. Here are the technologies I work with daily:
        </p>
        <div className="flex flex-wrap space-x-4">
          {/* Custom Icons for Skills */}
          {[
            { icon: VSCodeIcon, alt: "Visual Studio Code" },
            { icon: ReactIcon, alt: "React" },
            { icon: PythonIcon, alt: "Python" },
            { icon: PostgreSQLIcon, alt: "PostgreSQL" },
            { icon: NPMIcon, alt: "NPM" },
            { icon: NodeJSIcon, alt: "Node.js" },
            { icon: NextJSIcon, alt: "Next.js" },
            { icon: MySQLIcon, alt: "MySQL" },
            { icon: MongoDBIcon, alt: "MongoDB" },
            { icon: JWTIcon, alt: "JSON Web Token" },
            { icon: JavaScriptIcon, alt: "JavaScript" },
            { icon: HTMLIcon, alt: "HTML" },
            { icon: AutomationIcon, alt: "Automation" },
            { icon: BootstrapIcon, alt: "Bootstrap" },
            { icon: CSS3Icon, alt: "CSS3" },
            { icon: GitIcon, alt: "Git" },
            { icon: GitHubIcon, alt: "GitHub" },
            { icon: SassIcon, alt: "Sass" },
          ].map((skill, index) => (
            <img
              key={index}
              src={skill.icon}
              alt={skill.alt}
              className="w-10 h-10 hover:scale-110 transition-transform duration-300 p-1 rounded-full"
            />
          ))}
        </div>
      </div>
    ),
  };

  return (
    <div
      className="flex-1 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg"
      style={{ height: "600px" }}
    >
      <div className="flex justify-around">
        {Object.keys(tabs).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 border-b-2 transition-colors duration-300 ${
              activeTab === tab
                ? "border-rose-400 text-rose-400 font-semibold"
                : "border-none text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {tabs[activeTab]}
    </div>
  );
};

export default RightSection;
