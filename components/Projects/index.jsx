'use client';
import React from 'react';
// import Swiper core and required modules
import { Pagination, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Content } from './Content';
import { colorVariants, projects } from '@/constants';

export const Projects = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="w-[80vw] md:w-1/2">
        <Swiper
          modules={[Pagination, Keyboard]}
          keyboard={{
            enabled: true,
          }}
          spaceBetween={30}
          slidesPerView={1}
          grabCursor={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {projects.map(
            ({ name, techs, description, src, colorClass }, idx) => (
              <SwiperSlide key={name}>
                <Content
                  idx={idx}
                  name={name}
                  techs={techs}
                  description={description}
                  src={src}
                  textColor={colorVariants[colorClass].selected}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
};
