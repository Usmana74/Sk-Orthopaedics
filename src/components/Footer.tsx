import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">SK – Orthopaedics</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Expert orthopaedic care in Bahawalpur. Dr Shoaib Aslam Kurerr specializes in sports surgery and joint replacement.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Services</h4>
            <div className="flex flex-col gap-2 text-sm opacity-80">
              <span>Knee Replacement</span>
              <span>Shoulder Surgery</span>
              <span>Arthroscopy</span>
              <span>Sports Injury Treatment</span>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:+923001234567" className="flex items-center gap-2 opacity-80 hover:opacity-100">
                <Phone className="w-4 h-4" /> +92 300 1234567
              </a>
              <a href="mailto:info@skorthopaedics.com" className="flex items-center gap-2 opacity-80 hover:opacity-100">
                <Mail className="w-4 h-4" /> info@skorthopaedics.com
              </a>
              <span className="flex items-center gap-2 opacity-80">
                <MapPin className="w-4 h-4" /> Bahawalpur, Pakistan
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-60">© 2026 SK Orthopaedics. All rights reserved.</p>
          <p className="text-sm opacity-60">Orthopaedic Surgeon in Bahawalpur</p>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/923001234567?text=Hello%20Dr%20Shoaib%2C%0A%0AMy%20Name%3A%20%0AClinic%20to%20Visit%3A%20%0APrimary%20Problem%3A%20%0A%0APlease%20schedule%20my%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-accent text-accent-foreground p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp Appointment"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </footer>
  );
};

export default Footer;
