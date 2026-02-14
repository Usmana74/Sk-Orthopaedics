import ScrollReveal from "./ScrollReveal";

const serviceGroups = [
  {
    category: "Knee Arthroscopy & Ligament Reconstruction",
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
    services: [
      "High Tibial Osteotomy (HTO)",
      "Total Knee Replacement",
      "Partial Knee Replacement",
    ],
  },
  {
    category: "Shoulder Arthroscopy & Reconstruction",
    services: [
      "Arthroscopic Shoulder Capsular Release",
      "Arthroscopic Bankart Repair",
      "Arthroscopic Rotator Cuff Repair",
      "Shoulder Replacement",
    ],
  },
  {
    category: "Trauma & Emergency Care",
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
              <div className="bg-card rounded-xl p-8 card-shadow h-full">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-5 pb-3 border-b border-border">
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
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
