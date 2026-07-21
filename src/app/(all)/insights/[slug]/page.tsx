import { groq, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/lib/sanityClient";
import DisplayBlog from "@/components/blogs/displayBlog";
import { Metadata } from "next";
import { notFound } from "next/navigation";


const POST_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    publishedAt,
    "excerpt": array::join(string::split((pt::text(body)), "")[0..200], "") + "...",
    image, 
    categories[]->{title, slug},
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

  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug },
    options
  );

  if (!post) {
    return {
      title: "Article Not Found | Zelphine",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const ogImageUrl = post.image
    ? urlFor(post.image)?.width(1200).height(630).fit("crop").url()
    : "/og-image.png";

  return {
    title: `${post.title} | Software Engineering Blog | Zelphine`,

    description:
      post.excerpt ||
      `${post.title} — engineering insights covering software architecture, AI, backend systems, scalable applications, and modern web development.`,

    keywords: [
      "software engineering",
      "software architecture",
      "AI",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "backend development",
      "system design",
      "technical article",
      "engineering blog",
      post.title,
    ],

    alternates: {
      canonical: `https://zelphine.com/insights/${slug}`,
    },

    authors: [
      {
        name: "Zelphine Engineering Team",
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

      url: `https://zelphine.com/insights/${slug}`,

      siteName: "Zelphine",

      title: `${post.title} | Software Engineering Blog`,

      description:
        post.excerpt ||
        "Software engineering insights, architecture decisions, AI systems, and scalable development.",

      publishedTime: post.publishedAt,

      authors: ["Zelphine Engineering Team"],

      images: [
        {
          url: ogImageUrl || "/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: `${post.title} | Zelphine`,

      description: post.excerpt,

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

   const post = await client.fetch<SanityDocument>(POST_QUERY, { slug }, options);
   if (!post) {
     notFound();
   }
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return <DisplayBlog post={post} urlFor={urlFor} postImageUrl={postImageUrl} />;
}