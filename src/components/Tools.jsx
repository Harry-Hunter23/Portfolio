import React, { useState } from "react";
import { SiPostman, SiOpenai } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { FaGithub, FaSlack } from "react-icons/fa";
import { motion } from "framer-motion";

const Tools = () => {
  const [hoveredTool, setHoveredTool] = useState(null);

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

  const tools = [
    {
      name: "Visual Studio",
      icon: <DiVisualstudio className="text-7xl text-blue-900" />,
    },
    {
      name: "Postman",
      icon: <SiPostman className="text-7xl text-orange-700" />,
    },
    { name: "GitHub", icon: <FaGithub className="text-7xl text-white" /> },
    { name: "OpenAI", icon: <SiOpenai className="text-7xl text-white" /> },
    { name: "Slack", icon: <FaSlack className="text-7xl text-purple-800" /> },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Tools
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            variants={iconVariants(2.0 + index * 0.5)}
            initial="initial"
            animate="animate"
            className="relative rounded-2xl border-4 border-neutral-800 p-4"
            onMouseEnter={() => setHoveredTool(tool.name)}
            onMouseLeave={() => setHoveredTool(null)}
          >
            {tool.icon}
            {hoveredTool === tool.name && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full mt-2 w-full text-center text-white"
              >
                {tool.name}
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tools;
