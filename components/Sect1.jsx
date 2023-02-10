import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import PostCard from './PostCard';

const Section1 = ({ data }) => {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

      {/* swiper */}
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {data.map((value, index) => (
          <SwiperSlide key={index}>
            <PostCard post={value} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Section1;
