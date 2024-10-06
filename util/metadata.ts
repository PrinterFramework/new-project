import type { Metadata } from 'next'

export const Name = 'Just Print It | Template'
export const ShortName = 'Just Print It'
export const Description =
  'Experience the future of Next.js with Just Print It, the Generative AI Workstation for Next. Empower your creativity and accelerate innovation using our state-of-the-art platform designed for the next generation of AI developers.'
export const Icon = '/assets/img/logo.png'
export const IconType = 'image/png'
export const Keywords = ['Printer', 'Generative', 'AI', 'Next.js', 'GenAI']
export const URL = 'https://justprintit.ai'
export const OGImage = 'https://justprintit.ai/assets/img/og.jpg'

// This is a boilerplate Metadata Helper Function
// You will want to granularize and update this for articles or other webpage types
export interface GenerateMetadataInterface {
  title?: string
  description?: string
  icon?: string
  keywords?: string[]
  ogImage?: string
  ogUrl?: string
  type?: string
}

export function GenerateMetadata({
  title = Name,
  description = Description,
  icon = Icon,
  keywords = Keywords,
  ogImage = OGImage,
  ogUrl = URL
}: GenerateMetadataInterface): Metadata {
  return {
    title,
    description,
    keywords,
    icons: {
      icon
    },
    openGraph: {
      title,
      siteName: ShortName,
      description,
      locale: 'en_US',
      url: ogUrl,
      images: ogImage,
      type: 'website'
    },
    twitter: {
      title,
      description,
      images: ogImage,
      creator: '@justprintit',
      card: 'summary_large_image'
    }
  }
}
