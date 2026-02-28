import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle, ShieldCheck, Award, BookOpen, Building2 } from "lucide-react";
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
              <p className="text-slate-600 leading-relaxed text-base text-justify">
                A distinguished <strong>Fellow of Trauma and Orthopaedics</strong>, Dr. Shoaib Aslam Kurerr brings the clinical authority of Pakistan’s premier medical institutions to Bahawalpur. Having served as a Specialist Surgeon at <strong>Mayo Hospital Lahore</strong>—the nation's largest tertiary care center—and <strong>King Edward Medical University</strong>, his practice is built on a foundation of high-volume surgical expertise and academic leadership. With an additional <strong>Fellowship in Sports Surgery and Advanced Trauma Management</strong>, he implements the gold standard of surgical protocols in every procedure as an active Member of the Pakistan Orthopaedic Association (POA).
              </p>
              
              <div className="grid grid-cols-3 gap-3 md:gap-4 py-6">
                {[
                  { val: "5000+", lab: "Patients" },
                  { val: "Dual", lab: "Fellowship" },
                  { val: "POA", lab: "Member" }
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

      {/* ─── 3. Verified Qualifications ─── */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container-wide max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-slate-900 mb-4">Academic & Professional Authority</h2>
            <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              { title: "MBBS", inst: "Allama Iqbal Medical College, Lahore", icon: <BookOpen className="w-5 h-5" /> },
              { title: "FCPS (Trauma & Ortho)", inst: "College of Physicians & Surgeons Pakistan", icon: <Award className="w-5 h-5" /> },
              { title: "Fellowship in Sports Surgery", inst: "Specialized Arthroscopy & Sports Medicine", icon: <ShieldCheck className="w-5 h-5" /> },
              { title: "Trauma Management Fellowship", inst: "Advanced Reconstructive Trauma Surgery", icon: <ShieldCheck className="w-5 h-5" /> },
              { title: "Member POA", inst: "Pakistan Orthopaedic Association", icon: <Award className="w-5 h-5" /> },
              { title: "Institutional Experience", inst: "Mayo Hospital & King Edward Medical University", icon: <Building2 className="w-5 h-5" /> },
              { title: "MRCS-I", inst: "Royal College of Surgeons, Edinburgh, UK", icon: <Award className="w-5 h-5" /> },
              { title: "Member PASSS / PAS", inst: "Arthroplasty & Sports Surgery Societies", icon: <ShieldCheck className="w-5 h-5" /> }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex items-start gap-4 p-4 border-b border-slate-200 group hover:bg-white hover:rounded-xl hover:shadow-sm transition-all">
                  <div className="mt-1 text-primary opacity-70 group-hover:opacity-100 transition-opacity">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base uppercase tracking-tight">{item.title}</h4>
                    <p className="text-slate-500 text-xs md:text-sm">{item.inst}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. Pinnacle of Training ─── */}
      <section className="py-12 md:py-24">
        <div className="container-wide max-w-6xl mx-auto px-0 md:px-6">
          <ScrollReveal>
            <div className="bg-primary md:rounded-[3rem] overflow-hidden shadow-2xl">
              <div className="flex flex-col md:flex-row">
                <div className="p-8 md:p-16 md:w-3/5 space-y-6">
                  <p className="text-accent font-bold text-[10px] uppercase tracking-[0.3em]">Advanced Expertise</p>
                  <h3 className="font-heading text-2xl md:text-4xl font-bold text-white leading-tight">
                    Dual Fellowship in Trauma & Sports Surgery
                  </h3>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    Rooted in the clinical heritage of <strong>Mayo Hospital Lahore</strong> and <strong>King Edward Medical University</strong>, Dr. Shoaib's dual fellowships signify a mastery of complex trauma management and modern sports medicine. This specialized training allows for high-precision joint reconstruction and faster recovery times.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {[
                      "Advanced Trauma Management",
                      "Sports Surgery Fellowship",
                      "Joint Replacement Specialist",
                      "KEMU & Mayo Hospital Alumnus"
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
              <p className="text-slate-600 text-sm md:text-base text-balance">
                Practicing at Midwest Hospital, Bahawalpur, we apply the surgical protocols developed at Punjab's premier medical institutions to provide high-definition arthroscopic care.
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