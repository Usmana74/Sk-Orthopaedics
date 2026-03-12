import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Phone, MapPin, Clock, Mail, ChevronRight, Award, Globe } from "lucide-react";

// WhatsApp Configuration
const WHATSAPP_NUMBER = "923002278796"; // Confirmed appointment line [cite: 213, 215]
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Dr. Shoaib, I would like to book an appointment regarding an orthopaedic concern."
)}`;

const Contact = () => {
  return (
    <main className="bg-white">
      {/* ─── Header Section: Solid to Subtle Gradient Blue ─── */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-[#2a5298] to-[#1e3c72] overflow-hidden text-center">
        {/* Striped grid overlay removed for a cleaner, flatter medical look */}
        
        <div className="relative z-10 container-wide px-6">
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="text-white/60 text-[10px] font-bold uppercase tracking-[0.4em] mb-6"
          >
            Clinical Consultations
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-white/70 text-sm md:text-base max-w-xl mx-auto leading-relaxed"
          >
            Schedule your visit with Dr. Shoaib Aslam Kurerr at Midwest Hospital Bahawalpur.
          </motion.p>
        </div>
      </section>

      {/* ─── Three Column Info Row ─── */}
      <section className="py-20 border-b border-slate-100">
        <div className="container-wide max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            
            {/* Column 1: Hours */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="space-y-4">
                <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-slate-900">
                  Hours of Operation
                </h3>
                <div className="h-px w-8 bg-primary mx-auto" />
                <p className="text-sm text-slate-500 leading-relaxed uppercase tracking-wider">
                  9:00 to 23:00, Mon–Sat<br />(Excluding Holidays)
                </p>
              </div>
            </ScrollReveal>

            {/* Column 2: Phone */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="space-y-4">
                <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-slate-900">
                  Direct Line
                </h3>
                <div className="h-px w-8 bg-primary mx-auto" />
                <a href="tel:+923002278796" className="block text-sm text-slate-500 hover:text-primary transition-colors tracking-widest">
                  +92 300 2278796
                </a>
              </div>
            </ScrollReveal>

            {/* Column 3: Inquiries */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="space-y-4">
                <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-slate-900">
                  General Inquiries
                </h3>
                <div className="h-px w-8 bg-primary mx-auto" />
                <a href="mailto:info@skorthopaedics.com" className="block text-sm text-slate-500 hover:text-primary transition-colors tracking-wide">
                  info@skorthopaedics.com
                </a>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ─── Support Message Section ─── */}
      <section className="py-20 bg-slate-50/50">
        <div className="container-wide max-w-3xl mx-auto px-6 text-center space-y-8">
          <ScrollReveal>
            <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900">
              Our clinical team is waiting to assist you
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Please allow for rapid response during clinical hours for us to fully address your appointment requests and medical inquiries.
            </p>
            <div className="pt-6">
               <a 
                href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 rounded-xl font-bold text-sm shadow-xl hover:scale-105 transition-all"
              >
                Instant WhatsApp Booking
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

    
    </main>
  );
};

export default Contact;