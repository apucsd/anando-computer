import SectionTitle from "../ui/SectionTitle";
import { PiArrowRightLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import ServiceCard from "../ui/ServiceCard";
// import { services } from '../../data';
import { useGetServicesQuery } from "../../redux/feature/all-api/allApi";
import { TService } from "../../redux/feature/all-api/type";

const Services = () => {
  const { data: services } = useGetServicesQuery([]);
  const isFeatured = services?.filter(
    (service: TService) => service.featured == "true"
  );

  return (
    <section id="services" className="bg-gray-50 py-16">
      <SectionTitle
        title="আমাদের সেবাসমূহ"
        subtitle="আমরা আপনার সকল প্রয়োজনের জন্য বিশ্বস্ত ও দ্রুত সেবা প্রদান করে থাকি"
      />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {isFeatured?.map((service: TService) => (
            <ServiceCard service={service} />
          ))}
        </div>
        <div className="flex justify-end items-center">
          <Link to="/services">
            <button className="flex items-center hover:underline gap-2 group text-primary">
              {" "}
              আরও দেখুন{" "}
              <PiArrowRightLight
                size={20}
                className="group-hover:rotate-45  transition-transform"
              />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
