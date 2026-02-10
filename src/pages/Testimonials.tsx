import ScrollReveal from "@/components/ScrollReveal";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Ahmed Raza", procedure: "Knee Replacement", text: "After years of knee pain, Dr Shoaib performed a total knee replacement that changed my life. Within months, I was walking pain-free. His care and follow-up were exceptional." },
  { name: "Fatima Bibi", procedure: "ACL Reconstruction", text: "My daughter's ACL injury was treated with such expertise. The minimally invasive approach meant faster recovery and she was back to her routine in weeks." },
  { name: "Mohammad Khalid", procedure: "Shoulder Surgery", text: "Chronic shoulder pain had limited my daily activities for years. Dr Shoaib's surgical expertise and post-operative physiotherapy guidance gave me back my mobility." },
  { name: "Ayesha Siddiqui", procedure: "Sports Injury", text: "As an athlete, I feared my career was over after a severe ligament tear. Dr Shoaib not only repaired the damage but guided me through rehabilitation until I could compete again." },
  { name: "Zahida Akram", procedure: "Arthritis Care", text: "Living with arthritis pain was unbearable. Dr Shoaib's comprehensive treatment plan, including injections and physiotherapy, has significantly improved my quality of life." },
  { name: "Waqas Ahmed", procedure: "Arthroscopy", text: "The keyhole surgery performed by Dr Shoaib was remarkable. Minimal scarring, quick recovery, and I was back to work within two weeks. Outstanding medical care." },
];

const Testimonials = () => {
  return (
    <main>
      <section className="bg-primary py-20">
        <div className="container-wide px-4 md:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Patient Testimonials</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">Hear from patients whose lives have been transformed.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.08}>
              <div className="bg-card rounded-xl p-8 card-shadow h-full flex flex-col">
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
      </section>
    </main>
  );
};

export default Testimonials;
