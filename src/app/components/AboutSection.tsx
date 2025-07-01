'use client';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section id="about" className="bg-white text-[#7e7e6b]">
      <div
        ref={ref}
        className="py-24 px-6 md:px-20 lg:px-28 max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="md:w-[60%] w-full"
        >
          <h2 className="text-[#4a4a38] text-4xl md:text-5xl font-serif font-semibold mb-6">
            Meet Dr. Serena Blake
          </h2>
          <p className="text-[18px] md:text-[19px] leading-9 mb-6">
            Finding time and opportunities to care for ourselves can be incredibly challenging in today's busy and demanding world.
            I believe therapy offers a dedicated space for self-care, providing the support and tools needed to improve this essential practice.
            Therapy can help individuals identify and clarify their goals, values, and the various elements that contribute to their well-being,
            recognizing that these aspects vary from person to person.
          </p>
          <p className="text-[18px] md:text-[19px] leading-9 mb-6">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions.
            She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety,
            strengthen relationships, and heal from trauma.
          </p>
          <p className="text-[18px] md:text-[19px] leading-9">
            Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="md:w-[35%] w-full flex justify-center mt-10 md:mt-0"
        >
          <div className="relative w-[300px] h-[420px] rounded overflow-hidden">
            <Image
              src="/therapist.webp"
              alt="Dr. Serena Blake"
              fill
              className="object-cover rounded"
              priority
            />
          </div>
        </motion.div>
      </div>
      <div className="w-[92%] h-[1px] bg-[#7E7E6B] mx-auto my-16 opacity-60" />

      <section className="bg-[#f9f6ef] px-6 py-20 text-center">
        <h3 className="text-[#333] font-serif text-3xl md:text-4xl font-medium max-w-4xl mx-auto mb-6">
          Therapy can be a space where you invest in yourself—<br />
          one of the highest forms of self-care.
        </h3>
        <p className="text-[#4a4a4a] text-[17px] leading-8 max-w-3xl mx-auto">
          You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma, grief and loss, self-esteem issues,
          or challenges with family, parenting, or parental relationships. Whatever the source of your stress, you don’t have to face it alone.
          Therapy offers you the time and space to work toward wellness and peace.
        </p>
        <div className="w-[92%] h-[1px] bg-[#7E7E6B] mx-auto my-12 opacity-60" />
      </section>
    </section>
  );
}
