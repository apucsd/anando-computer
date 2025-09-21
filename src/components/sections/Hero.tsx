import { useState } from "react";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      titleBn: "আনন্দ কম্পিউটার এন্ড এয়ার ট্রাভেলস",
      titleEn: "Anondo Computer & Air Travels",
      categoryBn: "ভ্রমণ ও ভিসা সেবা",
      categoryEn: "Travel & Visa Services",
      icon: "✈️",
      services: [
        {
          icon: "🎫",
          titleBn: "বিমানের টিকেট বুকিং",
          titleEn: "Air Ticket Booking - সব এয়ারলাইন্স",
        },
        {
          icon: "🇮🇳",
          titleBn: "ইন্ডিয়ান ভিসা আবেদন",
          titleEn: "Indian Visa Application - দ্রুত প্রক্রিয়া",
        },
        {
          icon: "🌍",
          titleBn: "আন্তর্জাতিক ভিসা চেক",
          titleEn: "সৌদি, দুবাই, কাতার, মালয়েশিয়া ও অন্যান্য",
        },
      ],
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df", // airplane photo
    },
    {
      id: 1,
      titleBn: "আনন্দ কম্পিউটার এন্ড এয়ার ট্রাভেলস",
      titleEn: "Anondo Computer & Air Travels",
      categoryBn: "পাসপোর্ট ও সরকারি সেবা",
      categoryEn: "Passport & Government Services",
      icon: "📘",
      services: [
        {
          icon: "📖",
          titleBn: "ই-পাসপোর্ট আবেদন",
          titleEn: "e-Passport Application - সহজ প্রক্রিয়া",
        },
        {
          icon: "🆔",
          titleBn: "ভোটার আইডি ও জন্ম নিবন্ধন",
          titleEn: "NID Card & Birth Certificate",
        },
        {
          icon: "🚗",
          titleBn: "ড্রাইভিং লাইসেন্স",
          titleEn: "Driving License - নতুন ও নবায়ন",
        },
      ],
      image: "https://images.unsplash.com/photo-1601987077407-9b1dbd1dbf11", // passport photo
    },
    {
      id: 2,
      titleBn: "আনন্দ কম্পিউটার এন্ড এয়ার ট্রাভেলস",
      titleEn: "Anondo Computer & Air Travels",
      categoryBn: "শিক্ষা ও চাকরির সেবা",
      categoryEn: "Education & Job Services",
      icon: "🎓",
      services: [
        {
          icon: "🏫",
          titleBn: "স্কুল/কলেজ/বিশ্ববিদ্যালয় ভর্তি",
          titleEn: "Admission Support - সব ধরনের প্রতিষ্ঠান",
        },
        {
          icon: "💼",
          titleBn: "চাকরির আবেদন",
          titleEn: "Government & Private Job Applications",
        },
        {
          icon: "📄",
          titleBn: "ইউরোপিয়ান সিভি তৈরি",
          titleEn: "Professional CV & Biodata Creation",
        },
      ],
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b", // education photo
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative min-h-screen bg-pattern overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
            currentSlide === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
            <div className="z-10 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-3 bengali-font">
                {slide.titleBn}
              </h1>
              <h2 className="text-xl lg:text-3xl font-semibold text-yellow-300 mb-4">
                {slide.titleEn}
              </h2>

              <div className="bg-white/90 p-6 rounded-2xl shadow-md mb-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{slide.icon}</span>
                  <div>
                    <h3 className="text-blue-800 text-xl font-bold mb-1 bengali-font">
                      {slide.categoryBn}
                    </h3>
                    <h4 className="text-lg font-semibold text-orange-500">
                      {slide.categoryEn}
                    </h4>
                  </div>
                </div>
                <div className="space-y-2">
                  {slide.services.map((service, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <span>{service.icon}</span>
                      <div>
                        <span className="block bengali-font font-medium text-gray-800">
                          {service.titleBn}
                        </span>
                        <span className="text-sm text-gray-600">
                          {service.titleEn}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-6 py-3 rounded-full text-white font-bold bg-orange-500 hover:bg-orange-600 transition">
                  📞 এখনই যোগাযোগ করুন
                </button>
                <button className="px-6 py-3 rounded-full text-white bg-white/20 border hover:bg-white/30 transition">
                  📍 Office Visit
                </button>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <img
                src={slide.image}
                alt={slide.categoryEn}
                className="rounded-2xl shadow-lg w-[400px] h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-4 h-4 rounded-full transition ${
              currentSlide === i ? "bg-yellow-400 scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
