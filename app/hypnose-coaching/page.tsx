import type { Metadata } from 'next'
import Link from 'next/link'
import { Arrow } from '@/components/Icons'
import { CtaBand, Intro, Steps } from '@/components/Sections'

export const metadata: Metadata = {
  title: 'Hypnose-Coaching für Erwachsene in Magdeburg',
  description: 'Hypnose-Coaching in Magdeburg: Sie bleiben wach und behalten die Kontrolle. Für Gewohnheiten, Druck und innere Unruhe. Erstgespräch kostenlos.',
  alternates: { canonical: '/hypnose-coaching/' },
}

const themen = [
  { href: '/rauchfrei/', t: 'Rauchfrei werden', d: 'Die Zigarette nicht mehr brauchen, statt sie sich zu verbieten.' },
  { href: '/essgewohnheiten/', t: 'Essgewohnheiten ändern', d: 'Verstehen, wann und warum Sie essen, ohne Diät.' },
  { href: '/druck-und-stress/', t: 'Druck, Nervosität & Stress', d: 'Ruhiger bleiben, wenn es darauf ankommt.' },
]
const weitere = [
  { t: 'Selbstvertrauen stärken', d: 'Sich selbst wieder mehr zutrauen.' },
  { t: 'Alte Glaubenssätze erkennen', d: '„Das schaffe ich sowieso nicht“: woher solche Sätze kommen und wie sie leiser werden.' },
  { t: 'Herausfinden, was Sie wirklich wollen', d: 'Was ist Ihr eigener Wunsch, und was haben Sie nur übernommen?' },
  { t: 'Berufliche Orientierung', d: 'Eher kreativ oder eher rational? Talente erkennen, die bisher zu kurz kommen.' },
]

export default function HypnoseCoaching() {
  return (
    <>
      <Intro title="Hypnose-Coaching in Magdeburg" img="/img/wiese-pfad.webp">
        <p>Für Menschen, die etwas verändern möchten und merken, dass guter Wille allein nicht reicht.</p>
      </Intro>

      <section className="s alt" aria-labelledby="h-was">
        <div className="prose">
          <h2 id="h-was">Was ist Hypnose-Coaching?</h2>
          <p>
            Hypnose ist ein Zustand tiefer Entspannung, den Sie aus dem Alltag kennen. Er stellt sich zum Beispiel ein, wenn Sie in
            ein Buch vertieft sind oder auf einer vertrauten Strecke Auto fahren und gedanklich woanders sind. In diesem Zustand
            fällt es leichter, alte Muster zu erkennen und neue Gedanken zuzulassen.
          </p>
          <p>
            Sie bleiben dabei die ganze Zeit wach, hören alles und können jederzeit selbst entscheiden, aufzuhören. Mit
            Bühnenhypnose hat das nichts zu tun.
          </p>

          <h2>Wobei ich begleite</h2>
          <ul className="list">
            {themen.map((x) => (
              <li className="link" key={x.href}>
                <Link className="row" href={x.href}>
                  <span>
                    <b>{x.t}</b>
                    <span>{x.d}</span>
                  </span>
                  <Arrow />
                </Link>
              </li>
            ))}
            {weitere.map((x) => (
              <li key={x.t}>
                <b>{x.t}</b>
                <span>{x.d}</span>
              </li>
            ))}
          </ul>

          <h2>Mental-Coaching nach Andreas Winter</h2>
          <p>
            Neben der Hypnose arbeite ich mit dem Mental-Coaching nach Andreas Winter. Die Idee: Viele Verhaltensweisen haben einen
            Grund, der uns nicht bewusst ist. Oft ist es ein früher Eindruck oder ein Gefühl, das sich festgesetzt hat. Wenn wir
            verstehen, wofür ein Verhalten einmal gut war, verliert es oft von selbst an Kraft.
          </p>
        </div>
      </section>

      <section className="s" aria-labelledby="h-ablauf">
        <h2 id="h-ablauf" className="center">
          So läuft eine Sitzung ab
        </h2>
        <p className="lead center">In der Praxis am Florapark, in Ruhe und in Ihrem Tempo.</p>
        <Steps
          four
          items={[
            { t: 'Gespräch', p: 'Wir sprechen über Ihr Anliegen und das Ziel für diese Sitzung.' },
            { t: 'Entspannung', p: 'Ich leite Sie in eine angenehme, tiefe Entspannung.' },
            { t: 'Neue Bilder', p: 'In der Entspannung arbeiten wir mit Bildern und neuen Sätzen.' },
            { t: 'Nachgespräch', p: 'Wir besprechen, was Sie erlebt haben und was Sie bis zum nächsten Mal ausprobieren.' },
          ]}
        />
      </section>

      <CtaBand />
    </>
  )
}
