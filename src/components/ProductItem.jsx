import React from 'react'
import { assets } from '../assets/assets'

const ProductItem = () => {
    return (<div className="text-center my-20 bg-white dark:bg-black py-10 px-4">
  <h1 className="text-red-600 dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
    Jerai Fitness Best Gym Equipments <br />Brand in India
  </h1>

  <p className="text-black dark:text-gray-200 font-medium text-sm sm:text-base md:text-xl mb-4 tracking-wide uppercase">
    EXPLORE OUR LATEST RANGE OF WORLD CLASS INNOVATIVE EQUIPMENT
  </p>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:bg-red-500 hover:text-white cursor-pointer">
                        <img src={assets.PTS}
                            alt="Home Range"
                            className="w-full h-[250px] object-cover sm:h-[200px] lg:h-[250px]"
                        />
                        <div className="p-4 flex flex-col items-center text-center">
                            <h3 className="text-xl font-bold mb-2">HOME RANGE</h3>
                            <p className="text-sm mb-4">Your workout buddy at home</p>
                            <button className="bg-white text-black text-[14px] px-6 py-3 rounded transition hover:bg-black hover:text-white dark:bg-black dark:hover:text-white">
                                Know More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:bg-red-500 hover:text-white cursor-pointer">
                        <img src={assets.Treaadmills}
                            alt="Home Range"
                            className="w-full h-[250px] object-cover sm:h-[200px] lg:h-[250px]"
                        />
                        <div className="p-4 flex flex-col items-center text-center">
                            <h3 className="text-xl font-bold mb-2">HOME RANGE</h3>
                            <p className="text-sm mb-4">Your workout buddy at home</p>
                            <button className="bg-white text-black text-[14px] px-6 py-3 rounded transition hover:bg-black hover:text-white dark:bg-black dark:hover:text-white">
                                Know More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:bg-red-500 hover:text-white cursor-pointer">
                        <img src={assets.Delt}
                            alt="Home Range"
                            className="w-full h-[250px] object-cover sm:h-[200px] lg:h-[250px]"
                        />
                        <div className="p-4 flex flex-col items-center text-center">
                            <h3 className="text-xl font-bold mb-2">HOME RANGE</h3>
                            <p className="text-sm mb-4">Your workout buddy at home</p>
                            <button className="bg-white text-black text-[14px] px-6 py-3 rounded transition hover:bg-black hover:text-white dark:bg-black dark:hover:text-white">
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