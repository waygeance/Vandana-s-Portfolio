"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[var(--alabaster)] pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--ivory)]/50 via-[var(--cream)]/30 to-[var(--alabaster)]" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--terracotta)]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-[var(--warm-orange)]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[var(--burnt-orange)]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000" />
      </motion.div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-left"
            >
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 text-[var(--espresso)]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Vandana Chauhan
              </h1>

              <p
                className="text-xl sm:text-2xl text-[var(--charcoal)] mb-6"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Executive Chef & Culinary Consultant
              </p>

              <p
                className="text-lg text-[var(--charcoal)]/80 mb-8 max-w-xl leading-relaxed"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Food should not only taste amazing but also tell a story.
                Specializing in fusion cuisine that marries traditional Indian
                flavors with modern techniques.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 border-2 border-[var(--terracotta)] text-[var(--terracotta)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--terracotta)]/5 transition-all"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  <ArrowRight className="w-5 h-5" />
                  View My Menu
                </motion.a>

                <motion.a
                  href="https://wa.me/917385048892"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 bg-[var(--terracotta)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--burnt-orange)] transition-all shadow-lg"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Order via WhatsApp
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 mx-auto">
              <div className="absolute inset-0 bg-[var(--terracotta)]/20 rounded-full blur-3xl" />
              <Image
                src="/chef-pic.png"
                alt="Vandana Chauhan - Executive Chef"
                fill
                className="rounded-full object-cover shadow-2xl border-4 border-white relative z-10"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
