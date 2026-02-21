import { motion } from "framer-motion";
import heroImage from "@/assets/doctor-surgery-dark.jpg";
import BookingModal from "./BookingModal";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      role="banner"
      aria-label="Orthopaedic Surgeon Introduction"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-[center_top_10%] bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      {/* Content */}
      <div className="relative z-10 container-wide w-full px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-2xl">

          {/* Trust Badge / Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-accent font-semibold text-xs md:text-sm uppercase tracking-widest mb-4"
          >
            Fellowship Trained | Sports & Arthroscopic Surgery
          </motion.p>

          {/* Main Headline (SEO Optimized) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white text-4xl md:text-5xl font-extrabold leading-tight mb-6"
          >
            Advanced Knee & Shoulder Care in Bahawalpur
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/90 text-lg md:text-xl mb-10 max-w-xl"
          >
            Dr. Shoaib Aslam Kurerr provides precision-driven orthopaedic
            treatment, minimally invasive arthroscopic procedures, and
            personalized recovery plans for long-term joint health.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <BookingModal>
              <button className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base bg-accent text-white shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                Book Consultation
              </button>
            </BookingModal>

            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base border border-white/40 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              View Services
            </a>
          </motion.div>

          {/* Optional Trust Signal */}
          <p className="text-white/70 text-sm mt-6">
            Trusted by patients across Bahawalpur & South Punjab
          </p>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;