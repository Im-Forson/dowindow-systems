import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import DoWindowIcon from "../assets/image-1.jpg"
import Image2 from "../assets/image-2.jpg"
import Image3 from "../assets/image-3.jpg"

export default function Slider() {
  const slides = [
    {
      image: Image2,
      title: "Welcome to DoWindow Systems",
      subtitle: "Quality aluminum and glass solutions",
    },
    {
      image: DoWindowIcon,
      title: "Modern Designs",
      subtitle: "Crafted to perfection for your projects",
    },
    {
      image: Image3,
      title: "Built to Last",
      subtitle: "Sleek, durable, and energy-efficient systems",
    },
  ];

  return (
    <div className="w-full h-[85vh]"> {/* mt-16 pushes below fixed navbar */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        pagination={{ clickable: true, }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/70 to-black/70 flex flex-col items-center justify-center text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-3 drop-shadow-lg">
                    {slide.title}
                    </h1>
                    <p className="text-lg md:text-2xl">{slide.subtitle}</p>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
