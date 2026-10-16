import type { Metadata } from 'next'
import preise from '@/content/preise.json'
import { CtaBand, Intro } from '@/components/Sections'

export const metadata: Metadata = {
  title: 'Rauchfrei mit Hypnose-Coaching in Magdeburg',
  description: 'Rauchfrei werden mit Unterstützung: Hypnose-Coaching in Magdeburg bei Andrea Herold. Kostenloses Erstgespräch.',
  alternates: { canonical: '/rauchfrei/' },
}

export default function Rauchfrei() {
  return (
    <>
      <Intro title="Rauchfrei mit Hypnose-Coaching" img="/img/aue-nebel.webp">
        <p>
          Die meisten Raucher wissen genau, warum sie aufhören wollen. Schwer ist es, weil die Zigarette eine Aufgabe übernommen
          hat: die Pause, die Belohnung, das Ankommen nach der Arbeit.
        </p>
      </Intro>
      <section className="s alt" aria-labelledby="h-wie">
        <div className="prose">
          <h2 id="h-wie">So arbeiten wir</h2>
          <p>
            Im Coaching finden wir heraus, wofür die Zigarette bei Ihnen steht, und suchen dafür etwas Neues. Mit Hypnose verankern
            wir das Bild von Ihnen als Nichtraucherin oder Nichtraucher.
          </p>
          <h2>So läuft es ab</h2>
          <p>
            Zuerst das kostenlose Erstgespräch ({preise.erstgespraech.dauer}). Danach folgen die Coaching-Sitzungen in meiner Praxis
            am Florapark. Eine Sitzung kostet {preise.sitzung.preis} {preise.sitzung.einheit}. Wie viele Sitzungen sinnvoll sind,
            besprechen wir gemeinsam.
          </p>
          <div className="note">
            <b>Gut zu wissen</b>
            <p>
              Ein Rauchstopp-Coaching ist keine Garantie. Es kann Sie dabei unterstützen, wenn Sie wirklich aufhören wollen. Wenn Sie Medikamente nehmen oder Vorerkrankungen haben, sprechen Sie das Aufhören bitte auch mit Ihrer
              Ärztin oder Ihrem Arzt ab.
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
