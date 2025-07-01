'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen w-full bg-neutral-100">
      
      <video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 object-cover w-full h-full z-0"
>
  <source src="/ocean.mp4" type="video/mp4" />
</video>
<div className="absolute inset-0 bg-black/30 z-0" />


      {/* Foreground Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Psychological Care for
          <br />
          <span>Change, Insight, and Well-Being</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base md:text-xl font-light max-w-2xl mb-10"
        >
          Offering individual psychotherapy for adults via telehealth in Michigan and most U.S. states through PSYPACT participation.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#a6c4c3] hover:bg-[#92b3b2] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-transform"
        >
          SCHEDULE A CONSULTATION
        </motion.button>
      </div>
    </section>
  );
}
