import React, { memo } from "react";
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
    className="relative group overflow-hidden rounded-xl shadow-lg bg-neutral-900 cursor-pointer"
  >
    {/* 🖼️ Optimized Lazy-Loaded Image */}
    <img
      src={project.image}
      alt={project.title}
      loading="lazy"
      className="object-cover w-full h-[250px] sm:h-[300px] md:h-[250px] lg:h-[260px] xl:h-[280px] transition-transform duration-300 group-hover:scale-110"
    />

    {/* 🔥 Overlay with Info */}
    <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-md flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 text-center">
        {project.title}
      </h3>
      <p className="text-sm sm:text-base text-gray-300 text-center">
        {project.description}
      </p>

      {/* 🛠️ Technologies */}
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {project.technologies.map((tech, i) => (
          <span
            key={i}
            className="text-xs sm:text-sm bg-purple-700 bg-opacity-20 text-white px-3 py-1 rounded-lg"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* 🔗 Links */}
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium rounded-lg transition"
          >
            Live Demo
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 sm:px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-xs sm:text-sm font-medium rounded-lg transition"
          >
            GitHub
          </a>
        )}
      </div>
    </div>

    {/* 👁️ Preview Icon - Opens Image in New Tab */}
    <div
      className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-70 transition"
      onClick={(e) => {
        e.stopPropagation();
        window.open(project.image, "_blank");
      }}
    >
      <AiOutlineEye className="text-white text-lg sm:text-2xl" />
    </div>
  </motion.div>
));

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-16 px-4 sm:px-6 lg:px-12">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="my-12 sm:my-16 text-3xl sm:text-4xl md:text-5xl font-bold text-center tracking-wide"
      >
        My Projects
      </motion.h2>

      {/* 🔥 Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
