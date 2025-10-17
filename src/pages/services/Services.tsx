import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import ServiceCard from '../../components/ui/ServiceCard';
import PageHeader from '../../components/ui/PageHeader';
import { useGetServicesQuery } from '../../redux/feature/all-api/allApi';
import { TService } from '../../redux/feature/all-api/type';



const AllServices: React.FC = () => {
    const { data: services } = useGetServicesQuery([])
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <PageHeader title="আমাদের সকল সেবা" subTitle="আপনার সকল প্রয়োজনের জন্য আমরা বিশ্বস্ত, দ্রুত এবং প্রফেশনাল সেবা প্রদান করি।
              আমাদের এক্সপার্ট টিম আপনাকে সেরা সমাধান দিতে প্রস্তুত।" />

    

 
      <div className="container mx-auto px-4 py-12">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services?.map((service :TService) => (
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