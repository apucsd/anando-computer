
import { useRef, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    title: "ভ্রমণ ও ভিসা সেবা",
    description: "বিশ্বস্ত টিকেট, ভিসা এবং ওয়ার্ক পারমিট সহায়তা",
    url: "/hero/vid1.mp4"
  },
  {
    title: "পাসপোর্ট, ভোটার ও নিবন্ধন সেবা",
    description: "ই-পাসপোর্ট, ভোটার আইডি ও জন্ম নিবন্ধন সহজে",
    url: "/hero/vid2.mp4",
  },
  {
    title: "অন্যান্য সরকারি সেবা",
    description: "পুলিশ ক্লিয়ারেন্স, লাইসেন্স, TIN/VAT, জমির খাজনা",
    url: "/hero/nid.webp",
  },
  {
    title: "শিক্ষা ও চাকরি সেবা",
    description: "ভর্তি, চাকরির আবেদন ও সিভি প্রস্তুতি",
    url: "/hero/app.jpg",
  },
];

const HeroSlider = () => {
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    // Force autoplay to start when component mounts
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  }, []);

  const settings = {
    ref: sliderRef,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Set to 5 seconds
    fade: true,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    waitForAnimate: false,
    cssEase: 'ease-in-out',
    afterChange: (current: number) => {
      // If current slide is a video, ensure autoplay continues
      if (slides[current]?.url.endsWith('.mp4') && sliderRef.current) {
        // Force restart autoplay to ensure smooth transition
        sliderRef.current.slickPause();
        setTimeout(() => {
          if (sliderRef.current) {
            sliderRef.current.slickPlay();
          }
        }, 10);
      }
    }
  };

  return (
    <div className="relative w-full h-[calc(100vh-109px)]">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-[calc(100vh-109px)]">
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
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
