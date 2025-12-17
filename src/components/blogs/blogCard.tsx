"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { SanityDocument } from "next-sanity";
export default function BlogCard({post,
i
}:{
  post: SanityDocument, i: number
}) {
  return (
      <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer flex flex-col h-full"
            >
              <Link href={`/insights/${post.slug?.current || post.slug}`} className="flex flex-col h-full">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 mb-6">
                  <Image 
                    fill
                    src={post.mainImage?.asset?.url || '/placeholder.png'} 
                    alt={post.title} 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{post.category}</span>
                    <span className="text-xs text-slate-400 font-mono">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 leading-snug mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4">
                     {post.previewText || "Read about our latest findings in software development and design patterns."}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    Read Article <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
  );
}
