import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AbstractFlowLines } from "./Decorations";

const ease = [0.22, 1, 0.36, 1];

const categories = [
  { id: "01", title: "Class Details" },
  { id: "02", title: "Online Yoga" },
  { id: "03", title: "Corporate Wellness" },
  { id: "04", title: "Group Yoga Classes" },
  { id: "05", title: "Specialized Programs" },
  { id: "06", title: "Personal Yoga Training" },
];

function Programs() {
  const [activeTab, setActiveTab] = useState("01");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderContent = (id) => {
    switch (id) {
      case "01":
        return (
          <motion.div
            key="01"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease }}
          >
            <h3 className="type-sub text-navy mb-8">Class Details & Packages</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="border-b border-navy/10">
                    <th className="py-4 type-body-sm font-medium text-navy w-1/3">Program</th>
                    <th className="py-4 type-body-sm font-medium text-navy w-1/3">Duration</th>
                    <th className="py-4 type-body-sm font-medium text-navy w-1/3">Sessions</th>
                  </tr>
                </thead>
                <tbody className="type-body-sm text-navy/70">
                  <tr className="border-b border-navy/5 hover:bg-navy/5 transition-colors">
                    <td className="py-5 font-medium text-navy">Monthly</td>
                    <td className="py-5">1 Month</td>
                    <td className="py-5">20 Sessions</td>
                  </tr>
                  <tr className="border-b border-navy/5 hover:bg-navy/5 transition-colors">
                    <td className="py-5 font-medium text-navy">Quarterly</td>
                    <td className="py-5">3 Months</td>
                    <td className="py-5">60 Sessions</td>
                  </tr>
                  <tr className="border-b border-navy/5 hover:bg-navy/5 transition-colors">
                    <td className="py-5 font-medium text-navy">Half-Year</td>
                    <td className="py-5">6 Months</td>
                    <td className="py-5">120 Sessions</td>
                  </tr>
                  <tr className="border-b border-navy/5 hover:bg-navy/5 transition-colors">
                    <td className="py-5 font-medium text-navy">100 Hour Program</td>
                    <td className="py-5">2-3 Months</td>
                    <td className="py-5">100 Training Hours</td>
                  </tr>
                  <tr className="border-b border-navy/5 hover:bg-navy/5 transition-colors">
                    <td className="py-5 font-medium text-navy">Personal Training</td>
                    <td className="py-5">1 Month</td>
                    <td className="py-5">12 Sessions</td>
                  </tr>
                  <tr className="hover:bg-navy/5 transition-colors">
                    <td className="py-5 font-medium text-navy">Corporate Yoga</td>
                    <td className="py-5">Per Session (Online/Onsite)</td>
                    <td className="py-5">Group Based</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <div className="mt-10">
              <a href="#contact" className="inline-block bg-navy text-white px-8 py-3 type-small tracking-widest uppercase hover:bg-gold hover:text-white transition-colors duration-300">
                Contact Us For Details
              </a>
            </div> */}
          </motion.div>
        );
      case "02":
        return (
          <motion.div
            key="02"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease }}
          >
            <h3 className="type-sub text-navy mb-4">Online Yoga</h3>
            <p className="type-body text-navy/70 mb-8 max-w-2xl">Practice yoga from anywhere with guided online sessions designed for flexibility, consistency, and wellness.</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Live Online Classes", desc: "Professional instructor-led live yoga sessions." },
                { title: "Weekly Schedule", desc: "Structured classes designed for regular practice." },
                { title: "How It Works", desc: "Simple guided online learning process." },
                { title: "Recorded Sessions", desc: "Access previous sessions for practice." },
                { title: "Practice Library", desc: "Future offering for extended learning resources." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 border border-navy/5 shadow-sm hover:border-gold transition-colors duration-300">
                  <h4 className="type-body-sm font-medium text-navy mb-2">{item.title}</h4>
                  <p className="type-small text-navy/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case "03":
        return (
          <motion.div
            key="03"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease }}
          >
            <h3 className="type-sub text-navy mb-4">Corporate Wellness Programs</h3>
            <p className="type-body text-navy/70 mb-8 max-w-2xl">Helping organizations create healthier, focused, and stress-free workplaces through yoga and mindfulness.</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Corporate Yoga", desc: "Onsite and online yoga sessions for employees." },
                { title: "Employee Wellness Programs", desc: "Programs designed for workplace health and wellbeing." },
                { title: "Workshops", desc: "Wellness workshops for teams." },
                { title: "Stress Management", desc: "Yoga-based techniques for reducing workplace stress." },
                { title: "Mindfulness at Work", desc: "Improving focus, awareness, and productivity." },
                { title: "Desk Yoga", desc: "Simple practices for professionals." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 border border-navy/5 shadow-sm hover:border-gold transition-colors duration-300">
                  <h4 className="type-body-sm font-medium text-navy mb-2">{item.title}</h4>
                  <p className="type-small text-navy/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case "04":
        return (
          <motion.div
            key="04"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease }}
          >
            <h3 className="type-sub text-navy mb-8">Group Yoga Classes</h3>
            <div className="space-y-4">
              {[
                { title: "Beginner Yoga", desc: "Build strong foundations with safe and guided yoga practice." },
                { title: "Hatha Yoga", desc: "Traditional yoga practice focusing on balance, breath, and awareness." },
                { title: "Flexibility & Mobility Yoga", desc: "Improve movement quality, flexibility, and body control." },
                { title: "Stress Relief Yoga", desc: "Relaxation-focused sessions for mental calmness." },
                { title: "Senior Citizen Yoga", desc: "Gentle yoga practices supporting mobility and wellbeing." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 border border-navy/5 flex flex-col sm:flex-row sm:items-center gap-4 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-navy/5 flex items-center justify-center shrink-0 rounded-full">
                    <span className="w-2 h-2 bg-gold rounded-full"></span>
                  </div>
                  <div>
                    <h4 className="type-body font-medium text-navy mb-1">{item.title}</h4>
                    <p className="type-body-sm text-navy/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case "05":
        return (
          <motion.div
            key="05"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease }}
          >
            <h3 className="type-sub text-navy mb-8">Specialized Wellness Programs</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Weight Management Yoga", desc: "Support healthy lifestyle transformation through mindful movement." },
                { title: "Women's Wellness Yoga", desc: "Programs designed to support women's health and wellbeing." },
                { title: "Prenatal & Postnatal Yoga", desc: "Future offering focused on supportive wellness practices." },
                { title: "Meditation & Mindfulness", desc: "Develop awareness, relaxation, and mental balance." }
              ].map((item, i) => (
                <div key={i} className="bg-ivory/50 p-8 border border-navy/5 text-center hover:border-gold transition-colors duration-300">
                  <h4 className="type-body font-medium text-navy mb-3">{item.title}</h4>
                  <p className="type-body-sm text-navy/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case "06":
        return (
          <motion.div
            key="06"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease }}
          >
            <h3 className="type-sub text-navy mb-8">Personal Yoga Training</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-navy p-8 text-white relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl"></div>
                <h4 className="type-body font-medium mb-4 relative z-10">One-to-One Sessions</h4>
                <p className="type-body-sm text-white/80 relative z-10">Personal guidance based on individual goals and requirements.</p>
              </div>
              <div className="bg-white p-8 border border-navy/5 shadow-sm">
                <h4 className="type-body font-medium text-navy mb-4">Customized Programs</h4>
                <p className="type-body-sm text-navy/70">Yoga plans designed according to fitness level, lifestyle, and wellness goals.</p>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="programs" className="section-pad bg-light-blue relative overflow-hidden">
      <AbstractFlowLines className="top-20 left-[-5%] text-navy/5" />
       <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/4 blur-3xl" />
      </div>

      <div className="container-editorial relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-16 lg:mb-24"
        >
          <p className="type-eyebrow text-gold mb-6">Classes Details & Yoga Programs</p>
          <h2 className="type-section text-navy mb-8 max-w-4xl mx-auto leading-tight">Explore our thoughtfully designed yoga programs created to support strength, flexibility, mindfulness, and complete wellness.</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Online Yoga", "Personal Training", "Corporate Wellness", "Group Classes"].map((badge, i) => (
              <span key={i} className="px-4 py-1.5 bg-white border border-navy/10 rounded-full type-small text-navy/70 flex items-center gap-2 shadow-sm">
                <span className="text-gold">✓</span> {badge}
              </span>
            ))}
          </div>
        </motion.div>

        {isMobile ? (
          // Mobile Layout: Stacked Interactive Cards
          <div className="space-y-4 max-w-xl mx-auto">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white border border-navy/5 shadow-sm overflow-hidden rounded-lg">
                <button
                  onClick={() => setActiveTab(activeTab === cat.id ? null : cat.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-navy/5"
                >
                  <span className={`type-body font-medium transition-colors ${activeTab === cat.id ? "text-gold" : "text-navy"}`}>
                    <span className="text-navy/30 mr-3 type-small font-normal">{cat.id}</span>
                    {cat.title}
                  </span>
                  <span className={`text-navy/30 transition-transform duration-300 ${activeTab === cat.id ? "rotate-45" : ""}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </span>
                </button>
                <AnimatePresence>
                  {activeTab === cat.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease }}
                      className="px-6 pb-6"
                    >
                      <div className="pt-4 border-t border-navy/5">
                        {renderContent(cat.id)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        ) : (
          // Desktop Layout: Left Menu, Right Content
          <div className="grid lg:grid-cols-12 gap-12 xl:gap-20 max-w-6xl mx-auto">
            {/* Left side category menu */}
            <div className="lg:col-span-4">
              <div className="flex flex-col space-y-2 relative">
                 <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-navy/10 z-0"></div>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`relative z-10 text-left px-8 py-5 transition-all duration-300 flex items-center group overflow-hidden ${
                      activeTab === cat.id ? "bg-white shadow-md border border-navy/5 rounded-r-lg" : "hover:bg-navy/5"
                    }`}
                  >
                    {activeTab === cat.id && (
                      <motion.div
                        layoutId="active-indicator"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gold"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className={`type-small mr-4 transition-colors ${activeTab === cat.id ? "text-gold" : "text-navy/40 group-hover:text-navy/60"}`}>
                      {cat.id}
                    </span>
                    <span className={`type-body font-medium transition-colors ${activeTab === cat.id ? "text-navy" : "text-navy/70 group-hover:text-navy"}`}>
                      {cat.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right side content panel */}
            <div className="lg:col-span-8 bg-ivory/50 border border-navy/5 p-10 xl:p-14 min-h-[500px]">
              <AnimatePresence mode="wait">
                {renderContent(activeTab)}
              </AnimatePresence>
            </div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="mt-20 lg:mt-32 text-center"
        >
          <p className="type-sub text-navy mb-8">Begin Your Yoga Journey With AatralYoga</p>
          <a href="#contact" className="inline-block bg-navy text-white px-10 py-4 type-small font-medium tracking-widest uppercase hover:bg-gold hover:text-white transition-all duration-500 shadow-[0_10px_30px_-10px_rgba(11,53,91,0.5)] hover:shadow-[0_10px_40px_-10px_rgba(202,165,114,0.6)] hover:-translate-y-1 rounded-lg">
            Book Your Session
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Programs;
