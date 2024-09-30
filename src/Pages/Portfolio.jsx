import React from "react";
import ShineBorder from "../Components/ui/shineBorder";

// Array of projects with image URLs
const projects = [
  {
    title: "Project 1",
    description: "A responsive website built using React.",
    skills: ["React", "CSS", "JavaScript"],
    image: "/images/project1.png",
  },
  {
    title: "Project 2",
    description: "A Node.js API for managing e-commerce products.",
    skills: ["Node.js", "Express", "MongoDB"],
    image: "/images/project2.png",
  },
  {
    title: "Project 3",
    description: "A mobile app for task management.",
    skills: ["React Native", "Firebase"],
    image: "/images/project3.png",
  },
  {
    title: "Project 4",
    description: "An automation tool for generating reports.",
    skills: ["Python", "Automation", "PostgreSQL"],
    image: "/images/project4.png",
  },
  {
    title: "Project 5",
    description: "A chat application with real-time messaging.",
    skills: ["Socket.io", "Node.js", "React"],
    image: "/images/project5.png",
  },
  {
    title: "Project 6",
    description: "A portfolio website built with Next.js.",
    skills: ["Next.js", "Tailwind CSS"],
    image: "/images/project6.png",
  },
];

const Projects = () => {
  return (
    <div className="relative text-gray-800 dark:text-gray-200 p-8">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-slate-200 to-gray-200 transform scale-[0.80] rounded-full blur-3xl"></div>
      <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
      <div className="flex justify-center flex-wrap gap-8">
        {projects.map((project, index) => (
          <ShineBorder
            key={index}
            className="relative flex flex-col items-center justify-between p-10 rounded-lg bg-slate-100 dark:bg-gray-900 hover:scale-105 transition-transform duration-300 shadow-lg w-full max-w-xs h-full"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <div className="flex-grow text-start">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-start gap-1">
                {project.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 bg-gray-200 text-xs dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ShineBorder>
        ))}
      </div>
    </div>
  );
};

export default Projects;
