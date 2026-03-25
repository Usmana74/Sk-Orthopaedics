import ScrollReveal from "./ScrollReveal";
import doctorSuitFull from "@/assets/doctor-suit-full.jpg";

const reasons = [
  {
    number: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
        <path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4" />
        <circle cx="20" cy="10" r="2" />
      </svg>
    ),
    title: "Clinical Excellence",
    desc: "Extensive experience at Mayo Hospital Lahore — Pakistan's largest tertiary care centre — specialising in complex orthopaedic trauma and joint reconstruction.",
  },
  {
    number: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
        <path d="M9.5 8.5l1.5 1.5 3-3" />
      </svg>
    ),
    title: "National & International Certifications",
    desc: "FCPS, ATLS (USA), MRCS-I (Edinburgh, UK), POA fellowship in Sports Surgery and Arthroscopy, and Irish Medical Council member — credentials recognised across Pakistan and internationally.",
  },
  {
    number: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
    title: "Patient-Focused Care",
    desc: "Personalised treatment plans with dedicated pre- and post-operative support, ensuring patients feel informed and confident at every stage.",
  },
  {
    number: "04",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M14.5 2.5c0 1.5-1.358 3-2.5 4C10.857 7.5 9 9 9 11.5c0 2.485 2.015 4.5 4.5 4.5S18 13.985 18 11.5c0-2.5-1.857-4-3-5C13.858 5.5 14.5 4 14.5 2.5z" />
        <path d="m9.5 16.5-4.458 4.458a.75.75 0 0 1-1.061-1.061L8.44 15.4" />
        <path d="M16 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: "Minimally Invasive Techniques",
    desc: "Advanced arthroscopic and keyhole surgery methods mean less tissue damage, significantly reduced pain, and faster return to daily life.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-card overflow-hidden">
      <div className="container-wide">

        {/* ── Heading ── */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-2">Why Choose Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Why Patients Trust Dr. Shoaib
            </h2>
          </div>
        </ScrollReveal>

        {/* ── Image + Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Doctor image with floating credential badge */}
          <ScrollReveal direction="left">
            <div className="relative max-w-sm mx-auto">
              <img
                src={doctorSuitFull}
                alt="Dr Shoaib Aslam Kurerr - Professional Portrait"
                className="rounded-[2.5rem] w-full object-cover aspect-[3/4]"
                style={{ boxShadow: "0 25px 60px -10px rgba(29,97,165,0.25)" }}
              />
              {/* Floating credential card */}
              <div
                className="absolute -bottom-5 -right-4 md:-right-8 rounded-2xl px-5 py-4 shadow-xl border border-white/20"
                style={{ backgroundColor: "rgba(29, 97, 165)" }}
              >
                <p className="text-white font-bold text-sm">FCPS · MRCS(UK) · ATLS(USA)</p>
                <p className="text-white/60 text-[10px] uppercase tracking-widest mt-0.5">POA fellowship in Sports Surgery</p>
              </div>
              {/* Floating patients badge */}
              <div className="absolute -top-4 -left-4 md:-left-6 bg-white rounded-2xl px-4 py-3 shadow-xl border border-slate-100">
                <p className="text-primary font-bold text-lg leading-none">5,000+</p>
                <p className="text-slate-400 text-[10px] uppercase tracking-widest mt-0.5">Patients</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Reason cards — redesigned */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => (
              <ScrollReveal key={reason.title} delay={i * 0.08}>
                <div className="group relative p-6 bg-background rounded-2xl border border-slate-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 h-full">
                  {/* Subtle number watermark */}
                  <span className="absolute top-4 right-4 font-heading text-4xl font-bold text-slate-100 group-hover:text-primary/10 transition-colors select-none">
                    {reason.number}
                  </span>
                  {/* Icon pill */}
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/8 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {reason.icon}
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-2 leading-snug">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
