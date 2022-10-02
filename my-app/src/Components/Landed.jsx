import React from 'react';
import Land from "./land.json";
import { TbDiscount2 } from 'react-icons/tb';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Landed = () => {
  return (
    <div className='Landed'>
      <a><img src='https://logan.nnnow.com/content/dam/nnnow-project/16-march-2022/justlanded.jpg'/></a>
      <div className='Landed_Child'>
      <Swiper className='Landed_Swiper'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')} 
      >
      {
        Land && Land.map(land => {
          return(
          <SwiperSlide key={land.id} className="Landed_Slider">
            <img src={land.img1} alt="Error"/>
            <h4><TbDiscount2 /> {land.heading}</h4>
            <h4>{land.title}</h4>
            <p>{land.desc}</p>
            <h5>Rs. {land.price}</h5>
            <p>{land.offer}</p>
          </SwiperSlide>
          )
        })
      }
      </Swiper>
      <a><img src='https://logan.nnnow.com/content/dam/nnnow-project/22-sep-2022/MAC_Video_SS.jpg'/></a>
      </div>
    </div>
  )
}

export default Landed;