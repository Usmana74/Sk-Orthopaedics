import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { client, urlFor } from '@/lib/sanity';
import ScrollReveal from "@/components/ScrollReveal";
import { Calendar, Clock, ArrowRight } from "lucide-react";

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
      "authorName": author->name,
      "authorImage": author->image,
      "excerpt": array::join(string::split(pt::text(body), "")[0..180], "")
    }`;

    client.fetch(query)
      .then((data) => {
        setPosts(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Sanity Fetch Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
          <p className="text-slate-400 font-medium animate-pulse">Fetching Insights...</p>
        </div>
      </div>
    );
  }

  const [featured, ...rest] = posts;

  return (
    <main className="bg-white">
      {/* ── Editorial Header ────────────────────────────────────────── */}
      <section className="pt-24 pb-16 border-b border-slate-100">
        <div className="container-wide px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
              The <span className="text-primary italic font-medium">Journal</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-body max-w-2xl">
              Professional orthopaedic perspectives, surgical innovations, and patient recovery guides from Midwest Hospital.
            </p>
          </div>
        </div>
      </section>

      {/* ── Featured Spotlight ──────────────────────────────────────── */}
      {featured && (
        <section className="py-12 border-b border-slate-100">
          <div className="container-wide px-4 md:px-8">
            <ScrollReveal>
              <Link to={`/blog/${featured.slug.current}`} className="group grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 overflow-hidden rounded-sm">
                  <img
                    src={urlFor(featured.mainImage).width(1200).url()}
                    alt={featured.title}
                    className="w-full h-[400px] md:h-[550px] object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full ${categoryColors[featured.category] || 'bg-slate-100 text-slate-500'}`}>
                      {featured.category || 'Clinical'}
                    </span>
                    <div className="h-px w-8 bg-slate-200" />
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Featured Cover</span>
                  </div>
                  <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-[1.1] group-hover:text-primary transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-slate-500 leading-relaxed mb-8 text-base">
                    {featured.excerpt}...
                  </p>
                  <div className="flex items-center gap-6 pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── Article Feed ────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50/50">
        <div className="container-wide px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
            {rest.map((post, i) => (
              <ScrollReveal key={post.slug.current} delay={i * 0.1}>
                <Link to={`/blog/${post.slug.current}`} className="group flex flex-col h-full">
                  <div className="relative mb-8 overflow-hidden rounded-sm aspect-[4/5]">
                    <img
                      src={urlFor(post.mainImage).width(600).url()}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-slate-900 shadow-xl">
                        {post.category || 'Orthopaedics'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-4">
                      <Calendar size={12} />
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}...
                    </p>
                    <div className="mt-auto flex items-center gap-3 pt-6 border-t border-slate-200/60">
                      <img src={urlFor(post.authorImage).url()} className="w-8 h-8 rounded-full grayscale" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900">{post.authorName}</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer Consultation ─────────────────────────────────────── */}
      <section className="py-24 border-t border-slate-100">
        <div className="container-wide px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              Expert Guidance
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Questions about your <span className="italic">recovery</span>?
            </h2>
            <p className="text-slate-500 text-lg mb-12 max-w-xl mx-auto">
              Bridge the gap between information and clinical expertise. Consult with Dr. Shoaib for personalized surgical plans.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/923002278796"
                className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-primary transition-all shadow-2xl shadow-slate-200"
              >
                Book Appointment
              </a>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-5 border border-slate-200 text-slate-900 font-bold text-xs uppercase tracking-[0.2em] hover:bg-slate-50 transition-all"
              >
                Find Our Clinic
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blogs;