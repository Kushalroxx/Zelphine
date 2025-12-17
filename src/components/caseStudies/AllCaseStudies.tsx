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
      
      {/* Header Section */}
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
      
      {/* Case Study Grid */}
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
                
                {/* 1. The Image Container - Sharper corners, subtle border */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100 mb-6 group-hover:border-blue-400/50 transition-colors duration-300">
                   {post.mainImage && (
                    <Image
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt || post.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                   )}
                   {/* Tech Overlay: Only visible on hover */}
                   <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300"></div>
                </div>

                {/* 2. The "Technical Spec" Data Bar */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
                    <div className="flex flex-wrap gap-2">
                        {post.categories?.slice(0, 3).map((cat: any) => (
                             <span key={cat.slug} className="text-[10px] uppercase tracking-wider font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded-sm">
                                {cat.title}
                             </span>
                        ))}
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                        {year}
                    </span>
                </div>

                {/* 3. The Title (The Hero) */}
                <div className="flex items-start justify-between group-hover:text-blue-600 transition-colors">
                  <h2 className="text-3xl font-bold text-slate-900 leading-[1.1] max-w-md group-hover:text-blue-600">
                    {post.title}
                  </h2>
                  
                  {/* The Arrow Icon */}
                  <span className="hidden md:inline-block transform translate-x-0 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-3 transition-all duration-300 text-2xl">
                    ↗
                  </span>
                </div>

              </Link>
            </motion.div>
          )})}
        </div>
      </section>

      {/* Pagination */}
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