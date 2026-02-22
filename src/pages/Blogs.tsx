import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { client, urlFor } from '@/lib/sanity';
import ScrollReveal from "@/components/ScrollReveal";

// Keep your color mapping for categories
const categoryColors: Record<string, string> = {
  "Joint Replacement": "bg-blue-50 text-blue-700",
  "Sports Medicine": "bg-green-50 text-green-700",
  "Sports Surgery": "bg-emerald-50 text-emerald-700",
  "Arthritis Care": "bg-amber-50 text-amber-700",
  "Surgical Innovation": "bg-violet-50 text-violet-700",
  "Shoulder": "bg-sky-50 text-sky-700",
};

const Blogs = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // GROQ Query to fetch posts, their categories, and the plain text excerpt
    const query = `*[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      mainImage,
      publishedAt,
      "category": categories[0]->title,
      "excerpt": array::join(string::split(pt::text(body), "")[0..160], "")
    }`;

    client.fetch(query)
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 bg-primary/20 rounded-full mb-4"></div>
          <p className="text-muted-foreground font-medium italic">Loading articles...</p>
        </div>
      </div>
    );
  }

  // Destructure the first post as featured, the rest go to the grid
  const [featured, ...rest] = posts;

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
            Evidence-based articles on joint health and surgical options — written by Dr Shoaib Aslam Kurerr for patients across Southern Punjab.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-6xl mx-auto">

          {/* Featured Article (Dynamic) */}
          {featured && (
            <ScrollReveal>
              <Link
                to={`/blog/${featured.slug.current}`}
                className="group block rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all mb-14"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="relative w-full lg:w-1/2 h-64 lg:h-auto min-h-[350px] overflow-hidden">
                    <img
                      src={urlFor(featured.mainImage).width(800).url()}
                      alt={featured.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="bg-card flex flex-col justify-center p-8 lg:p-12 lg:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[featured.category] || 'bg-slate-100 text-slate-600'}`}>
                        {featured.category || 'General'}
                      </span>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Latest News</span>
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 leading-snug group-hover:text-primary transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                      {featured.excerpt}...
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{new Date(featured.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <span className="text-primary text-sm font-semibold group-hover:underline">Read Article →</span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          )}

          {/* Divider */}
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Browse All Topics</span>
              <div className="flex-1 h-px bg-border" />
            </div>
          </ScrollReveal>

          {/* Blog Grid (Dynamic) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <ScrollReveal key={post.slug.current} delay={i * 0.08}>
                <Link
                  to={`/blog/${post.slug.current}`}
                  className="group flex flex-col bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={urlFor(post.mainImage).width(500).url()}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md shadow-sm ${categoryColors[post.category] || 'bg-white/90 text-slate-600'}`}>
                        {post.category || 'Medical'}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="font-heading text-base font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
                      {post.excerpt}...
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="text-xs text-muted-foreground">
                        {new Date(post.publishedAt).toLocaleDateString()}
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
                Dr Shoaib Aslam Kurerr offers professional consultations at MID-WEST HOSPITAL, Bahawalpur.
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