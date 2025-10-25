import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import CallToAction from "../../components/sections/CallToAction";
import { useGetFAQsQuery } from "../../redux/feature/all-api/allApi";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        onClick={onToggle}
        className="w-full py-6 text-left flex justify-between items-center hover:bg-primary/80 transition-colors duration-200 px-6"
      >
        <span className="text-lg font-medium  pr-4">{question}</span>
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
              <p className="text-gray-600  leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const { data: faqs } = useGetFAQsQuery([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4 mt-4">
            <HelpCircle className="w-12 h-12 text-primary mr-3" />
          </div>
          <h1 className="text-4xl font-medium  mb-4">
            প্রায়শই জিজ্ঞাসিত প্রশ্নসমূহ
          </h1>
          <p className="text-lg text-gray-600  max-w-2xl mx-auto">
            আপনার সকল প্রশ্নের উত্তর এখানে পাবেন। আমাদের সেবা সম্পর্কে বিস্তারিত
            তথ্যের জন্য নিচের প্রশ্নগুলো দেখুন।
          </p>
        </motion.div>

        {/* FAQ Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {faqs?.map((item: any, itemIndex: any) => {
              return (
                <FAQItem
                  key={itemIndex}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openItems.includes(itemIndex)}
                  onToggle={() => toggleItem(itemIndex)}
                />
              );
            })}
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
