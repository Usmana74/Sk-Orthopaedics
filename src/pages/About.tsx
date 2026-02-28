import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle, ShieldCheck, Award, BookOpen } from "lucide-react";
import doctorSeated from "@/assets/doctor-seated.jpg";
import doctorSurgery from "@/assets/doctor-surgery-blue.jpg";
import hospitalImage from "@/assets/hospital-interior.webp";

// ─── Component Logic ──────────────────────────────────────────────────────

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
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    detail: "Lahore"
  },
  { 
    title: "MRCS-I", 
    desc: "Royal College of Surgeons", 
    icon: <Award className="w-6 h-6 text-primary" />,
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
      {/* ─── 1. Hero Banner (Existing Style) ─── */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1e3c72] to-[#2a5298] text-center overflow-hidden">
        <div className="relative z-10 container-wide px-6">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white/60 text-[10px] font-bold uppercase tracking-[0.4em] mb-4">
            Surgical Excellence
          </motion.p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">About Our Practice</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Fellow of Trauma & Orthopaedics with extensive experience in the biggest hospital of Punjab — Mayo Hospital Lahore.
          </p>
        </div>
      </section>

      {/* ─── 2. Bio Section ─── */}
      <section className="py-16 md:py-24">
        <div className="container-wide max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative group">
                <img
                  src={doctorSeated}
                  alt="Dr Shoaib Aslam Kurerr"
                  className="rounded-[2.5rem] w-full max-w-md mx-auto object-cover aspect-[4/5] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="space-y-6">
              <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                <span className="w-8 h-px bg-primary" /> Specialist Profile
              </div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                Dr. Shoaib Aslam Kurerr
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Bringing clinical authority to every procedure, Dr. Shoaib Aslam Kurerr is a <strong>Fellow of Trauma and Orthopaedics</strong>. With an extensive background as a <strong>Surgeon at Mayo Hospital Lahore</strong> and <strong>King Edward Medical University</strong>, he applies the highest standards of surgical precision to complex joint and sports injuries.
              </p>
              
              <div className="grid grid-cols-3 gap-3 md:gap-4 py-6">
                {[
                  { val: "5000+", lab: "Patients" },
                  { val: "Mayo", lab: "Ex-Surgeon" },
                  { val: "FCPS", lab: "Certified" }
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-xl md:text-2xl font-bold text-primary">{s.val}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{s.lab}</p>
                  </div>
                ))}
              </div>

              <a href={whatsappUrl} target="_blank" className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold text-sm shadow-lg hover:opacity-90 transition-all">
                Book Clinical Consultation
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── 3. Verified Qualifications (Updated Pattern) ─── */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container-wide max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-slate-900 mb-4">Verified Qualifications</h2>
            <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
          </div>

          {/* Qualification Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {qualifications.map((q, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-white p-6 rounded-[2rem] text-center border border-slate-200/60 shadow-sm hover:shadow-md transition-all h-full">
                   <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-4 border border-primary/10">
                      {q.icon}
                   </div>
                   <h4 className="font-bold text-slate-900 text-sm md:text-base uppercase tracking-wide">{q.title}</h4>
                   <p className="text-slate-500 text-[10px] md:text-xs mt-2 leading-tight">{q.desc}</p>
                   <p className="text-primary font-bold text-[9px] mt-2 uppercase tracking-widest">{q.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Institutional Memberships */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {memberships.map((m, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
                <p className="font-bold text-primary text-xs uppercase mb-1">{m.label}</p>
                <p className="text-slate-400 text-[9px] uppercase font-bold tracking-tighter leading-none">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. Pinnacle of Training (With Joint Replacement) ─── */}
      <section className="py-12 md:py-24">
        <div className="container-wide max-w-6xl mx-auto px-0 md:px-6">
          <ScrollReveal>
            <div className="bg-primary md:rounded-[3rem] overflow-hidden shadow-2xl">
              <div className="flex flex-col md:flex-row">
                <div className="p-8 md:p-16 md:w-3/5 space-y-6">
                  <p className="text-accent font-bold text-[10px] uppercase tracking-[0.3em]">Pinnacle of Training</p>
                  <h3 className="font-heading text-2xl md:text-4xl font-bold text-white leading-tight">
                    POA Fellowship in Sports Surgery & Arthroscopy
                  </h3>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    Certified by the <strong>Pakistan Orthopaedic Association</strong>, this fellowship represents the highest level of specialized training in Pakistan, ensuring advanced competency in modern surgical interventions.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {[
                      "Advanced Arthroscopy",
                      "Joint Replacement",
                      "Sports Medicine",
                      "Trauma Management"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-white/90 text-xs font-semibold">
                        <ShieldCheck className="w-4 h-4 text-accent" /> {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:w-2/5 min-h-[300px] relative">
                  <img src={doctorSurgery} alt="Surgery" className="absolute inset-0 w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-primary via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 5. Facilities Section ─── */}
      <section className="py-20 bg-white">
        <div className="container-wide max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="rounded-[2.5rem] overflow-hidden shadow-xl">
                <img src={hospitalImage} alt="Hospital Facilities" className="w-full h-80 object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" className="space-y-6">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-slate-900">Midwest Hospital Facilities</h3>
              <p className="text-slate-600 text-sm md:text-base">
                Operating within Midwest Hospital, Bahawalpur, we utilize high-definition arthroscopic towers and modern sterilization protocols matching international safety standards.
              </p>
              <ul className="space-y-3">
                {[
                  "Advanced HD Arthroscopic Towers",
                  "Intraoperative C-arm Imaging",
                  "Dedicated Orthopaedic Recovery Wing"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle className="w-4 h-4 text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;