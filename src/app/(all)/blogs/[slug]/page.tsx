import { groq, PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/lib/sanityClient";
import DisplayBlog from "@/components/blogs/displayBlog";
import Image from "next/image";
const POST_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    publishedAt,
    image, // This is your MAIN image
    body[] {
      _key,
      _type,
      ...,

      // This is the "Can't-Fail" projection
      // It handles images and provides all data needed
      _type == "image" => {
        "alt": asset->alt, // Get alt text from the asset
        "hotspot": hotspot,
        "crop": crop,
        "asset": asset->{ // "Follow" the reference
          _id,
          url,
          "metadata": metadata.dimensions
        }
      }
    }
  }
`;
const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;
const options = { next: { revalidate: 30 } };
export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
   const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
   console.log(post);
   
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;
  return <DisplayBlog post={post} urlFor={urlFor} postImageUrl={postImageUrl} />;
}