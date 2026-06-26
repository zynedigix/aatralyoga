import { motion } from "framer-motion";
import { LeafTopRight } from "./Decorations";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: i * 0.14, ease },
  }),
};

function VisionMission() {
  return (
    <section id="vision-mission" className="section-pad bg-light-green relative overflow-hidden">
      <LeafTopRight className="text-green/10" />
      <div className="absolute top-0 right-[-5%] w-[400px] h-[400px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-[-5%] w-[500px] h-[500px] rounded-full bg-green/5 blur-3xl pointer-events-none" />

      <div className="container-editorial relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-16 lg:mb-24"
        >
          <p className="type-eyebrow text-gold mb-4">Our Purpose</p>
          <h2 className="type-section text-navy">Vision & Mission</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Vision Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={0}
            className="group bg-white p-10 lg:p-14 border border-navy/5 shadow-sm hover:shadow-md transition-all duration-500 rounded-lg relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="type-sub text-navy mb-6 group-hover:text-gold transition-colors duration-500">Vision</h3>
            <p className="type-body text-navy/80 leading-relaxed">
              To become a trusted yoga and wellness community that empowers individuals to lead healthier, happier, and more balanced lives through the practice of yoga.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={1}
            className="group bg-white p-10 lg:p-14 border border-navy/5 shadow-sm hover:shadow-md transition-all duration-500 rounded-lg relative overflow-hidden"
          >
             <div className="absolute top-0 left-0 w-1.5 h-full bg-green opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="type-sub text-navy mb-6 group-hover:text-green transition-colors duration-500">Mission</h3>
            <ul className="space-y-4">
              {[
                "To make yoga accessible to people of all ages and backgrounds.",
                "To promote physical, mental, and emotional well-being through authentic yoga practices.",
                "To create a supportive environment where students can grow at their own pace.",
                "To inspire lifelong wellness habits through mindful living.",
                "To build a strong community centred on health, positivity, and personal growth."
              ].map((item, index) => (
                <li key={index} className="type-body-sm text-navy/80 flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy/20 mt-2 shrink-0 group-hover:bg-green transition-colors duration-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
