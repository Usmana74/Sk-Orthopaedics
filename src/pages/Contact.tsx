import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Phone, MapPin, Clock, Mail, ArrowRight, Award, Globe } from "lucide-react";

// ─── WhatsApp Icon ────────────────────────────────────────────────────────────

const WhatsAppIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const DOCTOR_WA_NUMBER = "923002278796"; // Updated to user-confirmed appointment number

const contactActions = [
  {
    icon: Phone,
    label: "Emergency & General Call",
    value: "+92 300 2278796",
    subvalue: "Available Mon – Sat",
    href: "tel:+923002278796",
    highlight: true,
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp Appointment",
    value: "Send Message",
    subvalue: "Fastest response time",
    href: `https://wa.me/${DOCTOR_WA_NUMBER}?text=${encodeURIComponent("Hello Doctor, I would like to book an appointment.")}`,
    isWhatsApp: true,
  },
  {
    icon: MapPin,
    label: "Clinic Location",
    value: "MID-WEST HOSPITAL",
    subvalue: "Trust Colony, Bahawalpur",
    href: "https://maps.google.com/?q=MID-WEST+HOSPITAL+Bahawalpur",
  },
  {
    icon: Mail,
    label: "Email Inquiry",
    value: "info@skorthopaedics.com",
    subvalue: "We reply within 24 hours",
    href: "mailto:info@skorthopaedics.com",
  },
];

const Contact = () => {
  return (
    <main className="bg-white min-h-screen">

      {/* ─── Hero Banner ─── */}
      <section className="relative pt-32 pb-20 bg-slate-50 border-b border-slate-100">
        <div className="container-wide px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-6"
          >
            <Award className="w-3 h-3" /> Fellowship Trained Specialist
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight"
          >
            Precision in Motion. <br />
            Excellence in <span className="text-primary">ORTHOPAEDICS.</span>
          </motion.h1>
          <p className="text-sm md:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Contact <span className="text-slate-900 font-semibold text-lg">Dr. Shoaib Aslam Kurerr</span> at Midwest Hospital Bahawalpur for advanced sports surgery and joint replacement consultations[cite: 3, 27].
          </p>
        </div>
      </section>

      {/* ─── Contact Action Grid ─── */}
      <section className="py-20 bg-white">
        <div className="container-wide max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactActions.map((action, i) => {
                const Icon = action.icon;
                return (
                  <a
                    key={i}
                    href={action.href}
                    target={action.href?.startsWith("http") ? "_blank" : undefined}
                    className={`group flex flex-col p-8 rounded-[2rem] border transition-all duration-300 ${
                      action.isWhatsApp 
                        ? 'bg-emerald-50/50 border-emerald-100 hover:shadow-emerald-100 hover:shadow-xl' 
                        : 'bg-white border-slate-100 hover:shadow-xl hover:border-primary/20'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${
                      action.isWhatsApp ? 'bg-white text-emerald-500' : 'bg-primary/5 text-primary'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">{action.label}</p>
                    <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">{action.value}</h3>
                    <p className="text-sm text-slate-500 font-medium">{action.subvalue}</p>
                    <div className="mt-6 pt-6 border-t border-slate-50 flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all">
                      Connect Now <ArrowRight size={12} />
                    </div>
                  </a>
                );
              })}
            </div>
          </ScrollReveal>

          {/* ─── Practice Hours Banner ─── */}
          <ScrollReveal delay={0.2}>
            <div className="mt-12 p-8 rounded-[2.5rem] bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-primary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Clinical Availability</p>
                  <p className="text-lg font-semibold">Monday – Saturday · 9:00 AM – 11:00 PM</p>
                </div>
              </div>
              <div className="h-px w-full md:w-px md:h-12 bg-white/10" />
              <div className="text-center md:text-left">
                <p className="text-white/50 text-xs">Walk-ins welcome during hours at</p>
                <p className="font-bold text-primary italic">Midwest Hospital Bahawalpur</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Map Section ─── */}
      <section className="pb-24 px-6">
        <div className="container-wide max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 h-[450px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.5!2d71.6749718!3d29.3879797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b91da655623a1%3A0xd84bcc8df0d10bf8!2sMID-WEST%20HOSPITAL!5e0!3m2!1sen!2s!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="MID-WEST HOSPITAL - Bahawalpur"
              />
              {/* Map Overlay Label */}
              <div className="absolute top-8 left-8 p-4 bg-white/90 backdrop-blur rounded-2xl shadow-sm border border-white/50 hidden md:flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="w-4 h-4" />
                </div>
                <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">Midwest Hospital · Trust Colony</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Serving Cities ─── */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container-wide text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Globe className="w-4 h-4 text-slate-400" />
            <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">Serving Southern Punjab</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {["Bahawalpur", "Rahim Yar Khan", "Multan", "Lodhran", "Bahawalnagar", "Ahmadpur East"].map((city) => (
              <span key={city} className="bg-white border border-slate-200 text-slate-600 px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider shadow-sm">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;