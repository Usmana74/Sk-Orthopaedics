import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: 2000, suffix: "+", label: "Patients Treated" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "+", label: "Successful Surgeries" },
];

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatItem({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(value, 1800, started);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Respect the ScrollReveal delay before starting count
          setTimeout(() => setStarted(true), delay * 1000);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <ScrollReveal delay={delay}>
      <div ref={ref} className="text-center">
        <p className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-2 tabular-nums">
          {count}{suffix}
        </p>
        <p className="text-primary-foreground/70 text-sm uppercase tracking-widest">{label}</p>
      </div>
    </ScrollReveal>
  );
}

const StatsSection = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container-wide px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={i * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
