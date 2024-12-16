"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import HomePostCard from "../components/HomePostCard";
import { Autoplay } from "swiper/modules";

type CarouselType = {
  slides: any[];
};

const Carousel: React.FC<CarouselType> = (props) => {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1}
        speed={800}
        autoplay={{
          delay: 3000,
        }}
        direction="vertical"
        loop
        modules={[Autoplay]}
        style={{
          maxWidth: "1376px",
          maxHeight: "calc(100vh - 216px)",
        }}
      >
        {props.slides.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              <HomePostCard
                id={slide.id}
                title={slide.title}
                projectPeriod={slide.projectPeriod}
                tags={slide.tags}
                carouselDescription={slide.carouselDescription}
                carouselImageUrl={slide.carouselImage.url}
                postUri={slide.postUri}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
