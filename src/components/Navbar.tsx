import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "FAQs", path: "/faqs" },
  { label: "Blogs", path: "/blogs" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm">
        <div className="container-wide flex items-center justify-between px-4 py-2 md:px-8">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">📍 Bahawalpur, Pakistan</span>
            <span>🕐 Mon – Sat: 5:00 PM – 9:00 PM</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://wa.me/923001234567" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container-wide flex items-center justify-between px-4 py-3 md:px-8">
          <Link to="/" className="flex flex-col">
            <span className="font-heading text-xl font-bold text-primary">SK – Orthopaedics</span>
            <span className="text-xs text-muted-foreground font-body">Sports Surgery & Joint Replacement</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+923001234567"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Phone className="w-4 h-4" /> +92 300 1234567
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-card border-t border-border">
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium py-2 transition-colors ${
                    location.pathname === link.path ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+923001234567"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium justify-center mt-2"
              >
                <Phone className="w-4 h-4" /> +92 300 1234567
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
