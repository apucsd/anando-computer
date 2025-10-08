import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Filter,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { services } from '../../data';
import ServiceCard from '../../components/ui/ServiceCard';
import PageHeader from '../../components/ui/PageHeader';



const AllServices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

 

  const categories = [
    { id: 'all', name: 'সকল সেবা', nameEn: 'All Services' },
    { id: 'travel', name: 'ভ্রমণ ও ভিসা', nameEn: 'Travel & Visa' },
    { id: 'documents', name: 'পাসপোর্ট ও নিবন্ধন', nameEn: 'Passport & Registration' },
    { id: 'government', name: 'সরকারি সেবা', nameEn: 'Government Services' },
    { id: 'education', name: 'শিক্ষা ও চাকরি', nameEn: 'Education & Jobs' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <PageHeader title="আমাদের সকল সেবা" subTitle="আপনার সকল প্রয়োজনের জন্য আমরা বিশ্বস্ত, দ্রুত এবং প্রফেশনাল সেবা প্রদান করি।
              আমাদের এক্সপার্ট টিম আপনাকে সেরা সমাধান দিতে প্রস্তুত।" />

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


        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service) => (
           <ServiceCard service={service} />
          ))}
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
    </div>
  );
};

export default AllServices;