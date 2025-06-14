import React from 'react'
import { assets } from '../assets/assets'

function Experience() {
  return (
<div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
  {/* Right Section: iPhone image shown first on mobile */}
  <div className="order-1 lg:order-2">
    <img src={assets.iPhone} alt="iPhone" className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full" />
  </div>

  {/* Left Section: Content */}
  <div className="order-2 lg:order-1">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white">
      Experience our world at your fingertips & elevate your fitness journey with the<br />
      <span className="text-red-600">Jerai Fitness mobile app!</span>
    </h2>

    <p className="text-gray-700 font-light dark:text-gray-300 mb-6">
      With the Jerai Fitness app, you can:
    </p>

    <ul className="space-y-4 mb-6">
      <li className="flex items-start gap-3">
        <img src={assets.gym} alt="icon" className="w-5 h-5 mt-1" />
        <span className="text-gray-800 font-light dark:text-gray-200">
          Access a library of our fitness equipment designed and manufactured in India
        </span>
      </li>
      <li className="flex items-start gap-3">
        <img src={assets.search} alt="icon" className="w-5 h-5 mt-1" />
        <span className="text-gray-800 font-light dark:text-gray-200">
          Explore a wide range of exercises with detailed instructions and videos
        </span>
      </li>
      <li className="flex items-start gap-3">
        <img src={assets.msg} alt="icon" className="w-5 h-5 mt-1" />
        <span className="text-gray-800 font-light dark:text-gray-200">
          Connect with our experts
        </span>
      </li>
    </ul>

    <div>
      <p className="text-black dark:text-white py-3 rounded-md hover:bg-red-700 hover:text-white transition font-light w-fit mb-1">
        Get the App
      </p>
      <div className="flex justify-center lg:justify-start gap-6 flex-nowrap">
        <img src={assets.Layer} alt="Play Store" className="w-40 h-auto rounded-md shadow-md" />
        <img src={assets.AppStore} alt="App Store" className="w-40 h-auto rounded-md shadow-md" />
      </div>
    </div>
  </div>
</div>

  )
}

export default Experience