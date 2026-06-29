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
        <span className={`type-sub transition-colors ${isOpen ? "text-gold" : "text-navy group-hover:text-navy/80"}`}>
          {title}
        </span>
        <span className={`text-navy/50 transition-transform duration-300 ${isOpen ? "rotate-180 text-gold" : "group-hover:text-navy"}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            <div className="pb-8">
              {children}
            </div>
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
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto mb-32"
        >
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-4 sticky top-24">
              <div className="aspect-[4/4] flex items-center justify-center relative overflow-hidden rounded-full">
                <img src={archanaImg} alt="Archana J - Founder" className="w-full h-full object-cover rounded-lg" />
                <div className="absolute inset-0 bg-navy/5 mix-blend-multiply pointer-events-none" />
              </div>
              <div className="mt-8 text-center lg:text-left">
                <h3 className="type-sub text-navy">Archana J</h3>
                <p className="type-body-sm text-gold mt-2">Certified Yoga Trainer & Founder</p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <AccordionItem title="Introduction" isOpen={openSectionA === "intro"} onClick={() => toggleSectionA("intro")}>
                <div className="space-y-4 type-body text-navy/80">
                  <p>I am passionate about helping individuals improve their health, well-being, and quality of life through the practice of yoga. My teaching approach combines traditional yogic principles with practical techniques that are suitable for modern lifestyles.</p>
                  <p>As a dedicated yoga practitioner and certified instructor, my goal is to make yoga accessible, enjoyable, and beneficial for everyone—whether they are beginners or experienced practitioners.</p>
                  <p>I believe that every student is unique, and every yoga journey is personal. My classes are designed to provide guidance, encouragement, and a safe environment where students can progress with confidence.</p>
                </div>
              </AccordionItem>

              <AccordionItem title="Certifications & Experience" isOpen={openSectionA === "cert"} onClick={() => toggleSectionA("cert")}>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="bg-white p-8 border border-navy/5 shadow-sm">
                    <h4 className="type-body font-medium text-navy mb-4">Certified Yoga Teacher</h4>
                    <p className="type-small text-navy/70 mb-4">Completed a comprehensive Yoga Teacher Training Program covering:</p>
                    <ul className="space-y-2 type-small text-navy/70">
                      {["Yoga Asanas", "Pranayama", "Meditation Techniques", "Yoga Philosophy", "Human Anatomy & Physiology", "Teaching Methodology", "Alignment & Adjustments", "Class Sequencing"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full" /> {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white p-8 border border-navy/5 shadow-sm">
                    <h4 className="type-body font-medium text-navy mb-4">Teaching Experience</h4>
                    <p className="type-small text-navy/70 mb-4">I have worked with individuals seeking:</p>
                    <ul className="space-y-2 type-small text-navy/70">
                      {["Improved flexibility and mobility", "Better posture and body awareness", "Stress management and relaxation", "Enhanced physical fitness", "Mental clarity and emotional balance", "Healthy lifestyle transformation"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full" /> {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="My Yoga Journey" isOpen={openSectionA === "journey"} onClick={() => toggleSectionA("journey")}>
                <div className="space-y-4 type-body text-navy/80">
                  <p>My yoga journey began as a personal quest for health, balance, and self-growth. What started as a simple practice gradually transformed into a deeper understanding of the profound impact yoga can have on every aspect of life.</p>
                  <p>The more I practiced and studied yoga, the more I realized its ability to transform not just the body, but also the mind and spirit. This realization inspired me to pursue formal training and eventually dedicate myself to teaching.</p>
                  <p>Today, through AatralYoga, I am committed to sharing this transformative practice with others and helping them experience the same positive changes in their own lives.</p>
                </div>
              </AccordionItem>

              <AccordionItem title="Why AatralYoga & Our Approach" isOpen={openSectionA === "approach"} onClick={() => toggleSectionA("approach")}>
                <div className="space-y-12">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {[
                      { title: "A Personalized Approach", text: "At AatralYoga, we understand that every individual has different goals, abilities, and challenges. Our classes are designed to provide personalized guidance and modifications." },
                      { title: "Authentic Yoga Practices", text: "We integrate traditional yoga principles with modern wellness approaches to create meaningful and effective learning experiences." },
                      { title: "Inclusive & Beginner Friendly", text: "Whether you are stepping onto the mat for the first time or returning after a break, our classes welcome practitioners of all levels." },
                      { title: "Holistic Wellness Focus", text: "Our programs go beyond physical exercise by incorporating: Yoga Asanas, Pranayama, Meditation, Mindfulness Practices, Relaxation Techniques, and Lifestyle Awareness." }
                    ].map((block, i) => (
                      <div key={i} className="bg-ivory/50 p-6 border border-navy/5">
                        <h5 className="type-body font-medium text-navy mb-3">{block.title}</h5>
                        <p className="type-body-sm text-navy/70">{block.text}</p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="type-body font-medium text-navy mb-6 border-b border-navy/10 pb-3">Our Approach</h4>
                    <div className="space-y-4">
                      {[
                        { title: "1. Safe Practice", text: "Emphasis on proper alignment, body awareness, and injury prevention." },
                        { title: "2. Breath Awareness", text: "Using conscious breathing techniques to improve energy, focus, and relaxation." },
                        { title: "3. Progressive Learning", text: "Helping students gradually build strength, flexibility, and confidence." },
                        { title: "4. Mind-Body Connection", text: "Encouraging mindfulness and present-moment awareness during practice." },
                        { title: "5. Sustainable Wellness", text: "Promoting habits that support long-term physical and mental health." }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4 items-start border-b border-navy/5 pb-4 last:border-0">
                          <div className="type-body font-medium text-navy w-1/3 shrink-0">{item.title}</div>
                          <div className="type-small text-navy/70">{item.text}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="Core Values & Promise" isOpen={openSectionA === "values"} onClick={() => toggleSectionA("values")}>
                <div className="space-y-12">
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      { title: "Authenticity", text: "We teach yoga with integrity, respect, and adherence to traditional yogic principles." },
                      { title: "Compassion", text: "We create a welcoming and supportive environment where everyone feels valued." },
                      { title: "Growth", text: "We encourage continuous learning, self-improvement, and personal transformation." },
                      { title: "Wellness", text: "We believe true wellness encompasses physical, mental, and emotional health." },
                      { title: "Community", text: "We foster meaningful connections and a sense of belonging among our students." },
                      { title: "Empowerment", text: "We inspire individuals to discover their inner strength and live with confidence and purpose." }
                    ].map((value, i) => (
                      <div key={i} className="bg-white p-5 border border-navy/5 text-center shadow-sm">
                        <h5 className="type-body-sm font-medium text-navy mb-2">{value.title}</h5>
                        <p className="type-small text-navy/70">{value.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-navy text-white p-10 text-center relative overflow-hidden rounded-sm">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl"></div>
                    <h4 className="type-sub mb-6 relative z-10">Our Promise</h4>
                    <p className="type-body-sm text-white/80 mb-4 relative z-10">At AatralYoga, we are committed to guiding you on a journey toward greater health, balance, and self-discovery.</p>
                    <p className="type-body-sm text-white/80 mb-8 relative z-10">Through dedicated practice, mindful awareness, and personalised support, we help you unlock your inner strength and create lasting positive change.</p>
                    <p className="type-eyebrow text-gold relative z-10">AatralYoga – Empowering Life Through Yoga, Wellness & Mindfulness.</p>
                  </div>
                </div>
              </AccordionItem>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="max-w-3xl mx-auto border-t border-navy/10 mb-32"></div>

        {/* Founder 2: Viswanath Balaji J */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-4 sticky top-24">
              <div className="aspect-[4/4] flex items-center justify-center relative overflow-hidden rounded-full ">
                <img src={viswanathImg} alt="Viswanath Balaji J - Co-Founder" className="w-full h-full object-cover rounded-lg" />
                <div className="absolute inset-0 bg-navy/5 mix-blend-multiply pointer-events-none" />
              </div>
              <div className="mt-8 text-center lg:text-left">
                <h3 className="type-sub text-navy">Viswanath Balaji J</h3>
                <p className="type-body-sm text-gold mt-2">Co-Founder, AatralYoga</p>
                <p className="type-small text-navy/60 mt-2">M.Sc. Yoga | Internationally Certified Yoga Practitioner | Yoga Educator & Wellness Coach</p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="text-center bg-white p-8 border border-navy/5 shadow-sm mb-8">
                <p className="type-body font-medium text-navy mb-4 italic">"Yoga is not about touching your toes. It is about what you learn on the way down."</p>
                <p className="type-small text-gold uppercase tracking-widest">Welcome to AatralYoga</p>
              </div>

              <AccordionItem title="About Viswanath Balaji" isOpen={openSectionV === "about"} onClick={() => toggleSectionV("about")}>
                <div className="space-y-4 type-body text-navy/80">
                  <p>Viswanath Balaji is a dedicated yoga professional, educator, and wellness practitioner with a strong academic foundation and extensive practical expertise in yoga.</p>
                  <p>As the Co-Founder of AatralYoga, he is committed to helping individuals develop strength, mobility, resilience, and overall well-being through scientifically informed and traditionally rooted yoga practices.</p>
                  <p>Holding a Master of Science (M.Sc.) in Yoga, Viswanath combines academic knowledge with practical application to create effective yoga programs suitable for diverse populations.</p>
                  <p>His teaching approach integrates traditional yogic wisdom with modern understanding of human movement, physical conditioning, and holistic wellness.</p>
                </div>
              </AccordionItem>

              <AccordionItem title="Professional Qualifications & Training" isOpen={openSectionV === "qualifications"} onClick={() => toggleSectionV("qualifications")}>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-white p-6 border border-navy/5 shadow-sm">
                      <p className="type-body-sm font-medium text-navy mb-2">Master of Science (M.Sc.) in Yoga</p>
                      <ul className="space-y-1 type-small text-navy/70">
                        {["Yogic Science", "Human Anatomy & Physiology", "Yoga Therapy", "Yoga Philosophy", "Research Methodology", "Applied Yoga for Health & Wellness", "Teaching Methodology"].map((item, i) => (
                          <li key={i} className="flex items-center gap-2"><span className="w-1 h-1 bg-gold rounded-full" /> {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white p-6 border border-navy/5 shadow-sm">
                      <p className="type-body-sm font-medium text-navy mb-3">Professional Certifications</p>
                      <ul className="space-y-2 type-small text-navy/70">
                        {["Internationally Recognized Certified Yoga Practitioner", "Certified Yoga Instructor", "Advanced Asana Practitioner", "Wellness & Lifestyle Coach", "Yoga Educator"].map((item, i) => (
                          <li key={i} className="flex items-center gap-2"><span className="w-1 h-1 bg-gold rounded-full" /> {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white p-6 border border-navy/5 shadow-sm h-fit">
                    <p className="type-body-sm font-medium text-navy mb-2">Asana Andiyappan Certified Yoga Instructor</p>
                    <p className="type-small text-navy/70 mb-4">Received specialized training in advanced yoga practices, asana alignment, technique refinement, and structured teaching methodologies.</p>
                    <p className="type-body-sm font-medium text-navy mb-2">Expertise:</p>
                    <ul className="space-y-1 type-small text-navy/70">
                      {["Traditional Yoga Asanas", "Advanced Postural Techniques", "Alignment & Adjustments", "Functional Strength Development", "Safe Practice Methodology", "Progressive Yoga Training"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2"><span className="w-1 h-1 bg-gold rounded-full" /> {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="Areas of Specialization" isOpen={openSectionV === "specialization"} onClick={() => toggleSectionV("specialization")}>
                <div className="space-y-6">
                  <div className="bg-white border border-navy/5 p-8 shadow-sm">
                    <h5 className="type-body font-medium text-navy mb-4">1. Strengthening Yoga</h5>
                    <p className="type-small text-navy/70 mb-6"><span className="font-medium text-navy">Focus:</span> Functional strength, muscular endurance, stability, and body control through yoga.</p>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <p className="type-body-sm font-medium text-navy mb-3">Benefits:</p>
                        <ul className="space-y-2 type-small text-navy/70">
                          {["Build core strength", "Improve muscular endurance", "Enhance joint stability", "Develop functional mobility", "Improve posture and alignment", "Reduce risk of injuries", "Support healthy aging"].map((item, i) => (
                            <li key={i} className="flex items-center gap-2"><span className="w-1 h-1 bg-green rounded-full" /> {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="type-body-sm font-medium text-navy mb-3">Beneficial for:</p>
                        <ul className="space-y-2 type-small text-navy/70">
                          {["Working professionals", "Fitness enthusiasts", "Athletes", "Individuals recovering from sedentary lifestyles", "Adults seeking improved strength and mobility"].map((item, i) => (
                            <li key={i} className="flex items-center gap-2"><span className="w-1 h-1 bg-gold rounded-full" /> {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-navy/5 p-8 shadow-sm">
                    <h5 className="type-body font-medium text-navy mb-4">2. Advanced Asana Practice</h5>
                    <div className="space-y-4">
                      {[
                        { title: "Standing Postures", desc: "Building strength, balance, and stability." },
                        { title: "Core Development", desc: "Enhancing abdominal strength and spinal support." },
                        { title: "Backbends", desc: "Improving spinal mobility and posture." },
                        { title: "Balancing Postures", desc: "Developing concentration and neuromuscular coordination." },
                        { title: "Mobility & Flexibility Training", desc: "Improving range of motion while maintaining strength." },
                        { title: "Functional Yoga Practice", desc: "Applying yoga principles to everyday movement and wellness." }
                      ].map((item, i) => (
                        <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                          <span className="type-body-sm font-medium text-navy min-w-[200px]">{item.title}:</span>
                          <span className="type-small text-navy/70">{item.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="Programs & Philosophy" isOpen={openSectionV === "programs"} onClick={() => toggleSectionV("programs")}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="type-body font-medium text-navy mb-4">Strength-Based Yoga Programs</h4>
                    <div className="space-y-4">
                      {[
                        { title: "Functional Strength Yoga", desc: "Combining yoga postures with movement patterns that enhance daily physical performance." },
                        { title: "Athletic Yoga Conditioning", desc: "Designed for athletes and active individuals seeking flexibility, recovery, and injury prevention." },
                        { title: "Posture Improvement Programs", desc: "Addressing common postural challenges caused by prolonged sitting and sedentary work habits." },
                        { title: "Mobility & Stability Training", desc: "Improving movement quality through balanced strength and flexibility development." }
                      ].map((item, i) => (
                        <div key={i} className="bg-ivory/50 p-5 border border-navy/5">
                          <h5 className="type-body-sm font-medium text-navy mb-2">{item.title}</h5>
                          <p className="type-small text-navy/70">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="type-body font-medium text-navy mb-4">Teaching Philosophy</h4>
                    <p className="type-small text-navy italic mb-6 border-l-2 border-gold pl-3">"Strength without awareness is incomplete, and flexibility without stability is unsustainable."</p>
                    <div className="space-y-4">
                      {[
                        { title: "Scientific Understanding", desc: "Applying modern anatomical knowledge to traditional yoga practices." },
                        { title: "Safe Progression", desc: "Helping students advance gradually and sustainably." },
                        { title: "Individualized Guidance", desc: "Recognizing that every body is unique and requires personalized attention." },
                        { title: "Holistic Development", desc: "Encouraging growth physically, mentally, and emotionally." },
                        { title: "Lifelong Wellness", desc: "Building habits that support long-term health and quality of life." }
                      ].map((item, i) => (
                        <div key={i}>
                          <span className="type-body-sm font-medium text-navy block">{item.title}</span>
                          <span className="type-small text-navy/70">{item.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="Vision & Message" isOpen={openSectionV === "vision"} onClick={() => toggleSectionV("vision")}>
                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-navy text-white p-6 rounded-sm">
                      <h4 className="type-body font-medium text-gold mb-4">Professional Approach</h4>
                      <ul className="space-y-2 type-small text-white/80">
                        {["Curriculum Development", "Strength-Based Yoga Programs", "Teacher Training Initiatives", "Advanced Asana Workshops", "Corporate Wellness Programs", "Functional Mobility Training", "Student Mentorship"].map((item, i) => (
                          <li key={i} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full" /> {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="type-body font-medium text-navy mb-4">Who Can Benefit</h4>
                      <div className="space-y-3">
                        {[
                          { title: "Working Professionals", items: ["Neck and back pain", "Posture correction", "Stress reduction"] },
                          { title: "Fitness Enthusiasts", items: ["Strength development", "Mobility enhancement", "Injury prevention"] },
                          { title: "Beginners", items: ["Foundational skills", "Body awareness", "Confidence building"] },
                        ].map((group, i) => (
                          <div key={i} className="bg-white p-3 border border-navy/5 shadow-sm">
                            <span className="type-small font-medium text-navy block mb-1">{group.title}</span>
                            <span className="type-small text-navy/60 text-[11px]">{group.items.join(" • ")}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-navy/5 p-8 shadow-sm relative text-center">
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-5xl text-gold/20 font-serif">"</span>
                    <p className="type-body text-navy italic mb-4">Yoga is not merely about achieving complex postures; it is about creating strength, balance, awareness, and harmony within ourselves.</p>
                    <p className="type-body text-navy italic">My mission is to help every student discover their potential through a safe, structured, and transformative yoga practice.</p>
                  </div>
                </div>
              </AccordionItem>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Founders;
