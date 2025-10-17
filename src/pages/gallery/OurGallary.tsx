import { motion } from 'framer-motion';
import PageHeader from '../../components/ui/PageHeader';
import { useGetGalleryQuery } from '../../redux/feature/all-api/allApi';

const OurGallary = () => {
  const {data : galleries} = useGetGalleryQuery([])
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
            {galleries?.map((item : any, index : any) => (
              <motion.figure
                key={item?._id + index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
              >
                <img
                  src={item?.image}
                  alt={item?.title}
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

