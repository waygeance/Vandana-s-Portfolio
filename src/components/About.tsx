"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[var(--ivory)]">
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
            About Vandana
          </h2>
          <div className="w-24 h-1 bg-[var(--terracotta)] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3
              className="text-3xl font-bold text-[var(--espresso)] mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              The Story Behind the Passion
            </h3>
            <p
              className="text-lg text-[var(--charcoal)] leading-relaxed"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              My culinary journey began in my grandmother's kitchen, learning
              the importance of fresh ingredients and traditional cooking
              methods. I bring creativity, passion, and attention to detail to
              every dish, blending traditional flavors with modern presentation.
            </p>
            <p
              className="text-lg text-[var(--charcoal)] leading-relaxed"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              With over 3 years of experience in the culinary world, I
              specialize in creating fusion cuisine that bridges the gap between
              traditional Indian flavors and contemporary cooking techniques.
              Each dish I create tells a unique story of heritage meeting
              innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-[var(--terracotta)]/10 rounded-2xl transform rotate-3" />
              <Image
                src="/cake5.jpeg"
                alt="Vandana's Culinary Creation"
                fill
                className="rounded-2xl object-cover shadow-xl"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { label: "Years Experience", value: "3+" },
            { label: "Happy Clients", value: "50+" },
            { label: "Events Catered", value: "10+" },
            { label: "Recipes Created", value: "200+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-xl shadow-lg"
            >
              <div
                className="text-3xl font-bold text-[var(--terracotta)] mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-sm text-[var(--charcoal)]"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
