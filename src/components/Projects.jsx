import React, { useState, memo } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { AiOutlineEye } from "react-icons/ai";

// ✅ Memoized ProjectCard Component to prevent unnecessary re-renders
const ProjectCard = memo(({ project, index }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    viewport={{ once: true }} // ✅ Loads animation only once
    className="relative group overflow-hidden rounded-2xl shadow-lg bg-neutral-900 cursor-pointer"
  >
    {/* 🖼️ Optimized Lazy-Loaded Image */}
    <img
      src={project.image}
      alt={project.title}
      loading="lazy" // ✅ Improves Performance
      className="object-cover w-full h-60 transition-transform duration-300 group-hover:scale-110"
    />

    {/* 🔥 Overlay with Info */}
    <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-md flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
      <p className="text-sm text-gray-300 px-4 text-center">
        {project.description}
      </p>

      {/* 🛠️ Technologies */}
      <div className="mt-3 flex flex-wrap justify-center">
        {project.technologies.map((tech, i) => (
          <span
            key={i}
            className="text-xs bg-purple-700 bg-opacity-20 text-white px-3 py-1 rounded-lg mx-1"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* 🔗 Links */}
      <div className="mt-4 flex space-x-4">
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition"
          >
            Live Demo
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-lg transition"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  </motion.div>
));

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }} // ✅ Prevents re-rendering animations
        className="my-20 text-5xl font-bold text-center tracking-wide"
      >
        My Projects
      </motion.h2>

      {/* 🔥 Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
