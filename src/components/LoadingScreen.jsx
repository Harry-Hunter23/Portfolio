import React, { useEffect, useState } from "react";

const messages = [
  "Say hello to Shrihari👋",
  "Welcome",
  "स्वागत है",
  "સ્વાગત છે ",
  "ਸਵਾਗਤ ਹੈ",
  "வரவேற்பு ",
  "സ്വാഗതം",
  "ಸ್ವಾಗತ",
  "స్వాగతం",
  "ସ୍ଵାଗତମ୍",
  "স্বাগতম",
  "स्वागतम्",
  "स्वागत आहे",
];

const LoadingScreen = ({ onComplete }) => {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const firstMessageTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentMessage((prevMessage) => {
          if (prevMessage < messages.length - 1) {
            return prevMessage + 1;
          } else {
            clearInterval(interval);
            onComplete();
            return prevMessage;
          }
        });
      }, 200); // Change message every 800 milliseconds after the first message

      return () => clearInterval(interval);
    }, 350); // First message stays for 200 milliseconds

    return () => clearTimeout(firstMessageTimeout);
  }, [onComplete]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-black via-gray-800 to-black">
      <div className="p-8 rounded-lg text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          {messages[currentMessage]}
        </h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
