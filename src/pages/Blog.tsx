import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { client, urlFor } from '@/lib/sanity';
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Post {
  title: string;
  slug: { current: string };
  mainImage: any;
  publishedAt: string;
  excerpt: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ─── Loading State ────────────────────────────────────────────────────────────

function LoadingState() {
  return (
    <main className="bg-white min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="flex flex-col gap-[3px] w-16 mx-auto">
          <div className="h-[2px] bg-primary animate-pulse" />
          <div className="h-px bg-primary/30 animate-pulse" />
        </div>
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 animate-pulse">
          Loading Journal
        </p>
      </div>
    </main>
  );
}

// ─── Featured Card ────────────────────────────────────────────────────────────

function FeaturedPost({ post }: { post: Post }) {
  return (
    <ScrollReveal>
      <Link to={`/blog/${post.slug.current}`} className="group block">
        <div className="grid md:grid-cols-[1.15fr_0.85fr] border border-slate-200 hover:border-slate-300 transition-colors duration-500 overflow-hidden shadow-sm hover:shadow-md">

          {/* Image side */}
          <div className="aspect-[16/10] md:aspect-auto overflow-hidden bg-slate-100 min-h-[300px]">
            <img
              src={urlFor(post.mainImage).width(900).height(620).url()}
              alt={post.title}
              className="w-full h-full object-cover grayscale-[0.15] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-[1100ms] ease-out"
            />
          </div>

          {/* Content side */}
          <div className="flex flex-col justify-between p-8 md:p-10 bg-slate-50/70 border-t md:border-t-0 md:border-l border-slate-200">
            <div>
              <div className="flex items-center gap-3 mb-7">
                <span className="h-px w-8 bg-primary" />
                <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-primary">
                  Featured Article
                </p>
              </div>

              <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900 leading-[1.3] tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
                {post.title}
              </h2>

              <p className="text-sm text-slate-500 leading-[1.85] line-clamp-3">
                {post.excerpt}…
              </p>
            </div>

            <div className="mt-7 space-y-4">
              <div className="h-px bg-slate-200" />
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  {formatDate(post.publishedAt)}
                </span>
                <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-700 group-hover:text-primary transition-colors duration-300">
                  Read Article
                  <ArrowRight size={12} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}

// ─── Grid Card ────────────────────────────────────────────────────────────────

function ArticleCard({ post, index }: { post: Post; index: number }) {
  return (
    <ScrollReveal delay={index * 0.07}>
      <Link to={`/blog/${post.slug.current}`} className="group flex flex-col h-full bg-white border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-300">

        {/* Image */}
        <div className="aspect-[3/2] overflow-hidden bg-slate-100">
          <img
            src={urlFor(post.mainImage).width(500).height(333).url()}
            alt={post.title}
            className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700 ease-out"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          {/* Date */}
          <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-slate-300 mb-2.5">
            {formatDate(post.publishedAt)}
          </p>

          {/* Title */}
          <h3 className="font-heading text-base font-bold text-slate-900 leading-[1.35] tracking-tight mb-2.5 group-hover:text-primary transition-colors duration-200 line-clamp-2 flex-1">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-1 mb-4">
            {post.excerpt}…
          </p>

          {/* CTA */}
          <div className="pt-3.5 border-t border-slate-100 group-hover:border-primary/20 transition-colors flex items-center gap-1.5 text-[8px] font-bold uppercase tracking-[0.25em] text-slate-400 group-hover:text-primary duration-200">
            Read Article
            <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const Blogs = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      mainImage,
      publishedAt,
      "excerpt": array::join(string::split(pt::text(body), "")[0..160], "")
    }`;
    client.fetch(query).then((data) => {
      setPosts(data || []);
      setLoading(false);
    });
  }, []);

  if (loading) return <LoadingState />;

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <main className="bg-white min-h-screen">

      {/* ─── Hero Banner — matches site theme exactly ──────────────────────── */}
      <section
        className="relative flex items-center justify-center text-center"
        style={{
          background: "linear-gradient(135deg, #2a5298 0%, #3a6bc7 60%, #2a5298 100%)",
          minHeight: "300px",
          paddingTop: "120px",
          paddingBottom: "80px",
        }}
      >
        {/* Subtle grid texture overlay — matches site's hero pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,1) 40px,rgba(255,255,255,1) 41px), repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(255,255,255,1) 40px,rgba(255,255,255,1) 41px)",
          }}
        />

        <div className="relative z-10 max-w-2xl mx-auto px-6">
          {/* Eyebrow */}
          <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-white/60 mb-5">
            The Clinical Journal
          </p>

          {/* Title — matches "Our Services" heading style from your site */}
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
            Blogs
          </h1>

          {/* Sub-copy */}
          <p className="text-sm md:text-base text-white/70 leading-[1.85] max-w-lg mx-auto">
            Evidence-based orthopaedic insights and surgical guides by{" "}
            <span className="text-white font-semibold">Dr. Shoaib Aslam Kurerr</span>,
            Consultant Orthopaedic Surgeon, Midwest Hospital Bahawalpur.
          </p>
        </div>
      </section>

      {/* ─── Content area — white/light grey like rest of site ─────────────── */}
      <div className="bg-slate-50/60">

        {/* ─── Featured Article ──────────────────────────────────────────────── */}
        {featured && (
          <section className="py-14 md:py-20 border-b border-slate-200">
            <div className="container-wide max-w-6xl mx-auto px-6">

              {/* Section label */}
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-8 bg-primary" />
                <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary">
                  Featured Article
                </p>
              </div>

              <FeaturedPost post={featured} />
            </div>
          </section>
        )}

        {/* ─── Articles Grid ─────────────────────────────────────────────────── */}
        {rest.length > 0 && (
          <section className="py-14 md:py-20">
            <div className="container-wide max-w-6xl mx-auto px-6">

              {/* Section label */}
              <div className="flex items-center gap-4 mb-12">
                <span className="h-px w-8 bg-primary" />
                <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary shrink-0">
                  All Publications
                </p>
                <div className="h-px flex-1 bg-slate-200" />
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-300 shrink-0">
                  {rest.length} Article{rest.length !== 1 ? "s" : ""}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {rest.map((post, i) => (
                  <ArticleCard key={post.slug.current} post={post} index={i} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── Empty State ───────────────────────────────────────────────────── */}
        {posts.length === 0 && (
          <section className="py-40 text-center">
            <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-300 mb-2">
              No Publications Yet
            </p>
            <p className="text-sm text-slate-400">
              Articles will appear once published from the CMS.
            </p>
          </section>
        )}

      </div>

    </main>
  );
};

export default Blogs;
