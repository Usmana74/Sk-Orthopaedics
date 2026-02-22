import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { client, urlFor } from '@/lib/sanity';
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Search, Filter } from "lucide-react";

const categoryColors: Record<string, string> = {
  "Joint Replacement": "text-blue-600 bg-blue-50 border-blue-100",
  "Sports Medicine": "text-emerald-600 bg-emerald-50 border-emerald-100",
  "Shoulder": "text-sky-600 bg-sky-50 border-sky-100",
  "Arthritis Care": "text-amber-600 bg-amber-50 border-amber-100",
};

const Blogs = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const query = `*[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      mainImage,
      publishedAt,
      "category": categories[0]->title,
      "excerpt": array::join(string::split(pt::text(body), "")[0..140], "")
    }`;

    client.fetch(query).then((data) => {
      setPosts(data || []);
      setLoading(false);
    });
  }, []);

  const categories = ["All", "Joint Replacement", "Sports Medicine", "Shoulder", "Arthritis Care"];
  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  if (loading) return <div className="h-screen flex items-center justify-center bg-white text-[10px] uppercase tracking-[0.4em] text-slate-400 animate-pulse font-bold">Initializing Journal...</div>;

  return (
    <main className="bg-white min-h-screen">
      {/* ── Updated Professional Top Bar ──────────────────────────── */}
      <header className="pt-24 pb-12 border-b-4 border-double border-slate-100">
        <div className="container-wide max-w-6xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-primary" />
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Clinical Publication v2.0</p>
              </div>
              <h1 className="font-heading text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tighter italic">
                The Journal
              </h1>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-lg">
                Expert orthopaedic perspectives and evidence-based surgical guides curated by <span className="text-slate-900 font-bold">Dr. Shoaib Aslam Kurerr</span> for the medical community of Southern Punjab.
              </p>
            </div>

            {/* Sub-Nav/Filter Bar */}
            <div className="flex flex-wrap gap-2 pt-4 md:pt-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all border rounded-sm ${
                    activeCategory === cat 
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" 
                    : "bg-white text-slate-400 border-slate-100 hover:border-slate-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ── Featured Section (Slightly Smaller) ────────────────────── */}
      {filteredPosts.length > 0 && activeCategory === "All" && (
        <section className="py-12 bg-slate-50/40 border-b border-slate-100">
          <div className="container-wide max-w-6xl px-6">
            <ScrollReveal>
              <Link to={`/blog/${filteredPosts[0].slug.current}`} className="group grid md:grid-cols-2 gap-10 items-center">
                <div className="aspect-[16/9] overflow-hidden rounded-sm bg-slate-200 border border-slate-200 shadow-sm">
                  <img src={urlFor(filteredPosts[0].mainImage).width(800).url()} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000" alt={filteredPosts[0].title} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-4 text-primary">
                    <span className="text-[10px] font-bold uppercase tracking-widest">Featured Analysis</span>
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-primary transition-colors">{filteredPosts[0].title}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">{filteredPosts[0].excerpt}...</p>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900 group-hover:gap-4 flex items-center gap-2 transition-all">Read Full Study <ArrowRight size={14} /></span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── Grid Section (Remains the same as you liked) ───────────── */}
      <section className="py-20">
        <div className="container-wide max-w-6xl px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {(activeCategory === "All" ? filteredPosts.slice(1) : filteredPosts).map((post, i) => (
              <ScrollReveal key={post.slug.current} delay={i * 0.05}>
                <Link to={`/blog/${post.slug.current}`} className="group flex flex-col h-full border-b border-slate-100 pb-10">
                  <div className="aspect-[4/3] mb-6 overflow-hidden rounded-sm bg-slate-100">
                    <img src={urlFor(post.mainImage).width(500).url()} className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={post.title} />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest border ${categoryColors[post.category] || 'border-slate-100 text-slate-400'}`}>
                      {post.category || 'Clinical'}
                    </span>
                    <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-6">{post.excerpt}...</p>
                  <div className="mt-auto text-primary text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    View Case <ArrowRight size={12} />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blogs;