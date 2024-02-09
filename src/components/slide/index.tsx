import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import '../slide/Slide.css';

import CardsInfo from 'data/cardsInfo.json'


export default function Slide () {
    
    return (
        <>
            <Swiper 
                className={'mySwiper'}
                modules={[Navigation, Pagination, A11y]} 
                slidesPerView={1}
                spaceBetween={16}
                navigation={true} 
                loop={true}
                pagination={{ clickable: true }}
            >
                {CardsInfo.map((Card) => (
                    <SwiperSlide key={Card.title}>
                        
                    </SwiperSlide>
                ))}
                
            </Swiper>
        </>
    );
}