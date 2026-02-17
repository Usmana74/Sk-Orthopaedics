import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

const serviceGroups = [
  {
    category: "Knee Arthroscopy & Ligament Reconstruction",
    slug: "knee-arthroscopy",
    services: [
      "Arthroscopic ACL Reconstruction",
      "Advanced ACL Reconstruction",
      "Arthroscopic PCL Reconstruction",
      "Meniscus Repair",
      "MCL & LCL Reconstruction",
      "MPFL Reconstruction",
    ],
  },
  {
    category: "Knee Preservation & Replacement",
    slug: "knee-replacement",
    services: [
      "High Tibial Osteotomy (HTO)",
      "Total Knee Replacement",
      "Partial Knee Replacement",
    ],
  },
  {
    category: "Shoulder Arthroscopy & Reconstruction",
    slug: "shoulder-arthroscopy",
    services: [
      "Arthroscopic Shoulder Capsular Release",
      "Arthroscopic Bankart Repair",
      "Arthroscopic Rotator Cuff Repair",
      "Shoulder Replacement",
    ],
  },
  {
    category: "Trauma & Emergency Care",
    slug: "trauma-management",
    services: ["Trauma Management"],
  },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceGroups.map((group, i) => (
            <ScrollReveal key={group.category} delay={i * 0.1}>
              <Link
                to={`/services#${group.slug}`}
                className="block bg-card rounded-xl p-8 card-shadow h-full hover:card-shadow-hover transition-all group"
              >
                <h3 className="font-heading text-xl font-semibold text-foreground mb-5 pb-3 border-b border-border group-hover:text-primary transition-colors">
                  {group.category}
                </h3>
                <ul className="space-y-3">
                  {group.services.map((service) => (
                    <li key={service} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
                <p className="text-primary text-sm font-medium mt-5 group-hover:underline">View Details →</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
