import ScrollReveal from "./ScrollReveal";
import { Award, GraduationCap, Heart, Zap } from "lucide-react";

const reasons = [
  { icon: Award, title: "Extensive Experience", desc: "Years of hands-on orthopaedic practice across Pakistan and internationally." },
  { icon: GraduationCap, title: "International Certifications", desc: "FCPS, ATLS (USA), MRCS-I (UK Edinburgh) and Irish Medical Council member." },
  { icon: Heart, title: "Patient-Focused Care", desc: "Personalized treatment plans with dedicated pre and post-operative support." },
  { icon: Zap, title: "Modern Treatment", desc: "Minimally invasive techniques for faster recovery and less pain." },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.title} delay={i * 0.1}>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <reason.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
