import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-4xl text-center"
        >
          Projects
        </motion.h2>
        <div className="flex flex-wrap justify-center">
          {PROJECTS.map((project, index) => {
            return (
              <div
                key={index}
                className="mb-8 flex flex-col items-center lg:flex-row lg:justify-start lg:w-2/3"
              >
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="aspect-w-1 aspect-h-1 mb-6 w-full max-w-xs lg:mr-8"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full rounded-lg shadow-lg"
                  />
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-xl lg:w-auto"
                >
                  <h6 className="mb-2 text-xl font-semibold text-gray-200">
                    {project.title}
                  </h6>
                  <p className="mb-4 text-neutral-400">{project.description}</p>
                  <div className="mb-4">
                    {project.technologies.map((tech, index) => {
                      return (
                        <span
                          className="mr-2 mb-2 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                          key={index}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-block text-lg group"
                    >
                      <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out bg-blue-600 rounded-lg group-hover:bg-blue-700">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gradient-to-br from-purple-400 to-blue-600"></span>
                        <span className="relative cursor-pointer">
                          Live Demo
                        </span>
                      </span>
                      <span
                        className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gradient-to-br from-purple-400 to-blue-600"
                        style={{
                          filter: "blur(10px)",
                          transform: "translate(0, 0)",
                          transition: "opacity 0.3s ease-in-out",
                        }}
                      ></span>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-block text-lg group"
                    >
                      <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out bg-gray-700 rounded-lg group-hover:bg-gray-800">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gradient-to-br from-purple-400 to-blue-600"></span>
                        <span className="relative cursor-pointer">GitHub</span>
                      </span>
                      <span
                        className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gradient-to-br from-purple-400 to-blue-600"
                        style={{
                          filter: "blur(10px)",
                          transform: "translate(0, 0)",
                          transition: "opacity 0.3s ease-in-out",
                        }}
                      ></span>
                    </a>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
