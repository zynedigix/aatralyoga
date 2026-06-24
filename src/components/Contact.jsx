import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, ExternalLink } from "lucide-react";
import contactImage from "../assets/gallery/yoga04.webp";

const ease = [0.22, 1, 0.36, 1];

const addressLines = [
  "No 3, Ground Floor, Olympia Mithila, Thirumazhisai,",
  "Tiruvallur, Tamil Nadu - 600124",
];

const mapsQuery = encodeURIComponent(
  "No 3, Ground Floor, Olympia Mithila, Thirumazhisai, Tiruvallur, Tamil Nadu 600124"
);
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
const mapsEmbedUrl = `https://maps.google.com/maps?q=${mapsQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="section-pad gradient-warm relative overflow-hidden">
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 lg:mb-20 xl:mb-24"
        >
          <p className="type-eyebrow text-gold mb-6">Begin Here</p>
          <h2 className="type-section text-navy">Book Your Session</h2>
          <p className="type-body text-navy/65 max-w-lg mt-8">
            Take the first step toward balance. Share your details and we'll
            craft a wellness experience tailored to you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 xl:gap-20 items-start">
          <motion.form
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="sr-only">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-5 type-body bg-transparent border-b border-navy/12 outline-none focus:border-gold/60 transition-colors text-navy placeholder:text-navy/40"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-5 type-body bg-transparent border-b border-navy/12 outline-none focus:border-gold/60 transition-colors text-navy placeholder:text-navy/40"
              />
            </div>

            <div>
              <label htmlFor="phone" className="sr-only">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Phone Number"
                className="w-full px-6 py-5 type-body bg-transparent border-b border-navy/12 outline-none focus:border-gold/60 transition-colors text-navy placeholder:text-navy/40"
              />
            </div>

            <div>
              <label htmlFor="interest" className="sr-only">
                I'm interested in
              </label>
              <select
                id="interest"
                defaultValue=""
                className="w-full px-6 py-5 type-body bg-transparent border-b border-navy/12 outline-none focus:border-gold/60 transition-colors text-navy/75"
              >
                <option value="" disabled>
                  I'm interested in...
                </option>
                <option value="studio">Studio Sessions</option>
                <option value="corporate">Corporate Wellness</option>
                <option value="monthly">Monthly Membership</option>
                <option value="other">Something Else</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Tell us about your wellness goals"
                className="w-full px-6 py-5 type-body bg-transparent border-b border-navy/12 outline-none focus:border-gold/60 transition-colors text-navy placeholder:text-navy/40 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-navy text-white py-5 type-small font-medium tracking-widest uppercase hover:bg-navy-light transition-colors duration-500 mt-4 rounded-full"
            >
              Send Enquiry
            </button>
          </motion.form>

          <div className="space-y-10 lg:space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="space-y-8 lg:space-y-10"
            >
              <div className="flex gap-5 items-start">
                <MapPin size={22} className="text-gold mt-1 shrink-0" />
                <div>
                  <p className="type-eyebrow text-navy/50 mb-3">Address</p>
                  <address className="type-body text-navy not-italic leading-relaxed">
                    {addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <Mail size={22} className="text-gold mt-1 shrink-0" />
                <div>
                  <p className="type-eyebrow text-navy/50 mb-2">Email</p>
                  <a
                    href="mailto:contact@aatralyoga.com"
                    className="type-body text-navy hover:text-gold transition-colors"
                  >
                    contact@aatralyoga.com
                  </a>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <Phone size={22} className="text-gold mt-1 shrink-0" />
                <div>
                  <p className="type-eyebrow text-navy/50 mb-2">Phone</p>
                  <a
                    href="tel:+919876543210"
                    className="type-body text-navy hover:text-gold transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

 

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green text-white px-8 py-4 type-small font-medium tracking-widest uppercase hover:bg-green/90 transition-colors duration-500 rounded-full"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
              className="overflow-hidden rounded-sm shadow-[0_24px_48px_-12px_rgba(11,53,91,0.12)] border border-navy/6"
            >
              <iframe
                title="Aatral Yoga studio location"
                src={mapsEmbedUrl}
                className="w-full h-56 sm:h-64 lg:h-72 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </motion.div>

 
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
