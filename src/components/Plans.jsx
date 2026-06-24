import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const plans = [
  {
    sessions: "01",
    name: "Discovery",
    tagline: "Begin your journey",
    price: "₹1,200",
    period: "single session",
    includes: [
      "60-minute guided session",
      "Posture assessment",
      "Breathwork introduction",
      "Personal practice notes",
    ],
  },
  {
    sessions: "04",
    name: "Rhythm",
    tagline: "Find your flow",
    price: "₹4,200",
    period: "per month",
    includes: [
      "Four guided sessions",
      "Customized practice plan",
      "Progress check-ins",
      "Priority scheduling",
      "Between-session support",
    ],
    featured: true,
  },
  {
    sessions: "08",
    name: "Transformation",
    tagline: "Deepen your practice",
    price: "₹7,500",
    period: "per month",
    includes: [
      "Eight guided sessions",
      "Holistic wellness roadmap",
      "Meditation & pranayama",
      "Lifestyle guidance",
      "Complimentary group session",
    ],
  },
];

function Plans() {
  return (
    <section id="plans" className="section-pad bg-[#f5f2ee] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/4 blur-3xl" />
      </div>

      <div className="container-editorial relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-20 lg:mb-28 xl:mb-32"
        >
          <p className="type-eyebrow text-gold mb-6">Membership</p>
          <h2 className="type-section text-navy">Plans & Packages</h2>
          <p className="type-body text-navy/65 max-w-xl mx-auto mt-8">
            Choose the rhythm that suits your life. Every membership includes
            dedicated attention from our certified instructors.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-0 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 56, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: index * 0.12, ease }}
              className={`plan-card group relative flex flex-col px-8 lg:px-10 xl:px-14 py-12 lg:py-16 xl:py-20 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-navy hover:shadow-[0_24px_64px_-12px_rgba(11,53,91,0.35)] hover:-translate-y-1.5 hover:z-10 ${
                index > 0 ? "lg:border-l border-navy/8 group-hover:border-transparent" : ""
              } ${plan.featured ? "bg-ivory/80 group-hover:bg-navy" : "bg-transparent"}`}
            >
              {plan.featured && (
                <span className="type-eyebrow text-gold group-hover:text-gold absolute top-8 lg:top-10 left-8 lg:left-10 xl:left-14 transition-colors duration-700">
                  Most Popular
                </span>
              )}

              <div className={plan.featured ? "mt-8" : ""}>
                <p className="font-display text-[5rem] lg:text-[6rem] xl:text-[7rem] font-light leading-none text-navy/8 group-hover:text-white/10 tracking-tight transition-colors duration-700">
                  {plan.sessions}
                </p>
                <p className="type-eyebrow text-navy/50 group-hover:text-gold mt-4 transition-colors duration-700">
                  {plan.tagline}
                </p>
                <h3 className="type-sub text-navy group-hover:text-white/95 mt-3 transition-colors duration-700">
                  {plan.name}
                </h3>

                <div className="mt-8 lg:mt-10 mb-10 lg:mb-12">
                  <span className="font-display text-4xl lg:text-5xl text-navy group-hover:text-white/95 transition-colors duration-700">
                    {plan.price}
                  </span>
                  <span className="type-body-sm text-navy/55 group-hover:text-white/78 ml-3 transition-colors duration-700">
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-4 flex-grow">
                  {plan.includes.map((item) => (
                    <li
                      key={item}
                      className="type-body-sm text-navy/70 group-hover:text-white/82 flex items-start gap-3 transition-colors duration-700"
                    >
                      <span className="w-1 h-1 rounded-full bg-gold group-hover:bg-gold mt-2.5 shrink-0 transition-colors duration-700" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-12 lg:mt-16 inline-block w-full text-center py-4 type-small font-medium tracking-widest uppercase transition-all duration-700 ${
                    plan.featured
                      ? "bg-navy text-white group-hover:bg-white group-hover:text-navy"
                      : "text-navy border border-navy/15 group-hover:border-white/30 group-hover:text-white/95 group-hover:bg-white/10"
                  }`}
                >
                  Begin Membership
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Plans;
