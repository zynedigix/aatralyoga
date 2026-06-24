import { motion } from "framer-motion";
import yogaCenter from "../assets/gallery/yoga-pose.webp";

const ease = [0.22, 1, 0.36, 1];

const programs = [
  {
    title: "Hatha Yoga",
    text: "Classical postures and breath awareness — the foundation of every practice.",
    side: "left",
  },
  {
    title: "Meditation",
    text: "Guided stillness to sharpen focus and cultivate lasting inner peace.",
    side: "left",
  },
  {
    title: "Breathwork",
    text: "Pranayama techniques that energize, calm, and restore natural balance.",
    side: "left",
  },
  {
    title: "Flexibility",
    text: "Progressive mobility work that opens the body with patience and care.",
    side: "right",
  },
  {
    title: "Stress Management",
    text: "Mindful practices designed to release tension and rebuild resilience.",
    side: "right",
  },
  {
    title: "Corporate Yoga",
    text: "Workplace-ready sessions that bring focus and vitality to your team.",
    side: "right",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.1, ease },
  }),
};

function ProgramBlock({ item, index }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeIn}
      custom={index}
      className={`max-w-[260px] xl:max-w-[300px] group ${
        item.side === "right" ? "lg:ml-auto lg:text-right" : ""
      }`}
    >
      <div
        className={`hidden lg:block w-8 h-px bg-gold/40 mb-5 group-hover:w-14 transition-all duration-500 ${
          item.side === "right" ? "lg:ml-auto" : ""
        }`}
      />
      <h3 className="type-sub text-navy">{item.title}</h3>
      <p className="mt-3 type-body-sm text-navy/55">{item.text}</p>
    </motion.div>
  );
}

function Services() {
  const leftPrograms = programs.filter((p) => p.side === "left");
  const rightPrograms = programs.filter((p) => p.side === "right");

  return (
    <section id="programs" className="section-pad bg-ivory relative overflow-hidden">
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-20 lg:mb-32 xl:mb-36"
        >
          <p className="type-eyebrow text-gold mb-6">What We Offer</p>
          <h2 className="type-section text-navy">Yoga Programs</h2>
          <p className="type-body text-navy/50 max-w-xl mx-auto mt-8">
            Curated paths for every stage — from first breath to deep mastery.
          </p>
        </motion.div>

        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] gap-12 xl:gap-20 items-center min-h-[720px] xl:min-h-[780px]">
          <div className="flex flex-col justify-between h-full py-8 gap-12 xl:gap-16">
            {leftPrograms.map((item, i) => (
              <ProgramBlock key={item.title} item={item} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            className="relative w-[380px] xl:w-[440px] 2xl:w-[480px] shrink-0"
          >
            <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-gold/12 via-green/8 to-transparent blur-3xl" />
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease }}
              className="relative overflow-hidden aspect-[3/4] shadow-[0_32px_64px_-16px_rgba(11,53,91,0.18)]"
            >
              <img
                src={yogaCenter}
                alt="Yoga practice at Aatral Yoga"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          <div className="flex flex-col justify-between h-full py-8 gap-12 xl:gap-16">
            {rightPrograms.map((item, i) => (
              <ProgramBlock key={item.title} item={item} index={i + 3} />
            ))}
          </div>
        </div>

        <div className="lg:hidden space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-sm overflow-hidden aspect-[3/4] shadow-xl shadow-navy/10"
          >
            <img
              src={yogaCenter}
              alt="Yoga practice at Aatral Yoga"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-10">
            {programs.map((item, i) => (
              <ProgramBlock key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
