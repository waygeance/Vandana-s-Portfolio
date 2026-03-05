'use client';

import { motion } from 'framer-motion';
import { Utensils, Cake, Coffee, Salad } from 'lucide-react';
import Image from 'next/image';

export default function Specialties() {
  const specialties = [
    {
      icon: Utensils,
      title: 'Traditional Indian Cuisine',
      description: 'Authentic recipes passed down through generations, featuring rich spices and traditional cooking techniques.',
      dishes: ['Butter Chicken', 'Biryani', 'Paneer Tikka', 'Dal Makhani'],
      image: '/IMG_6378.jpg'
    },
    {
      icon: Cake,
      title: 'Fusion Desserts',
      description: 'Innovative sweet creations that blend Eastern and Western dessert traditions.',
      dishes: ['Gulab Jamun Cheesecake', 'Saffron Panna Cotta', 'Cardamom Tiramisu', 'Mango Mousse'],
      image: '/IMG_6252.jpg'
    },
    {
      icon: Coffee,
      title: 'Gourmet Beverages',
      description: 'Artisanal drinks and beverages that complement every meal perfectly.',
      dishes: ['Masala Chai Latte', 'Mango Lassi', 'Spiced Mojito', 'Rose Lemonade'],
      image: '/IMG_5983.jpg'
    },
    {
      icon: Salad,
      title: 'Healthy Options',
      description: 'Nutritious and delicious dishes that don\'t compromise on flavor.',
      dishes: ['Quinoa Upma', 'Sprouts Salad', 'Grilled Paneer', 'Vegetable Biryani'],
      image: '/IMG_6029.jpg'
    }
  ];

  return (
    <section id="specialties" className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              My Specialties
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From traditional favorites to innovative creations, each dish is prepared with the finest ingredients 
            and a passion for excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={specialty.image}
                  alt={specialty.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center mr-4">
                    <specialty.icon className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{specialty.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{specialty.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-700 mb-3">Signature Dishes:</h4>
                  {specialty.dishes.map((dish) => (
                    <div key={dish} className="flex items-center">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                      <span className="text-gray-600">{dish}</span>
                    </div>
                  ))}
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
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Custom Menu Creation</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Have a special dietary requirement or want something unique? I specialize in creating custom menus 
              tailored to your preferences, dietary needs, and event theme. Let's work together to create a 
              memorable dining experience.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
            >
              Discuss Custom Menu
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
