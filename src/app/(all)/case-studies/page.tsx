import { type SanityDocument } from "next-sanity";
import { client } from "@/lib/sanityClient";
import AllCaseStudies from "@/components/caseStudies/AllCaseStudies";
import { Metadata } from "next";
import { POST } from "@/app/api/chat/route";

const POSTS_PER_PAGE = 10;
export const metadata: Metadata = {
  title: {
    absolute:
      "Software Development Case Studies | AI, SaaS & Full-Stack Projects | Zelphine",
  },

  description:
    "Explore real software engineering case studies featuring AI applications, SaaS platforms, custom web applications, internal tools, and scalable full-stack systems. Learn how each project was architected, the technologies used, engineering tradeoffs, and measurable business outcomes.",

  keywords: [
    "software development case studies",
    "AI case studies",
    "SaaS case study",
    "software engineering portfolio",
    "full stack projects",
    "Next.js projects",
    "React projects",
    "AI applications",
    "custom software examples",
    "business automation projects",
    "enterprise software case study",
    "system architecture",
    "backend architecture",
    "API development",
    "engineering portfolio",
    "software architecture examples",
    "technical case studies",
    "real software projects",
    "Zelphine case studies",
  ],

  alternates: {
    canonical: "https://zelphine.com/case-studies",
  },

  openGraph: {
    title:
      "Software Engineering Case Studies | AI, SaaS & Full-Stack Projects",

    description:
      "Discover how complex software systems are designed and built—from AI-powered applications and SaaS platforms to scalable web systems, APIs, and business automation tools.",

    url: "https://zelphine.com/case-studies",

    siteName: "Zelphine",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Software Engineering Case Studies by Zelphine",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Software Engineering Case Studies | AI, SaaS & Full-Stack Projects",

    description:
      "Explore real engineering case studies covering AI applications, SaaS platforms, scalable architectures, APIs, and production-ready software.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
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

  // const { posts, totalCount } = await client.fetch<
  //   { 
  //     posts: SanityDocument[]; 
  //     totalCount: number; 
  //   }
  // >(
  //   POSTS_QUERY,
  //   { start, end }, 
  //   // options
  // );
  const totalCount = 4
  const pages = Math.ceil(totalCount/POSTS_PER_PAGE)
  return (
    <AllCaseStudies
    //  posts={posts}
     totalCount={ pages> 1 ? pages : 1} page={page} />
  ); 
}