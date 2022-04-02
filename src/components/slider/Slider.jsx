import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
/* import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; */

import Atropos from 'atropos/react';


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider(props) {
  return (
    <>
      
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 50000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide>
          <div className="gradiente-background"></div>
          <div className="container container-slide">
            <h1 className="titulo-h1 font-color-white">Dezembro Promocional</h1>
            <p className="subtitulo font-color-white">Produtos selecionados com 33% de desconto</p>
            <button className="button-primario">Ver Consoles</button>
          </div>
          <img src="/img/hero.jpg" />
        </SwiperSlide>

      </Swiper>
    
    
    
    
    </>
  )
}