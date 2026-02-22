import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Phone, MapPin, Clock, Mail, MessageSquare, Send } from "lucide-react";
import hospitalImage from "@/assets/Hospital.webp"; // Using the uploaded high-res clinical image

// WhatsApp Branding and Logic
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// Formatted WhatsApp URL with required patient information flow 
const WHATSAPP_NUMBER = "923002278796";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Doctor, I would like to book an appointment.\n\n" +
  "Patient Name:\n" +
  "Clinic to Visit:\n" +
  "Primary Problem:"
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const contactDetails = [
  {
    icon: <Phone className="w-5 h-5 text-primary" />,
    label: "Emergency Call",
    value: "+92 300 2278796",
    href: "tel:+923002278796",
  },
  {
    icon: <Mail className="w-5 h-5 text-primary" />,
    label: "Professional Inquiry",
    value: "info@skorthopaedics.com",
    href: "mailto:info@skorthopaedics.com",
  },
  {
    icon: <MapPin className="w-5 h-5 text-primary" />,
    label: "Clinic Location",
    value: "MID-WEST HOSPITAL, Trust Colony, Bahawalpur",
    href: "https://maps.google.com/?q=Midwest+Hospital+Bahawalpur",
  },
  {
    icon: <Clock className="w-5 h-5 text-primary" />,
    label: "Consultation Hours",
    value: "Mon – Sat · 9:00 AM – 11:00 PM",
    href: undefined,
  },
];

const Contact = () => {
  return (
    <main className="bg-white">
      {/* Page Header (Matching Reference Theme) */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="container-wide px-6 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Precision in Motion. <br />
            Excellence in <span className="text-primary">ORTHOPAEDICS.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Schedule your consultation with Dr. Shoaib Aslam Kurerr at Midwest Hospital. 
            Expert care for sports injuries, joint replacement, and complex trauma.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-wide max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Info & Map */}
            <div className="space-y-12">
              <ScrollReveal direction="left">
                <div className="space-y-8">
                  <h2 className="font-heading text-2xl font-bold text-foreground">Practice Information</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {contactDetails.map((item) => (
                      <div key={item.label} className="group p-5 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-md">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                          {item.icon}
                        </div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-1">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-foreground">{item.value}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Integrated Google Map [cite: 191, 199, 285] */}
              <ScrollReveal direction="left" delay={0.2}>
                <div className="space-y-6">
                  <h2 className="font-heading text-2xl font-bold text-foreground">Our Location</h2>
                  <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-[350px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.123456789!2d71.683!3d29.395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDIzJzQyLjAiTiA3McKwNDAnNTguOCJF!5e0!3m2!1sen!2spk!4v123456789"
                      width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                      title="Midwest Hospital Location"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Appointment Form & Direct CTA */}
            <div className="space-y-12">
              <ScrollReveal direction="right">
                <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-slate-100">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Request an Appointment</h2>
                  <p className="text-muted-foreground text-sm mb-8">Fill out the form below and our team will contact you shortly.</p>
                  
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Full Name</label>
                        <input type="text" placeholder="e.g. Ali Khan" className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone Number</label>
                        <input type="tel" placeholder="+92" className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Service Required</label>
                      <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm text-slate-500 appearance-none">
                        <option>Knee Replacement</option>
                        <option>ACL Reconstruction</option>
                        <option>Shoulder Surgery</option>
                        <option>Sports Injury</option>
                        <option>General Orthopaedics</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Message (Optional)</label>
                      <textarea rows={4} placeholder="Briefly describe your condition..." className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm resize-none" />
                    </div>
                    <button className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all">
                      <Send className="w-4 h-4" /> Send Request
                    </button>
                  </form>

                  <div className="mt-10 pt-10 border-t border-slate-100 text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Or Book Instantly via</p>
                    <a 
                      href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all"
                    >
                      <WhatsAppIcon className="w-5 h-5" /> Book via WhatsApp Appointment
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Service Visual  */}
              <ScrollReveal direction="right" delay={0.2}>
                <div className="rounded-[2.5rem] overflow-hidden shadow-lg h-72 relative">
                  <img src={hospitalImage} alt="Advanced Surgical Facility" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                    <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest mb-1">Our Facility</p>
                    <h3 className="text-white font-heading text-lg font-bold italic">State-of-the-art Surgery Theatre at Midwest Hospital</h3>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Serving Cities Banner [cite: 27] */}
      <section className="py-12 bg-slate-50">
        <div className="container-wide text-center">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">Serving Southern Punjab</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Bahawalpur", "Rahim Yar Khan", "Multan", "Lodhran", "Bahawalnagar", "Ahmadpur East"].map((city) => (
              <span key={city} className="bg-white border border-slate-200 text-slate-600 px-6 py-2 rounded-full text-xs font-semibold shadow-sm">
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