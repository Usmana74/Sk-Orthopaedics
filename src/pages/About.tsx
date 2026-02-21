import ScrollReveal from "@/components/ScrollReveal";
import doctorSeated from "@/assets/doctor-seated.jpg";
import doctorSurgery from "@/assets/doctor-surgery-blue.jpg";
import hospitalImage from "@/assets/hospital-interior.webp";

// ─── Credential Badge SVGs ────────────────────────────────────────────────────

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

const stats = [
  { value: "2000+", label: "Patients Treated" },
  { value: "5+", label: "Years Specialized Practice" },
  { value: "100+", label: "Complex Surgeries" },
];

const About = () => {
  const whatsappUrl = "https://wa.me/923002278796?text=Hello%20Dr.%20Shoaib%2C%20I%20would%20like%20to%20book%20a%20consultation.";
  const googleReviewsUrl = "https://www.google.com/search?q=Dr+Shoaib+Aslam+Kurerr+Bahawalpur";

  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-primary py-20">
        <div className="container-wide px-4 md:px-8 text-center">
          <p className="text-primary-foreground/60 text-xs uppercase tracking-widest mb-3 font-medium">Our Surgeon</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">About Us</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto text-sm leading-relaxed">
            Meet Dr Shoaib Aslam Kurerr — internationally certified orthopaedic surgeon and Fellowship-trained sports surgery specialist.
          </p>
        </div>
      </section>

      {/* ── Bio Section ──────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-wide max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Portrait */}
            <ScrollReveal direction="left">
              <div className="relative">
                <img
                  src={doctorSeated}
                  alt="Dr Shoaib Aslam Kurerr"
                  className="rounded-2xl w-full max-w-md mx-auto object-cover aspect-[4/5]"
                  style={{ boxShadow: "var(--shadow-hero)" }}
                />
                {/* Floating credential pill */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap shadow-xl">
                  FCPS · ATLS · MRCS-I (Edinburgh)
                </div>
              </div>
            </ScrollReveal>

            {/* Bio */}
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
                  With experience at Mayo Hospital Lahore and membership in leading national and international surgical societies, Dr Shoaib brings a patient-first philosophy to every consultation — combining evidence-based treatment, transparent communication, and the most advanced surgical techniques available.
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
                    href={googleReviewsUrl}
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
              <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">Certifications & Memberships</p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Internationally Verified Credentials
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {badges.map((badge, i) => (
              <ScrollReveal key={badge.label} delay={i * 0.06}>
                <div className="bg-background rounded-2xl p-5 text-center card-shadow border border-border/50 hover:card-shadow-hover transition-all">
                  {badge.component}
                  <p className="font-heading font-bold text-foreground text-sm leading-tight">{badge.label}</p>
                  <p className="text-muted-foreground text-xs mt-1 leading-tight">{badge.sub}</p>
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
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <p className="text-primary-foreground/60 text-xs uppercase tracking-widest mb-3 font-medium">Pinnacle of Training</p>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4 leading-snug">
                    POA Fellowship in Sports Surgery & Arthroscopy
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
                <div className="relative min-h-[280px] md:min-h-0">
                  <img
                    src={doctorSurgery}
                    alt="Dr Shoaib Aslam Kurerr in surgery"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20 md:bg-gradient-to-r md:from-primary/30 md:to-transparent" />
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
