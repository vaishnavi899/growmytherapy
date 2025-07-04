'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Anxiety & Stress Management',
    description:
      "We understand how overwhelming anxiety and chronic stress can feel, from racing thoughts to constant restlessness. Our therapy focuses on helping you identify triggers, challenge negative thought patterns, and adopt practical coping techniques. Using evidence-based methods like Cognitive Behavioral Therapy (CBT) and mindfulness practices, we guide you in regaining a sense of control and calm in your everyday life.",
    image: '/stress.webp',
  },
  {
    title: 'Relationship Counseling',
    description:
      "Healthy relationships are built on understanding, trust, and communication. Yet, even the strongest bonds can encounter periods of distance, miscommunication, or unresolved tension. Our counseling services support both couples and individuals in navigating these challenges with compassion and clarity. We help uncover underlying patterns, strengthen emotional connection, and develop healthier ways to express needs and handle conflict.",
    image: '/Relationship.jpeg',
  },
  {
    title: 'Trauma Recovery',
    description:
      "Recovering from trauma is not about “getting over it”; it’s about healing at your own pace in a space where you feel safe and supported. We use trauma-informed, evidence-based therapy to help you rebuild trust and regain your sense of safety and resilience. You’re not alone, we’re here to walk with you every step of the way, offering compassion, understanding, and tools to help you feel whole again.",
    image: '/trauma.jpg',
  },
];

export default function ServicesSection() {
  return (
    <>
      {/* Our Services Section */}
      <section id="services" className="py-14 px-6 bg-[#f9f6f1] scroll-mt-20">
        <h2 className="text-5xl font-bold text-center text-[#072c27] mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center px-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={260}
                height={260}
                className="rounded-full object-cover w-[260px] h-[260px] shadow-md mb-6"
              />
              <h3 className="text-2xl font-semibold text-[#072c27] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 text-[17px] leading-7">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Rates and Insurance Section */}
      <section id="rates" className="bg-[#8badae] py-16 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-6 text-black">Rates and Insurance</h2>

        <p className="text-lg mb-2 text-black">Individual Session - $200 </p>
        <p className="text-lg mb-6 text-black">Couples Session - $240</p>

        <p className="text-md mb-4 text-black">
          I accept both private pay and insurance. I am in-network with BCBS and Aetna.
        </p>

        <p className="text-md text-black max-w-4xl mx-auto">
          For out-of-network plans, I’ve partnered with Mentaya using{' '}
          <a
            href="https://tool.mentaya.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-black hover:text-[#054c43]"
          >
            this tool
          </a>{' '}
          to help you check your eligibility for reimbursement for my services.
        </p>
      </section>

      {/* Availability Notice Section */}
      <section className="bg-[#f9f6f1] py-16 px-6 text-center">
        <p className="text-2xl font-medium text-[#072c27]">
          Unable to accept new clients at this time.
        </p>
      </section>
    </>
  )
}
