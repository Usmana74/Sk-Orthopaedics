import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { client, urlFor } from '@/lib/sanity';
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Calendar } from "lucide-react";

const categoryColors: Record<string, string> = {
  "Joint Replacement": "text-blue-600 bg-blue-50",
  "Sports Medicine": "text-emerald-600 bg-emerald-50",
  "Shoulder": "text-sky-600 bg-sky-50",
  "Arthritis Care": "text-amber-600 bg-amber-50",
};

const Blogs = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <div className="h-screen flex items-center justify-center bg-white animate-pulse text-slate-400 uppercase tracking-widest text-xs">Loading Journal...</div>;

  const [featured, ...rest] = posts;

  return (
    <main className="bg-white min-h-screen">
      {/* ── Compact Header ── */}
      <section className="pt-20 pb-12 border-b border-slate-100">
        <div className="container-wide max-w-6xl px-6">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Clinical Insights</h1>
          <p className="text-slate-500 text-sm max-w-lg leading-relaxed">Evidence-based orthopaedic guides and surgical updates from Dr. Shoaib Aslam Kurerr.</p>
        </div>
      </section>

      {/* ── Refined Featured Section ── */}
      {featured && (
        <section className="py-12 bg-slate-50/30">
          <div className="container-wide max-w-6xl px-6">
            <ScrollReveal>
              <Link to={`/blog/${featured.slug.current}`} className="group grid md:grid-cols-2 gap-10 items-center bg-white p-6 rounded-sm border border-slate-100 shadow-sm transition-all hover:shadow-md">
                <div className="aspect-[16/10] overflow-hidden rounded-sm bg-slate-100">
                  <img src={urlFor(featured.mainImage).width(800).url()} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" alt={featured.title} />
                </div>
                <div>
                  <span className={`inline-block px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest mb-4 ${categoryColors[featured.category] || 'bg-slate-100 text-slate-500'}`}>
                    {featured.category || 'Featured'}
                  </span>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-primary transition-colors">{featured.title}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">{featured.excerpt}...</p>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-2">Read Analysis <ArrowRight size={12} /></span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── Professional Small Grid ── */}
      <section className="py-16">
        <div className="container-wide max-w-6xl px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {rest.map((post) => (
              <ScrollReveal key={post.slug.current}>
                <Link to={`/blog/${post.slug.current}`} className="group block border-t border-slate-100 pt-6">
                  <div className="aspect-video mb-6 overflow-hidden rounded-sm bg-slate-50">
                    <img src={urlFor(post.mainImage).width(500).url()} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={post.title} />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[9px] font-bold uppercase tracking-tighter text-slate-400">{new Date(post.publishedAt).toLocaleDateString()}</span>
                    <div className="h-px w-4 bg-slate-200" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-primary italic">{post.category}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-slate-900 mb-3 leading-tight group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-4">{post.excerpt}...</p>
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