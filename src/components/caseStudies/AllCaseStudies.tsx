'use client'; 

import React from 'react';
import PaginationForBlog from '../blogs/paginationForBlog';
import { SanityDocument } from 'next-sanity';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function AllCaseStudies({ 
  posts, 
  totalCount, 
  page 
}: { 
  posts: SanityDocument[]; 
  totalCount: number; 
  page: number;
}) {
  console.log(posts[0].categories);
  
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      <section className="container mx-auto px-6 pt-32 pb-16 border-b border-slate-200">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-blue-600"></span>
                <h5 className="text-blue-600 font-bold tracking-widest uppercase text-xs">
                  The Portfolio
                </h5>
             </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 mb-6">
              Selected Works.
            </h1>
            <p className="text-xl text-slate-500 font-light max-w-2xl leading-relaxed">
              A collection of high-performance platforms, engineered for scale and designed for impact.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="container mx-auto px-6 py-20 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-16">
          {posts.map((post, i) => {
             const year = new Date(post.publishedAt).getFullYear();
             
             return (
            <motion.div
  key={post._id}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: i * 0.1, duration: 0.5 }}
  className="group"
>
  <Link href={`/case-studies/${post.slug.current}`} className="block h-full">
    <div className="relative flex flex-col h-full p-4 transition-all duration-300 rounded-2xl border border-slate-100 bg-white hover:shadow-xl hover:shadow-blue-500/5 group-hover:-translate-y-1">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 mb-6">
        {post.mainImage && (
          <Image
            src={post.mainImage.asset.url}
            alt={post.mainImage.alt || post.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        )}
        <div className="absolute top-3 left-3 md:hidden">
            <span className="bg-white/90 backdrop-blur-sm text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase">Case Study</span>
        </div>
      </div>

      <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
        <div className="flex flex-wrap gap-2">
          {post.categories?.slice(0, 2).map((cat: any) => (
            <span key={cat.slug} className="text-[10px] uppercase tracking-wider font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
              {cat.title}
            </span>
          ))}
        </div>
        <span className="text-xs font-mono text-slate-400">{year}</span>
      </div>

      <div className="flex-grow">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-3 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h2>
      </div>
      <div className="flex items-center text-blue-600 font-semibold text-sm mt-auto">
        <span className="group-hover:underline decoration-2 underline-offset-4">View Full Case Study</span>
        <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2">
          →
        </span>
      </div>
    </div>
  </Link>
</motion.div>
          )})}
        </div>
      </section>

      {totalCount > 1 && (
        <div className="container mx-auto px-6 py-12 border-t border-slate-200">
          <PaginationForBlog
            page={page}
            noOfPages={totalCount}
            basePath="/case-studies" 
          />
        </div>
      )}
    </main>
  );
}