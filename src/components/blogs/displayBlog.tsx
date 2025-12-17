import { PortableText, SanityDocument } from 'next-sanity';
import Link from 'next/link';
import React from 'react';
import InViewAnimation from '../majorUi/inViewAnimation';
import Image from 'next/image';

export default function DisplayBlog({ 
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
    console.log(post.categories);
    
    return (
      <figure className="my-10">
        <Image
          src={urlFor(value).image(value).fit("max").auto("format").url()}
          alt={value.alt || "Blog post image"}
          width={width || 800}
          height={height || 450}
          loading="lazy"
          className="rounded-xl w-full object-cover shadow-sm"
        />
        {value.caption && (
          <figcaption className="text-center text-sm text-gray-500 mt-3 italic">
            {value.caption}
          </figcaption>
        )}
      </figure>
    );
  };

  return (
    <InViewAnimation>
      <main className="container mx-auto min-h-screen max-w-5xl px-6 py-24 flex flex-col gap-10">
        
        <div className="flex items-center justify-between">
            <Link 
              href="/insights" 
              className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-purple-600 transition-colors"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span> 
              Back to Insights
            </Link>
            {
              post.categories[0].title && (
                <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
               { post.categories[0].title }
            </span>)
            }
        </div>

        <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
                {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-gray-500 border-b border-gray-100 pb-8">
                <div className="flex items-center gap-2">
                   <img src="/assets/logo.png" className='w-6' alt="Zelphine Logo" />
                    <span className="font-medium text-gray-900">Zelphine Team</span>
                </div>
                <span>•</span>
                <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </time>
                <span>•</span>
                <span>{readTime}</span>
            </div>
        </div>
        {postImageUrl && (
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-sm bg-gray-100">
            <Image
              src={postImageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="max-w-3xl mx-auto w-full">
            <article className="prose prose-lg prose-slate max-w-none 
                prose-headings:font-bold prose-headings:text-gray-900 
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-purple-600 prose-a:font-medium prose-a:no-underline prose-a:hover:text-purple-700 prose-a:hover:underline
                prose-li:marker:text-purple-500 prose-li:text-gray-700
                prose-strong:text-gray-900 prose-strong:font-bold
                prose-code:text-purple-600 prose-code:bg-purple-50 prose-code:px-1 prose-code:rounded prose-code:font-medium
                prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:italic prose-blockquote:rounded-r-lg">
                
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

            <div className="mt-20">
                <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 shadow-2xl sm:px-12 sm:py-16 text-center">
                    <div className="relative z-10 flex flex-col items-center gap-6">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Build scalable software, <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">without the headache.</span>
                        </h2>
                        <p className="mx-auto max-w-xl text-lg text-gray-300">
                            We use the same engineering rigor from our internal labs to build your platform. Ready to start?
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                            <Link 
                                href="/contactus" 
                                className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-slate-900 shadow-sm hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all transform hover:-translate-y-1"
                            >
                                Start Your Project
                            </Link>
                            <Link 
                                href="/insights" 
                                className="text-sm font-semibold leading-6 text-white hover:text-purple-300 transition-colors"
                            >
                                Read more insights <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                    
                    {/* Decorative blurred blobs */}
                    <div className="absolute -top-24 left-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
                        <div className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"></div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </InViewAnimation>
  )
}