import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2" />
  </svg>
);

const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FF0000" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <defs>
      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f09433" />
        <stop offset="25%" stopColor="#e6683c" />
        <stop offset="50%" stopColor="#dc2743" />
        <stop offset="75%" stopColor="#cc2366" />
        <stop offset="100%" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

// Footer "WhatsApp Us" button — high intent, patient has read the full page
const WHATSAPP_FOOTER_URL =
  `https://wa.me/923002278796?text=${encodeURIComponent(
    "Hello Dr. Shoaib, I have reviewed your practice details and would like to schedule a consultation for orthopaedic care. Please confirm your availability."
  )}`;

// Floating bubble — generic entry, any page
const WHATSAPP_FLOATING_URL =
  `https://wa.me/923002278796?text=${encodeURIComponent(
    "Hello Dr. Shoaib, I would like to book an appointment for an orthopaedic evaluation. Please guide me on availability."
  )}`;

const socialLinks = [
  { label: "Google",    href: "https://www.google.com/search?q=Dr+Shoaib+Aslam+Kurerr", icon: <GoogleIcon className="w-4 h-4" /> },
  { label: "Facebook",  href: "https://www.facebook.com/saorthopaedics",                 icon: <FacebookIcon className="w-4 h-4" /> },
  { label: "Instagram", href: "https://www.instagram.com/drshoaibaslamkurrer/",          icon: <InstagramIcon className="w-4 h-4" /> },
  { label: "YouTube",   href: "https://www.youtube.com/@dr.shoaibaslamorthopaedics6367", icon: <YouTubeIcon className="w-4 h-4" /> },
  { label: "WhatsApp",  href: WHATSAPP_FLOATING_URL,                                  icon: <WhatsAppIcon className="w-4 h-4" /> },
];

const navLinks = [
  { label: "Home",         path: "/" },
  { label: "About Us",     path: "/about" },
  { label: "Services",     path: "/services" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "FAQs",         path: "/faqs" },
  { label: "Blogs",        path: "/blog" },
  { label: "Contact Us",   path: "/contact" },
];

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#0d1f3c" }}>

      {/* ── Top accent line in site primary blue ── */}
      <div style={{ height: "3px", backgroundColor: "rgba(29, 97, 165)" }} />

      {/* ── Main footer body ── */}
      <div className="container-wide max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

          {/* ── Brand column (wider) ── */}
          <div className="md:col-span-4">
            {/* Logo + tagline */}
            <div className="mb-6">
              <h3 className="font-heading text-xl font-bold text-white mb-1">SK – Orthopaedics</h3>
              <p className="text-[10px] text-white/40 uppercase tracking-[0.2em]">
                Fellowship-Trained Orthopaedic Surgeon · Pakistan
              </p>
            </div>

            {/* Concise description — 2 lines max */}
            <p className="text-sm text-white/55 leading-relaxed mb-6 max-w-xs">
              Specialising in sports surgery, arthroscopy, and joint replacement. Trained at Mayo Hospital Lahore and King Edward Medical University.
            </p>


            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)")}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Divider ── */}
          <div className="hidden md:block md:col-span-1">
            <div className="h-full w-px mx-auto" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />
          </div>

          {/* ── Navigation ── */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold text-white/35 uppercase tracking-[0.25em] mb-5">Navigation</h4>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group flex items-center gap-1.5 text-sm text-white/55 hover:text-white transition-colors"
                >
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-1 transition-opacity text-white/40" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Contact ── */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold text-white/35 uppercase tracking-[0.25em] mb-5">Contact</h4>
            <div className="flex flex-col gap-4 text-sm">
              <div>
                <p className="text-[9px] text-white/30 uppercase tracking-widest mb-1.5">Appointment Line</p>
                <a href="tel:+923002278796" className="flex items-center gap-2 text-white/55 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 shrink-0" /> +92 300 2278796
                </a>
              </div>
              <div>
                <p className="text-[9px] text-white/30 uppercase tracking-widest mb-1.5">Email</p>
                <a href="mailto:info@skorthopaedics.com" className="flex items-center gap-2 text-white/55 hover:text-white transition-colors break-all">
                  <Mail className="w-3.5 h-3.5 shrink-0" /> info@skorthopaedics.com
                </a>
              </div>
              <div className="flex items-start gap-2 text-white/55">
                <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  Serving patients across Pakistan
                  <span className="block text-white/30 text-[10px] mt-0.5">Based in Bahawalpur</span>
                </span>
              </div>
            </div>
          </div>

          {/* ── Book Appointment ── */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold text-white/35 uppercase tracking-[0.25em] mb-5">Book Appointment</h4>

            {/* Compact CTA card */}
            <div
              className="rounded-2xl p-5 mb-4"
              style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <p className="text-xs text-white/50 leading-relaxed mb-4">
                Request a consultation or orthopaedic evaluation with Dr. Shoaib Aslam Kurerr.
              </p>
              <a
                href={WHATSAPP_FOOTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full text-sm font-bold py-2.5 rounded-xl hover:opacity-90 transition-all"
                style={{ backgroundColor: "#25D366", color: "#fff" }}
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp Us
              </a>
              <p className="text-center text-[10px] text-white/25 mt-3 italic">
                Our team responds promptly.
              </p>
            </div>

            <a
              href="tel:+923002278796"
              className="flex items-center justify-center gap-2 w-full text-sm font-semibold py-2.5 rounded-xl transition-all text-white/60 hover:text-white"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <Phone className="w-3.5 h-3.5" /> Call Us
            </a>
          </div>

        </div>
      </div>

      {/* ── Bottom copyright strip ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container-wide max-w-7xl mx-auto px-6 md:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-white/25">© 2026 SK Orthopaedics. All rights reserved.</p>
          <p className="text-[11px] text-white/25">Sports Surgery · Arthroscopy · Joint Replacement</p>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_FLOATING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-xl hover:scale-110 transition-transform"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6 text-white" />
      </a>
    </footer>
  );
};

export default Footer;
