import { useState } from "react";
import {
  PiHouseSimpleLight,
  PiHandsPrayingLight,
  PiAirplaneTiltLight,
  PiInfoLight,
  PiBookOpenTextLight,
  PiImagesLight,
  PiQuestionLight,
  PiChatsCircleLight,
  PiPhoneThin,
  PiArrowBendRightDownLight,
  PiMapPin,
  PiShieldCheck,
  PiXLight,
  PiListLight,
  PiUserCheckLight,
} from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { useGetServicesQuery } from "../../redux/feature/all-api/allApi";
import { TService } from "../../redux/feature/all-api/type";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const location = useLocation();
  const {user} = useAppSelector((state)=>state.auth)


  const isActive = (path: string) => location.pathname === path;
  const {data: services} = useGetServicesQuery([])
    const isFeatured = services?.filter((service : TService) => service.featured == 'true')

  const navItems = [
    {
      path: "/",
      label: "হোম",
      icon: <PiHouseSimpleLight size={20} />,
    },
    {
      path: "/services",
      label: "সেবাসমূহ",
      icon: <PiHandsPrayingLight size={20} />,
      children: isFeatured?.map((service: TService) => ({
        path: `/services/${service?._id}`,
        label: service?.name,
        icon: <PiAirplaneTiltLight size={20} />,
      })) || [],
    },
    {
      path: "#",
      label: "আমাদের সম্পর্কে",
      icon: <PiInfoLight size={20} />,
      children: [
        {
          path: "/our-story",
          label: "আমাদের সম্পর্কে",
          icon: <PiBookOpenTextLight size={20} />,
        },
        // {
        //   path: "/about/our-team",
        //   label: "আমাদের টিম",
        //   icon: <PiUsersLight size={20} />,
        // },
        {
          path: "/our-gallery",
          label: "আমাদের গ্যালারি",
          icon: <PiImagesLight size={20} />,
        },
      ],
    },
    {
      path: "/faq",
      label: "FAQ",
      icon: <PiQuestionLight size={20} />,
    },
    {
      path: "/contact",
      label: "যোগাযোগ",
      icon: <PiChatsCircleLight size={20} />,
    },

    {
      path: user ? "/admin" : "/login",
      label: user ? "Admin" : "লগইন",
      icon: <PiUserCheckLight size={20} />,
    }
  ];

  return (
    <header
      className={` w-full z-50 bg-white transition-all duration-300`}
    >
      {/* Top Bar */}
      <div
        className={`text-gray-800 py-2 border-b border-gray-200`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-4 mb-2 sm:mb-0">
              <div className="flex items-center gap-1">
                <PiPhoneThin className="text-primary" size={20} />
                <span>
                  <a href="tel:01755965524">01755-965524</a>
                </span>
              </div>
              <div className="flex items-center gap-1">
                <PiMapPin className="text-primary" size={20} />
                <span>
                  <a href="https://maps.app.goo.gl/DMgLPuLhVUMwuQVMA" target="_blank" rel="noopener noreferrer">চান্দনা চৌরাস্তা, গাজীপুর</a>
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-center">
              <PiShieldCheck className="text-primary" size={20} />
              বিশ্বস্ত ও দ্রুত সেবা
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-primary p-3 rounded-full mr-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">ACA</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-medium text-primary">
                আনন্দ কম্পিউটার এন্ড এয়ার ট্রাভেলস
              </h1>
              <p className="text-sm text-gray-600">
                Anondo Computer & Air Travels
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2 relative">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.path)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`px-4 flex items-center gap-2 py-2 bengali transition-colors ${
                    isActive(item.path)
                      ? "text-primary font-semibold after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-primary"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {item.icon}
                  {item.label}
                  {item.children && <PiArrowBendRightDownLight size={20} />}
                </Link>

                {/* Dropdown Menu */}
                {item.children && openDropdown === item.path && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 top-full w-64 bg-white rounded-lg shadow-xl z-50"
                  >
                    {item.children.map((child: {
                      path: string;
                      label: string;
                      icon: React.ReactNode;
                    }) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={`px-4 py-2 flex items-center gap-2 text-sm bengali hover:text-primary transition-colors ${
                          isActive(child.path)
                            ? "bg-primary-50 text-primary font-medium"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {child.icon}
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <PiXLight className="w-6 h-6" />
            ) : (
              <PiListLight className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation (Slide In) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 p-6 md:hidden"
          >
            <button className="mb-6" onClick={() => setIsMenuOpen(false)}>
              <PiXLight className="w-6 h-6" />
            </button>
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    className={`px-4 py-2 flex items-center gap-2 rounded-md bengali ${
                      isActive(item.path)
                        ? "bg-primary text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                  {/* Show children inline */}
                  {item.children && (
                    <div className="ml-4 border-l pl-2 space-y-1 mt-1">
                      {item.children.map((child : {
                        path: string;
                        label: string;
                        icon: React.ReactNode;
                      }) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`px-3 flex items-center gap-2 py-1 text-sm bengali ${
                            isActive(child.path)
                              ? "text-primary font-medium"
                              : "text-gray-600 hover:text-primary"
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.icon}
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
