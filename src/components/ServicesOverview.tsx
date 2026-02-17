import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

const serviceGroups = [
  {
    category: "Knee Arthroscopy & Ligament Reconstruction",
    services: [
      { name: "Arthroscopic ACL Reconstruction", slug: "arthroscopic-acl-reconstruction" },
      { name: "Advanced ACL Reconstruction", slug: "advanced-acl-reconstruction" },
      { name: "Arthroscopic PCL Reconstruction", slug: "arthroscopic-pcl-reconstruction" },
      { name: "Meniscus Repair", slug: "meniscus-repair" },
      { name: "MCL & LCL Reconstruction", slug: "mcl-lcl-reconstruction" },
      { name: "MPFL Reconstruction", slug: "mpfl-reconstruction" },
    ],
  },
  {
    category: "Knee Preservation & Replacement",
    services: [
      { name: "High Tibial Osteotomy (HTO)", slug: "high-tibial-osteotomy" },
      { name: "Total Knee Replacement", slug: "total-knee-replacement" },
      { name: "Partial Knee Replacement", slug: "partial-knee-replacement" },
    ],
  },
  {
    category: "Shoulder Arthroscopy & Reconstruction",
    services: [
      { name: "Arthroscopic Shoulder Capsular Release", slug: "arthroscopic-shoulder-capsular-release" },
      { name: "Arthroscopic Bankart Repair", slug: "arthroscopic-bankart-repair" },
      { name: "Arthroscopic Rotator Cuff Repair", slug: "arthroscopic-rotator-cuff-repair" },
      { name: "Shoulder Replacement", slug: "shoulder-replacement" },
    ],
  },
  {
    category: "Trauma & Emergency Care",
    services: [{ name: "Trauma Management", slug: "trauma-management" }],
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
              <div className="bg-card rounded-xl p-8 card-shadow h-full">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-5 pb-3 border-b border-border">
                  {group.category}
                </h3>
                <ul className="space-y-3">
                  {group.services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        to={`/services/${service.slug}`}
                        className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <span className="w-2 h-2 rounded-full bg-accent shrink-0 group-hover:bg-primary transition-colors" />
                        <span className="group-hover:underline">{service.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
