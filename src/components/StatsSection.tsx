import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: 5000, suffix: "+", label: "Patients Treated" },
  { value: 8,    suffix: "+", label: "Years Experience" },
  { value: 400,  suffix: "+", label: "Successful Surgeries" },
  { value: 4,    suffix: "",  label: "International Certifications", prefix: "FCPS · MRCS · ATLS · IMC" },
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
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatItem({
  value, suffix, label, delay, prefix, isLast,
}: {
  value: number; suffix: string; label: string; delay: number; prefix?: string; isLast?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(value, 1800, started);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
      <div ref={ref} className="relative flex flex-col items-center text-center px-6 py-2">
        {/* Vertical divider — hidden on last item and on mobile */}
        {!isLast && (
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-white/15" />
        )}

        {/* Number or credential string */}
        {prefix ? (
          <p className="font-heading text-lg md:text-xl font-bold text-white mb-2 tracking-wide leading-snug">
            {prefix}
          </p>
        ) : (
          <p className="font-heading text-4xl md:text-5xl font-bold text-white mb-2 tabular-nums">
            {count}{suffix}
          </p>
        )}

        <p className="text-white/60 text-[11px] uppercase tracking-widest">{label}</p>
      </div>
    </ScrollReveal>
  );
}

const StatsSection = () => {
  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{ backgroundColor: "rgba(29, 97, 165)" }}
    >
      {/* Subtle radial glow for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      />
      {/* Top + bottom hairlines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />

      <div className="relative container-wide px-4 md:px-8">

        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="text-white/50 text-[10px] font-bold uppercase tracking-[0.4em] mb-2">
              Our Track Record
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">
              Trusted by Patients Across Pakistan
            </h2>
          </div>
        </ScrollReveal>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-0">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={i * 0.12}
              prefix={stat.prefix}
              isLast={i === stats.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
