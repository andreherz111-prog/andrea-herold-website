import type { Metadata } from 'next'
import { CtaBand, Faq, FaqJsonLd } from '@/components/Sections'

export const metadata: Metadata = {
  title: 'Häufige Fragen zum Hypnose-Coaching',
  description: 'Bin ich in Hypnose bewusstlos? Wie viele Sitzungen brauche ich? Was kostet es? Antworten von Andrea Herold, Magdeburg.',
  alternates: { canonical: '/fragen/' },
}

export default function Fragen() {
  return (
    <>
      <section className="s" aria-labelledby="h-faq">
        <h1 id="h-faq" className="center" style={{ fontSize: 'clamp(42px, 4.8vw, 68px)', lineHeight: 1.02, marginBottom: 16 }}>
          Häufige Fragen
        </h1>
        <p className="lead center">Antworten auf Fragen, die viele vor dem ersten Termin haben.</p>
        <Faq />
      </section>
      <FaqJsonLd />
      <CtaBand title="Ihre Frage war nicht dabei?" text="Rufen Sie mich einfach an oder schreiben Sie mir. Ich beantworte sie gern persönlich." />
    </>
  )
}
