"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Corporate Event Organizer",
      content:
        "Vandana created an absolutely spectacular menu for our company's annual gala. Every dish was a masterpiece!",
    },
    {
      name: "Rahul Verma",
      role: "Wedding Client",
      content:
        "From the first tasting to the final presentation, Vandana exceeded all our expectations. Simply amazing!",
    },
    {
      name: "Anita Patel",
      role: "Private Dinner Client",
      content:
        "The intimate dinner party Vandana catered was magical. Her attention to detail made it unforgettable.",
    },
    {
      name: "Karan Mehta",
      role: "Restaurant Consultant",
      content:
        "Vandana's expertise in fusion cuisine helped transform our restaurant. Her innovative approach is remarkable.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4 text-[var(--espresso)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-[var(--terracotta)] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-[var(--warm-orange)] fill-current"
                  />
                ))}
              </div>

              <div className="relative mb-6">
                <Quote className="h-6 w-6 text-[var(--terracotta)]/20 absolute -top-2 -left-2" />
                <p
                  className="text-[var(--charcoal)]/80 leading-relaxed pl-4"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {testimonial.content}
                </p>
              </div>

              <div className="border-t border-[var(--ivory)] pt-4">
                <h4
                  className="font-semibold text-[var(--espresso)]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {testimonial.name}
                </h4>
                <p
                  className="text-sm text-[var(--charcoal)]/60"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
