import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [countdown, setCountdown] = useState(null);
  const [showCountdown, setShowCountdown] = useState(false);

  useEffect(() => {
    // Reset when user returns to the page (after Rickroll)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        resetTroll(); // Reset everything when user comes back
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const resetTroll = () => {
    setIsModalOpen(false);
    setLoading(false);
    setProgress(0);
    setCountdown(null);
    setShowCountdown(false);
  };

  const handleRickroll = () => {
    setLoading(true);
    let fakeProgress = 0;

    // Fake progress bar
    const progressInterval = setInterval(() => {
      fakeProgress += Math.floor(Math.random() * 20) + 10;
      if (fakeProgress >= 100) {
        fakeProgress = 100;
        clearInterval(progressInterval);

        // Wait 1 sec after progress bar, then start countdown
        setTimeout(() => {
          setShowCountdown(true);
          startCountdown();
        }, 1000);
      }
      setProgress(fakeProgress);
    }, 700);
  };

  const startCountdown = () => {
    let count = 10;
    const countdownWords = [
      "👶10",
      "👩9",
      "👵8",
      "🟡🏏7",
      "6💃",
      "5🧛‍♀️",
      "Are😎",
      "You😁",
      "Ready😜",
      "For👌",
      "This?👊",
    ];

    const countdownInterval = setInterval(() => {
      setCountdown(countdownWords[10 - count]); // Show formatted countdown
      count--;

      if (count < 0) {
        clearInterval(countdownInterval);
        setTimeout(() => {
          window.open(
            "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0",
            "_blank"
          );
        }, 500); // Slight delay before rickroll
      }
    }, 1000);
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
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 p-6 rounded-lg shadow-lg text-center max-w-sm relative"
            onClick={(e) => e.stopPropagation()}
          >
            {!loading ? (
              <>
                <h2 className="text-white text-2xl font-bold mb-4">
                  I Dare You Not to Click Here
                </h2>
                <p className="text-gray-300 mb-6">Don't click Please😭😭🙏🙏</p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleRickroll}
                    className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    I want to Click
                  </button>
                </div>
              </>
            ) : (
              <>
                {!showCountdown ? (
                  <>
                    <h2 className="text-white text-2xl font-bold mb-4">
                      Processing request... 🥁
                    </h2>
                    <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.7 }}
                        className="bg-green-500 h-3"
                      ></motion.div>
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="text-white text-3xl font-bold mb-4">
                      {countdown}
                    </h2>
                  </>
                )}
              </>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default FAQ;
