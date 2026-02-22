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
          <div className="h-[2px] bg-slate-200 animate-pulse" />
          <div className="h-px bg-slate-100 animate-pulse" />
        </div>
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-300 animate-pulse">
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
        <div className="grid md:grid-cols-[1.15fr_0.85fr] border border-slate-200 hover:border-slate-300 transition-colors duration-500 overflow-hidden">

          {/* Image side */}
          <div className="aspect-[16/10] md:aspect-auto overflow-hidden bg-slate-100 min-h-[320px]">
            <img
              src={urlFor(post.mainImage).width(900).height(620).url()}
              alt={post.title}
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-[1100ms] ease-out"
            />
          </div>

          {/* Content side */}
          <div className="flex flex-col justify-between p-8 md:p-12 bg-slate-50/60 border-t md:border-t-0 md:border-l border-slate-200">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-8 bg-primary" />
                <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-primary">
                  Featured Article
                </p>
              </div>

              <h2 className="font-heading text-2xl md:text-[1.75rem] font-bold text-slate-900 leading-[1.25] tracking-tight mb-5 group-hover:text-primary transition-colors duration-300">
                {post.title}
              </h2>

              <p className="text-sm text-slate-500 leading-[1.85] line-clamp-4">
                {post.excerpt}…
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="h-px bg-slate-200" />
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400">
                  {formatDate(post.publishedAt)}
                </span>
                <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-900 group-hover:text-primary transition-colors duration-300">
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
      <Link
        to={`/blog/${post.slug.current}`}
        className="group flex flex-col h-full"
      >
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden bg-slate-100 mb-5 border border-slate-100">
          <img
            src={urlFor(post.mainImage).width(600).height(450).url()}
            alt={post.title}
            className="w-full h-full object-cover grayscale-[0.15] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700 ease-out"
          />
        </div>

        {/* Date */}
        <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-300 mb-3">
          {formatDate(post.publishedAt)}
        </p>

        {/* Title */}
        <h3 className="font-heading text-lg md:text-xl font-bold text-slate-900 leading-[1.3] tracking-tight mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2 flex-1">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-5">
          {post.excerpt}…
        </p>

        {/* CTA row */}
        <div className="mt-auto pt-4 border-t border-slate-100 group-hover:border-primary/20 transition-colors flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400 group-hover:text-primary transition-colors duration-200">
          Read Article
          <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform duration-200" />
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
      "excerpt": array::join(string::split(pt::text(body), "")[0..180], "")
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

      {/* ─── Masthead ──────────────────────────────────────────────────────── */}
      <header className="pt-24 md:pt-32 pb-14 border-b border-double border-slate-200">
        <div className="container-wide max-w-6xl px-6">

          {/* Eyebrow line */}
          <div className="flex items-center gap-3 mb-7">
            <span className="h-px w-12 bg-primary" />
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-slate-400">
              SK-Orthopaedics · Clinical Journal
            </p>
          </div>

          {/* Title row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="font-heading text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-none italic mb-5">
                The Journal
              </h1>
              <p className="text-sm text-slate-500 leading-[1.85] max-w-md">
                Evidence-based orthopaedic insights and surgical guides by{" "}
                <span className="font-bold text-slate-900">Dr. Shoaib Aslam Kurerr</span>,
                Consultant Orthopaedic Surgeon, Midwest Hospital Bahawalpur.
              </p>
            </div>

            {/* Issue numerals */}
            {posts.length > 0 && (
              <div className="flex items-end gap-7 shrink-0">
                <div className="text-right">
                  <p className="font-heading text-4xl font-bold text-slate-900 leading-none italic">
                    {String(posts.length + 47).padStart(3, "0")}
                  </p>
                  <p className="text-[8px] font-bold uppercase tracking-[0.35em] text-slate-300 mt-1">
                    Issue No.
                  </p>
                </div>
                <div className="h-10 w-px bg-slate-200 mb-1" />
                <div className="text-right">
                  <p className="font-heading text-4xl font-bold text-slate-900 leading-none italic">
                    {new Date().getFullYear()}
                  </p>
                  <p className="text-[8px] font-bold uppercase tracking-[0.35em] text-slate-300 mt-1">
                    Volume
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>
      </header>

      {/* ─── Featured ──────────────────────────────────────────────────────── */}
      {featured && (
        <section className="py-14 md:py-20 border-b border-slate-100">
          <div className="container-wide max-w-6xl px-6">
            <FeaturedPost post={featured} />
          </div>
        </section>
      )}

      {/* ─── Articles Grid ─────────────────────────────────────────────────── */}
      {rest.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container-wide max-w-6xl px-6">

            {/* Section heading */}
            <div className="flex items-center gap-5 mb-14">
              <div className="flex flex-col gap-[3px] shrink-0">
                <div className="h-[2px] w-8 bg-slate-900" />
                <div className="h-px w-8 bg-slate-300" />
              </div>
              <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-400 shrink-0">
                All Publications
              </p>
              <div className="h-px flex-1 bg-slate-100" />
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-300 shrink-0">
                {rest.length} Article{rest.length !== 1 ? "s" : ""}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
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
          <div className="flex flex-col gap-[3px] w-12 mx-auto mb-8">
            <div className="h-[2px] bg-slate-100" />
            <div className="h-px bg-slate-50" />
          </div>
          <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-300 mb-2">
            No Publications Yet
          </p>
          <p className="text-sm text-slate-400">Articles will appear once published from the CMS.</p>
        </section>
      )}

      {/* ─── Footer Strip ──────────────────────────────────────────────────── */}
      <footer className="border-t border-double border-slate-200 bg-slate-50/40 py-10">
        <div className="container-wide max-w-6xl px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="font-heading italic text-xl font-bold text-slate-900">The Journal</span>
          </div>
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-300">
            © {new Date().getFullYear()} SK-Orthopaedics · Bahawalpur, Punjab
          </p>
        </div>
      </footer>

    </main>
  );
};

export default Blogs;
