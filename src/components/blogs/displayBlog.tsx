import { PortableText, SanityDocument } from 'next-sanity';
import Link from 'next/link';
import React from 'react'
import InViewAnimation from '../majorUi/inViewAnimation';
import Image from 'next/image';

export default function DisplayBlog({ post, postImageUrl, urlFor }: { post: SanityDocument; postImageUrl: string | null| undefined, urlFor: (source: any) => any }) {
  function SanityImageComponent({ value }: { value: any }){
    console.log(value);
    
  if (!value?.asset?.url) {
    return null; 
  }
  const width = value.asset.metadata?.width;
  const height = value.asset.metadata?.height;

  return (
    <Image
      src={urlFor(value).image(value).fit("max").auto("format").url()}
      alt={value.alt || "Blog post image"}
      width={width || 800} // Fallback width
      height={height || 450} // Fallback height
      loading="lazy"
      className="rounded-lg my-4" // Styling
    />
  );
};

  return (
    <InViewAnimation>
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/blogs" className="hover:underline">
        ← Back to posts
      </Link>
      {postImageUrl && (
          <img
          src={postImageUrl}
          alt={post.title}
          className="aspect-video rounded-xl"
          width="550"
          height="310"
        />
      )}
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <div className="prose sm:prose-sm lg:prose-lg prose-a:text-blue-500 hover:prose-a:underline prose-a:hover:text-blue-700">
        <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        {Array.isArray(post.body) && <PortableText components={{
          types: {
            image: SanityImageComponent
          }
        }}  value={post.body} />}
      </div>
    </main>
          </InViewAnimation>
  )
}
