import { motion } from "framer-motion";
import yogaCorporate from "../assets/gallery/yoga08.webp";

const ease = [0.22, 1, 0.36, 1];

const pillars = [
  {
    title: "Corporate Yoga Training",
    text: "On-site and virtual sessions designed for modern workplaces — building focus, posture, and collective energy across your organization.",
  },
  {
    title: "Employee Wellness",
    text: "Structured programs that reduce burnout, improve morale, and give your people tools they carry beyond the mat.",
  },
  {
    title: "Workplace Balance",
    text: "Breathwork, mindfulness, and restorative practices woven into the rhythm of the workday — where performance meets wellbeing.",
  },
];

function Corporate() {
  return (
    <section id="corporate" className="section-pad bg-navy surface-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gold/15 blur-[140px]" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-green/10 blur-[120px]" />
      </div>

      <div className="container-editorial relative">
        <div className="grid lg:grid-cols-12 gap-16 xl:gap-24 items-center">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, ease }}
          >
            <p className="type-eyebrow text-gold mb-8">For Organizations</p>
            <h2 className="type-section text-white leading-[1.04]">
              Corporate
              <br />
              <span className="italic font-normal text-white/75">Wellness</span>
            </h2>
            <p className="type-body text-white/82 mt-10 max-w-lg leading-[1.85]">
              Your people are your greatest asset. When they feel grounded,
              focused, and resilient — the entire organization thrives.
            </p>
            <p className="type-body-sm text-white/72 mt-6 max-w-lg">
              Aatral Yoga partners with Chennai's leading companies to bring
              mindful movement and restorative practice directly into corporate
              environments. From weekly desk-side sessions to full wellness
              retreats, we design programs that fit your culture.
            </p>
            <a
              href="#contact"
              className="inline-block mt-12 xl:mt-16 bg-gold text-navy px-10 py-4 rounded-full type-small font-medium tracking-widest uppercase hover:bg-gold/90 transition-colors duration-500"
            >
              Enquire for Your Team
            </a>
          </motion.div>

          <motion.div
            className="lg:col-span-7 relative"
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, ease }}
          >
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease }}
              className="overflow-hidden aspect-[5/4] lg:aspect-[16/11] max-w-2xl lg:max-w-none lg:ml-auto shadow-[0_40px_80px_-20px_rgba(0,0,0,0.35)]"
            >
              <img
                src={yogaCorporate}
                alt="Corporate wellness session"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="mt-16 xl:mt-20 space-y-12 xl:space-y-16">
              {pillars.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.12, ease }}
                  className="grid lg:grid-cols-[200px_1fr] xl:grid-cols-[240px_1fr] gap-6 lg:gap-10 items-baseline border-b border-white/8 pb-12 last:border-0 last:pb-0"
                >
                  <h3 className="type-sub text-white">{item.title}</h3>
                  <p className="type-body-sm text-white/72 leading-[1.85]">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Corporate;
