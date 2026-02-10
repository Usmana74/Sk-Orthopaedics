import ScrollReveal from "./ScrollReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Raza",
    procedure: "Knee Replacement",
    text: "After years of knee pain, Dr Shoaib performed a total knee replacement that changed my life. Within months, I was walking pain-free. His care and follow-up were exceptional.",
  },
  {
    name: "Fatima Bibi",
    procedure: "ACL Reconstruction",
    text: "My daughter's ACL injury was treated with such expertise. The minimally invasive approach meant faster recovery and she was back to her routine in weeks. Highly recommended.",
  },
  {
    name: "Mohammad Khalid",
    procedure: "Shoulder Surgery",
    text: "Chronic shoulder pain had limited my daily activities for years. Dr Shoaib's surgical expertise and post-operative physiotherapy guidance gave me back my mobility.",
  },
];

const TestimonialsPreview = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Patient Testimonials</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              What Our Patients Say
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="bg-background rounded-xl p-8 card-shadow h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-accent">{t.procedure}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
