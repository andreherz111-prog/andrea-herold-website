import type { Metadata } from 'next'
import preise from '@/content/preise.json'
import { Tbd } from '@/components/Icons'
import { CtaBand, Intro } from '@/components/Sections'

export const metadata: Metadata = {
  title: 'Händigkeitstest und Schulreife in Magdeburg',
  description: 'Ist mein Kind Linkshänder? Ist es schulreif? Spielerische Tests zu Händigkeit, Dominanzen und Schulreife in Magdeburg.',
  alternates: { canonical: '/kinder/' },
}

const tests = [
  { t: 'Händigkeit', d: 'Welche Hand ist die führende? Wichtig, bevor Ihr Kind schreiben lernt.' },
  { t: 'Dominanzen', d: 'Welches Auge, welches Ohr und welches Bein übernimmt die Führung?' },
  { t: 'Motorik', d: 'Geschicklichkeit, Feinmotorik, Beweglichkeit.' },
  { t: 'Wahrnehmung', d: 'Räumliche Orientierung, Zusammenspiel von Augen, Ohren und Bewegung.' },
  { t: 'Schulreife', d: 'Eine Einschätzung vor der Einschulung: Ist Ihr Kind gut vorbereitet, wo braucht es noch Unterstützung?' },
]

export default function Kinder() {
  return (
    <>
      <Intro
        title="Ihr Kind besser verstehen"
        img="/img/kind-malen.webp"
        imgAlt="Kinderhand mit Wachsmalstift beim Ausmalen"
        cta={{ href: '/kontakt/?anliegen=kind#anfrage', label: 'Test für mein Kind anfragen' }}
      >
        <p>
          „Mein Kind wechselt beim Malen die Hand. Ist es Links- oder Rechtshänder? Ist es schon so weit für die Schule?“ Solche
          Fragen begleiten viele Eltern lange.
        </p>
      </Intro>
      <section className="s alt" aria-labelledby="h-tests">
        <div className="prose">
          <h2 id="h-tests">Was ich teste</h2>
          <p>
            Mit spielerischen Tests sehe ich mir an, wie Ihr Kind seine Hände, Augen und Ohren einsetzt, sich bewegt und den Raum
            wahrnimmt. Anschließend bespreche ich die Ergebnisse in Ruhe mit Ihnen.
          </p>
          <ul className="list">
            {tests.map((x) => (
              <li key={x.t}>
                <b>{x.t}</b>
                <span>{x.d}</span>
              </li>
            ))}
          </ul>

          <h2>Für wen, wie lange, was es kostet</h2>
          <dl className="facts">
            <dt>Alter</dt>
            <dd>{preise.kindertest.alter || <Tbd />}</dd>
            <dt>Dauer</dt>
            <dd>{preise.kindertest.dauer || <Tbd />}</dd>
            <dt>Preis</dt>
            <dd>{preise.kindertest.preis}</dd>
          </dl>
          <p>Besonders sinnvoll ist ein Test im Jahr vor der Einschulung.</p>

          <div className="note">
            <b>Gut zu wissen</b>
            <p>
              Die Tests sind eine pädagogische Einschätzung, keine medizinische Diagnose. Wenn sich Hinweise ergeben, dass eine
              ärztliche Abklärung sinnvoll wäre, sage ich Ihnen das offen. Meine Einschätzung der Schulreife ersetzt nicht die
              schulärztliche Einschulungsuntersuchung.
            </p>
          </div>
        </div>
      </section>
      <CtaBand kind text="Erzählen Sie mir kurz, worum es geht. Im kostenlosen Erstgespräch klären wir, welcher Test für Ihr Kind sinnvoll ist." />
    </>
  )
}
