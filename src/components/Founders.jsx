import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LeafBottomLeft } from "./Decorations";
import archanaImg from "../assets/gallery/Founder-Archana.webp";
import viswanathImg from "../assets/gallery/Founder-Viswanath.webp";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-navy/10 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span
          className={`type-sub transition-colors ${isOpen ? "text-gold" : "text-navy group-hover:text-navy/80"}`}
        >
          {title}
        </span>
        <span
          className={`text-navy/50 transition-transform duration-300 ${isOpen ? "rotate-180 text-gold" : "group-hover:text-navy"}`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="overflow-hidden"
          >
            <div className="pb-8">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function Founders() {
  const [openSectionA, setOpenSectionA] = useState("intro");
  const [openSectionV, setOpenSectionV] = useState("about");

  const toggleSectionA = (section) => {
    setOpenSectionA(openSectionA === section ? null : section);
  };

  const toggleSectionV = (section) => {
    setOpenSectionV(openSectionV === section ? null : section);
  };

  return (
    <section id="founders" className="section-pad bg-warm-white relative">
      <LeafBottomLeft className="text-gold/5" />
      <div className="container-editorial relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <p className="type-eyebrow text-gold mb-4">Leadership</p>
          <h2 className="type-section text-navy">Meet Our Founders</h2>
        </div>

        {/* Founder 1: Archana J */}
        {/* Founders Grid */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px",
          }}
          className="
    grid 
    md:grid-cols-2
    gap-16
    lg:gap-24
    max-w-5xl
    mx-auto
  "
        >
          {/* Archana */}

          <div className="text-center flex flex-col items-center">
            <div
              className="
        w-72
        h-72
        lg:w-80
        lg:h-80
        rounded-full
        overflow-hidden
        relative
      "
            >
              <img
                src={archanaImg}
                alt="Archana J - Founder"
                className="
          w-full
          h-full
          object-cover
        "
              />

              <div
                className="
          absolute
          inset-0
          bg-navy/5
          mix-blend-multiply
        "
              />
            </div>

            <div className="mt-8 text-center">
              <h3 className="type-sub text-navy">Archana J</h3>

              <p className="type-body-sm text-gold mt-2">
                Founder, AatralYoga
              </p>
              
              <p className="type-small text-navy/60 mt-3 max-w-sm">
                M.C.A., Certified Yoga & Naturopathy Instructor
              </p>

            </div>
          </div>

          {/* Viswanath */}

          <div className="text-center flex flex-col items-center">
            <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden relative">
              <img src={viswanathImg} alt="Viswanath Balaji J - Co-Founder" className="w-full h-full object-cover" />

              <div className=" absolute inset-0 bg-navy/5 mix-blend-multiply" />
            </div>

            <div className="mt-8 text-center">
              <h3 className="type-sub text-navy">Viswanath Balaji J</h3>

              <p className="type-body-sm text-gold mt-2">
                Co-Founder, AatralYoga
              </p>

              <p className="type-small text-navy/60 mt-3 max-w-sm">
                B.E (Mech.), M.Sc. Yoga for Human Excellence, Certified Yoga Trainer - International Yoga Academy
              </p>
            </div>
          </div>
        </motion.div>
<br /><br />
        <div className="bg-navy text-white p-10 text-center relative overflow-hidden rounded-sm">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl"></div>
          <h4 className="type-sub mb-6 relative z-10">Our Promise</h4>
          <p className="type-body-sm text-white/80 mb-4 relative z-10">
            At AatralYoga, we are committed to guiding you on a journey toward
            greater health, balance, and self-discovery.
          </p>
          <p className="type-body-sm text-white/80 mb-8 relative z-10">
            Through dedicated practice, mindful awareness, and personalised
            support, we help you unlock your inner strength and create lasting
            positive change.
          </p>
          <p className="type-eyebrow text-gold relative z-10">
            AatralYoga – Empowering Life Through Yoga, Wellness & Mindfulness.
          </p>
        </div>

        {/* Divider */}
        <div className="max-w-3xl mx-auto border-t border-navy/10 mb-32"></div>
      </div>
    </section>
  );
}

export default Founders;
