import React from "react";
import about from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4"></div>
      <h1 className="my-20 text-center text-4xl">
        About<span className="text-neutral-500 ml-3">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="group w-full lg:w-1/2 lg:p-8">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center  group-hover:scale-105 duration-300"
          >
            <img className="rounded-2xl" src={about} alt="about" />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 mt-[50px]">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:justify-start"
          >
            <p>{ABOUT_TEXT}</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
