import { Phone, MessageCircle, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import doctorSurgeryBlue from "@/assets/doctor-surgery-blue.jpg";

const CTASection = () => {
  const whatsappUrl =
    "https://wa.me/923001234567?text=Hello%20Dr%20Shoaib%2C%0A%0AMy%20Name%3A%20%0AClinic%20to%20Visit%3A%20%0APrimary%20Problem%3A%20%0A%0APlease%20schedule%20my%20appointment.";

  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${doctorSurgeryBlue})` }}
      />
      <div className="absolute inset-0 bg-primary/85" />

      <div className="relative z-10 section-padding">
        <div className="container-wide text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Get Expert Orthopaedic Care in Bahawalpur
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-3 flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" /> Bahawalpur & nearby cities
            </p>
            <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              Book your consultation with Dr Shoaib Aslam Kurerr today. Expert care is just a call away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+923001234567"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all hover:scale-[1.02]"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp Appointment
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
