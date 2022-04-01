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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide>
          <div className="container container-slide">
            <h1>Dezembro Promocional</h1>
            <p>Produtos selecionados com 33% de desconto</p>
            <button className="button-primario">Ver Consoles</button>
          </div>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="container container-slide">
            <h1>Dezembro Promocional</h1>
            <p>Produtos selecionados com 33% de desconto</p>
            <button className="button-primario">Ver Consoles</button>
          </div>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
         <div className="container container-slide">
            <h1>Dezembro Promocional</h1>
            <p>Produtos selecionados com 33% de desconto</p>
            <button className="button-primario">Ver Consoles</button>
          </div>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>


      </Swiper>
    
    
    
    
    </>
  )
}