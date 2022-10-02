import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Slider = () => {
  return (
    <>
    <Swiper 
    className="Slider"
     // install Swiper modules
     modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >

    <SwiperSlide className="Swiper_slider">
      <img src='https://logan.nnnow.com/content/dam/nnnow-project/15-sep-2022/SC_TopBanner_Exclusivelyatsephoradesktop.jpg' alt='Error' />
    </SwiperSlide>
    <SwiperSlide className="Swiper_slider">
    <img src='https://logan.nnnow.com/content/dam/nnnow-project/20-sep-2022/Mac_Topbannerdesktop.jpg' alt='Error' />
    </SwiperSlide>
    <SwiperSlide className="Swiper_slider">
    <img src='https://logan.nnnow.com/content/dam/nnnow-project/26-aug-2022/se/TooFaced_TopBannerdesktop.jpg' alt='Error' />
    </SwiperSlide>
    <SwiperSlide className="Swiper_slider">
      <img src='https://logan.nnnow.com/content/dam/nnnow-project/15-sep-2022/Sephora_Homepagebanner_kajaldesktop.jpg' alt='Error' />
    </SwiperSlide>
    <SwiperSlide className="Swiper_slider">
    <img src='https://logan.nnnow.com/content/dam/nnnow-project/17-aug-2022/Benefit_Homepagebanner_Colordesktop.jpg' alt='Error' />
    </SwiperSlide>
    <SwiperSlide className="Swiper_slider">
    <img src='https://logan.nnnow.com/content/dam/nnnow-project/01-sep-2022/Sephora_TopBanner_PrepPlease_Desktop.jpg' alt='Error' />
    </SwiperSlide>
    </Swiper>
    </>
  )
}

export default Slider