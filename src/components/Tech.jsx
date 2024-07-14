import React, { useState } from "react";
import { FaReact, FaCss3, FaHtml5, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Tech = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  const technologies = [
    { name: "HTML5", icon: <FaHtml5 className="text-7xl text-orange-700" /> },
    { name: "CSS3", icon: <FaCss3 className="text-7xl text-blue-900" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-7xl text-cyan-400" />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-7xl text-pink-700" />,
    },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript className="text-7xl text-yellow-500" />,
    },
    { name: "React", icon: <FaReact className="text-7xl text-cyan-400" /> },
    { name: "Next.js", icon: <RiNextjsLine className="text-7xl text-white" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-7xl text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-7xl text-white" /> },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-7xl text-green-500" />,
    },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(2.5 + index * 0.5)}
            initial="initial"
            animate="animate"
            className="relative rounded-2xl border-4 border-neutral-800 p-4"
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            {tech.icon}
            {hoveredTech === tech.name && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full mt-2 w-full text-center text-white"
              >
                {tech.name}
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tech;
