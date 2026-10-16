import type { Metadata } from 'next'
import { CtaBand, Intro } from '@/components/Sections'

export const metadata: Metadata = {
  title: 'Coaching bei Prüfungsdruck und Stress in Magdeburg',
  description: 'Ruhiger bleiben in Prüfungen, bei Vorträgen und in wichtigen Gesprächen: Hypnose-Coaching in Magdeburg. Erstgespräch kostenlos.',
  alternates: { canonical: '/druck-und-stress/' },
}

export default function DruckUndStress() {
  return (
    <>
      <Intro title="Ruhiger bleiben, wenn es darauf ankommt" img="/img/baum-nebel.webp" imgSize={[1200, 1800]}>
        <p>
          Ein leerer Kopf in der Prüfung, Nervosität vor dem Vortrag oder der Gedanke „Ich bin nicht gut genug“: Solche Reaktionen
          sind keine Schwäche, sondern ein altes Schutzprogramm.
        </p>
      </Intro>
      <section className="s alt" aria-labelledby="h-wie">
        <div className="prose">
          <h2 id="h-wie">So arbeiten wir</h2>
          <p>
            Im Coaching finden wir heraus, wann dieses Schutzprogramm entstanden ist, und üben, wie Sie gelassener damit umgehen. In der
            Hypnose verankern wir ein neues Gefühl für die Situationen, die Sie heute unter Druck setzen.
          </p>
          <h2>Weitere Themen</h2>
          <ul>
            <li>Innere Unruhe</li>
            <li>Schwer abschalten können</li>
            <li>Selbstzweifel</li>
          </ul>
          <div className="note">
            <b>Wichtig</b>
            <p>
              Bei Ängsten, die Ihren Alltag stark einschränken, Panikattacken oder anhaltenden Schlafproblemen wenden Sie sich bitte
              an eine Ärztin, einen Arzt oder eine psychotherapeutische Praxis.
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
