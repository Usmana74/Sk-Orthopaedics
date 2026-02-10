import ScrollReveal from "@/components/ScrollReveal";
import { Bone, Stethoscope, Microscope, Activity, Shield, HeartPulse } from "lucide-react";

const services = [
  { icon: Bone, title: "Knee Replacement", desc: "Total and partial knee replacement for severe arthritis or joint damage. Restores mobility and eliminates chronic knee pain using modern implant technology.", bullets: ["Total Knee Replacement", "Partial Knee Replacement", "Revision Knee Surgery"] },
  { icon: Stethoscope, title: "Shoulder Surgery", desc: "Surgical treatment for rotator cuff tears, dislocations, frozen shoulder, and other shoulder conditions.", bullets: ["Rotator Cuff Repair", "Shoulder Stabilization", "Frozen Shoulder Release"] },
  { icon: Microscope, title: "Arthroscopy", desc: "Minimally invasive keyhole surgery for diagnosing and treating joint problems with smaller incisions and faster recovery.", bullets: ["Knee Arthroscopy", "Shoulder Arthroscopy", "Diagnostic Arthroscopy"] },
  { icon: Activity, title: "Sports Injury Treatment", desc: "Comprehensive care for athletes and active individuals. From acute injury management to surgical reconstruction.", bullets: ["Ligament Injuries", "Muscle & Tendon Tears", "Sports Rehabilitation"] },
  { icon: Shield, title: "ACL / Meniscus Repair", desc: "Advanced ligament reconstruction and meniscus surgery to restore knee stability and function.", bullets: ["ACL Reconstruction", "Meniscus Repair", "Multi-ligament Reconstruction"] },
  { icon: HeartPulse, title: "Arthritis Care", desc: "Non-surgical and surgical management of arthritis including medication, injections, and joint replacement when needed.", bullets: ["Pain Management", "Joint Injections", "Physiotherapy Plans"] },
];

const Services = () => {
  return (
    <main>
      <section className="bg-primary py-20">
        <div className="container-wide px-4 md:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Services</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">Comprehensive orthopaedic services tailored to your needs.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.08}>
              <div className="bg-card rounded-xl p-8 card-shadow h-full">
                <div className="w-14 h-14 rounded-lg cta-gradient flex items-center justify-center mb-5">
                  <s.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">{s.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
