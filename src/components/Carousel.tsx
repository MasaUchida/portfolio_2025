"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { PaginationOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/customPagination.css";
import HomePostCard from "./HomePostCard";

type CarouselType = {
  slides: any[];
};

const Carousel: React.FC<CarouselType> = (props) => {
  useEffect(() => {
    const paginationEl = document.querySelector(".custom-pagination");
    if (!paginationEl) {
      console.error("Custom pagination element not found");
    }
  }, []);

  const paginationSetting: PaginationOptions = {
    el: ".custom-pagination",
    type: "custom",
    clickable: true,
    renderCustom(swiper, current, total) {
      setTimeout(() => {
        const targetElements = document.querySelectorAll(".custom-bullet");
        targetElements.forEach((element, index) => {
          element.addEventListener("click", () => {
            swiper.slideTo(index);
          });
        });
      }, 0);

      return `
          ${Array.from({ length: total })
            .map((_, index) => {
              const isActive = current === index + 1 ? "active" : "";
              return `<button class="custom-bullet ${isActive}">${
                "0" + (index + 1)
              }</button>`;
            })
            .join("")}
        `;
    },
  };

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={64}
        slidesPerView={1}
        speed={800}
        autoplay={{ delay: 3000 }}
        direction="vertical"
        pagination={paginationSetting}
        loop
        modules={[Autoplay, Pagination]}
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
                carouselImageUrl={slide.carouselImage?.url}
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
