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
        <SwiperSlide><img src={assetImg10} alt="" />hekek</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
