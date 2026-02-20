import { motion } from "framer-motion";
import heroImage from "@/assets/doctor-surgery-dark.jpg"; // Reference image [cite: 107, 119]
import BookingModal from "./BookingModal";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background with focal point correction [cite: 116, 120, 230] */}
      <div
        className="absolute inset-0 bg-cover bg-[center_top_15%] bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 hero-overlay bg-black/30" /> {/* Clean medical overlay [cite: 121, 144, 231] */}

      <div className="relative z-10 container-wide w-full px-4 md:px-8 lg:px-16 py-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-body font-bold text-sm uppercase tracking-widest mb-4"
          >
            Dr. Shoaib Aslam Kurerr — Knee & Shoulder Specialist 
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading text-3xl md:text-4xl lg:text-4xl font-bold text-white leading-tight mb-4"
          >
            Precision in Motion. <br />
            Excellence in <span className="text-primary-blue underline decoration-accent">ORTHOPAEDICS.</span> 
          </motion.h1>

          <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="text-white/90 text-lg md:text-xl font-medium mb-10 max-w-lg"
          >
            Advanced Arthroscopy, Sports Medicine, & Joint Replacement in Bahawalpur. [cite: 8, 27, 212]
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <BookingModal>
              <button className="inline-flex items-center justify-center gap-2 cta-gradient text-white px-8 py-4 rounded-lg font-bold text-base hover:opacity-90 transition-all hover:scale-[1.02] shadow-xl">
                Book Consultation [cite: 213, 216]
              </button>
            </BookingModal>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;