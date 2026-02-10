import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import { Stethoscope, Bone, Microscope, Activity, Shield, HeartPulse } from "lucide-react";

const services = [
  { icon: Bone, title: "Knee Replacement", desc: "Total and partial knee replacement surgery for arthritis and joint damage." },
  { icon: Stethoscope, title: "Shoulder Surgery", desc: "Advanced surgical solutions for rotator cuff tears and shoulder instability." },
  { icon: Microscope, title: "Arthroscopy", desc: "Minimally invasive keyhole procedures for faster recovery." },
  { icon: Activity, title: "Sports Injury Treatment", desc: "Comprehensive care for athletic injuries and rehabilitation." },
  { icon: Shield, title: "ACL / Meniscus Repair", desc: "Ligament reconstruction and meniscus surgery for knee stability." },
  { icon: HeartPulse, title: "Arthritis Care", desc: "Pain management and treatment plans for joint arthritis." },
];

const ServicesOverview = () => {
  return (
    <section className="section-padding section-gradient">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Our Services</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Specialized Orthopaedic Services
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <Link
                to="/services"
                className="group block bg-card rounded-xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-lg cta-gradient flex items-center justify-center mb-5">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
