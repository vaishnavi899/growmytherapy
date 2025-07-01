'use client';

import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection'; // Already unified
import ServicesSection from '@/app/components/ServicesSection';
import FAQSection from '@/app/components/FAQSection';
import QuoteSection from '@/app/components/QuoteSection';
import ContactSection from '@/app/components/ContactSection';
import Header from '@/app/components/Header';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="scroll-smooth">
        <HeroSection />
        <section id="about">
          <AboutSection />
        </section>

        <ServicesSection />
        <QuoteSection />
        <FAQSection />
        <section id="contact" className="scroll-mt-28">
  <ContactSection />
</section>

      </main>
    </>
  );
}
