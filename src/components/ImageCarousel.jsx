// src/components/ImageCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// In your ImageCarousel.jsx or in your main CSS file
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Add this line

// No need to import modules like Autoplay, Navigation, Pagination

const ImageCarousel = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://images.bewakoof.com/uploads/grid/app/1x1-hc-pick-3-common-1-1732257983.jpg",
      alt: "Slide 1",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/4456815/pexels-photo-4456815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Slide 2",
    },
    {
      id: 3,
      image: "/assets/carousel/slide3.jpg",
      alt: "Slide 3",
    },
    // Add more slides as needed
  ];

  return (
    <div className="image-carousel">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={false}
        autoplay={true} // Simplify autoplay
        navigation
        pagination={{ clickable: true }}
        className="h-96"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
