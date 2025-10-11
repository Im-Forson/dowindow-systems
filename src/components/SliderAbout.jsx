import { useState, useEffect } from "react";

const messages = [
  "We are experts in aluminium windows and doors.",
  "We install quality products that last.",
  "We deliver exceptional finishing every time.",
];

export default function SliderAbout() {
  const [index, setIndex] = useState(0);

  // Auto-change text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center items-center py-16 bg-white">
      <h2
        key={index}
        className="about-slide-text text-shadow-sm text-lg md:text-4xl text-center text-[brown] font-semibold transition-all duration-700 ease-in-out animate-fadeIn"
      >
        {messages[index]}
      </h2>
    </div>
  );
}
