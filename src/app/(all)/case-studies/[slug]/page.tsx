import { groq, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/lib/sanityClient";
import DisplayCaseStudies from "@/components/caseStudies/displayCaseStudies";
import { Metadata } from "next";
import { notFound } from "next/navigation";



const POST_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    publishedAt,
    "excerpt": array::join(string::split((pt::text(body)), "")[0..200], "") + "...",
    image, 
    body[] {
      _key,
      _type,
      ...,
      _type == "image" => {
        "alt": asset->alt,
        "hotspot": hotspot,
        "crop": crop,
        "asset": asset->{
          _id,
          url,
          "metadata": metadata.dimensions
        }
      }
    }
  }
`;

const options = { next: { revalidate: 86400 } };

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;
  const post = await client.fetch<SanityDocument>(POST_QUERY, { slug }, 
    options
  );

  if (!post) {
    return {
      title: "Case Study Not Found | Zelphine",
    };
  }

  const ogImageUrl = post.image
    ? urlFor(post.image)?.width(1200).height(630).fit("crop").url()
    : "/og-image.png"; 

  return {
  title: `${post.title} | AI & Software Engineering Case Study | Zelphine`,

  description:
    post.excerpt ||
    `${post.title}: A detailed software engineering case study covering system architecture, implementation decisions, technologies, engineering tradeoffs, and production insights.`,

  keywords: [
    "software engineering case study",
    "AI project",
    "system architecture",
    "software architecture",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "AI application",
    "SaaS",
    "engineering portfolio",
    "full stack project",
    post.title,
  ],

  alternates: {
    canonical: `https://zelphine.com/case-studies/${slug}`,
  },

  authors: [
    {
      name: "Zelphine",
      url: "https://zelphine.com",
    },
  ],

  creator: "Zelphine",

  publisher: "Zelphine",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "article",

    url: `https://zelphine.com/case-studies/${slug}`,

    title: `${post.title} | Software Engineering Case Study`,

    description:
      post.excerpt ||
      "Explore the engineering decisions, architecture, technologies, and implementation behind this software project.",

    siteName: "Zelphine",

    publishedTime: post.publishedAt,

    images: [
      {
        url: ogImageUrl || "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${post.title} - Software Engineering Case Study`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: `${post.title} | Engineering Case Study`,

    description:
      post.excerpt ||
      "Architecture breakdown, engineering tradeoffs, and implementation details.",

    images: [ogImageUrl || "/og-image.png"],
  },
};
}

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;
    let post
    try {
      
      post = await client.fetch<SanityDocument>(POST_QUERY, { slug }, 
        // options
      );
    } catch (error) {
      console.log(error);
    }
  
  if (!post) {
    notFound();
  }

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return <DisplayCaseStudies post={post} urlFor={urlFor} postImageUrl={postImageUrl} />;
}