import React from "react";
import Section from "../ui/SectionTitle";
import { testimonials } from "../../data";
import { Quote, Star, MapPin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials: React.FC = () => {
  return (
    <>
      <Section
        title="কাস্টমারের মতামত"
        subtitle="আমাদের সেবা নিয়ে কাস্টমাররা কী বলেন"
      />
      <section
        id="testimonials"
        className="h-screen bg-gray-50 flex items-center justify-center"
      >
        <div className="container mx-auto px-4 w-full max-w-7xl">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{
              clickable: true,
              el: ".testimonial-pagination",
              bulletClass: "testimonial-bullet",
              bulletActiveClass: "testimonial-bullet-active",
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-2xl p-8 h-full border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  {/* Decorative background pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                    <Quote size={80} className="text-blue-600" />
                  </div>

                  {/* Rating stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-gray-700 leading-relaxed mb-6 min-h-[100px] relative z-10">
                    "{testimonial.testimonial}"
                  </p>

                  {/* Author info */}
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-blue-200 shadow-md">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Online indicator */}
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-lg">
                        {testimonial.name}
                      </h4>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <span>{testimonial.position}</span>
                        <span>•</span>
                        <span>{testimonial.company}</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating elements for visual appeal */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-50 rounded-full animate-pulse delay-1000"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination */}
          <div className="testimonial-pagination flex justify-center gap-2 mt-8"></div>

          {/* Additional CTA */}
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-100 rounded-full text-blue-600 font-medium hover:bg-blue-200 transition-colors duration-200 cursor-pointer"
            >
              <MapPin size={18} />
              <span>আমাদের দোকানে আসুন আরও বিস্তারিত জানতে</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
