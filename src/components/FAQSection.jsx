import React, { useState } from 'react';
import { assets } from '../assets/assets';

const faqData = [
  {
    question: "Which company is considered the leading gym equipment manufacturer in India?",
    answer:
      "At Jerai Fitness, we’re proud to be recognized as the leading gym equipment manufacturer in India. Our long-standing commitment to delivering high-quality fitness solutions has made us a trusted name among fitness enthusiasts and professionals alike. We strive to innovate and maintain excellence, positioning us as a frontrunner in the industry.",
  },
  {
    question: "What makes Jerai Fitness the leading fitness equipment manufacturer in India?",
    answer:
      "What sets Jerai Fitness apart is our unwavering dedication to quality and innovation. Every piece of Fitness equipment we produce is the result of meticulous engineering, designed to optimize your performance while ensuring safety. We offer a wide range of products that cater to various fitness needs, from home users to large commercial gyms, making us the preferred choice across the country.",
  },
  {
    question: "What range of gym equipment can you find at Jerai Fitness?",
    answer:
      "At Jerai Fitness, we offer an extensive selection of gym equipment. Whether you’re looking for state-of-the-art strength training machines, efficient cardio gear, versatile free weights, or multifunctional setups, we’ve got you covered. Our products are designed to meet the needs of both home and commercial gym environments.",
  },
  {
    question: "How does the quality of Jerai Fitness's gym equipment stack up against other brands?",
    answer:
      "At Jerai Fitness, quality is our hallmark. Our equipment is crafted with the finest materials and a keen focus on biomechanics, ensuring that each machine supports effective workouts and minimizes the risk of injury. Compared to other brands, our products consistently rank higher in durability, performance, and user satisfaction. We take pride in providing equipment that helps you achieve your fitness goals safely and efficiently.",
  },
  {
    question: "How can you purchase gym equipment from Jerai Fitness?",
    answer:
    "Purchasing from Jerai Fitness is simple and convenient. You can explore our extensive product range on our official website, where you can either request a quote or make an inquiry. We’re also here to guide you in selecting the right equipment, whether you’re setting up a small home gym or outfitting a large commercial facility."
},
];

const popularSearches = [
  "Best Gym Equipment",
  "Fitness Equipment Brand in India",
  "Gym Equipment Brand in India",
  "Gym Equipment Manufacturer in India",
  "Fitness Equipment Manufacturer in India",
  "Gym Equipment",
  "Fitness Equipment",
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="w-full mx-auto mt-10">
      <h1 className="text-3xl text-red-600 font-bold mb-15 text-center dark:text-red-400">FAQ</h1>

      {faqData.map((item, index) => (
        <div
          key={index}
          className="bg-[#f2f2f2] dark:bg-[#1e1e1e] max-w-4xl mx-auto mt-3"
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <h3 className="text-[17px] font-semibold text-black dark:text-white px-6 py-4">
              {item.question}
            </h3>
            <span className="p-1 w-10 h-10 flex items-center justify-center">
              <img
                src={openIndex === index ? assets.arrow_up : assets.arrow_down}
                alt="toggle icon"
              />
            </span>
          </div>

          {openIndex === index && (
            <div className="bg-white dark:bg-[#2a2a2a] mt-4 px-4 py-3 font-light text-gray-700 dark:text-gray-300 text-[15px] leading-[1.6]">
              {item.answer}
            </div>
          )}
        </div>
      ))}

      {/* Popular Searches */}
      <div className="w-[80%] mx-auto mt-6 text-center text-sm text-black dark:text-gray-500 font-light">
        <span className="text-black  dark:text-gray-500 font-light">Popular Searches :</span>{' '}
        {popularSearches.map((term, i) => (
          <span key={i}>
            {term}
            {i < popularSearches.length - 1 && ' | '}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
