import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/doctor-surgery-dark.jpg";

const HeroSection = () => {
  const whatsappUrl =
    "https://wa.me/923001234567?text=Hello%20Dr%20Shoaib%2C%0A%0AMy%20Name%3A%20%0AClinic%20to%20Visit%3A%20%0APrimary%20Problem%3A%20%0A%0APlease%20schedule%20my%20appointment.";

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 container-wide w-full px-4 md:px-8 lg:px-16">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-body font-medium text-sm uppercase tracking-widest mb-4"
          >
            Dr Shoaib Aslam Kurerr — Orthopaedic Surgeon
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Expert Orthopaedic Care in Bahawalpur
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-primary-foreground/80 font-body mb-8 leading-relaxed"
          >
            Advanced Sports Surgery & Joint Replacement
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="tel:+923001234567"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-base hover:opacity-90 transition-all hover:scale-[1.02]"
            >
              <Phone className="w-5 h-5" /> Call Now
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 cta-gradient text-primary-foreground px-8 py-4 rounded-lg font-semibold text-base hover:opacity-90 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Appointment
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
