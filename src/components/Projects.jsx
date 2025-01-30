import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { AiOutlineEye, AiOutlineClose } from "react-icons/ai";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="mb-8 flex flex-col items-center lg:flex-row lg:justify-start lg:w-2/3"
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-w-1 aspect-h-1 mb-6 w-full max-w-xs lg:mr-8"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-contain w-full h-full rounded-lg shadow-lg cursor-pointer"
                  onClick={() => setSelectedImage(project.image)}
                />
                {/* Preview Icon - Opens Image in New Tab */}
                <div
                  className="absolute bottom-2 right-2 bg-black bg-opacity-50 p-2 rounded-full cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent opening modal
                    window.open(project.image, "_blank");
                  }}
                >
                  <AiOutlineEye className="text-white text-2xl" />
                </div>
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
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="mr-2 mb-2 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.liveDemo ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-block text-lg group"
                    >
                      <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out bg-blue-600 rounded-lg group-hover:bg-blue-700">
                        Live Demo
                      </span>
                    </a>
                  ) : (
                    <span className="relative inline-block text-lg group">
                      <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out bg-gray-600 rounded-lg">
                        No Redirection for security reasons
                      </span>
                    </span>
                  )}
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-block text-lg group"
                    >
                      <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out bg-gray-700 rounded-lg group-hover:bg-gray-800">
                        GitHub
                      </span>
                    </a>
                  ) : (
                    <span className="relative inline-block text-lg group">
                      <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out rounded-lg">
                        Closed Source
                      </span>
                    </span>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative p-4 max-w-3xl w-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full h-auto rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
            />
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <AiOutlineClose className="text-2xl" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Projects;
