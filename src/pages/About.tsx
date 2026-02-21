import ScrollReveal from "@/components/ScrollReveal";
import doctorSeated from "@/assets/doctor-seated.jpg";
import doctorSurgery from "@/assets/doctor-surgery-blue.jpg";
import hospitalImage from "@/assets/hospital-interior.webp";

// ─── Institutional Badge SVGs ─────────────────────────────────────────────────

/* AIMC — navy shield with gold caduceus */
const AIMCBadge = () => (
  <svg viewBox="0 0 100 120" className="w-full h-auto" aria-label="Allama Iqbal Medical College">
    <path d="M50 4 L94 20 L94 64 Q94 96 50 116 Q6 96 6 64 L6 20 Z" fill="#002060" stroke="#00144a" strokeWidth="1.5"/>
    <path d="M50 12 L86 26 L86 64 Q86 92 50 108 Q14 92 14 64 L14 26 Z" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.45"/>
    <line x1="50" y1="28" x2="50" y2="70" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M50 30 Q40 26 34 30 Q40 34 50 32Z" fill="#FFD700" opacity="0.9"/>
    <path d="M50 30 Q60 26 66 30 Q60 34 50 32Z" fill="#FFD700" opacity="0.9"/>
    <path d="M44 40 Q50 35 56 40 Q62 46 56 52 Q50 56 44 52 Q38 46 44 40Z" fill="none" stroke="#FFD700" strokeWidth="1.5"/>
    <path d="M44 52 Q50 47 56 52 Q62 58 56 64 Q50 68 44 64 Q38 58 44 52Z" fill="none" stroke="#FFD700" strokeWidth="1.5"/>
    <text x="50" y="86" textAnchor="middle" fontSize="11" fontWeight="800" fill="#FFD700" fontFamily="Georgia, serif" letterSpacing="2">AIMC</text>
    <text x="50" y="97" textAnchor="middle" fontSize="6.5" fill="#c8d8ff" fontFamily="Georgia, serif">Allama Iqbal</text>
    <text x="50" y="107" textAnchor="middle" fontSize="6.5" fill="#c8d8ff" fontFamily="Georgia, serif">Medical College</text>
  </svg>
);

/* FCPS — emerald green circle, gold star, CPSP */
const FCPSBadge = () => (
  <svg viewBox="0 0 100 120" className="w-full h-auto" aria-label="FCPS – College of Physicians and Surgeons Pakistan">
    <circle cx="50" cy="54" r="46" fill="#005C2E" stroke="#003d1f" strokeWidth="2"/>
    <circle cx="50" cy="54" r="40" fill="none" stroke="#FFD700" strokeWidth="1.2" strokeDasharray="4,3"/>
    <polygon points="50,20 54,35 69,35 57,44 61,59 50,50 39,59 43,44 31,35 46,35" fill="#FFD700"/>
    <text x="50" y="76" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#ffffff" fontFamily="Georgia, serif" letterSpacing="0.3">COLLEGE OF PHYSICIANS</text>
    <text x="50" y="86" textAnchor="middle" fontSize="6" fill="#FFD700" fontFamily="Georgia, serif">&amp; SURGEONS PAKISTAN</text>
    <text x="50" y="100" textAnchor="middle" fontSize="11" fontWeight="900" fill="#FFD700" fontFamily="Georgia, serif" letterSpacing="1.5">FCPS</text>
    <text x="50" y="112" textAnchor="middle" fontSize="6" fill="#aaffcc" fontFamily="Georgia, serif">Trauma &amp; Orthopaedics</text>
  </svg>
);

/* ATLS — red cross, American College of Surgeons */
const ATLSBadge = () => (
  <svg viewBox="0 0 100 120" className="w-full h-auto" aria-label="ATLS – Advanced Trauma Life Support USA">
    <defs>
      <linearGradient id="atlsGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#e00000"/>
        <stop offset="100%" stopColor="#9B0000"/>
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="92" height="112" rx="10" fill="url(#atlsGrad)" stroke="#8B0000" strokeWidth="2"/>
    <rect x="42" y="12" width="16" height="64" rx="4" fill="#ffffff"/>
    <rect x="14" y="34" width="72" height="16" rx="4" fill="#ffffff"/>
    <text x="50" y="90" textAnchor="middle" fontSize="13" fontWeight="900" fill="#ffffff" fontFamily="Arial Black, sans-serif" letterSpacing="1.5">ATLS</text>
    <text x="50" y="102" textAnchor="middle" fontSize="6.5" fontWeight="600" fill="#ffcccc" fontFamily="Arial, sans-serif">ADVANCED TRAUMA</text>
    <text x="50" y="113" textAnchor="middle" fontSize="6.5" fontWeight="600" fill="#ffcccc" fontFamily="Arial, sans-serif">LIFE SUPPORT · USA</text>
  </svg>
);

/* MRCS-I — royal blue, Edinburgh castle, St Andrew saltire */
const MRCSBadge = () => (
  <svg viewBox="0 0 100 120" className="w-full h-auto" aria-label="MRCS-I – Royal College of Surgeons Edinburgh">
    <defs>
      <linearGradient id="mrcsGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#003087"/>
        <stop offset="100%" stopColor="#001a5c"/>
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="92" height="112" rx="10" fill="url(#mrcsGrad)" stroke="#001244" strokeWidth="1.5"/>
    <line x1="8" y1="8" x2="92" y2="50" stroke="#C8102E" strokeWidth="4" opacity="0.5"/>
    <line x1="92" y1="8" x2="8" y2="50" stroke="#C8102E" strokeWidth="4" opacity="0.5"/>
    <rect x="34" y="34" width="32" height="20" fill="#ffffff" opacity="0.1"/>
    <rect x="40" y="26" width="7" height="12" fill="#ffffff" opacity="0.14"/>
    <rect x="53" y="26" width="7" height="12" fill="#ffffff" opacity="0.14"/>
    <rect x="46" y="20" width="8" height="18" fill="#ffffff" opacity="0.14"/>
    <rect x="50" y="14" width="2" height="7" fill="#FFD700" opacity="0.7"/>
    <text x="50" y="70" textAnchor="middle" fontSize="12" fontWeight="900" fill="#FFD700" fontFamily="Georgia, serif" letterSpacing="1">MRCS-I</text>
    <text x="50" y="83" textAnchor="middle" fontSize="6.5" fontWeight="600" fill="#ffffff" fontFamily="Georgia, serif">Royal College of Surgeons</text>
    <text x="50" y="95" textAnchor="middle" fontSize="6.5" fill="#aac4ff" fontFamily="Georgia, serif">Edinburgh · United Kingdom</text>
    <text x="50" y="110" textAnchor="middle" fontSize="6" fill="#FFD700" fontFamily="Georgia, serif">Est. 1505</text>
  </svg>
);

/* Irish Medical Council — tricolour, harp */
const IrishBadge = () => (
  <svg viewBox="0 0 100 120" className="w-full h-auto" aria-label="Irish Medical Council – Registered Member">
    <clipPath id="irishRound">
      <rect x="4" y="4" width="92" height="112" rx="10"/>
    </clipPath>
    <rect x="4" y="4" width="92" height="112" rx="10" fill="#169B62"/>
    <rect x="36" y="4" width="30" height="112" fill="#ffffff" clipPath="url(#irishRound)"/>
    <rect x="66" y="4" width="30" height="112" fill="#FF883E" clipPath="url(#irishRound)"/>
    <rect x="4" y="4" width="92" height="112" rx="10" fill="none" stroke="#cccccc" strokeWidth="1.2"/>
    <path d="M50 16 Q36 28 36 56 L36 72 L64 72 L64 56 Q64 28 50 16Z" fill="none" stroke="#003087" strokeWidth="2" opacity="0.9"/>
    <line x1="50" y1="16" x2="50" y2="72" stroke="#003087" strokeWidth="2.5" opacity="0.8"/>
    <line x1="40" y1="26" x2="40" y2="70" stroke="#003087" strokeWidth="1.5" opacity="0.7"/>
    <line x1="44" y1="21" x2="44" y2="71" stroke="#003087" strokeWidth="1.5" opacity="0.7"/>
    <line x1="56" y1="21" x2="56" y2="71" stroke="#003087" strokeWidth="1.5" opacity="0.7"/>
    <line x1="60" y1="26" x2="60" y2="70" stroke="#003087" strokeWidth="1.5" opacity="0.7"/>
    <text x="50" y="88" textAnchor="middle" fontSize="7" fontWeight="800" fill="#003087" fontFamily="Georgia, serif">IRISH MEDICAL</text>
    <text x="50" y="99" textAnchor="middle" fontSize="7" fontWeight="800" fill="#003087" fontFamily="Georgia, serif">COUNCIL</text>
    <text x="50" y="112" textAnchor="middle" fontSize="6" fill="#555" fontFamily="Georgia, serif">Registered Member · Ireland</text>
  </svg>
);

/* Mayo Hospital Lahore — maroon, Pakistan crescent-star */
const MayoBadge = () => (
  <svg viewBox="0 0 100 120" className="w-full h-auto" aria-label="Mayo Hospital Lahore">
    <defs>
      <linearGradient id="mayoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8B0000"/>
        <stop offset="100%" stopColor="#5a0000"/>
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="92" height="112" rx="10" fill="url(#mayoGrad)" stroke="#3d0000" strokeWidth="1.5"/>
    <path d="M50 14 A22 22 0 1 1 50 58 A14 14 0 1 0 50 14Z" fill="#ffffff" opacity="0.9"/>
    <polygon points="64,26 67,35 76,35 69,41 72,50 64,44 56,50 59,41 52,35 61,35" fill="#ffffff" opacity="0.9"/>
    <text x="50" y="74" textAnchor="middle" fontSize="11" fontWeight="900" fill="#FFD700" fontFamily="Georgia, serif" letterSpacing="1.5">MAYO</text>
    <text x="50" y="87" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ffffff" fontFamily="Georgia, serif" letterSpacing="0.5">HOSPITAL</text>
    <text x="50" y="99" textAnchor="middle" fontSize="6.5" fill="#ffaaaa" fontFamily="Georgia, serif">Ex-Orthopaedic Surgeon</text>
    <text x="50" y="111" textAnchor="middle" fontSize="7" fontWeight="600" fill="#FFD700" fontFamily="Georgia, serif">Lahore, Pakistan</text>
  </svg>
);

/* PAO — teal, stylised knee joint with cross-ligaments */
const POABadge = () => (
  <svg viewBox="0 0 100 120" className="w-full h-auto" aria-label="Pakistan Arthroplasty Society">
    <defs>
      <linearGradient id="poaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#006B6B"/>
        <stop offset="100%" stopColor="#004545"/>
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="92" height="112" rx="10" fill="url(#poaGrad)" stroke="#003030" strokeWidth="1.5"/>
    <ellipse cx="50" cy="30" rx="20" ry="16" fill="#ffffff" opacity="0.13"/>
    <ellipse cx="50" cy="30" rx="20" ry="16" fill="none" stroke="#00DDDD" strokeWidth="1.5"/>
    <rect x="36" y="44" width="28" height="4" rx="2" fill="#00DDDD" opacity="0.85"/>
    <rect x="34" y="48" width="32" height="18" rx="4" fill="#ffffff" opacity="0.1"/>
    <rect x="34" y="48" width="32" height="18" rx="4" fill="none" stroke="#00DDDD" strokeWidth="1.5"/>
    <line x1="44" y1="38" x2="56" y2="48" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" opacity="0.9"/>
    <line x1="56" y1="38" x2="44" y2="48" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
    <text x="50" y="82" textAnchor="middle" fontSize="9" fontWeight="800" fill="#FFD700" fontFamily="Georgia, serif" letterSpacing="0.5">PAO</text>
    <text x="50" y="94" textAnchor="middle" fontSize="6" fill="#aaffff" fontFamily="Georgia, serif">Pakistan Arthroplasty</text>
    <text x="50" y="104" textAnchor="middle" fontSize="6" fill="#aaffff" fontFamily="Georgia, serif">Society</text>
    <text x="50" y="115" textAnchor="middle" fontSize="7" fontWeight="600" fill="#ffffff" fontFamily="Georgia, serif">Member</text>
  </svg>
);

/* PASSS — navy, arthroscope instrument graphic */
const PASSBadge = () => (
  <svg viewBox="0 0 100 120" className="w-full h-auto" aria-label="Pakistan Arthroscopy and Sports Surgery Society">
    <defs>
      <linearGradient id="passGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#001f5b"/>
        <stop offset="100%" stopColor="#000d33"/>
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="92" height="112" rx="10" fill="url(#passGrad)" stroke="#00102a" strokeWidth="1.5"/>
    <rect x="26" y="24" width="46" height="10" rx="5" fill="#00BFFF" opacity="0.85"/>
    <path d="M68 29 L86 18 L88 22 L72 33Z" fill="#00BFFF" opacity="0.5"/>
    <circle cx="72" cy="56" r="11" fill="none" stroke="#00BFFF" strokeWidth="2"/>
    <circle cx="72" cy="56" r="4" fill="#00BFFF" opacity="0.5"/>
    <path d="M36 34 Q28 46 38 58 Q48 68 42 74" stroke="#00BFFF" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <line x1="16" y1="44" x2="24" y2="36" stroke="#FFD700" strokeWidth="1.5" strokeDasharray="3,2" opacity="0.7"/>
    <line x1="18" y1="54" x2="26" y2="46" stroke="#FFD700" strokeWidth="1.5" strokeDasharray="3,2" opacity="0.7"/>
    <text x="50" y="90" textAnchor="middle" fontSize="9" fontWeight="900" fill="#FFD700" fontFamily="Georgia, serif" letterSpacing="1">PASSS</text>
    <text x="50" y="102" textAnchor="middle" fontSize="5.5" fill="#aaddff" fontFamily="Georgia, serif">Pakistan Arthroscopy &amp;</text>
    <text x="50" y="112" textAnchor="middle" fontSize="5.5" fill="#aaddff" fontFamily="Georgia, serif">Sports Surgery Society</text>
  </svg>
);

/* POA Fellowship — prestige dark badge, laurel wreath, gold star */
const POAFellowshipBadge = () => (
  <svg viewBox="0 0 100 120" className="w-full h-auto" aria-label="POA Fellowship – Sports Surgery and Arthroscopy">
    <defs>
      <linearGradient id="fellowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0d0d1f"/>
        <stop offset="100%" stopColor="#1a1a3e"/>
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="92" height="112" rx="10" fill="url(#fellowGrad)" stroke="#3d3d6e" strokeWidth="1.5"/>
    <circle cx="50" cy="44" r="30" fill="none" stroke="#FFD700" strokeWidth="1.2" opacity="0.4"/>
    {/* Left laurel */}
    <path d="M22 44 Q17 34 22 24 Q29 16 36 20 Q28 28 26 36 Q24 42 22 44Z" fill="#FFD700" opacity="0.65"/>
    <path d="M22 44 Q17 54 22 64 Q29 72 36 68 Q28 60 26 52 Q24 46 22 44Z" fill="#FFD700" opacity="0.65"/>
    {/* Right laurel */}
    <path d="M78 44 Q83 34 78 24 Q71 16 64 20 Q72 28 74 36 Q76 42 78 44Z" fill="#FFD700" opacity="0.65"/>
    <path d="M78 44 Q83 54 78 64 Q71 72 64 68 Q72 60 74 52 Q76 46 78 44Z" fill="#FFD700" opacity="0.65"/>
    {/* Star */}
    <polygon points="50,18 53.5,30 66,30 56,38 59.5,50 50,42 40.5,50 44,38 34,30 46.5,30" fill="#FFD700"/>
    <text x="50" y="72" textAnchor="middle" fontSize="7.5" fontWeight="800" fill="#FFD700" fontFamily="Georgia, serif" letterSpacing="0.5">POA FELLOWSHIP</text>
    <text x="50" y="84" textAnchor="middle" fontSize="6" fill="#ccccff" fontFamily="Georgia, serif">Sports Surgery</text>
    <text x="50" y="94" textAnchor="middle" fontSize="6" fill="#ccccff" fontFamily="Georgia, serif">&amp; Arthroscopy</text>
    <text x="50" y="110" textAnchor="middle" fontSize="5.8" fontWeight="600" fill="#FFD700" fontFamily="Georgia, serif">Pakistan Orthopaedic Assoc.</text>
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const badges = [
  { component: <AIMCBadge />,          label: "MBBS",                  sub: "Allama Iqbal Medical College" },
  { component: <FCPSBadge />,          label: "FCPS",                  sub: "Trauma & Orthopaedics · CPSP" },
  { component: <ATLSBadge />,          label: "ATLS",                  sub: "Advanced Trauma Life Support · USA" },
  { component: <MRCSBadge />,          label: "MRCS-I",                sub: "Royal College of Surgeons, Edinburgh" },
  { component: <IrishBadge />,         label: "Irish Medical Council", sub: "Registered Member · Ireland" },
  { component: <MayoBadge />,          label: "Mayo Hospital",         sub: "Ex-Orthopaedic Surgeon · Lahore" },
  { component: <POABadge />,           label: "PAO",                   sub: "Pakistan Arthroplasty Society" },
  { component: <PASSBadge />,          label: "PASSS",                 sub: "Pakistan Arthroscopy & Sports Surgery" },
  { component: <POAFellowshipBadge />, label: "POA Fellowship",        sub: "Sports Surgery & Arthroscopy" },
];

const stats = [
  { value: "5000+", label: "Patients Treated" },
  { value: "8+",    label: "Years Specialized Practice" },
  { value: "400+",  label: "Complex Surgeries" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

const About = () => {
  const whatsappUrl = "https://wa.me/923002278796?text=Hello%20Dr.%20Shoaib%2C%20I%20would%20like%20to%20book%20a%20consultation.";
  const googleUrl   = "https://www.google.com/search?q=Dr+Shoaib+Aslam+Kurerr+Bahawalpur";

  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-primary py-20">
        <div className="container-wide px-4 md:px-8 text-center">
          <p className="text-primary-foreground/60 text-xs uppercase tracking-widest mb-3 font-medium">Our Surgeon</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">About Us</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto text-sm leading-relaxed">
            Meet Dr Shoaib Aslam Kurerr — internationally certified orthopaedic surgeon and Fellowship-trained sports surgery specialist serving Bahawalpur and Southern Punjab.
          </p>
        </div>
      </section>

      {/* ── Bio ──────────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-wide max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Portrait — clean, no text on image */}
            <ScrollReveal direction="left">
              <img
                src={doctorSeated}
                alt="Dr Shoaib Aslam Kurerr"
                className="rounded-2xl w-full max-w-md mx-auto object-cover aspect-[4/5]"
                style={{ boxShadow: "var(--shadow-hero)" }}
              />
            </ScrollReveal>

            {/* Bio text + stats + CTAs */}
            <ScrollReveal direction="right">
              <div>
                <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">Orthopaedic Surgeon · Bahawalpur</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
                  Dr Shoaib Aslam Kurerr
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Dr Shoaib Aslam Kurerr is a highly specialised Orthopaedic Surgeon with an advanced Fellowship in Sports Surgery and Arthroscopy, focusing on minimally invasive 'keyhole' procedures for the knee and shoulder. His training spans Pakistan's premier institutions, the USA, and the United Kingdom — bringing international surgical standards to patients across Southern Punjab.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  With experience at Mayo Hospital Lahore and active membership in leading national and international surgical societies, Dr Shoaib brings a patient-first philosophy to every consultation — combining evidence-based treatment, transparent communication, and the most advanced surgical techniques available.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {stats.map((s) => (
                    <div key={s.label} className="text-center bg-secondary rounded-xl py-4 px-2">
                      <p className="font-heading text-2xl font-bold text-primary">{s.value}</p>
                      <p className="text-muted-foreground text-xs mt-1 leading-tight">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 cta-gradient text-white px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-all"
                  >
                    Book Consultation
                  </a>
                  <a
                    href={googleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-border bg-card text-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-secondary transition-all"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    View on Google
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Credential Badge Wall ─────────────────────────────────────────── */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-wide max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">Certifications &amp; Memberships</p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Internationally Verified Credentials
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-5">
            {badges.map((badge, i) => (
              <ScrollReveal key={badge.label} delay={i * 0.05}>
                <div className="bg-background rounded-2xl p-4 text-center card-shadow border border-border/50 hover:card-shadow-hover transition-all flex flex-col items-center gap-2">
                  <div className="w-16 h-auto">
                    {badge.component}
                  </div>
                  <p className="font-heading font-bold text-foreground text-xs leading-tight">{badge.label}</p>
                  <p className="text-muted-foreground text-xs leading-tight">{badge.sub}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fellowship Highlight ──────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-wide max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="bg-primary rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">

                {/* Text side */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <p className="text-primary-foreground/60 text-xs uppercase tracking-widest mb-3 font-medium">Pinnacle of Training</p>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4 leading-snug">
                    POA Fellowship in Sports Surgery &amp; Arthroscopy
                  </h3>
                  <p className="text-primary-foreground/75 text-sm leading-relaxed mb-6">
                    Dr Shoaib Aslam Kurerr holds a prestigious Pakistan Orthopaedic Association Fellowship in Sports Surgery and Arthroscopy — the highest subspecialty qualification available in the field. This Fellowship certifies advanced competency in complex arthroscopic knee and shoulder procedures, placing him among an elite group of surgeons in Pakistan.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-primary font-semibold text-sm px-6 py-3 rounded-lg hover:bg-white/90 transition-colors w-fit"
                  >
                    Book a Specialist Consultation
                  </a>
                </div>

                {/* Image — full height, no crop, no overlay */}
                <div className="flex">
                  <img
                    src={doctorSurgery}
                    alt="Dr Shoaib Aslam Kurerr in surgery"
                    className="w-full object-cover object-center block"
                  />
                </div>

              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Hospital Environment ──────────────────────────────────────────── */}
      <section className="section-padding bg-card border-t border-border">
        <div className="container-wide max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="rounded-2xl overflow-hidden card-shadow">
                <img
                  src={hospitalImage}
                  alt="Midwest Hospital Bahawalpur — Operating Theatre"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div>
                <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">Midwest Hospital · Bahawalpur</p>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 leading-snug">
                  State-of-the-Art Surgical Facilities
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  Dr Shoaib operates at Midwest Hospital, Bahawalpur — equipped with modern arthroscopic towers, advanced imaging, and internationally standardised operating theatre protocols. Every procedure is performed under stringent sterilisation and safety standards, ensuring patients from across Southern Punjab receive care that matches major metropolitan centres.
                </p>
                <div className="space-y-2.5">
                  {[
                    "Advanced arthroscopic surgical equipment",
                    "Intraoperative fluoroscopy and C-arm imaging",
                    "International sterilisation and infection control standards",
                    "Dedicated orthopaedic physiotherapy rehabilitation",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2.5">
                      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 shrink-0 mt-0.5">
                        <circle cx="10" cy="10" r="9" stroke="hsl(var(--primary))" strokeWidth="1.5"/>
                        <path d="M6.5 10.5l2.5 2.5 4.5-5" stroke="hsl(var(--primary))" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-muted-foreground text-sm">{point}</span>
                    </div>
                  ))}
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
