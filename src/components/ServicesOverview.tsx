import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import serviceKnee from "@/assets/service-knee.jpg";
import serviceShoulder from "@/assets/service-shoulder.jpg";
import serviceArthroscopy from "@/assets/service-arthroscopy.jpg";
import serviceSports from "@/assets/service-sports.jpg";
import serviceAcl from "@/assets/service-acl.jpg";
import serviceArthritis from "@/assets/service-arthritis.jpg";

const services = [
  { image: serviceKnee, title: "Knee Replacement", desc: "Total and partial knee replacement surgery for arthritis and joint damage." },
  { image: serviceShoulder, title: "Shoulder Surgery", desc: "Advanced surgical solutions for rotator cuff tears and shoulder instability." },
  { image: serviceArthroscopy, title: "Arthroscopy", desc: "Minimally invasive keyhole procedures for faster recovery." },
  { image: serviceSports, title: "Sports Injury Treatment", desc: "Comprehensive care for athletic injuries and rehabilitation." },
  { image: serviceAcl, title: "ACL / Meniscus Repair", desc: "Ligament reconstruction and meniscus surgery for knee stability." },
  { image: serviceArthritis, title: "Arthritis Care", desc: "Pain management and treatment plans for joint arthritis." },
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
                className="group block bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
