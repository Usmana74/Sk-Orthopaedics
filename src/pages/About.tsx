import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle, ShieldCheck } from "lucide-react";
import doctorSeated from "@/assets/doctor-seated.jpg";
import doctorSurgery from "@/assets/doctor-surgery-blue.jpg";
import hospitalImage from "@/assets/hospital-interior.webp";

/* ───────────────────────── BADGE COMPONENTS ───────────────────────── */

const AIMCBadge = () => (
  <svg viewBox="0 0 80 80" className="w-12 h-12 mx-auto mb-3">
    <circle cx="40" cy="40" r="38" fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.2)" strokeWidth="1.5"/>
    <text x="40" y="32" textAnchor="middle" fontSize="9" fontWeight="700" fill="hsl(var(--primary))">MBBS</text>
    <text x="40" y="48" textAnchor="middle" fontSize="6" fill="hsl(var(--foreground)/0.7)">Allama Iqbal Medical College</text>
  </svg>
);

const FCPSBadge = () => (
  <svg viewBox="0 0 80 80" className="w-12 h-12 mx-auto mb-3">
    <circle cx="40" cy="40" r="38" fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.2)" strokeWidth="1.5"/>
    <text x="40" y="32" textAnchor="middle" fontSize="9" fontWeight="700" fill="hsl(var(--primary))">FCPS</text>
    <text x="40" y="48" textAnchor="middle" fontSize="6" fill="hsl(var(--foreground)/0.7)">Trauma & Orthopaedics</text>
  </svg>
);

const MRCSBadge = () => (
  <svg viewBox="0 0 80 80" className="w-12 h-12 mx-auto mb-3">
    <circle cx="40" cy="40" r="38" fill="hsl(210,60%,40%,0.08)" stroke="hsl(210,60%,40%,0.2)" strokeWidth="1.5"/>
    <text x="40" y="32" textAnchor="middle" fontSize="9" fontWeight="700" fill="hsl(210,60%,35%)">MRCS-I</text>
    <text x="40" y="48" textAnchor="middle" fontSize="6" fill="hsl(var(--foreground)/0.7)">Edinburgh, UK</text>
  </svg>
);

const ATLSBadge = () => (
  <svg viewBox="0 0 80 80" className="w-12 h-12 mx-auto mb-3">
    <circle cx="40" cy="40" r="38" fill="hsl(25,80%,55%,0.08)" stroke="hsl(25,80%,55%,0.25)" strokeWidth="1.5"/>
    <text x="40" y="32" textAnchor="middle" fontSize="9" fontWeight="700" fill="hsl(25,80%,45%)">ATLS</text>
    <text x="40" y="48" textAnchor="middle" fontSize="6" fill="hsl(var(--foreground)/0.7)">USA Certified</text>
  </svg>
);

/* ───────────── MEMBERSHIPS ───────────── */

const PASBadge = () => (
  <svg viewBox="0 0 80 80" className="w-12 h-12 mx-auto mb-3">
    <circle cx="40" cy="40" r="38" fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.2)" strokeWidth="1.5"/>
    <text x="40" y="32" textAnchor="middle" fontSize="9" fontWeight="700" fill="hsl(var(--primary))">PAS</text>
    <text x="40" y="48" textAnchor="middle" fontSize="6" fill="hsl(var(--foreground)/0.7)">Pakistan Arthroplasty Society</text>
  </svg>
);

const PASSBadge = () => (
  <svg viewBox="0 0 80 80" className="w-12 h-12 mx-auto mb-3">
    <circle cx="40" cy="40" r="38" fill="hsl(var(--accent)/0.1)" stroke="hsl(var(--accent)/0.3)" strokeWidth="1.5"/>
    <text x="40" y="32" textAnchor="middle" fontSize="9" fontWeight="700" fill="hsl(var(--accent))">PASSS</text>
    <text x="40" y="48" textAnchor="middle" fontSize="6" fill="hsl(var(--foreground)/0.7)">Arthroscopy & Sports Surgery</text>
  </svg>
);

const POABadge = () => (
  <svg viewBox="0 0 80 80" className="w-12 h-12 mx-auto mb-3">
    <circle cx="40" cy="40" r="38" fill="hsl(var(--primary)/0.08)" stroke="hsl(var(--primary)/0.2)" strokeWidth="1.5"/>
    <text x="40" y="32" textAnchor="middle" fontSize="9" fontWeight="700" fill="hsl(var(--primary))">POA</text>
    <text x="40" y="48" textAnchor="middle" fontSize="6" fill="hsl(var(--foreground)/0.7)">Pakistan Orthopaedic Association</text>
  </svg>
);

/* ───────────────────────── COMPONENT ───────────────────────── */

const About = () => {

  const whatsappUrl = "https://wa.me/923002278796";

  return (
    <main className="bg-white">

      {/* ───────── HERO ───────── */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#2a5298] to-[#1e3c72] text-center text-white">
        <div className="container-wide px-6">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            About Dr. Shoaib Aslam Kurerr
          </h1>
          <p className="max-w-2xl mx-auto text-white/80">
            Specialist Orthopaedic Surgeon with advanced fellowship training in Trauma & Orthopaedics.
          </p>
        </div>
      </section>

      {/* ───────── BIO ───────── */}
      <section className="py-20">
        <div className="container-wide max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <img
            src={doctorSeated}
            alt="Dr Shoaib Aslam Kurerr"
            className="rounded-3xl shadow-xl object-cover"
          />

          <div className="space-y-6">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900">
              Surgical Excellence with Advanced Fellowship Distinction
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Dr. Shoaib Aslam Kurerr holds an additional Fellowship in Trauma & Orthopaedics,
              a distinction that differentiates him from many orthopaedic surgeons.
              He has extensive surgical and academic experience at Mayo Hospital Lahore
              and King Edward Medical University Lahore — institutions known for producing
              elite surgical specialists in Pakistan.
              His expertise includes arthroscopy, trauma reconstruction, sports injuries,
              and joint replacement surgery using minimally invasive techniques.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold text-sm shadow-lg hover:opacity-90 transition-all"
            >
              Book Clinical Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ───────── QUALIFICATIONS & MEMBERSHIPS ───────── */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container-wide max-w-6xl mx-auto px-6">

          {/* Academic */}
          <div className="mb-20 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-10">
              Academic Qualifications
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[AIMCBadge, FCPSBadge, MRCSBadge, ATLSBadge].map((Badge, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg transition-all">
                  <Badge />
                </div>
              ))}
            </div>
          </div>

          {/* Memberships */}
          <div className="text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-10">
              Professional Memberships
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[PASBadge, PASSBadge, POABadge].map((Badge, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg transition-all">
                  <Badge />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ───────── FELLOWSHIP HIGHLIGHT ───────── */}
      <section className="py-20">
        <div className="container-wide max-w-6xl mx-auto px-6 bg-primary rounded-3xl overflow-hidden text-white p-12">
          <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Advanced Fellowship Training
          </h3>

          <div className="flex flex-wrap gap-6 text-sm font-semibold">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent" /> Advanced Arthroscopy
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent" /> Sports Surgery
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent" /> Joint Replacement
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;