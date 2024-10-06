import React, { useState } from "react";
import ShineBorder from "../Components/ui/shineBorder";
import projects from "../lib/projects";
import Slider from "react-slick";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [prevTab, setPrevTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) =>
          activeTab === "FullStack"
            ? project.type === "FullStack"
            : activeTab === "Frontend"
            ? project.type === "Frontend"
            : activeTab === "Api"
            ? project.type === "Api"
            : activeTab === "Wordpress"
            ? project.type === "Wordpress"
            : true
        );

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const getSlideDirection = () => {
    const tabsOrder = ["All", "FullStack", "Frontend", "Api", "Wordpress"];
    const prevIndex = tabsOrder.indexOf(prevTab);
    const currentIndex = tabsOrder.indexOf(activeTab);
    return currentIndex > prevIndex ? "slide-left" : "slide-right";
  };

  return (
    <div className="relative text-gray-800 dark:text-gray-200 p-8">
      <h1 className="text-5xl font-bold mb-12 mx-auto text-center bg-gradient-to-r from-orange-300 to-rose-500 dark:from-rose-500 dark:to-orange-300 bg-clip-text text-transparent">
        Projects
      </h1>

      <div className="flex justify-center mb-8">
        {["All", "FullStack", "Frontend", "Api", "Wordpress"].map((tab) => (
          <button
            key={tab}
            className={`relative px-4 py-2 rounded-lg mx-4 transition-all duration-300 ease-in-out transform ${
              activeTab === tab
                ? "bg-rose-400 text-white scale-105 shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
            onClick={() => {
              setPrevTab(activeTab);
              setActiveTab(tab);
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <SwitchTransition>
        <CSSTransition
          key={activeTab}
          timeout={500}
          classNames={getSlideDirection()}
        >
          <div className="relative flex justify-center flex-wrap gap-8 transition-all duration-500">
            {filteredProjects.map((project, index) => (
              <div className="relative project-card flex flex-col items-center justify-between w-full max-w-xs h-full">
                {/* Backdrop Effect */}
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-orange-300 to-rose-400 transform scale-[0.80] rounded-full blur-3xl"></div>

                <ShineBorder
                  key={index}
                  className="relative flex flex-col items-center justify-between p-2 cursor-pointer rounded-lg bg-slate-100 dark:bg-gray-900 hover:scale-105 transition-transform duration-300 shadow-lg"
                  color={["#E96466", "#E74764", "#FFffff"]}
                  onClick={() => openModal(project)}
                >
                  <div className="relative w-full h-60 overflow-hidden rounded-md">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-md transition-all duration-500 hover:blur-sm"
                    />
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
              </div>
            ))}
          </div>
        </CSSTransition>
      </SwitchTransition>

      {showModal && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-3xl relative">
            <button
              className="absolute top-2 right-2 text-xl font-bold text-red-500"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="modal-content">
              <img
                src={selectedProject.images[0]}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h2 className="text-3xl font-bold mb-4">
                {selectedProject.title}
              </h2>
              <p className="mb-4">{selectedProject.description}</p>

              {selectedProject.images && selectedProject.images.length > 1 && (
                <Slider>
                  {selectedProject.images.slice(1).map((img, index) => (
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
        </div>
      )}
    </div>
  );
};

export default Projects;
