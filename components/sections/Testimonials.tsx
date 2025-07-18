"use client";

import Section from "../UI/Section";
import Testimonial from "../UI/Testimonial";
import { testimonials } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <Section className="py-10">
      <div className="text-center mb-10">
        <h2>Real Stories. Real Change.</h2>
        <p className="section-intro">
          These creatives used to feel stuck. Now they're finally in control of
          their money.
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="testimonials-swiper !pb-10"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <Testimonial {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

export default Testimonials;
