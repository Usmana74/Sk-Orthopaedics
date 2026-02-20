import { motion } from "framer-motion";
import heroImage from "@/assets/doctor-surgery-dark.jpg";
import BookingModal from "./BookingModal";

const HeroSection = () => {
  const whatsappUrl =
    "https://wa.me/923002278796?text=Hello%20Doctor%2C%20I%20would%20like%20to%20book%20an%20appointment.";

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-[center_top_20%] bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 container-wide w-full px-4 md:px-8 lg:px-16 py-20">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-body font-medium text-xs uppercase tracking-widest mb-3"
          >
            Dr Shoaib Aslam Kurerr — Orthopaedic Surgeon
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-8"
          >
            Dr. Shoaib Aslam Kurerr
            Orthopaedic & Sports Injury Specialist
            Knee, Shoulder & Joint Replacement Expert
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <BookingModal>
              <button className="inline-flex items-center justify-center gap-2 cta-gradient text-primary-foreground px-7 py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-all hover:scale-[1.02]">
                Book Appointment
              </button>
            </BookingModal>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
