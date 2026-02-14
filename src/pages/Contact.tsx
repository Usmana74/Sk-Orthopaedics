import ScrollReveal from "@/components/ScrollReveal";
import { Phone, MapPin, Clock } from "lucide-react";
import clinicImage from "@/assets/clinic-exterior.jpg";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Contact = () => {
  const whatsappUrl =
    "https://wa.me/923002278796?text=Hello%20Doctor%2C%20I%20would%20like%20to%20book%20an%20appointment.";

  return (
    <main>
      <section className="bg-primary py-20">
        <div className="container-wide px-4 md:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">Get in touch for appointments and consultations.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-5xl mx-auto">
          {/* Google Maps */}
          <ScrollReveal>
            <div className="rounded-xl overflow-hidden mb-12 card-shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55188.45756768064!2d71.6361665!3d29.3956076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b90c1d4ced207%3A0x1c95ce3cb7e9b846!2sBahawalpur%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SK Orthopaedics Location - Bahawalpur"
                className="w-full"
              />
            </div>
          </ScrollReveal>

          {/* Clinic image */}
          <ScrollReveal>
            <div className="rounded-xl overflow-hidden mb-12 card-shadow">
              <img src={clinicImage} alt="SK Orthopaedics Clinic - Bahawalpur" className="w-full h-64 md:h-80 object-cover" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Book an Appointment</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Contact Dr Shoaib Aslam Kurerr for orthopaedic consultations, sports injury assessments, or joint replacement evaluations.
                  </p>
                </div>

                <div className="space-y-4">
                  <a href="tel:+923002278796" className="flex items-center gap-4 bg-card rounded-xl p-5 card-shadow hover:card-shadow-hover transition-all group">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">Call Now</p>
                      <p className="text-muted-foreground text-sm">+92 300 2278796</p>
                    </div>
                  </a>

                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-card rounded-xl p-5 card-shadow hover:card-shadow-hover transition-all group">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <WhatsAppIcon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">WhatsApp Appointment</p>
                      <p className="text-muted-foreground text-sm">Send pre-filled message</p>
                    </div>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-6">
                <div className="bg-card rounded-xl p-8 card-shadow">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-6">Clinic Information</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground text-sm">Location</p>
                        <p className="text-muted-foreground text-sm">Bahawalpur, Punjab, Pakistan</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground text-sm">Consultation Hours</p>
                        <p className="text-muted-foreground text-sm">Monday – Saturday</p>
                        <p className="text-muted-foreground text-sm">5:00 PM – 9:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-8 card-shadow">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Areas We Serve</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Bahawalpur", "Rahim Yar Khan", "Multan", "Lodhran", "Bahawalnagar", "Ahmadpur East"].map((city) => (
                      <span key={city} className="bg-secondary text-secondary-foreground px-3 py-1.5 rounded-lg text-xs font-medium">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
