import { motion } from "framer-motion";
import logoMark from "../assets/aatral-yoga-logo2.webp";

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
    <section id="about" className="section-pad gradient-warm relative overflow-hidden">
      <div className="absolute top-20 right-[-8%] w-[520px] h-[520px] rounded-full bg-gold/6 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] rounded-full bg-green/6 blur-3xl pointer-events-none" />

      <div className="container-editorial relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 xl:gap-24 items-end">
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
          >
            <p className="type-eyebrow text-gold mb-3 lg:mb-4">About Aatral Yoga</p>
            <h2 className="type-statement text-navy">
              Awaken.
              <br />
              Align.
              <br />
              <span className="italic text-navy/85">Achieve.</span>
            </h2>
          </motion.div>

          <motion.div
            className="lg:col-span-5 lg:pb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={1}
          >
            <p className="type-body">
              A Chennai sanctuary where ancient yogic wisdom meets contemporary
              wellness — crafted for individuals and organizations seeking
              clarity, strength, and presence.
            </p>
            <p className="type-body-sm mt-8 max-w-md">
              Every session is intentional. Not exercise — a practice of
              becoming.
            </p>

            <div className="flex gap-16 mt-14 pt-10 border-t border-navy/8">
              <div>
                <p className="font-display text-5xl lg:text-6xl text-navy tracking-tight">
                  12+
                </p>
                <p className="type-small text-navy/55 mt-2 uppercase tracking-widest">
                  Years
                </p>
              </div>
              <div>
                <p className="font-display text-5xl lg:text-6xl text-navy tracking-tight">
                  500+
                </p>
                <p className="type-small text-navy/55 mt-2 uppercase tracking-widest">
                  Practitioners
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
          className="mt-16 lg:mt-24 xl:mt-28 flex justify-center"
        >
          <img
            src={logoMark}
            alt="Aatral Yoga emblem"
            className="w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
