import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Phone, MapPin, Clock, Mail, ChevronRight, Award, Globe } from "lucide-react";
import hospitalImage from "@/assets/Hospital.webp"; // High-res clinical theatre image [cite: 115]

// WhatsApp Logic [cite: 213]
const WHATSAPP_NUMBER = "923002278796";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Dr. Shoaib, I would like to book an appointment regarding an orthopaedic concern."
)}`;

const contactCards = [
  {
    icon: Phone,
    title: "Direct Consultation",
    value: "+92 300 2278796",
    label: "Tap to Call",
    href: "tel:+923002278796",
    color: "bg-blue-50",
    iconColor: "text-primary"
  },
  {
    icon: Mail,
    title: "Email Inquiry",
    value: "info@skorthopaedics.com",
    label: "Send Email",
    href: "mailto:info@skorthopaedics.com",
    color: "bg-slate-50",
    iconColor: "text-slate-600"
  },
  {
    icon: MapPin,
    title: "Clinic Location",
    value: "MID-WEST HOSPITAL",
    label: "Trust Colony, Bahawalpur",
    href: "https://maps.google.com/?q=MID-WEST+HOSPITAL+Bahawalpur",
    color: "bg-blue-50",
    iconColor: "text-primary"
  },
  {
    icon: Clock,
    title: "Practice Hours",
    value: "9:00 AM – 11:00 PM",
    label: "Monday – Saturday",
    href: undefined,
    color: "bg-slate-50",
    iconColor: "text-slate-600"
  }
];

const Contact = () => {
  return (
    <main className="bg-white">
      {/* ─── Minimalist Header ─── [cite: 195, 227] */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="container-wide px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
          >
            <Award className="w-3 h-3" /> Fellowship Trained Specialist 
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight"
          >
            Precision in Motion. <br />
            Excellence in <span className="text-primary">ORTHOPAEDICS.</span> [cite: 195, 214]
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-xl mx-auto text-base md:text-lg leading-relaxed"
          >
            Access world-class orthopaedic care in Bahawalpur. Connect directly with 
            <span className="text-slate-900 font-semibold"> Dr. Shoaib Aslam Kurerr</span> for expert diagnosis and treatment. [cite: 27, 29]
          </motion.p>
        </div>
      </section>

      {/* ─── High-Impact Contact Grid ─── [cite: 145, 232] */}
      <section className="py-20">
        <div className="container-wide max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              const content = (
                <div className={`h-full p-8 rounded-[2rem] ${card.color} border border-transparent transition-all duration-300 ${card.href ? 'hover:border-primary/20 hover:shadow-xl hover:-translate-y-1' : ''}`}>
                  <div className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm ${card.iconColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">{card.title}</p>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{card.value}</h3>
                  <p className="text-sm text-slate-500 font-medium">{card.label}</p>
                </div>
              );

              return card.href ? (
                <a key={i} href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined}>{content}</a>
              ) : (
                <div key={i}>{content}</div>
              );
            })}
          </div>

          {/* ─── Primary WhatsApp Action ─── [cite: 23, 213, 235] */}
          <ScrollReveal>
            <div className="relative rounded-[3rem] bg-primary overflow-hidden p-8 md:p-16 text-center text-white shadow-2xl">
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="font-heading text-2xl md:text-4xl font-bold mb-6">Ready to Book Your Visit?</h2>
                <p className="text-white/70 text-base md:text-lg mb-10">
                  The fastest way to secure an appointment is via our dedicated WhatsApp booking line. 
                  Our team typically responds within a few hours. [cite: 105, 145]
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a 
                    href={WHATSAPP_URL} target="_blank"
                    className="flex items-center gap-3 bg-[#25D366] px-10 py-5 rounded-2xl font-bold text-sm hover:scale-105 transition-all shadow-lg"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    WhatsApp Appointment [cite: 133]
                  </a>
                  <a href="tel:+923002278796" className="flex items-center gap-3 bg-white/10 border border-white/20 px-10 py-5 rounded-2xl font-bold text-sm hover:bg-white/20 transition-all">
                    Direct Clinical Line
                  </a>
                </div>
              </div>
              {/* Decorative Elements [cite: 207] */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Location & Visual Grid ─── [cite: 116, 219] */}
      <section className="pb-24">
        <div className="container-wide max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 h-[500px]">
            {/* Map Frame [cite: 219] */}
            <ScrollReveal direction="left" className="h-full">
              <div className="rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 h-full relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.5!2d71.6749718!3d29.3879797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b91da655623a1%3A0xd84bcc8df0d10bf8!2sMID-WEST%20HOSPITAL!5e0!3m2!1sen!2s!4v1700000000000" 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" 
                  title="Midwest Hospital Bahawalpur"
                />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur rounded-2xl shadow-sm border border-white/50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary"><MapPin className="w-4 h-4" /></div>
                    <p className="text-[11px] font-semibold text-slate-700">MID-WEST HOSPITAL · Trust Colony, Bahawalpur [cite: 2, 219]</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Theatre Visual  */}
            <ScrollReveal direction="right" className="h-full">
              <div className="rounded-[3rem] overflow-hidden shadow-xl h-full relative group">
                <img src={hospitalImage} alt="Advanced Surgery Theatre" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-10">
                  <div>
                    <p className="text-primary font-bold text-[10px] uppercase tracking-widest mb-2">Clinical Excellence</p>
                    <h3 className="text-white font-heading text-xl font-bold">Midwest Hospital Operation Theatre</h3>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Areas Served [cite: 27] ─── */}
      <section className="py-12 bg-slate-50">
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