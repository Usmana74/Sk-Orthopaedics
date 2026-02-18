import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import serviceKnee from "@/assets/service-knee.jpg";
import serviceAcl from "@/assets/service-acl.jpg";
import serviceShoulder from "@/assets/service-shoulder.jpg";
import serviceSports from "@/assets/service-sports.jpg";

const serviceCards = [
  {
    title: "Knee Arthroscopy & Ligament Reconstruction",
    image: serviceAcl,
    slug: "arthroscopic-acl-reconstruction",
  },
  {
    title: "Knee Preservation & Replacement",
    image: serviceKnee,
    slug: "total-knee-replacement",
  },
  {
    title: "Shoulder Arthroscopy & Reconstruction",
    image: serviceShoulder,
    slug: "arthroscopic-rotator-cuff-repair",
  },
  {
    title: "Trauma & Emergency Care",
    image: serviceSports,
    slug: "trauma-management",
  },
];

const ServicesOverview = () => {
  return (
    <section className="section-padding section-gradient">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Our Procedures</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Specialized Orthopaedic Services
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {serviceCards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.1}>
              <Link
                to={`/services/${card.slug}`}
                className="group relative block rounded-xl overflow-hidden aspect-[3/4] card-shadow hover:card-shadow-hover transition-all"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-heading text-lg font-bold text-white leading-snug">
                    {card.title}
                  </h3>
                  <span className="text-white/70 text-sm mt-1 inline-block group-hover:text-accent transition-colors">
                    View Procedures →
                  </span>
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
