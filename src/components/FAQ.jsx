import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question:
        "If you are a Bachelor's in Agriculture student, why did you choose to go into software engineering?",
      answer:
        "It was really about my interest in startups, investment, crypto, and AI. The tech world is constantly evolving, and I wanted to be at the forefront of innovation. Learning software engineering gave me the ability to build and experiment with new ideas. Many great people have pivoted from different backgrounds—Jeff Bezos started in finance before founding Amazon, Brian Acton was rejected by Facebook before co-founding WhatsApp, and even Phil Knight, the co-founder of Nike, was an accountant before diving into the sneaker business. Passion finds its way!",
    },
    {
      question:
        "How does your background in agriculture help in software development?",
      answer:
        "Oh, it doesn't! Unless debugging code is somehow related to actual bugs in the field. Honestly, I was never interested in agriculture—I just happened to study it. But hey, if I can grow crops, I can definitely grow a startup! At least in tech, my code doesn’t depend on the weather (most of the time).",
    },
    {
      question: "What excites you the most about technology?",
      answer:
        "The ability to create something from scratch that can impact millions of people. AI, blockchain, and automation are reshaping industries, and I love being part of that transformation.",
    },
    {
      question:
        "How do you balance your interest in startups and tech development?",
      answer:
        "I follow a structured learning approach while staying updated on market trends. I spend time coding, researching business strategies, and engaging with startup communities to stay well-rounded.",
    },
    {
      question: "What technologies are you currently focused on?",
      answer:
        "I’m primarily focused on JavaScript, React, AI tools, and blockchain development. These technologies align well with my interests in AI, automation, and decentralized applications.",
    },
    {
      question: "How do you see AI shaping the future of startups?",
      answer:
        "AI is making businesses more efficient by automating processes, improving decision-making, and enabling personalized user experiences. Startups leveraging AI have a competitive edge in today's market.",
    },
    {
      question:
        "What advice would you give to someone from a non-tech background looking to get into software?",
      answer:
        "Start with problem-solving and logic-building. Learn one language deeply, work on real projects, and engage in communities that align with your interests. Passion and consistency matter more than a formal CS degree.",
    },
  ];

  return (
    <div className="bg-transparent p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index} className="mb-4 border-b border-gray-700 pb-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left text-xl font-semibold flex justify-between items-center py-2"
            >
              {faq.question}
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.span>
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-white p-2">{faq.answer}</p>
            </motion.div>
          </li>
        ))}
      </ul>

      {/* 🔥 Rickroll Button at the Bottom */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
        >
          Don't Click Me Please😭😭🙏🙏
        </button>
      </div>

      {/* 😈 Modal for Double Trolling */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
          onClick={() => setIsModalOpen(false)} // Close modal when clicking outside
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 p-6 rounded-lg shadow-lg text-center max-w-sm relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <h2 className="text-white text-2xl font-bold mb-4">
              I Dare You Not to Click Here
            </h2>
            <p className="text-gray-300 mb-6">Don't click Please😭😭🙏🙏</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0",
                    "_blank"
                  )
                }
                className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
              >
                I want to Click
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default FAQ;
