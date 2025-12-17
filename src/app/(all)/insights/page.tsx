import { type SanityDocument } from "next-sanity";
import { client } from "@/lib/sanityClient";
import AllBlogs from "@/components/blogs/allBlogs";

const POSTS_PER_PAGE = 12;

const POSTS_QUERY = `{
  "posts": *[
    _type == "post"
    && defined(slug.current)
    && ($category == null || $category in categories[]->slug.current)
  ] | order(publishedAt desc) [$start...$end] {
    _id, title, slug, publishedAt,
    mainImage {
      alt,
      asset->{
        url
      }
    },
    categories[]->{title, slug}
  },
  "totalCount": count(*[
    _type == "post"
    && defined(slug.current)
    && ($category == null || $category in categories[]->slug.current)
  ]),
  "categories": *[_type == "category"] {
    _id,
    title,
    slug
  }
}`;

const options = { next: { revalidate: 0 } };

export default async function IndexPage({
  searchParams
}: {
  searchParams: Promise<{ page?: string; category?: string }>
}) {
  const resolvedParams = await searchParams;
  const page = Number(resolvedParams.page) || 1;
  
  const category = resolvedParams.category === "all" || !resolvedParams.category 
    ? null 
    : resolvedParams.category;

  const start = (page - 1) * POSTS_PER_PAGE;
  const end = page * POSTS_PER_PAGE;

  const { posts, totalCount, categories } = await client.fetch<
    { 
      posts: SanityDocument[]; 
      totalCount: number; 
      categories: SanityDocument[] 
    }
  >(
    POSTS_QUERY,
    { start, end, category }, 
    options
  );

  let allCatagories: {title: string, slug: string}[] = [{title: "All", slug: ""}];
 categories.forEach(cat =>{
    if (cat.title && cat.slug) {
      allCatagories.push({title: cat.title, slug: cat.slug.current || cat.slug});
    }
 })

  return (
    <AllBlogs 
      posts={posts} 
      categories={allCatagories} 
      totalCount={Math.ceil(totalCount / POSTS_PER_PAGE)} 
      page={page} 
      activeCategory={category} 
    />
  ); 
}