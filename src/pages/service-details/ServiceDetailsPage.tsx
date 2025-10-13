import { Link } from "react-router-dom";
import ServiceCard from "../../components/ui/ServiceCard";
import { PiCheckLight } from "react-icons/pi";
import { Phone, Mail, MapPin } from "lucide-react";

const ServiceDetailsPage = () => {
    // Static service content (no dynamic params or data fetch)
    const service = {
        title: "ভ্রমণ ও ভিসা সেবা",
        titleEn: "Travel & Visa Services",
        description:
            "আমরা আপনার ভ্রমণ ও ভিসা সংক্রান্ত সকল সেবা বিশ্বস্তভাবে ও দ্রুততার সাথে দিয়ে থাকি। অভিজ্ঞ টিম আপনার প্রয়োজন বুঝে সেরা সমাধান দেয়।",
        image:
            "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?auto=format&fit=crop&w=1170&q=80",
        items: [
            "বিমানের টিকেট বুকিং",
            "ইন্ডিয়ান ভিসা আবেদন",
            "ভিসা স্ট্যাটাস চেক",
            "ওয়ার্ক পারমিট ভেরিফিকেশন",
        ],
    };

    const related = [
        {
            title: "পাসপোর্ট, ভোটার ও নিবন্ধন",
            titleEn: "Passport, Voter & Registration",
            description: "পাসপোর্ট আবেদন, ভোটার আইডি, জন্ম নিবন্ধন—সবকিছুর জন্য একসাথে সাপোর্ট।",
            image:
                "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1170&q=80",
            items: ["ই-পাসপোর্ট", "ভোটার আইডি", "জন্ম নিবন্ধন"],
        },
        {
            title: "সরকারি সেবা",
            titleEn: "Government Services",
            description: "পুলিশ ক্লিয়ারেন্স, ড্রাইভিং লাইসেন্স, TIN, VAT/BIN ইত্যাদি সেবা।",
            image:
                "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1170&q=80",
            items: ["পুলিশ ক্লিয়ারেন্স", "ড্রাইভিং লাইসেন্স"],
        },
        {
            title: "শিক্ষা ও চাকরি",
            titleEn: "Education & Jobs",
            description: "ভর্তি সহায়তা, চাকরির আবেদন এবং প্রফেশনাল সিভি তৈরি।",
            image:
                "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1170&q=80",
            items: ["ভর্তি", "চাকরির আবেদন", "সিভি তৈরি"],
        },
        {
            title: "ডকুমেন্ট সার্ভিস",
            titleEn: "Document Services",
            description: "অনুবাদ, নোটারি, অ্যাটেস্টেশন ইত্যাদি ডকুমেন্ট সংক্রান্ত সেবা।",
            image:
                "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1170&q=80",
            items: ["অনুবাদ", "নোটারি", "অ্যাটেস্টেশন"],
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <div className="bg-white border-b">
                <div className="container mx-auto px-4 py-4 text-sm">
                    <nav className="text-gray-600">
                        <Link to="/" className="hover:text-primary">হোম</Link>
                        <span className="mx-2">/</span>
                        <Link to="/services" className="hover:text-primary">সেবা</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900">{service.title}</span>
                    </nav>
                </div>
            </div>

            {/* Hero */}
            <div className="relative bg-gray-900">
                <img src={service.image} alt={service.title} className="w-full h-[300px] md:h-[420px] object-cover opacity-80" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">{service.title}</h1>
                        <p className="max-w-2xl text-blue-100 text-lg">{service.description}</p>
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
                            {service.items.map((item: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <PiCheckLight className="w-6 h-6 text-primary mt-0.5" />
                                    <span className="bengali">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="bg-primary text-white rounded-xl p-8 mt-8">
                        <h3 className="text-2xl font-semibold mb-3">এই সেবা নিতে আগ্রহী?</h3>
                        <p className="text-blue-100 mb-6">আমাদের সাথে যোগাযোগ করুন। আমরা দ্রুততম সময়ে সহায়তা করবো।</p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a href="tel:+8801234567890" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                                <Phone className="w-5 h-5" /> ফোন করুন
                            </a>
                            <a href="mailto:info@anandocomputer.com" className="inline-flex items-center gap-2 bg-primary-700/30 border border-white/40 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700/50">
                                <Mail className="w-5 h-5" /> ইমেইল করুন
                            </a>
                            <a href="#contact" className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary">
                                <MapPin className="w-5 h-5" /> অফিসে আসুন
                            </a>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border p-6">
                        <h3 className="text-lg font-semibold mb-4">সারাংশ</h3>
                        <div className="space-y-2 text-gray-700">
                            <div className="flex items-center gap-2">
                                <span className="text-gray-500">শ্রেণি:</span>
                                <span className="font-medium">{service.titleEn}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-500">আইটেম সংখ্যা:</span>
                                <span className="font-medium">{service.items.length}</span>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

            {/* Related */}
            <div className="container mx-auto px-4 pb-16">
                <h3 className="text-xl font-semibold mb-6">সম্পর্কিত সেবা</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {related.map((s, i) => (
                        <Link key={i} to="/services">
                            <ServiceCard service={s as any} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsPage;