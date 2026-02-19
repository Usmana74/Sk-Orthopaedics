import ScrollReveal from "@/components/ScrollReveal";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import hospitalImage from "@/assets/hospital-interior.webp";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const WHATSAPP_URL =
  "https://wa.me/923002278796?text=Hello%20Doctor%2C%20I%20would%20like%20to%20book%20an%20appointment.";

const contactItems = [
  {
    icon: <Phone className="w-5 h-5 text-primary" />,
    label: "Phone",
    value: "+92 300 2278796",
    href: "tel:+923002278796",
  },
  {
    icon: <Mail className="w-5 h-5 text-primary" />,
    label: "Email",
    value: "info@skorthopaedics.com",
    href: "mailto:info@skorthopaedics.com",
  },
  {
    icon: <MapPin className="w-5 h-5 text-primary" />,
    label: "Location",
    value: "MID-WEST HOSPITAL, Trust Colony, Street No. 3, Bahawalpur",
    href: undefined,
  },
  {
    icon: <Clock className="w-5 h-5 text-primary" />,
    label: "Hours",
    value: "Monday – Saturday · 9:00 AM – 11:00 PM",
    href: undefined,
  },
];

const Contact = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-primary py-24">
        <div className="container-wide px-4 md:px-8 text-center">
          <p className="text-primary-foreground/60 text-sm uppercase tracking-widest mb-3 font-medium">Get in Touch</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/70 max-w-lg mx-auto text-base">
            Book an appointment or reach out for orthopaedic consultations with Dr Shoaib Aslam Kurerr.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-6xl mx-auto space-y-10">

          {/* Top Row: CTA cards */}
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Call CTA */}
              <a
                href="tel:+923002278796"
                className="flex items-center gap-5 bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Call Directly</p>
                  <p className="font-semibold text-foreground text-base">+92 300 2278796</p>
                  <p className="text-sm text-muted-foreground mt-0.5">Available Mon – Sat, 9 AM – 11 PM</p>
                </div>
              </a>

              {/* WhatsApp CTA */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all group"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors" style={{ backgroundColor: "rgba(37,211,102,0.12)" }}>
                  <WhatsAppIcon className="w-6 h-6" style={{ color: "#25D366" } as React.CSSProperties} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">WhatsApp Appointment</p>
                  <p className="font-semibold text-foreground text-base">Message on WhatsApp</p>
                  <p className="text-sm text-muted-foreground mt-0.5">Pre-filled appointment message</p>
                </div>
              </a>
            </div>
          </ScrollReveal>

          {/* Middle Row: Map + Details */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Map — wider */}
            <ScrollReveal direction="left" className="lg:col-span-3">
              <div className="rounded-2xl overflow-hidden card-shadow h-full min-h-[380px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.5!2d71.6749718!3d29.3879797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b91da655623a1%3A0xd84bcc8df0d10bf8!2sMID-WEST%20HOSPITAL!5e0!3m2!1sen!2s!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "380px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MID-WEST HOSPITAL - Bahawalpur"
                  className="w-full h-full"
                />
              </div>
            </ScrollReveal>

            {/* Contact Details */}
            <ScrollReveal direction="right" className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-7 card-shadow h-full flex flex-col justify-between">
                <div>
                  <h2 className="font-heading text-xl font-bold text-foreground mb-1">Practice Details</h2>
                  <p className="text-sm text-muted-foreground mb-6">
                    Find us at MID-WEST HOSPITAL, Bahawalpur. Walk-ins welcome during consultation hours.
                  </p>
                  <div className="space-y-5">
                    {contactItems.map((item) =>
                      item.href ? (
                        <a key={item.label} href={item.href} className="flex items-start gap-3 group">
                          <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{item.value}</p>
                          </div>
                        </a>
                      ) : (
                        <div key={item.label} className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                            <p className="text-sm font-medium text-foreground">{item.value}</p>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Hospital Image */}
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden card-shadow">
              <img
                src={hospitalImage}
                alt="Midwest Hospital Operation Theatre - Bahawalpur"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Areas We Serve */}
          <ScrollReveal>
            <div className="bg-card rounded-2xl p-8 card-shadow">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-1">Areas We Serve</h3>
              <p className="text-sm text-muted-foreground mb-5">Patients travel from across Southern Punjab for treatment.</p>
              <div className="flex flex-wrap gap-2">
                {["Bahawalpur", "Rahim Yar Khan", "Multan", "Lodhran", "Bahawalnagar", "Ahmadpur East"].map((city) => (
                  <span key={city} className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-sm font-medium">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Contact;
