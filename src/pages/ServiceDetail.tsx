import { useParams, Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowLeft, CheckCircle2, Clock, AlertCircle, ChevronRight } from "lucide-react";

import heroAcl from "@/assets/hero-acl.jpg";
import heroKneeReplacement from "@/assets/hero-knee-replacement.jpg";
import heroShoulder from "@/assets/hero-shoulder.jpg";
import heroTrauma from "@/assets/hero-trauma.jpg";

// ─── Anatomical SVG Diagrams ──────────────────────────────────────────────────

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
    {/* Femur */}
    <ellipse cx="160" cy="80" rx="55" ry="65" fill="url(#boneGrad)" stroke="hsl(210,30%,65%)" strokeWidth="1.5"/>
    <ellipse cx="125" cy="148" rx="20" ry="25" fill="url(#boneGrad)" stroke="hsl(210,30%,65%)" strokeWidth="1.5"/>
    <ellipse cx="195" cy="148" rx="20" ry="25" fill="url(#boneGrad)" stroke="hsl(210,30%,65%)" strokeWidth="1.5"/>
    {/* Articular cartilage */}
    <ellipse cx="125" cy="165" rx="20" ry="8" fill="url(#cartGrad)" opacity="0.9"/>
    <ellipse cx="195" cy="165" rx="20" ry="8" fill="url(#cartGrad)" opacity="0.9"/>
    {/* Menisci */}
    <path d="M108,175 Q125,170 142,175 Q125,185 108,175Z" fill="hsl(190,50%,55%)" opacity="0.85"/>
    <path d="M178,175 Q195,170 212,175 Q195,185 178,175Z" fill="hsl(190,50%,55%)" opacity="0.85"/>
    {/* Tibia */}
    <rect x="100" y="185" width="120" height="140" rx="12" fill="url(#boneGrad)" stroke="hsl(210,30%,65%)" strokeWidth="1.5"/>
    {/* Tibial cartilage */}
    <rect x="105" y="185" width="110" height="10" rx="4" fill="url(#cartGrad)" opacity="0.9"/>
    {/* ACL */}
    <line x1="145" y1="175" x2="175" y2="145" stroke="url(#ligGrad)" strokeWidth="5" strokeLinecap="round"/>
    {/* PCL */}
    <line x1="175" y1="175" x2="145" y2="145" stroke="hsl(210,70%,45%)" strokeWidth="5" strokeLinecap="round" opacity="0.85"/>
    {/* MCL */}
    <line x1="100" y1="155" x2="100" y2="210" stroke="hsl(140,55%,45%)" strokeWidth="4" strokeLinecap="round"/>
    {/* LCL */}
    <line x1="220" y1="155" x2="220" y2="210" stroke="hsl(140,55%,45%)" strokeWidth="4" strokeLinecap="round"/>
    {/* Labels */}
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
    {/* Clavicle */}
    <path d="M20,80 Q100,60 150,85" stroke="url(#shBoneGrad)" strokeWidth="18" fill="none" strokeLinecap="round"/>
    <path d="M20,80 Q100,60 150,85" stroke="hsl(210,30%,65%)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    {/* Scapula/Glenoid */}
    <path d="M130,70 L155,85 L145,170 L120,180 L115,130Z" fill="url(#shBoneGrad)" stroke="hsl(210,30%,65%)" strokeWidth="1.5"/>
    {/* Glenoid cavity */}
    <ellipse cx="150" cy="125" rx="14" ry="22" fill="hsl(210,40%,82%)" stroke="hsl(210,30%,65%)" strokeWidth="1"/>
    {/* Labrum */}
    <ellipse cx="150" cy="125" rx="18" ry="26" fill="none" stroke="hsl(190,60%,55%)" strokeWidth="4" opacity="0.8"/>
    {/* Humeral head */}
    <circle cx="200" cy="115" r="45" fill="url(#shBoneGrad)" stroke="hsl(210,30%,65%)" strokeWidth="1.5"/>
    {/* Articular cartilage on head */}
    <path d="M158,103 Q175,95 185,115 Q175,135 158,133 Q162,118 158,103Z" fill="hsl(190,55%,72%)" opacity="0.9"/>
    {/* Humerus shaft */}
    <rect x="185" y="158" width="30" height="120" rx="15" fill="url(#shBoneGrad)" stroke="hsl(210,30%,65%)" strokeWidth="1.5"/>
    {/* Rotator cuff tendons */}
    <path d="M165,90 Q195,75 225,85" stroke="hsl(25,85%,55%)" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.9"/>
    <path d="M165,140 Q195,155 225,148" stroke="hsl(25,75%,55%)" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.85"/>
    {/* Acromion */}
    <path d="M130,70 Q170,50 210,65 L210,78 Q170,63 130,83Z" fill="hsl(210,35%,80%)" stroke="hsl(210,30%,65%)" strokeWidth="1.2"/>
    {/* Labels */}
    <text x="70" y="55" fontSize="10" fill="hsl(210,32%,20%)" fontWeight="700">Clavicle</text>
    <text x="115" y="205" fontSize="10" fill="hsl(210,32%,20%)" fontWeight="700">Scapula</text>
    <text x="240" y="115" fontSize="10" fill="hsl(210,32%,20%)" fontWeight="700">Humerus</text>
    <text x="50" y="120" fontSize="9" fill="hsl(190,55%,35%)" fontWeight="600">Labrum</text>
    <text x="155" y="72" fontSize="9" fill="hsl(25,80%,35%)" fontWeight="600">Rotator Cuff</text>
    <text x="175" y="60" fontSize="8" fill="hsl(25,80%,35%)">(Supraspinatus)</text>
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
    {/* Femur bone */}
    <ellipse cx="160" cy="70" rx="52" ry="60" fill="url(#boneGrad2)" stroke="hsl(40,25%,65%)" strokeWidth="1.5"/>
    {/* Femoral component (metal) */}
    <path d="M108,140 Q125,130 160,128 Q195,130 212,140 L208,162 Q195,152 160,150 Q125,152 112,162Z" fill="url(#metalGrad)" stroke="hsl(210,20%,50%)" strokeWidth="1.5"/>
    <ellipse cx="125" cy="153" rx="18" ry="12" fill="url(#metalGrad)" stroke="hsl(210,20%,50%)" strokeWidth="1"/>
    <ellipse cx="195" cy="153" rx="18" ry="12" fill="url(#metalGrad)" stroke="hsl(210,20%,50%)" strokeWidth="1"/>
    {/* Polyethylene insert */}
    <rect x="108" y="166" width="104" height="18" rx="4" fill="url(#polyGrad)" stroke="hsl(210,15%,70%)" strokeWidth="1.2"/>
    {/* Tibial baseplate (metal) */}
    <rect x="104" y="184" width="112" height="14" rx="4" fill="url(#metalGrad)" stroke="hsl(210,20%,50%)" strokeWidth="1.5"/>
    {/* Tibial stem */}
    <rect x="148" y="198" width="24" height="60" rx="6" fill="url(#metalGrad)" stroke="hsl(210,20%,50%)" strokeWidth="1.2"/>
    {/* Tibia bone */}
    <rect x="100" y="258" width="120" height="90" rx="12" fill="url(#boneGrad2)" stroke="hsl(40,25%,65%)" strokeWidth="1.5"/>
    {/* Labels */}
    <text x="225" y="145" fontSize="9" fill="hsl(210,30%,25%)" fontWeight="700">Femoral</text>
    <text x="225" y="157" fontSize="9" fill="hsl(210,30%,25%)" fontWeight="700">Component</text>
    <text x="225" y="175" fontSize="9" fill="hsl(210,20%,35%)" fontWeight="700">Polyethylene</text>
    <text x="225" y="195" fontSize="9" fill="hsl(210,30%,25%)" fontWeight="700">Tibial</text>
    <text x="225" y="207" fontSize="9" fill="hsl(210,30%,25%)" fontWeight="700">Baseplate</text>
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
    {/* Bone shaft upper */}
    <rect x="120" y="20" width="80" height="120" rx="20" fill="url(#tboneGrad)" stroke="hsl(40,25%,65%)" strokeWidth="1.5"/>
    {/* Fracture line */}
    <path d="M118,140 L152,133 L168,147 L202,140" stroke="hsl(0,70%,45%)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    {/* Bone shaft lower */}
    <rect x="120" y="150" width="80" height="120" rx="20" fill="url(#tboneGrad)" stroke="hsl(40,25%,65%)" strokeWidth="1.5"/>
    {/* Plate */}
    <rect x="107" y="90" width="18" height="110" rx="5" fill="url(#plateGrad)" stroke="hsl(210,20%,50%)" strokeWidth="1.5"/>
    {/* Screws */}
    {[100, 120, 155, 175].map((y, i) => (
      <g key={i}>
        <line x1="107" y1={y} x2="140" y2={y} stroke="url(#plateGrad)" strokeWidth="5" strokeLinecap="round"/>
        <line x1="107" y1={y} x2="140" y2={y} stroke="hsl(210,20%,40%)" strokeWidth="1" strokeLinecap="round"/>
        <circle cx="107" cy={y} r="4" fill="url(#plateGrad)" stroke="hsl(210,20%,40%)" strokeWidth="1"/>
      </g>
    ))}
    {/* Labels */}
    <text x="230" y="142" fontSize="10" fill="hsl(0,65%,35%)" fontWeight="700">Fracture Line</text>
    <text x="60" y="138" fontSize="10" fill="hsl(210,30%,25%)" fontWeight="700">Plate</text>
    <text x="60" y="155" fontSize="9" fill="hsl(210,25%,40%)">&amp; Screws</text>
    <text x="160" y="45" fontSize="10" fill="hsl(40,30%,30%)" fontWeight="700" textAnchor="middle">Bone Shaft</text>
    <line x1="220" y1="139" x2="205" y2="139" stroke="hsl(0,65%,40%)" strokeWidth="1" strokeDasharray="3,2"/>
    <line x1="83" y1="140" x2="106" y2="140" stroke="hsl(210,30%,40%)" strokeWidth="1" strokeDasharray="3,2"/>
  </svg>
);

// ─── Procedure Data ───────────────────────────────────────────────────────────

type HeroKey = "knee-ligament" | "knee-replacement" | "shoulder" | "trauma";

interface ProcedureInfo {
  title: string;
  category: string;
  heroKey: HeroKey;
  tagline: string;
  intro: string[];
  symptoms: string[];
  stepByStep: { heading: string; detail: string }[];
  recovery: { timeline: string; details: string[] };
  diagram: "knee" | "shoulder" | "replacement" | "trauma";
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
    tagline: "Restoring knee stability through minimally invasive keyhole surgery",
    diagram: "knee",
    intro: [
      "The Anterior Cruciate Ligament (ACL) is one of the four major ligaments of the knee joint, serving as the primary stabilizer against forward movement of the shin bone (tibia). It runs diagonally through the center of the knee and is essential for activities that involve pivoting, cutting, jumping, and sudden changes of direction.",
      "ACL tears are among the most common sports injuries, affecting athletes of all levels as well as individuals involved in active occupations. The injury typically occurs during sudden deceleration, awkward landing from a jump, or a direct blow to the knee. Patients often report a distinctive 'pop' at the moment of injury, followed by immediate swelling and instability.",
      "When conservative management — including physiotherapy and bracing — fails to restore adequate function, or when the patient wishes to return to high-demand physical activity, Arthroscopic ACL Reconstruction offers a gold-standard solution. Dr. Shoaib Aslam Kurerr performs this procedure using modern minimally invasive techniques at Midwest Hospital, Bahawalpur.",
    ],
    symptoms: [
      "A loud 'pop' or 'snapping' sensation at the time of injury",
      "Rapid onset of knee swelling within 6 hours",
      "Feeling of knee instability or 'giving way' during walking or activity",
      "Significant pain and inability to continue physical activity",
      "Limited range of motion and difficulty fully straightening the knee",
      "Positive findings on clinical tests (Lachman test, Anterior Drawer test)",
      "MRI-confirmed ACL tear with associated meniscal or cartilage injury",
    ],
    stepByStep: [
      {
        heading: "Pre-operative Planning",
        detail:
          "A thorough clinical examination combined with MRI imaging defines the full extent of injury, identifies any associated meniscal or cartilage damage, and guides the selection of the appropriate graft — typically the patient's own hamstring tendon (autograft) for optimal healing.",
      },
      {
        heading: "Anaesthesia & Positioning",
        detail:
          "The procedure is performed under spinal or general anaesthesia. The patient is positioned with the leg in a leg holder to allow full arthroscopic access to the knee joint.",
      },
      {
        heading: "Arthroscopic Diagnosis",
        detail:
          "Small 'keyhole' incisions (portals) are made around the knee and a tiny camera (arthroscope) is inserted, providing a high-definition view of all structures within the joint. Any associated meniscal tears are addressed concurrently.",
      },
      {
        heading: "Graft Harvesting & Preparation",
        detail:
          "The hamstring graft (gracilis and semitendinosus tendons) is harvested through a small incision, folded to the appropriate diameter, and prepared with sutures at each end for fixation.",
      },
      {
        heading: "Tunnel Drilling & Graft Placement",
        detail:
          "Using precise anatomic guides, bone tunnels are drilled in the femur and tibia at the exact attachment points of the native ACL. The prepared graft is passed through these tunnels, replicating the natural orientation of the ligament.",
      },
      {
        heading: "Fixation & Wound Closure",
        detail:
          "The graft is secured with bioabsorbable or titanium implants (endobutton and interference screw) under appropriate tension. The knee is examined for correct graft tension and full range of motion before closure.",
      },
    ],
    recovery: {
      timeline: "6 – 9 months to full sports return",
      details: [
        "Day 1–2: Compression, ice, and limb elevation. Physiotherapy begins with gentle range-of-motion exercises.",
        "Week 1–2: Weight-bearing with crutches is encouraged. Straight-leg raises and quadriceps activation begin.",
        "Week 4–6: Crutches are typically weaned off. Cycling and pool exercises commence.",
        "Month 3–4: Strength training, proprioception exercises, and jogging on flat surfaces begin.",
        "Month 6–9: Sport-specific training and return-to-play testing. Full clearance after functional assessment.",
      ],
    },
  },

  "advanced-acl-reconstruction": {
    title: "Advanced ACL Reconstruction",
    category: "Knee Ligament Surgery",
    heroKey: "knee-ligament",
    tagline: "Specialized solutions for complex, revision, and multi-ligament ACL cases",
    diagram: "knee",
    intro: [
      "Advanced ACL Reconstruction addresses the most challenging presentations of ACL insufficiency — including failed prior reconstructions (revision surgery), multi-ligament knee injuries, and anatomically complex cases where standard techniques are insufficient. These situations require a higher level of surgical expertise, meticulous pre-operative planning, and specialized graft strategies.",
      "Patients presenting with a second ACL rupture after prior reconstruction, or those with combined ACL, PCL, and collateral ligament injuries following high-energy trauma, require individualized surgical solutions. Dr. Shoaib Aslam Kurerr's expertise in complex ligament reconstruction ensures that each case is approached with a customized, evidence-based plan.",
      "Modern techniques in revision ACL surgery include the use of allograft (donor tendon), quadriceps tendon autograft, and anatomic tunnel repositioning. These strategies overcome the challenges of tunnel widening and hardware interference from prior surgery.",
    ],
    symptoms: [
      "Persistent knee instability after a previous ACL reconstruction",
      "Giving-way episodes during daily activities or sport",
      "Combined knee swelling with collateral ligament tenderness",
      "MRI showing graft failure, tunnel malposition, or associated ligament tears",
      "High-energy trauma with multi-directional knee instability",
      "Positive clinical instability tests in multiple planes",
    ],
    stepByStep: [
      {
        heading: "Comprehensive Pre-operative Assessment",
        detail:
          "MRI, weight-bearing X-rays, and clinical examination map existing hardware, tunnel positions, bone quality, and all associated ligament injuries to create a precise surgical blueprint.",
      },
      {
        heading: "Graft Selection",
        detail:
          "Based on available tissue (after prior harvesting), allograft tendons or the quadriceps tendon may be selected. Graft choice is tailored to maximize strength and healing potential.",
      },
      {
        heading: "Hardware Removal & Tunnel Preparation",
        detail:
          "Existing fixation implants are removed arthroscopically or through small open incisions. Malpositioned tunnels may require bone grafting and staged reconstruction over 3–6 months to allow healing before new tunnels are drilled.",
      },
      {
        heading: "Anatomic Reconstruction",
        detail:
          "New tunnels are created in anatomically correct positions. For multi-ligament cases, collateral ligament reconstructions are performed simultaneously using additional grafts and fixation anchors.",
      },
      {
        heading: "Fixation & Tensioning",
        detail:
          "All grafts are fixed under appropriate tension and knee position to ensure natural biomechanics are restored. Fluoroscopic guidance confirms correct implant placement.",
      },
    ],
    recovery: {
      timeline: "9 – 12 months to full return to activity",
      details: [
        "Week 1–4: Protected weight-bearing with crutches. Early range-of-motion physiotherapy.",
        "Month 2–3: Gradual progression to full weight-bearing. Aquatic therapy begins.",
        "Month 4–6: Strengthening programme, proprioceptive training, low-impact cardio.",
        "Month 8–12: Sport-specific rehabilitation. Return-to-play criteria assessed with functional testing.",
      ],
    },
  },

  "arthroscopic-pcl-reconstruction": {
    title: "Arthroscopic PCL Reconstruction",
    category: "Knee Ligament Surgery",
    heroKey: "knee-ligament",
    tagline: "Restoring posterior knee stability through advanced arthroscopic technique",
    diagram: "knee",
    intro: [
      "The Posterior Cruciate Ligament (PCL) is the strongest ligament in the knee and the primary restraint against posterior (backward) displacement of the tibia. It runs from the back of the tibia to the inner side of the femur, crossing behind the ACL within the knee joint.",
      "PCL injuries are less common than ACL tears but are significantly debilitating when they occur. They typically result from a direct blow to the front of the flexed knee — such as a 'dashboard injury' in road traffic accidents — or from severe hyperflexion of the knee. Isolated PCL tears may sometimes be managed conservatively; however, high-grade injuries and those associated with other ligament damage require surgical reconstruction.",
      "Arthroscopic PCL reconstruction at Midwest Hospital, Bahawalpur under Dr. Shoaib Aslam Kurerr's care restores posterior stability with minimal tissue disruption and accelerated recovery compared to traditional open surgery.",
    ],
    symptoms: [
      "Posterior knee pain worsened by walking downstairs",
      "A feeling of the knee 'sinking back' when bearing weight",
      "Swelling and stiffness after injury",
      "Difficulty going downstairs or running downhill",
      "Positive Posterior Drawer Test on clinical examination",
      "MRI-confirmed PCL tear, often with associated bone bruising",
    ],
    stepByStep: [
      {
        heading: "Pre-operative Planning",
        detail:
          "MRI imaging assesses PCL grade and identifies associated injuries to the posterolateral corner, ACL, or menisci. Stress X-rays quantify the degree of posterior tibial subluxation.",
      },
      {
        heading: "Arthroscopic Evaluation",
        detail:
          "The knee is thoroughly examined under arthroscopic vision. Any meniscal or chondral injuries are treated concurrently. The remnant PCL tissue is assessed for augmentation versus full reconstruction.",
      },
      {
        heading: "Graft Preparation",
        detail:
          "An Achilles tendon allograft or hamstring autograft is prepared to the appropriate diameter and length. The tibial inlay or transtibial technique is selected based on the injury pattern.",
      },
      {
        heading: "Tunnel Drilling & Graft Passage",
        detail:
          "Anatomic tibial and femoral tunnels are created. The graft is passed and positioned to replicate the native PCL's anterolateral bundle, which is most critical for knee stability.",
      },
      {
        heading: "Fixation at Correct Knee Position",
        detail:
          "Fixation is performed with the knee in 90° of flexion and an anterior tibial force applied — the position that best tensions the PCL graft. Interference screws and cortical buttons secure the graft.",
      },
    ],
    recovery: {
      timeline: "6 – 9 months to full activity",
      details: [
        "Week 1–4: Knee brace in extension. Gentle range-of-motion exercises begin.",
        "Week 4–8: Progressive weight-bearing. Hamstring activation is prioritized.",
        "Month 3–4: Stationary cycling and swimming. Closed-chain strengthening.",
        "Month 5–9: Return to sport-specific training after functional testing.",
      ],
    },
  },

  "meniscus-repair": {
    title: "Meniscus Repair",
    category: "Knee Ligament Surgery",
    heroKey: "knee-ligament",
    tagline: "Preserving the knee's natural shock absorber for long-term joint health",
    diagram: "knee",
    intro: [
      "The menisci are two C-shaped fibrocartilaginous pads — the medial and lateral meniscus — that sit between the femur and tibia within the knee joint. They serve as critical shock absorbers, distribute load across the joint surface, enhance lubrication, and provide secondary stability to the knee.",
      "Meniscal tears rank among the most frequent orthopaedic injuries and occur across a wide spectrum of patients — from young athletes sustaining acute twisting injuries to older individuals experiencing degenerative tears. Symptoms include localized knee pain along the joint line, clicking, locking, and swelling. Left untreated, significant tears lead to accelerated cartilage wear and early arthritis.",
      "The primary goal of modern meniscal surgery is preservation — repairing tears wherever possible rather than removing meniscal tissue. Dr. Shoaib Aslam Kurerr specializes in arthroscopic meniscal repair, using advanced suture techniques that promote healing and protect the long-term health of the knee joint.",
    ],
    symptoms: [
      "Joint-line pain — medial or lateral — that worsens with squatting or twisting",
      "Knee swelling that develops gradually after activity",
      "Clicking, catching, or locking of the knee during movement",
      "Inability to fully straighten or bend the knee",
      "Pain when climbing stairs or rising from a seated position",
      "Positive McMurray's or Thessaly test on clinical examination",
    ],
    stepByStep: [
      {
        heading: "Diagnostic Arthroscopy",
        detail:
          "The entire meniscus is mapped under arthroscopic vision. The location, pattern, and blood supply of the tear determine whether repair or selective trimming (partial meniscectomy) is the most appropriate treatment.",
      },
      {
        heading: "Tear Preparation",
        detail:
          "The edges of the tear are refreshed using a small rasp or shaver to stimulate a vascular healing response — a critical step for successful repair.",
      },
      {
        heading: "Suture Placement (All-Inside Technique)",
        detail:
          "Using modern all-inside repair devices, self-tensioning sutures are passed through the meniscal tear and compressed against the outer capsule, approximating the tear edges under optimal tension.",
      },
      {
        heading: "Biological Augmentation",
        detail:
          "For complex or avascular tears, platelet-rich plasma (PRP) or fibrin clot may be applied at the repair site to enhance the biological healing environment.",
      },
      {
        heading: "Concurrent Procedures",
        detail:
          "Any associated ACL or cartilage pathology identified during arthroscopy is addressed in the same surgical sitting, minimizing the need for future procedures.",
      },
    ],
    recovery: {
      timeline: "4 – 6 months for repair; 4–6 weeks for trimming",
      details: [
        "Trimming (Partial Meniscectomy): Weight-bearing begins within days. Return to activity within 4–6 weeks.",
        "Repair — Week 1–6: Protected weight-bearing in a brace. Knee flexion gradually increased to 90°.",
        "Repair — Month 2–3: Full weight-bearing. Strengthening and proprioception exercises.",
        "Repair — Month 4–6: Return to cutting and pivoting sports after functional clearance.",
      ],
    },
  },

  "mcl-lcl-reconstruction": {
    title: "MCL & LCL Reconstruction",
    category: "Knee Ligament Surgery",
    heroKey: "knee-ligament",
    tagline: "Restoring side-to-side stability to the knee with precision graft reconstruction",
    diagram: "knee",
    intro: [
      "The Medial Collateral Ligament (MCL) and Lateral Collateral Ligament (LCL) are the primary restraints that prevent the knee from buckling inward (valgus) or outward (varus). They run along the inner and outer sides of the knee joint respectively and are essential for day-to-day stability with every step.",
      "Isolated MCL injuries are common in contact sports and usually heal with conservative management. However, high-grade (Grade III) tears, chronic ligament insufficiency, and injuries that occur in combination with ACL or PCL tears often require surgical reconstruction to restore stable knee function and prevent long-term joint degeneration.",
      "Dr. Shoaib Aslam Kurerr employs anatomical graft reconstruction techniques for both MCL and LCL, restoring the native ligament footprints for optimal biomechanical outcomes.",
    ],
    symptoms: [
      "Pain along the inner (MCL) or outer (LCL) side of the knee",
      "Swelling and bruising after injury",
      "Feeling of the knee buckling inward or outward",
      "Valgus stress pain — inner knee pain when the outer knee is pushed",
      "Combined instability suggesting multi-ligament injury",
      "Positive varus/valgus stress testing on clinical examination",
    ],
    stepByStep: [
      {
        heading: "Ligament Assessment",
        detail:
          "Stress X-rays and MRI quantify the degree of laxity and identify the precise location of the injury — whether at the femoral origin, tibial insertion, or midsubstance — guiding the reconstruction approach.",
      },
      {
        heading: "Graft Preparation",
        detail:
          "An autograft (gracilis or semitendinosus tendon) or allograft is prepared to recreate the native ligament. Graft diameter and length are matched to the patient's anatomy.",
      },
      {
        heading: "Anatomic Fixation",
        detail:
          "Bony tunnels or anchors are placed at the precise anatomic attachment points of the native ligament on both the femur and tibia. The graft is passed through and secured.",
      },
      {
        heading: "Multi-ligament Coordination",
        detail:
          "When performed alongside ACL or PCL reconstruction, the sequence and tensioning of each graft is carefully orchestrated to restore normal knee kinematics without over-constraining any single structure.",
      },
    ],
    recovery: {
      timeline: "4 – 6 months",
      details: [
        "Week 1–4: Hinged knee brace. Gentle range-of-motion exercises and protected weight-bearing.",
        "Month 2–3: Brace weaned. Progressive strengthening.",
        "Month 4–6: Return to full activities with functional assessment.",
      ],
    },
  },

  "mpfl-reconstruction": {
    title: "MPFL Reconstruction",
    category: "Knee Ligament Surgery",
    heroKey: "knee-ligament",
    tagline: "Preventing recurrent kneecap dislocation with anatomic ligament restoration",
    diagram: "knee",
    intro: [
      "The Medial Patellofemoral Ligament (MPFL) is a thin but critically important ligament that tethers the kneecap (patella) to the inner side of the femur, preventing it from dislocating laterally (outward). A first-time patellar dislocation tears this ligament in over 90% of cases, and without repair, recurrent dislocations become increasingly common.",
      "Recurrent patellar instability causes significant disability, pain, and cartilage damage. Patients experience anxiety about simple activities such as walking on uneven ground or climbing stairs. MPFL reconstruction replaces the torn ligament with a tendon graft, recreating the natural patellar restraint.",
      "Dr. Shoaib Aslam Kurerr's MPFL reconstruction technique is guided by precise anatomic landmarks and intraoperative fluoroscopy to ensure the femoral tunnel is placed at the isometric point — the position that provides optimal graft function through the full range of knee motion.",
    ],
    symptoms: [
      "Recurrent episodes of the kneecap 'slipping out' or feeling unstable",
      "Swelling and pain over the inner side of the kneecap after dislocation",
      "Apprehension when the kneecap is pushed laterally (Patellar Apprehension Sign)",
      "Knee giving way during twisting or running activities",
      "MRI showing MPFL disruption or chondral damage on the patella",
    ],
    stepByStep: [
      {
        heading: "Fluoroscopic Landmark Identification",
        detail:
          "The isometric point on the femur (Schöttle's point) is identified fluoroscopically. This is the precise attachment of the native MPFL, and correct placement is essential for graft function.",
      },
      {
        heading: "Graft Harvesting",
        detail:
          "The gracilis tendon is harvested from the inner thigh through a small incision and prepared as a free graft.",
      },
      {
        heading: "Patellar Fixation",
        detail:
          "Two small tunnels or suture anchors are placed in the medial edge of the patella. The graft is secured here first, maintaining appropriate tension.",
      },
      {
        heading: "Femoral Fixation",
        detail:
          "A bone tunnel at Schöttle's point receives the other end of the graft, which is fixed with an interference screw at 30° of knee flexion to reproduce the native MPFL tension curve.",
      },
      {
        heading: "Bony Alignment Assessment",
        detail:
          "If associated tibial tuberosity malposition or trochlear dysplasia is present, additional bony procedures (TTO or sulcus-deepening trochleoplasty) are considered to address the underlying instability.",
      },
    ],
    recovery: {
      timeline: "4 – 6 months to return to sport",
      details: [
        "Week 1–2: Straight-leg brace. Quadriceps setting exercises.",
        "Week 3–6: Gradual range-of-motion exercises. Weight-bearing as tolerated.",
        "Month 2–3: Strengthening. Cycling and swimming.",
        "Month 4–6: Return to sport-specific training after functional assessment.",
      ],
    },
  },

  "high-tibial-osteotomy": {
    title: "High Tibial Osteotomy (HTO)",
    category: "Knee Preservation & Joint Replacement",
    heroKey: "knee-replacement",
    tagline: "Realigning the leg to offload arthritis and delay joint replacement",
    diagram: "replacement",
    intro: [
      "High Tibial Osteotomy (HTO) is a joint-preserving procedure designed for younger, active patients (typically under 55–60 years) who suffer from medial compartment knee arthritis with associated varus (bow-leg) deformity. By surgically realigning the tibia, the mechanical axis of the leg is shifted away from the worn compartment, redistributing weight onto the healthier portion of the joint.",
      "Unlike knee replacement — which is a definitive solution but best suited to older, less active patients — HTO is designed to extend the lifespan of the natural knee. Appropriately selected patients can expect 10–15 years of significant pain relief before knee replacement may become necessary.",
      "The procedure is performed at Midwest Hospital, Bahawalpur under Dr. Shoaib Aslam Kurerr's care using modern locking plate technology (open-wedge HTO), which allows precise angular correction and early weight-bearing.",
    ],
    symptoms: [
      "Pain on the inner (medial) side of the knee, especially with prolonged walking",
      "Visible bow-leg deformity (varus alignment)",
      "Stiffness after rest that improves with movement",
      "Pain worsening on slopes and stairs",
      "X-rays showing joint space narrowing confined to the medial compartment",
      "Younger, active patient seeking to preserve the natural knee",
    ],
    stepByStep: [
      {
        heading: "Pre-operative Planning",
        detail:
          "Full-length (hip-to-ankle) weight-bearing X-rays are analyzed to calculate the precise angular correction required. The target is to shift the mechanical axis 62–66% across the tibial width.",
      },
      {
        heading: "Surgical Approach",
        detail:
          "An incision is made on the inner side of the upper tibia. The pes anserine tendons are carefully retracted to expose the tibial surface.",
      },
      {
        heading: "Bone Cut (Osteotomy)",
        detail:
          "A transverse cut is made across the tibia below the knee joint, leaving the lateral cortex intact as a hinge. The medial side is gradually opened using calibrated spreaders to the calculated degree of correction.",
      },
      {
        heading: "Plate Fixation",
        detail:
          "A specifically designed locking plate is applied across the osteotomy to maintain the corrected position. The open wedge may be filled with bone graft or a synthetic bone substitute to accelerate healing.",
      },
    ],
    recovery: {
      timeline: "6 months to full recovery",
      details: [
        "Week 1–2: Crutches with partial weight-bearing. Knee range-of-motion exercises.",
        "Week 6–8: Progressive weight-bearing as bone healing is confirmed on X-ray.",
        "Month 3–4: Full weight-bearing and return to light activities.",
        "Month 5–6: Return to recreational sport and manual work.",
      ],
    },
  },

  "total-knee-replacement": {
    title: "Total Knee Replacement",
    category: "Knee Preservation & Joint Replacement",
    heroKey: "knee-replacement",
    tagline: "Eliminating severe knee arthritis pain with precision joint arthroplasty",
    diagram: "replacement",
    intro: [
      "Total Knee Replacement (TKR), or total knee arthroplasty, is one of the most successful and transformative procedures in modern orthopaedic surgery. It involves replacing all three compartments of the damaged knee joint with precision-engineered prosthetic components made of cobalt-chromium alloy, titanium, and high-grade polyethylene.",
      "The procedure is typically recommended for patients with severe, end-stage knee arthritis — whether osteoarthritis, rheumatoid arthritis, or post-traumatic arthritis — who have failed adequate conservative management including analgesia, physiotherapy, injections, and lifestyle modifications. These patients experience disabling pain that disrupts sleep, limits walking distance, and prevents independence in daily activities.",
      "Modern TKR implants are engineered for longevity, with over 95% of implants functioning well at 20 years. Dr. Shoaib Aslam Kurerr performs total knee arthroplasty at Midwest Hospital, Bahawalpur, utilizing precise alignment techniques to optimize implant positioning and long-term outcomes.",
    ],
    symptoms: [
      "Severe knee pain that persists at rest and disturbs sleep",
      "Significant limitation of walking distance (< 500 metres)",
      "Inability to perform stairs, shopping, or basic domestic tasks",
      "Visible deformity of the knee (varus or valgus)",
      "Advanced joint space loss on X-ray across multiple compartments",
      "Failure of conservative measures including injections and physiotherapy",
    ],
    stepByStep: [
      {
        heading: "Pre-operative Assessment",
        detail:
          "Full-length X-rays, blood tests, cardiovascular review, and pre-operative physiotherapy assessment are completed. Implant size is templated from radiographs.",
      },
      {
        heading: "Surgical Approach",
        detail:
          "A midline skin incision and medial parapatellar arthrotomy expose the entire knee joint. The patella is reflected laterally to access all three compartments.",
      },
      {
        heading: "Bone Resection",
        detail:
          "Using precision cutting guides, measured amounts of bone are removed from the distal femur, proximal tibia, and patella. Alignment is verified with mechanical alignment rods or computer-assisted navigation.",
      },
      {
        heading: "Trial Components",
        detail:
          "Temporary trial implants are inserted to assess alignment, stability, range of motion, and patellar tracking before definitive implant selection.",
      },
      {
        heading: "Cementation & Closure",
        detail:
          "Definitive femoral, tibial, and patellar components are cemented in place. The wound is meticulously closed in layers and a drain placed if indicated.",
      },
    ],
    recovery: {
      timeline: "3 – 6 months to full recovery",
      details: [
        "Day 1: Physiotherapy begins. Walking with a frame on the day of surgery.",
        "Day 3–5: Discharge home with walking aids, wound care instructions, and DVT prophylaxis.",
        "Week 3–6: Outpatient physiotherapy. Stair climbing, and independent walking.",
        "Month 3: Return to driving and most daily activities.",
        "Month 6: Full recovery. Patients can walk unlimited distances without pain.",
      ],
    },
  },

  "partial-knee-replacement": {
    title: "Partial Knee Replacement",
    category: "Knee Preservation & Joint Replacement",
    heroKey: "knee-replacement",
    tagline: "Targeted resurfacing of the damaged compartment with natural knee preservation",
    diagram: "replacement",
    intro: [
      "Partial, or unicompartmental, knee replacement (UKR) resurfaces only the damaged compartment of the knee — most commonly the medial (inner) compartment — while preserving the healthy bone, cartilage, and ligaments in the other compartments. This makes it a highly attractive option for eligible patients who wish to maintain the most natural-feeling knee possible.",
      "Compared to total knee replacement, partial knee replacement involves a smaller incision, less bone removal, reduced blood loss, lower complication rates, and significantly faster recovery. Patients consistently report that a partial knee replacement feels more like their natural knee than a total replacement.",
      "Patient selection is critical: the procedure is most appropriate for patients with isolated single-compartment arthritis, intact ACL and collateral ligaments, and a correctable deformity. Dr. Shoaib Aslam Kurerr carefully evaluates each patient to determine whether partial or total replacement is the optimal choice.",
    ],
    symptoms: [
      "Pain localized to the inner or outer side of the knee",
      "Pain with activity that is relieved with rest",
      "Stiffness that improves with movement",
      "X-rays showing arthritis confined to one compartment",
      "Intact ACL confirmed clinically and on MRI",
      "Correctable deformity (< 15° varus or valgus)",
    ],
    stepByStep: [
      {
        heading: "Precise Patient Selection",
        detail:
          "Clinical examination, MRI, and weight-bearing X-rays confirm single-compartment disease, intact ligaments, and appropriate bone quality.",
      },
      {
        heading: "Minimally Invasive Approach",
        detail:
          "A short skin incision (8–10 cm) and a limited arthrotomy expose only the affected compartment, preserving the intact quadriceps mechanism.",
      },
      {
        heading: "Bone Preparation",
        detail:
          "Precision cutting guides resurface only the femoral condyle and tibial plateau of the damaged compartment, removing a minimum amount of bone.",
      },
      {
        heading: "Implant Insertion",
        detail:
          "A small metal femoral implant and a flat tibial baseplate with polyethylene insert are cemented in place. Final alignment is verified through the full range of motion.",
      },
    ],
    recovery: {
      timeline: "6 – 12 weeks to full daily function",
      details: [
        "Day 1: Walking with a frame. Less pain than total replacement.",
        "Week 2–3: Walking without aids for most patients.",
        "Week 4–6: Return to light work and driving.",
        "Week 8–12: Return to recreational activities and sport.",
      ],
    },
  },

  "arthroscopic-shoulder-capsular-release": {
    title: "Arthroscopic Shoulder Capsular Release",
    category: "Shoulder Arthroscopy & Reconstruction",
    heroKey: "shoulder",
    tagline: "Precisely releasing the frozen shoulder capsule to restore full range of motion",
    diagram: "shoulder",
    intro: [
      "Frozen shoulder, medically termed adhesive capsulitis, is a painful and debilitating condition characterized by progressive stiffness and loss of movement of the shoulder joint. It occurs when the normally loose shoulder capsule — the fibrous envelope surrounding the joint — becomes thickened, inflamed, and contracted, severely restricting motion in all directions.",
      "The condition typically progresses through three phases: the painful 'freezing' phase (3–9 months), the stiff 'frozen' phase (9–18 months), and the 'thawing' phase where spontaneous recovery occurs — but this can take 2–3 years and may be incomplete. For patients in whom aggressive physiotherapy, corticosteroid injections, and hydrodilatation have failed to provide adequate relief, Arthroscopic Shoulder Capsular Release offers definitive surgical treatment.",
      "Dr. Shoaib Aslam Kurerr performs this procedure at Midwest Hospital using radiofrequency ablation to precisely release the contracted capsule, restoring full range of motion under direct arthroscopic vision.",
    ],
    symptoms: [
      "Progressive loss of shoulder movement in all planes — especially internal rotation and abduction",
      "Severe pain at the end of range of motion",
      "Difficulty reaching behind the back (e.g., fastening a bra, tucking in a shirt)",
      "Pain that disturbs sleep, particularly when lying on the affected shoulder",
      "Duration of symptoms greater than 6 months despite conservative treatment",
      "MRI showing capsular thickening and reduced joint volume",
    ],
    stepByStep: [
      {
        heading: "Beach Chair Positioning",
        detail:
          "The patient is positioned semi-upright in the beach chair position under general anaesthesia with an interscalene nerve block for post-operative analgesia.",
      },
      {
        heading: "Diagnostic Arthroscopy",
        detail:
          "A camera is inserted through a posterior portal. The inflamed and thickened capsule is visualized, confirming the diagnosis and the distribution of contracture.",
      },
      {
        heading: "Systematic Capsular Release",
        detail:
          "Using a radiofrequency probe through an anterior portal, the capsule is systematically released — beginning at the rotator interval (anterior capsule), continuing inferiorly along the axillary recess, and finally addressing the posterior capsule.",
      },
      {
        heading: "Manipulation Under Anaesthesia",
        detail:
          "After capsular release, the shoulder is gently manipulated through full range of motion to break any remaining adhesions and confirm complete restoration of movement.",
      },
    ],
    recovery: {
      timeline: "6 – 12 weeks to regain functional motion",
      details: [
        "Day 1: Aggressive physiotherapy begins immediately to maintain the motion achieved in theatre.",
        "Week 1–4: Daily physiotherapy with heat, stretching, and active assisted exercises.",
        "Month 2–3: Full functional motion restored in the majority of patients.",
        "Month 3+: Strengthening and return to all activities.",
      ],
    },
  },

  "arthroscopic-bankart-repair": {
    title: "Arthroscopic Bankart Repair",
    category: "Shoulder Arthroscopy & Reconstruction",
    heroKey: "shoulder",
    tagline: "Reattaching the shoulder labrum to prevent recurrent dislocation",
    diagram: "shoulder",
    intro: [
      "A Bankart lesion is a tear of the glenoid labrum — the fibrocartilaginous rim that deepens the shoulder socket (glenoid) and serves as the primary stabilizer against anterior dislocation. It is present in the vast majority of first-time anterior shoulder dislocations and is the most common cause of recurrent instability.",
      "Following a first dislocation, the risk of recurrence is heavily influenced by age: in patients under 25 years, the recurrence rate without surgery can approach 80–90%. Recurrent dislocations cause progressive labral and bone damage, increasing the complexity of future surgery and the risk of permanent joint deterioration.",
      "Arthroscopic Bankart Repair is the gold-standard treatment for traumatic anterior shoulder instability. Under Dr. Shoaib Aslam Kurerr's care at Midwest Hospital, this procedure achieves a success rate exceeding 90%, allowing patients to return to sport, overhead work, and active lifestyles with confidence.",
    ],
    symptoms: [
      "Recurrent episodes of shoulder slipping out or 'subluxing'",
      "Apprehension when the arm is raised and rotated externally",
      "Anterior shoulder pain and weakness",
      "A sense of instability during overhead activities or contact sport",
      "MRI or CT arthrogram confirming labral tear ± Hill-Sachs lesion",
      "Young, active patient with anterior shoulder instability",
    ],
    stepByStep: [
      {
        heading: "Positioning & Setup",
        detail:
          "The patient is positioned in lateral decubitus or beach chair position. Arm traction provides distraction of the shoulder joint for arthroscopic access.",
      },
      {
        heading: "Arthroscopic Assessment",
        detail:
          "The full extent of the labral tear is mapped. Associated lesions — Hill-Sachs impaction on the humeral head, anterior glenoid bone loss — are quantified to assess whether additional procedures are required.",
      },
      {
        heading: "Labral Mobilization",
        detail:
          "The torn labrum and attached anterior capsule are elevated from the glenoid neck using an elevator, fully mobilizing the tissue for reattachment.",
      },
      {
        heading: "Anchor Placement & Suturing",
        detail:
          "3–4 bioabsorbable suture anchors are inserted along the anterior glenoid rim. Sutures are passed through the labrum and tied arthroscopically, reattaching and tensioning the labrum against the glenoid rim.",
      },
      {
        heading: "Glenoid Rim Restoration",
        detail:
          "The repaired labrum recreates the natural bumper effect, effectively deepening the shoulder socket and re-establishing the 'concavity compression' mechanism that keeps the joint stable.",
      },
    ],
    recovery: {
      timeline: "4 – 6 months to return to sport",
      details: [
        "Week 1–4: Arm sling immobilization. Pendulum exercises and elbow/wrist movement.",
        "Week 4–8: Sling removal. Active assisted range-of-motion exercises.",
        "Month 3–4: Strengthening of rotator cuff and periscapular muscles.",
        "Month 4–6: Sport-specific training and contact sport clearance.",
      ],
    },
  },

  "arthroscopic-rotator-cuff-repair": {
    title: "Arthroscopic Rotator Cuff Repair",
    category: "Shoulder Arthroscopy & Reconstruction",
    heroKey: "shoulder",
    tagline: "Restoring shoulder strength and eliminating pain from rotator cuff tears",
    diagram: "shoulder",
    intro: [
      "The rotator cuff is a group of four muscles and their tendons — supraspinatus, infraspinatus, teres minor, and subscapularis — that form a dynamic sleeve around the humeral head, stabilizing and powering shoulder movement. The supraspinatus tendon is most commonly torn, typically at its insertion on the 'footprint' of the greater tuberosity.",
      "Rotator cuff tears are common and affect both younger patients following acute trauma (a fall or heavy lifting) and older individuals where the tendon is progressively attenuated by chronic impingement and degenerative wear. Symptoms include pain — especially with overhead activity and at night — and progressive weakness that limits function.",
      "Arthroscopic Rotator Cuff Repair reattaches the torn tendon to its bony footprint using suture anchors, restoring the tendon's normal tension and force transmission. Dr. Shoaib Aslam Kurerr performs this at Midwest Hospital, Bahawalpur, using modern double-row repair techniques that maximize the contact area of the tendon against bone, optimizing healing.",
    ],
    symptoms: [
      "Dull aching pain in the shoulder, often worse at night",
      "Pain with overhead reaching, lifting, or behind-the-back activities",
      "Progressive shoulder weakness — difficulty raising the arm",
      "Tenderness over the greater tuberosity or anterior acromion",
      "Positive Jobe's (Empty Can) test indicating supraspinatus weakness",
      "MRI confirming full-thickness or significant partial-thickness tear",
    ],
    stepByStep: [
      {
        heading: "Diagnostic Arthroscopy",
        detail:
          "The shoulder is inspected from the subacromial space. The tear size, shape, and tendon mobility are assessed. Any impinging bone spurs (acromioplasty) or biceps tendon pathology (tenodesis) are addressed.",
      },
      {
        heading: "Tendon Mobilization",
        detail:
          "Adhesions and scar tissue are released from the bursal and articular surfaces of the tear to restore tendon elasticity and allow it to reach the bony footprint without tension.",
      },
      {
        heading: "Footprint Preparation",
        detail:
          "The greater tuberosity footprint is gently decorticated to create a vascular, bleeding bone bed that promotes tendon-to-bone healing.",
      },
      {
        heading: "Suture Anchor Insertion",
        detail:
          "Suture anchors loaded with strong sutures are inserted into the prepared footprint. For larger tears, a double-row repair is used — medial row anchors placed first, followed by lateral row anchors — to maximize footprint coverage.",
      },
      {
        heading: "Tendon Repair",
        detail:
          "Sutures are passed through the tendon using dedicated penetrators. Knots are tied arthroscopically, drawing the tendon firmly down onto the bone footprint under direct vision.",
      },
    ],
    recovery: {
      timeline: "4 – 6 months to full strength",
      details: [
        "Week 1–6: Arm sling. Pendulum exercises only — the repair must be protected.",
        "Week 6–12: Active assisted range-of-motion exercises begin. Sling discontinued.",
        "Month 3–4: Active strengthening of rotator cuff and deltoid.",
        "Month 4–6: Full strength recovery. Return to manual work and sport.",
      ],
    },
  },

  "shoulder-replacement": {
    title: "Shoulder Replacement",
    category: "Shoulder Arthroscopy & Reconstruction",
    heroKey: "shoulder",
    tagline: "Precision shoulder arthroplasty for end-stage arthritis and complex fractures",
    diagram: "shoulder",
    intro: [
      "Shoulder replacement, or shoulder arthroplasty, replaces the damaged surfaces of the glenohumeral joint — the ball (humeral head) and/or the socket (glenoid) — with prosthetic components. It is one of the most effective procedures for eliminating pain and restoring function in patients with severe shoulder arthritis, complex fractures, or irreparable rotator cuff tears.",
      "Two principal designs are available: the Anatomic Total Shoulder Replacement (aTSR), which replicates the native joint geometry and is suited for patients with an intact rotator cuff, and the Reverse Total Shoulder Replacement (rTSR), where the ball-and-socket relationship is switched. rTSR is specifically indicated when the rotator cuff is massively torn, as it transfers the primary motor function from the cuff to the deltoid muscle.",
      "Dr. Shoaib Aslam Kurerr performs both anatomic and reverse shoulder replacement at Midwest Hospital, Bahawalpur, tailoring the implant selection and surgical technique to each patient's individual anatomy and pathology.",
    ],
    symptoms: [
      "Severe, constant shoulder pain unresponsive to medications and injections",
      "Profound limitation of shoulder movement — often less than 90° elevation",
      "X-rays showing advanced glenohumeral joint space loss",
      "History of severe shoulder fracture with head collapse (avascular necrosis)",
      "Irreparable rotator cuff tear with pseudoparalysis (inability to elevate the arm)",
      "Previous shoulder arthroplasty requiring revision",
    ],
    stepByStep: [
      {
        heading: "Implant Planning",
        detail:
          "Pre-operative CT scan with 3D templating determines humeral and glenoid implant sizing and allows virtual placement of components for optimal positioning.",
      },
      {
        heading: "Deltopectoral Approach",
        detail:
          "A standard anterior approach through the deltopectoral interval provides excellent exposure of the shoulder joint with minimal muscle disruption.",
      },
      {
        heading: "Humeral Preparation",
        detail:
          "The humeral head is resected at the anatomic neck angle and the canal is reamed to accept the humeral stem. A trial stem is placed and the correct humeral head size selected.",
      },
      {
        heading: "Glenoid Preparation (Anatomic) or Baseplate (Reverse)",
        detail:
          "For anatomic replacement, the glenoid is reamed and a polyethylene or metal-backed component is cemented in place. For reverse replacement, a glenosphere baseplate is fixed with central screws and a glenosphere ball is attached.",
      },
      {
        heading: "Trial & Final Fixation",
        detail:
          "Trial reduction verifies stability, range of motion, and soft tissue tension. Final components are cemented or press-fit. The subscapularis is repaired meticulously to preserve anterior stability.",
      },
    ],
    recovery: {
      timeline: "3 – 6 months to full function",
      details: [
        "Week 1–6: Arm sling. Physiotherapy focuses on passive range of motion and subscapularis protection.",
        "Week 6–12: Active exercises begin. Strengthening of the deltoid (reverse) or rotator cuff (anatomic).",
        "Month 3–6: Full recovery. Lifting restrictions are gradually removed.",
      ],
    },
  },

  "trauma-management": {
    title: "Trauma & Fracture Management",
    category: "Orthopaedic Trauma",
    heroKey: "trauma",
    tagline: "Expert surgical care for acute fractures and complex musculoskeletal injuries",
    diagram: "trauma",
    intro: [
      "Orthopaedic trauma encompasses the full spectrum of acute injuries to the bones, joints, and soft tissues of the musculoskeletal system — from isolated simple fractures to complex polytrauma with multiple simultaneous injuries. Timely, expert surgical intervention is essential to restore anatomy, enable early mobilization, and optimize functional outcomes.",
      "Dr. Shoaib Aslam Kurerr provides comprehensive emergency orthopaedic trauma care at Midwest Hospital, Bahawalpur, serving the surgical needs of patients from Bahawalpur and across southern Punjab. His expertise spans all categories of skeletal trauma — from fragility fractures in elderly patients to high-energy peri-articular fractures in young individuals.",
      "Modern orthopaedic trauma surgery prioritizes minimally invasive fracture fixation (MIPO) wherever possible, reducing soft tissue disruption, accelerating healing, and improving functional recovery. The principle of 'damage control orthopaedics' is applied for life-threatening polytrauma — stabilizing fractures rapidly to enable patient resuscitation before definitive fixation.",
    ],
    symptoms: [
      "Pain, swelling, and deformity at the site of injury",
      "Inability to bear weight on the injured limb",
      "Abnormal mobility or crepitus at the fracture site",
      "Neurovascular compromise — numbness, pallor, or pulselessness distal to injury",
      "Open (compound) fractures with bone visible through a wound",
      "Dislocation of a major joint (hip, knee, shoulder, elbow, ankle)",
    ],
    stepByStep: [
      {
        heading: "Emergency Assessment & Resuscitation",
        detail:
          "ATLS (Advanced Trauma Life Support) principles guide the primary and secondary survey. Life-threatening injuries are identified and treated first. Fractures are splinted and neurovascular status assessed.",
      },
      {
        heading: "Imaging & Planning",
        detail:
          "X-rays in two planes and CT scanning (for periarticular and spinal injuries) define the fracture pattern and guide implant selection. Templating ensures correct plate, nail, or screw sizing.",
      },
      {
        heading: "Surgical Fixation",
        detail:
          "Depending on the fracture, fixation is achieved with intramedullary nails (for long bone shaft fractures), locking plates (for periarticular fractures), cannulated screws (for femoral neck fractures), or external fixators (for temporization or open fractures).",
      },
      {
        heading: "Wound Management",
        detail:
          "Open fractures are debrided urgently. Wound closure strategies range from primary closure to negative pressure wound therapy (wound VAC) and plastic surgical reconstruction for complex soft tissue defects.",
      },
      {
        heading: "Definitive Fixation & Early Mobilization",
        detail:
          "Once the patient's physiological status is optimized, definitive fracture fixation is performed. Early mobilization — partial or full weight-bearing depending on fixation stability — is prioritized to prevent complications of immobility.",
      },
    ],
    recovery: {
      timeline: "Variable — 6 weeks (simple) to 12 months (complex)",
      details: [
        "Immediate: Analgesia, limb elevation, DVT prophylaxis.",
        "Week 1–4: Protected mobilization with physiotherapy beginning as early as the fracture fixation allows.",
        "Month 2–6: Progressive loading as radiological and clinical healing is confirmed.",
        "Month 6–12: Return to full work and physical activities for complex polytrauma cases.",
      ],
    },
  },
};

// ─── Diagram Selector ─────────────────────────────────────────────────────────

const DiagramComponent = ({ type }: { type: ProcedureInfo["diagram"] }) => {
  if (type === "knee") return <KneeJointDiagram />;
  if (type === "shoulder") return <ShoulderJointDiagram />;
  if (type === "replacement") return <KneeReplacementDiagram />;
  return <TraumaDiagram />;
};

// ─── Main Page ────────────────────────────────────────────────────────────────

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const procedure = slug ? procedures[slug] : undefined;

  if (!procedure) {
    return (
      <main>
        <section className="section-padding text-center">
          <div className="container-wide">
            <h1 className="font-heading text-3xl font-bold text-foreground mb-4">
              Procedure Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The requested procedure page could not be found.
            </p>
          </div>
        </section>
      </main>
    );
  }

  const heroSrc = heroImages[procedure.heroKey];

  const handleBooking = () => {
    const message = encodeURIComponent(
      `Hello Dr. Shoaib Aslam Kurerr, I have read the guide on ${procedure.title} and would like to book a consultation.`
    );
    window.open(`https://wa.me/923002278796?text=${message}`, "_blank");
  };

  return (
    <main>
      {/* ── Editorial Hero ───────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[440px] flex items-end overflow-hidden">
        <img
          src={heroSrc}
          alt={`${procedure.title} procedure`}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 container-wide px-4 md:px-8 pb-12 w-full">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-6 transition-colors"
          >
          </Link>
          <p className="text-primary-foreground/75 font-semibold text-sm uppercase tracking-widest mb-2">
            {procedure.category}
          </p>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight max-w-3xl">
            {procedure.title}
          </h1>
          <p className="text-primary-foreground/80 text-lg mt-3 max-w-2xl">
            {procedure.tagline}
          </p>
        </div>
      </section>

      {/* ── Article Body ─────────────────────────────────────────────────── */}
      <article className="section-padding">
        <div className="container-wide max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-14">

              {/* What & Why */}
              <ScrollReveal>
                <section>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                    Understanding the Condition
                  </h2>
                  <div className="space-y-4">
                    {procedure.intro.map((para, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed text-base">
                        {para}
                      </p>
                    ))}
                  </div>
                </section>
              </ScrollReveal>

              {/* Symptoms & Diagnosis */}
              <ScrollReveal>
                <section>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                    Signs & Symptoms
                  </h2>
                  <p className="text-muted-foreground mb-5 text-base">
                    You may be a candidate for this procedure if you experience one or more of the following:
                  </p>
                  <ul className="space-y-3">
                    {procedure.symptoms.map((s, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-base">{s}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </ScrollReveal>

              {/* Step-by-Step Procedure */}
              <ScrollReveal>
                <section>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                    The Procedure — Step by Step
                  </h2>
                  <p className="text-muted-foreground mb-6 text-base">
                    Dr. Shoaib Aslam Kurerr performs {procedure.title.toLowerCase()} using modern evidence-based surgical techniques at Midwest Hospital, Bahawalpur. Here is a patient-friendly overview of the surgical process:
                  </p>
                  <div className="space-y-6">
                    {procedure.stepByStep.map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex flex-col items-center shrink-0">
                          <div className="w-8 h-8 rounded-full cta-gradient text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                            {i + 1}
                          </div>
                          {i < procedure.stepByStep.length - 1 && (
                            <div className="w-px flex-1 bg-border mt-2" />
                          )}
                        </div>
                        <div className="pb-6">
                          <h3 className="font-heading font-bold text-foreground text-lg mb-1">
                            {step.heading}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-base">
                            {step.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </ScrollReveal>

              {/* Recovery */}
              <ScrollReveal>
                <section>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2 pb-3 border-b border-border">
                    Recovery & Rehabilitation
                  </h2>
                  <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground text-sm font-semibold px-4 py-2 rounded-full mb-6 mt-4">
                    <Clock className="w-4 h-4 text-primary" />
                    Expected Timeline: {procedure.recovery.timeline}
                  </div>
                  <ul className="space-y-4">
                    {procedure.recovery.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-base">{d}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              {/* Anatomical Diagram */}
              <ScrollReveal>
                <div className="bg-card rounded-2xl p-6 card-shadow border border-border">
                  <h3 className="font-heading font-bold text-foreground text-lg mb-1">
                    Anatomy Overview
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5">
                    Illustrated anatomical diagram for patient reference.
                  </p>
                  <DiagramComponent type={procedure.diagram} />
                  <p className="text-muted-foreground text-xs mt-4 text-center italic">
                    Illustrative diagram — not to scale
                  </p>
                </div>
              </ScrollReveal>

              {/* Quick Facts */}
              <ScrollReveal>
                <div className="bg-secondary rounded-2xl p-6 border border-border">
                  <h3 className="font-heading font-bold text-foreground text-lg mb-4">
                    Procedure at a Glance
                  </h3>
                  <dl className="space-y-3">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Specialty</dt>
                      <dd className="text-foreground font-medium text-sm mt-0.5">{procedure.category}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Recovery</dt>
                      <dd className="text-foreground font-medium text-sm mt-0.5">{procedure.recovery.timeline}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Hospital</dt>
                      <dd className="text-foreground font-medium text-sm mt-0.5">Midwest Hospital, Bahawalpur</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Surgeon</dt>
                      <dd className="text-foreground font-medium text-sm mt-0.5">Dr. Shoaib Aslam Kurerr</dd>
                    </div>
                  </dl>
                </div>
              </ScrollReveal>

              {/* Sticky CTA */}
              <ScrollReveal>
                <div className="bg-primary rounded-2xl p-6 text-center sticky top-24">
                  <h3 className="font-heading font-bold text-primary-foreground text-xl mb-2">
                    Consult with Dr. Shoaib
                  </h3>
                  <p className="text-primary-foreground/80 text-sm mb-5 leading-relaxed">
                    Get expert advice on whether {procedure.title.toLowerCase()} is the right treatment for your condition.
                  </p>
                  <button
                    onClick={handleBooking}
                    className="w-full inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold text-base hover:opacity-90 transition-all"
                  >
                    Book Consultation
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <p className="text-primary-foreground/60 text-xs mt-3">
                    Via WhatsApp · +92 300 2278796
                  </p>
                </div>
              </ScrollReveal>
            </aside>
          </div>
        </div>
      </article>

      {/* ── Footer CTA Banner ─────────────────────────────────────────────── */}
      <section className="bg-secondary border-t border-border py-16">
        <div className="container-wide max-w-3xl mx-auto px-4 md:px-8 text-center">
          <ScrollReveal>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Expert Orthopaedic Care · Bahawalpur
            </p>
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-muted-foreground text-base mb-8 max-w-xl mx-auto">
              Dr. Shoaib Aslam Kurerr at Midwest Hospital provides the highest standard of orthopaedic surgical care. Schedule a consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleBooking}
                className="inline-flex items-center justify-center gap-2 cta-gradient text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-base hover:opacity-90 transition-all"
              >
                Book via WhatsApp
              </button>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border border-border bg-card text-foreground px-8 py-3.5 rounded-xl font-semibold text-base hover:bg-secondary transition-all"
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
