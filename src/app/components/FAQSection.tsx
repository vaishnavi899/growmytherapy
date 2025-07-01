'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Do you accept insurance?',
    answer:
      'No, but a superbill is provided for self-submission.',
  },
  {
    question: 'Do you offer virtual therapy sessions?',
    answer:
      'Yes, I provide secure, HIPAA-compliant online sessions via Zoom for clients located anywhere in the state.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      '24-hour notice required.',
  },
  {
    question: 'What is your approach to therapy?',
    answer:
      'My style is collaborative and warm, integrating psychodynamic and evidence-based approaches tailored to each individual’s goals and experiences.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      className="w-full bg-[#dfd7d0] py-20 px-6 scroll-mt-20"
    >
      <h2 className="text-4xl font-serif text-center text-[#4a4a38] mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border-t border-[#7e7e6b] pt-6 first:border-t-0 first:pt-0"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center text-left text-xl text-[#4a4a38] font-serif focus:outline-none"
            >
              {faq.question}
              {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === i ? 'max-h-40 mt-3' : 'max-h-0'
              }`}
            >
              <p className="text-[17px] text-[#4a4a38] leading-7">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
