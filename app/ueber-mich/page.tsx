import type { Metadata } from 'next'
import { CtaBand, Intro } from '@/components/Sections'

export const metadata: Metadata = {
  title: { absolute: 'Über mich | Andrea Herold – Coaching & Beratung in Magdeburg' },
  description: 'Andrea Herold begleitet seit über 10 Jahren Menschen in Magdeburg mit Hypnose- und Mental-Coaching nach Andreas Winter.',
  alternates: { canonical: '/ueber-mich/' },
}

export default function UeberMich() {
  return (
    <>
      <Intro title="Andrea Herold" img="/img/portrait.webp" imgAlt="Andrea Herold" imgSize={[849, 1200]}>
        <p>
          Ich begleite Menschen auf ihrem Weg zu mehr Lebensqualität und innerem Frieden. Seit über 10 Jahren arbeite ich in
          Magdeburg mit Hypnose und mit dem Mental-Coaching nach Andreas Winter.
        </p>
      </Intro>
      <section className="s alt" aria-labelledby="h-weg">
        <div className="prose">
          <h2 id="h-weg">Mein Schwerpunkt</h2>
          <p>
            Mein Schwerpunkt sind vorgeburtliche Prägungen und das Lösen von Blockaden: Muster, die so früh entstanden sind, dass
            wir sie gar nicht als „gelernt“ erkennen und deshalb für einen festen Teil von uns halten.
          </p>
          <p>
            Für mich trägt jeder Mensch das, was er für eine Veränderung braucht, schon in sich. Meine Aufgabe ist es, beim Finden zu
            helfen. Ich arbeite auf Augenhöhe, ohne zu bewerten, und in Ihrem Tempo. Was Sie mir erzählen, bleibt unter uns.
          </p>

          <h2>Ausbildung</h2>
          <ul>
            <li>Hypnose-Coaching</li>
            <li>Mental-Coaching nach Andreas Winter</li>
          </ul>

          <h2>Was Sie von mir erwarten können</h2>
          <ul>
            <li>Ich verspreche Ihnen keine Wunder, sondern ehrliche, aufmerksame Begleitung.</li>
            <li>Wenn ich merke, dass Ihnen jemand anderes besser helfen kann, sage ich es Ihnen.</li>
            <li>Transparente Preise, keine Abos, keine Pakete, die Sie vorab bezahlen müssen.</li>
          </ul>
        </div>
      </section>
      <CtaBand title="Lernen wir uns kennen." />
    </>
  )
}
