import ScrollReveal from "./ScrollReveal";
import doctorSuitFull from "@/assets/doctor-suit-full.jpg";

const reasons = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-primary">
        {/* Stethoscope */}
        <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
        <path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4" />
        <circle cx="20" cy="10" r="2" />
      </svg>
    ),
    title: "Extensive Experience",
    desc: "Years of hands-on orthopaedic practice across Pakistan and internationally.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-primary">
        {/* Certificate / ribbon */}
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
        <path d="M9.5 8.5l1.5 1.5 3-3" />
      </svg>
    ),
    title: "International Certifications",
    desc: "FCPS, ATLS (USA), MRCS-I (UK Edinburgh) and Irish Medical Council member.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-primary">
        {/* Shield with cross */}
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
    title: "Patient-Focused Care",
    desc: "Personalized treatment plans with dedicated pre and post-operative support.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-primary">
        {/* Scalpel / surgical precision */}
        <path d="M14.5 2.5c0 1.5-1.358 3-2.5 4C10.857 7.5 9 9 9 11.5c0 2.485 2.015 4.5 4.5 4.5S18 13.985 18 11.5c0-2.5-1.857-4-3-5C13.858 5.5 14.5 4 14.5 2.5z" />
        <path d="m9.5 16.5-4.458 4.458a.75.75 0 0 1-1.061-1.061L8.44 15.4" />
        <path d="M16 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: "Modern Treatment",
    desc: "Minimally invasive techniques for faster recovery and less pain.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Why Choose Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Why Patients Trust Dr Shoaib
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <img
              src={doctorSuitFull}
              alt="Dr Shoaib Aslam Kurerr - Professional Portrait"
              className="rounded-2xl w-full max-w-sm mx-auto object-cover aspect-[3/4]"
              style={{ boxShadow: "var(--shadow-hero)" }}
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <ScrollReveal key={reason.title} delay={i * 0.1}>
                <div className="p-6 bg-background rounded-xl card-shadow">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    {reason.icon}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
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
