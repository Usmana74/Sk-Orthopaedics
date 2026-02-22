import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client, urlFor } from '@/lib/sanity';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { ArrowLeft, Share2, Calendar, Clock } from 'lucide-react';
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
  readTime: number;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

async function handleShare(title: string) {
  if (navigator.share) {
    try { await navigator.share({ title, url: window.location.href }); }
    catch { /* cancelled */ }
  } else {
    await navigator.clipboard.writeText(window.location.href);
  }
}

// ─── Custom PortableText Renderer ────────────────────────────────────────────

const ptComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-slate-600 leading-[1.9] text-base mb-6">{children}</p>
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
      <blockquote className="my-10 pl-6 border-l-[3px] border-primary bg-slate-50 py-4 pr-6">
        <p className="font-heading text-lg italic text-slate-700 leading-relaxed m-0">{children}</p>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-5 space-y-2.5 list-none pl-0">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="my-5 space-y-2.5 list-none pl-0">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3 text-slate-600 text-base leading-relaxed">
        <span className="mt-[0.6em] w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="flex items-start gap-3 text-slate-600 text-base leading-relaxed">
        <span>{children}</span>
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
        className="text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary transition-all"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => (
      <figure className="my-10 border border-slate-100 overflow-hidden">
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

// ─── Skeleton ─────────────────────────────────────────────────────────────────

function ArticleSkeleton() {
  return (
    <main className="bg-white min-h-screen">
      <nav className="h-14 border-b border-slate-100" />
      <div className="max-w-2xl mx-auto px-6 pt-20 pb-32 animate-pulse space-y-5">
        <div className="h-4 w-32 bg-slate-100 rounded" />
        <div className="h-8 w-4/5 bg-slate-100 rounded" />
        <div className="h-8 w-3/5 bg-slate-100 rounded" />
        <div className="h-[360px] w-full bg-slate-50 rounded mt-6" />
        {[100,95,90,85,80].map(w => (
          <div key={w} className="h-4 bg-slate-50 rounded" style={{ width: `${w}%` }} />
        ))}
      </div>
    </main>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const query = `*[_type == "post" && slug.current == $slug][0] {
      title,
      mainImage,
      publishedAt,
      body,
      "authorName": author->name,
      "authorImage": author->image,
      "authorBio": author->bio,
      "readTime": round(length(pt::text(body)) / 900)
    }`;
    client.fetch(query, { slug }).then((data) => {
      setPost(data);
      setLoading(false);
    });
  }, [slug]);

  useEffect(() => {
    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(max > 0 ? (window.scrollY / max) * 100 : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (loading) return <ArticleSkeleton />;

  if (!post) {
    return (
      <main className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="flex flex-col gap-[3px] w-12 mx-auto mb-8">
            <div className="h-[2px] bg-slate-200" />
            <div className="h-px bg-slate-100" />
          </div>
          <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-300 mb-4">
            Article Not Found
          </p>
          <Link to="/blog" className="text-xs font-bold uppercase tracking-widest text-primary underline underline-offset-2">
            Return to The Journal
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen">

      {/* ─── Reading Progress ───────────────────────────────────────────────── */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-primary z-[60] transition-none"
        style={{ width: `${scrollPct}%` }}
      />

      {/* ─── Sticky Sub-Navbar ──────────────────────────────────────────────── */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-100 z-50">
        <div className="container-wide max-w-4xl px-6 h-14 flex items-center justify-between gap-4">

          <Link
            to="/blog"
            className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400 hover:text-primary transition-colors shrink-0"
          >
            <ArrowLeft size={13} strokeWidth={2.5} />
            The Journal
          </Link>

          {/* Truncated title — hidden on small screens */}
          <p className="hidden md:block text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500 truncate text-center flex-1 px-4">
            {post.title}
          </p>

          <button
            onClick={() => handleShare(post.title)}
            className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors shrink-0"
          >
            <Share2 size={13} strokeWidth={2} />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </nav>

      {/* ─── Article ────────────────────────────────────────────────────────── */}
      <article className="pt-14 md:pt-20 pb-32">
        <div className="container-wide max-w-2xl px-6">

          {/* ── Header ── */}
          <header className="mb-10">

            {/* Date + read time */}
            <div className="flex items-center gap-5 mb-7">
              <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400">
                <Calendar size={11} strokeWidth={2} />
                {formatDate(post.publishedAt)}
              </div>
              {post.readTime > 0 && (
                <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400">
                  <Clock size={11} strokeWidth={2} />
                  {post.readTime} min read
                </div>
              )}
            </div>

            {/* Title */}
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 leading-[1.2] tracking-tight mb-8">
              {post.title}
            </h1>

            {/* Double rule */}
            <div className="flex flex-col gap-[3px]">
              <div className="h-[2px] bg-slate-900" />
              <div className="h-px bg-slate-900/20" />
            </div>
          </header>

          {/* ── Hero Image ── */}
          <ScrollReveal>
            <figure className="mb-12 border border-slate-100 overflow-hidden">
              <div className="overflow-hidden" style={{ maxHeight: 420 }}>
                <img
                  src={urlFor(post.mainImage).width(1200).height(840).url()}
                  alt={post.title}
                  className="w-full object-cover"
                  style={{ maxHeight: 420 }}
                />
              </div>
              <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-slate-400">
                  Clinical Reference
                </span>
                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-300">
                  SK-Orthopaedics
                </span>
              </div>
            </figure>
          </ScrollReveal>

          {/* ── Body ── */}
          <ScrollReveal>
            {/* Drop-cap on first paragraph */}
            <div className="
              [&>p:first-of-type::first-letter]:font-heading
              [&>p:first-of-type::first-letter]:text-5xl
              [&>p:first-of-type::first-letter]:font-bold
              [&>p:first-of-type::first-letter]:float-left
              [&>p:first-of-type::first-letter]:mr-2
              [&>p:first-of-type::first-letter]:mt-1
              [&>p:first-of-type::first-letter]:leading-none
              [&>p:first-of-type::first-letter]:text-slate-900
            ">
              <PortableText value={post.body} components={ptComponents} />
            </div>
          </ScrollReveal>

          {/* ── End Rule ── */}
          <div className="flex flex-col gap-[3px] mt-16 mb-14">
            <div className="h-[2px] bg-slate-900" />
            <div className="h-px bg-slate-900/20" />
          </div>

          {/* ── Author ── */}
          <footer>
            <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-300 mb-6">
              Authored &amp; Reviewed By
            </p>

            <div className="flex items-start gap-5 p-6 border border-slate-100 bg-slate-50/50">
              {post.authorImage && (
                <img
                  src={urlFor(post.authorImage).width(120).height(120).url()}
                  alt={post.authorName}
                  className="w-14 h-14 rounded-full object-cover grayscale border-2 border-white shadow-sm shrink-0"
                />
              )}
              <div className="min-w-0">
                <p className="font-heading text-xl font-bold text-slate-900 leading-tight mb-0.5">
                  {post.authorName}
                </p>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary mb-3">
                  Consultant Orthopaedic Surgeon · Midwest Hospital, Bahawalpur
                </p>
                {post.authorBio && (
                  <div className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    <PortableText
                      value={post.authorBio}
                      components={{
                        block: { normal: ({ children }) => <p className="mb-0">{children}</p> },
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Back CTA */}
            <div className="mt-12 text-center">
              <Link
                to="/blog"
                className="inline-flex items-center gap-3 px-7 py-3.5 border border-slate-200 text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500 hover:border-primary hover:text-primary transition-colors duration-200"
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
