import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const blogs = [
  {
    slug: "understanding-knee-replacement",
    title: "Understanding Knee Replacement: What Patients Need to Know",
    excerpt: "Knee arthroplasty is one of the most life-changing procedures in modern orthopaedics. Learn who is a candidate, what to expect, and how patients in Bahawalpur are returning to pain-free mobility.",
    category: "Joint Replacement",
    date: "January 15, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
  },
  {
    slug: "sports-injuries-prevention",
    title: "Sports Injuries: Prevention Tips for Athletes in Pakistan",
    excerpt: "Cricket, football, and hockey players across Southern Punjab face preventable injuries every season. Dr Shoaib Aslam Kurerr shares evidence-based strategies to keep athletes performing at their peak.",
    category: "Sports Medicine",
    date: "January 8, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
  },
  {
    slug: "acl-tears-treatment",
    title: "ACL Tears: Causes, Diagnosis, and Modern Treatment Options",
    excerpt: "An ACL tear can feel career-ending — but with modern arthroscopic techniques, most patients return to full activity within 6 to 9 months. Here's everything you need to know.",
    category: "Sports Surgery",
    date: "December 28, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&q=80",
  },
  {
    slug: "living-with-arthritis",
    title: "Living with Arthritis: Managing Pain Without Surgery",
    excerpt: "Millions of people in Pakistan live with chronic joint pain that can be significantly reduced through conservative, non-surgical approaches. Discover what's possible before surgery becomes necessary.",
    category: "Arthritis Care",
    date: "December 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  },
  {
    slug: "minimally-invasive-surgery",
    title: "Minimally Invasive Surgery: Smaller Cuts, Faster Recovery",
    excerpt: "Gone are the days of large incisions and months of bed rest. Modern keyhole surgery means patients from Bahawalpur to Multan are walking the day after major orthopaedic procedures.",
    category: "Surgical Innovation",
    date: "December 1, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80",
  },
  {
    slug: "shoulder-pain-specialist",
    title: "Shoulder Pain: When to See an Orthopaedic Specialist",
    excerpt: "Shoulder pain is the third most common musculoskeletal complaint in Pakistan. Knowing when to seek specialist care — rather than waiting — can be the difference between a simple fix and major surgery.",
    category: "Shoulder",
    date: "November 20, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80",
  },
];

const categoryColors: Record<string, string> = {
  "Joint Replacement": "bg-blue-50 text-blue-700",
  "Sports Medicine": "bg-green-50 text-green-700",
  "Sports Surgery": "bg-emerald-50 text-emerald-700",
  "Arthritis Care": "bg-amber-50 text-amber-700",
  "Surgical Innovation": "bg-violet-50 text-violet-700",
  "Shoulder": "bg-sky-50 text-sky-700",
};

const Blogs = () => {
  const [featured, ...rest] = blogs;

  return (
    <main>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container-wide px-4 md:px-8 text-center">
          <p className="text-primary-foreground/60 text-xs uppercase tracking-widest mb-3 font-medium">Patient Education</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Orthopaedic Health Blog
          </h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto text-sm leading-relaxed">
            Evidence-based articles on joint health, sports injuries, and surgical options — written for patients in Bahawalpur and across Southern Punjab.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-6xl mx-auto">

          {/* Featured Article */}
          <ScrollReveal>
            <Link
              to={`/blogs/${featured.slug}`}
              className="group block rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all mb-14"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="relative w-full lg:w-1/2 h-64 lg:h-auto min-h-[300px] overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="bg-card flex flex-col justify-center p-8 lg:p-12 lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[featured.category]}`}>
                      {featured.category}
                    </span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Featured</span>
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 leading-snug group-hover:text-primary transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{featured.date}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                      <span>{featured.readTime}</span>
                    </div>
                    <span className="text-primary text-sm font-semibold group-hover:underline">Read Article →</span>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Divider */}
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">All Articles</span>
              <div className="flex-1 h-px bg-border" />
            </div>
          </ScrollReveal>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.08}>
                <Link
                  to={`/blogs/${post.slug}`}
                  className="group flex flex-col bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all h-full"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm ${categoryColors[post.category]}`}>
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="font-heading text-base font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                        <span>{post.readTime}</span>
                      </div>
                      <span className="text-primary text-xs font-semibold group-hover:underline">Read →</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom CTA */}
          <ScrollReveal>
            <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center">
              <p className="text-primary-foreground/70 text-xs uppercase tracking-widest mb-3">Expert Orthopaedic Care</p>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Have Questions About Your Joint Health?
              </h3>
              <p className="text-primary-foreground/70 max-w-lg mx-auto text-sm mb-7 leading-relaxed">
                Dr Shoaib Aslam Kurerr offers consultations at MID-WEST HOSPITAL, Bahawalpur for patients across Southern Punjab.
              </p>
              <a
                href="https://wa.me/923002278796?text=Hello%20Dr.%20Shoaib%20Aslam%20Kurerr%2C%20I%20would%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-7 py-3 rounded-lg text-sm hover:bg-white/90 transition-colors"
              >
                Book a Consultation
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Blogs;
