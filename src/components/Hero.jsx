import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';
import assetImg1 from '../assets/1.avif';
import assetImg2 from '../assets/2.avif';
import assetImg5 from '../assets/5.avif';
import assetImg6 from '../assets/6.avif';
import assetImg8 from '../assets/8.avif';
import assetImg9 from '../assets/9.avif';
import assetImg10 from '../assets/10.avif';



// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="relative">
            <img src={assetImg10} alt="" className="w-full h-auto" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40 dark:bg-black/60">
              <h1 className="text-white text-6xl font-bold mb-2 dark:text-white">Proton</h1>
              <p className="text-white font-semibold  text-xl mb-4 dark:text-white uppercase">New Era Of Luxury Fitness</p>

              <button className="bg-white text-black text-[14px] px-6 py-3 transition hover:bg-black dark:hover:text-white dark:bg-black hover:text-white uppercase font-semibold cursor-pointer">
                Know More
              </button>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={assetImg9} alt="" className="w-full h-auto" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40 dark:bg-black/60">
 <h1 className="text-white text-6xl font-bold mb-2 dark:text-white">CARDIO</h1>
              <p className="text-white font-semibold  text-xl mb-4 dark:text-white uppercase">Chase your goals with our wide range of cardiovascular equipment</p>

              <button className="bg-white text-black text-[14px] px-6 py-3 transition hover:bg-black dark:hover:text-white dark:bg-black hover:text-white cursor-pointer">
                Know More
              </button>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={assetImg2} alt="" className="w-full h-auto" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40 dark:bg-black/60">
 <h1 className="text-white text-6xl font-bold mb-2 dark:text-white">clubline plus</h1>
              <p className="text-white font-semibold  text-xl mb-4 dark:text-white uppercase">Build your physique with our premium selectorized units</p>

              <button className="bg-white text-black text-[14px] px-6 py-3 transition hover:bg-black dark:hover:text-white dark:bg-black hover:text-white cursor-pointer">
                Know More
              </button>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={assetImg5} alt="" className="w-full h-auto" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40 dark:bg-black/60">
 <h1 className="text-white text-6xl font-bold mb-2 dark:text-white">New clubline</h1>
              <p className="text-white font-semibold  text-xl mb-4 dark:text-white uppercase">Discover the joy of training with our commercial range of selectorized units</p>

              <button className="bg-white text-black text-[14px] px-6 py-3 transition hover:bg-black dark:hover:text-white dark:bg-black hover:text-white cursor-pointer">
                Know More
              </button>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={assetImg6} alt="" className="w-full h-auto" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40 dark:bg-black/60">
 <h1 className="text-white text-6xl font-bold mb-2 dark:text-white">FALCON</h1>
              <p className="text-white font-semibold  text-xl mb-4 dark:text-white uppercase">Transform your physique with our Falcon series equipment</p>

              <button className="bg-white text-black text-[14px] px-6 py-3 transition hover:bg-black dark:hover:text-white dark:bg-black hover:text-white cursor-pointer">
                Know More
              </button>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={assetImg5} alt="" className="w-full h-auto" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40 dark:bg-black/60">
 <h1 className="text-white text-6xl font-bold mb-2 dark:text-white">LOAD ON</h1>
              <p className="text-white font-semibold  text-xl mb-4 dark:text-white uppercase">Plate loading premium machineS</p>

              <button className="bg-white text-black text-[14px] px-6 py-3 transition hover:bg-black dark:hover:text-white dark:bg-black hover:text-white cursor-pointer">
                Know More
              </button>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={assetImg1} alt="" className="w-full h-auto" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40 dark:bg-black/60">
 <h1 className="text-white text-6xl font-bold mb-2 dark:text-white">BENCHES & RACKS</h1>
              <p className="text-white font-semibold  text-xl mb-4 dark:text-white uppercase">ERGONOMICALLY BUILT TO PERFECTION</p>

              <button className="bg-white text-black text-[14px] px-6 py-3 transition hover:bg-black dark:hover:text-white dark:bg-black hover:text-white cursor-pointer">
                Know More
              </button>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={assetImg5} alt="" className="w-full h-auto" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40 dark:bg-black/60">
 <h1 className="text-white text-6xl font-bold mb-2 dark:text-white">home range</h1>
              <p className="text-white font-semibold  text-xl mb-4 dark:text-white uppercase">Bring fitness home</p>

              <button className="bg-white text-black text-[14px] px-6 py-3 transition hover:bg-black dark:hover:text-white dark:bg-black hover:text-white cursor-pointer">
                Know More
              </button>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={assetImg8} alt="" className="w-full h-auto" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40 dark:bg-black/60">
 <h1 className="text-white text-6xl font-bold mb-2 dark:text-white">ACCESSORIES</h1>
              <p className="text-white font-semibold  text-xl mb-4 dark:text-white uppercase">Enhance your workout</p>

              <button className="bg-white text-black text-[14px] px-6 py-3 transition hover:bg-black dark:hover:text-white dark:bg-black hover:text-white cursor-pointer">
                Know More
              </button>
            </div>
          </div>

        </SwiperSlide>
      </Swiper>
    </>
  );
}
