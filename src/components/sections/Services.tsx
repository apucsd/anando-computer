import { 
  Plane, 
  FileText, 
  GraduationCap, 
  Shield, 

  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Plane className="w-8 h-8 text-primary-600" />,
      title: "ভ্রমণ ও ভিসা সেবা",
      titleEn: "Travel & Visa Services",
      items: [
        "বিমানের টিকেট",
        "ইন্ডিয়ান ভিসা আবেদন",
        "ভিসা চেক (সৌদি, দুবাই, কাতার, সিঙ্গাপুর, মালয়েশিয়া, কুয়েত, ওমান, বাহরাইন, তুরস্ক ইত্যাদি)",
        "ওয়ার্ক পারমিট চেক"
      ]
    },
    {
      icon: <FileText className="w-8 h-8 text-primary-600" />,
      title: "পাসপোর্ট, ভোটার ও নিবন্ধন সেবা",
      titleEn: "Passport, Voter & Registration Services",
      items: [
        "ই-পাসপোর্ট আবেদন",
        "নতুন ভোটার আইডি ও সংশোধন",
        "জন্ম নিবন্ধন ও সংশোধন"
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-600" />,
      title: "অন্যান্য সরকারি সেবা",
      titleEn: "Other Government Services",
      items: [
        "পুলিশ ক্লিয়ারেন্স",
        "ড্রাইভিং লাইসেন্স",
        "TIN, VAT/BIN রেজিস্ট্রেশন, অনলাইন চালান",
        "জমির খাজনা, রেলওয়ে টিকেট",
        "ফার্মাসিস্ট/ইলেকট্রিক লাইসেন্স আবেদন"
      ]
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-primary-600" />,
      title: "শিক্ষা ও চাকরি সেবা",
      titleEn: "Education & Job Services",
      items: [
        "স্কুল/কলেজ/বিশ্ববিদ্যালয় ভর্তি",
        "সরকারি-বেসরকারি চাকরির আবেদন",
        "ইউরোপিয়ান সিভি/বায়োডাটা তৈরি ও ছবি তোলা"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 bengali">আমাদের সেবাসমূহ</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto bengali">
            আমরা আপনার সকল প্রয়োজনের জন্য বিশ্বস্ত ও দ্রুত সেবা প্রদান করি
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 bengali mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500">{service.titleEn}</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 bengali">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-primary-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4 bengali">আজই যোগাযোগ করুন!</h3>
          <p className="text-lg mb-6 bengali">আপনার প্রয়োজনীয় সেবার জন্য আমাদের সাথে কথা বলুন</p>
          <a href="#contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center gap-2">
            <span className="bengali">যোগাযোগ করুন</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;