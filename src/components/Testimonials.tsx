'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Corporate Event Organizer',
      content: 'Vandana created an absolutely spectacular menu for our company\'s annual gala. Every dish was a masterpiece, and our guests are still talking about the fusion appetizers!',
      rating: 5
    },
    {
      name: 'Rahul Verma',
      role: 'Wedding Client',
      content: 'From the first tasting to the final presentation, Vandana exceeded all our expectations. She understood our vision perfectly and created a menu that was both traditional and innovative.',
      rating: 5
    },
    {
      name: 'Anita Patel',
      role: 'Private Dinner Client',
      content: 'The intimate dinner party Vandana catered was magical. Her attention to detail, creative presentation, and incredible flavors made for an unforgettable evening.',
      rating: 5
    },
    {
      name: 'Karan Mehta',
      role: 'Restaurant Consultant',
      content: 'Vandana\'s expertise in fusion cuisine and menu development helped transform our restaurant. Her innovative approach to traditional dishes is truly remarkable.',
      rating: 5
    },
    {
      name: 'Neha Gupta',
      role: 'Birthday Party Client',
      content: 'The custom menu Vandana created for my mother\'s 60th birthday was perfect. She incorporated all our favorite dishes with her unique twist - absolutely delicious!',
      rating: 5
    },
    {
      name: 'Amit Singh',
      role: 'Catering Client',
      content: 'Professional, creative, and exceptionally talented. Vandana catered our product launch event and received rave reviews from all 200+ attendees.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it - hear what my clients have to say about their culinary experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="h-8 w-8 text-orange-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-6 italic">
                  {testimonial.content}
                </p>
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
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Create Your Culinary Experience?</h3>
            <p className="mb-6 text-orange-50">
              Join my list of satisfied clients and let me create an unforgettable dining experience for your next event.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
