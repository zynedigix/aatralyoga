import { useRef, useState, useEffect } from "react";
import { motion, useTransform } from "framer-motion";
import { useHeroSequence } from "../hooks/useHeroSequence";
import {
  SCROLL_HEIGHT_VH,
  MOBILE_SCROLL_HEIGHT_VH,
  getHeroFrameUrl,
} from "../utils/heroFrames";

const ease = [0.22, 1, 0.36, 1];

function HeroSequence() {
  const containerRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [scrollHeightVh, setScrollHeightVh] = useState(SCROLL_HEIGHT_VH);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);

    const onChange = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);

    const updateHeight = () => {
      setScrollHeightVh(
        window.innerWidth < 768 ? MOBILE_SCROLL_HEIGHT_VH : SCROLL_HEIGHT_VH,
      );
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      mq.removeEventListener("change", onChange);
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const { canvasRef, isReady, loadProgress, scrollYProgress } =
    useHeroSequence(containerRef, { reducedMotion });

  // Foreground copy fades gently as the sequence completes
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.72, 0.95],
    [1, 1, 1, 0],
  );
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -48]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative"
      style={{ height: reducedMotion ? "100vh" : `${scrollHeightVh}vh` }}
      aria-label="Aatral Yoga cinematic hero"
    >
      {/* Sticky viewport — stays pinned while user scrolls through the track */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-navy">
        {/* Canvas renders the active sequence frame */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        />

        {/* Reduced-motion / loading fallback */}
        {(!isReady || reducedMotion) && (
          <img
            src={getHeroFrameUrl(1)}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
          />
        )}

        {/* Top gradient — keeps header / logo area readable */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[28%] min-h-[140px]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(11,53,91,0.72) 0%, rgba(11,53,91,0.28) 55%, transparent 100%)",
          }}
        />

        {/* Bottom gradient — supports foreground typography */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[55%]"
          style={{
            background:
              "linear-gradient(to top, rgba(11,53,91,0.82) 0%, rgba(11,53,91,0.45) 40%, transparent 100%)",
          }}
        />

        {/* Subtle vignette for cinematic depth */}
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(11,53,91,0.25) 100%)",
          }}
        />

        {/* Foreground content */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative z-[2] flex h-full flex-col justify-end pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36"
        >
          <div className="container-editorial max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease }}
              className="type-eyebrow text-gold/90 mb-5 sm:mb-6"
            >
              Awaken &bull; Align &bull; Achieve
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease }}
              className="type-hero text-white text-balance max-w-3xl"
            >
              Awaken Your Inner Balance
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease }}
              className="type-body text-white/78 mt-6 sm:mt-8 max-w-xl"
            >
              Traditional Yoga &bull; Modern Wellness &bull; Corporate Training
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.75, ease }}
              className="mt-10 sm:mt-12"
            >
              <a
                href="#about"
                className="inline-block rounded-full bg-gold text-navy px-9 py-4 type-small font-medium tracking-widest uppercase shadow-[0_8px_32px_rgba(255,158,27,0.35)] transition-all duration-500 hover:bg-gold/90 hover:shadow-[0_12px_40px_rgba(255,158,27,0.45)] hover:-translate-y-0.5"
              >
                Start Your Journey
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Loading indicator — visible only while frames preload */}
        {!isReady && !reducedMotion && (
          <div className="absolute bottom-8 right-6 z-[3] flex items-center gap-3">
            <div className="h-[2px] w-24 overflow-hidden rounded-full bg-white/15">
              <div
                className="h-full bg-gold transition-all duration-300"
                style={{ width: `${Math.round(loadProgress * 100)}%` }}
              />
            </div>
            <span className="type-small text-white/50 tabular-nums">
              {Math.round(loadProgress * 100)}%
            </span>
          </div>
        )}

        {/* Scroll hint */}
        {!reducedMotion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            style={{ opacity: scrollHintOpacity }}
            className="absolute bottom-8 left-1/2 z-[3] hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
          >
            <span className="type-small text-white/45 tracking-[0.3em] uppercase">
              Scroll
            </span>
            <span className="block h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default HeroSequence;
