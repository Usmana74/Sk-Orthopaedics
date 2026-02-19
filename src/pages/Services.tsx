import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import serviceKnee from "@/assets/service-knee.jpg";
import serviceAcl from "@/assets/service-acl.jpg";
import serviceShoulder from "@/assets/service-shoulder.jpg";
import serviceSports from "@/assets/service-sports.jpg";

const serviceGroups = [
  {
    category: "Knee Arthroscopy & Ligament Reconstruction",
    description: "Advanced minimally invasive arthroscopic procedures to restore knee stability and get you back to an active lifestyle.",
    image: serviceAcl,
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
    image: serviceKnee,
    services: [
      { title: "High Tibial Osteotomy (HTO)", slug: "high-tibial-osteotomy", desc: "Bone realignment surgery to preserve the knee joint and delay replacement." },
      { title: "Total Knee Replacement", slug: "total-knee-replacement", desc: "Complete joint replacement for severe arthritis and joint damage." },
      { title: "Partial Knee Replacement", slug: "partial-knee-replacement", desc: "Targeted replacement of damaged compartment preserving healthy tissue." },
    ],
  },
  {
    category: "Shoulder Arthroscopy & Reconstruction",
    description: "Comprehensive shoulder care using arthroscopic and open surgical techniques for instability, tears, and degeneration.",
    image: serviceShoulder,
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
    image: serviceSports,
    services: [
      { title: "Trauma Management", slug: "trauma-management", desc: "Emergency orthopaedic care for fractures, dislocations, and acute injuries." },
    ],
  },
];

const Services = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container-wide px-4 md:px-8 text-center">
          <p className="text-primary-foreground/60 text-sm uppercase tracking-widest mb-3 font-medium">What We Offer</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Services</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Comprehensive orthopaedic services tailored to your needs.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide space-y-20">
          {serviceGroups.map((group, gi) => (
            <ScrollReveal key={group.category} delay={gi * 0.08}>
              <div>
                {/* Category header — stacked on mobile, side-by-side on md+ */}
                <div className="rounded-2xl overflow-hidden mb-8 flex flex-col md:flex-row md:min-h-[220px]">
                  {/* Image */}
                  <div className="relative w-full md:w-2/5 h-52 md:h-auto shrink-0">
                    <img
                      src={group.image}
                      alt={group.category}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Mobile: bottom fade; Desktop: right fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:hidden" />
                    <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-transparent to-black/10" />
                  </div>

                  {/* Text block */}
                  <div className="bg-foreground flex items-center p-6 md:p-10 flex-1">
                    <div>
                      <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-background mb-2 leading-snug">
                        {group.category}
                      </h2>
                      <p className="text-background/65 text-sm md:text-base leading-relaxed">
                        {group.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Procedure cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                  {group.services.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="bg-card rounded-xl p-5 md:p-6 card-shadow hover:card-shadow-hover transition-all group border border-border/50"
                    >
                      <h3 className="font-heading text-base md:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                        {s.title}
                      </h3>
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
