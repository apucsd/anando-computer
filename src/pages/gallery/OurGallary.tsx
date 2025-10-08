import { motion } from 'framer-motion';
import PageHeader from '../../components/ui/PageHeader';

type GalleryItem = {
  src: string;
  title: string;
  caption?: string;
};

const images: GalleryItem[] = [
  {
    src: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
    title: 'দোকানের ফ্রন্ট ভিউ',
    caption: 'আনন্দ কম্পিউটারের প্রধান প্রবেশদ্বার'
  },
  {
    src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    title: 'সার্ভিস কর্নার',
    caption: 'কম্পিউটার রিপেয়ার ও সার্ভিসিং'
  },
  {
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
    title: 'কাস্টমার সাপোর্ট ডেস্ক',
    caption: 'দ্রুত ও ভদ্র সেবা'
  },
  {
    src: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1200&auto=format&fit=crop',
    title: 'পণ্য প্রদর্শনী',
    caption: 'অরিজিনাল পণ্যের কালেকশন'
  },
  {
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    title: 'ওয়ার্কিং স্পেস',
    caption: 'দক্ষ টিমের কাজের পরিবেশ'
  },
  {
    src: 'https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?q=80&w=1200&auto=format&fit=crop',
    title: 'নেটওয়ার্কিং সেটআপ',
    caption: 'প্রফেশনাল নেটওয়ার্ক কনফিগারেশন'
  }
];

const OurGallary = () => {
  return (
    <div className="min-h-screen">
      <PageHeader title="আমাদের গ্যালারি" subTitle="আমাদের দোকান, সেবা ও কাজের কিছু মুহূর্ত" />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3">দোকানের ছবি সমূহ</h2>
            <p className="text-zinc-600">আমাদের দৈনন্দিন কাজ, সার্ভিস কর্নার, পণ্য প্রদর্শনী ও কাস্টমার সার্ভিসের কিছু ঝলক</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {images.map((item, index) => (
              <motion.figure
                key={item.src + index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    {item.caption && <p className="text-sm text-white/90">{item.caption}</p>}
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default OurGallary;

