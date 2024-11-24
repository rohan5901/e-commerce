// src/components/TestCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

const TestCarousel = () => {
  return (
    <Swiper autoplay={true} className="h-96">
      <SwiperSlide>
        <div className="w-full h-full bg-red-500">Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-full bg-green-500">Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-full bg-blue-500">Slide 3</div>
      </SwiperSlide>
    </Swiper>
  );
};

export default TestCarousel;
