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
  const [concern, setConcern] = useState("Knee");
  
  const location = useLocation();
  const phoneNumber = "923002278796";

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const baseMsg = `Hello Dr. Shoaib Aslam, I would like to book an online consultation.\n\n*Name:* ${patientName}\n*Concern:* ${concern}`;
    const encodedMsg = encodeURIComponent(baseMsg);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMsg}`, "_blank");
    setShowModal(false);
  };

  return (
    <>
      {/* Consultation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-card w-full max-w-md rounded-2xl border border-border p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-heading font-bold text-primary">Book Consultation</h2>
              <button onClick={() => setShowModal(false)} className="p-1 hover:bg-muted rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleConsultationSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">Patient Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Area of Concern</label>
                <select 
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none"
                  value={concern}
                  onChange={(e) => setConcern(e.target.value)}
                >
                  <option value="Knee">Knee Replacement / Pain</option>
                  <option value="Shoulder">Shoulder Surgery / Pain</option>
                  <option value="Sports Injury">Sports Injury</option>
                  <option value="Joint Replacement">Joint Replacement</option>
                  <option value="General Ortho">Other Orthopaedic Issue</option>
                </select>
              </div>
              <button 
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5" /> Continue to WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm">
        <div className="container-wide flex items-center justify-between px-4 py-2 md:px-8">
          <div className="flex items-center gap-4 md:gap-8">
            <div className="flex items-center gap-1.5 opacity-90">
              <GraduationCap className="w-4 h-4" />
              <span className="hidden xs:inline">Fellowship Trained Surgeon</span>
            </div>
            <button 
              onClick={() => setShowModal(true)}
              className="flex items-center gap-1.5 hover:text-white transition-colors group"
            >
              <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span className="font-medium underline underline-offset-4">Online Consultation Available</span>
            </button>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href={`https://wa.me/${phoneNumber}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
            >
              <WhatsAppIcon className="w-4 h-4" /> <span className="hidden sm:inline">WhatsApp</span>
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
              href={`tel:+${phoneNumber}`}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Phone className="w-4 h-4" /> +92 300 2278796
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
                href={`tel:+${phoneNumber}`}
                className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium justify-center mt-2"
              >
                <Phone className="w-4 h-4" /> +92 300 2278796
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;