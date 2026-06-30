import { useState } from "react";
import { LeafBottomLeft } from "./Decorations";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import faqImage from "../assets/gallery/faq.webp";

const ease = [0.22, 1, 0.36, 1];

const faqs = [
  {
    q: "Do I need prior yoga experience to join?",
    a: "Not at all. Our sessions and programs are designed for complete beginners. Instructors adapt every class to your current level and physical comfort.",
  },
  {
    q: "What should I bring to a session?",
    a: "Wear comfortable, breathable clothing. We provide mats and props. Bring a water bottle and arrive a few minutes early to settle in before practice begins.",
  },
  {
    q: "How do corporate wellness programs work?",
    a: "We begin with a consultation to understand your team's needs, then design on-site or virtual sessions — weekly classes, wellness workshops, or retreat-style intensives tailored to your schedule.",
  },
  {
    q: "Can I switch between plans?",
    a: "Yes. You may upgrade or adjust your membership at any time. Unused sessions from monthly plans roll over within the same billing cycle.",
  },
  {
    q: "Where are sessions held?",
    a: 'Studio sessions and Online classes take place at our "AatralYoga" location',
  },
  {
    q: "How do I book my first session?",
    a: "Fill out the booking form below or reach us on WhatsApp. We'll confirm your slot within 24 hours and share everything you need for your first visit.",
  },
];

function FAQItem({ item, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06, ease }}
      className="border-b border-navy/8"
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-7 lg:py-8 text-left group"
        aria-expanded={isOpen}
      >
        <span className="type-sub text-navy pr-10 group-hover:text-navy/75 transition-colors font-normal text-xl lg:text-2xl">
          {item.q}
        </span>
        <span className="shrink-0 text-navy/30 group-hover:text-gold transition-colors">
          {isOpen ? <Minus size={22} /> : <Plus size={22} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="overflow-hidden"
          >
            <p className="pb-7 lg:pb-8 type-body-sm text-navy/55 pr-12 max-w-2xl">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="section-pad bg-soft-beige relative overflow-hidden"
    >
      <LeafBottomLeft className="text-gold/5" />
      <div className="container-editorial relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28 items-start">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="self-start"
          >
            <p className="type-eyebrow text-gold mb-6">Questions</p>

            <h2 className="type-section text-navy mb-10 lg:mb-12">FAQs</h2>

            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease }}
              className="overflow-hidden aspect-[4/4] max-w-md shadow-[0_24px_48px_-12px_rgba(11,53,91,0.12)]"
            >
              <img
                src={faqImage}
                alt="Peaceful yoga moment"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </motion.div>

          <div>
            {faqs.map((item, index) => (
              <FAQItem
                key={item.q}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
