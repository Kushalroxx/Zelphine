import { groq, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/lib/sanityClient";
import DisplayCaseStudies from "@/components/caseStudies/displayCaseStudies";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

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

  const post = await client.fetch<SanityDocument>(POST_QUERY, { slug }, options);

  if (!post) {
    return {
      title: "Case Study Not Found | Zelphine",
    };
  }

  const ogImageUrl = post.image
    ? urlFor(post.image)?.width(1200).height(630).fit("crop").url()
    : "/og-image.png"; 

  return {
    title: `${post.title} | Engineering Case Study`,
    description: post.excerpt || `Deep dive into the architecture and engineering logic behind ${post.title}. Built by Zelphine.`,
    openGraph: {
      title: post.title,
      description: post.excerpt || "High-performance architecture breakdown.",
      url: `https://zelphine.com/case-studies/${slug}`,
      type: "article",
      images: [
        {
          url: ogImageUrl || "",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || "High-performance architecture breakdown.",
      images: [ogImageUrl || ""],
    },
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await client.fetch<SanityDocument>(POST_QUERY, { slug }, options);
  
  if (!post) {
    notFound();
  }

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return <DisplayCaseStudies post={post} urlFor={urlFor} postImageUrl={postImageUrl} />;
}