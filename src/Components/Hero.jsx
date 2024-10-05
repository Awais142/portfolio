"use client";
import React from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import myImage from "../assets/images/my-image.png";
// Animated SVG Blob
const Blob = () => {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -z-10 w-[400px] h-[420px] fill-current"
      initial={{ scale: 1, rotate: 0, x: 0, y: 0 }}
      animate={{
        scale: [1, 1.05, 0.95, 1], // Gentle ebb and flow
        rotate: [0, 15, -10, 20, -20, 0], // Rotates to different angles
        x: [0, -50, 30, -40, 50, -30, 0], // Flows left and right
        y: [0, -40, 50, -30, 40, -50, 0], // Flows up and down
      }}
      transition={{
        duration: 35, // Slow fluid movement
        repeat: Infinity,
        ease: "easeInOut", // Smooth easing for natural movement
      }}
    >
      <path
        fill="#E74764"
        d="M42.7,-54.9C54.9,-49.8,64.1,-36.8,69.3,-22.2C74.5,-7.6,75.6,8.7,73,25.9C70.4,43.2,64.1,61.4,51.3,69.5C38.6,77.6,19.3,75.6,0.7,74.6C-17.8,73.5,-35.6,73.5,-51.1,66.3C-66.6,59.1,-79.9,44.7,-82.6,28.6C-85.4,12.6,-77.7,-5.1,-71.9,-23.6C-66.2,-42,-62.4,-61.3,-50.7,-66.6C-39.1,-71.9,-19.5,-63.2,-2.2,-60.3C15.2,-57.3,30.4,-60.1,42.7,-54.9Z"
        transform="translate(100 100)"
      />
    </motion.svg>
  );
};

const words = `A passionate Full Stack Developer from Pakistan, ready to bring your ideas to life! 🚀
`;

const Hero = () => {
  return (
    <HeroHighlight>
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto max-h-screen p-8 lg:p-0 lg:mt-0 relative">
        {/* Left Section - Text and Buttons */}
        <div className="flex-1 py-10 order-2 lg:order-1">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-4xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white leading-relaxed lg:leading-snug"
          >
            👋 Hi <br />
            <Highlight className="text-black dark:text-white text-4xl">
              I'm Awais Akbar.
            </Highlight>
          </motion.h1>
          <TextGenerateEffect words={words} />
          <div className="mt-12 mx-auto flex gap-8 ">
            <button className="px-6 rounded-lg py-2 bg-gradient-to-r from-orange-300 to-rose-400 dark:from-rose-400 dark:to-orange-300 hover:bg-gradient-to-r text-white hover:from-rose-500 hover:to-orange-400 font-bold transition-all border hover:shadow-lg hover:scale-105 active:scale-95 active:shadow-none active:bg-gradient-to-br active:from-orange-800 active:to-rose-700  duration-200 ease-in-out">
              Contact Me
            </button>
            <button className="px-6 rounded-lg py-2 bg-gradient-to-r from-orange-300 to-rose-400 dark:from-rose-400 dark:to-orange-300 hover:bg-gradient-to-r text-white hover:from-rose-500 hover:to-orange-400 font-bold transition-all border hover:shadow-lg hover:scale-105 active:scale-95 active:shadow-none active:bg-gradient-to-br active:from-orange-800 active:to-rose-700  duration-200 ease-in-out">
              Portfolio
            </button>
          </div>
        </div>

        {/* Right Section - Image with Blob behind */}
        <div className="flex-1 mt-40 lg:mt-0 lg:pl-16 order-1 lg:order-2 relative">
          {/* Blob behind the image */}
          <Blob />
          <motion.img
            src={myImage} // Update with your image path
            alt="Modern Web Solutions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md relative z-10"
          />
        </div>
      </div>
    </HeroHighlight>
  );
};

export default Hero;
