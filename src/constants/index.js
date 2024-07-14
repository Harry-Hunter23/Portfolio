import project1 from "../assets/projects/blabberbot.png";
import project2 from "../assets/projects/Pacman.png";

import project4 from "../assets/projects/bloggscrern.png";

export const HERO_CONTENT = `I am a self-taught MERN stack developer passionate about learning new technologies and collaborating with teams. With expertise in MongoDB, Express.js, React, and Node.js, I build scalable web applications. I excel in user authentication, routing, and creating intuitive UIs. Committed to delivering high-quality web solutions, I stay updated with industry trends to ensure my work is always cutting-edge.`;

export const ABOUT_TEXT = `I am a 22-year-old self-taught MERN stack developer with a Bachelor of Science degree in agriculture. Hailing from Wardha, Maharashtra, I have developed a passion for building user interfaces that are both functional and visually appealing. Over the course of my journey, I have successfully completed more than 10 full-stack projects, honing my skills in creating seamless and efficient web applications.

In addition to my technical expertise, I am proficient in English, Hindi, and Marathi, which enables me to communicate effectively with a diverse range of people. My background in agriculture, combined with my dedication to technology, gives me a unique perspective and a versatile approach to problem-solving. I am always eager to learn and take on new challenges, striving to deliver the best solutions in every project I undertake..`;

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
    liveDemo: "https://example.com/pacman-demo",
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
];

export const CONTACT = {
  address: "Rich Residency,Borgaon Meghe,Wardha-442001 Maharashtra ",
  phoneNo: "+91 8830984614",
  email: "deshmukhshrihari46@gmail.com",
};
