import React from 'react'
import PaginationForBlog from './paginationForBlog'
import { SanityDocument } from 'next-sanity';
import Link from 'next/link';

export default async function AllBlogs({ posts, totalCount, page }: { posts: SanityDocument[]; totalCount: number; page: number }) {
  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li className="hover:underline" key={post._id}>
            <Link href={`/blogs/${post.slug.current}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>

     <PaginationForBlog
        page={page}
        noOfPages={totalCount}/>
    </main>
  )
}
