import { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { client, urlFor } from '@/lib/sanity';
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, BookOpen, Microscope, Activity, Bone, Stethoscope } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Post {
  title: string;
  slug: { current: string };
  mainImage: any;
  publishedAt: string;
  category: string;
  excerpt: string;
  readTime?: number;
}

// ─── Config ───────────────────────────────────────────────────────────────────

const CATEGORIES = [
  { label: "All", icon: BookOpen },
  { label: "Joint Replacement", icon: Bone },
  { label: "Sports Medicine", icon: Activity },
  { label: "Shoulder", icon: Stethoscope },
  { label: "Arthritis Care", icon: Microscope },
];

const CATEGORY_META: Record<string, { color: string; dot: string }> = {
  "Joint Replacement": { color: "text-blue-600 bg-blue-50 border-blue-200", dot: "bg-blue-500" },
  "Sports Medicine":  { color: "text-emerald-700 bg-emerald-50 border-emerald-200", dot: "bg-emerald-500" },
  "Shoulder":         { color: "text-sky-600 bg-sky-50 border-sky-200", dot: "bg-sky-500" },
  "Arthritis Care":   { color: "text-amber-700 bg-amber-50 border-amber-200", dot: "bg-amber-500" },
};

const DEFAULT_META = { color: "text-slate-600 bg-slate-50 border-slate-200", dot: "bg-slate-400" };

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric",
  });
}

function issueNumber(posts: Post[]) {
  // Derive a stable "issue" number from post count
  return String(posts.length + 47).padStart(3, "0");
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function CategoryBadge({ category }: { category: string }) {
  const meta = CATEGORY_META[category] ?? DEFAULT_META;
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em] border rounded-sm ${meta.color}`}>
      <span className={`w-1 h-1 rounded-full ${meta.dot}`} />
      {category || "Clinical"}
    </span>
  );
}

function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-[3px] ${className}`}>
      <div className="h-[2px] bg-slate-900" />
      <div className="h-px bg-slate-900/20" />
    </div>
  );
}

// ─── Loading State ────────────────────────────────────────────────────────────

function JournalSkeleton() {
  return (
    <main className="bg-white min-h-screen">
      <div className="h-screen flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col gap-[3px] w-24">
          <div className="h-[2px] bg-slate-200 animate-pulse" />
          <div className="h-px bg-slate-100 animate-pulse" />
        </div>
        <p className="text-[9px] font-bold uppercase tracking-[0.45em] text-slate-300">
          Loading Journal
        </p>
        <div className="flex gap-1.5">
          {[0.2, 0.35, 0.5].map((d) => (
            <div
              key={d}
              className="w-1 h-1 rounded-full bg-slate-300 animate-bounce"
              style={{ animationDelay: `${d}s` }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

// ─── Empty State ──────────────────────────────────────────────────────────────

function EmptyState({ category }: { category: string }) {
  return (
    <div className="py-32 text-center">
      <Divider className="max-w-[60px] mx-auto mb-10" />
      <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-slate-300 mb-3">
        No Articles Found
      </p>
      <p className="text-sm text-slate-400">
        No publications yet in <em className="not-italic font-bold text-slate-600">{category}</em>.
      </p>
    </div>
  );
}

// ─── Featured Card ────────────────────────────────────────────────────────────

function FeaturedCard({ post }: { post: Post }) {
  return (
    <ScrollReveal>
      <Link
        to={`/blog/${post.slug.current}`}
        className="group grid md:grid-cols-[1fr_0.85fr] gap-0 border border-slate-200 hover:border-slate-300 transition-all duration-500 shadow-sm hover:shadow-md overflow-hidden"
      >
        {/* Image Panel */}
        <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden bg-slate-100">
          <img
            src={urlFor(post.mainImage).width(900).height(600).url()}
            alt={post.title}
            className="w-full h-full object-cover grayscale-[0.35] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-[1200ms] ease-out"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 md:to-white/0" />
          {/* Issue tag on image */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 border border-white/60">
            <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-slate-500">
              Featured Analysis
            </span>
          </div>
        </div>

        {/* Content Panel */}
        <div className="p-8 md:p-10 flex flex-col justify-between bg-slate-50/60 border-l border-slate-200">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <CategoryBadge category={post.category} />
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-300">
                {formatDate(post.publishedAt)}
              </span>
            </div>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 leading-[1.25] tracking-tight mb-4 group-hover:text-blue-700 transition-colors duration-300">
              {post.title}
            </h2>

            <p className="text-sm text-slate-500 leading-[1.75] line-clamp-3 mb-6">
              {post.excerpt}…
            </p>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900 group-hover:text-blue-600 transition-colors">
            <span>Read Full Study</span>
            <ArrowRight
              size={13}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}

// ─── Grid Card ────────────────────────────────────────────────────────────────

function GridCard({ post, index }: { post: Post; index: number }) {
  return (
    <ScrollReveal delay={index * 0.07}>
      <Link
        to={`/blog/${post.slug.current}`}
        className="group flex flex-col h-full"
      >
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden bg-slate-100 mb-5">
          <img
            src={urlFor(post.mainImage).width(600).height(450).url()}
            alt={post.title}
            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700 ease-out"
          />
        </div>

        {/* Meta row */}
        <div className="flex items-center justify-between mb-3">
          <CategoryBadge category={post.category} />
          <span className="text-[8px] font-bold text-slate-300 uppercase tracking-[0.2em]">
            {formatDate(post.publishedAt)}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg font-bold text-slate-900 leading-[1.3] tracking-tight mb-3 group-hover:text-blue-700 transition-colors duration-200 line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-5 flex-1">
          {post.excerpt}…
        </p>

        {/* Separator + CTA */}
        <div>
          <div className="h-px bg-slate-100 mb-4 group-hover:bg-blue-100 transition-colors duration-300" />
          <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-blue-600 transition-colors duration-200">
            View Case
            <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </Link>
    </ScrollReveal>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

const Blogs = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const query = `*[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      mainImage,
      publishedAt,
      "category": categories[0]->title,
      "excerpt": array::join(string::split(pt::text(body), "")[0..160], ""),
      "readTime": round(length(pt::text(body)) / 1000)
    }`;

    client.fetch(query).then((data) => {
      setPosts(data || []);
      setLoading(false);
    });
  }, []);

  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  const featuredPost = activeCategory === "All" && filteredPosts[0];
  const gridPosts = activeCategory === "All" ? filteredPosts.slice(1) : filteredPosts;

  function handleCategoryClick(cat: string) {
    setActiveCategory(cat);
    // Soft scroll to grid when filtering
    if (cat !== "All") {
      setTimeout(() => gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    }
  }

  if (loading) return <JournalSkeleton />;

  return (
    <main className="bg-white min-h-screen">

      {/* ─── Masthead / Journal Header ───────────────────────────────────── */}
      <header className="pt-28 md:pt-32">
        <div className="max-w-6xl mx-auto px-6">

          {/* Double-rule top mark */}
          <Divider className="mb-8" />

          {/* Top meta strip */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-400">
              SK — Orthopaedics Clinical Journal
            </p>
            {posts.length > 0 && (
              <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-300">
                Issue No. {issueNumber(posts)} · {new Date().getFullYear()}
              </p>
            )}
          </div>

          {/* Title block */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10">
            <div className="max-w-xl">
              <h1 className="font-heading text-6xl md:text-8xl font-bold text-slate-900 tracking-tighter leading-none italic mb-5">
                The Journal
              </h1>
              <p className="text-sm text-slate-500 leading-[1.8] max-w-md">
                Evidence-based orthopaedic insights and surgical guides by{" "}
                <span className="font-bold text-slate-900">Dr. Shoaib Aslam Kurerr</span>,
                Consultant Orthopaedic Surgeon, Midwest Hospital Bahawalpur.
              </p>
            </div>

            {/* Issue stats */}
            <div className="flex gap-8 md:gap-10 pb-1 shrink-0">
              {[
                { value: posts.length, label: "Articles" },
                { value: CATEGORIES.length - 1, label: "Specialties" },
                { value: "Free", label: "Access" },
              ].map(({ value, label }) => (
                <div key={label} className="text-right">
                  <p className="font-heading text-2xl font-bold text-slate-900 leading-none">{value}</p>
                  <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-slate-300 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Double-rule bottom mark */}
          <Divider />
        </div>
      </header>

      {/* ─── Category Filter Bar ─────────────────────────────────────────── */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-[0_1px_12px_rgba(0,0,0,0.04)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-none">
            {CATEGORIES.map(({ label, icon: Icon }) => (
              <button
                key={label}
                onClick={() => handleCategoryClick(label)}
                className={`flex items-center gap-2 px-4 py-4 text-[9px] font-bold uppercase tracking-[0.2em] whitespace-nowrap border-b-2 transition-all duration-200 ${
                  activeCategory === label
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-slate-400 hover:text-slate-600 hover:border-slate-200"
                }`}
              >
                <Icon size={11} strokeWidth={2.5} />
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ─── Featured Article ─────────────────────────────────────────────── */}
      {featuredPost && (
        <section className="py-10 md:py-14 border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-300 mb-5">
              Editor's Selection
            </p>
            <FeaturedCard post={featuredPost} />
          </div>
        </section>
      )}

      {/* ─── Article Grid ─────────────────────────────────────────────────── */}
      <section ref={gridRef} className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* Section label */}
          {gridPosts.length > 0 && (
            <div className="flex items-center gap-4 mb-12">
              <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-400 shrink-0">
                {activeCategory === "All" ? "All Publications" : `${activeCategory} — ${gridPosts.length} articles`}
              </p>
              <div className="h-px flex-1 bg-slate-100" />
            </div>
          )}

          {/* Grid or empty */}
          {gridPosts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
              {gridPosts.map((post, i) => (
                <GridCard key={post.slug.current} post={post} index={i} />
              ))}
            </div>
          ) : (
            <EmptyState category={activeCategory} />
          )}
        </div>
      </section>

      {/* ─── Journal Footer Strip ─────────────────────────────────────────── */}
      <footer className="border-t border-slate-100 bg-slate-50/40 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <Divider className="mb-8" />
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="font-heading italic text-xl font-bold text-slate-900 mb-1">The Journal</p>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-300">
                SK-Orthopaedics · Bahawalpur, Punjab
              </p>
            </div>
            <p className="text-[9px] text-slate-300 font-bold uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} Dr. Shoaib Aslam Kurerr · All rights reserved
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
};

export default Blogs;
