import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client, urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[ _type == "post" && slug.current == $slug ][0] {
      title,
      mainImage,
      publishedAt,
      body,
      "authorName": author->name,
      "authorImage": author->image,
      "authorBio": author->bio,
      "categories": categories[]->title
    }`;

    client.fetch(query, { slug })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch(console.error);
  }, [slug]);

  if (loading) return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
    </div>
  );
  
  if (!post) return <div className="h-screen flex items-center justify-center font-heading text-xl">Article not found.</div>;

  return (
    <main className="bg-white min-h-screen">
      {/* ── Progress Bar (Top) ────────────────────────────────────── */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-50 z-50">
        <div className="h-full bg-primary transition-all duration-300" style={{ width: '0%' }} id="reading-progress" />
      </div>

      {/* ── Article Header ────────────────────────────────────────── */}
      <header className="pt-24 pb-12 border-b border-slate-100">
        <div className="container-wide max-w-4xl px-4">
          <Link to="/blog" className="inline-flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-12 hover:text-primary transition-colors">
            <ArrowLeft size={14} /> Back to the Journal
          </Link>

          <div className="flex gap-3 mb-8">
            {post.categories?.map((cat: string) => (
              <span key={cat} className="text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20 px-3 py-1 rounded-sm">
                {cat}
              </span>
            ))}
          </div>

          <h1 className="font-heading text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] mb-10 tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img src={urlFor(post.authorImage).width(100).url()} className="w-12 h-12 rounded-full grayscale object-cover" alt={post.authorName} />
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Written by</p>
                <p className="text-sm font-bold text-slate-900">{post.authorName}</p>
              </div>
            </div>
            <div className="flex items-center gap-8 text-slate-400">
              <div className="flex flex-col items-end">
                <p className="text-[10px] font-bold uppercase tracking-widest mb-1">Published</p>
                <time className="text-xs font-medium text-slate-900">{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Featured Image ────────────────────────────────────────── */}
      <section className="py-12 md:py-20">
        <div className="container-wide max-w-6xl px-4">
          <ScrollReveal>
            <div className="overflow-hidden rounded-sm shadow-2xl shadow-slate-200">
              <img 
                src={urlFor(post.mainImage).width(1600).url()} 
                className="w-full h-[400px] md:h-[700px] object-cover grayscale-[0.2]" 
                alt={post.title}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Content ───────────────────────────────────────────────── */}
      <section className="pb-24">
        <div className="container-wide max-w-3xl px-4">
          <ScrollReveal>
            <article className="prose prose-lg prose-slate max-w-none 
              prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-900
              prose-p:text-slate-600 prose-p:leading-[1.8]
              prose-blockquote:border-l-primary prose-blockquote:text-slate-900 prose-blockquote:italic
              prose-strong:text-slate-900 prose-img:rounded-sm">
              <PortableText value={post.body} />
            </article>
          </ScrollReveal>

          {/* ── Author Bio Card ────────────────────────────────────── */}
          <footer className="mt-24 pt-12 border-t border-slate-100">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-slate-50 p-10 rounded-sm">
              <img src={urlFor(post.authorImage).width(300).url()} className="w-24 h-24 rounded-full grayscale object-cover" />
              <div className="flex-1 text-center md:text-left">
                <h4 className="font-heading text-xl font-bold text-slate-900 mb-3">About {post.authorName}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {post.authorBio || `Dr. Shoaib is a leading orthopaedic specialist in Southern Punjab, providing advanced surgical solutions for trauma and joint care.`}
                </p>
                <div className="flex items-center justify-center md:justify-start gap-4">
                   <button className="text-primary text-[10px] font-bold uppercase tracking-widest hover:underline flex items-center gap-2">
                     <Share2 size={14} /> Share Article
                   </button>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </section>

      {/* ── Bottom Fixed CTA (Mobile Friendly) ────────────────────── */}
      <div className="sticky bottom-8 left-0 w-full flex justify-center px-4 pointer-events-none z-40">
        <a 
          href="https://wa.me/923002278796" 
          className="pointer-events-auto bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] shadow-2xl hover:bg-primary transition-all flex items-center gap-3"
        >
          Discuss Your Case on WhatsApp
        </a>
      </div>
    </main>
  );
};

export default BlogDetail;