import React from "react";
import about from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4"></div>
      <h1 className="my-10 sm:my-16 lg:my-20 text-center text-3xl sm:text-4xl">
        About<span className="text-neutral-500 ml-2 sm:ml-3">Me</span>
      </h1>
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="group w-full lg:w-1/2 lg:p-8 flex justify-center lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-[80%] sm:w-[70%] lg:w-full group-hover:scale-105 duration-300"
          >
            <img className="rounded-2xl" src={about} alt="about" />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:p-8 flex justify-center lg:justify-start">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-[90%] sm:w-[80%] lg:w-full"
          >
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              {ABOUT_TEXT}
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
