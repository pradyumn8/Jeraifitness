import React from 'react'
import { assets } from '../assets/assets';


const MapLocation = () => {
  return (
<div className="w-full bg-white dark:bg-black py-12">
  {/* Heading */}
  <h1 className="text-3xl md:text-4xl font-bold text-center text-red-600 dark:text-white mb-8">
 The Growing Footprint
  </h1>

  {/* Full Width Image */}
  <img
    src={assets.Poster} // replace with your actual image import/path
    alt="Precision Crafted"
    className="w-full h-auto object-cover"
  />
</div>

  )
}

export default MapLocation