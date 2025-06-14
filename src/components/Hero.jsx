import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// Importing all images
import { assets } from '../assets/assets';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="relative">
            <img src={assets.assetImg10} alt="assetImg10" className="w-full h-[50vh] object-cover" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40 dark:bg-black/60">
              <h1 className="text-white text-3xl dark:text-sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 dark:text-gray-200">
                Proton
              </h1>

              <p className="text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl mb-4 dark:text-gray-200 uppercase ">
                New Era Of Luxury Fitness
              </p>

              <button className="bg-white text-black text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 transition hover:bg-black dark:hover:text-black
              dark:hover:bg-white dark:bg-black dark:text-white hover:text-white uppercase font-semibold cursor-pointer">
                Know More
              </button>
            </div>

          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={assets.assetImg9} alt="" className="w-full h-[50vh] object-cover" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40 dark:bg-black/60">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 dark:text-white">CARDIO</h1>
              <p className="text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl mb-4 dark:text-white uppercase">Chase your goals with our wide range of cardiovascular equipment</p>

              <button className="bg-white text-black text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 transition hover:bg-black dark:hover:text-white dark:bg-black hover:text-white uppercase font-semibold cursor-pointer">
                Know More
              </button>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={assets.assetImg2} alt="" className="w-full h-[50vh] object-cover" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40 dark:bg-black/60">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 dark:text-white">clubline plus</h1>
              <p className="text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl mb-4 dark:text-white uppercase">Build your physique with our premium selectorized units</p>

              <button className="bg-white text-black text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 transition hover:bg-black dark:hover:text-white dark:bg-black hover:text-white uppercase font-semibold cursor-pointer">
                Know More
              </button>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={assets.assetImg5} alt="" className="w-full h-[50vh] object-cover" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40 dark:bg-black/60">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 dark:text-white">New clubline</h1>
              <p className="text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl mb-4 dark:text-white uppercase">Discover the joy of training with our commercial range of selectorized units</p>

              <button className="bg-white text-black text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 transition hover:bg-black dark:hover:text-white dark:bg-black hover:text-white uppercase font-semibold cursor-pointer">
                Know More
              </button>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={assets.assetImg6} alt="" className="w-full h-[50vh] object-cover" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40 dark:bg-black/60">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 dark:text-white">FALCON</h1>
              <p className="text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl mb-4 dark:text-white uppercase">Transform your physique with our Falcon series equipment</p>

              <button className="bg-white text-black text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 transition hover:bg-black dark:hover:text-white dark:bg-black hover:text-white uppercase font-semibold cursor-pointer">
                Know More
              </button>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={assets.assetImg5} alt="" className="w-full h-[50vh] object-cover" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40 dark:bg-black/60">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 dark:text-white">LOAD ON</h1>
              <p className="text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl mb-4 dark:text-white uppercase">Plate loading premium machineS</p>

              <button className="bg-white text-black text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 transition hover:bg-black dark:hover:text-white dark:bg-black hover:text-white uppercase font-semibold cursor-pointer">
                Know More
              </button>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={assets.assetImg1} alt="" className="w-full h-[50vh] object-cover" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40 dark:bg-black/60">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 dark:text-white">BENCHES & RACKS</h1>
              <p className="text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl mb-4 dark:text-white uppercase">ERGONOMICALLY BUILT TO PERFECTION</p>

              <button className="bg-white text-black text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 transition hover:bg-black dark:hover:text-white dark:bg-black hover:text-white uppercase font-semibold cursor-pointer">
                Know More
              </button>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={assets.assetImg8} alt="" className="w-full h-[50vh] object-cover" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40 dark:bg-black/60">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 dark:text-white">home range</h1>
              <p className="text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl mb-4 dark:text-white uppercase">Bring fitness home</p>

              <button className="bg-white text-black text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 transition hover:bg-black dark:hover:text-white dark:bg-black hover:text-white uppercase font-semibold cursor-pointer">
                Know More
              </button>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={assets.assetImg6} alt="" className="w-full h-[50vh] object-cover" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40 dark:bg-black/60">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 dark:text-white">ACCESSORIES</h1>
              <p className="text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl mb-4 dark:text-white uppercase">Enhance your workout</p>

              <button className="bg-white text-black text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 transition hover:bg-black dark:hover:text-white dark:bg-black hover:text-white uppercase font-semibold cursor-pointer">
                Know More
              </button>
            </div>
          </div>

        </SwiperSlide>
      </Swiper>
    </>
  );
}
