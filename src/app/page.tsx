'use client';

import { motion } from 'framer-motion';
import { ChefHat, Utensils, Award, Heart, Star, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Specialties from '@/components/Specialties';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Navbar />
      <Hero />
      <About />
      <Specialties />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
