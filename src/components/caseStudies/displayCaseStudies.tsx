import { PortableText, SanityDocument } from 'next-sanity';
import Link from 'next/link';
import React from 'react';
import InViewAnimation from '../majorUi/inViewAnimation';
import Image from 'next/image';

export default function DisplayCaseStudies({ 
  post, 
  postImageUrl, 
  urlFor 
}: { 
  post: SanityDocument; 
  postImageUrl: string | null | undefined; 
  urlFor: (source: any) => any;
}) {

  const calculateReadTime = () => {
    if (!post?.body || !Array.isArray(post.body)) return "1 min read";
    
    const text = post.body
      .filter((block: any) => block._type === 'block' && block.children)
      .map((block: any) => block.children.map((child: any) => child.text).join(' '))
      .join(' ');
      
    const wordCount = text.split(/\s+/).length;
    return `${Math.ceil(wordCount / 200)} min read`; 
  };

  const readTime = calculateReadTime();
  
  function SanityImageComponent({ value }: { value: any }) {
    if (!value?.asset?.url) {
      return null;
    }
    const width = value.asset.metadata?.width;
    const height = value.asset.metadata?.height;

    return (
      <figure className="my-12 group">
        <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm transition-shadow hover:shadow-md">
            <Image
            src={urlFor(value).image(value).fit("max").auto("format").url()}
            alt={value.alt || "Blog post image"}
            width={width || 800}
            height={height || 450}
            loading="lazy"
            className="w-full object-cover"
            />
        </div>
        {value.caption && (
          <figcaption className="text-center text-xs font-mono text-slate-400 mt-3 uppercase tracking-wider">
            [FIG: {value.caption}]
          </figcaption>
        )}
      </figure>
    );
  };

  return (
    <InViewAnimation>
      <main className="container mx-auto min-h-screen max-w-5xl px-6 py-24 flex flex-col gap-10 bg-white selection:bg-blue-100 selection:text-blue-900">
        
        {/* Navigation - Uppercase Tech Style */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <Link 
              href="/case-studies" 
              className="group flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span> 
              All Projects
            </Link>
            {
            //   post.categories[0].title && (
            //     <span className="text-[10px] font-mono font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded border border-slate-200 uppercase tracking-wider">
            //       {post.categories[0].title.replace("Case Study", "").trim() || "PROJECT"}
            // </span>)
            }
        </div>

        {/* Header - Massive & Bold */}
        <div className="flex flex-col gap-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[0.95] tracking-tight">
                {post.title}
            </h1>
            
            {/* Metadata Bar - "Blueprint" Style */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 border-y border-slate-100 py-6">
                <div className="flex items-center gap-3 pr-6 border-r border-slate-100">
                   <div className="w-8 h-8 rounded flex items-center justify-center">
                         <img src="/assets/logo.png" className='w-7' alt="Zelphine Logo" />
                   </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-mono uppercase text-slate-400 leading-none mb-1">Engineered By</span>
                        <span className="font-bold text-slate-900 leading-none">Zelphine Team</span>
                    </div>
                </div>
                
                <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase text-slate-400 leading-none mb-1">Delivered</span>
                    <time dateTime={post.publishedAt} className="font-medium text-slate-900 leading-none">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </time>
                </div>

                <div className="flex flex-col">
                     <span className="text-[10px] font-mono uppercase text-slate-400 leading-none mb-1">Est. Read</span>
                     <span className="font-medium text-slate-900 leading-none">{readTime}</span>
                </div>
            </div>
        </div>

        {/* Hero Image - Sharp Corners */}
        {postImageUrl && (
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
            <Image
              src={postImageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content - High Contrast & Readable */}
        <div className="max-w-3xl mx-auto w-full">
            <article className="prose prose-lg prose-slate max-w-none 
                prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900 
                prose-h1:text-4xl prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6
                prose-p:text-slate-600 prose-p:leading-8 prose-p:font-light prose-p:text-lg
                 prose-a:text-purple-600 prose-a:font-medium prose-a:no-underline prose-a:hover:text-purple-700 prose-a:hover:underline
                prose-li:marker:text-slate-900 prose-li:text-slate-600
                prose-strong:text-slate-900 prose-strong:font-extrabold
                prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:font-medium
                prose-blockquote:border-l-2 prose-blockquote:border-slate-900 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:font-medium prose-blockquote:text-slate-800">
                
                {Array.isArray(post.body) && (
                    <PortableText 
                        value={post.body} 
                        components={{
                            types: {
                                image: SanityImageComponent
                            }
                        }} 
                    />
                )}
            </article>

            {/* CTA - Dark & Serious */}
            <div className="mt-24">
                <div className="relative overflow-hidden rounded-2xl bg-slate-900 px-8 py-16 text-center shadow-2xl">
                    <div className="relative z-10 flex flex-col items-center gap-8">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl max-w-lg">
                            Ready to engineer your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">next big win?</span>
                        </h2>
                        <p className="mx-auto max-w-xl text-lg text-slate-400 font-light">
                            We use the same engineering rigor from this project to build your platform.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                            <Link 
                                href="/contactus" 
                                className="w-full sm:w-auto rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-900 shadow-lg hover:bg-blue-50 focus-visible:outline-2 transition-all transform hover:-translate-y-1"
                            >
                                Start Your Project
                            </Link>
                            <Link 
                                href="/case-studies" 
                                className="text-sm font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest"
                            >
                                View Portfolio →
                            </Link>
                        </div>
                    </div>
                    
                    {/* Grid Background Effect */}
                    <div className="absolute inset-0 opacity-10" 
                        style={{ 
                            backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(to right, #4f46e5 1px, transparent 1px)', 
                            backgroundSize: '40px 40px' 
                        }}>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </InViewAnimation>
  )
}