import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "5000+", label: "Patients Treated" },
  { value: "15+", label: "Years Experience" },
  { value: "3000+", label: "Surgeries Performed" },
];

const StatsSection = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container-wide px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.15}>
              <div className="text-center">
                <p className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-2">{stat.value}</p>
                <p className="text-primary-foreground/70 text-sm uppercase tracking-widest">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
