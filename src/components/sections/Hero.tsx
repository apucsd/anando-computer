import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const slides = [
  { title: "ভ্রমণ ও ভিসা সেবা", description: "বিশ্বস্ত টিকেট, ভিসা এবং ওয়ার্ক পারমিট সহায়তা", url: "/hero/vid1.mp4" },
  { title: "পাসপোর্ট, ভোটার ও নিবন্ধন সেবা", description: "ই-পাসপোর্ট, ভোটার আইডি ও জন্ম নিবন্ধন সহজে", url: "/hero/vid2.mp4" },
  { title: "অন্যান্য সরকারি সেবা", description: "পুলিশ ক্লিয়ারেন্স, লাইসেন্স, TIN/VAT, জমির খাজনা", url: "/hero/nid.webp" },
  { title: "শিক্ষা ও চাকরি সেবা", description: "ভর্তি, চাকরির আবেদন ও সিভি প্রস্তুতি", url: "/hero/app.jpg" },
];

const HeroSwiper = () => {
  const swiperRef = useRef<any>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [hoverSide, setHoverSide] = useState<'left' | 'right' | null>(null);

  return (
    <div 
      className="relative w-full h-[50vh] lg:h-[calc(100vh-109px)] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setHoverSide(null);
      }}
      onMouseMove={(e) => {
        if (!isHovered) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        const threshold = 0.25; // 25% from each side
        
        if (x < width * threshold) {
          setHoverSide('left');
        } else if (x > width * (1 - threshold)) {
          setHoverSide('right');
        } else {
          setHoverSide(null);
        }
      }}
    >
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          renderBullet: (_index, className) =>
            `<span class="${className} w-10 h-1 bg-white !rounded-none opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"></span>`,
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            {slide.url.endsWith(".mp4") ? (
              <video
                src={slide.url}
                autoPlay
                muted
                playsInline
                loop
                className="w-full h-full object-cover pointer-events-none"
              />
            ) : (
              <img
                src={slide.url}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-white text-lg sm:text-xl md:text-2xl max-w-2xl">
                {slide.description}
              </p>
            </div>
          </SwiperSlide>
        ))}

        {/* Pagination */}
        <div className="swiper-pagination !bottom-8 !right-8 !left-auto !w-auto flex flex-row gap-2" />

        {/* Custom Navigation Buttons */}
        <div 
          className={`custom-prev absolute text-white left-4 top-1/2 z-50 -translate-y-1/2 cursor-pointer select-none transition-all duration-300 ${
            hoverSide === 'left' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <SlArrowLeft className='h-12 w-12' />
        </div>
        <div 
          className={`custom-next absolute text-white right-4 top-1/2 z-50 -translate-y-1/2 cursor-pointer select-none transition-all duration-300 ${
            hoverSide === 'right' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <SlArrowRight className='h-12 w-12 ' />
        </div>
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
