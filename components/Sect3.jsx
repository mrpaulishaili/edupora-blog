import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import PostCard from './PostCard';

const Sect3 = ({ data }) => {
  SwiperCore.use([Autoplay]);

  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: 'right',
  };

  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>

        <Swiper
          slidesPerView={1}
          // loop={true}
          // autoplay= {{
          //     delay: 2000
          // }}
        >
          {data.map((value, index) => (
            <SwiperSlide key={index}>
              <PostCard post={value} />
            </SwiperSlide>
          ))}
          ...
        </Swiper>
      </div>
    </section>
  );
};

export default Sect3;
