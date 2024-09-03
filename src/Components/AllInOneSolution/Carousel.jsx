// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import Swiper required modules
import { Navigation, Pagination, Autoplay } from 'swiper';

const Carousel = () => {
  const slides = [
    { id: 1, imageUrl: 'https://yourimage1.jpg', title: 'Slide 1' },
    { id: 2, imageUrl: 'https://yourimage2.jpg', title: 'Slide 2' },
    { id: 3, imageUrl: 'https://yourimage3.jpg', title: 'Slide 3' },
  ];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      navigation
      modules={[Navigation, Pagination, Autoplay]} // Use the modules in the Swiper instance
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="flex flex-col items-center justify-center">
            <img src={slide.imageUrl} alt={slide.title} className="rounded-lg" />
            <h2 className="text-white text-2xl mt-5">{slide.title}</h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
