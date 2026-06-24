import { motion } from "framer-motion";
import quoteBg from "../assets/gallery/gita.webp";

const ease = [0.22, 1, 0.36, 1];

function QuoteSection() {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[75vh] flex items-center justify-center overflow-hidden">
      <motion.img
        src={quoteBg}
        alt=""
        aria-hidden="true"
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/55" />

      <motion.div
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease }}
        className="relative z-10 text-center container-editorial py-28 lg:py-36 max-w-5xl surface-dark"
      >
        <p className="type-eyebrow text-gold/80 mb-10 lg:mb-12">Aatral Yoga</p>
        <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.25] font-light italic text-balance tracking-tight">
          "Yoga is the journey of the self, through the self, to the self."
        </blockquote>
        <p className="type-small text-white/72 mt-12 lg:mt-14 tracking-[0.25em] uppercase">
          — The Bhagavad Gita
        </p>
      </motion.div>
    </section>
  );
}

export default QuoteSection;
