"use client";
import React from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight"; // Assuming this is where your HeroHighlight is located
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Building intuitive, modern web solutions that not only look great but function seamlessly. Each line of code is a step closer to delivering fast, responsive, and impactful user experiences
`;

const Hero = () => {
  return (
    <>
      <HeroHighlight>
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
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-black dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
        >
          Crafting Modern Web Experiences,{" "}
          <Highlight className="text-black dark:text-white">
            One Line of Code at a Time.
          </Highlight>
          <TextGenerateEffect words={words} />
        </motion.h1>
      </HeroHighlight>
    </>
  );
};

export default Hero;
