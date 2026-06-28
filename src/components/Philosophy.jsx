import { motion } from "framer-motion";
import { AbstractYogaShape } from "./Decorations";
import philosophyBg from "../assets/gallery/philosophy-bkg.webp";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: i * 0.14, ease },
  }),
};

const philosophies = [
  {
    title: "1. Strength (Aatral)",
    description: "Building physical strength, resilience, and confidence through regular practice.",
    color: "gold"
  },
  {
    title: "2. Balance",
    description: "Creating balance in daily life through mindful movement, breath awareness, and emotional well-being.",
    color: "green"
  },
  {
    title: "3. Transformation",
    description: "Encouraging continuous growth and self-discovery through yoga, meditation, and conscious living.",
    color: "navy"
  }
];

function Philosophy() {
  return (
    
    <section id="philosophy" className="section-pad bg-navy relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url(${philosophyBg})`,
        }}
      />

  {/* Blue overlay to maintain AatralYoga navy tone */}
  <div className="absolute inset-0 bg-navy/65" />
      <AbstractYogaShape className="bottom-0 right-[-5%] text-gold/5" />
      <div className="container-editorial relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-16 lg:mb-24"
        >
          <p className="type-eyebrow text-gold mb-4">Our Teaching</p>
          <h2 className="type-section text-white mb-8">Philosophy of AatralYoga</h2>
          <p className="type-body text-white/70 max-w-2xl mx-auto">
            At AatralYoga, we believe that true wellness comes from harmony between the body, mind, and breath.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {philosophies.map((item, index) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={index}
              className="bg-white/5 p-8 lg:p-10 border-t border-white/10 hover:border-gold transition-colors duration-500 rounded-lg">
              <h3 className="type-sub text-white mb-4">{item.title}</h3>
              <p className="type-body-sm text-white/70">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="type-body font-medium text-white/90 italic">
            "We focus on sustainable progress rather than perfection, helping students develop a lifelong relationship with yoga."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Philosophy;
