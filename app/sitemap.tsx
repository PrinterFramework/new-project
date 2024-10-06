import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: '/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: '/ui',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    }
  ]
}
