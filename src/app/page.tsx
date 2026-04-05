"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-(--alabaster)">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <Testimonials />
      <Contact />
    </div>
  );
}
