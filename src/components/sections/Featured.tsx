
const features = [
  {
    icon: "⚡",
    title: "দ্রুত সেবা",
    description: "আমাদের অভিজ্ঞ টিম আপনার কাজ দ্রুততম সময়ে সম্পন্ন করে",
  },
  {
    icon: "🛡️",
    title: "নিরাপদ ও নির্ভরযোগ্য",
    description: "আপনার সকল তথ্য সম্পূর্ণ গোপনীয় এবং নিরাপদ থাকে",
  },
  {
    icon: "💰",
    title: "সাশ্রয়ী মূল্য",
    description: "বাজারের সবচেয়ে কম দামে উন্নত মানের সেবা পান",
  },
  {
    icon: "🎯",
    title: "১০০% সফলতার হার",
    description: "আমাদের বিশেষজ্ঞ টিমের মাধ্যমে নিশ্চিত সফলতা",
  },
];

const FeaturesSection = () => {
  return (
    <section className="max-w-6xl mx-auto my-16 px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white p-8 rounded-xl shadow-md text-center transform transition-transform hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="text-4xl mb-4 text-blue-500">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
          <p className="text-gray-500 leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default FeaturesSection;
