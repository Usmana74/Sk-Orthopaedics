import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client, urlFor } from '@/lib/sanity';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { ArrowLeft, Share2, Calendar, Clock, ChevronRight, BookOpen } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Post {
  title: string;
  mainImage: any;
  publishedAt: string;
  body: any[];
  authorName: string;
  authorImage: any;
  authorBio: any[];
  categories: string[];
  readTime: number;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric",
  });
}

function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-[3px] ${className}`}>
      <div className="h-[2px] bg-slate-900" />
      <div className="h-px bg-slate-900/20" />
    </div>
  );
}

// ─── Custom PortableText Components ──────────────────────────────────────────
// Gives fine-grained control over the article body rendering

const ptComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-slate-600 leading-[1.9] text-base mb-6 font-[400]">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 mt-14 mb-5 tracking-tight leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-heading text-xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-10 pl-6 border-l-[3px] border-blue-600 bg-blue-50/40 py-4 pr-4 rounded-r-sm">
        <p className="font-heading text-lg italic text-slate-700 leading-relaxed mb-0">{children}</p>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-6 space-y-2 list-none pl-0">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-6 space-y-2 list-none pl-0 counter-reset-item">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3 text-slate-600 text-base leading-relaxed">
        <span className="mt-[0.55em] w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li className="flex items-start gap-3 text-slate-600 text-base leading-relaxed">
        <span className="font-bold text-blue-600 text-sm shrink-0 tabular-nums">{children}</span>
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-slate-900">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-slate-700">{children}</em>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 underline decoration-blue-200 underline-offset-2 hover:decoration-blue-600 transition-all"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => (
      <figure className="my-10 border border-slate-100 overflow-hidden shadow-sm">
        <img
          src={urlFor(value).width(800).url()}
          alt={value.alt || ""}
          className="w-full h-auto object-cover"
        />
        {value.caption && (
          <figcaption className="px-4 py-2.5 bg-slate-50 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 border-t border-slate-100">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
};

// ─── Loading State ────────────────────────────────────────────────────────────

function ArticleSkeleton() {
  return (
    <main className="bg-white min-h-screen">
      <nav className="sticky top-0 h-14 bg-white/80 backdrop-blur-md border-b border-slate-100 z-50" />
      <div className="max-w-2xl mx-auto px-6 pt-20 pb-32 space-y-6">
        <div className="flex gap-3">
          <div className="h-5 w-24 bg-slate-100 rounded animate-pulse" />
          <div className="h-5 w-32 bg-slate-100 rounded animate-pulse" />
        </div>
        {[80, 60, 70].map((w) => (
          <div key={w} className={`h-8 w-[${w}%] bg-slate-100 rounded animate-pulse`} />
        ))}
        <div className="h-[300px] w-full bg-slate-100 animate-pulse rounded" />
        {[100, 95, 90, 85].map((w) => (
          <div key={w} className={`h-4 w-[${w}%] bg-slate-50 rounded animate-pulse`} />
        ))}
      </div>
    </main>
  );
}

// ─── Share Handler ────────────────────────────────────────────────────────────

async function handleShare(title: string) {
  if (navigator.share) {
    try {
      await navigator.share({ title, url: window.location.href });
    } catch { /* user cancelled */ }
  } else {
    await navigator.clipboard.writeText(window.location.href);
    // You could trigger a toast here
  }
}

// ─── Main Component ───────────────────────────────────────────────────────────

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [scrollPct, setScrollPct] = useState(0);

  // Fetch article
  useEffect(() => {
    const query = `*[_type == "post" && slug.current == $slug][0] {
      title,
      mainImage,
      publishedAt,
      body,
      "authorName": author->name,
      "authorImage": author->image,
      "authorBio": author->bio,
      "categories": categories[]->title,
      "readTime": round(length(pt::text(body)) / 900)
    }`;
    client.fetch(query, { slug }).then((data) => {
      setPost(data);
      setLoading(false);
    });
  }, [slug]);

  // Reading progress bar
  useEffect(() => {
    function onScroll() {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(docH > 0 ? (window.scrollY / docH) * 100 : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (loading) return <ArticleSkeleton />;

  if (!post) {
    return (
      <main className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Divider className="max-w-[48px] mx-auto mb-8" />
          <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-300 mb-2">
            Article Not Found
          </p>
          <Link to="/blog" className="text-xs text-blue-600 underline underline-offset-2">
            Return to the Journal
          </Link>
        </div>
      </main>
    );
  }

  const primaryCategory = post.categories?.[0] || "Clinical Update";

  return (
    <main className="bg-white min-h-screen">

      {/* ─── Progress Bar ─────────────────────────────────────────────────── */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-blue-600 z-[60] transition-all duration-75 ease-linear"
        style={{ width: `${scrollPct}%` }}
      />

      {/* ─── Sticky Sub-Navbar ────────────────────────────────────────────── */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-100 z-50 shadow-[0_1px_12px_rgba(0,0,0,0.04)]">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between gap-4">

          {/* Back */}
          <Link
            to="/blog"
            className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400 hover:text-blue-600 transition-colors shrink-0"
          >
            <ArrowLeft size={13} strokeWidth={2.5} />
            The Journal
          </Link>

          {/* Breadcrumb title (hidden on mobile) */}
          <div className="hidden md:flex items-center gap-2 min-w-0">
            <ChevronRight size={12} className="text-slate-200 shrink-0" />
            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500 truncate">
              {post.title}
            </span>
          </div>

          {/* Share */}
          <button
            onClick={() => handleShare(post.title)}
            className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-blue-600 transition-colors shrink-0"
            aria-label="Share article"
          >
            <Share2 size={13} strokeWidth={2} />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </nav>

      {/* ─── Article Content ──────────────────────────────────────────────── */}
      <article className="pt-14 md:pt-20 pb-32">
        <div className="max-w-2xl mx-auto px-6">

          {/* ── Editorial Header ── */}
          <header className="mb-10">

            {/* Category + date row */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] border border-blue-200 text-blue-600 bg-blue-50 rounded-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                {primaryCategory}
              </span>
              {post.categories?.slice(1).map((cat) => (
                <span
                  key={cat}
                  className="inline-flex items-center px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.15em] border border-slate-200 text-slate-500 bg-slate-50 rounded-sm"
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="font-heading text-3xl md:text-[2.6rem] font-bold text-slate-900 leading-[1.2] tracking-tight mb-7">
              {post.title}
            </h1>

            {/* Meta strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                <Calendar size={11} strokeWidth={2} />
                {formatDate(post.publishedAt)}
              </div>
              {post.readTime > 0 && (
                <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  <Clock size={11} strokeWidth={2} />
                  {post.readTime} min read
                </div>
              )}
              <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                <BookOpen size={11} strokeWidth={2} />
                Peer Reviewed
              </div>
            </div>

            {/* Double-rule separator */}
            <Divider className="mt-8" />
          </header>

          {/* ── Contained Hero Image ── */}
          <ScrollReveal>
            <figure className="mb-12 border border-slate-100 overflow-hidden shadow-sm">
              <div className="max-h-[420px] overflow-hidden">
                <img
                  src={urlFor(post.mainImage).width(1200).height(840).url()}
                  alt={post.title}
                  className="w-full object-cover object-center"
                  style={{ maxHeight: 420 }}
                />
              </div>
              <div className="bg-slate-50 px-4 py-2.5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-slate-400">
                  Clinical Reference Image
                </span>
                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-300">
                  SK-Orthopaedics · Bahawalpur
                </span>
              </div>
            </figure>
          </ScrollReveal>

          {/* ── Drop-cap intro rule ── */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-slate-100" />
            <span className="text-[8px] font-bold uppercase tracking-[0.35em] text-slate-300">
              Article Begins Below
            </span>
            <div className="h-px flex-1 bg-slate-100" />
          </div>

          {/* ── Article Body ── */}
          <ScrollReveal>
            <div className="[&>p:first-of-type::first-letter]:font-heading [&>p:first-of-type::first-letter]:text-5xl [&>p:first-of-type::first-letter]:font-bold [&>p:first-of-type::first-letter]:float-left [&>p:first-of-type::first-letter]:mr-2 [&>p:first-of-type::first-letter]:mt-1 [&>p:first-of-type::first-letter]:leading-none [&>p:first-of-type::first-letter]:text-slate-900">
              <PortableText value={post.body} components={ptComponents} />
            </div>
          </ScrollReveal>

          {/* ─── End-of-article rule ── */}
          <Divider className="mt-16 mb-14" />

          {/* ─── Author Signature ─────────────────────────────────────────── */}
          <footer>
            <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-300 mb-6">
              Medical Review &amp; Authorship
            </p>

            <div className="flex items-start gap-5 p-6 border border-slate-100 bg-slate-50/50">
              {/* Avatar */}
              {post.authorImage && (
                <img
                  src={urlFor(post.authorImage).width(120).height(120).url()}
                  alt={post.authorName}
                  className="w-14 h-14 rounded-full object-cover grayscale border-2 border-white shadow-sm shrink-0"
                />
              )}

              {/* Author info */}
              <div className="min-w-0">
                <p className="font-heading text-lg font-bold text-slate-900 leading-tight mb-0.5">
                  {post.authorName}
                </p>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
                  Consultant Orthopaedic Surgeon
                </p>
                {post.authorBio && (
                  <div className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    <PortableText
                      value={post.authorBio}
                      components={{
                        block: {
                          normal: ({ children }) => <p className="mb-0">{children}</p>,
                        },
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Back to Journal CTA */}
            <div className="mt-10 text-center">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400 hover:text-blue-600 transition-colors border border-slate-200 hover:border-blue-200 px-6 py-3"
              >
                <ArrowLeft size={11} />
                Return to The Journal
              </Link>
            </div>
          </footer>

        </div>
      </article>
    </main>
  );
};

export default BlogDetail;
