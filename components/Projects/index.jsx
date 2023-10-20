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
import { useThemeContext } from '@/hooks/useThemeContext';

export const Projects = () => {
  const { setSelectedProject } = useThemeContext();

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
          onSlideChange={(swiper) => setSelectedProject(swiper.activeIndex)}
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
