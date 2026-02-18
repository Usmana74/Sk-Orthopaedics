import { useParams, Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import BookingModal from "@/components/BookingModal";
import { ArrowLeft, Calendar } from "lucide-react";

interface BlogPost {
  title: string;
  category: string;
  date: string;
  content: string[];
  subheadings: { title: string; text: string }[];
}

const blogData: Record<string, BlogPost> = {
  "understanding-knee-replacement": {
    title: "Understanding Knee Replacement: What Patients Need to Know",
    category: "Joint Replacement",
    date: "January 15, 2026",
    content: [
      "Knee replacement surgery, also known as knee arthroplasty, is one of the most successful procedures in modern orthopaedics. It involves replacing the damaged surfaces of the knee joint with artificial components made of metal and medical-grade polyethylene.",
      "This procedure is typically recommended for patients suffering from severe osteoarthritis, rheumatoid arthritis, or post-traumatic arthritis that has not responded adequately to conservative treatments such as medication, physiotherapy, and lifestyle modification.",
    ],
    subheadings: [
      { title: "When Is Knee Replacement Recommended?", text: "Your orthopaedic surgeon may recommend knee replacement when you experience persistent knee pain that limits daily activities such as walking, climbing stairs, or getting in and out of chairs. Significant stiffness, swelling, and deformity of the knee joint that do not improve with medications and physiotherapy are also key indicators." },
      { title: "Types of Knee Replacement", text: "There are two main types: Total Knee Replacement (TKR) which resurfaces the entire joint, and Partial Knee Replacement (UKR) which targets only the damaged compartment. Dr. Shoaib Aslam Kurerr evaluates each patient individually to determine the most suitable approach." },
      { title: "Recovery and Rehabilitation", text: "Most patients begin walking with support on the first day after surgery. A structured physiotherapy programme helps restore strength and range of motion. Full recovery typically takes 3 to 6 months, with many patients returning to pain-free daily activities within weeks." },
      { title: "Long-Term Outcomes", text: "Modern knee replacements have an excellent track record, with over 95% of implants lasting 15-20 years or more. Patients typically experience dramatic pain relief and improved quality of life." },
    ],
  },
  "sports-injuries-prevention": {
    title: "Sports Injuries: Prevention Tips for Athletes in Pakistan",
    category: "Sports Medicine",
    date: "January 8, 2026",
    content: [
      "Sports injuries are increasingly common in Pakistan, particularly among cricket, football, and hockey players. Whether you are a professional athlete or a recreational sports enthusiast, understanding injury prevention can keep you active and healthy.",
      "Proper warm-up routines, appropriate footwear, and gradually increasing training intensity are fundamental to staying injury-free.",
    ],
    subheadings: [
      { title: "Common Sports Injuries", text: "The most frequently seen sports injuries include ACL tears, meniscus injuries, rotator cuff tears, ankle sprains, and stress fractures. These injuries can range from mild sprains that heal with rest to severe tears requiring surgical intervention." },
      { title: "Prevention Strategies", text: "Warm up for at least 10-15 minutes before any physical activity. Strengthen the muscles around vulnerable joints through targeted exercises. Use proper sports equipment and protective gear appropriate for your sport." },
      { title: "When to See a Specialist", text: "Seek immediate medical attention if you experience severe pain, significant swelling, inability to bear weight, joint instability, or a visible deformity. Early diagnosis and treatment often lead to better outcomes and faster recovery." },
    ],
  },
  "acl-tears-treatment": {
    title: "ACL Tears: Causes, Diagnosis, and Modern Treatment Options",
    category: "Sports Surgery",
    date: "December 28, 2025",
    content: [
      "The anterior cruciate ligament (ACL) is one of the most important stabilizing structures of the knee. ACL injuries are common in sports that involve sudden stops, pivoting, and jumping, such as football, basketball, and cricket.",
      "Modern arthroscopic surgical techniques have revolutionized ACL reconstruction, allowing for minimally invasive surgery with excellent outcomes.",
    ],
    subheadings: [
      { title: "How ACL Tears Occur", text: "ACL tears typically happen during non-contact movements such as sudden direction changes, abrupt stops, or awkward landings from jumps. Direct contact injuries from collisions can also cause ACL damage, often along with other ligament or meniscus injuries." },
      { title: "Diagnosis", text: "Clinical examination by an experienced orthopaedic surgeon, combined with MRI imaging, provides accurate diagnosis. Dr. Shoaib Aslam Kurerr uses advanced diagnostic protocols to assess the extent of injury and plan the most appropriate treatment." },
      { title: "Surgical Reconstruction", text: "Arthroscopic ACL reconstruction uses a tendon graft to replace the torn ligament. The procedure is performed through small incisions, resulting in less pain and faster recovery compared to traditional open surgery." },
      { title: "Return to Activity", text: "With dedicated rehabilitation, most patients return to sports and high-demand activities within 6 to 9 months. A structured physiotherapy programme is essential for optimal recovery." },
    ],
  },
  "living-with-arthritis": {
    title: "Living with Arthritis: Managing Pain Without Surgery",
    category: "Arthritis Care",
    date: "December 15, 2025",
    content: [
      "Arthritis affects millions of people worldwide, causing joint pain, stiffness, and reduced mobility. While surgery may eventually be needed for severe cases, many patients can manage their symptoms effectively with conservative approaches.",
    ],
    subheadings: [
      { title: "Understanding Arthritis Types", text: "Osteoarthritis is the most common form, resulting from wear and tear of joint cartilage over time. Rheumatoid arthritis is an autoimmune condition affecting the joint lining. Each type requires a tailored management approach." },
      { title: "Non-Surgical Management", text: "Physiotherapy, weight management, regular low-impact exercise, and anti-inflammatory medications form the cornerstone of conservative arthritis management. Joint injections with corticosteroids or hyaluronic acid can provide additional relief." },
      { title: "Lifestyle Modifications", text: "Maintaining a healthy weight reduces stress on weight-bearing joints. Swimming, cycling, and yoga are excellent low-impact activities that keep joints mobile without excessive strain." },
    ],
  },
  "minimally-invasive-surgery": {
    title: "Minimally Invasive Surgery: Smaller Cuts, Faster Recovery",
    category: "Surgery",
    date: "December 1, 2025",
    content: [
      "Minimally invasive orthopaedic surgery has transformed patient care, offering the same outcomes as traditional open surgery but with smaller incisions, less pain, and significantly faster recovery times.",
    ],
    subheadings: [
      { title: "What Is Minimally Invasive Surgery?", text: "These techniques use small incisions (typically under 1cm) and specialized instruments, often with camera guidance (arthroscopy). This approach minimizes damage to surrounding tissues, reducing post-operative pain and scarring." },
      { title: "Applications in Orthopaedics", text: "Common procedures performed arthroscopically include ACL reconstruction, meniscus repair, rotator cuff repair, shoulder stabilization, and diagnostic evaluations of joint pathology." },
      { title: "Benefits for Patients", text: "Patients experience less blood loss, reduced infection risk, shorter hospital stays, and faster return to daily activities. Many arthroscopic procedures are performed as day-case surgeries." },
    ],
  },
  "shoulder-pain-specialist": {
    title: "Shoulder Pain: When to See an Orthopaedic Specialist",
    category: "Shoulder",
    date: "November 20, 2025",
    content: [
      "Shoulder pain is one of the most common musculoskeletal complaints. While many cases resolve with rest and physiotherapy, some conditions require specialist evaluation and potentially surgical intervention.",
    ],
    subheadings: [
      { title: "Common Causes of Shoulder Pain", text: "Rotator cuff tears, frozen shoulder (adhesive capsulitis), shoulder impingement, labral tears, and shoulder arthritis are among the most frequent causes of persistent shoulder pain." },
      { title: "Warning Signs to Watch For", text: "Seek specialist consultation if you experience pain that persists for more than two weeks, inability to raise your arm, shoulder weakness, recurrent dislocations, or night pain that disrupts sleep." },
      { title: "Treatment Options", text: "Treatment depends on the underlying cause and severity. Options range from physiotherapy and cortisone injections to arthroscopic surgery for rotator cuff repairs, Bankart repairs, and capsular releases." },
    ],
  },
};

const slugMap: Record<string, string> = {
  "understanding-knee-replacement": "understanding-knee-replacement",
  "sports-injuries-prevention": "sports-injuries-prevention",
  "acl-tears-treatment": "acl-tears-treatment",
  "living-with-arthritis": "living-with-arthritis",
  "minimally-invasive-surgery": "minimally-invasive-surgery",
  "shoulder-pain-specialist": "shoulder-pain-specialist",
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

  return (
    <main>
      <section className="bg-primary py-16 md:py-20">
        <div className="container-wide px-4 md:px-8">
          <Link to="/blogs" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <span className="text-accent font-semibold text-sm uppercase tracking-widest block mb-2">{post.category}</span>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-3">{post.title}</h1>
          <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
            <Calendar className="w-4 h-4" /> {post.date}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <article className="container-wide max-w-3xl mx-auto space-y-8">
          {post.content.map((p, i) => (
            <ScrollReveal key={i}>
              <p className="text-muted-foreground leading-relaxed text-base">{p}</p>
            </ScrollReveal>
          ))}

          {post.subheadings.map((sub, i) => (
            <ScrollReveal key={i}>
              <div>
                <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3">{sub.title}</h2>
                <p className="text-muted-foreground leading-relaxed text-base">{sub.text}</p>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal>
            <div className="bg-card rounded-xl p-8 card-shadow text-center mt-12">
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Need Expert Advice?</h3>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Consult Dr. Shoaib Aslam Kurerr for personalized orthopaedic care.
              </p>
              <BookingModal>
                <button className="inline-flex items-center justify-center gap-2 cta-gradient text-primary-foreground px-8 py-3 rounded-lg font-semibold text-base hover:opacity-90 transition-all">
                  Book Consultation
                </button>
              </BookingModal>
            </div>
          </ScrollReveal>
        </article>
      </section>
    </main>
  );
};

export default BlogDetail;
