import ScrollReveal from "@/components/ScrollReveal";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import clinicImage from "@/assets/clinic-exterior.jpg";

const Contact = () => {
  const whatsappUrl =
    "https://wa.me/923001234567?text=Hello%20Dr%20Shoaib%2C%0A%0AMy%20Name%3A%20%0AClinic%20to%20Visit%3A%20%0APrimary%20Problem%3A%20%0A%0APlease%20schedule%20my%20appointment.";

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
          {/* Clinic image */}
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden mb-12 card-shadow">
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
                  <a href="tel:+923001234567" className="flex items-center gap-4 bg-card rounded-xl p-5 card-shadow hover:card-shadow-hover transition-all group">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">Call Now</p>
                      <p className="text-muted-foreground text-sm">+92 300 1234567</p>
                    </div>
                  </a>

                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-card rounded-xl p-5 card-shadow hover:card-shadow-hover transition-all group">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-accent" />
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
