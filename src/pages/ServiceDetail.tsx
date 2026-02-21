import { useParams, Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowLeft, Clock, BedDouble, PersonStanding } from "lucide-react";

import heroAcl from "@/assets/hero-acl.jpg";
import heroKneeReplacement from "@/assets/hero-knee-replacement.jpg";
import heroShoulder from "@/assets/hero-shoulder.jpg";
import heroTrauma from "@/assets/hero-trauma.jpg";

// ─── SVG Diagrams ─────────────────────────────────────────────────────────────

const KneeJointDiagram = () => (
  <svg viewBox="0 0 320 360" className="w-full max-w-xs mx-auto" aria-label="Knee joint anatomy diagram">
    <defs>
      <linearGradient id="boneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(210,40%,88%)" />
        <stop offset="100%" stopColor="hsl(210,30%,78%)" />
      </linearGradient>
      <linearGradient id="cartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="hsl(190,60%,80%)" />
        <stop offset="100%" stopColor="hsl(190,55%,70%)" />
      </linearGradient>
      <linearGradient id="ligGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(25,85%,60%)" />
        <stop offset="100%" stopColor="hsl(25,75%,50%)" />
      </linearGradient>
    </defs>
    <ellipse cx="160" cy="80" rx="55" ry="65" fill="url(#boneGrad)" stroke="hsl(210,30%,65%)" strokeWidth="1.5"/>
    <ellipse cx="125" cy="148" rx="20" ry="25" fill="url(#boneGrad)" stroke="hsl(210,30%,65%)" strokeWidth="1.5"/>
    <ellipse cx="195" cy="148" rx="20" ry="25" fill="url(#boneGrad)" stroke="hsl(210,30%,65%)" strokeWidth="1.5"/>
    <ellipse cx="125" cy="165" rx="20" ry="8" fill="url(#cartGrad)" opacity="0.9"/>
    <ellipse cx="195" cy="165" rx="20" ry="8" fill="url(#cartGrad)" opacity="0.9"/>
    <path d="M108,175 Q125,170 142,175 Q125,185 108,175Z" fill="hsl(190,50%,55%)" opacity="0.85"/>
    <path d="M178,175 Q195,170 212,175 Q195,185 178,175Z" fill="hsl(190,50%,55%)" opacity="0.85"/>
    <rect x="100" y="185" width="120" height="140" rx="12" fill="url(#boneGrad)" stroke="hsl(210,30%,65%)" strokeWidth="1.5"/>
    <rect x="105" y="185" width="110" height="10" rx="4" fill="url(#cartGrad)" opacity="0.9"/>
    <line x1="145" y1="175" x2="175" y2="145" stroke="url(#ligGrad)" strokeWidth="5" strokeLinecap="round"/>
    <line x1="175" y1="175" x2="145" y2="145" stroke="hsl(210,70%,45%)" strokeWidth="5" strokeLinecap="round" opacity="0.85"/>
    <line x1="100" y1="155" x2="100" y2="210" stroke="hsl(140,55%,45%)" strokeWidth="4" strokeLinecap="round"/>
    <line x1="220" y1="155" x2="220" y2="210" stroke="hsl(140,55%,45%)" strokeWidth="4" strokeLinecap="round"/>
    <text x="230" y="155" fontSize="10" fill="hsl(25,85%,40%)" fontWeight="600">ACL</text>
    <text x="230" y="170" fontSize="10" fill="hsl(210,70%,38%)" fontWeight="600">PCL</text>
    <text x="55" y="188" fontSize="10" fill="hsl(140,55%,35%)" fontWeight="600">MCL</text>
    <text x="225" y="188" fontSize="10" fill="hsl(140,55%,35%)" fontWeight="600">LCL</text>
    <text x="108" y="198" fontSize="9" fill="hsl(190,50%,35%)" fontWeight="600">Meniscus</text>
    <text x="145" y="90" fontSize="11" fill="hsl(210,32%,20%)" fontWeight="700" textAnchor="middle">Femur</text>
    <text x="160" y="270" fontSize="11" fill="hsl(210,32%,20%)" fontWeight="700" textAnchor="middle">Tibia</text>
  </svg>
);

const ShoulderJointDiagram = () => (
  <svg viewBox="0 0 320 300" className="w-full max-w-xs mx-auto" aria-label="Shoulder joint anatomy diagram">
    <defs>
      <linearGradient id="shBoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(210,40%,88%)" />
        <stop offset="100%" stopColor="hsl(210,30%,78%)" />
      </linearGradient>
    </defs>
    <path d="M20,80 Q100,60 150,85" stroke="url(#shBoneGrad)" strokeWidth="18" fill="none" strokeLinecap="round"/>
    <path d="M20,80 Q100,60 150,85" stroke="hsl(210,30%,65%)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <path d="M130,70 L155,85 L145,170 L120,180 L115,130Z" fill="url(#shBoneGrad)" stroke="hsl(210,30%,65%)" strokeWidth="1.5"/>
    <ellipse cx="150" cy="125" rx="14" ry="22" fill="hsl(210,40%,82%)" stroke="hsl(210,30%,65%)" strokeWidth="1"/>
    <ellipse cx="150" cy="125" rx="18" ry="26" fill="none" stroke="hsl(190,60%,55%)" strokeWidth="4" opacity="0.8"/>
    <circle cx="200" cy="115" r="45" fill="url(#shBoneGrad)" stroke="hsl(210,30%,65%)" strokeWidth="1.5"/>
    <path d="M158,103 Q175,95 185,115 Q175,135 158,133 Q162,118 158,103Z" fill="hsl(190,55%,72%)" opacity="0.9"/>
    <rect x="185" y="158" width="30" height="120" rx="15" fill="url(#shBoneGrad)" stroke="hsl(210,30%,65%)" strokeWidth="1.5"/>
    <path d="M165,90 Q195,75 225,85" stroke="hsl(25,85%,55%)" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.9"/>
    <path d="M165,140 Q195,155 225,148" stroke="hsl(25,75%,55%)" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.85"/>
    <path d="M130,70 Q170,50 210,65 L210,78 Q170,63 130,83Z" fill="hsl(210,35%,80%)" stroke="hsl(210,30%,65%)" strokeWidth="1.2"/>
    <text x="70" y="55" fontSize="10" fill="hsl(210,32%,20%)" fontWeight="700">Clavicle</text>
    <text x="115" y="205" fontSize="10" fill="hsl(210,32%,20%)" fontWeight="700">Scapula</text>
    <text x="240" y="115" fontSize="10" fill="hsl(210,32%,20%)" fontWeight="700">Humerus</text>
    <text x="50" y="120" fontSize="9" fill="hsl(190,55%,35%)" fontWeight="600">Labrum</text>
    <text x="155" y="72" fontSize="9" fill="hsl(25,80%,35%)" fontWeight="600">Rotator Cuff</text>
    <line x1="155" y1="73" x2="190" y2="80" stroke="hsl(25,80%,45%)" strokeWidth="1" strokeDasharray="3,2"/>
    <line x1="70" y1="117" x2="133" y2="115" stroke="hsl(190,55%,45%)" strokeWidth="1" strokeDasharray="3,2"/>
  </svg>
);

const KneeReplacementDiagram = () => (
  <svg viewBox="0 0 320 360" className="w-full max-w-xs mx-auto" aria-label="Knee replacement implant diagram">
    <defs>
      <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(210,25%,75%)" />
        <stop offset="100%" stopColor="hsl(210,20%,60%)" />
      </linearGradient>
      <linearGradient id="polyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="hsl(210,15%,92%)" />
        <stop offset="100%" stopColor="hsl(210,15%,82%)" />
      </linearGradient>
      <linearGradient id="boneGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(40,40%,90%)" />
        <stop offset="100%" stopColor="hsl(40,30%,80%)" />
      </linearGradient>
    </defs>
    <ellipse cx="160" cy="70" rx="52" ry="60" fill="url(#boneGrad2)" stroke="hsl(40,25%,65%)" strokeWidth="1.5"/>
    <path d="M108,140 Q125,130 160,128 Q195,130 212,140 L208,162 Q195,152 160,150 Q125,152 112,162Z" fill="url(#metalGrad)" stroke="hsl(210,20%,50%)" strokeWidth="1.5"/>
    <ellipse cx="125" cy="153" rx="18" ry="12" fill="url(#metalGrad)" stroke="hsl(210,20%,50%)" strokeWidth="1"/>
    <ellipse cx="195" cy="153" rx="18" ry="12" fill="url(#metalGrad)" stroke="hsl(210,20%,50%)" strokeWidth="1"/>
    <rect x="108" y="166" width="104" height="18" rx="4" fill="url(#polyGrad)" stroke="hsl(210,15%,70%)" strokeWidth="1.2"/>
    <rect x="104" y="184" width="112" height="14" rx="4" fill="url(#metalGrad)" stroke="hsl(210,20%,50%)" strokeWidth="1.5"/>
    <rect x="148" y="198" width="24" height="60" rx="6" fill="url(#metalGrad)" stroke="hsl(210,20%,50%)" strokeWidth="1.2"/>
    <rect x="100" y="258" width="120" height="90" rx="12" fill="url(#boneGrad2)" stroke="hsl(40,25%,65%)" strokeWidth="1.5"/>
    <text x="225" y="145" fontSize="9" fill="hsl(210,30%,25%)" fontWeight="700">Femoral</text>
    <text x="225" y="157" fontSize="9" fill="hsl(210,30%,25%)" fontWeight="700">Component</text>
    <text x="225" y="175" fontSize="9" fill="hsl(210,20%,35%)" fontWeight="700">Polyethylene</text>
    <text x="225" y="195" fontSize="9" fill="hsl(210,30%,25%)" fontWeight="700">Tibial Baseplate</text>
    <text x="160" y="65" fontSize="11" fill="hsl(40,30%,30%)" fontWeight="700" textAnchor="middle">Femur</text>
    <text x="160" y="300" fontSize="11" fill="hsl(40,30%,30%)" fontWeight="700" textAnchor="middle">Tibia</text>
    <line x1="220" y1="148" x2="205" y2="148" stroke="hsl(210,30%,40%)" strokeWidth="1" strokeDasharray="3,2"/>
    <line x1="220" y1="175" x2="212" y2="175" stroke="hsl(210,20%,45%)" strokeWidth="1" strokeDasharray="3,2"/>
    <line x1="220" y1="195" x2="216" y2="191" stroke="hsl(210,30%,40%)" strokeWidth="1" strokeDasharray="3,2"/>
  </svg>
);

const TraumaDiagram = () => (
  <svg viewBox="0 0 320 300" className="w-full max-w-xs mx-auto" aria-label="Fracture fixation diagram">
    <defs>
      <linearGradient id="tboneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(40,40%,88%)" />
        <stop offset="100%" stopColor="hsl(40,30%,78%)" />
      </linearGradient>
      <linearGradient id="plateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(210,25%,75%)" />
        <stop offset="100%" stopColor="hsl(210,20%,60%)" />
      </linearGradient>
    </defs>
    <rect x="120" y="20" width="80" height="120" rx="20" fill="url(#tboneGrad)" stroke="hsl(40,25%,65%)" strokeWidth="1.5"/>
    <path d="M118,140 L152,133 L168,147 L202,140" stroke="hsl(0,70%,45%)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <rect x="120" y="150" width="80" height="120" rx="20" fill="url(#tboneGrad)" stroke="hsl(40,25%,65%)" strokeWidth="1.5"/>
    <rect x="107" y="90" width="18" height="110" rx="5" fill="url(#plateGrad)" stroke="hsl(210,20%,50%)" strokeWidth="1.5"/>
    {[100, 120, 155, 175].map((y, i) => (
      <g key={i}>
        <line x1="107" y1={y} x2="140" y2={y} stroke="url(#plateGrad)" strokeWidth="5" strokeLinecap="round"/>
        <line x1="107" y1={y} x2="140" y2={y} stroke="hsl(210,20%,40%)" strokeWidth="1" strokeLinecap="round"/>
        <circle cx="107" cy={y} r="4" fill="url(#plateGrad)" stroke="hsl(210,20%,40%)" strokeWidth="1"/>
      </g>
    ))}
    <text x="230" y="142" fontSize="10" fill="hsl(0,65%,35%)" fontWeight="700">Fracture</text>
    <text x="60" y="138" fontSize="10" fill="hsl(210,30%,25%)" fontWeight="700">Plate &amp;</text>
    <text x="60" y="152" fontSize="10" fill="hsl(210,30%,25%)" fontWeight="700">Screws</text>
    <line x1="220" y1="139" x2="205" y2="139" stroke="hsl(0,65%,40%)" strokeWidth="1" strokeDasharray="3,2"/>
    <line x1="83" y1="140" x2="106" y2="140" stroke="hsl(210,30%,40%)" strokeWidth="1" strokeDasharray="3,2"/>
  </svg>
);

// ─── Procedure Data ───────────────────────────────────────────────────────────

type HeroKey = "knee-ligament" | "knee-replacement" | "shoulder" | "trauma";
type DiagramType = "knee" | "shoulder" | "replacement" | "trauma";

interface ProcedureInfo {
  title: string;
  category: string;
  heroKey: HeroKey;
  tagline: string;
  overview: string[];           // exactly 3 bullet points
  stats: { time: string; stay: string; walking: string };
  symptoms: string[];
  steps: { heading: string; detail: string }[];
  recovery: { timeline: string; details: string[] };
  diagram: DiagramType;
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
    diagram: "knee",
    overview: [
      "Replaces the torn Anterior Cruciate Ligament with a high-strength tendon graft (hamstring or patella tendon).",
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
    diagram: "knee",
    overview: [
      "Addresses failed prior ACL reconstructions, multi-ligament injuries, and anatomically complex cases.",
      "Uses allograft, quadriceps tendon, or staged bone-grafting when prior tunnels are malpositioned.",
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
    diagram: "knee",
    overview: [
      "Replaces the torn Posterior Cruciate Ligament — the primary restraint against backward tibial displacement.",
      "Performed arthroscopically through small portals for minimal soft tissue disruption.",
      "Graft fixed at 90° flexion to replicate natural PCL tension and restore normal knee biomechanics.",
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
      { heading: "Fixation at 90°", detail: "Graft secured at 90° flexion with anterior tibial force to achieve correct tension." },
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
    diagram: "knee",
    overview: [
      "Repairs torn meniscal cartilage arthroscopically — preserving tissue rather than removing it.",
      "All-inside suture technique approximates the tear edges to stimulate biological healing.",
      "Protects the knee from accelerated cartilage wear and early-onset arthritis.",
    ],
    stats: { time: "30–60 min", stay: "Same-day", walking: "Day 1 (repair: protected)" },
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
    diagram: "knee",
    overview: [
      "Reconstructs the medial (MCL) or lateral (LCL) collateral ligaments using a tendon graft.",
      "Anatomical footprint fixation on femur and tibia restores natural varus/valgus restraint.",
      "Frequently combined with ACL or PCL reconstruction in multi-ligament knee injuries.",
    ],
    stats: { time: "60–90 min", stay: "Same-day / 1 night", walking: "Day 1–2 (braced)" },
    symptoms: [
      "Pain along the inner (MCL) or outer (LCL) side of the knee",
      "Feeling of the knee buckling inward or outward",
      "Swelling and bruising after valgus or varus injury",
      "Positive varus/valgus stress testing",
    ],
    steps: [
      { heading: "Ligament Grading", detail: "Stress X-rays and MRI define the level and location of the injury." },
      { heading: "Graft Preparation", detail: "Autograft (gracilis/semitendinosus) or allograft matched to native ligament." },
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
    diagram: "knee",
    overview: [
      "Replaces the torn Medial Patellofemoral Ligament (MPFL) with a gracilis tendon graft to prevent lateral kneecap dislocation.",
      "Femoral tunnel placed at the isometric Schöttle's point under fluoroscopic guidance for precise graft function.",
      "Eliminates the apprehension and instability that limits activity after recurrent patellar dislocation.",
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
    diagram: "replacement",
    overview: [
      "Surgically realigns the tibia to shift load away from the arthritic medial compartment onto healthier cartilage.",
      "Performed with a modern locking plate — allows precise correction and early weight-bearing.",
      "Best suited to active patients under 60 with isolated medial arthritis and varus (bow-leg) deformity.",
    ],
    stats: { time: "60–90 min", stay: "1–2 nights", walking: "Week 1–2 (crutches)" },
    symptoms: [
      "Inner-knee pain worsened by walking and stairs",
      "Visible bow-leg deformity (varus alignment)",
      "X-ray showing medial compartment joint space narrowing",
      "Active patient seeking to preserve natural knee",
    ],
    steps: [
      { heading: "Full-Length X-ray Planning", detail: "Angular correction calculated to shift mechanical axis to 62–66% of tibial width." },
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
    diagram: "replacement",
    overview: [
      "Resurfaces all three damaged knee compartments with cobalt-chrome and polyethylene prosthetic components.",
      "Recommended for patients with severe arthritis where conservative treatment has failed.",
      "Over 95% of implants last 15–20 years, delivering durable, pain-free mobility.",
    ],
    stats: { time: "90–120 min", stay: "3–5 days", walking: "Day 1 with frame" },
    symptoms: [
      "Severe pain at rest and during sleep",
      "Walking distance under 500 metres",
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
    diagram: "replacement",
    overview: [
      "Resurfaces only the damaged knee compartment through a smaller incision than total replacement.",
      "Preserves healthy bone, ligaments, and cartilage for a more natural-feeling outcome.",
      "Faster recovery and less blood loss than total knee replacement.",
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
    tagline: "Precisely releasing the frozen shoulder capsule to restore full range of motion.",
    diagram: "shoulder",
    overview: [
      "Releases the thickened, contracted shoulder capsule using radiofrequency energy under arthroscopic vision.",
      "Indicated for frozen shoulder (adhesive capsulitis) that has failed physiotherapy and injections.",
      "Restores full range of motion in the same surgical sitting through keyhole portals.",
    ],
    stats: { time: "30–45 min", stay: "Same-day", walking: "Immediately" },
    symptoms: [
      "Progressive loss of shoulder movement in all planes",
      "Severe pain at end range — especially internal rotation",
      "Symptoms lasting over 6 months despite conservative treatment",
      "Night pain disrupting sleep",
    ],
    steps: [
      { heading: "Diagnostic Arthroscopy", detail: "Thickened, inflamed capsule visualised and extent of contracture mapped." },
      { heading: "Anterior Capsular Release", detail: "Rotator interval and anterior capsule divided with radiofrequency probe." },
      { heading: "Inferior & Posterior Release", detail: "Axillary recess and posterior capsule released systematically." },
      { heading: "Manipulation", detail: "Shoulder manipulated through full range of motion to break residual adhesions." },
    ],
    recovery: {
      timeline: "6–12 weeks to full functional motion",
      details: [
        "Day 1: Aggressive physiotherapy begins immediately to maintain intraoperative gains.",
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
    diagram: "shoulder",
    overview: [
      "Reattaches the torn glenoid labrum using 3–4 suture anchors inserted arthroscopically through keyhole portals.",
      "Restores the natural socket 'bumper' that prevents anterior shoulder dislocation.",
      "Achieves over 90% success rate — allowing return to sport, overhead work, and contact activities.",
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
    diagram: "shoulder",
    overview: [
      "Reattaches the torn supraspinatus (or other cuff) tendon to its bony footprint using arthroscopic suture anchors.",
      "Double-row repair technique maximizes tendon-to-bone contact area for optimal healing.",
      "Eliminates chronic night pain and progressive weakness caused by cuff deficiency.",
    ],
    stats: { time: "60–90 min", stay: "Same-day", walking: "Immediately" },
    symptoms: [
      "Dull aching shoulder pain — worse at night and overhead",
      "Progressive shoulder weakness when lifting or reaching",
      "Positive Jobe's Empty Can test — supraspinatus weakness",
      "MRI confirming full-thickness rotator cuff tear",
    ],
    steps: [
      { heading: "Subacromial Inspection", detail: "Tear size and tendon mobility assessed. Bone spurs removed (acromioplasty) if required." },
      { heading: "Tendon Mobilization", detail: "Scar tissue released to allow tendon to reach bony footprint without tension." },
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
    diagram: "shoulder",
    overview: [
      "Replaces the damaged ball and socket of the shoulder with prosthetic components tailored to the patient's anatomy.",
      "Reverse total shoulder replacement is used when the rotator cuff is massively torn — transferring function to the deltoid.",
      "Eliminates constant pain and restores overhead function lost to advanced shoulder arthritis.",
    ],
    stats: { time: "90–120 min", stay: "2–3 nights", walking: "Immediately" },
    symptoms: [
      "Severe, constant shoulder pain unresponsive to injections and medication",
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
    diagram: "trauma",
    overview: [
      "Covers all orthopaedic trauma — from simple fractures to complex polytrauma — using minimally invasive fixation (MIPO) wherever possible.",
      "Urgent ATLS-guided assessment ensures life-threatening injuries are managed before definitive fracture surgery.",
      "Intramedullary nails, locking plates, and cannulated screws restore anatomy and enable early mobilization.",
    ],
    stats: { time: "Varies by injury", stay: "1–5 days", walking: "As soon as fixation allows" },
    symptoms: [
      "Pain, swelling, and deformity at the injury site",
      "Inability to bear weight on the injured limb",
      "Neurovascular compromise distal to the fracture",
      "Open fracture or major joint dislocation",
    ],
    steps: [
      { heading: "ATLS Assessment", detail: "Life-threatening injuries identified and treated first. Fractures splinted." },
      { heading: "Imaging & Planning", detail: "X-ray and CT define fracture pattern. Implant templating performed." },
      { heading: "Surgical Fixation", detail: "Nail, plate, or external fixator selected based on fracture pattern and patient status." },
      { heading: "Early Mobilization", detail: "Physiotherapy begins as soon as fixation stability allows." },
    ],
    recovery: {
      timeline: "6 weeks (simple) – 12 months (complex)",
      details: [
        "Immediate: Analgesia, elevation, DVT prophylaxis.",
        "Week 1–4: Protected mobilization. Physiotherapy as fracture healing allows.",
        "Month 2–6: Progressive loading confirmed by X-ray.",
        "Month 6–12: Full return to work and activities for complex cases.",
      ],
    },
  },
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

const DiagramComponent = ({ type }: { type: DiagramType }) => {
  if (type === "knee") return <KneeJointDiagram />;
  if (type === "shoulder") return <ShoulderJointDiagram />;
  if (type === "replacement") return <KneeReplacementDiagram />;
  return <TraumaDiagram />;
};

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 shrink-0 mt-0.5">
    <circle cx="10" cy="10" r="9" stroke="hsl(var(--primary))" strokeWidth="1.5" />
    <path d="M6.5 10.5l2.5 2.5 4.5-5" stroke="hsl(var(--primary))" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AlertIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 shrink-0 mt-0.5">
    <circle cx="10" cy="10" r="9" stroke="hsl(var(--accent))" strokeWidth="1.5" />
    <line x1="10" y1="6" x2="10" y2="11" stroke="hsl(var(--accent))" strokeWidth="1.75" strokeLinecap="round" />
    <circle cx="10" cy="13.5" r="0.75" fill="hsl(var(--accent))" />
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
      {/* ── Hero: Image + Title only ────────────────────────────────────── */}
      <section className="relative h-[55vh] min-h-[380px] flex items-end overflow-hidden">
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
          <p className="text-white/60 text-xs uppercase tracking-widest mb-2 font-medium">{procedure.category}</p>
          <h1 className="font-heading text-2xl md:text-4xl font-bold text-white leading-tight max-w-2xl mb-2">
            {procedure.title}
          </h1>
          <p className="text-white/70 text-sm md:text-base max-w-xl">{procedure.tagline}</p>
        </div>
      </section>

      {/* ── Quick Stats Bar ─────────────────────────────────────────────── */}
      <div className="bg-foreground text-background">
        <div className="container-wide px-4 md:px-8">
          <div className="grid grid-cols-3 divide-x divide-background/10">
            {[
              { icon: <Clock className="w-4 h-4" />, label: "Surgery Time", value: procedure.stats.time },
              { icon: <BedDouble className="w-4 h-4" />, label: "Hospital Stay", value: procedure.stats.stay },
              { icon: <PersonStanding className="w-4 h-4" />, label: "Walking", value: procedure.stats.walking },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 py-4 px-3 sm:px-6 text-center sm:text-left">
                <span className="text-background/50 shrink-0">{stat.icon}</span>
                <div>
                  <p className="text-background/50 text-xs uppercase tracking-wider leading-none mb-0.5">{stat.label}</p>
                  <p className="text-background font-semibold text-xs sm:text-sm leading-tight">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Content ────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-wide max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Left: Content */}
            <div className="lg:col-span-2 space-y-12">

              {/* Overview */}
              <ScrollReveal>
                <div>
                  <h2 className="font-heading text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">
                    What is {procedure.title}?
                  </h2>
                  <ul className="space-y-3">
                    {procedure.overview.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-muted-foreground text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Symptoms */}
              <ScrollReveal>
                <div>
                  <h2 className="font-heading text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">
                    When Is It Needed?
                  </h2>
                  <ul className="space-y-3">
                    {procedure.symptoms.map((s, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <AlertIcon />
                        <span className="text-muted-foreground text-sm leading-relaxed">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Steps */}
              <ScrollReveal>
                <div>
                  <h2 className="font-heading text-xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                    Procedure Overview
                  </h2>
                  <div className="space-y-5">
                    {procedure.steps.map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex flex-col items-center shrink-0">
                          <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">
                            {i + 1}
                          </div>
                          {i < procedure.steps.length - 1 && (
                            <div className="w-px flex-1 bg-border mt-2" />
                          )}
                        </div>
                        <div className="pb-5">
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
                <div>
                  <h2 className="font-heading text-xl font-bold text-foreground mb-2 pb-3 border-b border-border">
                    Recovery
                  </h2>
                  <div className="inline-flex items-center gap-2 bg-secondary text-foreground text-xs font-semibold px-3 py-1.5 rounded-full mb-5 mt-3">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    {procedure.recovery.timeline}
                  </div>
                  <ul className="space-y-2.5">
                    {procedure.recovery.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-muted-foreground text-sm leading-relaxed">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Sidebar */}
            <aside className="lg:col-span-1 space-y-6">

              {/* Anatomy Diagram */}
              <ScrollReveal>
                <div className="bg-card rounded-2xl p-6 card-shadow border border-border/60">
                  <h3 className="font-heading font-bold text-foreground text-base mb-1">Anatomy Overview</h3>
                  <p className="text-muted-foreground text-xs mb-4">Illustrated diagram for patient reference.</p>
                  <DiagramComponent type={procedure.diagram} />
                  <p className="text-muted-foreground text-xs mt-3 text-center italic">Illustrative — not to scale</p>
                </div>
              </ScrollReveal>

              {/* Quick Facts */}
              <ScrollReveal>
                <div className="bg-secondary rounded-2xl p-5 border border-border/60">
                  <h3 className="font-heading font-bold text-foreground text-base mb-4">At a Glance</h3>
                  <dl className="space-y-3">
                    {[
                      { label: "Specialty", value: procedure.category },
                      { label: "Surgery Time", value: procedure.stats.time },
                      { label: "Hospital Stay", value: procedure.stats.stay },
                      { label: "Hospital", value: "Midwest Hospital, Bahawalpur" },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</dt>
                        <dd className="text-foreground font-medium text-sm mt-0.5">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </ScrollReveal>

              {/* Sticky CTA */}
              <ScrollReveal>
                <div className="bg-primary rounded-2xl p-6 text-center sticky top-24">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
                      <path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4" />
                      <circle cx="20" cy="10" r="2" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-primary-foreground text-lg mb-2">
                    Consult with Dr Shoaib
                  </h3>
                  <p className="text-primary-foreground/70 text-xs mb-5 leading-relaxed">
                    Discuss whether this procedure is right for your condition — in person at Midwest Hospital, Bahawalpur.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-white text-primary px-5 py-3 rounded-xl font-semibold text-sm hover:bg-white/90 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" style={{ color: "#25D366" }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Book via WhatsApp
                  </a>
                  <p className="text-primary-foreground/50 text-xs mt-3">+92 300 2278796</p>
                </div>
              </ScrollReveal>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Footer CTA ──────────────────────────────────────────────────── */}
      <section className="bg-secondary border-t border-border py-14">
        <div className="container-wide max-w-2xl mx-auto px-4 md:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
              Ready to Take the Next Step?
            </h2>
            <p className="text-muted-foreground text-sm mb-7 max-w-lg mx-auto">
              Dr Shoaib Aslam Kurerr consults Monday – Saturday at Midwest Hospital, Bahawalpur.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 cta-gradient text-primary-foreground px-7 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-all"
              >
                Book via WhatsApp
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border border-border bg-card text-foreground px-7 py-3 rounded-xl font-semibold text-sm hover:bg-secondary/80 transition-all"
              >
                View All Procedures
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;
