'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Gallery() {
  const foodImages = [
    { src: '/IMG_5839.jpg', alt: 'Delicious pastry creation', category: 'Pastries' },
    { src: '/IMG_5983.jpg', alt: 'Beautiful cake design', category: 'Cakes' },
    { src: '/IMG_6029.jpg', alt: 'Artistic dessert', category: 'Desserts' },
    { src: '/IMG_6173.jpg', alt: 'Gourmet pastry', category: 'Pastries' },
    { src: '/IMG_6252.jpg', alt: 'Elegant cake', category: 'Cakes' },
    { src: '/IMG_6271.jpg', alt: 'Specialty dessert', category: 'Desserts' },
    { src: '/IMG_6378.jpg', alt: 'Culinary masterpiece', category: 'Specialties' }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              My Culinary Gallery
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A glimpse into my culinary creations - from delicate pastries to elaborate cakes, each piece is crafted with love and precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg mb-1">{image.alt}</h3>
                  <span className="text-orange-300 text-sm font-medium">{image.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Custom Orders Available</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Love what you see? I create custom cakes, pastries, and desserts for all occasions. 
              From weddings to birthdays, let me create something special for your next celebration.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
            >
              Order Custom Creation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
