import { 
  Plane, 
  FileText, 
  GraduationCap, 
  Shield, 
} from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { PiArrowRightLight, PiCheckLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Plane className="w-8 h-8 text-primary-600" />,
      title: "ভ্রমণ ও ভিসা সেবা",
      titleEn: "Travel & Visa Services",
      description: "আমরা আপনার ভ্রমণ ও ভিসা সেবা প্রদান করি আপনার সকল প্রয়োজনের জন্য বিশ্বস্ত ও দ্রুত সেবা প্রদান করি ",
      items: ["বিমানের টিকেট", "ইন্ডিয়ান ভিসা আবেদন", "ভিসা চেক", "ওয়ার্ক পারমিট চেক"],
      image: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      icon: <FileText className="w-8 h-8 text-primary-600" />,
      title: "পাসপোর্ট, ভোটার ও নিবন্ধন সেবা",
      titleEn: "Passport, Voter & Registration Services",
      description: "আমরা আপনার পাসপোর্ট, ভোটার ও নিবন্ধন সেবা প্রদান করি আপনার সকল প্রয়োজনের জন্য বিশ্বস্ত ও দ্রুত সেবা প্রদান করি ",
      items: ["ই-পাসপোর্ট আবেদন", "ভোটার আইডি", "জন্ম নিবন্ধন"],
      image: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-600" />,
      title: "অন্যান্য সরকারি সেবা",
      titleEn: "Other Government Services",
      description: "আমরা আপনার অন্যান্য সরকারি সেবা প্রদান করি আপনার সকল প্রয়োজনের জন্য বিশ্বস্ত ও দ্রুত সেবা প্রদান করি ",
      items: ["পুলিশ ক্লিয়ারেন্স", "ড্রাইভিং লাইসেন্স", "TIN, VAT/BIN", "জমির খাজনা"],
      image: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-primary-600" />,
      title: "শিক্ষা ও চাকরি সেবা",
      titleEn: "Education & Job Services",
      description: "আমরা আপনার শিক্ষা ও চাকরি সেবা প্রদান করি আপনার সকল প্রয়োজনের জন্য বিশ্বস্ত ও দ্রুত সেবা প্রদান করি ",
      items: ["ভর্তি", "চাকরির আবেদন", "সিভি তৈরি"],
      image: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    }
  ];

  return (
    <section id="services" className="bg-gray-50 py-16">
      <SectionTitle title="আমাদের সেবাসমূহ" subtitle="আমরা আপনার সকল প্রয়োজনের জন্য বিশ্বস্ত ও দ্রুত সেবা প্রদান করি" />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative group bg-white  overflow-hidden cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
             <div className="relative z-10 transition-opacity duration-300 group-hover:opacity-0 rounded-t-md">
             <img src={service.image} alt={service.title} className="w-full h-[200px] object-cover rounded-t-md" />
             </div>

             <div className="p-6">
              <h3 className="text-xl font-medium mb-2 text-primary">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 text-gray-600">
                {service.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <PiCheckLight className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
              {/* Hover Overlay with Description */}
              <div className="absolute inset-0 flex flex-col   items-center justify-center text-center px-6 bg-primary text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-lg leading-relaxed bengali">{service.description}</p>
                <div>
                  <button className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center gap-2">
                    <span className="bengali">বিস্তার করুন</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end items-center">
          <Link to="/services">
          <button className="flex items-center hover:underline gap-2 group text-primary"> আরও দেখুন <PiArrowRightLight size={20} className="group-hover:rotate-45  transition-transform" /></button>
          </Link>
        </div>

      
      </div>
    </section>
  );
};

export default Services;
