import { type SanityDocument } from "next-sanity";
import { client } from "@/lib/sanityClient";
import AllBlogs from "@/components/blogs/allBlogs";
import { Metadata } from "next";

const POSTS_PER_PAGE = 12;

export async function generateMetadata({
  searchParams
}: {
  searchParams: Promise<{ category?: string }>
}): Promise<Metadata> {
  const { category } = await searchParams;
  const categoryTitle = category && category !== "all"
    ? category.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") + " Insights"
    : "Engineering Insights & Strategy";
  return {
    title: `${categoryTitle} | Zelphine`,
    description: "Deep dives into software architecture, Next.js performance, AI agent workflows, and the business logic behind scalable systems. Read how we think.",
    openGraph: {
      title: `${categoryTitle} | Zelphine Insights`,
      description: "No fluff. Just engineering standards, architectural patterns, and business strategy for modern platforms.",
      url: "https://zelphine.com/insights",
      images: [
        {
          url: "/og-image.png", 
          width: 1200,
          height: 630,
          alt: "Zelphine Engineering Insights",
        },
      ],
    },
  };
}
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
    && !("Case Study" in categories[]->title)
  ]),
  "categories": *[_type == "category" && title != "Case Study"] {
    _id,
    title,
    slug
  }
}`;

const options = { next: { revalidate: 86400 } };

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

  const allCatagories: {title: string, slug: string}[] = [{title: "All", slug: ""}];
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