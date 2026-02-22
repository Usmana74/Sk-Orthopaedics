import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client, urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import { ArrowLeft, Share2, Calendar } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[ _type == "post" && slug.current == $slug ][0] {
      title, mainImage, publishedAt, body,
      "authorName": author->name, "authorImage": author->image, "authorBio": author->bio,
      "categories": categories[]->title
    }`;
    client.fetch(query, { slug }).then((data) => {
      setPost(data);
      setLoading(false);
    });
  }, [slug]);

  if (loading || !post) return <div className="h-screen flex items-center justify-center bg-white text-xs uppercase tracking-[0.3em] text-slate-300">Article Loading...</div>;

  return (
    <main className="bg-white min-h-screen">
      {/* ── Sub-Navbar ── */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
        <div className="container-wide max-w-4xl px-6 h-14 flex items-center justify-between">
          <Link to="/blog" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">
            <ArrowLeft size={14} /> Back
          </Link>
          <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest truncate max-w-[200px]">{post.title}</span>
          <button className="text-slate-400 hover:text-primary transition-colors"><Share2 size={16} /></button>
        </div>
      </nav>

      <article className="pt-16 pb-24">
        <div className="container-wide max-w-2xl px-6">
          {/* ── Meta ── */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 border border-slate-200 text-slate-500 rounded-sm">
              {post.categories?.[0] || 'Medical Update'}
            </span>
            <span className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">{new Date(post.publishedAt).toLocaleDateString()}</span>
          </div>

          <h1 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-10 tracking-tight">
            {post.title}
          </h1>

          {/* ── Contained Small Image ── */}
          <div className="mb-12 rounded-sm overflow-hidden bg-slate-50 border border-slate-100">
            <img src={urlFor(post.mainImage).width(1200).url()} className="w-full h-auto max-h-[450px] object-cover" alt={post.title} />
          </div>

          {/* ── Editorial Content ── */}
          <ScrollReveal>
            <div className="prose prose-slate max-w-none 
              prose-p:text-slate-600 prose-p:leading-[1.8] prose-p:text-base prose-p:mb-6
              prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-900
              prose-strong:text-slate-900 prose-blockquote:italic prose-blockquote:border-primary">
              <PortableText value={post.body} />
            </div>
          </ScrollReveal>

          {/* ── Minimal Author Signature ── */}
          <footer className="mt-20 pt-10 border-t border-slate-100 flex items-center gap-6">
            <img src={urlFor(post.authorImage).width(100).url()} className="w-12 h-12 rounded-full grayscale" alt={post.authorName} />
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Medical Review by</p>
              <p className="text-sm font-bold text-slate-900 underline decoration-primary/30 underline-offset-4">{post.authorName}</p>
            </div>
          </footer>
        </div>
      </article>
    </main>
  );
};

export default BlogDetail;