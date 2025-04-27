import React from "react";
import { HERO_CONTENT } from "../constants";
import profile from "../assets/profile_coverwide.jpeg";
import { motion } from "framer-motion";

const Hero = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <div className="pb-4 lg:mb-35 flex flex-col lg:flex-row items-center lg:items-start gap-5 lg:gap-10 justify-center">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left mx-4 sm:mx-6 lg:mx-0">
        <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl lg:text-6xl font-thin tracking-tight my-6 lg:my-[50px] py-4 lg:py-6 text-white"
        >
          Shrihari Deshmukh
        </motion.h1>
        <motion.span
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-400 bg-clip-text tracking-tighter text-xl sm:text-2xl lg:text-4xl text-transparent mx-4 sm:mx-6 lg:mx-0"
        >
          MERN Stack Developer
        </motion.span>
        <motion.p
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="max-w-xl mx-4 sm:mx-6 lg:mx-0 my-4 text-sm sm:text-base lg:text-lg"
        >
          {HERO_CONTENT}
        </motion.p>
      </div>
      <div className="group w-full lg:w-1/2 p-4 lg:p-8 flex justify-center lg:justify-end">
        <div className="w-[200px] sm:w-[250px] lg:w-[300px] mt-[20px] sm:mt-[30px] lg:mt-[40px] rounded-[15px] group-hover:scale-105 duration-300">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] w-full"
            src={profile}
            alt="Profile Cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
