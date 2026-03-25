import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Phone, MapPin, Clock, Mail, ChevronRight, Award, Globe, ShieldCheck } from "lucide-react";

// WhatsApp Configuration
const WHATSAPP_NUMBER = "923002278196";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Dr. Shoaib, I would like to book an appointment regarding an orthopaedic concern."
)}`;

const trustPoints = [
  { text: "Fellowship-trained specialist in Sports Surgery & Arthroscopy" },
  { text: "Extensive experience in knee and shoulder joint replacement" },
  { text: "Trained at Mayo Hospital Lahore & King Edward Medical University" },
  { text: "Trusted by patients across Pakistan for advanced orthopaedic care" },
];

const Contact = () => {
  return (
    <main className="bg-white">

      {/* ─── 1. Hero ─── */}
      <section
        className="relative pt-24 pb-10 text-center overflow-hidden"
        style={{ backgroundColor: "rgba(29, 97, 165)" }}
      >
        <div className="relative z-10 container-wide px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="text-white/60 text-[10px] font-bold uppercase tracking-[0.4em] mb-4"
          >
            Clinical Consultations
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-white/70 text-sm md:text-base max-w-xl mx-auto leading-relaxed"
          >
            Connect with Dr. Shoaib Aslam Kurerr for expert orthopaedic consultation and advanced sports surgery care for patients across Pakistan.
          </motion.p>
        </div>
      </section>

      {/* ─── 2. Patient Consultation Introduction ─── */}
      <section className="py-16 border-b border-slate-100">
        <div className="container-wide max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-primary" /> Patient Consultations <span className="w-8 h-px bg-primary" />
            </div>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Patients from across Pakistan contact Dr. Shoaib Aslam Kurerr for expert orthopaedic consultations, sports injury treatment, arthroscopy, and joint replacement procedures. Our clinical team assists with appointment scheduling, treatment guidance, and pre-surgical consultations.
            </p>
            <p className="text-slate-400 text-xs mt-4 italic">
              Patients from across Pakistan travel to consult Dr. Shoaib for specialised orthopaedic care and advanced surgical treatment.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 3. Contact Information Cards ─── */}
      <section className="py-20 border-b border-slate-100">
        <div className="container-wide max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">

            {/* Card 1: Consultation Coordination */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="bg-slate-50 rounded-[2rem] p-8 text-center border border-slate-100 hover:shadow-lg transition-all h-full space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-slate-900">
                  Consultation Coordination
                </h3>
                <div className="h-px w-8 bg-primary mx-auto" />
                <p className="text-sm text-slate-500 leading-relaxed">
                  Our clinical coordination team assists patients with consultation requests, surgical evaluations, and treatment planning.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 2: Patient Appointment Line */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="bg-slate-50 rounded-[2rem] p-8 text-center border border-slate-100 hover:shadow-lg transition-all h-full space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-slate-900">
                  Patient Appointment Line
                </h3>
                <div className="h-px w-8 bg-primary mx-auto" />
                <p className="text-xs text-slate-400 leading-relaxed mb-1">
                  For consultation requests or surgical evaluations, contact our appointment coordination team directly.
                </p>
                <a href="tel:+923002278196" className="block text-sm font-semibold text-primary hover:opacity-80 transition-colors tracking-widest">
                  +92 300 2278196
                </a>
              </div>
            </ScrollReveal>

            {/* Card 3: Patient Support */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="bg-slate-50 rounded-[2rem] p-8 text-center border border-slate-100 hover:shadow-lg transition-all h-full space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-slate-900">
                  Patient Support
                </h3>
                <div className="h-px w-8 bg-primary mx-auto" />
                <p className="text-xs text-slate-400 leading-relaxed mb-1">
                  For medical questions, consultation requests, or treatment information, our support team will assist you.
                </p>
                <a href="mailto:shoaibkurrer@yahoo.com" className="block text-sm font-semibold text-primary hover:opacity-80 transition-colors tracking-wide">
                  shoaibkurrer@yahoo.com
                </a>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ─── 4. Why Patients Contact Our Practice ─── */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="container-wide max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-4">
                <span className="w-8 h-px bg-primary" /> Our Practice <span className="w-8 h-px bg-primary" />
              </div>
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-slate-900">
                Why Patients Contact Our Practice
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {trustPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all">
                  <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-slate-600 text-sm leading-relaxed">{point.text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 5. WhatsApp Booking CTA ─── */}
      <section className="py-20">
        <div className="container-wide max-w-2xl mx-auto px-6 text-center space-y-6">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-2">
              <span className="w-8 h-px bg-primary" /> Book Now <span className="w-8 h-px bg-primary" />
            </div>
            <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900">
              Our clinical team is waiting to assist you
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              The fastest way to schedule a consultation is through WhatsApp. Our team will guide you through appointment booking and answer any initial questions about your condition.
            </p>
            <div className="pt-4">
              <a
                href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 rounded-xl font-bold text-sm shadow-xl hover:scale-105 transition-all"
              >
                Instant WhatsApp Booking
              </a>
              <p className="text-slate-400 text-[11px] mt-3 italic">
                Our team responds promptly to consultation requests.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
};

export default Contact;
