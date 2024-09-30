import React from "react";
import { Meteors } from "../Components/ui/meteors";

export function ServiceCard({ title, description }) {
  return (
    <div className="w-full relative max-w-xs">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-[0.80] rounded-full blur-3xl"></div>

      <div className="relative bg-slate-100 dark:bg-gray-900 border flex-1 border-gray-800 dark:border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start hover:shadow-xl hover:cursor-pointer">
        <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-2 w-2 text-gray-900 dark:text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </div>

        <h1 className="font-bold text-xl text-black dark:text-white mb-4 relative z-50">
          {title}
        </h1>

        <p className="font-normal text-base text-slate-900 dark:text-slate-400 mb-4 relative z-50">
          {description}
        </p>

        <button className="border px-4 py-1 rounded-lg border-gray-500 text-black dark:text-gray-300">
          Explore
        </button>

        {/* Meteor effect */}
        <Meteors number={10} />
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const services = [
    {
      title: "Web Development",
      description:
        "Crafting responsive websites and web apps with the latest technologies.",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Building scalable and secure online stores optimized for user experience.",
    },
    {
      title: "Mobile App Development",
      description:
        "Delivering fast and efficient mobile apps across iOS and Android platforms.",
    },
    {
      title: "Robotic Process Automation",
      description:
        "Delivering fast and efficient mobile apps across iOS and Android platforms.",
    },
    {
      title: "Web Scrapping",
      description:
        "Delivering fast and efficient mobile apps across iOS and Android platforms.",
    },
    {
      title: "UI/UX Design",
      description:
        "Delivering fast and efficient mobile apps across iOS and Android platforms.",
    },
  ];

  return (
    <div className="py-8 bg-white dark:bg-slate-800">
      <h1 className="text-5xl font-bold mb-8 mx-auto text-center bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-500 dark:to-purple-500 bg-clip-text text-transparent">
        Services
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}
