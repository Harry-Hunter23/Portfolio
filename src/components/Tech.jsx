import React, { useState } from "react";
import { FaReact, FaCss3, FaHtml5, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import { motion } from "framer-motion";

const PythonLogo = () => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="w-19 h-20" // Adjusting the size to match other icons
  >
    <defs>
      <linearGradient
        id="a"
        gradientTransform="matrix(189.38 0 0 189.81 25243.061 38519.17)"
        gradientUnits="userSpaceOnUse"
        x1="-133.268"
        x2="-133.198"
        y1="-202.91"
        y2="-202.84"
      >
        <stop offset="0" stopColor="#387eb8" />
        <stop offset="1" stopColor="#366994" />
      </linearGradient>
      <linearGradient
        id="b"
        gradientTransform="matrix(189.38 0 0 189.81 25309.061 38583.42)"
        gradientUnits="userSpaceOnUse"
        x1="-133.575"
        x2="-133.495"
        y1="-203.203"
        y2="-203.133"
      >
        <stop offset="0" stopColor="#ffe052" />
        <stop offset="1" stopColor="#ffc331" />
      </linearGradient>
    </defs>
    <path
      d="m15.885 2.1c-7.1 0-6.651 3.07-6.651 3.07v3.19h6.752v1h-9.441s-4.545-.56-4.545 6.645 4.013 6.912 4.013 6.912h2.317v-3.361s-.13-4.013 3.9-4.013h6.762s3.772.06 3.772-3.652v-6.091s.572-3.712-6.842-3.712zm-3.732 2.137a1.214 1.214 0 1 1 -1.183 1.244v-.02a1.214 1.214 0 0 1 1.214-1.214z"
      fill="url(#a)"
    />
    <path
      d="m16.085 29.91c7.1 0 6.651-3.08 6.651-3.08v-3.18h-6.751v-1h9.47s4.545.508 4.545-6.655-4.013-6.912-4.013-6.912h-2.347v3.317s.13 4.013-3.9 4.013h-6.765s-3.775-.057-3.775 3.655v6.132s-.572 3.712 6.842 3.712h.04zm3.732-2.147a1.214 1.214 0 1 1 1.183-1.244v.03a1.214 1.214 0 0 1 -1.214 1.214h.03z"
      fill="url(#b)"
    />
  </svg>
);

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
    { name: "Python", icon: <PythonLogo /> },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Skills
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
