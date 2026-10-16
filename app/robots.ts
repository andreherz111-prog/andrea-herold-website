import type { MetadataRoute } from 'next'
import kontakt from '@/content/kontakt.json'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  if (process.env.NEXT_PUBLIC_NOINDEX === '1') return { rules: { userAgent: '*', disallow: '/' } }
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${kontakt.website}/sitemap.xml`,
  }
}
