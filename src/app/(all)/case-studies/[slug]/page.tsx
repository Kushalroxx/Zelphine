import { groq, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/lib/sanityClient";
import DisplayCaseStudies from "@/components/caseStudies/displayCaseStudies";
const POST_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    publishedAt,
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
  return <DisplayCaseStudies post={post} urlFor={urlFor} postImageUrl={postImageUrl} />;
}