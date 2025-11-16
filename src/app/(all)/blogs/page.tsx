import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/lib/sanityClient";
import AllBlogs from "@/components/blogs/allBlogs";

const POSTS_PER_PAGE = 12;

const POSTS_QUERY = `{
  "posts": *[
    _type == "post"
    && defined(slug.current)
  ] | order(publishedAt desc) [$start...$end] {
    _id, title, slug, publishedAt
  },
  "totalCount": count(*[
    _type == "post"
    && defined(slug.current)
  ])
}`;

const options = { next: { revalidate: 30 } };
export default async function IndexPage({
  searchParams
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const page = Number((await searchParams).page) || 1;
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = page * POSTS_PER_PAGE;
  const { posts, totalCount } = await client.fetch<
    { posts: SanityDocument[]; totalCount: number }
  >(
    POSTS_QUERY,
    { start, end }, 
    options
  );

  return (
    <AllBlogs posts={posts} totalCount={Math.ceil(totalCount / POSTS_PER_PAGE)} page={page} />
  ); 
}