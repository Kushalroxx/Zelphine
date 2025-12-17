import { type SanityDocument } from "next-sanity";
import { client } from "@/lib/sanityClient";
import AllCaseStudies from "@/components/caseStudies/AllCaseStudies";

const POSTS_PER_PAGE = 12;

const POSTS_QUERY = `{
  "posts": *[
    _type == "post"
    && defined(slug.current)
    && "Case Study" in categories[]->title
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
    && "Case Study" in categories[]->title
  ])
}`;

const options = { next: { revalidate: 0 } };

export default async function CaseStudiesPage({
  searchParams
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const resolvedParams = await searchParams;
  const page = Number(resolvedParams.page) || 1;
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = page * POSTS_PER_PAGE;

  const { posts, totalCount } = await client.fetch<
    { 
      posts: SanityDocument[]; 
      totalCount: number; 
    }
  >(
    POSTS_QUERY,
    { start, end }, 
    options
  );

  return (
    <AllCaseStudies posts={posts} totalCount={totalCount} page={page} />
  ); 
}