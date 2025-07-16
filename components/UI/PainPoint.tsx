"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { PainPoints } from "@/constants";
import { ArrowRight } from "lucide-react";
import { useSwiper } from "swiper/react";

const NavigationArrow = () => {
  const swiper = useSwiper();
  return (
    <ArrowRight
      className="w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-900 transition-colors"
      onClick={() => swiper.slideNext()}
    />
  );
};

const PainPoint = () => {
  return (
    <div className="absolute bottom-2 right-2 w-[250px] sm:w-[300px] bg-white/40 backdrop-blur-sm rounded-lg px-6 py-4 shadow-lg">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full"
      >
        {PainPoints.map((point) => (
          <SwiperSlide key={point.id}>
            <div className="text-center">
              <div className="flex items-center space-x-2 mb-2">
                <img
                  src={point.img}
                  alt={point.author}
                  className="aspect-square w-6 sm:w-8 rounded-full"
                />
                <div className="text-left text-gray-900">
                  <p className="text-[8px] sm:text-[10px] font-semibold">
                    {point.author}
                  </p>
                  <p className="text-[6px] sm:text-[8px]">{point.role}</p>
                </div>
              </div>
              <div className="text-left flex flex-col gap-1">
                <p className="text-[10px] sm:text-xs font-semibold text-gray-900">
                  {point.title}
                </p>
                <p className="text-[8px] sm:text-[10px] text-gray-800">
                  {point.text}
                </p>
              </div>
              <div className="flex items-end justify-end mt-2">
                <NavigationArrow />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PainPoint;
