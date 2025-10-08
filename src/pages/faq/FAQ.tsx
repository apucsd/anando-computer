import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import PageHeader from '../../components/ui/PageHeader';
import CallToAction from '../../components/sections/CallToAction';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        onClick={onToggle}
        className="w-full py-6 text-left flex justify-between items-center hover:bg-primary/80 transition-colors duration-200 px-6"
      >
        <span className="text-lg font-medium  pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-primary" />
          ) : (
            <ChevronDown className="w-5 h-5 text-primary" />
          )}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <p className="text-gray-600  leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      category: "সাধারণ প্রশ্ন",
      categoryEn: "General Questions",
      items: [
        {
          question: "আনন্দো কম্পিউটার কী ধরনের সেবা প্রদান করে?",
          answer: "আনন্দো কম্পিউটার ভ্রমণ ও ভিসা সেবা, পাসপোর্ট ও নিবন্ধন সেবা, সরকারি সেবা এবং শিক্ষা ও চাকরি সংক্রান্ত সেবা প্রদান করে। আমরা আপনার সকল প্রয়োজনের জন্য বিশ্বস্ত এবং দ্রুত সেবা নিশ্চিত করি।"
        },
        {
          question: "সেবা পেতে কীভাবে যোগাযোগ করব?",
          answer: "আপনি আমাদের অফিসে সরাসরি যোগাযোগ করতে পারেন। আমাদের কন্টাক্ট পেজে বিস্তারিত তথ্য এবং অবস্থান পাবেন। আমরা ফোন এবং হোয়াটসঅ্যাপের মাধ্যমেও যোগাযোগ করি।"
        },
        {
          question: "সেবার জন্য কত সময় লাগে?",
          answer: "সেবার ধরন অনুসারে সময় ভিন্ন হয়। সাধারণত ভ্রমণ সেবা ২-৩ দিন, পাসপোর্ট সেবা ৭-১৪ দিন এবং অন্যান্য সরকারি সেবা ৩-৭ দিন সময় নেয়।"
        }
      ]
    },
    {
      category: "ভ্রমণ ও ভিসা সেবা",
      categoryEn: "Travel & Visa Services",
      items: [
        {
          question: "কোন দেশের ভিসা সেবা পাওয়া যায়?",
          answer: "আমরা প্রধানত ভারতীয় ভিসা সেবা প্রদান করি। অন্যান্য দেশের ভিসা সেবা সম্পর্কে আমাদের সাথে যোগাযোগ করুন।"
        },
        {
          question: "বিমানের টিকেট বুকিং এর প্রক্রিয়া কী?",
          answer: "বিমানের টিকেট বুকিং এর জন্য আমাদের অফিসে সরাসরি আসতে হবে। গন্তব্য, তারিখ এবং যাত্রী সংখ্যা জানিয়ে আমরা আপনাকে সবথেকে ভালো অপশন দেখাব এবং টিকেট কনফার্ম করে দিব।"
        },
        {
          question: "ভিসা আবেদনের জন্য কী কী ডকুমেন্ট লাগে?",
          answer: "ভিসা আবেদনের জন্য পাসপোর্ট, পাসপোর্ট সাইজের ছবি, জাতীয় পরিচয়পত্র এবং আয়ের প্রমাণপত্র লাগে। বিস্তারিত তথ্যের জন্য আমাদের সাথে যোগাযোগ করুন।"
        }
      ]
    },
    {
      category: "পাসপোর্ট ও নিবন্ধন সেবা",
      categoryEn: "Passport & Registration Services",
      items: [
        {
          question: "ই-পাসপোর্ট আবেদনের প্রক্রিয়া কী?",
          answer: "ই-পাসপোর্ট আবেদনের জন্য অনলাইনে আবেদন ফর্ম পূরণ করে প্রয়োজনীয় ডকুমেন্টসহ আমাদের কাছে জমা দিতে হয়। আমরা পুরো প্রক্রিয়া সহজ করে দিই।"
        },
        {
          question: "ভোটার আইডি কার্ডের জন্য কী করতে হবে?",
          answer: "ভোটার আইডি কার্ডের জন্য জন্ম নিবন্ধন সনদ, জাতীয় পরিচয়পত্র এবং অন্যান্য প্রয়োজনীয় ডকুমেন্ট লাগে। আমরা আপনাকে সাহায্য করব।"
        },
        {
          question: "জন্ম নিবন্ধন সেবা কীভাবে পাব?",
          answer: "জন্ম নিবন্ধনের জন্য হাসপাতালের সনদ বা ঘোষণাপত্র লাগে। আমরা অনলাইন এবং অফলাইন উভয়ভাবে সেবা প্রদান করি।"
        }
      ]
    },
    {
      category: "সরকারি সেবা",
      categoryEn: "Government Services",
      items: [
        {
          question: "পুলিশ ক্লিয়ারেন্স সার্টিফিকেট কী?",
          answer: "পুলিশ ক্লিয়ারেন্স সার্টিফিকেট একটি গুরুত্বপূর্ণ ডকুমেন্ট যা বিদেশ ভ্রমণ বা চাকরির জন্য প্রয়োজন হয়। আমরা এই সেবা প্রদান করি।"
        },
        {
          question: "ড্রাইভিং লাইসেন্স পেতে কী লাগে?",
          answer: "ড্রাইভিং লাইসেন্সের জন্য বয়স প্রমাণপত্র, মেডিকেল সার্টিফিকেট এবং ড্রাইভিং টেস্ট পাস করতে হয়। আমরা প্রক্রিয়া সহজ করে দিই।"
        },
        {
          question: "TIN এবং VAT/BIN নম্বর কীভাবে পাব?",
          answer: "TIN এবং VAT/BIN নম্বর ব্যবসায়িক কাজের জন্য প্রয়োজনীয়। আমরা অনলাইন আবেদন প্রক্রিয়া সাহায্য করি।"
        }
      ]
    },
    {
      category: "শিক্ষা ও চাকরি সেবা",
      categoryEn: "Education & Job Services",
      items: [
        {
          question: "শিক্ষা প্রতিষ্ঠানে ভর্তি সাহায্য কীভাবে পাব?",
          answer: "আমরা বিভিন্ন শিক্ষা প্রতিষ্ঠানে ভর্তি প্রক্রিয়া সাহায্য করি। প্রয়োজনীয় ডকুমেন্ট এবং ফর্ম ফিলাপে সাহায্য করি।"
        },
        {
          question: "চাকরির আবেদন এবং সিভি তৈরিতে সাহায্য পাব কীভাবে?",
          answer: "আমরা পেশাদার সিভি তৈরি এবং চাকরির আবেদন প্রক্রিয়া সাহায্য করি। আপনার যোগ্যতা অনুসারে সঠিক চাকরি খুঁজে পেতে সাহায্য করি।"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen  py-16">
      <PageHeader title='FAQ' subTitle='Frequently ask questions' />
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-12 h-12 text-primary mr-3" />
          </div>
          <h1 className="text-4xl font-medium  mb-4">
            প্রায়শই জিজ্ঞাসিত প্রশ্নসমূহ
          </h1>
          <p className="text-lg text-gray-600  max-w-2xl mx-auto">
            আপনার সকল প্রশ্নের উত্তর এখানে পাবেন। আমাদের সেবা সম্পর্কে বিস্তারিত তথ্যের জন্য নিচের প্রশ্নগুলো দেখুন।
          </p>
        </motion.div>

        {/* FAQ Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className=" rounded-2xl shadow-lg overflow-hidden">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                <div className="bg-primary px-6 py-4">
                  <h2 className="text-xl font-medium">
                    {category.category}
                  </h2>
                  <p className="text-primary-foreground/80 text-sm mt-1">
                    {category.categoryEn}
                  </p>
                </div>

                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {category.items.map((item, itemIndex) => {
                    const globalIndex = categoryIndex * 10 + itemIndex;
                    return (
                      <FAQItem
                        key={globalIndex}
                        question={item.question}
                        answer={item.answer}
                        isOpen={openItems.includes(globalIndex)}
                        onToggle={() => toggleItem(globalIndex)}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}

        </motion.div>
      </div>
      <div className="my-4">
        <CallToAction />
      </div>
    </div>
  );
};

export default FAQ;