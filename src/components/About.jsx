import { motion } from "framer-motion";
import logoMark from "../assets/aatral-yoga-logo2.webp";
import { LeafBottomLeft, AbstractFlowLines } from "./Decorations";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: i * 0.14, ease },
  }),
};

function About() {
  return (
    <section id="about" className="section-pad bg-soft-cream relative overflow-hidden">
      <LeafBottomLeft className="text-green/10" />
      <AbstractFlowLines className="top-10 right-[-10%]" />
      <div className="absolute top-20 right-[-8%] w-[520px] h-[520px] rounded-full bg-gold/6 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] rounded-full bg-green/6 blur-3xl pointer-events-none" />

      <div className="container-editorial relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 xl:gap-24 items-start">
          <motion.div
            className="lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
          >
            <p className="type-eyebrow text-gold mb-3 lg:mb-4">About Us</p>
            <h2 className="type-section text-navy leading-tight">
              Welcome to <br />
              <span className="italic text-navy/85">AatralYoga</span>
            </h2>
            
            <div className="mt-12 hidden lg:block">
              <img
                src={logoMark}
                alt="Aatral Yoga emblem"
                className="w-full max-w-[280px] h-auto object-contain opacity-80"
              />
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={1}
          >
            <div className="space-y-6 type-body text-navy/80">
              <p className="font-medium text-navy type-sub mb-8">
                At AatralYoga, we believe that yoga is more than a physical practice—it is a path to strength, balance, self-awareness, and overall well-being.
              </p>
              
              <p>
                Our mission is to create a supportive and inspiring space where individuals of all ages and fitness levels can experience the transformative benefits of yoga.
              </p>
              
              <p>
                The name "Aatral" represents strength, energy, resilience, and inner power. These values form the foundation of everything we teach.
              </p>
              
              <p>
                Through mindful movement, conscious breathing, and meditation, we help our students develop not only physical fitness but also mental clarity and emotional balance.
              </p>
              
              <p>
                Whether your goal is to improve flexibility, manage stress, enhance fitness, or embark on a deeper yogic journey, AatralYoga is here to guide and support you every step of the way.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-y-6 gap-x-8 mt-12 pt-10 border-t border-navy/10">
              {[
                "Strength & Balance",
                "Mindful Movement",
                "Conscious Breathing",
                "Holistic Wellness"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center shrink-0">
                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                  </div>
                  <span className="type-body-sm font-medium text-navy">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
          className="mt-16 flex justify-center lg:hidden"
        >
          <img
            src={logoMark}
            alt="Aatral Yoga emblem"
            className="w-full max-w-xs h-auto object-contain opacity-80"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
