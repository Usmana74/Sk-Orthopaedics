import { motion } from "framer-motion";
import heroImage from "@/assets/doctor-surgery-dark.jpg";
import BookingModal from "./BookingModal";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-[center_top_15%] bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Slightly stronger overlay for legibility */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.55)" }} />

      <div className="relative z-10 container-wide w-full px-4 md:px-8 lg:px-16 py-20">
        <div className="max-w-xl">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-body font-bold text-[10px] md:text-xs uppercase tracking-[0.25em] mb-3"
          >
            Fellowship Trained Orthopaedic Sports Surgeon
          </motion.p>

          {/* Heading — benefit-focused */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4"
          >
            Restore Mobility. <br />
            Expert{" "}
            <span className="text-blue-400">Orthopaedic Care</span>
          </motion.h1>

          {/* Subheadline — credential + specialty */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <p className="text-white font-semibold text-base md:text-lg">
              Dr. Shoaib Aslam Kurerr, FCPS
            </p>
            <p className="text-white/70 text-sm md:text-base">
              Specialist in Knee, Shoulder &amp; Joint Replacement Surgery
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <BookingModal>
              <button className="cta-gradient text-white px-7 py-3 rounded-lg font-bold text-sm hover:scale-105 transition-transform shadow-xl">
                Book Your Consultation
              </button>
            </BookingModal>
            {/* Trust microcopy */}
            <p className="text-white/55 text-xs mt-3">
              Trusted by patients across Pakistan &nbsp;·&nbsp; Online &amp; In-Clinic Consultations
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
