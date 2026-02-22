import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client, urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
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
      "categories": categories[]->title
    }`;

    client.fetch(query, { slug })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch(console.error);
  }, [slug]);

  if (loading) return <div className="h-screen flex items-center justify-center italic text-muted-foreground">Loading Article...</div>;
  if (!post) return <div className="h-screen flex items-center justify-center">Article not found.</div>;

  return (
    <main className="bg-white min-h-screen pb-20">
      {/* Article Header Section */}
      <section className="bg-slate-50 pt-16 pb-32">
        <div className="container-wide max-w-4xl px-4 md:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary text-sm font-bold mb-8 hover:underline">
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          
          <div className="flex gap-2 mb-6">
            {post.categories?.map((cat: string) => (
              <span key={cat} className="bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                {cat}
              </span>
            ))}
          </div>

          <h1 className="font-heading text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] mb-8">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-slate-200">
            <div className="flex items-center gap-3">
              <img src={urlFor(post.authorImage).url()} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" alt={post.authorName} />
              <span className="text-sm font-bold text-slate-900">{post.authorName}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <Calendar size={14} /> {new Date(post.publishedAt).toLocaleDateString()}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container-wide max-w-5xl px-4 -mt-20 mb-16">
        <ScrollReveal>
          <img 
            src={urlFor(post.mainImage).url()} 
            className="w-full h-[300px] md:h-[550px] object-cover rounded-3xl shadow-2xl" 
            alt={post.title}
          />
        </ScrollReveal>
      </div>

      {/* Content Area */}
      <section className="container-wide max-w-3xl px-4">
        <ScrollReveal>
          <article className="prose prose-lg prose-slate prose-headings:font-heading prose-headings:font-bold prose-a:text-primary max-w-none">
            <PortableText value={post.body} />
          </article>
        </ScrollReveal>
      </section>

      {/* Footer CTA */}
      <section className="container-wide max-w-3xl px-4 mt-20 pt-10 border-t border-slate-100">
        <div className="bg-slate-50 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-heading font-bold text-lg mb-1 text-slate-900">Need personal advice?</h4>
            <p className="text-sm text-slate-600">Consult with Dr. Shoaib Aslam Kurerr at Midwest Hospital.</p>
          </div>
          <a 
            href="https://wa.me/923002278796" 
            className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Book Consultation
          </a>
        </div>
      </section>
    </main>
  );
};

export default BlogDetail;