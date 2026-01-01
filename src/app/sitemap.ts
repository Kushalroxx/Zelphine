import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

const BASE_URL = 'https://zelphine.com'

const sitemapQuery = groq`{
  "caseStudies": *[
    _type == "post" 
    && defined(slug.current) 
    && "Case Study" in categories[]->title
  ] {
    "slug": slug.current,
    _updatedAt
  },
  "insights": *[
    _type == "post" 
    && defined(slug.current) 
    && !("Case Study" in categories[]->title)
  ] {
    "slug": slug.current,
    _updatedAt
  }
}`
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { insights, caseStudies } = await client.fetch(sitemapQuery, {}, {
    next: { revalidate: 3600 } 
  })

  const caseStudyUrls = caseStudies.map((study: any) => ({
    url: `${BASE_URL}/case-studies/${study.slug}`,
    lastModified: new Date(study._updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.9, 
  }))

  const insightUrls = insights.map((post: any) => ({
    url: `${BASE_URL}/insights/${post.slug}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const staticRoutes = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/#services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contactus`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/insights`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ]

  return [...staticRoutes, ...caseStudyUrls, ...insightUrls]
}