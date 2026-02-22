import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Phone, CheckCircle, Award, ShieldCheck, Star } from "lucide-react";
import doctorSeated from "@/assets/doctor-seated.jpg";
import doctorSurgery from "@/assets/doctor-surgery-blue.jpg";
import hospitalImage from "@/assets/hospital-interior.webp";

// ─── Credential Badge SVGs (Kept as is) ────────────────────────────────────────
const AIMCBadge = () => (
  <svg viewBox="0 0 80 80" className="w-10 h-10 mx-auto mb-2">
    <circle cx="40" cy="40" r="38" fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.2)" strokeWidth="1.5"/>
    <text x="40" y="28" textAnchor="middle" fontSize="9" fontWeight="700" fill="hsl(var(--primary))" fontFamily="serif">AIMC</text>
    <line x1="20" y1="33" x2="60" y2="33" stroke="hsl(var(--primary)/0.3)" strokeWidth="1"/>
    <text x="40" y="44" textAnchor="middle" fontSize="6" fill="hsl(var(--foreground)/0.7)" fontFamily="serif">Allama Iqbal</text>
    <text x="40" y="52" textAnchor="middle" fontSize="6" fill="hsl(var(--foreground)/0.7)" fontFamily="serif">Medical College</text>
    <text x="40" y="63" textAnchor="middle" fontSize="7" fontWeight="600" fill="hsl(var(--primary))" fontFamily="serif">MBBS</text>
  </svg>
);

const FCPSBadge = () => (
  <svg viewBox="0 0 80 80" className="w-10 h-10 mx-auto mb-2">
    <circle cx="40" cy="40" r="38" fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.2)" strokeWidth="1.5"/>
    <text x="40" y="28" textAnchor="middle" fontSize="9" fontWeight="700" fill="hsl(var(--primary))" fontFamily="serif">FCPS</text>
    <line x1="20" y1="33" x2="60" y2="33" stroke="hsl(var(--primary)/0.3)" strokeWidth="1"/>
    <text x="40" y="43" textAnchor="middle" fontSize="5.5" fill="hsl(var(--foreground)/0.7)" fontFamily="serif">College of Physicians</text>
    <text x="40" y="51" textAnchor="middle" fontSize="5.5" fill="hsl(var(--foreground)/0.7)" fontFamily="serif">& Surgeons Pakistan</text>
    <text x="40" y="63" textAnchor="middle" fontSize="6.5" fontWeight="600" fill="hsl(var(--primary))" fontFamily="serif">Trauma & Ortho</text>
  </svg>
);

const ATLSBadge = () => (
  <svg viewBox="0 0 80 80" className="w-10 h-10 mx-auto mb-2">
    <circle cx="40" cy="40" r="38" fill="hsl(25,80%,55%,0.08)" stroke="hsl(25,80%,55%,0.25)" strokeWidth="1.5"/>
    <text x="40" y="28" textAnchor="middle" fontSize="9" fontWeight="700" fill="hsl(25,80%,45%)" fontFamily="serif">ATLS</text>
    <line x1="20" y1="33" x2="60" y2="33" stroke="hsl(25,80%,55%,0.3)" strokeWidth="1"/>
    <text x="40" y="43" textAnchor="middle" fontSize="5.5" fill="hsl(var(--foreground)/0.7)" fontFamily="serif">Advanced Trauma</text>
    <text x="40" y="51" textAnchor="middle" fontSize="5.5" fill="hsl(var(--foreground)/0.7)" fontFamily="serif">Life Support</text>
    <text x="40" y="63" textAnchor="middle" fontSize="6.5" fontWeight="600" fill="hsl(25,80%,45%)" fontFamily="serif">USA Certified</text>
  </svg>
);

const MRCSBadge = () => (
  <svg viewBox="0 0 80 80" className="w-10 h-10 mx-auto mb-2">
    <circle cx="40" cy="40" r="38" fill="hsl(210,60%,40%,0.08)" stroke="hsl(210,60%,40%,0.2)" strokeWidth="1.5"/>
    <text x="40" y="28" textAnchor="middle" fontSize="9" fontWeight="700" fill="hsl(210,60%,35%)" fontFamily="serif">MRCS-I</text>
    <line x1="20" y1="33" x2="60" y2="33" stroke="hsl(210,60%,40%,0.3)" strokeWidth="1"/>
    <text x="40" y="43" textAnchor="middle" fontSize="5.5" fill="hsl(var(--foreground)/0.7)" fontFamily="serif">Royal College of</text>
    <text x="40" y="51" textAnchor="middle" fontSize="5.5" fill="hsl(var(--foreground)/0.7)" fontFamily="serif">Surgeons</text>
    <text x="40" y="63" textAnchor="middle" fontSize="6.5" fontWeight="600" fill="hsl(210,60%,35%)" fontFamily="serif">Edinburgh, UK</text>
  </svg>
);

const IrishBadge = () => (
  <svg viewBox="0 0 80 80" className="w-10 h-10 mx-auto mb-2">
    <circle cx="40" cy="40" r="38" fill="hsl(140,50%,40%,0.08)" stroke="hsl(140,50%,40%,0.2)" strokeWidth="1.5"/>
    <text x="40" y="26" textAnchor="middle" fontSize="7" fontWeight="700" fill="hsl(140,50%,35%)" fontFamily="serif">IRISH</text>
    <text x="40" y="35" textAnchor="middle" fontSize="7" fontWeight="700" fill="hsl(140,50%,35%)" fontFamily="serif">MEDICAL</text>
    <line x1="20" y1="39" x2="60" y2="39" stroke="hsl(140,50%,40%,0.3)" strokeWidth="1"/>
    <text x="40" y="50" textAnchor="middle" fontSize="5.5" fill="hsl(var(--foreground)/0.7)" fontFamily="serif">Council Member</text>
    <text x="40" y="63" textAnchor="middle" fontSize="6.5" fontWeight="600" fill="hsl(140,50%,35%)" fontFamily="serif">Ireland</text>
  </svg>
);

const MayoBadge = () => (
  <svg viewBox="0 0 80 80" className="w-10 h-10 mx-auto mb-2">
    <circle cx="40" cy="40" r="38" fill="hsl(0,60%,45%,0.08)" stroke="hsl(0,60%,45%,0.2)" strokeWidth="1.5"/>
    <text x="40" y="26" textAnchor="middle" fontSize="8" fontWeight="700" fill="hsl(0,60%,40%)" fontFamily="serif">MAYO</text>
    <text x="40" y="35" textAnchor="middle" fontSize="8" fontWeight="700" fill="hsl(0,60%,40%)" fontFamily="serif">HOSPITAL</text>
    <line x1="20" y1="39" x2="60" y2="39" stroke="hsl(0,60%,45%,0.3)" strokeWidth="1"/>
    <text x="40" y="50" textAnchor="middle" fontSize="5.5" fill="hsl(var(--foreground)/0.7)" fontFamily="serif">Ex-Orthopaedic</text>
    <text x="40" y="58" textAnchor="middle" fontSize="5.5" fill="hsl(var(--foreground)/0.7)" fontFamily="serif">Surgeon</text>
    <text x="40" y="68" textAnchor="middle" fontSize="6" fontWeight="600" fill="hsl(0,60%,40%)" fontFamily="serif">Lahore</text>
  </svg>
);

const POABadge = () => (
  <svg viewBox="0 0 80 80" className="w-10 h-10 mx-auto mb-2">
    <circle cx="40" cy="40" r="38" fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.2)" strokeWidth="1.5"/>
    <text x="40" y="26" textAnchor="middle" fontSize="7" fontWeight="700" fill="hsl(var(--primary))" fontFamily="serif">PAO</text>
    <line x1="22" y1="30" x2="58" y2="30" stroke="hsl(var(--primary)/0.3)" strokeWidth="1"/>
    <text x="40" y="40" textAnchor="middle" fontSize="5" fill="hsl(var(--foreground)/0.7)" fontFamily="serif">Pakistan</text>
    <text x="40" y="47" textAnchor="middle" fontSize="5" fill="hsl(var(--foreground)/0.7)" fontFamily="serif">Arthroplasty</text>
    <text x="40" y="54" textAnchor="middle" fontSize="5" fill="hsl(var(--foreground)/0.7)" fontFamily="serif">Society</text>
    <text x="40" y="65" textAnchor="middle" fontSize="6" fontWeight="600" fill="hsl(var(--primary))" fontFamily="serif">Member</text>
  </svg>
);

const PASSBadge = () => (
  <svg viewBox="0 0 80 80" className="w-10 h-10 mx-auto mb-2">
    <circle cx="40" cy="40" r="38" fill="hsl(var(--accent)/0.1)" stroke="hsl(var(--accent)/0.3)" strokeWidth="1.5"/>
    <text x="40" y="26" textAnchor="middle" fontSize="7" fontWeight="700" fill="hsl(var(--accent))" fontFamily="serif">PASSS</text>
    <line x1="18" y1="30" x2="62" y2="30" stroke="hsl(var(--accent)/0.3)" strokeWidth="1"/>
    <text x="40" y="40" textAnchor="middle" fontSize="4.8" fill="hsl(var(--foreground)/0.7)" fontFamily="serif">Pakistan Arthroscopy</text>
    <text x="40" y="47" textAnchor="middle" fontSize="4.8" fill="hsl(var(--foreground)/0.7)" fontFamily="serif">& Sports Surgery</text>
    <text x="40" y="54" textAnchor="middle" fontSize="4.8" fill="hsl(var(--foreground)/0.7)" fontFamily="serif">Society</text>
    <text x="40" y="65" textAnchor="middle" fontSize="6" fontWeight="600" fill="hsl(var(--accent))" fontFamily="serif">Member</text>
  </svg>
);

const badges = [
  { component: <AIMCBadge />, label: "MBBS", sub: "Allama Iqbal Medical College" },
  { component: <FCPSBadge />, label: "FCPS", sub: "Trauma & Orthopaedics" },
  { component: <ATLSBadge />, label: "ATLS", sub: "USA Certified" },
  { component: <MRCSBadge />, label: "MRCS-I", sub: "Edinburgh, UK" },
  { component: <IrishBadge />, label: "Irish Medical Council", sub: "Registered Member" },
  { component: <MayoBadge />, label: "Mayo Hospital", sub: "Lahore — Ex-Surgeon" },
  { component: <POABadge />, label: "PAO", sub: "Pakistan Arthroplasty Society" },
  { component: <PASSBadge />, label: "PASSS", sub: "Pakistan Arthroscopy & Sports Surgery" },
];

const About = () => {
  const whatsappUrl = "https://wa.me/923002278796?text=Hello%20Dr.%20Shoaib%2C%20I%20would%20like%20to%20book%20a%20consultation.";

  return (
    <main className="bg-white">
      {/* ─── 1. Clean Hero Banner ─── */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#2a5298] to-[#1e3c72] text-center overflow-hidden">
        <div className="relative z-10 container-wide px-6">
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-white/60 text-[10px] font-bold uppercase tracking-[0.4em] mb-4"
          >
            Surgical Excellence
          </motion.p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">About Our Practice</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Meet Dr. Shoaib Aslam Kurerr — a specialist dedicated to restoring mobility through 
            advanced orthopaedic techniques and fellowship-trained precision.
          </p>
        </div>
      </section>

      {/* ─── 2. Bio Section ─── */}
      <section className="py-16 md:py-24">
        <div className="container-wide max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              {/* Removed overlay text from image group */}
              <div className="relative group">
                <img
                  src={doctorSeated}
                  alt="Dr Shoaib Aslam Kurerr"
                  className="rounded-[2.5rem] w-full max-w-md mx-auto object-cover aspect-[4/5] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                  <span className="w-8 h-px bg-primary" /> Specialist Profile
                </div>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                  Dr. Shoaib Aslam Kurerr
                </h2>
                <p className="text-slate-600 leading-relaxed text-base">
                  Dr. Shoaib Aslam Kurerr is a highly specialized Orthopaedic Surgeon with an advanced **Fellowship in Sports Surgery and Arthroscopy**. He specializes in minimally invasive "keyhole" procedures for knee and shoulder conditions, bringing international surgical standards to Bahawalpur.
                </p>
                
                {/* Responsive Stats Grid */}
                <div className="grid grid-cols-3 gap-3 md:gap-4 py-6">
                  {[
                    { val: "5000+", lab: "Patients" },
                    { val: "8+", lab: "Years" },
                    { val: "400+", lab: "Surgeries" }
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
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── 3. Credential Grid ─── */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container-wide max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-slate-900 mb-4">Verified Qualifications</h2>
            <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {badges.map((badge, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-white p-6 rounded-[2rem] text-center border border-slate-200/60 shadow-sm hover:shadow-xl transition-all h-full flex flex-col justify-center">
                  <div className="scale-110 mb-2">{badge.component}</div>
                  <p className="font-bold text-slate-900 text-xs md:text-sm uppercase tracking-wide">{badge.label}</p>
                  <p className="text-slate-400 text-[10px] mt-1 leading-tight">{badge.sub}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. Fellowship Highlight (Mobile Optimized) ─── */}
      <section className="py-12 md:py-24">
        {/* px-0 on mobile for full-bleed effect */}
        <div className="container-wide max-w-6xl mx-auto px-0 md:px-6">
          <ScrollReveal>
            {/* Rounded corners removed on mobile */}
            <div className="bg-primary md:rounded-[3rem] overflow-hidden shadow-2xl">
              <div className="flex flex-col md:flex-row">
                <div className="p-8 md:p-16 md:w-3/5 space-y-6">
                  <p className="text-accent font-bold text-[10px] uppercase tracking-[0.3em]">Pinnacle of Training</p>
                  <h3 className="font-heading text-2xl md:text-4xl font-bold text-white leading-tight">
                    POA Fellowship in Sports Surgery & Arthroscopy
                  </h3>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    This prestigious qualification from the Pakistan Orthopaedic Association certifies advanced competency in complex arthroscopic procedures. It places Dr. Shoaib among an elite group of surgeons capable of performing high-precision "keyhole" repairs.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center gap-2 text-white/90 text-xs font-semibold">
                      <ShieldCheck className="w-4 h-4 text-accent" /> Advanced Arthroscopy
                    </div>
                    <div className="flex items-center gap-2 text-white/90 text-xs font-semibold">
                      <ShieldCheck className="w-4 h-4 text-accent" /> Sports Medicine
                    </div>
                  </div>
                </div>
                <div className="md:w-2/5 min-h-[300px] relative">
                  <img src={doctorSurgery} alt="Surgery" className="absolute inset-0 w-full h-full object-cover" />
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
                <img src={hospitalImage} alt="Midwest Hospital" className="w-full h-80 object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" className="space-y-6">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-slate-900">Midwest Hospital Facilities</h3>
              <p className="text-slate-600 text-sm md:text-base">
                Operating within Midwest Hospital, Bahawalpur, our practice utilizes high-definition arthroscopic towers and modern sterilization protocols matching international safety standards.
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