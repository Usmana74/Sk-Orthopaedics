import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle, ShieldCheck, Award, BookOpen, Building2, Landmark } from "lucide-react";
import doctorSeated from "@/assets/doctor-seated.jpg";
import doctorSurgery from "@/assets/doctor-surgery-blue.jpg";
import hospitalImage from "@/assets/hospital-interior.webp";

const About = () => {
  const whatsappUrl = "https://wa.me/923002278796?text=Hello%20Dr.%20Shoaib%2C%20I%20would%20like%20to%20book%20a%20consultation.";

  return (
    <main className="bg-white">
      {/* ─── 1. Hero Banner ─── */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1e3c72] to-[#2a5298] text-center overflow-hidden">
        <div className="relative z-10 container-wide px-6">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white/60 text-[10px] font-bold uppercase tracking-[0.4em] mb-4">
            Surgical Excellence
          </motion.p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">About Our Practice</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-balance">
            Specialized Orthopaedic Surgeon with extensive clinical experience at Mayo Hospital Lahore and King Edward Medical University.
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
                With a career built within the most prestigious medical institutions of Pakistan, Dr. Shoaib Aslam Kurerr brings an unmatched level of clinical authority to Bahawalpur. His experience at <strong>Mayo Hospital Lahore</strong> and <strong>King Edward Medical University</strong> ensures that every patient receives treatment aligned with global academic and surgical standards.
              </p>
              
              <div className="grid grid-cols-3 gap-3 md:gap-4 py-6">
                {[
                  { val: "5000+", lab: "Patients" },
                  { val: "FCPS", lab: "Trauma & Ortho" },
                  { val: "POA", lab: "Fellow" }
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

      {/* ─── 3. Verified Qualifications (New Timeline Layout) ─── */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container-wide max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-slate-900 mb-4">Academic & Professional Authority</h2>
            <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1: Core Degrees */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4 ml-2">Clinical Foundations</h4>
              {[
                { title: "MBBS", inst: "Allama Iqbal Medical College, Lahore", icon: <BookOpen className="w-5 h-5" /> },
                { title: "FCPS (Trauma & Ortho)", inst: "College of Physicians & Surgeons Pakistan", icon: <Award className="w-5 h-5" /> },
                { title: "MRCS-I", inst: "Royal College of Surgeons, Edinburgh, UK", icon: <Landmark className="w-5 h-5" /> }
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200 hover:border-primary/40 transition-colors shadow-sm">
                    <div className="p-3 rounded-xl bg-primary/5 text-primary">{item.icon}</div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm uppercase">{item.title}</p>
                      <p className="text-slate-500 text-xs">{item.inst}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Column 2: Institutional & Societies */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4 ml-2">Professional Governance</h4>
              {[
                { title: "Ex-Surgeon & Specialist", inst: "Mayo Hospital | King Edward Medical University", icon: <Building2 className="w-5 h-5" /> },
                { title: "Member PAO", inst: "Pakistan Orthopaedic Association", icon: <ShieldCheck className="w-5 h-5" /> },
                { title: "Member PASSS / PAS", inst: "Arthroplasty & Sports Surgery Societies", icon: <ShieldCheck className="w-5 h-5" /> }
              ].map((item, i) => (
                <ScrollReveal key={i} delay={0.3 + (i * 0.1)}>
                  <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200 hover:border-primary/40 transition-colors shadow-sm">
                    <div className="p-3 rounded-xl bg-primary/5 text-primary">{item.icon}</div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm uppercase">{item.title}</p>
                      <p className="text-slate-500 text-xs">{item.inst}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. Pinnacle of Training (Updated Data) ─── */}
      <section className="py-12 md:py-24">
        <div className="container-wide max-w-6xl mx-auto px-0 md:px-6">
          <ScrollReveal>
            <div className="bg-primary md:rounded-[3rem] overflow-hidden shadow-2xl">
              <div className="flex flex-col md:flex-row">
                <div className="p-8 md:p-16 md:w-3/5 space-y-6 text-white">
                  <p className="text-accent font-bold text-[10px] uppercase tracking-[0.3em]">Institutional Heritage</p>
                  <h3 className="font-heading text-2xl md:text-4xl font-bold leading-tight">
                    Pinnacle of Training & Clinical Authority
                  </h3>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    Trained at <strong>Mayo Hospital Lahore</strong> and <strong>King Edward Medical University</strong>, Dr. Shoaib's expertise is rooted in Pakistan's premier clinical environments. His specialized <strong>Fellowship in Trauma and Orthopaedics</strong> certifies his ability to handle complex surgical interventions with precision.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {[
                      "Fellowship in Trauma & Ortho",
                      "Joint Replacement Specialist",
                      "Advanced Sports Medicine",
                      "King Edward Medical University Alumnus"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-white/90 text-xs font-semibold">
                        <ShieldCheck className="w-4 h-4 text-accent" /> {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:w-2/5 min-h-[350px] relative">
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
                Practicing at Midwest Hospital, Bahawalpur, we ensure that the advanced surgical protocols learned at Mayo Hospital are implemented using modern HD arthroscopic towers and intraoperative C-arm imaging.
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