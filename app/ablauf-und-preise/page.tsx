import type { Metadata } from 'next'
import preise from '@/content/preise.json'
import { CtaBand, Intro, Steps } from '@/components/Sections'

export const metadata: Metadata = {
  title: 'Ablauf und Preise – Coaching in Magdeburg',
  description: 'Kostenloses Erstgespräch, Coaching-Sitzung 150 € pro Stunde. So läuft das Coaching bei Andrea Herold in Magdeburg ab.',
  alternates: { canonical: '/ablauf-und-preise/' },
}

export default function AblaufUndPreise() {
  return (
    <>
      <Intro title="Ablauf und Preise" img="/img/feldweg.webp">
        <p>Ohne Pakete, ohne Abo. Sie entscheiden nach jeder Sitzung, ob und wie es weitergeht.</p>
      </Intro>
      <section className="s alt" aria-labelledby="h-ablauf">
        <h2 id="h-ablauf" className="center">
          So läuft es ab
        </h2>
        <p className="lead center">Drei Schritte, in Ihrem Tempo.</p>
        <Steps
          items={[
            { t: 'Kennenlernen', p: `Kostenloses Erstgespräch, ${preise.erstgespraech.dauer}. Sie erzählen von Ihrem Anliegen, wir klären, ob ich Ihnen helfen kann.` },
            { t: 'Coaching oder Test', p: 'In meiner Praxis am Florapark in Magdeburg.' },
            { t: 'Alltag', p: 'Sie probieren das Neue aus. Bei Fragen erreichen Sie mich auch zwischen den Terminen.' },
          ]}
        />
      </section>
      <section className="s" aria-labelledby="h-preise">
        <div className="prose">
          <h2 id="h-preise">Preise</h2>
          <dl className="table">
            <div>
              <dt>Erstgespräch</dt>
              <dd>{preise.erstgespraech.preis}</dd>
            </div>
            <div>
              <dt>Coaching-Sitzung, {preise.sitzung.einheit}</dt>
              <dd>{preise.sitzung.preis}</dd>
            </div>
            <div>
              <dt>Händigkeitstest &amp; Schulreife{preise.kindertest.dauer ? `, ${preise.kindertest.dauer}` : ''}</dt>
              <dd>{preise.kindertest.preis}</dd>
            </div>
          </dl>
          <p>{preise.endpreise}</p>

          <h3>Bezahlung</h3>
          <p>{preise.zahlung}</p>
          <h3>Absagen</h3>
          <p>{preise.absage}</p>
          <h3>Krankenkasse</h3>
          <p>{preise.kasse}</p>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
