import ScrollReveal from "@/components/ScrollReveal";
import { Phone, MapPin, Clock, Mail, Send, ChevronRight } from "lucide-react";
import { useState } from "react";
import hospitalImage from "@/assets/hospital-interior.webp";

// ─── WhatsApp Icon ────────────────────────────────────────────────────────────

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ─── Config ───────────────────────────────────────────────────────────────────

const WHATSAPP_URL =
  "https://wa.me/923029396988?text=Hello%20Doctor%2C%20I%20would%20like%20to%20book%20an%20appointment.";

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+92 300 2278796",
    subvalue: "Mon – Sat, 9:00 AM – 11:00 PM",
    href: "tel:+923002278796",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@skorthopaedics.com",
    subvalue: "We reply within 24 hours",
    href: "mailto:info@skorthopaedics.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "MID-WEST HOSPITAL",
    subvalue: "Trust Colony, Street No. 3, Bahawalpur",
    href: "https://maps.google.com/?q=MID-WEST+HOSPITAL+Bahawalpur",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Sat: 9:00 AM – 11:00 PM",
    subvalue: "Walk-ins welcome during consultation hours",
    href: undefined,
  },
];

const cities = [
  "Bahawalpur",
  "Rahim Yar Khan",
  "Multan",
  "Lodhran",
  "Bahawalnagar",
  "Ahmadpur East",
];

// ─── Form State ───────────────────────────────────────────────────────────────

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

// ─── Main Component ───────────────────────────────────────────────────────────

const Contact = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Wire up to your email/backend here
    setSubmitted(true);
  }

  return (
    <main>

      {/* ─── Hero Banner ──────────────────────────────────────────────────────── */}
      <section className="bg-primary py-24 md:py-28 text-center">
        <div className="container-wide px-4 md:px-8">
          <p className="text-primary-foreground/60 text-[10px] font-bold uppercase tracking-[0.4em] mb-4">
            Get in Touch
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
            Contact Us
          </h1>
          <p className="text-primary-foreground/70 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
            Book an appointment or reach out for orthopaedic consultations with{" "}
            <span className="text-primary-foreground font-semibold">Dr. Shoaib Aslam Kurerr</span>.
          </p>
        </div>
      </section>

      {/* ─── Quick CTA Strip ──────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-100">
        <div className="container-wide max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">

            {/* Call */}
            <a
              href="tel:+923002278796"
              className="flex items-center gap-4 py-5 px-4 group hover:bg-slate-50 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-0.5">Call Directly</p>
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  +92 300 2278796
                </p>
              </div>
              <ChevronRight size={14} className="ml-auto text-slate-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
            </a>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 py-5 px-4 group hover:bg-slate-50 transition-colors"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                style={{ backgroundColor: "rgba(37,211,102,0.1)" }}
              >
                <WhatsAppIcon className="w-4 h-4" style={{ color: "#25D366" } as React.CSSProperties} />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-0.5">WhatsApp</p>
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  Book an Appointment
                </p>
              </div>
              <ChevronRight size={14} className="ml-auto text-slate-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
            </a>

          </div>
        </div>
      </div>

      {/* ─── Main Content ─────────────────────────────────────────────────────── */}
      <section className="section-padding bg-slate-50/60">
        <div className="container-wide max-w-6xl mx-auto px-4 md:px-8 space-y-8">

          {/* ── Row 1: Contact Form + Details ── */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">

            {/* Contact Form — wider */}
            <ScrollReveal direction="left" className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-7 md:p-8 card-shadow h-full">
                <h2 className="font-heading text-xl font-bold text-foreground mb-1">
                  Send a Message
                </h2>
                <p className="text-sm text-muted-foreground mb-7">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Send className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading text-lg font-bold text-foreground mb-1">Message Sent</p>
                      <p className="text-sm text-muted-foreground">
                        Thank you for reaching out. We'll respond within 24 hours.
                      </p>
                    </div>
                    <button
                      onClick={() => { setForm({ name: "", phone: "", email: "", message: "" }); setSubmitted(false); }}
                      className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary mt-2 hover:underline underline-offset-2"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                          Full Name <span className="text-primary">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-background text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                          Phone Number <span className="text-primary">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+92 300 0000000"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-background text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-background text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                        Message <span className="text-primary">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Describe your concern or enquiry…"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-background text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm py-3.5 rounded-xl transition-colors duration-200"
                    >
                      <Send size={14} />
                      Send Message
                    </button>

                    <p className="text-[9px] text-muted-foreground text-center tracking-wide">
                      Or call directly at{" "}
                      <a href="tel:+923002278796" className="text-primary font-bold hover:underline underline-offset-2">
                        +92 300 2278796
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Contact Details */}
            <ScrollReveal direction="right" className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-7 card-shadow">
                <h2 className="font-heading text-xl font-bold text-foreground mb-1">Practice Details</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Find us at MID-WEST HOSPITAL, Bahawalpur. Walk-ins welcome.
                </p>

                <div className="space-y-4">
                  {contactDetails.map((item) => {
                    const Icon = item.icon;
                    const inner = (
                      <div className="flex items-start gap-3.5 group">
                        <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/15 transition-colors">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-0.5">
                            {item.label}
                          </p>
                          <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                            {item.value}
                          </p>
                          {item.subvalue && (
                            <p className="text-xs text-muted-foreground mt-0.5">{item.subvalue}</p>
                          )}
                        </div>
                      </div>
                    );

                    return item.href ? (
                      <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                        {inner}
                      </a>
                    ) : (
                      <div key={item.label}>{inner}</div>
                    );
                  })}
                </div>

                {/* Divider */}
                <div className="border-t border-slate-100 mt-7 pt-6">
                  <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-3">
                    Areas We Serve
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cities.map((city) => (
                      <span
                        key={city}
                        className="bg-secondary text-secondary-foreground px-3 py-1 rounded-lg text-xs font-medium"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ── Row 2: Map ── */}
          <ScrollReveal>
            <div className="bg-card rounded-2xl overflow-hidden card-shadow">
              <div className="px-7 py-5 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="font-heading text-base font-bold text-foreground">Find Us</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    MID-WEST HOSPITAL · Trust Colony, Street No. 3, Bahawalpur
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=MID-WEST+HOSPITAL+Bahawalpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary hover:underline underline-offset-2 shrink-0"
                >
                  Open in Maps
                </a>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.5!2d71.6749718!3d29.3879797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b91da655623a1%3A0xd84bcc8df0d10bf8!2sMID-WEST%20HOSPITAL!5e0!3m2!1sen!2s!4v1700000000000"
                width="100%"
                height="380"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MID-WEST HOSPITAL - Bahawalpur"
              />
            </div>
          </ScrollReveal>

          {/* ── Row 3: Hospital Image ── */}
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden card-shadow">
              <img
                src={hospitalImage}
                alt="Midwest Hospital Operation Theatre - Bahawalpur"
                className="w-full h-56 md:h-72 object-cover"
              />
            </div>
          </ScrollReveal>

        </div>
      </section>

    </main>
  );
};

export default Contact;
