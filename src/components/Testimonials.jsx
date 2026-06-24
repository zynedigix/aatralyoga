import { motion } from "framer-motion";
import portrait1 from "../assets/gallery/testimonial-01.webp";
import portrait2 from "../assets/gallery/testimonial-02.webp";
import portrait3 from "../assets/gallery/testimonial-03.webp";

const ease = [0.22, 1, 0.36, 1];

const testimonials = [
  {
    quote:
      "Aatral Yoga transformed how I approach each day. The sessions are deeply restorative — I leave feeling lighter, clearer, and more present than I have in years.",
    name: "Priya Raman",
    role: "Studio Member, Chennai",
    image: portrait1,
  },
  {
    quote:
      "We brought Aatral into our office and the shift was immediate. Our team communicates better, handles stress with more grace, and genuinely looks forward to wellness days.",
    name: "Arjun Mehta",
    role: "HR Director, Tech Firm",
    image: portrait2,
  },
  {
    quote:
      "The instructors hold space with such warmth and precision. Every class feels like a personal retreat — thoughtful, unhurried, and profoundly grounding.",
    name: "Lakshmi Venkat",
    role: "Monthly Practitioner",
    image: portrait3,
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-ivory overflow-hidden">
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-20 lg:mb-32 xl:mb-40"
        >
          <p className="type-eyebrow text-gold mb-6">Voices</p>
          <h2 className="type-section text-navy">Testimonials</h2>
        </motion.div>

        {testimonials.map((item, index) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 56 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease }}
            className={`grid lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center ${
              index > 0 ? "mt-28 lg:mt-40 xl:mt-48" : ""
            }`}
          >
            <div
              className={`lg:col-span-5 relative ${
                index % 2 === 1 ? "lg:order-2 lg:col-start-8" : ""
              }`}
            >
              <div className="absolute -inset-6 lg:-inset-8 rounded-full border border-gold/15 pointer-events-none" />
              <motion.div
                initial={{ clipPath: "circle(0% at 50% 50%)" }}
                whileInView={{ clipPath: "circle(75% at 50% 50%)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease }}
                className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px] mx-auto rounded-full overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            <div
              className={`lg:col-span-7 ${
                index % 2 === 1 ? "lg:order-1 lg:col-start-1 lg:row-start-1" : ""
              }`}
            >
              <span className="font-display text-7xl lg:text-8xl text-gold/20 leading-none select-none">
                "
              </span>
              <blockquote className="font-display text-2xl md:text-3xl lg:text-[2.5rem] xl:text-[2.75rem] text-navy leading-[1.35] italic -mt-6 lg:-mt-8 max-w-2xl">
                {item.quote}
              </blockquote>
              <div className="mt-12 lg:mt-16">
                <p className="type-sub text-navy not-italic font-medium">
                  {item.name}
                </p>
                <p className="type-body-sm text-navy/45 mt-2">{item.role}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
