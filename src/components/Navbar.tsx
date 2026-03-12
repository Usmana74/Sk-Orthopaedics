import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, GraduationCap, Globe, ChevronRight } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "FAQs", path: "/faqs" },
  { label: "Blogs", path: "/blog" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    concern: "Knee Pain / Knee Injury",
    duration: "Less than 1 month",
  });

  const location = useLocation();
  const phoneNumber = "923002278796";

  // Sticky scroll detection for micro CTA
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Dr. Shoaib Aslam, I would like to request an Online Consultation.

*Name:* ${formData.name}
*Concern:* ${formData.concern}
*Duration of Issue:* ${formData.duration}`;

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
    setShowModal(false);
  };

  return (
    <>
      {/* ─── CONSULTATION MODAL ─── */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-card w-full max-w-md rounded-xl border border-border p-6 shadow-xl animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold text-primary flex items-center gap-2">
                <Globe className="w-5 h-5" /> Online Consultation
              </h2>
              <button onClick={() => setShowModal(false)} className="text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Patient type hint */}
            <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
              For patients seeking expert evaluation for sports injuries, joint pain, or orthopaedic surgery.
            </p>

            <form onSubmit={handleConsultationSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1 block">Full Name</label>
                <input
                  required type="text"
                  className="w-full px-4 py-2 rounded border border-border bg-background outline-none focus:border-primary transition-colors text-sm"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1 block">Primary Concern</label>
                  <select
                    className="w-full px-4 py-2 rounded border border-border bg-background outline-none focus:border-primary transition-colors text-sm"
                    onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                  >
                    <option>Knee Pain / Knee Injury</option>
                    <option>Shoulder Pain / Shoulder Injury</option>
                    <option>Sports Injury Consultation</option>
                    <option>Joint Replacement Evaluation</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1 block">How long have you had this issue?</label>
                  <select
                    className="w-full px-4 py-2 rounded border border-border bg-background outline-none focus:border-primary transition-colors text-sm"
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  >
                    <option>Less than 1 month</option>
                    <option>1 - 6 months</option>
                    <option>6 months - 1 year</option>
                    <option>More than 1 year</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-2"
              >
                Continue to WhatsApp <ChevronRight className="w-4 h-4" />
              </button>

              {/* Response expectation */}
              <p className="text-center text-[11px] text-muted-foreground italic">
                Our team usually responds within a short time to consultation requests.
              </p>
            </form>
          </div>
        </div>
      )}

      {/* ─── TOP BAR ─── */}
      <div className="bg-primary text-primary-foreground text-[11px] md:text-xs">
        <div className="container-wide flex items-center justify-between px-4 py-2 md:px-8 border-b border-white/10">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 border-r border-white/20 pr-6 hidden sm:flex">
              <GraduationCap className="w-3.5 h-3.5" />
              <span className="font-medium tracking-wide uppercase opacity-90">FCPS · Fellowship Trained Orthopaedic Surgeon</span>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity group"
            >
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <Globe className="w-3.5 h-3.5 opacity-80" />
              <span className="font-semibold underline underline-offset-4 tracking-wide uppercase">Online Consultations Available Nationwide</span>
            </button>
          </div>
          <div className="flex items-center">
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity py-0.5 px-3 rounded bg-white/10"
            >
              <WhatsAppIcon className="w-3 h-3" /> <span className="font-bold">WHATSAPP</span>
            </a>
          </div>
        </div>
      </div>

      {/* ─── MAIN NAVIGATION ─── */}
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className={`container-wide flex items-center justify-between px-4 md:px-8 transition-all duration-300 ${scrolled ? "py-2" : "py-3"}`}>

          {/* Brand — doctor name + specialty */}
          <Link to="/" className="flex flex-col">
            <span className="font-heading text-xl font-bold text-primary">Dr. Shoaib Aslam Kurerr</span>
            <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-widest">
              Orthopaedic & Sports Surgery Specialist
            </span>
          </Link>

          {/* Desktop Links */}
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

          {/* Desktop CTA — phone always visible, Book Consultation appears on scroll */}
          <div className="hidden lg:flex items-center gap-3">
            {scrolled && (
              <button
                onClick={() => setShowModal(true)}
                className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-all animate-in fade-in slide-in-from-right-2 duration-200"
              >
                <WhatsAppIcon className="w-4 h-4" /> Consult Now
              </button>
            )}
            <a
              href={`tel:+${phoneNumber}`}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-bold hover:shadow-lg transition-all"
            >
              <Phone className="w-4 h-4" /> +92 300 2278796
            </a>
          </div>

          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Trust Signal Strip */}
        <div className="hidden lg:block border-t border-border/50 bg-slate-50/80">
          <div className="container-wide px-8 py-1.5 flex items-center justify-center gap-6 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
            <span>Sports Surgery</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>Arthroscopy Expert</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>Knee & Shoulder Replacement</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>Mayo Hospital Lahore</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>King Edward Medical University</span>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-card border-t border-border p-6 space-y-4 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.path} to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-bold uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => { setIsOpen(false); setShowModal(true); }}
              className="w-full text-left text-primary font-bold text-sm uppercase flex items-center gap-2"
            >
              <Globe className="w-4 h-4" /> Book Online Consultation
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
