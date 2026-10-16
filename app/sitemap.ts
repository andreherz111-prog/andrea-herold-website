import type { MetadataRoute } from 'next'
import kontakt from '@/content/kontakt.json'

export const dynamic = 'force-static'

const seiten = ['', 'hypnose-coaching', 'rauchfrei', 'essgewohnheiten', 'druck-und-stress', 'kinder', 'ueber-mich', 'ablauf-und-preise', 'fragen', 'kontakt']

export default function sitemap(): MetadataRoute.Sitemap {
  return seiten.map((s) => ({
    url: `${kontakt.website}/${s ? s + '/' : ''}`,
    changeFrequency: 'monthly',
    priority: s === '' ? 1 : 0.7,
  }))
}
