import { FaLinkedinIn, FaGithub, FaWhatsapp, FaTelegram } from "react-icons/fa";
import resumePath from "../assets/Shrihari__resume.pdf";
import { motion } from "framer-motion";

const Navbar = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Shrihari_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const iconVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <>
      <nav className=" mx-auto my-5 flex flex-col md:flex-row items-center justify-between px-4 md:px-0 max-w-[1360px]">
        <motion.div
          className="flex items-center justify-center w-[65px] h-[65px] bg-gradient-to-r from-purple-400 to-blue-600 text-white font-bold text-2xl rounded-full my-2 mx-3"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          SD
        </motion.div>
        <div className="flex items-center gap-4 md:gap-6 text-xl md:text-2xl mt-4 md:mt-0">
          {[
            {
              href: "https://www.linkedin.com/in/shrihari-deshmukh-6373b9248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              icon: <FaLinkedinIn className="cursor-pointer" />,
            },
            {
              href: "https://github.com/Harry-Hunter23",
              icon: <FaGithub className="cursor-pointer" />,
            },
            {
              href: "https://wa.me/8830984614",
              icon: <FaWhatsapp className="cursor-pointer" />,
            },
            {
              href: "https://t.me/MrMister888",
              icon: <FaTelegram className="cursor-pointer" />,
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              custom={index}
              initial="hidden"
              animate="visible"
              variants={iconVariants}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
        <motion.button
          onClick={handleDownload}
          className="relative mt-4 md:mt-0 px-6 py-3 font-semibold text-white rounded-lg overflow-hidden bg-gradient-to-r from-purple-400 to-blue-600 shadow-lg group"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-blue-800 opacity-0 group-hover:opacity-100 transition duration-300"></span>
          <span className="relative">Download CV</span>
        </motion.button>
      </nav>
    </>
  );
};

export default Navbar;
