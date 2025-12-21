import { type SanityDocument } from "next-sanity";
import { client } from "@/lib/sanityClient";
import AllCaseStudies from "@/components/caseStudies/AllCaseStudies";
import { Metadata } from "next";

const POSTS_PER_PAGE = 12;
export const metadata: Metadata = {
  title: "Engineering Case Studies | Real-World Architecture",
  description: "Don't just look at screenshots. Explore the engineering logic, tech stacks, and ROI behind the custom SaaS platforms and AI agents we build.",
  openGraph: {
    title: "Zelphine Case Studies | The Logic Behind the Code",
    description: "Deep dives into how we solve complex business bottlenecks with Next.js, AI, and Custom Architecture.",
    url: "https://zelphine.com/case-studies",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zelphine Engineering Portfolio",
      },
    ],
  },
};

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

const options = { next: { revalidate: 86400 } };

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