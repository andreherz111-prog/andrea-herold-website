import type { Metadata } from 'next'
import { CtaBand, Intro } from '@/components/Sections'

export const metadata: Metadata = {
  title: 'Essgewohnheiten ändern mit Hypnose in Magdeburg',
  description: 'Ohne Diät zu einem entspannteren Umgang mit Essen: Hypnose- und Mental-Coaching in Magdeburg bei Andrea Herold.',
  alternates: { canonical: '/essgewohnheiten/' },
}

export default function Essgewohnheiten() {
  return (
    <>
      <Intro title="Anders essen, ohne Diät" img="/img/schilf.webp">
        <p>Essen beruhigt, tröstet, belohnt oder füllt eine Lücke. Wer das versteht, kann aufhören, gegen sich selbst zu kämpfen.</p>
      </Intro>
      <section className="s alt" aria-labelledby="h-wie">
        <div className="prose">
          <h2 id="h-wie">So arbeiten wir</h2>
          <p>
            Im Coaching schauen wir, wann und warum Sie essen, ohne hungrig zu sein, und wie Sie sich diese Bedürfnisse anders
            erfüllen können. Mit Hypnose und dem Mental-Coaching nach Andreas Winter gehen wir den Gründen nach, die hinter den
            Gewohnheiten liegen, statt nur an der Oberfläche zu verbieten.
          </p>
          <div className="note">
            <b>Wichtig</b>
            <p>
              Dieses Coaching richtet sich an Menschen, die ihre Essgewohnheiten ändern möchten. Bei einer Essstörung oder starkem
              Über- oder Untergewicht gehört die Begleitung in ärztliche oder psychotherapeutische Hände.
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
