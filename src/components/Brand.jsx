import React from 'react';
import { assets } from '../assets/assets';

const Brand = () => {
  return (
    <div className="w-full bg-black px-0 py-0 flex flex-col lg:flex-row gap-6 lg:gap-0">
      
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <img
          src={assets.magzine}
          alt="Precision Crafted"
          className="w-full h-full object-cover shadow-md"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-2/3 flex items-center justify-center bg-black px-6 py-12">
        <div className="max-w-2xl pl-2 pr-4">
          <h2 className="text-2xl sm:text-3xl md:text-xl font-bold text-white mb-4 uppercase">
            The Brand
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-6 font-light text-white">
            Improving personality, strengthening the core, and achieving quality results is the commitment we renew every day with conviction. Our equipment is distinguished by contemporary design, enhanced by high-end training techniques, and inspired by the essential elegance of shapes. We combine aesthetics and ergonomics to strike the ideal balance between purpose and style of the modern fitness mantra.
          </p>
           <button className="bg-white text-red-600 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 transition hover:bg-black hover:text-white dark:bg-gray-300 dark:text-black dark:hover:bg-black dark:hover:text-white uppercase font-semibold cursor-pointer">
          Know More
        </button>
        </div>
      </div>

    </div>
  );
};

export default Brand;
