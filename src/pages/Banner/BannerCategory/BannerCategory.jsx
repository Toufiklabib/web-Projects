import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import slide1 from '../../../assets/Images/menu Item/mixed vegetable.jpg'
import slide2 from '../../../assets/Images/menu Item/chicken curry.jpg'
import slide3 from '../../../assets/Images/menu Item/fish curry.jpg'
import slide4 from '../../../assets/Images/menu Item/Morog Polao@2x.jpg'
import slide5 from '../../../assets/Images/menu Item/Khicuri@2x.jpg'

import { FreeMode, Pagination } from 'swiper/modules';
import SectionTitle1 from '../../../SharePages/SectionHeading/SectionTitle1';
const BannerCategory = () => {
    return (
       <section>
        <div>
       <SectionTitle1 heading={'From 7.00 am to 9.00 pm'} subheading={'---ORDER ITEM---'} ></SectionTitle1>
        </div>
        <div>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-24  py-3 "
      >
        <SwiperSlide>
            <img className='rounded-xl' src={slide1} alt="" />
          
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-xl' src={slide2} alt="" />
        </SwiperSlide>
        
        <SwiperSlide>
            <img className='rounded-xl' src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-xl' src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-xl' src={slide5} alt="" />
        </SwiperSlide>
        
      </Swiper>
        </div>
       </section>
    );
};

export default BannerCategory;