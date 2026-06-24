import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import yoga01 from "../assets/gallery/yoga01.webp";
import yoga02 from "../assets/gallery/yoga02.webp";
import yoga03 from "../assets/gallery/yoga03.webp";
import yoga04 from "../assets/gallery/yoga04.webp";
import yoga05 from "../assets/gallery/yoga05.webp";
import yoga06 from "../assets/gallery/yoga06.webp";
import yoga07 from "../assets/gallery/yoga07.webp";
import yoga08 from "../assets/gallery/yoga08.webp";
import yoga09 from "../assets/gallery/yoga09.webp";
import yoga10 from "../assets/gallery/yoga10.webp";
import yoga11 from "../assets/gallery/yoga11.webp";
import yoga12 from "../assets/gallery/yoga12.webp";

const ease = [0.22, 1, 0.36, 1];

const categories = [
  { id: "all", label: "All" },
  { id: "corporate", label: "Corporate Wellness" },
  { id: "women", label: "Women Wellness" },
  { id: "kids", label: "Kids Yoga" },
  { id: "senior", label: "Senior Wellness" },
  { id: "events", label: "Events" },
];

const galleryItems = [
  { src: yoga01, category: "events", span: "md:col-span-2 md:row-span-2", tall: true },
  { src: yoga02, category: "women", span: "md:col-span-1", tall: false },
  { src: yoga03, category: "women", span: "md:col-span-1", tall: false },
  { src: yoga04, category: "corporate", span: "md:col-span-2", tall: false },
  { src: yoga05, category: "women", span: "md:col-span-1", tall: false },
  { src: yoga06, category: "senior", span: "md:col-span-1 md:row-span-2", tall: true },
  { src: yoga07, category: "kids", span: "md:col-span-1", tall: false },
  { src: yoga08, category: "corporate", span: "md:col-span-1", tall: false },
  { src: yoga09, category: "kids", span: "md:col-span-1", tall: false },
  { src: yoga10, category: "senior", span: "md:col-span-1", tall: false },
  { src: yoga11, category: "events", span: "md:col-span-2", tall: false },
  { src: yoga12, category: "events", span: "md:col-span-1", tall: false },
];

function GalleryModal({ items, index, onClose, onPrev, onNext }) {
  const item = items[index];

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 backdrop-blur-sm surface-dark"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/80 hover:text-white transition-colors z-10 p-2"
        aria-label="Close gallery"
      >
        <X size={28} />
      </button>

      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 text-white/75 hover:text-white transition-colors p-3 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={36} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 text-white/75 hover:text-white transition-colors p-3 z-10"
            aria-label="Next image"
          >
            <ChevronRight size={36} />
          </button>
        </>
      )}

      <motion.div
        key={item.src}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.4, ease }}
        className="relative max-w-[90vw] max-h-[85vh] lg:max-w-[85vw] lg:max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt="Aatral Yoga gallery preview"
          className="max-w-full max-h-[85vh] lg:max-h-[88vh] object-contain"
        />
        <p className="absolute bottom-0 left-0 right-0 text-center type-small text-white/72 pt-4">
          {index + 1} / {items.length}
        </p>
      </motion.div>
    </motion.div>
  );
}

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [modalIndex, setModalIndex] = useState(null);

  const filtered =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openModal = useCallback(
    (index) => setModalIndex(index),
    []
  );

  const closeModal = useCallback(() => setModalIndex(null), []);

  const goPrev = useCallback(() => {
    setModalIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  const goNext = useCallback(() => {
    setModalIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  }, [filtered.length]);

  return (
    <section id="gallery" className="section-pad gradient-soft">
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-14 lg:mb-20 xl:mb-24"
        >
          <p className="type-eyebrow text-gold mb-6">In Motion</p>
          <h2 className="type-section text-navy">Wellness Journey</h2>
          <p className="type-body text-navy/50 max-w-lg mt-8">
            Glimpses from studio sessions, corporate gatherings, and community
            events across Chennai.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-wrap gap-3 lg:gap-4 mb-12 lg:mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setActiveCategory(cat.id);
                setModalIndex(null);
              }}
              className={`type-small px-5 py-2.5 lg:px-6 lg:py-3 rounded-full transition-all duration-400 tracking-wide ${
                activeCategory === cat.id
                  ? "bg-navy text-white"
                  : "text-navy/55 hover:text-navy hover:bg-navy/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-5 auto-rows-[160px] md:auto-rows-[220px] lg:auto-rows-[260px]"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.button
                type="button"
                key={`${item.category}-${item.src}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, ease }}
                onClick={() => openModal(index)}
                className={`${item.span} overflow-hidden group relative cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50`}
              >
                <img
                  src={item.src}
                  alt={`Aatral Yoga — ${categories.find((c) => c.id === item.category)?.label}`}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/15 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-end justify-start p-4 lg:p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <span className="type-small text-white/90 tracking-widest uppercase">
                    View
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {modalIndex !== null && (
            <GalleryModal
              items={filtered}
              index={modalIndex}
              onClose={closeModal}
              onPrev={goPrev}
              onNext={goNext}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Gallery;
