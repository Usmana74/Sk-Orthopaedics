import ScrollReveal from "@/components/ScrollReveal";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Fatima Kazmi", procedure: "Orthopaedic Treatment", text: "Excellent doctor in behaviour. Satisfied from treatment. Advance treatment facility in Bahawalpur.", initials: "FK" },
  { name: "Fahad Rao", procedure: "Consultation", text: "Dr. Behavior is soo good... I am 100% satisfied after my checkup.", initials: "FR" },
  { name: "Arsalan Maqsood", procedure: "Orthopaedic Care", text: "Dr. Behavior with patients is so good and polite... recommended for other patients.", initials: "AM" },
  { name: "Muhammad Raza", procedure: "Treatment", text: "Wonderful experience, such a nice doctor, totally satisfied from treatment and behavior.", initials: "MR" },
  { name: "Akif Afeef", procedure: "Orthopaedic Consultation", text: "Very professional and caring doctor. Highly recommended for anyone needing orthopaedic care in Bahawalpur.", initials: "AA" },
];

const Testimonials = () => {
  return (
    <main>
      <section className="bg-primary py-20">
        <div className="container-wide px-4 md:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Patient Testimonials</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-6">Hear from patients whose lives have been transformed.</p>
          <a
            href="https://www.google.com/search?q=Dr+Shoaib+Aslam+kurerr+orthopedic+surgeon+Reviews&oq=dr+shoa&gs_lcrp=EgZjaHJvbWUqCAgBEEUYJxg7MgYIABBFGDkyCAgBEEUYJxg7MgYIAhBFGDsyBggDEEUYOzIHCAQQABiABDIGCAUQRRg9MgYIBhBFGD0yBggHEEUYPdIBCDQ2NzBqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x393b91074ca1c0e9:0xf2ec05830f2ce1e2,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            ⭐ View all reviews on Google
          </a>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container-wide relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.08}>
              <div className="bg-card rounded-xl p-8 card-shadow h-full flex flex-col relative">
                <Quote className="w-8 h-8 text-primary/10 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-semibold text-primary">{t.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-accent">{t.procedure}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
