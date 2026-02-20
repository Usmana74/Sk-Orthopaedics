import { motion } from "framer-motion";
import heroImage from "@/assets/doctor-surgery-dark.jpg";
import BookingModal from "./BookingModal";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-[center_top_15%] bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container-wide w-full px-4 md:px-8 lg:px-16 py-20">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-body font-bold text-xs uppercase tracking-widest mb-4"
          >
            Dr Shoaib Aslam Kurerr · Bahawalpur
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight mb-5"
          >
            Specialist in{" "}
            <span className="text-accent">Knee</span> &{" "}
            <span className="text-accent">Shoulder</span>{" "}
            Orthopaedics.
          </motion.h1>

          {/* Specialties strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {["Arthroscopy", "ACL & PCL Reconstruction", "Rotator Cuff Repair", "Joint Replacement", "Sports Medicine"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-white/80 border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-white/75 text-sm md:text-base leading-relaxed mb-10 max-w-md"
          >
            Minimally invasive procedures and advanced joint care for patients across Bahawalpur and Southern Punjab.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <BookingModal>
              <button className="inline-flex items-center justify-center gap-2 cta-gradient text-white px-7 py-3.5 rounded-lg font-bold text-sm hover:opacity-90 transition-all hover:scale-[1.02] shadow-xl">
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
