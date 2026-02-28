import { motion } from "framer-motion";
import heroImage from "@/assets/doctor-surgery-dark.jpg"; 
import BookingModal from "./BookingModal";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background optimized for legibility with future video [cite: 111, 231] */}
      <div
        className="absolute inset-0 bg-cover bg-[center_top_15%] bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Increased overlay density for video contrast [cite: 104, 121, 231] */}
      <div className="absolute inset-0 hero-overlay bg-black/45" /> 

      <div className="relative z-10 container-wide w-full px-4 md:px-8 lg:px-16 py-20">
        <div className="max-w-xl">
          {/* Fellowship Highlight [cite: 13, 30] */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-body font-bold text-[10px] md:text-xs uppercase tracking-[0.25em] mb-3"
          >
            Fellowship Trained Orthopaedic Sports Surgeon
          </motion.p>

          {/* Minimalist Heading [cite: 202, 212, 215, 228] */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4"
          >
            Precision in Motion. <br />
            Excellence in <span className="text-blue-400">ORTHOPAEDICS.</span>
          </motion.h1>

          {/* Refined Subheadline [cite: 9, 27, 140] */}
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="mb-8"
          >
            <p className="text-white font-semibold text-base md:text-lg">
              Dr. Shoaib Aslam Kurerr 
            </p>
            <p className="text-white/70 text-sm md:text-base">
              Expert Knee Shoulder & Joint Replacement Specialist 
            </p>
          </motion.div>

          {/* Single Primary Action [cite: 110, 242] */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <BookingModal>
              <button className="cta-gradient text-white px-7 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-all shadow-xl">
                Book Consultation 
              </button>
            </BookingModal>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;