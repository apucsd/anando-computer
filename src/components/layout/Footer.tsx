import { Phone, MapPin, Clock, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-primary-600 p-2 rounded-full mr-3">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h3 className="text-xl font-bold bengali">আনন্দ কম্পিউটার এন্ড এয়ার ট্রাভেলস</h3>
              </div>
            </div>
            <p className=" mb-4 bengali">
              বিশ্বস্ত ও দ্রুত সেবার জন্য আমাদের উপর ভরসা করুন। 
              আমরা আপনার সকল ভ্রমণ ও সরকারি কাজের সমাধান দিয়ে থাকি।
            </p>
            <div className="flex space-x-4">
              <a href="#" className=" hover:text-primary-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="mailto:info@anondotravel.com" className=" hover:text-primary-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 bengali">আমাদের সেবাসমূহ</h4>
            <ul className="space-y-2 ">
              <li className="bengali">বিমানের টিকেট</li>
              <li className="bengali">ভিসা সেবা</li>
              <li className="bengali">পাসপোর্ট সেবা</li>
              <li className="bengali">ভোটার আইডি</li>
              <li className="bengali">জন্ম নিবন্ধন</li>
              <li className="bengali">পুলিশ ক্লিয়ারেন্স</li>
              <li className="bengali">ড্রাইভিং লাইসেন্স</li>
              <li className="bengali">শিক্ষা সেবা</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 bengali">যোগাযোগের তথ্য</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-primary-400 mr-3 mt-1" />
                <div>
                  <p className="font-semibold">01755-965524</p>
                  <p className=" text-sm bengali">যেকোনো সময় কল করুন</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-400 mr-3 mt-1" />
                <div>
                  <p className=" bengali">
                    নাসির সুপার মার্কেট, টাঙ্গাইল রোড,<br />
                    চান্দনা চৌরাস্তা, গাজীপুর
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-primary-400 mr-3 mt-1" />
                <div>
                  <p className=" bengali">
                    সকাল ৯:০০ এখানে রাত ১০:০০<br />
                    সপ্তাহের ৭ দিন
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white mt-8 pt-8 text-center">
          <p className=" bengali">
            © ২০২৫ আনন্দ কম্পিউটার এন্ড এয়ার ট্রাভেলস। সকল অধিকার সংরক্ষিত।
          </p>
          <p className="text-white text-sm mt-2">
            Anondo Computer & Air Travels - Your Trusted Service Provider
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;