import { motion } from "framer-motion";
import heroImage from "@/assets/doctor-surgery-dark.jpg"; // High-resolution surgical photo [cite: 107, 119]
import BookingModal from "./BookingModal";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Precision cropping: Face centered in upper-third [cite: 116, 120, 144, 197, 230, 254, 276] */}
      <div
        className="absolute inset-0 bg-cover bg-[center_top_15%] bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Dark medical blue overlay for text contrast [cite: 105, 116, 121, 144, 231, 273] */}
      <div className="absolute inset-0 hero-overlay bg-black/35" /> 

      <div className="relative z-10 container-wide w-full px-4 md:px-8 lg:px-16 py-20">
        <div className="max-w-2xl">
          {/* Eyebrow: Fellowship Focus [cite: 30, 140, 144, 193] */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-body font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-4"
          >
            Fellowship Trained Sports & Arthroscopic Surgeon
          </motion.p>


          {/* Subheadline: Specialist Focus [cite: 8, 27, 140, 193] */}
          <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="text-white/90 text-lg md:text-xl font-medium mb-10 border-l-2 border-accent pl-4"
          >
            Dr. Shoaib Aslam Kurerr <br />
            <span className="text-white/70 text-base md:text-lg">Expert Knee & Shoulder Specialist in Bahawalpur</span>
          </motion.p>

          {/* Primary Action [cite: 106, 110, 122, 144, 146, 213, 229, 275] */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <BookingModal>
              <button className="inline-flex items-center justify-center gap-2 cta-gradient text-white px-8 py-4 rounded-lg font-bold text-base hover:opacity-90 transition-all hover:scale-[1.02] shadow-2xl">
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