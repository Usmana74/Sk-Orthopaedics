import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Phone, MapPin, Clock, Mail, ChevronRight, Award, Globe, ExternalLink } from "lucide-react";

// WhatsApp Configuration
const WHATSAPP_NUMBER = "923002278796"; // Confirmed appointment line 
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Dr. Shoaib, I would like to book an appointment regarding an orthopaedic concern."
)}`;

const Contact = () => {
  return (
    <main className="bg-white">
      {/* ─── Hero Banner: Medical Theme ─── */}
      <section className="relative pt-32 pb-24 bg-[#2a5298] overflow-hidden text-center">
        {/* Thematic Grid Overlay  */}
        <div className="absolute inset-0 opacity-[0.08]" style={{ 
          backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,1) 40px,rgba(255,255,255,1) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(255,255,255,1) 40px,rgba(255,255,255,1) 41px)" 
        }} />
        
        <div className="relative z-10 container-wide px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-[10px] font-bold uppercase tracking-[0.3em] mb-8 border border-white/10 backdrop-blur-sm"
          >
            <Award className="w-3.5 h-3.5 text-accent" /> Fellowship Trained Specialist
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
          >
            Precision in Motion. <br />
            Excellence in <span className="text-white/90">ORTHOPAEDICS.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed"
          >
            Connect directly with Dr. Shoaib Aslam Kurerr for advanced sports surgery and joint replacement consultations. [cite: 140]
          </motion.p>
        </div>
      </section>

      {/* ─── Theme-Aligned Info Grid (Replacing Text Row) ─── */}
      <section className="py-20 bg-white relative z-20 -mt-12">
        <div className="container-wide max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Card 1: Clinical Hours */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] h-full transition-all hover:bg-white hover:shadow-xl hover:border-primary/10 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">Practice Hours</h3>
                <p className="text-sm text-slate-500 font-medium mb-1">Monday – Saturday</p>
                <p className="text-primary font-bold text-base tracking-wider">9:00 AM – 11:00 PM</p>
              </div>
            </ScrollReveal>

            {/* Card 2: Direct Contact */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] h-full transition-all hover:bg-white hover:shadow-xl hover:border-primary/10 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">Direct Access</h3>
                <a href="tel:+923002278796" className="block text-primary font-bold text-base tracking-widest hover:underline mb-1">
                  +92 300 2278796
                </a>
                <p className="text-sm text-slate-500 font-medium">Tap to call clinic directly</p>
              </div>
            </ScrollReveal>

            {/* Card 3: Support & Email */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] h-full transition-all hover:bg-white hover:shadow-xl hover:border-primary/10 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">Patient Inquiries</h3>
                <a href="mailto:info@skorthopaedics.com" className="block text-primary font-bold text-base hover:underline mb-1">
                  info@skorthopaedics.com
                </a>
                <p className="text-sm text-slate-500 font-medium">Verified response within 24h</p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ─── High-Conversion WhatsApp Area ─── */}
      <section className="py-12">
        <div className="container-wide max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="bg-[#25D366]/5 border border-[#25D366]/20 p-8 md:p-12 rounded-[3rem] text-center space-y-6">
               <div className="flex justify-center">
                  <div className="w-16 h-16 bg-[#25D366] text-white rounded-3xl flex items-center justify-center shadow-lg shadow-[#25D366]/30">
                    <WhatsAppIcon className="w-8 h-8" />
                  </div>
               </div>
               <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900">
                  Secure Your Appointment Instantly
               </h2>
               <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto">
                  Our clinical team assists with appointment scheduling and primary concerns via our dedicated WhatsApp line.
               </p>
               <div className="pt-4">
                  <a 
                    href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-2xl font-bold text-sm shadow-xl hover:scale-105 transition-all"
                  >
                    Message Dr. Shoaib on WhatsApp
                  </a>
               </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Interactive Location Map ─── */}
      <section className="py-20">
        <div className="container-wide max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 space-y-6">
                <div className="p-10 bg-slate-900 text-white rounded-[3rem] shadow-2xl">
                   <p className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] mb-4">Location</p>
                   <h3 className="font-heading text-2xl font-bold mb-4 tracking-wider">MID-WEST HOSPITAL</h3>
                   <p className="text-white/60 text-sm leading-relaxed mb-8">
                     Trust Colony, Street No. 3,<br />
                     Bahawalpur, Punjab, Pakistan
                   </p>
                   <a 
                    href="https://maps.google.com/?q=MID-WEST+HOSPITAL+Bahawalpur" target="_blank"
                    className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all"
                   >
                     Get Directions <ExternalLink className="w-3 h-3" />
                   </a>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 h-[450px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.5!2d71.6749718!3d29.3879797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b91da655623a1%3A0xd84bcc8df0d10bf8!2sMID-WEST%20HOSPITAL!5e0!3m2!1sen!2s!4v1700000000000" 
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" 
                    title="Midwest Hospital Bahawalpur Location"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Footer Serving Cities ─── */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container-wide text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Globe className="w-4 h-4 text-slate-400" />
            <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.25em]">Serving Southern Punjab</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
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

// WhatsApp SVG Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default Contact;