import { useParams, Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowLeft, Clock, BedDouble, PersonStanding } from "lucide-react";

// ─── Asset Imports (Mapped to your provided filenames) ──────────────────────
import heroAcl from "@/assets/hero-acl.jpg";
import heroKneeReplacement from "@/assets/hero-knee-replacement.jpg";
import heroShoulder from "@/assets/hero-shoulder.jpg";
import heroTrauma from "@/assets/hero-trauma.jpg";

// Sub-Procedure Images
import imgAcl from "@/assets/Acl.jpg";
import imgAdvancedAcl from "@/assets/advanced Acl.jpg";
import imgBankart from "@/assets/arthroscopic-bankart-repair.jpg";
import imgRotatorCuff from "@/assets/arthroscopic-rotator-cuff-repair.jpg";
import imgCapsularRelease from "@/assets/arthroscopic-shoulder-capsular-release.jpg";
import imgHto from "@/assets/hto.jpg";
import imgMeniscus from "@/assets/maniscus repair.jpg";
import imgMclLcl from "@/assets/mcl & lcl.jpg";
import imgMpfl from "@/assets/mpfl.jpg";
import imgPartialKnee from "@/assets/partial-knee-replacement.jpg";
import imgPcl from "@/assets/pcl.jpg";
import imgShoulderReplace from "@/assets/shoulder-replacement.jpg";
import imgTotalKnee from "@/assets/total knee replacement.jpg";
import imgTraumaManage from "@/assets/trauma-management.jpg";

type HeroKey = "knee-ligament" | "knee-replacement" | "shoulder" | "trauma";

interface ProcedureInfo {
  title: string;
  category: string;
  heroKey: HeroKey;
  tagline: string;
  introduction: string;
  secondaryImage: string;
  overview: string[];
  stats: { time: string; stay: string; walking: string };
  steps: { heading: string; detail: string }[];
}

const heroImages: Record<HeroKey, string> = {
  "knee-ligament": heroAcl,
  "knee-replacement": heroKneeReplacement,
  shoulder: heroShoulder,
  trauma: heroTrauma,
};

const procedures: Record<string, ProcedureInfo> = {
  "arthroscopic-acl-reconstruction": {
    title: "Arthroscopic ACL Reconstruction",
    category: "Knee Ligament Surgery",
    heroKey: "knee-ligament",
    tagline: "Minimally invasive keyhole surgery to restore full knee stability.",
    introduction: "The ACL is the primary stabiliser of the knee — essential for every twist, pivot, and change of direction. Arthroscopic ACL Reconstruction replaces the torn ligament with a strong tendon graft through tiny keyhole incisions, restoring full stability without the trauma of open surgery. Dr Shoaib Aslam Kurerr performs this procedure using internationally certified techniques.",
    secondaryImage: imgAcl,
    overview: [
      "Replaces the torn ACL with a high-strength tendon graft.",
      "Performed through 2–3 small keyhole portals — minimal scarring.",
      "Restores full stability for sport, pivoting, and jumping.",
    ],
    stats: { time: "60–90 min", stay: "Same-day / 1 night", walking: "24–48 hours" },
    steps: [
      { heading: "Pre-op Planning", detail: "MRI review and graft selection." },
      { heading: "Graft Harvest", detail: "Hamstring or patella tendon prepared for reconstruction." },
      { heading: "Arthroscopic Tunnels", detail: "Bone tunnels drilled at anatomic footprints." },
      { heading: "Graft Fixation", detail: "Graft secured with bioabsorbable or titanium implants." },
    ],
  },
  "advanced-acl-reconstruction": {
    title: "Advanced ACL Reconstruction",
    category: "Knee Ligament Surgery",
    heroKey: "knee-ligament",
    tagline: "Specialist solutions for revision and complex ACL cases.",
    introduction: "When a standard ACL reconstruction has failed or multiple ligaments are injured, advanced techniques are required. This involves specialized graft strategies and staged surgical planning to address failed prior reconstructions or malpositioned tunnels.",
    secondaryImage: imgAdvancedAcl,
    overview: [
      "Addresses failed prior ACL reconstructions.",
      "Uses allograft or quadriceps tendon for robust stability.",
      "Combines ACL, PCL, and collateral reconstruction if required.",
    ],
    stats: { time: "90–150 min", stay: "1–2 nights", walking: "24–48 hours (protected)" },
    steps: [
      { heading: "3D Planning", detail: "CT and MRI map existing tunnels and hardware." },
      { heading: "Hardware Removal", detail: "Prior implants removed and tunnels bone-grafted if needed." },
      { heading: "Graft Selection", detail: "High-strength tissue chosen based on prior failures." },
      { heading: "Anatomic Reconstruction", detail: "New tunnels placed at correct mechanical positions." },
    ],
  },
  "arthroscopic-pcl-reconstruction": {
    title: "Arthroscopic PCL Reconstruction",
    category: "Knee Ligament Surgery",
    heroKey: "knee-ligament",
    tagline: "Restoring posterior knee stability through precise technique.",
    introduction: "The Posterior Cruciate Ligament (PCL) prevents the shin bone from shifting backward. PCL injuries cause significant disability on stairs and slopes. Arthroscopic reconstruction restores stability through keyhole portals, avoiding extensive tissue disruption.",
    secondaryImage: imgPcl,
    overview: [
      "Replaces the PCL to prevent backward tibial displacement.",
      "Performed arthroscopically for minimal tissue disruption.",
      "Graft tensioned at 90° to replicate natural knee mechanics.",
    ],
    stats: { time: "60–90 min", stay: "Same-day / 1 night", walking: "Day 2–3 (braced)" },
    steps: [
      { heading: "Imaging Assessment", detail: "Stress X-rays grade the injury and identify associated damage." },
      { heading: "Evaluation", detail: "Meniscal and cartilage injuries addressed concurrently." },
      { heading: "Graft Preparation", detail: "Allograft or autograft prepared to specific diameter." },
      { heading: "Anatomic Fixation", detail: "Graft secured with anterior tibial force for correct tension." },
    ],
  },
  "meniscus-repair": {
    title: "Meniscus Repair",
    category: "Knee Ligament Surgery",
    heroKey: "knee-ligament",
    tagline: "Preserving the knee's natural shock absorber.",
    introduction: "The menisci distribute load and protect the joint surface. Modern arthroscopic repair preserves this critical tissue wherever possible, promoting biological healing rather than tissue removal, protecting the long-term health of the joint.",
    secondaryImage: imgMeniscus,
    overview: [
      "Repairs torn cartilage arthroscopically — preserving vital tissue.",
      "All-inside suture technique stimulates biological healing.",
      "Protects the knee from early-onset arthritis.",
    ],
    stats: { time: "30–60 min", stay: "Same-day", walking: "Day 1 (protected)" },
    steps: [
      { heading: "Diagnostic Scan", detail: "Tear location and blood supply determine repair strategy." },
      { heading: "Tear Preparation", detail: "Tear edges freshened to stimulate a healing response." },
      { heading: "Suture Placement", detail: "Specialized devices compress the tear under optimal tension." },
      { heading: "Biological Augmentation", detail: "PRP applied for complex avascular-zone repairs." },
    ],
  },
  "mcl-lcl-reconstruction": {
    title: "MCL & LCL Reconstruction",
    category: "Knee Ligament Surgery",
    heroKey: "knee-ligament",
    tagline: "Restoring side-to-side knee stability with precision grafts.",
    introduction: "High-grade tears of the collateral ligaments require surgical reconstruction to prevent buckling. Anatomical graft reconstruction recreates the native ligament footprints for optimal biomechanical outcomes.",
    secondaryImage: imgMclLcl,
    overview: [
      "Reconstructs the medial or lateral ligaments using tendon grafts.",
      "Anatomical fixation restores natural varus/valgus restraint.",
      "Often combined with ACL/PCL surgery for multi-ligament injuries.",
    ],
    stats: { time: "60–90 min", stay: "Same-day / 1 night", walking: "Day 1–2 (braced)" },
    steps: [
      { heading: "Ligament Grading", detail: "Stress X-rays define the level and location of the injury." },
      { heading: "Graft Preparation", detail: "Matched to native ligament size for stability." },
      { heading: "Anatomic Fixation", detail: "Tunnels placed at precise femoral and tibial footprints." },
      { heading: "Multi-ligament Sync", detail: "Coordinated tensioning to restore natural kinetics." },
    ],
  },
  "mpfl-reconstruction": {
    title: "MPFL Reconstruction",
    category: "Knee Ligament Surgery",
    heroKey: "knee-ligament",
    tagline: "Preventing recurrent kneecap dislocation.",
    introduction: "The MPFL tethers the kneecap to the inner side of the femur. Reconstruction replaces the torn ligament with a tendon graft, restoring reliable patellar stability and preventing progressive cartilage damage.",
    secondaryImage: imgMpfl,
    overview: [
      "Replaces the MPFL with a gracilis graft to prevent dislocation.",
      "Uses fluoroscopic guidance for precise isometric placement.",
      "Eliminates the 'apprehension' during daily activity.",
    ],
    stats: { time: "45–75 min", stay: "Same-day", walking: "Day 1–2 (brace)" },
    steps: [
      { heading: "Landmark Confirmation", detail: "Isometric point on femur confirmed under X-ray." },
      { heading: "Gracilis Harvest", detail: "Graft harvested through a small inner thigh incision." },
      { heading: "Patellar Fixation", detail: "Graft secured to medial patella via tunnels." },
      { heading: "Final Tensioning", detail: "Fixed at 30° flexion for optimal stability." },
    ],
  },
  "high-tibial-osteotomy": {
    title: "High Tibial Osteotomy (HTO)",
    category: "Knee Preservation",
    heroKey: "knee-replacement",
    tagline: "Leg realignment to offload arthritis and delay replacement.",
    introduction: "HTO is a joint-preserving alternative to replacement for active patients. By realigning the tibia, we shift the load onto healthier cartilage, reducing pain and allowing for continued active life.",
    secondaryImage: imgHto,
    overview: [
      "Realigns the tibia to shift load off arthritic compartments.",
      "Modern locking plates allow for early weight-bearing.",
      "Best suited for active patients under 60 with isolated arthritis.",
    ],
    stats: { time: "60–90 min", stay: "1–2 nights", walking: "Week 1–2 (crutches)" },
    steps: [
      { heading: "3D Planning", detail: "Angular correction calculated via full-length X-rays." },
      { heading: "Tibial Osteotomy", detail: "Transverse cut made below the knee joint." },
      { heading: "Wedge Opening", detail: "Medial side opened to the calculated correction angle." },
      { heading: "Plate Fixation", detail: "Locking plate holds the new alignment securely." },
    ],
  },
  "total-knee-replacement": {
    title: "Total Knee Replacement",
    category: "Knee Replacement",
    heroKey: "knee-replacement",
    tagline: "Eliminating end-stage arthritis pain with precision.",
    introduction: "Total Knee Replacement replaces all three compartments of the damaged joint with precision-engineered metal and polyethylene components, offering a definitive elimination of pain for severe arthritis.",
    secondaryImage: imgTotalKnee,
    overview: [
      "Resurfaces the entire joint with cobalt-chrome components.",
      "Recommended for severe, end-stage arthritis.",
      "Over 95% of implants last 15–20 years.",
    ],
    stats: { time: "90–120 min", stay: "3–5 days", walking: "Day 1 with frame" },
    steps: [
      { heading: "Pre-op Templating", detail: "X-rays determine implant sizes and alignment." },
      { heading: "Bone Resection", detail: "Damaged surfaces removed using alignment instruments." },
      { heading: "Trial Verification", detail: "Temporary implants used to check stability and tracking." },
      { heading: "Cementation", detail: "Final components bonded to the bone." },
    ],
  },
  "partial-knee-replacement": {
    title: "Partial Knee Replacement",
    category: "Knee Replacement",
    heroKey: "knee-replacement",
    tagline: "Targeted resurfacing — preserving healthy tissue.",
    introduction: "For arthritis confined to a single compartment, partial replacement offers faster recovery and a more natural-feeling result by leaving healthy bone and ligaments untouched.",
    secondaryImage: imgPartialKnee,
    overview: [
      "Resurfaces only the damaged portion of the knee.",
      "Smaller incision and faster recovery than total replacement.",
      "Results in a knee that feels more 'natural' to the patient.",
    ],
    stats: { time: "60–90 min", stay: "1–2 nights", walking: "Day 1" },
    steps: [
      { heading: "Patient Selection", detail: "MRI confirms single-compartment disease." },
      { heading: "Minimal Approach", detail: "Small incision focused on the affected area." },
      { heading: "Bone Prep", detail: "Only the damaged condyle is resurfaced." },
      { heading: "Fixation", detail: "Metal and polyethylene components cemented in place." },
    ],
  },
  "arthroscopic-shoulder-capsular-release": {
    title: "Shoulder Capsular Release",
    category: "Shoulder Surgery",
    heroKey: "shoulder",
    tagline: "Releasing the frozen shoulder capsule.",
    introduction: "Adhesive capsulitis (Frozen Shoulder) traps the joint in stiffness. When physiotherapy fails, arthroscopic release systematically frees the contracted capsule to restore full movement.",
    secondaryImage: imgCapsularRelease,
    overview: [
      "Releases the shoulder capsule using radiofrequency energy.",
      "Restores full range of motion in a single procedure.",
      "Highly effective for cases failing conservative treatment.",
    ],
    stats: { time: "30–45 min", stay: "Same-day", walking: "Immediately" },
    steps: [
      { heading: "Diagnosis", detail: "Thickened capsule mapped under direct vision." },
      { heading: "Capsular Division", detail: "Contracted tissue divided with a radiofrequency probe." },
      { heading: "Global Release", detail: "Systematic release of anterior and posterior adhesions." },
      { heading: "Manipulation", detail: "Gentle movement to confirm full range restored." },
    ],
  },
  "arthroscopic-bankart-repair": {
    title: "Arthroscopic Bankart Repair",
    category: "Shoulder Surgery",
    heroKey: "shoulder",
    tagline: "Reattaching the labrum to prevent dislocation.",
    introduction: "A dislocation tears the labrum—the socket's bumper. Repair reattaches this tissue using suture anchors through keyhole portals, restoring the confidence to return to sports.",
    secondaryImage: imgBankart,
    overview: [
      "Reattaches the torn labrum using suture anchors.",
      "Prevents recurrent anterior shoulder dislocations.",
      "Over 90% success rate for return to contact sports.",
    ],
    stats: { time: "45–75 min", stay: "Same-day", walking: "Immediately" },
    steps: [
      { heading: "Assessment", detail: "Tear extent and bone loss quantified arthroscopically." },
      { heading: "Mobilization", detail: "Torn labrum elevated from the glenoid neck." },
      { heading: "Anchor Placement", detail: "Suture anchors placed along the glenoid rim." },
      { heading: "Reattachment", detail: "Labrum tied down to restore the bumper effect." },
    ],
  },
  "arthroscopic-rotator-cuff-repair": {
    title: "Rotator Cuff Repair",
    category: "Shoulder Surgery",
    heroKey: "shoulder",
    tagline: "Reattaching torn tendons to restore strength.",
    introduction: "Rotator cuff tears cause chronic pain and weakness. Arthroscopic repair reattaches the tendon to its bony footprint using suture anchors, eliminating night pain and restoring power.",
    secondaryImage: imgRotatorCuff,
    overview: [
      "Reattaches tendons using arthroscopic suture anchors.",
      "Double-row technique maximizes healing surface area.",
      "Eliminates chronic pain and restores overhead function.",
    ],
    stats: { time: "60–90 min", stay: "Same-day", walking: "Immediately" },
    steps: [
      { heading: "Inspection", detail: "Tear size and tendon mobility assessed." },
      { heading: "Mobilization", detail: "Scar tissue released to allow tension-free repair." },
      { heading: "Preparation", detail: "Bone surface prepared to create a healing bed." },
      { heading: "Double-Row Repair", detail: "Anchors draw tendon firmly onto the bone." },
    ],
  },
  "shoulder-replacement": {
    title: "Shoulder Replacement",
    category: "Shoulder Surgery",
    heroKey: "shoulder",
    tagline: "Precision arthroplasty for advanced arthritis.",
    introduction: "For end-stage arthritis, shoulder replacement is the definitive solution. We offer both anatomic and reverse designs depending on the state of the patient's rotator cuff.",
    secondaryImage: imgShoulderReplace,
    overview: [
      "Replaces the ball and socket with prosthetic components.",
      "Reverse design used for massive, irreparable cuff tears.",
      "Restores function lost to advanced joint degeneration.",
    ],
    stats: { time: "90–120 min", stay: "2–3 nights", walking: "Immediately" },
    steps: [
      { heading: "3D Planning", detail: "CT planning determines sizing and alignment." },
      { heading: "Access", detail: "Deltopectoral approach for minimal muscle disruption." },
      { heading: "Prep", detail: "Humeral and glenoid surfaces shaped for implants." },
      { heading: "Fixation", detail: "Final components secured; tracking verified." },
    ],
  },
  "trauma-management": {
    title: "Trauma & Fracture Management",
    category: "Orthopaedic Trauma",
    heroKey: "trauma",
    tagline: "Expert surgical fixation for acute fractures.",
    introduction: "Quality initial surgical fixation determines long-term outcomes. We apply modern minimally invasive techniques and locking plates to restore anatomy and enable early mobilisation.",
    secondaryImage: imgTraumaManage,
    overview: [
      "Comprehensive care for complex and simple fractures.",
      "Uses intramedullary nails and locking plate technology.",
      "Focused on restoring anatomy for early mobilization.",
    ],
    stats: { time: "Varies by injury", stay: "1–5 days", walking: "As fixation allows" },
    steps: [
      { heading: "Assessment", detail: "Fracture pattern defined via X-ray and CT." },
      { heading: "Planning", detail: "Implant templating and approach selection." },
      { heading: "Fixation", detail: "Surgical stabilization using plates, nails, or screws." },
      { heading: "Rehabilitation", detail: "Early mobilization protocol to prevent stiffness." },
    ],
  },
};

// ─── Icons ────────────────────────────────────────────────────────────────────

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 shrink-0 mt-0.5">
    <circle cx="10" cy="10" r="9" stroke="hsl(var(--primary))" strokeWidth="1.5" />
    <path d="M6.5 10.5l2.5 2.5 4.5-5" stroke="hsl(var(--primary))" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const procedure = slug ? procedures[slug] : undefined;

  if (!procedure) {
    return (
      <main>
        <section className="section-padding text-center">
          <div className="container-wide">
            <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Procedure Not Found</h1>
            <p className="text-muted-foreground mb-8">The requested procedure could not be found.</p>
            <Link to="/services" className="text-primary font-medium hover:underline">← Back to Services</Link>
          </div>
        </section>
      </main>
    );
  }

  const whatsappUrl = `https://wa.me/923002278796?text=Hello%20Dr.%20Shoaib%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(procedure.title)}%20and%20would%20like%20to%20discuss%20my%20case.`;

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[380px] flex items-end overflow-hidden">
        <img
          src={heroImages[procedure.heroKey]}
          alt={procedure.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
        <div className="relative z-10 container-wide px-4 md:px-8 pb-10 w-full">
          <Link to="/services" className="inline-flex items-center gap-1.5 text-white/55 hover:text-white text-xs mb-5 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> All Procedures
          </Link>
          <p className="text-white/50 text-xs uppercase tracking-widest mb-2 font-medium">{procedure.category}</p>
          <h1 className="font-heading text-2xl md:text-[2.5rem] font-bold text-white leading-tight max-w-2xl mb-2">
            {procedure.title}
          </h1>
          <p className="text-white/65 text-sm md:text-base max-w-xl">{procedure.tagline}</p>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────────────────── */}
      <div className="bg-foreground text-background">
        <div className="container-wide px-4 md:px-8">
          <div className="grid grid-cols-3 divide-x divide-background/10">
            {[
              { icon: <Clock className="w-4 h-4" />, label: "Surgery Time", value: procedure.stats.time },
              { icon: <BedDouble className="w-4 h-4" />, label: "Hospital Stay", value: procedure.stats.stay },
              { icon: <PersonStanding className="w-4 h-4" />, label: "Walking", value: procedure.stats.walking },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 py-4 px-3 sm:px-6 text-center sm:text-left">
                <span className="text-background/35 shrink-0">{stat.icon}</span>
                <div>
                  <p className="text-background/40 text-xs uppercase tracking-wider leading-none mb-0.5">{stat.label}</p>
                  <p className="text-background font-semibold text-xs sm:text-sm leading-tight">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Introduction + Secondary Image ───────────────────────────────── */}
      <section className="section-padding pb-0">
        <div className="container-wide max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
              <div>
                <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">About this Procedure</p>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-snug mb-4">
                  What is {procedure.title}?
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {procedure.introduction}
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden card-shadow">
                <img
                  src={procedure.secondaryImage}
                  alt={`${procedure.title} visual`}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Key Points + Procedure Steps ─────────────────────────────────── */}
      <section className="section-padding pt-0">
        <div className="container-wide max-w-5xl mx-auto space-y-8">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Key Points */}
              <div className="bg-card rounded-2xl p-6 card-shadow border border-border/50 space-y-3">
                <h3 className="font-heading text-base font-bold text-foreground mb-1">Key Points</h3>
                {procedure.overview.map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckIcon />
                    <span className="text-muted-foreground text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              {/* Procedure Steps */}
              <div className="bg-card rounded-2xl p-6 card-shadow border border-border/50">
                <h3 className="font-heading text-base font-bold text-foreground mb-5">Procedure Steps</h3>
                <div className="space-y-4">
                  {procedure.steps.map((step, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{step.heading}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ── CTA ────────────────────────────────────────────────────── */}
          <ScrollReveal>
            <div className="bg-primary rounded-2xl p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="font-heading font-bold text-primary-foreground text-xl mb-1">
                    Consult with Dr Shoaib Aslam Kurerr
                  </h3>
                  <p className="text-primary-foreground/65 text-sm max-w-md">
                    Midwest Hospital, Bahawalpur · Monday – Saturday · 9 AM – 11 PM
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white/90 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" style={{ color: "#25D366" }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Book via WhatsApp
                  </a>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 text-primary-foreground/80 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white/10 transition-colors"
                  >
                    All Procedures
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;