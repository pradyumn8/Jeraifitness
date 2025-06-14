import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { assets } from '../assets/assets';

const images = [assets.Group4, assets.Group1, assets.Group2, assets.Group3];

const ImageGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openViewer = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeViewer = () => {
    setIsOpen(false);
  };

  const prevImage = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const nextImage = () => {
    if (currentIndex < images.length - 1) setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className="py-10 px-4 bg-white dark:bg-black">
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[40%] mx-auto h-auto">
        <p className="text-center mb-8 text-gray-700 dark:text-gray-300 font-medium">
          We adhere to the safety standards of our Manufacturing units and set an example of being one of the best places to work with
          ISO 14001:2015,
          ISO 45001:201, and
          ISO 9001:2015 certifications under our belt.
        </p>
      </div>
      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-7xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full h-80 sm:h-96 flex items-center justify-center p-2"
          >
            <img
              src={img}
              alt={`Certificate ${index + 1}`}
              className="w-full h-full object-contain cursor-pointer"
              onClick={() => openViewer(index)}
            />
          </div>
        ))}
      </div>



      {/* Fullscreen Viewer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeViewer}
          >
            <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            className={`absolute left-4 text-white text-3xl ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}
            onClick={prevImage}
            disabled={currentIndex === 0}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Image Display */}
          <img
            src={images[currentIndex]}
            alt="Enlarged View"
            className="max-w-full max-h-[80vh] rounded shadow-lg"
          />

          {/* Right Arrow */}
          <button
            className={`absolute right-4 text-white text-3xl ${currentIndex === images.length - 1 ? 'opacity-30 cursor-not-allowed' : ''}`}
            onClick={nextImage}
            disabled={currentIndex === images.length - 1}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}
      <div className="bg-white dark:bg-black py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Image 1 with Overlay */}
          <div className="relative w-full h-64 sm:h-96 overflow-hidden">
            <img
              src={assets.events}
              alt="Event 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
              <div className="w-[25%] border-t-3 border-red-600 mb-6"></div>
              <h3 className="text-white text-lg sm:text-2xl font-semibold mb-2">
                NEWS & EVENTS
              </h3>
              <p className="text-gray-200 text-sm sm:text-base mb-4 max-w-xs sm:max-w-md font-light">
                With a vision of FIT INDIA, we help upcoming athletes grow on world stage
              </p>
              <button className="bg-white text-red-600 text-sm sm:text-base px-4 py-2 transition hover:bg-black hover:text-white dark:bg-red-600 dark:text-white dark:hover:bg-white dark:hover:text-red-600 uppercase font-semibold cursor-pointer">
                Know More
              </button>
            </div>
          </div>

          {/* Image 2 with Overlay */}
          <div className="relative w-full h-64 sm:h-96 overflow-hidden">
            <img
              src={assets.SQFT}
              alt="Event 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
              <div className="w-[25%] border-t-3 border-red-600 mb-6"></div>
              <h3 className="text-white text-lg sm:text-2xl font-semibold mb-2">
                Build Your Own Gym
              </h3>
              <p className="text-gray-200 text-sm sm:text-base mb-4 max-w-xs sm:max-w-md font-light">
                Based on your gym size and budget, view pre set gym packages designed by us to match your requirements.
              </p>
              <button className="bg-white text-red-600 text-sm sm:text-base px-4 py-2 transition hover:bg-black hover:text-white dark:bg-red-600 dark:text-white dark:hover:bg-white dark:hover:text-red-600 uppercase font-semibold cursor-pointer">
                Build now
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ImageGallery;
