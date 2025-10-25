import { Link, useParams } from "react-router-dom";
import { PiCheckLight } from "react-icons/pi";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  useGetServiceByIdQuery,
  useGetServicesQuery,
} from "../../redux/feature/all-api/allApi";
import ServiceCard from "../../components/ui/ServiceCard";
import { TService } from "../../redux/feature/all-api/type";

const ServiceDetailsPage = () => {
  const { id } = useParams();
  const { data: service } = useGetServiceByIdQuery(id!, {
    skip: !id,
  });
  const { data: services } = useGetServicesQuery([]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 text-sm">
          <nav className="text-gray-600">
            <Link to="/" className="hover:text-primary">
              হোম
            </Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-primary">
              সেবা
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{service?.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="relative bg-gray-900">
        <img
          src={service?.image}
          alt={service?.title}
          className="w-full h-[300px] md:h-[420px] object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
              {service?.title}
            </h1>
            <p className="max-w-2xl text-blue-100 text-lg">
              {service?.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border p-6 md:p-8">
            <h2 className="text-xl font-semibold mb-4">সেবার বৈশিষ্ট্য</h2>
            <ul className="space-y-3 text-gray-700">
              {service?.features?.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <PiCheckLight className="w-6 h-6 text-primary mt-0.5" />
                  <span className="">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* html content */}
          <div className="container mx-auto px-4 py-12">
            <div dangerouslySetInnerHTML={{ __html: service?.content }} />
          </div>

          {/* CTA */}
          <div className="bg-primary text-white rounded-xl p-8 mt-8">
            <h3 className="text-2xl font-semibold mb-3">
              এই সেবা নিতে আগ্রহী?
            </h3>
            <p className="text-blue-100 mb-6">
              আমাদের সাথে যোগাযোগ করুন। আমরা দ্রুততম সময়ে সহায়তা করবো।
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+8801234567890"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
              >
                <Phone className="w-5 h-5" /> ফোন করুন
              </a>
              <a
                href="mailto:info@anandocomputer.com"
                className="inline-flex items-center gap-2 bg-primary-700/30 border border-white/40 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700/50"
              >
                <Mail className="w-5 h-5" /> ইমেইল করুন
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary"
              >
                <MapPin className="w-5 h-5" /> দোকানে আসুন
              </a>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold mb-4">সারাংশ</h3>
            <div className="space-y-2 text-gray-700">
              <p>{service?.description}</p>
            </div>
          </div>
        </aside>
      </div>

      {/* Related */}
      <div className="container mx-auto px-4 pb-16">
        <h3 className="text-xl font-semibold mb-6">সম্পর্কিত সেবা</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services?.slice(0, 4).map((service: TService) => (
            <ServiceCard service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
