import React from 'react'
import { assets } from '../assets/assets'

const CertificatePerfection = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-20 px-4">
      <div className="w-full max-w-4xl flex flex-col items-center">
        {/* Top Red Border */}
        <div className="w-1/4 sm:w-[10%] border-t-2 border-red-600 mb-6"></div>

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-800 dark:text-white">
          CERTIFICATION OF PERFECTION
        </h2>

        {/* Paragraph */}
        <p className="text-center text-gray-600 dark:text-gray-300 mt-2 font-light">
          With our Authentic Fitness Equipments and unique design we are proud to have esteemed certifications under our belt
          that proves our Quality and our keen sense of perfection proudly Made In India
        </p>

        {/* Icons */}
        <div className="w-full mt-8">
          <div className="grid grid-cols-3 dark:bg-gray-800 sm:grid-cols-5 gap-6 place-items-center">
            <img src={assets.seeklogo} alt="Icon 1" className="w-20 h-20 object-contain" />
            <img src={assets.isologo} alt="Icon 2" className="w-20 h-20 object-contain" />
            <img src={assets.iso} alt="Icon 3" className="w-20 h-20 object-contain" />
            <img src={assets.Euro} alt="Icon 4" className="w-20 h-20 object-contain" />
            <img src={assets.rohslogo} alt="Icon 5" className="w-20 h-20 object-contain" />
          </div>

          <div className="mt-8 flex justify-center items-center">
            <img
              src={assets.tiger}
              alt="Tiger Certification"
              className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CertificatePerfection
