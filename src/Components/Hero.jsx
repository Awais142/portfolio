"use client";
import React from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `A passionate Full Stack Developer from Pakistan, ready to bring your ideas to life! 🚀
`;

const Hero = () => {
  return (
    <HeroHighlight>
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto max-h-screen mt-64 p-8 lg:p-0 lg:mt-0 ">
        {/* Left Section - Text and Buttons */}
        <div className="flex-1 lg:pr-8">
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
            className="text-2xl md:text-xl lg:text-4xl font-bold text-black dark:text-white leading-relaxed lg:leading-snug"
          >
            👋 Hi <br />
            <Highlight className="text-black dark:text-white text-4xl">
              I'm Awais Akbar.
            </Highlight>
          </motion.h1>
          <TextGenerateEffect words={words} />
          {/* Buttons (Optional) */}

          {/* <div className="p-container font-medium mt-2 text-black dark:text-white">
            I genuinely love creating smooth and enjoyable user experiences,
            paying attention to the little things that make a big difference. I
            specialize in building web applications that not only work well but
            also feel great to use. Let’s team up and bring your ideas to life—I
            can’t wait to help you elevate your digital presence! 💻✨
          </div> */}
          <div className="mt-12 mx-auto flex gap-8 ">
            <button className="px-6 rounded-lg py-2 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-500 dark:to-purple-500 hover:bg-gradient-to-r text-white hover:from-indigo-600 hover:to-purple-600 font-bold transition-all border">
              Contact Me
            </button>
            <button className="ml-4 px-6 py-2 bg-transparent bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-500 dark:to-purple-500 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 border text-white font-bold rounded-lg transition-all">
              Portfolio
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1  mt-8 lg:mt-0 lg:pl-16">
          <motion.img
            src="\src\assets\images\ai-generated-avatars.png" // Update with your image path
            alt="Modern Web Solutions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md flex items-end"
          />
        </div>
      </div>
    </HeroHighlight>
  );
};

export default Hero;
