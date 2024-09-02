"use client";

import React from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

function Realisation() {
  return (
    <div id="Realisation">
      <h1 className="title">
        Quelques un de nos realisations ...<span></span>
      </h1>
      <div className="container">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        breakpoints={{
          0:{
            slidesPerView:1,
          },
          767:{
            slidesPerView: 2,
          },
          1024:{
            slidesPerView: 3,
          }
        }}
        navigation
        Autoplay={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="cardContainer"
      >
        <SwiperSlide className="card">Project 1</SwiperSlide>
        <SwiperSlide className="card">Project 2</SwiperSlide>
        <SwiperSlide className="card">Project 3</SwiperSlide>
        <SwiperSlide className="card">Project 4</SwiperSlide>
        <SwiperSlide className="card">Project 4</SwiperSlide>
        <SwiperSlide className="card">Project 4</SwiperSlide>
        <SwiperSlide className="card">Project 4</SwiperSlide>
        ...
      </Swiper>
      </div>
      
    </div>
  );
}

export default Realisation;
