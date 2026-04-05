'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[var(--espresso)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 
            className="text-4xl sm:text-5xl font-bold mb-4 text-white"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Ready to create an unforgettable dining experience?
          </h2>
          <p 
            className="text-lg text-white/80 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Get in touch to discuss your event or culinary project
          </p>
        </motion.div>

        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12"
        >
          <div className="flex items-center gap-3 text-white/90">
            <Mail className="w-5 h-5 text-[var(--terracotta)]" />
            <span style={{ fontFamily: 'var(--font-poppins)' }}>vandana.chauhan@chef.com</span>
          </div>
          <div className="flex items-center gap-3 text-white/90">
            <Phone className="w-5 h-5 text-[var(--terracotta)]" />
            <span style={{ fontFamily: 'var(--font-poppins)' }}>+91 98765 43210</span>
          </div>
        </motion.div>

        {/* WhatsApp CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <motion.a
            href="https://wa.me/917385048892"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-green-500 text-white px-10 py-5 rounded-full font-semibold text-lg animate-pulse-whatsapp hover:bg-green-600 transition-all shadow-xl"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            <MessageCircle className="w-6 h-6" />
            Chat on WhatsApp to Order
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-8 border-t border-white/20 text-center"
        >
          <p 
            className="text-white/60 text-sm"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            © {new Date().getFullYear()} Vandana Chauhan. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
