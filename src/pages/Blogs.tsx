import ScrollReveal from "@/components/ScrollReveal";
import { Calendar } from "lucide-react";

const blogPosts = [
  { title: "Understanding Knee Replacement: What Patients Need to Know", excerpt: "Knee replacement surgery is one of the most common orthopaedic procedures. Learn about when it's recommended, what the surgery involves, and what to expect during recovery.", date: "January 15, 2026", category: "Joint Replacement" },
  { title: "Sports Injuries: Prevention Tips for Athletes in Pakistan", excerpt: "Whether you're a professional cricketer or a weekend footballer, sports injuries can sideline you for weeks. Here are practical tips to stay injury-free.", date: "January 8, 2026", category: "Sports Medicine" },
  { title: "ACL Tears: Causes, Diagnosis, and Modern Treatment Options", excerpt: "ACL injuries are increasingly common among active individuals. Discover the latest surgical techniques and rehabilitation protocols for optimal recovery.", date: "December 28, 2025", category: "Sports Surgery" },
  { title: "Living with Arthritis: Managing Pain Without Surgery", excerpt: "Arthritis affects millions worldwide. Explore non-surgical treatment options including physiotherapy, medications, and lifestyle modifications.", date: "December 15, 2025", category: "Arthritis Care" },
  { title: "Minimally Invasive Surgery: Smaller Cuts, Faster Recovery", excerpt: "Modern orthopaedic surgery has evolved dramatically. Learn how minimally invasive techniques are helping patients recover faster with less pain.", date: "December 1, 2025", category: "Surgery" },
  { title: "Shoulder Pain: When to See an Orthopaedic Specialist", excerpt: "Not all shoulder pain requires surgery. Understand the warning signs that indicate you should consult a specialist and available treatment options.", date: "November 20, 2025", category: "Shoulder" },
];

const Blogs = () => {
  return (
    <main>
      <section className="bg-primary py-20">
        <div className="container-wide px-4 md:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Health Blog</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">Expert insights on orthopaedic health, treatments, and recovery.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <ScrollReveal key={post.title} delay={i * 0.08}>
              <article className="bg-card rounded-xl overflow-hidden card-shadow h-full flex flex-col hover:card-shadow-hover transition-shadow duration-300">
                <div className="cta-gradient h-2" />
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">{post.category}</span>
                  <h2 className="font-heading text-lg font-semibold text-foreground mb-3 leading-snug">{post.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Blogs;
