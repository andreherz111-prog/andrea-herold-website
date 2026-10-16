import type { Metadata } from 'next'
import { Contact } from '@/components/Sections'

export const metadata: Metadata = {
  title: 'Kontakt & Anfahrt in Magdeburg',
  description: 'Kostenloses Erstgespräch vereinbaren: per Telefon, E-Mail oder Formular. Praxis am Florapark, Magdeburg.',
  alternates: { canonical: '/kontakt/' },
}

export default function Kontakt() {
  return <Contact headingLevel={1} />
}
