import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle, ShieldCheck, Award, BookOpen } from "lucide-react";
import doctorSeated from "@/assets/doctor-seated.jpg";
import doctorSurgery from "@/assets/doctor-surgery-blue.jpg";
import hospitalImage from "@/assets/hospital-interior.webp";

// ─── Refined Credential Badges ──────────────────────────────────────────────
const BadgeContainer = ({ children, colorClass = "bg-primary/10 border-primary/20" }) => (
  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${colorClass} mb-4 mx-auto`}>
    {children}
  </div>
);

const qualifications = [
  { 
    title: "MBBS", 
    desc: "Allama Iqbal Medical College", 
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    detail: "Lahore"
  },
  { 
    title: "FCPS", 
    desc: "Fellow of Trauma & Orthopaedics", 
    icon: <Award className="w-6 h-6 text-primary" />,
    detail: "CPSP Pakistan"
  },
  { 
    title: "Ex-Surgeon", 
    desc: "Mayo Hospital | King Edward Medical University", 
    icon: <ShieldCheck className="w-6 h-6 text-red-600" />,
    detail: "Lahore"
  },
  { 
    title: "MRCS-I", 
    desc: "Royal College of Surgeons", 
    icon: <Award className="w-6 h-6 text-blue-600" />,
    detail: "Edinburgh, UK"
  }
];

const memberships = [
  { label: "POA", sub: "Pakistan Orthopaedic Association" },
  { label: "PAS", sub: "Pakistan Arthroplasty Society" },
  { label: "PASSS", sub: "Pak Arthroscopy & Sports Surgery" },
  { label: "ATLS", sub: "Advanced Trauma Life Support (USA)" }
];

const About = () => {
  const whatsappUrl = "https://wa.me/923002278796?text=Hello%20Dr.%20Shoaib%2C%20I%20would%20like%20to%20book%20a%20consultation.";

  return (
    <main className="bg-white">
      {/* ─── 1. Hero Banner ─── */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1e3c72] to-[#2a5298] text-center overflow-hidden">
        <div className="relative z-10 container-wide px-6">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white/60 text-[10px] font-bold uppercase tracking-[0.4em] mb-4">
            Global Expertise | Local Care
          </motion.p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">Dr. Shoaib Aslam Kurerr</h1>
          <p className="text-white/70 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Fellow of Trauma & Orthopaedics with extensive surgical experience at Mayo Hospital Lahore and King Edward Medical University.
          </p>
        </div>
      </section>

      {/* ─── 2. Professional Bio ─── */}
      <section className="py-16 md:py-24">
        <div className="container-wide max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] -z-10 group-hover:bg-primary/10 transition-colors duration-500" />
                <img
                  src={doctorSeated}
                  alt="Dr Shoaib Aslam Kurerr"
                  className="rounded-[2.5rem] w-full max-w-md mx-auto object-cover aspect-[4/5] shadow-2xl"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                  <span className="w-8 h-px bg-primary" /> Specialist Profile
                </div>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                  Academic Precision, <br /><span className="text-primary">Surgical Excellence.</span>
                </h2>
                <p className="text-slate-600 leading-relaxed text-base">
                  As an <strong>Ex-Surgeon at Mayo Hospital Lahore</strong>—the biggest hospital in Punjab—Dr. Shoaib has managed some of the most complex orthopaedic cases in the country. His tenure at <strong>King Edward Medical University</strong> has instilled a commitment to evidence-based practice and international safety standards in every procedure he performs.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { val: "5000+", lab: "Consultations" },
                  { val: "Mayo", lab: "Ex-Surgeon" },
                  { val: "FCPS", lab: "Certified" }
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-lg md:text-xl font-bold text-primary">{s.val}</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{s.lab}</p>
                  </div>
                ))}
              </div>

              <a href={whatsappUrl} target="_blank" className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold text-sm shadow-lg hover:-translate-y-1 transition-all">
                Book Professional Consultation
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── 3. Verified Qualifications (Updated Pattern) ─── */}
      <section className="py-20 bg-slate-50">
        <div className="container-wide max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-slate-900 mb-2">Verified Qualifications</h2>
            <p className="text-slate-500 text-sm">Academic foundations from premier medical institutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {qualifications.map((q, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-primary/30 transition-all h-full text-center">
                  <BadgeContainer>{q.icon}</BadgeContainer>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">{q.title}</h4>
                  <p className="text-slate-600 text-xs font-medium mb-2">{q.desc}</p>
                  <p className="text-primary font-bold text-[10px] uppercase tracking-widest">{q.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {memberships.map((m, i) => (
              <div key={i} className="bg-white/50 p-4 rounded-2xl border border-dashed border-slate-300 flex flex-col items-center text-center">
                <span className="font-bold text-primary text-sm mb-1">{m.label}</span>
                <span className="text-slate-500 text-[10px] leading-tight font-medium">{m.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. Pinnacle of Training (Updated Points) ─── */}
      <section className="py-12 md:py-24">
        <div className="container-wide max-w-6xl mx-auto px-0 md:px-6">
          <ScrollReveal>
            <div className="bg-slate-900 md:rounded-[3rem] overflow-hidden shadow-2xl">
              <div className="flex flex-col md:flex-row">
                <div className="p-8 md:p-16 md:w-3/5 space-y-6">
                  <p className="text-primary font-bold text-[10px] uppercase tracking-[0.3em]">Advanced Fellowship</p>
                  <h3 className="font-heading text-2xl md:text-4xl font-bold text-white leading-tight">
                    POA Fellowship: The Elite Standard
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                    This prestigious fellowship by the <strong>Pakistan Orthopaedic Association</strong> represents the highest tier of specialized training. Dr. Shoaib is among the select specialists trained to bridge the gap between traditional surgery and advanced minimally invasive recovery.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {[
                      "Advanced Arthroscopy",
                      "Joint Replacement",
                      "Sports Medicine",
                      "Trauma Management"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-white/90 text-xs font-semibold">
                        <ShieldCheck className="w-5 h-5 text-primary" /> {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:w-2/5 min-h-[400px] relative">
                  <img src={doctorSurgery} alt="Surgery" className="absolute inset-0 w-full h-full object-cover object-top opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default About;