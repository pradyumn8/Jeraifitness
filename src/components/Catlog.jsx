import React from 'react';
import { assets } from '../assets/assets';

const Catlog = () => {
    return (
        <div className="w-full px-6 py-10 flex flex-col lg:flex-row items-center justify-between bg-neutral-900 dark:bg-zinc-900">

            {/* Left Section */}
   <div className="lg:w-1/2 w-full mb-8 px-4 lg:px-20 lg:mb-0 text-center lg:text-left">
  <img
    src={assets.logo}
    alt="Logo"
    className="w-42 mx-auto lg:mx-0 mb-6"
  />

  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white dark:text-gray-200 mb-4 w-full lg:w-[70%] mx-auto lg:mx-0 leading-normal">
    Commitment <br />
    Our <br />
    Promise
  </h1>

  <button className="bg-white text-red-600  text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 transition hover:bg-black hover:text-white dark:bg-gray-300 dark:text-black dark:hover:bg-black dark:hover:text-white uppercase font-bold cursor-pointer">
    E - CATALOG
  </button>
</div>


            {/* Right Section */}
<div className="lg:w-1/2 w-full flex justify-center overflow-hidden">
  <img
    src={assets.catalogImage}
    alt="Catalog"
    className="w-full h-[400px] lg:h-[550px] object-cover scale-125 translate-y-10 transition-transform duration-500"
  />
</div>

        </div>
    );
};

export default Catlog;
