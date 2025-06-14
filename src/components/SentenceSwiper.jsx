// SentenceSwiper.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/autoplay'
import { Autoplay, FreeMode } from 'swiper/modules'

const SentenceSwiper = () => {
  const sentences = [
    "Transform your fitness journey today.",
    "Push your limits and achieve more.",
    "Your workout buddy at home.",
    "Train smart, live strong.",
    "Unleash the athlete within you."
  ]

  return (
    <div className="w-full overflow-hidden bg-black py-3">
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView="auto"
        spaceBetween={50}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        className="flex items-center"
      >
        {sentences.map((text, index) => (
          <SwiperSlide key={index} className="!w-auto text-white text-xl font-semibold">
            {text}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SentenceSwiper
