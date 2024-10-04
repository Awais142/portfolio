import React, { useState } from "react";
import ShineBorder from "../Components/ui/shineBorder";
import projects from "../lib/projects";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null); // For modal
  const [showModal, setShowModal] = useState(false);

  // Filtered Projects by Tab
  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) =>
          activeTab === "fullstack"
            ? project.type === "fullstack"
            : activeTab === "frontend"
            ? project.type === "frontend"
            : activeTab === "api"
            ? project.type === "api"
            : true
        );

  // Handle Modal open/close
  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="relative text-gray-800 dark:text-gray-200 p-8">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-12 mx-auto text-center bg-gradient-to-r from-orange-300 to-rose-500 dark:from-rose-500 dark:to-orange-300 bg-clip-text text-transparent">
        Projects
      </h1>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        {["All", "fullstack", "frontend", "api"].map((tab) => (
          <button
            key={tab}
            className={`relative px-4 py-2 rounded-lg mx-4 transition-all duration-300 ease-in-out transform ${
              activeTab === tab
                ? "bg-rose-400 text-white scale-105 shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            {/* Add a transition effect when the button is active */}
            <span
              className={`absolute inset-0 rounded-lg transition-transform duration-300 ease-in-out transform ${
                activeTab === tab
                  ? "scale-125 opacity-30 bg-gradient-to-r from-orange-300 to-rose-400 dark:from-rose-400 dark:to-orange-300"
                  : "scale-0"
              }`}
            ></span>
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className=" relative flex justify-center flex-wrap gap-8">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-orange-200 to-rose-200 transform scale-[0.80] blur-3xl"></div>
        {filteredProjects.map((project, index) => (
          <ShineBorder
            key={index}
            className="relative project-card flex flex-col items-center justify-between p-2 cursor-pointer rounded-lg bg-slate-100 dark:bg-gray-900 hover:scale-105 transition-transform duration-300 shadow-lg w-full max-w-xs h-full"
            color={["#E96466", "#E74764", "#FFffff"]}
            onClick={() => openModal(project)} // Open modal on click
          >
            <div className="relative w-full h-60 overflow-hidden rounded-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-md transition-all duration-500 hover:blur-sm"
              />
              {/* Overlay Title */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <button
                  className="mt-2 text-indigo-400 underline"
                  onClick={() => openModal(project)}
                >
                  Learn More
                </button>
              </div>
            </div>
          </ShineBorder>
        ))}
      </div>

      {/* Modal for Learn More */}
      {showModal && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-3xl">
            <button
              className="absolute top-2 right-2 text-xl font-bold text-red-500"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
            <p className="mb-4">{selectedProject.description}</p>

            {/* Slider for Images */}
            {selectedProject.images && selectedProject.images.length > 0 && (
              <Slider>
                {selectedProject.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-md"
                  />
                ))}
              </Slider>
            )}

            <div className="mt-4">
              <h3 className="text-xl font-semibold">Skills Used:</h3>
              <ul className="list-disc ml-4">
                {selectedProject.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
