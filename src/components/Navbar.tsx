import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, GraduationCap, Globe, ChevronRight, ChevronLeft, CheckCircle } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const navLinks = [
  { label: "Home",         path: "/" },
  { label: "About Us",     path: "/about" },
  { label: "Services",     path: "/services" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "FAQs",         path: "/faqs" },
  { label: "Blogs",        path: "/blog" },
  { label: "Contact Us",   path: "/contact" },
];

const PHONE = "923002278796";

// ── Step definitions ──────────────────────────────────────────────────────────
const STEPS = [
  {
    id: "name",
    question: "What is your name?",
    hint: "So we can address you properly.",
    type: "text",
    placeholder: "e.g. Ahmed Khan",
  },
  {
    id: "concern",
    question: "What is your primary concern?",
    hint: "Select the option that best describes your condition.",
    type: "options",
    options: [
      { label: "Knee Pain / Knee Injury",         emoji: "🦵" },
      { label: "Shoulder Pain / Shoulder Injury",  emoji: "💪" },
      { label: "Sports Injury",                    emoji: "⚽" },
      { label: "Joint Replacement Evaluation",     emoji: "🔩" },
      { label: "General Orthopaedic Consultation", emoji: "🩺" },
    ],
  },
  {
    id: "duration",
    question: "How long have you had this issue?",
    hint: "This helps Dr. Shoaib understand the severity.",
    type: "options",
    options: [
      { label: "Less than 1 month",   emoji: "📅" },
      { label: "1 – 6 months",        emoji: "🗓️" },
      { label: "6 months – 1 year",   emoji: "📆" },
      { label: "More than 1 year",    emoji: "⏳" },
    ],
  },
  {
    id: "type",
    question: "What type of consultation do you prefer?",
    hint: "Both options are available across Pakistan.",
    type: "options",
    options: [
      { label: "Online / Video Consultation", emoji: "💻" },
      { label: "In-Clinic Visit",             emoji: "🏥" },
    ],
  },
  {
    id: "phone",
    question: "What is your WhatsApp number?",
    hint: "So the clinic can reach you directly.",
    type: "text",
    placeholder: "e.g. 0300 1234567",
  },
];

type FormData = { [key: string]: string };

// ── Consultation Modal ────────────────────────────────────────────────────────
const ConsultationModal = ({ onClose }: { onClose: () => void }) => {
  const [step, setStep]         = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const [submitted, setSubmitted] = useState(false);
  const [textVal, setTextVal]   = useState("");

  const current = STEPS[step];
  const isLast  = step === STEPS.length - 1;
  const progress = ((step) / STEPS.length) * 100;

  const handleOption = (label: string) => {
    const updated = { ...formData, [current.id]: label };
    setFormData(updated);
    if (!isLast) setStep(s => s + 1);
    else confirm(updated);
  };

  const handleText = () => {
    if (!textVal.trim()) return;
    const updated = { ...formData, [current.id]: textVal.trim() };
    setFormData(updated);
    setTextVal("");
    if (!isLast) setStep(s => s + 1);
    else confirm(updated);
  };

  const confirm = (data: FormData) => {
    const msg =
`Hello Dr. Shoaib Aslam, I would like to request a consultation.

👤 *Name:* ${data.name}
🩺 *Concern:* ${data.concern}
⏱️ *Duration:* ${data.duration}
📋 *Consultation Type:* ${data.type}
📱 *Contact Number:* ${data.phone}

Please let me know the next steps.`;

    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  const goBack = () => {
    setTextVal("");
    setStep(s => Math.max(0, s - 1));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div
        className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden"
        style={{ animation: "modalIn 0.25s ease-out" }}
      >

        {/* ── Header ── */}
        <div className="px-6 pt-5 pb-4" style={{ backgroundColor: "rgba(29,97,165)" }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-white/70" />
              <span className="text-white text-xs font-bold uppercase tracking-widest">
                Online Consultation
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Progress bar */}
          {!submitted && (
            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
          {!submitted && (
            <p className="text-white/50 text-[10px] mt-1.5 text-right">
              Step {step + 1} of {STEPS.length}
            </p>
          )}
        </div>

        {/* ── Body ── */}
        <div className="px-6 py-6 min-h-[300px]">

          {submitted ? (
            // ── Confirmation screen ──
            <div className="flex flex-col items-center text-center py-4 gap-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#25D366" }}
              >
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">
                  Request Sent!
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Your consultation request has been sent to Dr. Shoaib's team via WhatsApp. They will respond shortly to confirm your appointment.
                </p>
              </div>
              <div
                className="w-full rounded-xl px-4 py-3 text-left mt-2"
                style={{ backgroundColor: "rgba(29,97,165,0.06)", border: "1px solid rgba(29,97,165,0.12)" }}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Your Summary</p>
                {Object.entries(formData).map(([key, val]) => (
                  <div key={key} className="flex justify-between text-xs py-1 border-b border-slate-100 last:border-0">
                    <span className="text-slate-400 capitalize">{key}</span>
                    <span className="text-slate-700 font-medium text-right max-w-[60%]">{val}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "rgba(29,97,165)" }}
              >
                Close
              </button>
            </div>

          ) : (
            // ── Question step ──
            <div key={step} style={{ animation: "stepIn 0.2s ease-out" }}>
              <p className="text-slate-400 text-xs mb-1">{current.hint}</p>
              <h3 className="font-bold text-slate-900 text-base mb-5 leading-snug">
                {current.question}
              </h3>

              {current.type === "options" && (
                <div className="flex flex-col gap-2">
                  {current.options!.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => handleOption(opt.label)}
                      className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl border border-slate-200 hover:border-primary/40 hover:bg-primary/4 transition-all text-sm font-medium text-slate-700 group"
                    >
                      <span className="text-lg">{opt.emoji}</span>
                      <span className="group-hover:text-primary transition-colors">{opt.label}</span>
                      <ChevronRight className="w-4 h-4 ml-auto text-slate-300 group-hover:text-primary/50 transition-colors" />
                    </button>
                  ))}
                </div>
              )}

              {current.type === "text" && (
                <div className="space-y-3">
                  <input
                    autoFocus
                    type="text"
                    value={textVal}
                    placeholder={current.placeholder}
                    onChange={e => setTextVal(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && handleText()}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none transition-colors text-sm text-slate-800 placeholder:text-slate-300"
                  />
                  <button
                    onClick={handleText}
                    disabled={!textVal.trim()}
                    className="w-full py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 disabled:opacity-40 flex items-center justify-center gap-2"
                    style={{ backgroundColor: "rgba(29,97,165)" }}
                  >
                    {isLast ? (
                      <><WhatsAppIcon className="w-4 h-4" /> Send via WhatsApp</>
                    ) : (
                      <>Continue <ChevronRight className="w-4 h-4" /></>
                    )}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ── Footer — back button + reassurance ── */}
        {!submitted && (
          <div className="px-6 pb-5 flex items-center justify-between">
            <button
              onClick={goBack}
              disabled={step === 0}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 transition-colors disabled:opacity-0"
            >
              <ChevronLeft className="w-3.5 h-3.5" /> Back
            </button>
            <p className="text-[10px] text-slate-300 italic">
              Our team responds promptly to all requests.
            </p>
          </div>
        )}

      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.96) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes stepIn {
          from { opacity: 0; transform: translateX(12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

// ── Navbar ────────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [isOpen,    setIsOpen]    = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showModal && <ConsultationModal onClose={() => setShowModal(false)} />}

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
              href={`https://wa.me/${PHONE}`}
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

          <Link to="/" className="flex flex-col">
            <span className="font-heading text-xl font-bold text-primary">Dr. Shoaib Aslam Kurerr</span>
            <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-widest">
              Orthopaedic & Sports Surgery Specialist
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path} to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

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
              href={`tel:+${PHONE}`}
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
              <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}
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
