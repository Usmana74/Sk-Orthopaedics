import { useParams, Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

interface SubSection {
  title: string;
  text?: string;
  bullets?: string[];
  image?: { src: string; alt: string; caption: string };
}

interface BlogPost {
  title: string;
  category: string;
  date: string;
  readTime: string;
  heroImage: string;
  seoDescription: string;
  intro: string[];
  sections: SubSection[];
  whatsappTopic: string;
}

const blogData: Record<string, BlogPost> = {
  "understanding-knee-replacement": {
    title: "Understanding Knee Replacement: What Patients Need to Know",
    category: "Joint Replacement",
    date: "January 15, 2026",
    readTime: "6 min read",
    heroImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=85",
    seoDescription: "Expert guide to knee replacement surgery from Dr Shoaib Aslam Kurerr, leading orthopaedic surgeon in Bahawalpur. Learn about candidacy, procedure types, and recovery.",
    intro: [
      "For many patients in Bahawalpur and across Southern Punjab, knee pain has become an accepted part of daily life — getting up from a chair, climbing stairs, or simply walking to the market has become a struggle. But it does not have to be. Knee replacement surgery, or arthroplasty, is one of the most successful procedures in modern orthopaedics, offering lasting pain relief and restored mobility to thousands of Pakistanis each year.",
      "At MID-WEST HOSPITAL, Bahawalpur, Dr Shoaib Aslam Kurerr offers both total and partial knee replacement using internationally certified techniques. Whether your condition stems from osteoarthritis, rheumatoid arthritis, or a past injury, this article explains everything you need to know before making an informed decision about your joint health.",
    ],
    sections: [
      {
        title: "When Is Knee Replacement Recommended?",
        text: "Your orthopaedic surgeon will consider knee replacement when conservative treatments — physiotherapy, anti-inflammatory medications, and lifestyle changes — have not provided adequate relief. The key indicators include:",
        bullets: [
          "Severe knee pain that limits daily activities such as walking, cooking, or bathing",
          "Stiffness that prevents you from bending or fully straightening your knee",
          "Moderate to severe pain even at rest or during sleep",
          "Chronic inflammation and swelling unresponsive to medication",
          "Knee deformity — bowing inward or outward of the joint",
          "No improvement after 6 months of non-surgical care",
        ],
      },
      {
        title: "Types of Knee Replacement",
        image: {
          src: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900&q=80",
          alt: "Orthopaedic consultation for knee replacement in Bahawalpur",
          caption: "A thorough clinical evaluation determines which type of replacement is right for each patient.",
        },
        text: "Not every knee replacement is the same. Dr Shoaib Aslam Kurerr evaluates each patient individually to determine the most suitable approach based on your anatomy, age, activity level, and the pattern of joint damage.",
        bullets: [
          "Total Knee Replacement (TKR): Resurfaces all three compartments of the knee with metal and medical-grade polyethylene components. Recommended for advanced, widespread arthritis.",
          "Partial (Unicompartmental) Knee Replacement: Replaces only the damaged compartment, preserving healthy bone and ligament tissue. Results in a more natural feel and quicker recovery.",
          "Revision Knee Replacement: For patients whose previous implant has worn out or failed — requiring specialised expertise and careful planning.",
        ],
      },
      {
        title: "What to Expect: The Surgical Process",
        text: "Modern knee replacement surgery typically takes 1 to 2 hours under spinal or general anaesthesia. The damaged cartilage and bone are removed and replaced with precision-fitted implants that mimic the natural joint surface. At MID-WEST HOSPITAL, all procedures follow international sterilisation and implant standards.",
      },
      {
        title: "Recovery and Rehabilitation",
        text: "Rehabilitation is as important as the surgery itself. A structured programme ensures the best possible outcome:",
        bullets: [
          "Day 1: Most patients stand and take a few steps with physiotherapist support",
          "Week 1–2: Discharge home, walking with a frame or crutches",
          "Week 4–6: Walking independently for short distances",
          "Month 3: Return to light daily activities and gentle exercise",
          "Month 6: Full recovery, including stairs, light sports, and travel",
        ],
      },
      {
        title: "Long-Term Outcomes",
        text: "Modern knee implants have an outstanding track record. Over 95% of replacements last 15–20 years or more. Patients consistently report dramatic pain relief, restored independence, and a significantly improved quality of life. For patients in Bahawalpur who have waited years with chronic pain, the change after surgery is often described as transformational.",
      },
      {
        title: "When to Consult an Orthopaedic Surgeon in Bahawalpur",
        text: "If you or a family member has been living with persistent knee pain, do not wait until the joint deteriorates further. Early specialist consultation with Dr Shoaib Aslam Kurerr — the leading orthopaedic surgeon in Bahawalpur — allows for timely, appropriate treatment that may avoid or delay the need for replacement altogether.",
      },
    ],
    whatsappTopic: "Knee%20Replacement",
  },

  "sports-injuries-prevention": {
    title: "Sports Injuries: Prevention Tips for Athletes in Pakistan",
    category: "Sports Medicine",
    date: "January 8, 2026",
    readTime: "5 min read",
    heroImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=85",
    seoDescription: "Sports injury prevention advice from Dr Shoaib Aslam Kurerr, orthopaedic sports surgeon in Bahawalpur. Evidence-based tips for cricket, football, and hockey players across Pakistan.",
    intro: [
      "Sports injuries are on the rise across Pakistan — from cricket academies in Bahawalpur to football grounds in Multan and hockey fields in Rahim Yar Khan. Whether you are a competitive athlete or a weekend player, injury prevention is not optional — it is the foundation of a long, active sporting career.",
      "As an orthopaedic surgeon with a specialisation in sports medicine, Dr Shoaib Aslam Kurerr has treated hundreds of athletes from across Southern Punjab. The most common finding? Most injuries were preventable. This guide offers practical, evidence-based advice for athletes at every level.",
    ],
    sections: [
      {
        title: "The Most Common Sports Injuries in Pakistan",
        text: "Understanding which injuries occur most frequently is the first step toward prevention. In the clinics of Bahawalpur and surrounding cities, these are the injuries Dr Shoaib sees most:",
        bullets: [
          "ACL and PCL tears — sudden pivoting in cricket and football",
          "Meniscus injuries — twisting under load during play",
          "Rotator cuff strains — fast bowling, throwing, and overhead sports",
          "Ankle sprains — the most common injury across all field sports",
          "Stress fractures — overuse injuries in runners and fast bowlers",
          "Hamstring and quadriceps muscle tears — sprinting and jumping",
        ],
      },
      {
        title: "Proven Prevention Strategies",
        image: {
          src: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=900&q=80",
          alt: "Athlete warming up to prevent sports injuries",
          caption: "A structured warm-up reduces injury risk by up to 50% according to sports medicine research.",
        },
        bullets: [
          "Warm up properly: Spend 10–15 minutes on dynamic stretching and light cardio before any training session or match",
          "Strengthen supporting muscles: Targeted knee and hip strengthening significantly reduces ACL injury risk",
          "Use appropriate footwear: Cricket spikes, football boots, and running shoes are designed for specific surfaces and movements",
          "Progress gradually: Never increase training intensity or volume by more than 10% per week",
          "Allow recovery time: Rest is when the body repairs — overtraining is a leading cause of stress fractures and chronic injuries",
          "Address pain early: Playing through pain often turns a minor issue into a season-ending injury",
        ],
      },
      {
        title: "When to See a Sports Medicine Specialist",
        text: "Recognising when an injury requires professional assessment can prevent weeks of unnecessary suffering and avoid complications. Seek specialist care if you experience:",
        bullets: [
          "Sudden sharp pain during activity, especially with a 'pop' or 'snap' sound",
          "Significant swelling within 24 hours of an injury",
          "Inability to bear weight on a leg or lift an arm above the shoulder",
          "Joint instability — a feeling of the knee or ankle 'giving way'",
          "Persistent pain that does not improve with 48–72 hours of rest",
          "Recurrent injuries to the same joint or muscle group",
        ],
      },
      {
        title: "Getting Back to Sport Safely",
        text: "Returning too quickly after injury is one of the most common mistakes athletes make. Dr Shoaib Aslam Kurerr follows structured return-to-sport protocols that ensure the injured area has fully healed, strength and stability have been restored, and the athlete has been progressively reintroduced to sport-specific movements — minimising the risk of re-injury.",
      },
    ],
    whatsappTopic: "Sports%20Injuries%20and%20Prevention",
  },

  "acl-tears-treatment": {
    title: "ACL Tears: Causes, Diagnosis, and Modern Treatment Options",
    category: "Sports Surgery",
    date: "December 28, 2025",
    readTime: "7 min read",
    heroImage: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=1200&q=85",
    seoDescription: "Comprehensive guide to ACL tears — causes, diagnosis, and arthroscopic reconstruction — from Dr Shoaib Aslam Kurerr, orthopaedic surgeon in Bahawalpur.",
    intro: [
      "An ACL tear is one of the most feared injuries in sport. For cricketers, footballers, and athletes across Pakistan, the diagnosis can feel devastating — as if months or years of effort have been erased in a single moment. But with modern arthroscopic techniques, most patients recover fully and return to the sport they love.",
      "Dr Shoaib Aslam Kurerr, FCPS, MRCS-I (Edinburgh), is a leading orthopaedic surgeon in Bahawalpur with extensive experience in ACL reconstruction. This article explains the injury, how it is diagnosed, and what the most effective treatment options are in 2025.",
    ],
    sections: [
      {
        title: "How ACL Tears Occur",
        text: "The anterior cruciate ligament (ACL) is a critical stabilising structure that prevents the shin bone from sliding forward beneath the thigh bone. ACL injuries most commonly occur through:",
        bullets: [
          "Sudden changes in direction — pivoting, cutting, or side-stepping",
          "Abrupt deceleration — stopping hard while running",
          "Awkward landings from jumps with the knee in a vulnerable position",
          "Direct contact — tackles in football or collisions in hockey",
          "Hyperextension of the knee joint under load",
        ],
      },
      {
        title: "Recognising an ACL Injury",
        text: "Most ACL injuries are accompanied by a distinctive 'pop' sensation followed by rapid swelling of the knee. Other common signs include:",
        bullets: [
          "Immediate pain at the time of injury",
          "Significant swelling within 2–6 hours",
          "Feeling of instability — the knee 'giving way'",
          "Inability to continue playing or bear full weight",
          "Loss of full range of motion",
        ],
      },
      {
        title: "Diagnosis",
        image: {
          src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80",
          alt: "MRI diagnosis for ACL tear assessment",
          caption: "MRI imaging provides a precise view of the ACL and surrounding structures, guiding treatment decisions.",
        },
        text: "Accurate diagnosis combines a thorough clinical examination with MRI imaging. Dr Shoaib Aslam Kurerr performs specific orthopaedic tests — including the Lachman test and pivot shift — to assess ligament integrity, followed by MRI to confirm the tear and evaluate associated meniscal or cartilage damage.",
      },
      {
        title: "Surgical Reconstruction",
        text: "For active patients and athletes, ACL reconstruction is typically recommended to restore knee stability and enable return to sport. The procedure involves:",
        bullets: [
          "Keyhole (arthroscopic) surgery through 2–3 small incisions under 1cm",
          "Harvesting a tendon graft — from the hamstring, patella tendon, or a donor — to replace the torn ACL",
          "Fixing the graft in precise bone tunnels using absorbable or titanium hardware",
          "Thorough inspection of the entire knee joint, with any meniscal damage repaired at the same time",
          "Day-surgery procedure — most patients go home the same day or the following morning",
        ],
      },
      {
        title: "Recovery Timeline",
        bullets: [
          "Week 1–2: Swelling management, gentle range of motion exercises, walking with crutches",
          "Week 4–6: Stationary cycling, swimming, progressive strengthening",
          "Month 3: Light jogging on flat surfaces",
          "Month 4–5: Sport-specific agility and cutting drills",
          "Month 6–9: Return to competitive sport with clearance from Dr Shoaib",
        ],
      },
    ],
    whatsappTopic: "ACL%20Tear%20and%20Treatment%20Options",
  },

  "living-with-arthritis": {
    title: "Living with Arthritis: Managing Pain Without Surgery",
    category: "Arthritis Care",
    date: "December 15, 2025",
    readTime: "5 min read",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=85",
    seoDescription: "Evidence-based guide to managing arthritis pain without surgery, from Dr Shoaib Aslam Kurerr — best bone doctor in Bahawalpur.",
    intro: [
      "Arthritis is one of the most common causes of disability across Pakistan, affecting people of all ages — from young adults with autoimmune conditions to elderly patients in Bahawalpur with decades of joint wear. The word 'arthritis' simply means joint inflammation, but the reality for most patients is a daily struggle with pain, stiffness, and reduced independence.",
      "The good news is that the majority of arthritis patients can significantly improve their quality of life through non-surgical management. Dr Shoaib Aslam Kurerr, orthopaedic surgeon at MID-WEST HOSPITAL Bahawalpur, shares the most effective evidence-based strategies for living well with arthritis.",
    ],
    sections: [
      {
        title: "Understanding the Types of Arthritis",
        bullets: [
          "Osteoarthritis (OA): The most common form — caused by gradual wear and tear of joint cartilage over years. Affects the knees, hips, and hands most frequently.",
          "Rheumatoid Arthritis (RA): An autoimmune condition where the body attacks its own joint lining. Requires specialist rheumatological co-management.",
          "Post-traumatic Arthritis: Develops after a joint injury such as a fracture or ligament tear, often years later.",
          "Gout: Caused by uric acid crystal deposits in joints — highly manageable with dietary and medical intervention.",
        ],
      },
      {
        title: "Non-Surgical Management Approaches",
        image: {
          src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=80",
          alt: "Physiotherapy for arthritis management in Bahawalpur",
          caption: "Regular physiotherapy is one of the most effective tools for managing arthritis pain without surgery.",
        },
        bullets: [
          "Physiotherapy: Targeted exercises to strengthen muscles around affected joints, reducing load and improving stability",
          "Weight management: Losing even 5–10% of body weight significantly reduces knee joint load",
          "Anti-inflammatory medications: NSAIDs and topical gels provide effective short-term relief under medical supervision",
          "Joint injections: Corticosteroid or hyaluronic acid (lubricant) injections can provide months of relief",
          "Assistive devices: Walking aids, joint braces, and ergonomic footwear reduce strain during daily activities",
          "Hot and cold therapy: Alternating heat and ice packs help manage pain and stiffness at home",
        ],
      },
      {
        title: "The Best Exercises for Arthritic Joints",
        text: "Contrary to common belief, exercise is one of the best treatments for arthritis — not something to be avoided. The key is choosing the right type:",
        bullets: [
          "Swimming and water aerobics — zero impact, full range of motion",
          "Cycling — low impact, strengthens quadriceps without joint stress",
          "Walking — even 20 minutes daily significantly improves joint health",
          "Yoga and gentle stretching — improves flexibility and reduces morning stiffness",
          "Avoid: high-impact running, jumping, or sports that involve rapid direction changes on hard surfaces",
        ],
      },
      {
        title: "When Surgery Becomes the Right Option",
        text: "Non-surgical management is highly effective for most patients, but there comes a point where conservative care is no longer sufficient. Discuss surgical options with Dr Shoaib Aslam Kurerr if you experience severe, constant pain that prevents sleep or basic daily activities, complete loss of joint space on X-ray, and failure to respond to 6–12 months of structured conservative management.",
      },
    ],
    whatsappTopic: "Arthritis%20Pain%20Management",
  },

  "minimally-invasive-surgery": {
    title: "Minimally Invasive Surgery: Smaller Cuts, Faster Recovery",
    category: "Surgical Innovation",
    date: "December 1, 2025",
    readTime: "4 min read",
    heroImage: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&q=85",
    seoDescription: "Learn how minimally invasive orthopaedic surgery at MID-WEST HOSPITAL Bahawalpur delivers faster recovery with smaller incisions — Dr Shoaib Aslam Kurerr explains.",
    intro: [
      "Twenty years ago, orthopaedic surgery meant large incisions, significant blood loss, lengthy hospital stays, and months of recovery. Today, that picture has changed completely. Minimally invasive and arthroscopic techniques have transformed the field — allowing surgeons to perform complex procedures through incisions smaller than a keyhole.",
      "At MID-WEST HOSPITAL Bahawalpur, Dr Shoaib Aslam Kurerr offers a full range of arthroscopic procedures for both the knee and shoulder. Patients from Bahawalpur, Multan, Rahim Yar Khan, and across Southern Punjab benefit from techniques that were once only available in major metropolitan centres.",
    ],
    sections: [
      {
        title: "What Is Arthroscopic (Keyhole) Surgery?",
        text: "Arthroscopy uses a thin camera — an arthroscope — inserted through a small incision to visualise the inside of a joint in real time on a surgical monitor. Specialised instruments through additional small portals allow the surgeon to repair, reconstruct, or remove damaged tissue with exceptional precision. The entire joint is treated without the trauma of large open incisions.",
      },
      {
        title: "Procedures Performed Arthroscopically",
        image: {
          src: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=900&q=80",
          alt: "Arthroscopic surgery equipment in Bahawalpur orthopaedic hospital",
          caption: "Modern arthroscopic equipment allows surgeons to treat complex joint conditions through tiny incisions.",
        },
        bullets: [
          "ACL and PCL reconstruction — knee ligament repair through 2–3 small portals",
          "Meniscus repair or trimming — preserving the natural shock absorber of the knee",
          "Rotator cuff repair — stitching torn tendons in the shoulder without open surgery",
          "Bankart repair for shoulder instability — reattaching the torn labrum to prevent dislocation",
          "Frozen shoulder capsular release — freeing a stiff shoulder under direct vision",
          "Diagnostic arthroscopy — when imaging alone is inconclusive, arthroscopy provides definitive answers",
        ],
      },
      {
        title: "Key Benefits for Patients",
        bullets: [
          "Significantly less post-operative pain compared to open surgery",
          "Smaller scars — incisions are typically 5–10mm",
          "Reduced infection risk due to minimal tissue exposure",
          "Shorter hospital stay — many procedures are performed as day surgery",
          "Faster return to daily activities, work, and sport",
          "Less blood loss during surgery",
        ],
      },
      {
        title: "Is Minimally Invasive Surgery Right for You?",
        text: "Not every orthopaedic condition is suitable for an arthroscopic approach — complex reconstructions or total joint replacements require different techniques. During your consultation at MID-WEST HOSPITAL Bahawalpur, Dr Shoaib Aslam Kurerr will conduct a thorough evaluation and recommend the approach that offers you the best outcome.",
      },
    ],
    whatsappTopic: "Minimally%20Invasive%20Orthopaedic%20Surgery",
  },

  "shoulder-pain-specialist": {
    title: "Shoulder Pain: When to See an Orthopaedic Specialist",
    category: "Shoulder",
    date: "November 20, 2025",
    readTime: "5 min read",
    heroImage: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1200&q=85",
    seoDescription: "Shoulder pain guide from Dr Shoaib Aslam Kurerr, orthopaedic surgeon in Bahawalpur. Learn when to see a specialist and what treatment options are available.",
    intro: [
      "Shoulder pain is one of the most disabling musculoskeletal complaints — and one of the most frequently mismanaged. Patients across Bahawalpur and Southern Punjab often tolerate shoulder pain for months, assuming it will resolve on its own, only to arrive at the clinic with a condition that has become significantly more complex to treat.",
      "The shoulder is the most mobile joint in the human body — which also makes it one of the most vulnerable. Understanding the common causes of shoulder pain and knowing when to seek specialist care can make the difference between a simple outpatient procedure and major reconstructive surgery.",
    ],
    sections: [
      {
        title: "Common Causes of Shoulder Pain",
        bullets: [
          "Rotator cuff tears: Partial or complete tears of the tendons that hold the shoulder joint together — common in manual workers, fast bowlers, and people over 50",
          "Frozen shoulder (adhesive capsulitis): Painful stiffness that develops gradually, severely limiting movement — often related to diabetes or prolonged inactivity",
          "Shoulder impingement: Pinching of tendons between bones during arm elevation — a very common cause of pain in overhead workers and athletes",
          "Labral tears: Damage to the cartilage rim of the shoulder socket — often causes a clicking or catching sensation",
          "Shoulder arthritis: Degenerative joint disease causing chronic aching pain, especially in older patients",
          "Shoulder instability and dislocation: Recurrent dislocations that leave the shoulder feeling unstable",
        ],
      },
      {
        title: "Warning Signs That Require Urgent Specialist Evaluation",
        image: {
          src: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900&q=80",
          alt: "Shoulder examination by orthopaedic surgeon in Bahawalpur",
          caption: "A thorough clinical shoulder examination helps identify the exact source of pain and guide targeted treatment.",
        },
        bullets: [
          "Pain that persists beyond 2–3 weeks without improvement",
          "Inability to lift the arm above shoulder height",
          "Weakness when reaching, pushing, or lifting",
          "A shoulder that 'pops out' of place during activity",
          "Significant night pain disrupting sleep",
          "A visible deformity or step-off at the shoulder joint",
          "Tingling or numbness extending down the arm",
        ],
      },
      {
        title: "Treatment Options",
        text: "Treatment depends on the precise diagnosis and the patient's age, occupation, and activity level. Options available at MID-WEST HOSPITAL Bahawalpur include:",
        bullets: [
          "Physiotherapy programmes targeting rotator cuff strength and shoulder stability",
          "Cortisone or PRP injections for inflammatory conditions and impingement",
          "Arthroscopic rotator cuff repair — repairing torn tendons through keyhole surgery",
          "Arthroscopic Bankart repair — stabilising a dislocating shoulder",
          "Capsular release — treating frozen shoulder that has not responded to physiotherapy",
          "Shoulder replacement — total or reverse replacement for severe arthritis",
        ],
      },
      {
        title: "Getting a Diagnosis in Bahawalpur",
        text: "If you have been living with shoulder pain, a consultation with Dr Shoaib Aslam Kurerr — an MRCS-I (Edinburgh) certified orthopaedic surgeon — is your first step toward an accurate diagnosis and effective treatment. Clinics are held Monday to Saturday at MID-WEST HOSPITAL, Trust Colony, Bahawalpur.",
      },
    ],
    whatsappTopic: "Shoulder%20Pain%20Consultation",
  },
};

const categoryColors: Record<string, string> = {
  "Joint Replacement": "bg-blue-50 text-blue-700",
  "Sports Medicine": "bg-green-50 text-green-700",
  "Sports Surgery": "bg-emerald-50 text-emerald-700",
  "Arthritis Care": "bg-amber-50 text-amber-700",
  "Surgical Innovation": "bg-violet-50 text-violet-700",
  "Shoulder": "bg-sky-50 text-sky-700",
};

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogData[slug] : undefined;

  if (!post) {
    return (
      <main>
        <section className="section-padding text-center">
          <div className="container-wide">
            <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">The requested article could not be found.</p>
            <Link to="/blogs" className="text-primary font-medium hover:underline">← Back to Blog</Link>
          </div>
        </section>
      </main>
    );
  }

  const whatsappUrl = `https://wa.me/923002278796?text=Hello%20Dr.%20Shoaib%20Aslam%20Kurerr%2C%20I%20have%20read%20your%20blog%20on%20${post.whatsappTopic}%20and%20would%20like%20to%20book%20a%20consultation%20regarding%20my%20condition.`;

  return (
    <main>
      {/* Editorial Hero */}
      <section className="relative">
        <div className="relative h-[45vh] md:h-[55vh] overflow-hidden">
          <img
            src={post.heroImage}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 container-wide">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-5 transition-colors w-fit"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full w-fit mb-3 ${categoryColors[post.category]}`}>
              {post.category}
            </span>
            <h1 className="font-heading text-2xl md:text-4xl font-bold text-white leading-snug max-w-3xl mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-white/60 text-xs">
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="section-padding">
        <div className="container-wide max-w-3xl mx-auto">

          {/* Author byline */}
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10 pb-8 border-b border-border">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                {/* Medical cross icon */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                  <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Dr Shoaib Aslam Kurerr</p>
                <p className="text-xs text-muted-foreground">FCPS · ATLS (USA) · MRCS-I (Edinburgh) · Orthopaedic Surgeon, Bahawalpur</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Intro paragraphs */}
          <div className="space-y-5 mb-12">
            {post.intro.map((para, i) => (
              <ScrollReveal key={i}>
                <p className="text-foreground/80 leading-relaxed text-base md:text-[1.05rem]">{para}</p>
              </ScrollReveal>
            ))}
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {post.sections.map((section, i) => (
              <ScrollReveal key={i}>
                <div>
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4 leading-snug">
                    {section.title}
                  </h2>

                  {section.text && (
                    <p className="text-foreground/80 leading-relaxed mb-4">{section.text}</p>
                  )}

                  {/* In-content image */}
                  {section.image && (
                    <figure className="my-6 rounded-xl overflow-hidden card-shadow">
                      <img
                        src={section.image.src}
                        alt={section.image.alt}
                        className="w-full h-56 md:h-72 object-cover"
                      />
                      <figcaption className="bg-muted px-4 py-2.5 text-xs text-muted-foreground italic">
                        {section.image.caption}
                      </figcaption>
                    </figure>
                  )}

                  {section.bullets && (
                    <ul className="space-y-3 mt-3">
                      {section.bullets.map((bullet, bi) => (
                        <li key={bi} className="flex items-start gap-3">
                          <span className="mt-1.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary block" />
                          </span>
                          <span className="text-foreground/80 text-sm md:text-base leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Sticky CTA */}
          <ScrollReveal>
            <div className="mt-16 rounded-2xl overflow-hidden card-shadow">
              <div className="bg-primary p-8 md:p-10 text-center">
                {/* Stethoscope icon */}
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white">
                    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
                    <path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4" />
                    <circle cx="20" cy="10" r="2" />
                  </svg>
                </div>
                <p className="text-primary-foreground/70 text-xs uppercase tracking-widest mb-2">Expert Orthopaedic Care · Bahawalpur</p>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-primary-foreground mb-3">
                  Consult with Dr Shoaib Aslam Kurerr
                </h3>
                <p className="text-primary-foreground/70 max-w-md mx-auto text-sm leading-relaxed mb-6">
                  Have questions about your condition? Book a personal consultation at MID-WEST HOSPITAL, Bahawalpur — Monday to Saturday, 9 AM – 11 PM.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-white text-primary font-semibold px-7 py-3 rounded-lg text-sm hover:bg-white/90 transition-colors"
                >
                  {/* WhatsApp icon */}
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" style={{ color: "#25D366" }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Book Consultation via WhatsApp
                </a>
              </div>
              <div className="bg-muted px-8 py-4 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-muted-foreground text-center">
                <span>📍 MID-WEST HOSPITAL, Trust Colony, Street No. 3, Bahawalpur</span>
                <span className="hidden sm:block opacity-30">·</span>
                <span>📞 +92 300 2278796</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Back link */}
          <ScrollReveal>
            <div className="mt-10 text-center">
              <Link to="/blogs" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1.5">
                <ArrowLeft className="w-4 h-4" /> Browse all articles
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default BlogDetail;
