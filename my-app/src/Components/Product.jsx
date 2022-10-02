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


const Product = () => {
  return (
    <div className='Product'>
      <a><img src='https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_3_DESK.jpg'/></a>
      <div className='Product_Child'>
      <Swiper className='Product_Swiper'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={6}
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
      </div>
    </div>
  )
}

export default Product;