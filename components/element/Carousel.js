/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper';

function Carousel({ imageSrcs = [] }) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        modules={[Autoplay, Pagination]}
      >
        {imageSrcs.map((src) => (
          <SwiperSlide key={src}>
            <img className="rounded-sm" src={src} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Carousel;
