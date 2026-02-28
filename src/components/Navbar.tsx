import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, GraduationCap, Globe } from "lucide-react";

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
  const [patientName, setPatientName] = useState("");
  const [concern, setConcern] = useState("Knee Replacement");
  
  const location = useLocation();
  const phoneNumber = "923002278796";

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const baseMsg = `Hello Dr. Shoaib Aslam, I'm interested in an online consultation.\n\n*Patient Name:* ${patientName}\n*Medical Concern:* ${concern}`;
    const encodedMsg = encodeURIComponent(baseMsg);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMsg}`, "_blank");
    setShowModal(false);
    setPatientName(""); // Clear form
  };

  return (
    <>
      {/* PROFESSIONAL CONSULTATION MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0f172a]/80 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="bg-card w-full max-w-md rounded-2xl border border-border p-8 shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setShowModal(false)} 
              className="absolute right-5 top-5 p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-8">
              <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-foreground">Online Consultation</h2>
              <p className="text-sm text-muted-foreground mt-1 text-balance">
                Please provide your details to begin your consultation request via WhatsApp.
              </p>
            </div>
            
            <form onSubmit={handleConsultationSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-foreground ml-1">Patient Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="Enter full name"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-foreground ml-1">Area of Concern</label>
                <select 
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none"
                  value={concern}
                  onChange={(e) => setConcern(e.target.value)}
                >
                  <option value="Knee Replacement">Knee Replacement / Pain</option>
                  <option value="Shoulder Surgery">Shoulder Surgery / Pain</option>
                  <option value="Sports Injury">Sports Injury Recovery</option>
                  <option value="ACL/Ligament">ACL & Ligament Repair</option>
                  <option value="General Ortho">Other Orthopaedic Issue</option>
                </select>
              </div>
              <button 
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:opacity-95 transition-all flex items-center justify-center gap-3 mt-4"
              >
                <WhatsAppIcon className="w-5 h-5" /> 
                <span>Start Consultation</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ENHANCED TOP BAR */}
      <div className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white text-[10px] md:text-sm border-b border-white/5 shadow-md">
        <div className="container-wide flex items-center justify-between px-4 py-2.5 md:px-8">
          <div className="flex items-center gap-4 md:gap-10">
            {/* Professional Badge */}
            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
              <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-medium tracking-wide uppercase text-[9px] md:text-[11px] opacity-90">
                Fellowship Trained Surgeon
              </span>
            </div>
            
            {/* Interactive Link */}
            <button 
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 group transition-all duration-300 hover:text-blue-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="font-semibold tracking-tight border-b border-dashed border-blue-400/50 pb-0.5 group-hover:border-blue-300">
                Online Consultation Available
              </span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={`https://wa.me/${phoneNumber}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-3 py-1 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 rounded-lg text-[#25D366] transition-all duration-300 font-bold"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" /> 
              <span className="hidden sm:inline text-[10px] uppercase tracking-wider">Connect Support</span>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container-wide flex items-center justify-between px-4 py-3.5 md:px-8">
          <Link to="/" className="flex flex-col group">
            <span className="font-heading text-xl font-bold text-primary tracking-tight">SK – Orthopaedics</span>
            <span className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground font-semibold">Sports Surgery & Joint Replacement</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-all hover:text-primary relative py-1 ${
                  location.pathname === link.path ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:+${phoneNumber}`}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-primary/20 hover:translate-y-[-1px] transition-all active:translate-y-0"
            >
              <Phone className="w-4 h-4" /> +92 300 2278796
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-foreground p-2 hover:bg-muted rounded-lg" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-in slide-in-from-top duration-300">
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-bold py-2 transition-colors ${
                    location.pathname === link.path ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button 
                  onClick={() => { setIsOpen(false); setShowModal(true); }}
                  className="flex items-center justify-center gap-2 bg-slate-100 text-slate-900 px-4 py-3 rounded-xl text-sm font-bold"
                >
                   <Globe className="w-4 h-4" /> Online Consultation
                </button>
                <a
                  href={`tel:+${phoneNumber}`}
                  className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-xl text-sm font-bold justify-center"
                >
                  <Phone className="w-4 h-4" /> Call Specialist
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;