import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/doctor-surgery-dark.jpg";
import BookingModal from "./BookingModal";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      {/* ── Background — position shifted to show face ── */}
      <motion.div
        className="absolute inset-0 bg-cover bg-no-repeat scale-110"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: "center 15%",
          y: bgY,
          animation: "kenBurns 18s ease-in-out infinite alternate",
        }}
      />

      {/* Directional gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.80) 100%)",
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">

        {/* Credential badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 mb-7"
        >
          <span className="w-8 h-px bg-white/35" />
          <span className="text-white/55 text-[10px] font-bold uppercase tracking-[0.35em]">
            FCPS · Fellowship Trained Orthopaedic Surgeon
          </span>
          <span className="w-8 h-px bg-white/35" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5"
        >
          Expert Orthopaedic &amp; <br className="hidden md:block" />
          Sports Surgery Care
        </motion.h1>

        {/* Doctor name */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white/50 text-sm font-light tracking-[0.2em] uppercase mb-9"
        >
          Dr. Shoaib Aslam Kurerr
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <BookingModal>
            <button
              className="text-white text-sm font-bold px-8 py-3.5 rounded-lg hover:scale-105 transition-transform shadow-2xl"
              style={{ backgroundColor: "rgba(29, 97, 165)" }}
            >
              Book Your Consultation
            </button>
          </BookingModal>
        </motion.div>

      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-white/30 text-[9px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-white/60"
            style={{ height: "40%" }}
            animate={{ y: ["0%", "250%"] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Ken Burns keyframe */}
      <style>{`
        @keyframes kenBurns {
          0%   { transform: scale(1.10) translate(0%, 0%); }
          100% { transform: scale(1.18) translate(-1.5%, -1%); }
        }
      `}</style>

    </section>
  );
};

export default HeroSection;
