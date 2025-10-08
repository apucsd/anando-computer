import { motion } from 'framer-motion';
import { Target, Heart, Lightbulb, TrendingUp, Award, Users, Shield, Zap } from 'lucide-react';
import PageHeader from '../../components/ui/PageHeader';
import CallToAction from '../../components/sections/CallToAction';

const OurStory = () => {
  const timeline = [
    {
      year: '২০১৮',
      title: 'শুরুর গল্প',
      description: 'একটি ছোট দোকান এবং আমাদের সম্প্রদায়ের জন্য মানসম্মত কম্পিউটার সেবা প্রদানের বড় স্বপ্ন নিয়ে যাত্রা শুরু।',
      icon: Lightbulb
    },
    {
      year: '২০২০',
      title: 'সম্প্রসারণ',
      description: 'নেটওয়ার্কিং, নিরাপত্তা ব্যবস্থা এবং কাস্টম পিসি তৈরি সহ আমাদের সেবা সম্প্রসারিত করা হয়েছে।',
      icon: TrendingUp
    },
    {
      year: '২০২২',
      title: 'স্বীকৃতি',
      description: '৫০০+ সন্তুষ্ট গ্রাহকদের সাথে একটি বিশ্বস্ত সেবা প্রদানকারী হিসাবে স্বীকৃতি অর্জন।',
      icon: Award
    },
    {
      year: '২০২৪',
      title: 'উদ্ভাবন',
      description: 'ব্যবসার জন্য উন্নত আইটি সমাধান এবং পরামর্শ সেবা চালু করা হয়েছে।',
      icon: Zap
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'গ্রাহক প্রথম',
      description: 'আমরা সবকিছুর উপরে গ্রাহক সন্তুষ্টিকে অগ্রাধিকার দিই।',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'মানসম্পন্ন সেবা',
      description: 'আমরা প্রতিটি সেবায় সর্বোচ্চ মানের নিশ্চয়তা দিই।',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'দক্ষ টিম',
      description: 'আমাদের টিম সার্টিফাইড এবং অভিজ্ঞ পেশাদারদের নিয়ে গঠিত।',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Target,
      title: 'উদ্ভাবন',
      description: 'আমরা সর্বশেষ প্রযুক্তি ট্রেন্ডের সাথে আপডেট থাকি।',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="আমাদের গল্প" 
        subTitle="একটি ছোট দোকান থেকে আপনার বিশ্বস্ত প্রযুক্তি সঙ্গী"
      />

      {/* Main Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                আমাদের যাত্রা
              </h2>
              <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
                <p>
                  আনন্দ কম্পিউটার ২০১৮ সালে একটি সহজ লক্ষ্য নিয়ে শুরু হয়েছিল: আমাদের সম্প্রদায়ের সবার জন্য 
                  প্রযুক্তিকে সহজলভ্য এবং নির্ভরযোগ্য করা। যা একটি ছোট মেরামত দোকান হিসাবে শুরু হয়েছিল 
                  তা এখন একটি সম্পূর্ণ আইটি সমাধান প্রদানকারী প্রতিষ্ঠানে পরিণত হয়েছে।
                </p>
                <p>
                  বছরের পর বছর ধরে, আমরা সততা, মান এবং গ্রাহক সন্তুষ্টির আমাদের মূল মূল্যবোধের প্রতি 
                  সত্য থেকেছি। আমরা বিশ্বাস করি যে প্রযুক্তি মানুষকে ক্ষমতায়ন করা উচিত, জীবনকে জটিল 
                  করা নয়। তাই আমরা স্পষ্ট সমাধান এবং ব্যতিক্রমী সেবা প্রদানে মনোনিবেশ করি।
                </p>
                <p>
                  আজ, আমরা শত শত সন্তুষ্ট গ্রাহকদের সেবা দিতে গর্বিত, ব্যক্তিগত ব্যবহারকারী থেকে শুরু করে 
                  ছোট ব্যবসা পর্যন্ত। আমাদের টিম বড় হয়েছে, আমাদের সেবা সম্প্রসারিত হয়েছে, কিন্তু 
                  উৎকর্ষতার প্রতি আমাদের প্রতিশ্রুতি অপরিবর্তিত রয়েছে।
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-zinc-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              আমাদের মাইলফলক
            </h2>
            <p className="text-lg text-zinc-600">
              যে মুহূর্তগুলো আমাদের যাত্রাকে রূপ দিয়েছে
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-primary/30 hidden md:block" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {timeline.map((item, index) => {
                  const Icon = item.icon;
                  const isEven = index % 2 === 0;

                  return (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
                    >
                      {/* Content */}
                      <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-zinc-200">
                          <span className="inline-block px-4 py-1 bg-primary text-white text-sm font-bold rounded-full mb-3">
                            {item.year}
                          </span>
                          <h3 className="text-xl font-bold text-zinc-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-zinc-600">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="relative flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Spacer */}
                      <div className="flex-1 hidden md:block" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              আমাদের মূল মূল্যবোধ
            </h2>
            <p className="text-lg text-zinc-600">
              যে নীতিগুলো আমাদের সবকিছু পরিচালনা করে
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-zinc-50 rounded-2xl p-6 h-full border border-zinc-200 hover:border-primary transition-all duration-300 hover:shadow-xl">
                    <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-zinc-600">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: '৬+', label: 'বছরের অভিজ্ঞতা' },
              { number: '৫০০+', label: 'সন্তুষ্ট গ্রাহক' },
              { number: '১০০০+', label: 'সম্পন্ন প্রকল্প' },
              { number: '২৪/৭', label: 'সহায়তা উপলব্ধ' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="my-8">
        <CallToAction />
      </div>
    </div>
  );
};

export default OurStory;