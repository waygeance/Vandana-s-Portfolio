'use client';

import { motion } from 'framer-motion';
import { Award, Users, Clock, Heart } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Clock, label: 'Events Catered', value: '1000+' },
    { icon: Heart, label: 'Recipes Created', value: '200+' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Crafting Culinary Excellence
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Hello! I'm Vandana Chauhan, a passionate chef with over 15 years of experience in creating 
              extraordinary culinary experiences. My journey began in my grandmother's kitchen, where I learned 
              the importance of fresh ingredients and traditional cooking methods.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I specialize in fusion cuisine that brings together the best of traditional Indian flavors with 
              modern culinary techniques. Whether it's an intimate dinner party or a large-scale event, I bring 
              creativity, passion, and attention to detail to every dish I create.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My philosophy is simple: food should not only taste amazing but also tell a story. Each dish is 
              carefully crafted to take you on a journey of flavors, textures, and aromas that will leave a 
              lasting impression.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-orange-200 via-amber-200 to-yellow-200 rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <span className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                    VC
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">Vandana Chauhan</h4>
                <p className="text-gray-600">Executive Chef & Culinary Consultant</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl"
            >
              <stat.icon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
