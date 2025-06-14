import React from 'react'
import { assets } from '../assets/assets'

const ProductItem = () => {
    return (
    <div className="text-center my-20 bg-white dark:bg-black py-10 px-4">
  <h1 className="text-red-600 dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
    Jerai Fitness Best Gym Equipments <br />Brand in India
  </h1>

  <p className="text-black dark:text-gray-200 font-medium text-sm sm:text-base md:text-xl mb-4 tracking-wide uppercase">
    EXPLORE OUR LATEST RANGE OF WORLD CLASS INNOVATIVE EQUIPMENT
  </p>

<div className="max-w-7xl mx-auto px-4 py-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Card 1 */}
    <div className="bg-white rounded-none shadow-md overflow-hidden transition duration-300 hover:bg-red-600 hover:text-white cursor-pointer w-full h-auto group">
      <img
        src={assets.PTS}
        alt="Home Range"
        className="w-full object-contain h-[400px] lg:h-[350px] mt-5 p-9 transition duration-300"
      />
      <div className="p-4 flex flex-col items-center text-center justify-between group-hover:text-white">
        <div>
          <h3 className="text-xl font-bold mb-2">HOME RANGE</h3>
          <p className="text-sm mb-4">Your workout buddy at home</p>
        </div>
        <button className="bg-black text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 transition hover:bg-white hover:text-black dark:bg-gray-300 dark:text-black dark:hover:bg-black dark:hover:text-white uppercase font-semibold cursor-pointer">
          Know More
        </button>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-none shadow-md overflow-hidden transition duration-300 hover:bg-red-600 hover:text-white cursor-pointer w-full h-auto group">
      <img
  src={assets.Treapool}
        alt="Treadmills"
        className="w-full object-contain h-[400px] lg:h-[350px] mt-5 p-9 transition duration-300"
      />
      <div className="p-4 flex flex-col items-center text-center justify-between group-hover:text-white">
        <div>
          <h3 className="text-xl font-bold mb-2">TREADMILLS</h3>
          <p className="text-sm mb-4">Run your way to fitness</p>
        </div>
        <button className="bg-black text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 transition hover:bg-white hover:text-black dark:bg-gray-300 dark:text-black dark:hover:bg-black dark:hover:text-white uppercase font-semibold cursor-pointer">
          Know More
        </button>
      </div>
    </div>

    {/* card 3 */}
     <div className="bg-white rounded-none shadow-md overflow-hidden transition duration-300 hover:bg-red-600 hover:text-white cursor-pointer w-full h-auto group">
      <img
        src={assets.Delt}
        alt="Delt"
        className="w-full object-contain h-[400px] lg:h-[350px] mt-5 p-9 transition duration-300"
      />
      <div className="p-4 flex flex-col items-center text-center justify-between group-hover:text-white">
        <div>
          <h3 className="text-xl font-bold mb-2">DELT MACHINE</h3>
          <p className="text-sm mb-4"> Shape your shoulders perfectly</p>
        </div>
        <button className="bg-black text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 transition hover:bg-white hover:text-black dark:bg-gray-300 dark:text-black dark:hover:bg-black dark:hover:text-white uppercase font-semibold cursor-pointer">
          Know More
        </button>
      </div>
    </div>

  </div>
</div>

        </div>

    )
}

export default ProductItem