'use client';
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaUser, FaComment, FaCalendarAlt } from 'react-icons/fa';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    consent: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = 'Please enter a valid email';
    if (!form.message.trim()) newErrors.message = 'Please share why you&#39;re reaching out';
    if (!form.preferredTime.trim()) newErrors.preferredTime = 'Preferred contact time is required';
    if (!form.consent) newErrors.consent = 'You must agree to be contacted';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : value,
    }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', form);
      setSubmitted(true);
      setForm({
        name: '',
        phone: '',
        email: '',
        message: '',
        preferredTime: '',
        consent: false,
      });
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#f9f6f1] py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 border border-[#ddd]">
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-32 rounded-full bg-[#f0ede5] mb-4 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-[#7E7E6B] text-4xl">
                SB
              </div>
            </div>
            <h3 className="text-3xl font-serif font-semibold text-[#072c27] text-center">
              Dr. Serena Blake, PsyD
            </h3>
            <p className="text-[#7E7E6B] mt-2">Clinical Psychologist</p>
          </div>

          <div className="text-[#4a4a38] space-y-6 text-[17px]">
            <div>
              <h4 className="text-lg font-semibold flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#7E7E6B]" /> Location
              </h4>
              <p className="pl-8">1287 Maplewood Drive<br />Los Angeles, CA 90026</p>
              <button className="mt-2 text-sm text-[#4a4a38] underline hover:text-[#072c27] pl-8">
                View on map
              </button>
            </div>

            <div>
              <h4 className="text-lg font-semibold flex items-center gap-2">
                <FaPhone className="text-[#7E7E6B]" /> Contact
              </h4>
              <div className="pl-8 space-y-1">
                <p>
                  <a href="tel:+13235550192" className="hover:underline">(323) 555-0192</a>
                </p>
                <p>
                  <a href="mailto:serena@blakepsychology.com" className="hover:underline">serena@blakepsychology.com</a>
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold flex items-center gap-2">
                <FaClock className="text-[#7E7E6B]" /> Office Hours
              </h4>
              <ul className="list-disc ml-5 pl-3 space-y-1">
                <li><strong>In-person:</strong> Tue & Thu, 10 AM – 6 PM</li>
                <li><strong>Virtual:</strong> Mon, Wed & Fri, 1 PM – 5 PM</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold">Specialties</h4>
              <div className="flex flex-wrap gap-2 mt-3">
                {['Anxiety', 'Depression', 'Trauma', 'Relationships', 'Life Transitions', 'Stress'].map(specialty => (
                  <span key={specialty} className="bg-[#f0ede5] text-[#4a4a38] px-3 py-1 rounded-full text-sm">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#ddd]">
              <h4 className="text-lg font-semibold">Emergency Resources</h4>
              <p className="text-sm mt-2">
                If you&#39;re in crisis, please call 911 or the National Suicide Prevention Lifeline at <a href="tel:988" className="underline">988</a>.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 border border-[#ddd]">
          <h2 className="text-3xl md:text-4xl font-serif text-[#4a4a38] text-center mb-8">
            Contact Dr. Blake
          </h2>
          
          {submitted ? (
            <div className="text-center py-10">
              <div className="text-green-700 text-xl font-medium mb-4">
                Thank you for reaching out!
              </div>
              <p className="text-[#4a4a38] mb-6">
                Your message has been received. Dr. Blake or her team will contact you within 24-48 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 bg-[#4a4a38] text-white px-6 py-3 rounded hover:bg-[#36362b] transition"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6 text-[#4a4a38]">
              {/* input fields ... */}
              {/* same as before */}

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  className="mt-1 h-5 w-5 rounded border-[#bdbbae] focus:ring-[#4a4a38]"
                />
                <label htmlFor="consent" className="text-sm">
                  I agree to be contacted by Dr. Blake&#39;s office regarding my inquiry. 
                  I understand my information will be kept confidential.
                </label>
              </div>
              {errors.consent && <p className="text-red-600 text-sm mt-1">{errors.consent}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-6 bg-[#4a4a38] text-white px-6 py-3 rounded hover:bg-[#36362b] transition disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
