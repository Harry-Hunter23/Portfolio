import project1 from "../assets/projects/blabberbot.png";
import project2 from "../assets/projects/Pacman.png";
import landingpage from "../assets/projects/landing.png";
import project4 from "../assets/projects/bloggscrern.png";
import elsopro from "../assets/projects/elso.png";
import vertexgrid from "../assets/projects/vert.png";
import snapit from "../assets/projects/snap.png";
import abudhabi from "../assets/projects/abud.png";
export const HERO_CONTENT = `I am a self-taught MERN stack developer passionate about learning new technologies and collaborating with teams. With expertise in MongoDB, Express.js, React, and Node.js, I build scalable web applications. I excel in user authentication, routing, and creating intuitive UIs. Committed to delivering high-quality web solutions, I stay updated with industry trends to ensure my work is always cutting-edge.`;

export const ABOUT_TEXT = `I am a MERN stack developer with a Bachelor of Science degree in agriculture, hailing from Wardha, Maharashtra. With a passion for building functional and visually appealing user interfaces, I have successfully completed over 10 full-stack projects. My skills in creating seamless and efficient web applications are complemented by my proficiency in English, Hindi, and Marathi, enabling effective communication with diverse audiences. Known as a team player, quick learner, and adaptable problem solver, I bring a unique perspective and versatile approach to every challenge. I am always eager to learn and deliver the best solutions in every project.`;

export const PROJECTS = [
  {
    title: "BlabberBot",
    image: project1,
    description:
      "The User is able to use four functionalities: Text Summarization, Paragraph Generation, Chatbot, and Sci-Fi Image Creation",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "OpenAI API",
    ],
    liveDemo: "https://main--blabberbot.netlify.app",
    github: "https://github.com/Harry-Hunter23/BlabberBot",
  },
  {
    title: "Pacman",
    image: project2,
    description: "Basic Pacman game created using HTML, CSS, and JavaScript",
    technologies: ["HTML", "CSS", "JS"],
    liveDemo: "https://pacmanbasic.netlify.app/",
    github: "https://github.com/Harry-Hunter23/Pacman",
  },
  {
    title: "Blogg App",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, user authentication included",
    technologies: ["HTML", "CSS", "MongoDB", "Express", "React", "Material-UI"],
    liveDemo: "https://bloggy-x9yf.onrender.com",
    github: "https://github.com/Harry-Hunter23/Bloggy",
  },
  {
    title: "Snapit",
    image: snapit,
    description:
      "AI reminder application for the documents exclusively made for middle-east countries(details mentioned in CV)",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Material-UI",
      "TailwindCss",
      "Redux",
      "Redux-toolkit",
      "Thunk",
    ],
  },
  {
    title: "Blue Services",
    image: landingpage,
    description: "Landing page for a startup company",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Material-UI",
      "TailwindCss",
      "Framer Motion",
    ],
    liveDemo: "https://www.services.bluedigital.co.in/",
  },
  {
    title: "Elsopro.com",
    image: elsopro,
    description: "Landing page for a startup company",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Material-UI",
      "TailwindCss",
      "Framer Motion",
    ],
    liveDemo: "https://elsopro.com/",
  },
  {
    title: "VertexGrid Systems",
    image: vertexgrid,
    description: "Static website for a startup company",
    technologies: ["HTML", "CSS", "Bootstrap", "Javascript"],
    liveDemo: "http://vertexgridsystems.com/",
  },
  {
    title: "Abudhabi Sports Council Project(IN PROGRESS)",
    image: abudhabi,
    description:
      "A complex events booking application for the abudhabi sports council",
    technologies: [
      "React",
      "i18n",
      "Redux",
      "Redux-tookit",
      "TailwindCss",
      "framer-motion",
    ],
  },
];

export const CONTACT = {
  address: "Rich Residency, Borgaon Meghe, Wardha-442001, Maharashtra ",
  phoneNo: "+91 8830984614",
  email: "deshmukhshrihari46@gmail.com",
};
