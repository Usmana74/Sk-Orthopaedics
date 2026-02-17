import { useParams, Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import BookingModal from "@/components/BookingModal";
import { ArrowLeft } from "lucide-react";

interface ProcedureInfo {
  title: string;
  category: string;
  overview: string;
  benefits: string[];
  process: string;
  recovery: string;
}

const procedures: Record<string, ProcedureInfo> = {
  "arthroscopic-acl-reconstruction": {
    title: "Arthroscopic ACL Reconstruction",
    category: "Knee Arthroscopy & Ligament Reconstruction",
    overview:
      "The anterior cruciate ligament (ACL) is one of the key stabilizing ligaments of the knee. ACL injuries are common in sports and active individuals. Arthroscopic ACL reconstruction uses minimally invasive keyhole surgery to replace the torn ligament with a graft, restoring knee stability and allowing return to an active lifestyle.",
    benefits: [
      "Minimally invasive with small incisions",
      "Faster recovery compared to open surgery",
      "Restores knee stability and function",
      "Enables return to sports and physical activity",
      "Reduced post-operative pain",
    ],
    process:
      "The procedure is performed under anaesthesia using an arthroscope inserted through small incisions around the knee. The torn ACL is removed and replaced with a tendon graft. The graft is secured with fixation devices and the knee is thoroughly examined for any additional damage.",
    recovery:
      "Most patients begin physiotherapy within a week. Weight-bearing with crutches starts early, and full recovery typically takes 6–9 months depending on activity level and rehabilitation compliance.",
  },
  "advanced-acl-reconstruction": {
    title: "Advanced ACL Reconstruction",
    category: "Knee Arthroscopy & Ligament Reconstruction",
    overview:
      "Advanced ACL reconstruction addresses complex and revision cases where standard techniques may not suffice. This includes multi-ligament injuries, failed prior reconstructions, and anatomically challenging cases requiring specialized graft selection and fixation strategies.",
    benefits: [
      "Addresses complex and revision ACL cases",
      "Customized graft selection for optimal outcomes",
      "Multi-ligament injury management",
      "Advanced fixation techniques for better stability",
      "Improved success rates for challenging cases",
    ],
    process:
      "A detailed pre-operative assessment including MRI and clinical examination guides the surgical plan. Specialized grafts such as allografts or quadriceps tendon may be used. Anatomic tunnel placement and advanced fixation methods ensure optimal graft positioning.",
    recovery:
      "Rehabilitation is tailored to the complexity of the reconstruction. Patients typically require 9–12 months of structured physiotherapy before returning to high-demand activities.",
  },
  "arthroscopic-pcl-reconstruction": {
    title: "Arthroscopic PCL Reconstruction",
    category: "Knee Arthroscopy & Ligament Reconstruction",
    overview:
      "The posterior cruciate ligament (PCL) is the strongest ligament in the knee and is less commonly injured than the ACL. PCL injuries often result from dashboard injuries or direct trauma. Arthroscopic reconstruction restores posterior stability to the knee.",
    benefits: [
      "Restores posterior knee stability",
      "Minimally invasive arthroscopic technique",
      "Reduced risk of long-term arthritis",
      "Improved functional outcomes",
      "Targeted approach with minimal tissue disruption",
    ],
    process:
      "Using arthroscopic visualization, the damaged PCL is reconstructed with a tendon graft placed through anatomically positioned bone tunnels. The graft is secured to restore the natural biomechanics of the knee joint.",
    recovery:
      "Post-operative bracing and graduated physiotherapy are essential. Most patients achieve functional recovery within 6–9 months.",
  },
  "meniscus-repair": {
    title: "Meniscus Repair",
    category: "Knee Arthroscopy & Ligament Reconstruction",
    overview:
      "The meniscus is a C-shaped cartilage cushion in the knee that absorbs shock and stabilizes the joint. Tears can occur from sports, twisting injuries, or degenerative changes. Meniscus repair preserves this vital structure, maintaining long-term knee health.",
    benefits: [
      "Preserves natural knee cushioning",
      "Reduces risk of future arthritis",
      "Minimally invasive arthroscopic procedure",
      "Faster return to daily activities",
      "Maintains joint stability and function",
    ],
    process:
      "Through small arthroscopic portals, the torn meniscus is assessed. Repairable tears are sutured using specialized devices. Irreparable portions may be selectively trimmed while preserving as much healthy meniscus as possible.",
    recovery:
      "Recovery depends on the type of repair. Simple trims allow early weight-bearing within days, while sutured repairs may require 4–6 weeks of protected weight-bearing followed by physiotherapy.",
  },
  "mcl-lcl-reconstruction": {
    title: "MCL & LCL Reconstruction",
    category: "Knee Arthroscopy & Ligament Reconstruction",
    overview:
      "The medial collateral ligament (MCL) and lateral collateral ligament (LCL) provide side-to-side stability to the knee. Injuries range from mild sprains to complete tears and often occur alongside other ligament injuries. Reconstruction restores varus/valgus stability.",
    benefits: [
      "Restores lateral and medial knee stability",
      "Prevents chronic instability and giving way",
      "Can be combined with ACL/PCL reconstruction",
      "Improved long-term joint protection",
      "Customized surgical approach per injury pattern",
    ],
    process:
      "The damaged ligament is reconstructed using a tendon graft that replicates the anatomy of the native ligament. Fixation is achieved with screws or anchors at anatomic attachment points.",
    recovery:
      "Bracing and structured rehabilitation over 4–6 months are typical. Multi-ligament cases may require longer recovery timelines.",
  },
  "mpfl-reconstruction": {
    title: "MPFL Reconstruction",
    category: "Knee Arthroscopy & Ligament Reconstruction",
    overview:
      "The medial patellofemoral ligament (MPFL) is the primary restraint preventing lateral patellar dislocation. Recurrent kneecap dislocations often indicate MPFL insufficiency. Reconstruction stabilizes the patella and prevents further episodes.",
    benefits: [
      "Prevents recurrent kneecap dislocations",
      "Restores patellar tracking and stability",
      "Minimally invasive technique",
      "High success rates for long-term stability",
      "Enables return to sports and active lifestyle",
    ],
    process:
      "A gracilis tendon graft is harvested and tunneled from the patella to the femoral attachment point of the MPFL. The graft is tensioned and fixed to recreate the natural patellar restraint.",
    recovery:
      "Early range-of-motion exercises begin within the first week. Full recovery and return to sports typically occurs at 4–6 months.",
  },
  "high-tibial-osteotomy": {
    title: "High Tibial Osteotomy (HTO)",
    category: "Knee Preservation & Replacement",
    overview:
      "High tibial osteotomy is a joint-preserving procedure for younger, active patients with early arthritis affecting one side of the knee. By realigning the leg, weight is shifted away from the damaged compartment, relieving pain and delaying the need for knee replacement.",
    benefits: [
      "Preserves the natural knee joint",
      "Delays need for knee replacement by years",
      "Ideal for young, active patients",
      "Relieves pain from unicompartmental arthritis",
      "Allows continued participation in moderate activity",
    ],
    process:
      "A precise wedge-shaped cut is made in the tibia bone, which is then repositioned to correct the leg alignment. A plate and screws secure the bone in its corrected position.",
    recovery:
      "Partial weight-bearing begins early with crutches. Bone healing takes approximately 3 months, with full recovery at 6 months.",
  },
  "total-knee-replacement": {
    title: "Total Knee Replacement",
    category: "Knee Preservation & Replacement",
    overview:
      "Total knee replacement (arthroplasty) is one of the most successful procedures in modern orthopaedics. It replaces worn-out joint surfaces with prosthetic components, eliminating pain and restoring mobility in patients with advanced knee arthritis.",
    benefits: [
      "Dramatic pain relief for severe arthritis",
      "Restored walking ability and independence",
      "Long-lasting implants (20+ years)",
      "Improved quality of life",
      "Proven track record of success",
    ],
    process:
      "The damaged cartilage and bone surfaces are carefully removed and replaced with metal and polyethylene components that recreate the natural knee mechanics. Precise alignment ensures optimal implant longevity.",
    recovery:
      "Patients typically walk with support on the first day after surgery. Full recovery takes 3–6 months with dedicated physiotherapy.",
  },
  "partial-knee-replacement": {
    title: "Partial Knee Replacement",
    category: "Knee Preservation & Replacement",
    overview:
      "Partial (unicompartmental) knee replacement targets only the damaged portion of the knee, preserving healthy bone, cartilage, and ligaments. It offers a more natural-feeling knee with faster recovery compared to total replacement.",
    benefits: [
      "Preserves healthy knee structures",
      "Smaller incision and less bone removal",
      "Faster recovery than total replacement",
      "More natural knee movement",
      "Less post-operative pain",
    ],
    process:
      "Only the affected compartment of the knee is resurfaced with a small prosthetic implant. The remaining healthy compartments and cruciate ligaments are preserved.",
    recovery:
      "Most patients resume light activities within 4–6 weeks and achieve full recovery by 3 months.",
  },
  "arthroscopic-shoulder-capsular-release": {
    title: "Arthroscopic Shoulder Capsular Release",
    category: "Shoulder Arthroscopy & Reconstruction",
    overview:
      "Frozen shoulder (adhesive capsulitis) causes severe stiffness and pain due to thickening and contracture of the shoulder capsule. When conservative treatment fails, arthroscopic capsular release provides targeted relief by surgically releasing the tightened tissue.",
    benefits: [
      "Immediate improvement in range of motion",
      "Minimally invasive with rapid recovery",
      "Effective for resistant frozen shoulder cases",
      "Reduced need for prolonged physiotherapy",
      "Low complication rate",
    ],
    process:
      "Through arthroscopic portals, the thickened shoulder capsule is systematically released using radiofrequency or electrocautery. The joint is then gently manipulated to restore full range of motion.",
    recovery:
      "Aggressive physiotherapy begins immediately after surgery. Most patients regain functional motion within 6–12 weeks.",
  },
  "arthroscopic-bankart-repair": {
    title: "Arthroscopic Bankart Repair",
    category: "Shoulder Arthroscopy & Reconstruction",
    overview:
      "A Bankart lesion is a tear of the labrum (cartilage rim) at the front of the shoulder socket, typically caused by dislocation. Arthroscopic Bankart repair reattaches the labrum to prevent recurrent shoulder instability and dislocations.",
    benefits: [
      "Prevents recurrent shoulder dislocations",
      "Restores shoulder stability for active use",
      "Minimally invasive arthroscopic technique",
      "High success rate (90%+)",
      "Enables return to sports and overhead activities",
    ],
    process:
      "Suture anchors are placed into the rim of the shoulder socket through arthroscopic portals. The torn labrum is reattached and secured, recreating the natural bumper that prevents dislocation.",
    recovery:
      "The arm is immobilized in a sling for 4–6 weeks. Progressive strengthening follows, with return to full activity at 4–6 months.",
  },
  "arthroscopic-rotator-cuff-repair": {
    title: "Arthroscopic Rotator Cuff Repair",
    category: "Shoulder Arthroscopy & Reconstruction",
    overview:
      "The rotator cuff is a group of four tendons that stabilize and move the shoulder. Tears cause pain, weakness, and loss of function. Arthroscopic repair reattaches the torn tendon to the bone, restoring strength and eliminating pain.",
    benefits: [
      "Restores shoulder strength and function",
      "Eliminates pain from rotator cuff tears",
      "Minimally invasive with small incisions",
      "Faster healing compared to open repair",
      "Improved overhead reaching ability",
    ],
    process:
      "Through small portals, the torn rotator cuff tendon is identified, mobilized, and reattached to the humeral head using suture anchors. Any associated pathology such as bone spurs is also addressed.",
    recovery:
      "Sling immobilization for 6 weeks followed by structured physiotherapy. Full strength recovery typically takes 4–6 months.",
  },
  "shoulder-replacement": {
    title: "Shoulder Replacement",
    category: "Shoulder Arthroscopy & Reconstruction",
    overview:
      "Shoulder replacement is performed for severe shoulder arthritis or complex fractures that cannot be treated by other means. Both anatomic and reverse shoulder replacement options are available depending on the condition of the rotator cuff and bone quality.",
    benefits: [
      "Dramatic pain relief for end-stage arthritis",
      "Restored shoulder movement and function",
      "Options for anatomic and reverse replacement",
      "Improved quality of life and independence",
      "Durable long-term results",
    ],
    process:
      "The damaged humeral head and/or glenoid are replaced with prosthetic components. In reverse replacement, the ball-and-socket configuration is switched to allow the deltoid muscle to power the shoulder when the rotator cuff is deficient.",
    recovery:
      "Sling use for 4–6 weeks with early passive motion. Active rehabilitation progresses over 3–6 months.",
  },
  "trauma-management": {
    title: "Trauma Management",
    category: "Trauma & Emergency Care",
    overview:
      "Dr. Shoaib Aslam Kurerr provides comprehensive emergency orthopaedic care for acute fractures, dislocations, and complex musculoskeletal injuries. With expertise in modern fracture fixation and damage control orthopaedics, patients receive timely, expert surgical intervention.",
    benefits: [
      "24/7 emergency orthopaedic care availability",
      "Modern fracture fixation techniques",
      "Expertise in polytrauma management",
      "Minimally invasive fracture surgery when possible",
      "Comprehensive post-injury rehabilitation planning",
    ],
    process:
      "Acute injuries are assessed with clinical examination and imaging. Fractures are stabilized using plates, screws, nails, or external fixators as appropriate. Dislocations are reduced and associated injuries are managed concurrently.",
    recovery:
      "Recovery timelines vary by injury severity. A structured rehabilitation programme is initiated as early as safely possible to optimize functional outcomes.",
  },
};

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

  return (
    <main>
      <section className="bg-primary py-16 md:py-20">
        <div className="container-wide px-4 md:px-8">
          <Link to="/services" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">{procedure.category}</p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground">{procedure.title}</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-4xl mx-auto space-y-12">
          <ScrollReveal>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-base">{procedure.overview}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Benefits</h2>
              <ul className="space-y-3">
                {procedure.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-accent shrink-0 mt-2" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">The Procedure</h2>
              <p className="text-muted-foreground leading-relaxed text-base">{procedure.process}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Recovery</h2>
              <p className="text-muted-foreground leading-relaxed text-base">{procedure.recovery}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-card rounded-xl p-8 card-shadow text-center">
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Consult Dr. Shoaib Aslam Kurerr
              </h3>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Get expert advice on whether {procedure.title.toLowerCase()} is the right treatment for your condition.
              </p>
              <BookingModal>
                <button className="inline-flex items-center justify-center gap-2 cta-gradient text-primary-foreground px-8 py-3 rounded-lg font-semibold text-base hover:opacity-90 transition-all">
                  Book Consultation
                </button>
              </BookingModal>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;
