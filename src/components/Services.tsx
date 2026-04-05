'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'Corporate Event Catering',
    description: 'Professional catering solutions for corporate events, meetings, and business gatherings with impeccable presentation and taste.',
    image: '/cake2.jpg',
  },
  {
    title: 'Wedding Catering',
    description: 'Creating magical culinary experiences for your special day with elegant presentations and unforgettable flavors.',
    image: '/cake8.jpg',
  },
  {
    title: 'Private Dinner Parties',
    description: 'Intimate dining experiences crafted with personal attention to detail and extraordinary culinary artistry.',
    image: '/cake10.jpg',
  },
  {
    title: 'Menu & Custom Recipe Development',
    description: 'Creating unique recipes and signature dishes that set your establishment apart from the competition.',
    image: '/cake11.jpg',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[var(--alabaster)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl sm:text-5xl font-bold mb-4 text-[var(--espresso)]"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Services
          </h2>
          <div className="w-24 h-1 bg-[var(--terracotta)] mx-auto rounded-full" />
          <p 
            className="text-lg text-[var(--charcoal)]/80 max-w-2xl mx-auto mt-4"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Discover our range of culinary services designed to create memorable experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transform group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 
                  className="text-2xl font-bold mb-3 text-[var(--espresso)]"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-[var(--charcoal)]/80"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
