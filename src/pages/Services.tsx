import ScrollReveal from "@/components/ScrollReveal";
import BookingModal from "@/components/BookingModal";

const serviceGroups = [
  {
    id: "knee-arthroscopy",
    category: "Knee Arthroscopy & Ligament Reconstruction",
    description: "Advanced minimally invasive arthroscopic procedures to restore knee stability, repair ligament damage, and get you back to an active lifestyle.",
    services: [
      { title: "Arthroscopic ACL Reconstruction", desc: "Minimally invasive anterior cruciate ligament reconstruction for knee stability." },
      { title: "Advanced ACL Reconstruction", desc: "Complex revision and multi-ligament ACL procedures using advanced techniques." },
      { title: "Arthroscopic PCL Reconstruction", desc: "Posterior cruciate ligament repair through arthroscopic approach." },
      { title: "Meniscus Repair", desc: "Preservation and repair of meniscal tears to restore knee function." },
      { title: "MCL & LCL Reconstruction", desc: "Medial and lateral collateral ligament reconstruction for joint stability." },
      { title: "MPFL Reconstruction", desc: "Medial patellofemoral ligament reconstruction for patellar instability." },
    ],
  },
  {
    id: "knee-replacement",
    category: "Knee Preservation & Replacement",
    description: "From bone realignment to full joint replacement, we offer the latest techniques to relieve pain and restore mobility for arthritic and damaged knees.",
    services: [
      { title: "High Tibial Osteotomy (HTO)", desc: "Bone realignment surgery to preserve the knee joint and delay replacement." },
      { title: "Total Knee Replacement", desc: "Complete joint replacement for severe arthritis and joint damage." },
      { title: "Partial Knee Replacement", desc: "Targeted replacement of damaged compartment preserving healthy tissue." },
    ],
  },
  {
    id: "shoulder-arthroscopy",
    category: "Shoulder Arthroscopy & Reconstruction",
    description: "Comprehensive shoulder care using arthroscopic and open surgical techniques to treat instability, rotator cuff tears, and degenerative conditions.",
    services: [
      { title: "Arthroscopic Shoulder Capsular Release", desc: "Minimally invasive release for frozen shoulder and capsular contracture." },
      { title: "Arthroscopic Bankart Repair", desc: "Labral repair for shoulder instability and recurrent dislocation." },
      { title: "Arthroscopic Rotator Cuff Repair", desc: "Keyhole repair of torn rotator cuff tendons for pain-free movement." },
      { title: "Shoulder Replacement", desc: "Total or reverse shoulder replacement for severe shoulder arthritis." },
    ],
  },
  {
    id: "trauma-management",
    category: "Trauma & Emergency Care",
    description: "Expert emergency orthopaedic care for fractures, dislocations, and acute musculoskeletal injuries requiring urgent surgical intervention.",
    services: [
      { title: "Trauma Management", desc: "Emergency orthopaedic care for fractures, dislocations, and acute musculoskeletal injuries." },
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
              <div id={group.id} className="scroll-mt-24">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {group.category}
                </h2>
                <p className="text-muted-foreground mb-8 max-w-3xl">{group.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.services.map((s) => (
                    <div key={s.title} className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all">
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                      <BookingModal>
                        <button className="text-primary text-sm font-medium hover:underline">Book Consultation →</button>
                      </BookingModal>
                    </div>
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
