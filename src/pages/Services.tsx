import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const serviceGroups = [
  {
    category: "Knee Arthroscopy & Ligament Reconstruction",
    description: "Advanced minimally invasive arthroscopic procedures to restore knee stability and get you back to an active lifestyle.",
    services: [
      { title: "Arthroscopic ACL Reconstruction", slug: "arthroscopic-acl-reconstruction", desc: "Minimally invasive anterior cruciate ligament reconstruction for knee stability." },
      { title: "Advanced ACL Reconstruction", slug: "advanced-acl-reconstruction", desc: "Complex revision and multi-ligament ACL procedures using advanced techniques." },
      { title: "Arthroscopic PCL Reconstruction", slug: "arthroscopic-pcl-reconstruction", desc: "Posterior cruciate ligament repair through arthroscopic approach." },
      { title: "Meniscus Repair", slug: "meniscus-repair", desc: "Preservation and repair of meniscal tears to restore knee function." },
      { title: "MCL & LCL Reconstruction", slug: "mcl-lcl-reconstruction", desc: "Medial and lateral collateral ligament reconstruction for joint stability." },
      { title: "MPFL Reconstruction", slug: "mpfl-reconstruction", desc: "Medial patellofemoral ligament reconstruction for patellar instability." },
    ],
  },
  {
    category: "Knee Preservation & Replacement",
    description: "From bone realignment to full joint replacement — the latest techniques to relieve pain and restore mobility.",
    services: [
      { title: "High Tibial Osteotomy (HTO)", slug: "high-tibial-osteotomy", desc: "Bone realignment surgery to preserve the knee joint and delay replacement." },
      { title: "Total Knee Replacement", slug: "total-knee-replacement", desc: "Complete joint replacement for severe arthritis and joint damage." },
      { title: "Partial Knee Replacement", slug: "partial-knee-replacement", desc: "Targeted replacement of damaged compartment preserving healthy tissue." },
    ],
  },
  {
    category: "Shoulder Arthroscopy & Reconstruction",
    description: "Comprehensive shoulder care using arthroscopic and open surgical techniques for instability, tears, and degeneration.",
    services: [
      { title: "Arthroscopic Shoulder Capsular Release", slug: "arthroscopic-shoulder-capsular-release", desc: "Minimally invasive release for frozen shoulder and capsular contracture." },
      { title: "Arthroscopic Bankart Repair", slug: "arthroscopic-bankart-repair", desc: "Labral repair for shoulder instability and recurrent dislocation." },
      { title: "Arthroscopic Rotator Cuff Repair", slug: "arthroscopic-rotator-cuff-repair", desc: "Keyhole repair of torn rotator cuff tendons for pain-free movement." },
      { title: "Shoulder Replacement", slug: "shoulder-replacement", desc: "Total or reverse shoulder replacement for severe shoulder arthritis." },
    ],
  },
  {
    category: "Trauma & Emergency Care",
    description: "Expert emergency orthopaedic care for fractures, dislocations, and acute musculoskeletal injuries.",
    services: [
      { title: "Trauma Management", slug: "trauma-management", desc: "Emergency orthopaedic care for fractures, dislocations, and acute injuries." },
    ],
  },
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
        <div className="container-wide space-y-16">
          {serviceGroups.map((group, gi) => (
            <ScrollReveal key={group.category} delay={gi * 0.08}>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {group.category}
                </h2>
                <p className="text-muted-foreground mb-8 max-w-3xl">{group.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.services.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all group"
                    >
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                      <span className="text-primary text-sm font-medium group-hover:underline">Learn More →</span>
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
