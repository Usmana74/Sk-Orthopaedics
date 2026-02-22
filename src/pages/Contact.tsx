import ScrollReveal from "@/components/ScrollReveal";
import { Phone, MapPin, Clock, Mail, Send, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import hospitalImage from "@/assets/hospital-interior.webp";

// ─── WhatsApp Icon ────────────────────────────────────────────────────────────

const WhatsAppIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ─── Config ───────────────────────────────────────────────────────────────────

// Doctor's WhatsApp number — international format, no + or spaces
const DOCTOR_WA_NUMBER = "923029396988";

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+92 300 2278796",
    subvalue: "Mon – Sat · 9:00 AM – 11:00 PM",
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
    label: "Consultation Hours",
    value: "Mon – Sat: 9:00 AM – 11:00 PM",
    subvalue: "Walk-ins welcome during hours",
    href: undefined,
  },
];

const cities = [
  "Bahawalpur", "Rahim Yar Khan", "Multan",
  "Lodhran", "Bahawalnagar", "Ahmadpur East",
];

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

// ─── WhatsApp message builder ─────────────────────────────────────────────────
// Constructs a clean, formatted message for the doctor from the form fields
// and silently opens it in a hidden iframe / new tab so the user never sees it.

function buildWhatsAppURL(form: FormData): string {
  const lines = [
    "🏥 *New Patient Enquiry — SK-Orthopaedics Website*",
    "",
    `👤 *Name:* ${form.name}`,
    `📞 *Phone:* ${form.phone}`,
    form.email ? `📧 *Email:* ${form.email}` : null,
    "",
    `💬 *Message:*`,
    form.message,
    "",
    `🕐 *Sent:* ${new Date().toLocaleString("en-PK", {
      dateStyle: "medium",
      timeStyle: "short",
    })}`,
  ]
    .filter((l) => l !== null)
    .join("\n");

  return `https://wa.me/${DOCTOR_WA_NUMBER}?text=${encodeURIComponent(lines)}`;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const Contact = () => {
  const [form, setForm] = useState<FormData>({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // 1. Build the formatted WhatsApp URL with all form data
    const waURL = buildWhatsAppURL(form);

    // 2. Open WhatsApp silently in a new background tab.
    //    The user's focus stays on this page — they never see WhatsApp open.
    //    On mobile, WhatsApp app will open behind the browser.
    const tab = window.open(waURL, "_blank", "noopener,noreferrer");
    // Immediately blur the tab so focus returns to this page
    if (tab) tab.blur();
    window.focus();

    // 3. Show the user a clean confirmation — they see nothing about WhatsApp
    setSubmitted(true);
  }

  return (
    <main className="bg-white min-h-screen">

      {/* ─── Hero Banner ─────────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center text-center"
        style={{
          background: "linear-gradient(135deg, #2a5298 0%, #3a6bc7 60%, #2a5298 100%)",
          minHeight: "300px",
          paddingTop: "120px",
          paddingBottom: "80px",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,1) 40px,rgba(255,255,255,1) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(255,255,255,1) 40px,rgba(255,255,255,1) 41px)",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-white/60 mb-5">
            Get in Touch
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
            Contact Us
          </h1>
          <p className="text-sm md:text-base text-white/70 leading-[1.85] max-w-lg mx-auto">
            Book an appointment or reach out for orthopaedic consultations with{" "}
            <span className="text-white font-semibold">Dr. Shoaib Aslam Kurerr</span>,
            Consultant Orthopaedic Surgeon, Midwest Hospital Bahawalpur.
          </p>
        </div>
      </section>

      {/* ─── Body ────────────────────────────────────────────────────────────── */}
      <div className="bg-slate-50/60">
        <div className="container-wide max-w-6xl mx-auto px-6 py-14 md:py-20 space-y-10">

          {/* ── Quick Reach Strip ─────────────────────────────────────────────── */}
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <a
                href="tel:+923002278796"
                className="group flex items-center gap-5 bg-white border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-300 p-6"
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-0.5">Call Directly</p>
                  <p className="text-sm font-semibold text-slate-900 group-hover:text-primary transition-colors">+92 300 2278796</p>
                  <p className="text-xs text-slate-400 mt-0.5">Mon – Sat, 9 AM – 11 PM</p>
                </div>
                <ArrowRight size={14} className="ml-auto text-slate-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
              </a>

              <a
                href={`https://wa.me/${DOCTOR_WA_NUMBER}?text=${encodeURIComponent("Hello Doctor, I would like to book an appointment.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 bg-white border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-300 p-6"
              >
                <div className="w-12 h-12 flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(37,211,102,0.1)" }}>
                  <WhatsAppIcon className="w-5 h-5" style={{ color: "#25D366" }} />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-0.5">WhatsApp</p>
                  <p className="text-sm font-semibold text-slate-900 group-hover:text-primary transition-colors">Book an Appointment</p>
                  <p className="text-xs text-slate-400 mt-0.5">Chat directly with the clinic</p>
                </div>
                <ArrowRight size={14} className="ml-auto text-slate-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
              </a>
            </div>
          </ScrollReveal>

          {/* ── Form + Details ────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">

            {/* Form */}
            <ScrollReveal direction="left" className="lg:col-span-3">
              <div className="bg-white border border-slate-100 p-7 md:p-8 h-full">

                <div className="flex items-center gap-3 mb-7">
                  <span className="h-px w-8 bg-primary" />
                  <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-primary">
                    Send a Message
                  </p>
                </div>

                <h2 className="font-heading text-xl font-bold text-slate-900 mb-1">Get in Touch</h2>
                <p className="text-sm text-slate-500 leading-relaxed mb-7">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                {/* ── Confirmation State ── */}
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-14 text-center gap-5">
                    <div className="w-16 h-16 bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading text-xl font-bold text-slate-900 mb-2">
                        Message Received
                      </p>
                      <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                        Thank you, <span className="font-semibold text-slate-700">{form.name}</span>.
                        Your enquiry has been submitted. We'll be in touch shortly.
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-1 pt-1">
                      <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-300">
                        Expected response within
                      </p>
                      <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-primary">
                        A few hours · Mon – Sat
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setForm({ name: "", phone: "", email: "", message: "" });
                        setSubmitted(false);
                      }}
                      className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400 hover:text-primary transition-colors underline underline-offset-2 mt-1"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  /* ── Form ── */
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">
                          Full Name <span className="text-primary">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">
                          Phone <span className="text-primary">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+92 300 0000000"
                          className="w-full px-4 py-3 border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">
                        Message <span className="text-primary">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Describe your concern or enquiry…"
                        className="w-full px-4 py-3 border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-[11px] uppercase tracking-[0.2em] py-4 transition-colors duration-200"
                    >
                      <Send size={13} />
                      Send Message
                    </button>

                    <p className="text-[9px] text-slate-400 text-center tracking-wide pt-1">
                      Or call directly at{" "}
                      <a href="tel:+923002278796" className="text-primary font-bold hover:underline underline-offset-2">
                        +92 300 2278796
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Practice Details + Areas */}
            <ScrollReveal direction="right" className="lg:col-span-2 space-y-5">

              <div className="bg-white border border-slate-100 p-7">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-8 bg-primary" />
                  <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-primary">
                    Practice Details
                  </p>
                </div>
                <div className="space-y-5">
                  {contactDetails.map((item) => {
                    const Icon = item.icon;
                    const inner = (
                      <div className="flex items-start gap-4 group">
                        <div className="w-9 h-9 bg-primary/8 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/15 transition-colors">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-0.5">
                            {item.label}
                          </p>
                          <p className="text-sm font-semibold text-slate-900 group-hover:text-primary transition-colors leading-snug">
                            {item.value}
                          </p>
                          {item.subvalue && (
                            <p className="text-xs text-slate-400 mt-0.5">{item.subvalue}</p>
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
              </div>

              <div className="bg-white border border-slate-100 p-7">
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-px w-8 bg-primary" />
                  <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-primary">
                    Areas We Serve
                  </p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Patients travel from across Southern Punjab for treatment.
                </p>
                <div className="flex flex-wrap gap-2">
                  {cities.map((city) => (
                    <span key={city} className="bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em]">
                      {city}
                    </span>
                  ))}
                </div>
              </div>

            </ScrollReveal>
          </div>

          {/* ── Map ───────────────────────────────────────────────────────────── */}
          <ScrollReveal>
            <div className="bg-white border border-slate-100 overflow-hidden">
              <div className="px-7 py-5 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-primary" />
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-primary">Find Us</p>
                    <p className="text-xs text-slate-400 mt-0.5">MID-WEST HOSPITAL · Trust Colony, Street No. 3, Bahawalpur</p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=MID-WEST+HOSPITAL+Bahawalpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors shrink-0"
                >
                  Open in Maps <ArrowRight size={10} />
                </a>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.5!2d71.6749718!3d29.3879797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b91da655623a1%3A0xd84bcc8df0d10bf8!2sMID-WEST%20HOSPITAL!5e0!3m2!1sen!2s!4v1700000000000"
                width="100%"
                height="360"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MID-WEST HOSPITAL - Bahawalpur"
              />
            </div>
          </ScrollReveal>

          {/* ── Hospital Image ─────────────────────────────────────────────────── */}
          <ScrollReveal>
            <div className="overflow-hidden border border-slate-100">
              <img
                src={hospitalImage}
                alt="Midwest Hospital Operation Theatre - Bahawalpur"
                className="w-full h-56 md:h-64 object-cover grayscale-[0.15] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </ScrollReveal>

        </div>
      </div>

    </main>
  );
};

export default Contact;
