import React, { useState } from 'react';
import { Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('আপনার বার্তা পাঠানো হয়েছে! আমরা শীঘ্রই যোগাযোগ করব।');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 bengali">যোগাযোগ করুন</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto bengali">
            আপনার প্রয়োজনীয় সেবার জন্য আমাদের সাথে যোগাযোগ করুন। আমরা সর্বদা আপনার সেবায় প্রস্তুত।
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 bengali">যোগাযোগের তথ্য</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1 bengali">ফোন নম্বর</h4>
                  <p className="text-primary-600 font-semibold text-lg">01755-965524</p>
                  <p className="text-gray-600 text-sm bengali">যেকোনো সময় কল করুন</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1 bengali">ঠিকানা</h4>
                  <p className="text-gray-600 bengali">
                    নাসির সুপার মার্কেট, টাঙ্গাইল রোড,<br />
                    চান্দনা চৌরাস্তা, গাজীপুর সিটি কর্পোরেশন,<br />
                    গাজীপুর
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1 bengali">কার্যসময়</h4>
                  <p className="text-gray-600 bengali">
                    সকাল ৯:০০ - রাত ৮:০০<br />
                    সপ্তাহের ৭ দিন খোলা
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="mt-8 bg-primary-600 rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4 bengali">দ্রুত যোগাযোগ</h4>
              <p className="mb-4 bengali">জরুরি সেবার জন্য সরাসরি কল করুন:</p>
              <a 
                href="tel:01755965524" 
                className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>01755-965524</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 bengali">বার্তা পাঠান</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2 bengali">নাম *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="আপনার নাম লিখুন"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2 bengali">ফোন নম্বর *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="০১৭xxxxxxxx"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">ইমেইল</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2 bengali">প্রয়োজনীয় সেবা</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="" className="bengali">সেবা নির্বাচন করুন</option>
                  <option value="flight" className="bengali">বিমানের টিকেট</option>
                  <option value="visa" className="bengali">ভিসা সেবা</option>
                  <option value="passport" className="bengali">পাসপোর্ট সেবা</option>
                  <option value="voter" className="bengali">ভোটার আইডি</option>
                  <option value="birth" className="bengali">জন্ম নিবন্ধন</option>
                  <option value="police" className="bengali">পুলিশ ক্লিয়ারেন্স</option>
                  <option value="driving" className="bengali">ড্রাইভিং লাইসেন্স</option>
                  <option value="education" className="bengali">শিক্ষা সেবা</option>
                  <option value="other" className="bengali">অন্যান্য</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2 bengali">বার্তা</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="আপনার প্রয়োজন সম্পর্কে বিস্তারিত লিখুন..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary justify-center"
              >
                <Send className="w-5 h-5" />
                <span className="bengali">বার্তা পাঠান</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;