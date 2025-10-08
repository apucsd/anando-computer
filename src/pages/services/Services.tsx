import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Plane,
  FileText,
  GraduationCap,
  Shield,
  Search,
  Filter,
  Star,
  Clock,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { PiCheckLight, PiArrowRightLight } from 'react-icons/pi';

interface Service {
  icon: React.ReactNode;
  title: string;
  titleEn: string;
  description: string;
  items: string[];
  image: string;
  category: string;
  price?: string;
  duration?: string;
  featured?: boolean;
}

const AllServices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const services: Service[] = [
    {
      icon: <Plane className="w-8 h-8 text-blue-600" />,
      title: "ভ্রমণ ও ভিসা সেবা",
      titleEn: "Travel & Visa Services",
      description: "আমরা আপনার ভ্রমণ ও ভিসা সেবা প্রদান করি আপনার সকল প্রয়োজনের জন্য বিশ্বস্ত ও দ্রুত সেবা প্রদান করি",
      items: ["বিমানের টিকেট", "ইন্ডিয়ান ভিসা আবেদন", "ভিসা চেক", "ওয়ার্ক পারমিট চেক"],
      image: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "travel",
      price: "সার্ভিস অনুসারে",
      duration: "২-৩ দিন",
      featured: true
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "পাসপোর্ট, ভোটার ও নিবন্ধন সেবা",
      titleEn: "Passport, Voter & Registration Services",
      description: "আমরা আপনার পাসপোর্ট, ভোটার ও নিবন্ধন সেবা প্রদান করি আপনার সকল প্রয়োজনের জন্য বিশ্বস্ত ও দ্রুত সেবা প্রদান করি",
      items: ["ই-পাসপোর্ট আবেদন", "ভোটার আইডি", "জন্ম নিবন্ধন"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "documents",
      price: "সার্ভিস অনুসারে",
      duration: "৭-১৪ দিন",
      featured: true
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "অন্যান্য সরকারি সেবা",
      titleEn: "Other Government Services",
      description: "আমরা আপনার অন্যান্য সরকারি সেবা প্রদান করি আপনার সকল প্রয়োজনের জন্য বিশ্বস্ত ও দ্রুত সেবা প্রদান করি",
      items: ["পুলিশ ক্লিয়ারেন্স", "ড্রাইভিং লাইসেন্স", "TIN, VAT/BIN", "জমির খাজনা"],
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "government",
      price: "সার্ভিস অনুসারে",
      duration: "৩-৭ দিন",
      featured: false
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      title: "শিক্ষা ও চাকরি সেবা",
      titleEn: "Education & Job Services",
      description: "আমরা আপনার শিক্ষা ও চাকরি সেবা প্রদান করি আপনার সকল প্রয়োজনের জন্য বিশ্বস্ত ও দ্রুত সেবা প্রদান করি",
      items: ["ভর্তি", "চাকরির আবেদন", "সিভি তৈরি"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "education",
      price: "সার্ভিস অনুসারে",
      duration: "১-৫ দিন",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'সকল সেবা', nameEn: 'All Services' },
    { id: 'travel', name: 'ভ্রমণ ও ভিসা', nameEn: 'Travel & Visa' },
    { id: 'documents', name: 'পাসপোর্ট ও নিবন্ধন', nameEn: 'Passport & Registration' },
    { id: 'government', name: 'সরকারি সেবা', nameEn: 'Government Services' },
    { id: 'education', name: 'শিক্ষা ও চাকরি', nameEn: 'Education & Jobs' }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.titleEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    if (sortBy === 'featured') {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    }
    return a.title.localeCompare(b.title);
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary to-primary/70 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              আমাদের সকল সেবা
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              আপনার সকল প্রয়োজনের জন্য আমরা বিশ্বস্ত, দ্রুত এবং প্রফেশনাল সেবা প্রদান করি।
              আমাদের এক্সপার্ট টিম আপনাকে সেরা সমাধান দিতে প্রস্তুত।
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="সেবা খুঁজুন..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="featured">ফিচার্ড সেবা</option>
                <option value="name">নাম অনুসারে</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        {/* Results Info */}
        <div className="mb-8">
          <p className="text-gray-600">
            {sortedServices.length} টি সেবা পাওয়া গেছে
            {searchTerm && ` "${searchTerm}" এর জন্য`}
            {selectedCategory !== 'all' && ` ${categories.find(c => c.id === selectedCategory)?.name} ক্যাটাগরিতে`}
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Featured Badge */}
              {service.featured && (
                <div className="absolute top-4 right-4 z-20 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  ফিচার্ড
                </div>
              )}

              {/* Service Image */}
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Icon and Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500">{service.titleEn}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Service Items */}
                <div className="space-y-2 mb-4">
                  {service.items.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <PiCheckLight className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                  {service.items.length > 3 && (
                    <p className="text-sm text-blue-600">+ আরও {service.items.length - 3} টি সেবা</p>
                  )}
                </div>

                {/* Price and Duration */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="font-semibold text-blue-600">
                    {service.price}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2">
                    <span>বিস্তারিত দেখুন</span>
                    <PiArrowRightLight className="w-4 h-4" />
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
                    যোগাযোগ করুন
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {sortedServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">কোনো সেবা পাওয়া যায়নি</h3>
            <p className="text-gray-600">আপনার অনুসন্ধানের জন্য কোনো সেবা খুঁজে পাওয়া যায়নি। অন্য কীওয়ার্ড দিয়ে চেষ্টা করুন।</p>
          </motion.div>
        )}
      </div>

      {/* Contact CTA */}
      <div className="bg-primary text-white py-16 my-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">আপনার প্রয়োজনীয় সেবা খুঁজে পাননি?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              আমাদের সাথে যোগাযোগ করুন। আমরা আপনার সকল প্রয়োজনের জন্য কাস্টমাইজড সলিউশন প্রদান করি।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+8801234567890"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                ফোন করুন
              </a>
              <a
                href="mailto:info@anandocomputer.com"
                className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                ইমেইল করুন
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                <MapPin className="w-5 h-5" />
                অফিসে আসুন
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AllServices;