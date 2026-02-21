import { useParams, Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowLeft, Clock, BedDouble, PersonStanding } from "lucide-react";

import heroAcl from "@/assets/hero-acl.jpg";
import heroKneeReplacement from "@/assets/hero-knee-replacement.jpg";
import heroShoulder from "@/assets/hero-shoulder.jpg";
import heroTrauma from "@/assets/hero-trauma.jpg";

type HeroKey = "knee-ligament" | "knee-replacement" | "shoulder" | "trauma";

interface ProcedureInfo {
  title: string;
  category: string;
  heroKey: HeroKey;
  tagline: string;
  overview: string[];
  stats: { time: string; stay: string; walking: string };
  symptoms: string[];
  steps: { heading: string; detail: string }[];
  recovery: { timeline: string; details: string[] };
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
    overview: [
      "Replaces the torn Anterior Cruciate Ligament with a high-strength tendon graft.",
      "Performed through 2–3 small keyhole incisions — no large open cuts, minimal scarring.",
      "Restores full stability for sport, pivoting, cutting, and jumping.",
    ],
    stats: { time: "60–90 min", stay: "Same-day / 1 night", walking: "24–48 hours" },
    symptoms: [
      "Audible 'pop' at time of injury with immediate swelling",
      "Knee instability or 'giving way' during walking or sport",
      "Inability to pivot, cut, or jump without pain",
      "MRI-confirmed ACL tear",
    ],
    steps: [
      { heading: "Pre-op Planning", detail: "MRI review, graft selection, associated meniscal injury identified." },
      { heading: "Graft Harvest", detail: "Hamstring tendons harvested through a small incision and prepared." },
      { heading: "Arthroscopic Tunnels", detail: "Bone tunnels drilled at anatomic ACL footprints under camera guidance." },
      { heading: "Graft Fixation", detail: "Graft passed and secured with bioabsorbable or titanium implants." },
    ],
    recovery: {
      timeline: "6–9 months to full sport",
      details: [
        "Week 1–2: Crutches, ice, compression. Gentle range-of-motion exercises.",
        "Week 4–6: Cycling and pool work. Crutches weaned.",
        "Month 3–4: Jogging on flat surfaces. Strengthening programme.",
        "Month 6–9: Sport-specific training. Clearance after functional testing.",
      ],
    },
  },
  "advanced-acl-reconstruction": {
    title: "Advanced ACL Reconstruction",
    category: "Knee Ligament Surgery",
    heroKey: "knee-ligament",
    tagline: "Specialist solutions for revision, complex, and multi-ligament ACL cases.",
    overview: [
      "Addresses failed prior ACL reconstructions, multi-ligament injuries, and complex cases.",
      "Uses allograft or quadriceps tendon when prior tunnels are malpositioned or tissue is unavailable.",
      "Combines ACL, PCL, and collateral reconstruction in a single planned surgical setting.",
    ],
    stats: { time: "90–150 min", stay: "1–2 nights", walking: "24–48 hours (protected)" },
    symptoms: [
      "Persistent instability after a previous ACL reconstruction",
      "Giving-way with daily activities or low-demand sport",
      "MRI showing graft failure or tunnel malposition",
      "Multi-directional instability after high-energy knee trauma",
    ],
    steps: [
      { heading: "3D Planning", detail: "CT and MRI map tunnels, hardware, bone quality, and all ligament injuries." },
      { heading: "Hardware Removal", detail: "Prior implants removed; malpositioned tunnels bone-grafted if required." },
      { heading: "Graft Selection", detail: "Allograft or quadriceps autograft chosen based on available tissue." },
      { heading: "Anatomic Reconstruction", detail: "New tunnels at correct positions; multi-ligament grafts tensioned in sequence." },
    ],
    recovery: {
      timeline: "9–12 months to full activity",
      details: [
        "Week 1–4: Protected weight-bearing, early range-of-motion physiotherapy.",
        "Month 2–3: Aquatic therapy and progressive strengthening.",
        "Month 4–6: Low-impact cardio, proprioceptive training.",
        "Month 8–12: Return-to-play functional testing and clearance.",
      ],
    },
  },
  "arthroscopic-pcl-reconstruction": {
    title: "Arthroscopic PCL Reconstruction",
    category: "Knee Ligament Surgery",
    heroKey: "knee-ligament",
    tagline: "Restoring posterior knee stability through precise arthroscopic technique.",
    overview: [
      "Replaces the torn Posterior Cruciate Ligament — the primary restraint against backward tibial displacement.",
      "Performed arthroscopically through small portals for minimal soft tissue disruption.",
      "Graft fixed at 90° flexion to replicate natural PCL tension.",
    ],
    stats: { time: "60–90 min", stay: "Same-day / 1 night", walking: "Day 2–3 (braced)" },
    symptoms: [
      "Posterior knee pain worsened by descending stairs",
      "Feeling of the knee 'sinking back' when weight-bearing",
      "Positive Posterior Drawer Test on clinical examination",
      "MRI-confirmed PCL tear, often with bone bruising",
    ],
    steps: [
      { heading: "Imaging Assessment", detail: "MRI and stress X-rays grade the PCL injury and identify associated damage." },
      { heading: "Arthroscopic Evaluation", detail: "Meniscal and cartilage injuries addressed concurrently." },
      { heading: "Graft Preparation", detail: "Achilles allograft or hamstring autograft prepared to appropriate diameter." },
      { heading: "Fixation at 90°", detail: "Graft secured at 90° flexion with anterior tibial force for correct tension." },
    ],
    recovery: {
      timeline: "6–9 months to full activity",
      details: [
        "Week 1–4: Knee brace in extension. Gentle range-of-motion exercises.",
        "Week 4–8: Progressive weight-bearing. Hamstring activation prioritized.",
        "Month 3–4: Cycling, swimming, closed-chain strengthening.",
        "Month 5–9: Return to sport after functional testing.",
      ],
    },
  },
  "meniscus-repair": {
    title: "Meniscus Repair",
    category: "Knee Ligament Surgery",
    heroKey: "knee-ligament",
    tagline: "Preserving the knee's natural shock absorber for lifelong joint health.",
    overview: [
      "Repairs torn meniscal cartilage arthroscopically — preserving tissue rather than removing it.",
      "All-inside suture technique approximates tear edges to stimulate biological healing.",
      "Protects the knee from accelerated cartilage wear and early-onset arthritis.",
    ],
    stats: { time: "30–60 min", stay: "Same-day", walking: "Day 1 (protected)" },
    symptoms: [
      "Joint-line pain worsened by squatting or twisting",
      "Clicking, catching, or locking of the knee",
      "Swelling that develops gradually after activity",
      "Positive McMurray's or Thessaly test",
    ],
    steps: [
      { heading: "Diagnostic Arthroscopy", detail: "Tear mapped — location and blood supply determine repair vs trimming." },
      { heading: "Tear Preparation", detail: "Tear edges freshened with a rasp to stimulate healing response." },
      { heading: "Suture Placement", detail: "All-inside self-tensioning devices compress the tear under optimal tension." },
      { heading: "Biological Augmentation", detail: "PRP or fibrin clot applied for complex avascular-zone tears." },
    ],
    recovery: {
      timeline: "4–6 months (repair) · 4–6 weeks (trimming)",
      details: [
        "Trimming: Weight-bearing within days. Return to activity at 4–6 weeks.",
        "Repair Week 1–6: Braced, protected weight-bearing. Flexion to 90°.",
        "Repair Month 2–3: Full weight-bearing, strengthening and proprioception.",
        "Repair Month 4–6: Return to cutting and pivoting sport after clearance.",
      ],
    },
  },
  "mcl-lcl-reconstruction": {
    title: "MCL & LCL Reconstruction",
    category: "Knee Ligament Surgery",
    heroKey: "knee-ligament",
    tagline: "Restoring side-to-side knee stability with precision graft reconstruction.",
    overview: [
      "Reconstructs the medial or lateral collateral ligaments using a tendon graft.",
      "Anatomical footprint fixation restores natural varus/valgus restraint.",
      "Frequently combined with ACL or PCL reconstruction in multi-ligament injuries.",
    ],
    stats: { time: "60–90 min", stay: "Same-day / 1 night", walking: "Day 1–2 (braced)" },
    symptoms: [
      "Pain along the inner (MCL) or outer (LCL) side of the knee",
      "Feeling of the knee buckling inward or outward",
      "Swelling and bruising after valgus or varus injury",
      "Positive varus/valgus stress testing",
    ],
    steps: [
      { heading: "Ligament Grading", detail: "Stress X-rays and MRI define the level and location of injury." },
      { heading: "Graft Preparation", detail: "Autograft or allograft matched to native ligament size and anatomy." },
      { heading: "Anatomic Fixation", detail: "Tunnels or anchors placed at precise femoral and tibial footprints." },
      { heading: "Multi-ligament Tensioning", detail: "All graft tensions coordinated to restore natural knee kinematics." },
    ],
    recovery: {
      timeline: "4–6 months",
      details: [
        "Week 1–4: Hinged brace. Protected weight-bearing and gentle range of motion.",
        "Month 2–3: Brace weaned. Progressive strengthening commenced.",
        "Month 4–6: Return to full activities after functional assessment.",
      ],
    },
  },
  "mpfl-reconstruction": {
    title: "MPFL Reconstruction",
    category: "Knee Ligament Surgery",
    heroKey: "knee-ligament",
    tagline: "Preventing recurrent kneecap dislocation with anatomic ligament restoration.",
    overview: [
      "Replaces the torn MPFL with a gracilis tendon graft to prevent lateral kneecap dislocation.",
      "Femoral tunnel placed at the isometric Schöttle's point under fluoroscopic guidance.",
      "Eliminates the apprehension and instability that limits daily activity.",
    ],
    stats: { time: "45–75 min", stay: "Same-day", walking: "Day 1–2 (brace)" },
    symptoms: [
      "Recurrent kneecap slipping out during activity",
      "Swelling and inner-knee pain after dislocation episodes",
      "Positive Patellar Apprehension Sign on examination",
      "MRI confirming MPFL disruption",
    ],
    steps: [
      { heading: "Fluoroscopic Landmark", detail: "Schöttle's isometric point on femur confirmed under X-ray guidance." },
      { heading: "Gracilis Harvest", detail: "Graft harvested through a small inner thigh incision." },
      { heading: "Patellar Fixation", detail: "Graft secured to medial patella via tunnels or suture anchors." },
      { heading: "Femoral Fixation", detail: "Graft fixed at 30° flexion with interference screw at Schöttle's point." },
    ],
    recovery: {
      timeline: "4–6 months to sport",
      details: [
        "Week 1–2: Straight-leg brace. Quadriceps setting exercises.",
        "Week 3–6: Range-of-motion exercises. Weight-bearing as tolerated.",
        "Month 2–3: Strengthening. Cycling and swimming.",
        "Month 4–6: Return to sport after functional assessment.",
      ],
    },
  },
  "high-tibial-osteotomy": {
    title: "High Tibial Osteotomy (HTO)",
    category: "Knee Preservation & Replacement",
    heroKey: "knee-replacement",
    tagline: "Leg realignment to offload medial arthritis and delay joint replacement.",
    overview: [
      "Surgically realigns the tibia to shift load off the arthritic medial compartment.",
      "Performed with a modern locking plate allowing precise correction and early weight-bearing.",
      "Suited to active patients under 60 with isolated medial arthritis and varus deformity.",
    ],
    stats: { time: "60–90 min", stay: "1–2 nights", walking: "Week 1–2 (crutches)" },
    symptoms: [
      "Inner-knee pain worsened by walking and stairs",
      "Visible bow-leg deformity (varus alignment)",
      "X-ray showing medial compartment joint space narrowing",
      "Active patient seeking to preserve the natural knee",
    ],
    steps: [
      { heading: "Full-Length X-ray Planning", detail: "Angular correction calculated to shift mechanical axis optimally across the tibial width." },
      { heading: "Tibial Osteotomy", detail: "Transverse cut made below the knee, leaving the lateral cortex as a hinge." },
      { heading: "Wedge Opening", detail: "Medial side gradually opened to the calculated correction angle." },
      { heading: "Locking Plate Fixation", detail: "Plate applied to hold correction; void filled with bone graft or substitute." },
    ],
    recovery: {
      timeline: "6 months to full recovery",
      details: [
        "Week 1–2: Crutches with partial weight-bearing.",
        "Week 6–8: Progressive weight-bearing as bone healing confirmed on X-ray.",
        "Month 3–4: Full weight-bearing and light activities.",
        "Month 5–6: Return to sport and manual work.",
      ],
    },
  },
  "total-knee-replacement": {
    title: "Total Knee Replacement",
    category: "Knee Preservation & Replacement",
    heroKey: "knee-replacement",
    tagline: "Eliminating end-stage knee arthritis pain with precision joint arthroplasty.",
    overview: [
      "Resurfaces all three damaged knee compartments with cobalt-chrome and polyethylene prosthetic components.",
      "Recommended for severe arthritis where conservative treatment has comprehensively failed.",
      "Over 95% of implants last 15–20 years, delivering durable, pain-free mobility.",
    ],
    stats: { time: "90–120 min", stay: "3–5 days", walking: "Day 1 with frame" },
    symptoms: [
      "Severe pain at rest and during sleep",
      "Walking distance reduced to under 500 metres",
      "Advanced joint loss on X-ray across multiple compartments",
      "Failed conservative management including injections",
    ],
    steps: [
      { heading: "Pre-op Templating", detail: "Full-length X-rays used to template implant sizes and plan alignment." },
      { heading: "Bone Resection", detail: "Precise cuts on femur, tibia, and patella guided by alignment instruments." },
      { heading: "Trial Components", detail: "Temporary implants verify alignment, stability, and patellar tracking." },
      { heading: "Cementation", detail: "Final components cemented; wound closed in layers." },
    ],
    recovery: {
      timeline: "3–6 months to full recovery",
      details: [
        "Day 1: Walking with a frame. Physiotherapy begins.",
        "Week 3–6: Independent walking, stair climbing.",
        "Month 3: Driving and most daily activities.",
        "Month 6: Unlimited walking. Pain-free function restored.",
      ],
    },
  },
  "partial-knee-replacement": {
    title: "Partial Knee Replacement",
    category: "Knee Preservation & Replacement",
    heroKey: "knee-replacement",
    tagline: "Targeted resurfacing of the damaged compartment — preserving healthy tissue.",
    overview: [
      "Resurfaces only the damaged knee compartment through a smaller incision than total replacement.",
      "Preserves healthy bone, ligaments, and cartilage for a more natural-feeling outcome.",
      "Faster recovery and less blood loss compared to total knee replacement.",
    ],
    stats: { time: "60–90 min", stay: "1–2 nights", walking: "Day 1" },
    symptoms: [
      "Pain localized to the inner or outer side of the knee",
      "Single-compartment arthritis confirmed on X-ray",
      "Intact ACL confirmed clinically and on MRI",
      "Correctable deformity under 15°",
    ],
    steps: [
      { heading: "Patient Selection", detail: "MRI and weight-bearing X-rays confirm single-compartment disease and intact ligaments." },
      { heading: "Minimal Approach", detail: "8–10 cm incision exposing only the affected compartment." },
      { heading: "Bone Preparation", detail: "Only the damaged condyle and plateau resurfaced — minimum bone removal." },
      { heading: "Implant Cementation", detail: "Metal femoral implant and tibial baseplate with polyethylene insert cemented." },
    ],
    recovery: {
      timeline: "6–12 weeks to daily function",
      details: [
        "Day 1: Walking with frame. Less pain than total replacement.",
        "Week 2–3: Most patients walking without aids.",
        "Week 4–6: Return to driving and light work.",
        "Week 8–12: Return to recreational activities and sport.",
      ],
    },
  },
  "arthroscopic-shoulder-capsular-release": {
    title: "Arthroscopic Shoulder Capsular Release",
    category: "Shoulder Surgery",
    heroKey: "shoulder",
    tagline: "Releasing the frozen shoulder capsule to restore full range of motion.",
    overview: [
      "Releases the thickened, contracted shoulder capsule using radiofrequency energy under arthroscopic vision.",
      "Indicated for frozen shoulder that has failed physiotherapy and injections for over 6 months.",
      "Restores full range of motion in the same surgical sitting through keyhole portals.",
    ],
    stats: { time: "30–45 min", stay: "Same-day", walking: "Immediately" },
    symptoms: [
      "Progressive loss of shoulder movement in all planes",
      "Severe end-range pain — especially internal rotation",
      "Symptoms lasting over 6 months despite conservative treatment",
      "Night pain disrupting sleep",
    ],
    steps: [
      { heading: "Diagnostic Arthroscopy", detail: "Thickened capsule visualised and contracture distribution mapped." },
      { heading: "Anterior Capsular Release", detail: "Rotator interval and anterior capsule divided with radiofrequency probe." },
      { heading: "Inferior & Posterior Release", detail: "Axillary recess and posterior capsule released systematically." },
      { heading: "Manipulation", detail: "Shoulder taken through full range of motion to break residual adhesions." },
    ],
    recovery: {
      timeline: "6–12 weeks to full functional motion",
      details: [
        "Day 1: Aggressive physiotherapy begins to maintain intraoperative gains.",
        "Week 1–4: Daily physiotherapy — heat, stretching, active assisted exercises.",
        "Month 2–3: Full functional motion restored in the majority of patients.",
        "Month 3+: Strengthening and return to all activities.",
      ],
    },
  },
  "arthroscopic-bankart-repair": {
    title: "Arthroscopic Bankart Repair",
    category: "Shoulder Surgery",
    heroKey: "shoulder",
    tagline: "Reattaching the shoulder labrum to prevent recurrent dislocation.",
    overview: [
      "Reattaches the torn glenoid labrum using 3–4 suture anchors through keyhole portals.",
      "Restores the natural socket 'bumper' that prevents anterior shoulder dislocation.",
      "Over 90% success rate — allowing return to sport and contact activities.",
    ],
    stats: { time: "45–75 min", stay: "Same-day", walking: "Immediately" },
    symptoms: [
      "Recurrent shoulder slipping out or subluxing",
      "Apprehension when arm is raised and rotated outward",
      "Instability during overhead sport or contact activities",
      "MRI/CT arthrogram confirming labral tear",
    ],
    steps: [
      { heading: "Arthroscopic Assessment", detail: "Tear extent, Hill-Sachs lesion, and glenoid bone loss quantified." },
      { heading: "Labral Mobilization", detail: "Torn labrum elevated fully from the glenoid neck." },
      { heading: "Anchor Insertion", detail: "3–4 suture anchors placed along anterior glenoid rim." },
      { heading: "Labral Reattachment", detail: "Sutures passed through labrum and tied — restoring bumper effect." },
    ],
    recovery: {
      timeline: "4–6 months to return to sport",
      details: [
        "Week 1–4: Sling immobilization. Pendulum and elbow exercises.",
        "Week 4–8: Sling removed. Active-assisted range of motion begins.",
        "Month 3–4: Rotator cuff and scapular strengthening.",
        "Month 4–6: Sport-specific training and contact sport clearance.",
      ],
    },
  },
  "arthroscopic-rotator-cuff-repair": {
    title: "Arthroscopic Rotator Cuff Repair",
    category: "Shoulder Surgery",
    heroKey: "shoulder",
    tagline: "Reattaching torn shoulder tendons to restore strength and eliminate pain.",
    overview: [
      "Reattaches the torn cuff tendon to its bony footprint using arthroscopic suture anchors.",
      "Double-row repair technique maximizes tendon-to-bone contact for optimal healing.",
      "Eliminates chronic night pain and the progressive weakness caused by cuff deficiency.",
    ],
    stats: { time: "60–90 min", stay: "Same-day", walking: "Immediately" },
    symptoms: [
      "Dull aching shoulder pain — worse at night and with overhead activity",
      "Progressive weakness when lifting or reaching",
      "Positive Jobe's Empty Can test — supraspinatus weakness",
      "MRI confirming full-thickness rotator cuff tear",
    ],
    steps: [
      { heading: "Subacromial Inspection", detail: "Tear size and tendon mobility assessed. Bone spurs removed if required." },
      { heading: "Tendon Mobilization", detail: "Scar tissue released to allow tendon to reach footprint without tension." },
      { heading: "Footprint Preparation", detail: "Greater tuberosity decorticated to create a vascular healing bed." },
      { heading: "Double-Row Repair", detail: "Medial and lateral anchor rows placed; sutures draw tendon firmly onto bone." },
    ],
    recovery: {
      timeline: "4–6 months to full strength",
      details: [
        "Week 1–6: Arm sling. Pendulum exercises only — repair must be protected.",
        "Week 6–12: Active-assisted range of motion. Sling discontinued.",
        "Month 3–4: Active rotator cuff and deltoid strengthening.",
        "Month 4–6: Full strength. Return to manual work and sport.",
      ],
    },
  },
  "shoulder-replacement": {
    title: "Shoulder Replacement",
    category: "Shoulder Surgery",
    heroKey: "shoulder",
    tagline: "Precision shoulder arthroplasty for end-stage arthritis and irreparable tears.",
    overview: [
      "Replaces the damaged shoulder ball and socket with prosthetic components tailored to the patient.",
      "Reverse replacement is used when the rotator cuff is massively torn — transferring function to the deltoid.",
      "Eliminates constant pain and restores overhead function lost to advanced arthritis.",
    ],
    stats: { time: "90–120 min", stay: "2–3 nights", walking: "Immediately" },
    symptoms: [
      "Severe constant shoulder pain unresponsive to injections and medication",
      "Less than 90° elevation of the arm",
      "Advanced glenohumeral joint space loss on X-ray",
      "Irreparable rotator cuff tear with inability to elevate the arm",
    ],
    steps: [
      { heading: "CT 3D Planning", detail: "Pre-operative templating determines humeral and glenoid implant sizing." },
      { heading: "Deltopectoral Approach", detail: "Anterior approach through the deltopectoral interval — minimal muscle disruption." },
      { heading: "Humeral Preparation", detail: "Humeral head resected; stem reamed to correct angle." },
      { heading: "Glenoid/Baseplate Fixation", detail: "Polyethylene glenoid (anatomic) or glenosphere baseplate (reverse) fixed." },
    ],
    recovery: {
      timeline: "3–6 months to full function",
      details: [
        "Week 1–6: Arm sling. Passive range-of-motion physiotherapy.",
        "Week 6–12: Active exercises begin. Deltoid strengthening (reverse).",
        "Month 3–6: Full recovery. Lifting restrictions gradually removed.",
      ],
    },
  },
  "trauma-management": {
    title: "Trauma & Fracture Management",
    category: "Orthopaedic Trauma",
    heroKey: "trauma",
    tagline: "Expert surgical fixation for acute fractures and complex musculoskeletal injuries.",
    overview: [
      "Covers the full spectrum of orthopaedic trauma using minimally invasive fixation (MIPO) wherever possible.",
      "ATLS-guided assessment ensures life-threatening injuries are managed before definitive fracture surgery.",
      "Intramedullary nails, locking plates, and cannulated screws restore anatomy and enable early mobilization.",
    ],
    stats: { time: "Varies by injury", stay: "1–5 days", walking: "As fixation allows" },
    symptoms: [
      "Pain, swelling, and deformity at the injury site",
      "Inability to bear weight on the injured limb",
      "Neurovascular compromise distal to the fracture",
      "Open fracture or major joint dislocation",
    ],
    steps: [
      { heading: "ATLS Assessment", detail: "Life-threatening injuries identified and treated first. Fractures splinted." },
      { heading: "Imaging & Planning", detail: "X-ray and CT define fracture pattern. Implant templating performed." },
      { heading: "Surgical Fixation", detail: "Nail, plate, or external fixator selected based on fracture pattern." },
      { heading: "Early Mobilization", detail: "Physiotherapy begins as soon as fixation stability allows." },
    ],
    recovery: {
      timeline: "6 weeks (simple) – 12 months (complex)",
      details: [
        "Immediate: Analgesia, elevation, DVT prophylaxis.",
        "Week 1–4: Protected mobilization. Physiotherapy commences early.",
        "Month 2–6: Progressive loading confirmed by X-ray.",
        "Month 6–12: Full return to work and activities for complex cases.",
      ],
    },
  },
};

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 shrink-0 mt-0.5">
    <circle cx="10" cy="10" r="9" stroke="hsl(var(--primary))" strokeWidth="1.5" />
    <path d="M6.5 10.5l2.5 2.5 4.5-5" stroke="hsl(var(--primary))" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AlertIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 shrink-0 mt-0.5">
    <circle cx="10" cy="10" r="9" stroke="hsl(var(--accent))" strokeWidth="1.5" />
    <line x1="10" y1="6" x2="10" y2="11" stroke="hsl(var(--accent))" strokeWidth="1.75" strokeLinecap="round" />
    <circle cx="10" cy="13.5" r="0.75" fill="hsl(var(--accent))" />
  </svg>
);

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const procedure = slug ? procedures[slug] : undefined;

  if (!procedure) {
    return (
      <main>
        <section className="section-padding text-center">
          <div className="container-wide">
            <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Procedure Not Found</h1>
            <p className="text-muted-foreground mb-8">The requested procedure page could not be found.</p>
            <Link to="/services" className="text-primary font-medium hover:underline">← Back to Services</Link>
          </div>
        </section>
      </main>
    );
  }

  const whatsappUrl = `https://wa.me/923002278796?text=Hello%20Dr.%20Shoaib%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(procedure.title)}%20and%20would%20like%20to%20discuss%20my%20case.`;

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[360px] flex items-end overflow-hidden">
        <img
          src={heroImages[procedure.heroKey]}
          alt={procedure.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
        <div className="relative z-10 container-wide px-4 md:px-8 pb-10 w-full">
          <Link to="/services" className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-xs mb-5 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> All Procedures
          </Link>
          <p className="text-white/55 text-xs uppercase tracking-widest mb-2 font-medium">{procedure.category}</p>
          <h1 className="font-heading text-2xl md:text-4xl font-bold text-white leading-tight max-w-2xl mb-2">
            {procedure.title}
          </h1>
          <p className="text-white/65 text-sm md:text-base max-w-xl">{procedure.tagline}</p>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <div className="bg-foreground text-background">
        <div className="container-wide px-4 md:px-8">
          <div className="grid grid-cols-3 divide-x divide-background/10">
            {[
              { icon: <Clock className="w-4 h-4" />, label: "Surgery Time", value: procedure.stats.time },
              { icon: <BedDouble className="w-4 h-4" />, label: "Hospital Stay", value: procedure.stats.stay },
              { icon: <PersonStanding className="w-4 h-4" />, label: "Walking", value: procedure.stats.walking },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 py-4 px-3 sm:px-6 text-center sm:text-left">
                <span className="text-background/40 shrink-0">{stat.icon}</span>
                <div>
                  <p className="text-background/45 text-xs uppercase tracking-wider leading-none mb-0.5">{stat.label}</p>
                  <p className="text-background font-semibold text-xs sm:text-sm leading-tight">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl mx-auto space-y-12">

          {/* About + Symptoms — side by side */}
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6">
              {/* About */}
              <div className="bg-card rounded-2xl p-6 card-shadow border border-border/50">
                <h2 className="font-heading text-lg font-bold text-foreground mb-4">About this Procedure</h2>
                <ul className="space-y-3">
                  {procedure.overview.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckIcon />
                      <span className="text-muted-foreground text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* When Needed */}
              <div className="bg-card rounded-2xl p-6 card-shadow border border-border/50">
                <h2 className="font-heading text-lg font-bold text-foreground mb-4">When Is It Needed?</h2>
                <ul className="space-y-3">
                  {procedure.symptoms.map((s, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <AlertIcon />
                      <span className="text-muted-foreground text-sm leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Steps */}
          <ScrollReveal>
            <div className="bg-card rounded-2xl p-6 md:p-8 card-shadow border border-border/50">
              <h2 className="font-heading text-lg font-bold text-foreground mb-6">Procedure Steps</h2>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                {procedure.steps.map((step, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-0.5">{step.heading}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Recovery */}
          <ScrollReveal>
            <div className="bg-card rounded-2xl p-6 md:p-8 card-shadow border border-border/50">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <h2 className="font-heading text-lg font-bold text-foreground">Recovery</h2>
                <span className="inline-flex items-center gap-1.5 bg-secondary text-foreground text-xs font-semibold px-3 py-1.5 rounded-full w-fit">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  {procedure.recovery.timeline}
                </span>
              </div>
              <ul className="space-y-2.5">
                {procedure.recovery.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckIcon />
                    <span className="text-muted-foreground text-sm leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal>
            <div className="bg-primary rounded-2xl p-8 text-center">
              <h3 className="font-heading font-bold text-primary-foreground text-xl mb-2">
                Consult with Dr Shoaib Aslam Kurerr
              </h3>
              <p className="text-primary-foreground/70 text-sm mb-6 max-w-md mx-auto leading-relaxed">
                Discuss whether this procedure is right for your condition at Midwest Hospital, Bahawalpur — Mon to Sat, 9 AM – 11 PM.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
                  View All Procedures
                </Link>
              </div>
              <p className="text-primary-foreground/40 text-xs mt-4">+92 300 2278796</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;
