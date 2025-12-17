'use client'; 

import React, { useState } from 'react';
import PaginationForBlog from './paginationForBlog';
import { SanityDocument } from 'next-sanity';
import { motion } from 'framer-motion';
import { Button } from '../ui';
import BlogCard from './blogCard';
import { useRouter } from 'nextjs-toploader/app';

export default function AllBlogs({ 
  categories,
  posts, 
  totalCount, 
  page ,
  activeCategory
}: { 
  posts: SanityDocument[]; 
  totalCount: number; 
  page: number 
  categories: {title: string, slug: string}[];
  activeCategory: string|null
}) {
  const router = useRouter();
  const gridPosts = posts

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <section className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h5 className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4">
              The Agency
            </h5>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-slate-900 mb-8 leading-[0.9]">
              Insights.
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl leading-relaxed">
              Engineering, design, and strategy for building the next generation of digital products.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap gap-3 mt-12"
          >
            {categories.map((cat) => (
              <Button
                variant="default"
                key={cat.slug}
                onClick={() => {
                  if (cat.title === "All") {
                     router.push("/insights");
                  } else {
                      router.push(`/insights?category=${cat.slug}`);
                  }
                }}
                className={` ${
                  activeCategory === cat.slug|| activeCategory === null && cat.title === "All" 
                    ? ' ' 
                    : 'hover:bg-slate-950/10 border border-slate-300 bg-slate-100 text-slate-700'
                }`}
              >
                {cat.title}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>
      
      <section className="container mx-auto px-6 mb-24">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-12">
           <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-bold text-slate-900">{page>1 ? "All Thinking" : "Latest Thinking"}</motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {gridPosts.map((post, i) => (
            <BlogCard key={post._id} post={post} i={i}/>
          ))}
          {gridPosts.length < 2 && (
             <div className="border border-dashed border-slate-200 rounded-xl bg-slate-50/50 flex flex-col items-center justify-center p-8 text-center min-h-[300px]">
                <div className="w-12 h-12 bg-slate-200 rounded-full mb-4 animate-pulse"></div>
                <p className="font-medium text-slate-400">More articles incoming...</p>
             </div>
          )}
           {gridPosts.length === 0 && (
             <div className="border border-dashed border-slate-200 rounded-xl bg-slate-50/50 flex flex-col items-center justify-center p-8 text-center min-h-[300px]">
                <div className="w-12 h-12 bg-slate-200 rounded-full mb-4 animate-pulse"></div>
                <p className="font-medium text-slate-400">More articles incoming...</p>
             </div>
          )}
        </div>
      </section>
      {totalCount/10>1&&<div className="container mx-auto px-6 py-12">
        <PaginationForBlog
          page={page}
          noOfPages={totalCount}
        />
      </div>}
    </main>
  );
}