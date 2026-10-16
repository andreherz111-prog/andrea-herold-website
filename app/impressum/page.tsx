import type { Metadata } from 'next'
import kontakt from '@/content/kontakt.json'
import { Tbd } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Impressum',
  robots: { index: false },
  alternates: { canonical: '/impressum/' },
}

export default function Impressum() {
  return (
    <section className="s legal" aria-labelledby="h-imp">
      <div className="prose">
        <p className="draft">Entwurf, keine Rechtsberatung. Bitte vor dem Livegang von Andrea prüfen lassen (oder per Generator wie e-recht24).</p>
        <h1 id="h-imp" style={{ fontSize: 'clamp(40px, 4.4vw, 60px)', marginBottom: 24 }}>
          Impressum
        </h1>
        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          {kontakt.name}
          <br />
          Coaching &amp; Beratung
          <br />
          {kontakt.strasse} {kontakt.hausnummer || <Tbd>Hausnummer</Tbd>}
          <br />
          {kontakt.plz} {kontakt.ort}
        </p>
        <h2>Kontakt</h2>
        <p>
          Telefon: <a href={`tel:${kontakt.telefonLink}`}>{kontakt.telefon}</a>
          <br />
          E-Mail: <a href={`mailto:${kontakt.email}`}>{kontakt.email}</a>
        </p>
        <h2>Hinweis</h2>
        <p>
          Ich bin Coach und Beraterin, keine Heilpraktikerin, Ärztin oder Psychotherapeutin. Mein Angebot ist Coaching und keine
          Ausübung der Heilkunde.
        </p>
        <h2>Umsatzsteuer</h2>
        <p>
          <Tbd>Umsatzsteuer-Identifikationsnummer bzw. Wirtschafts-Identifikationsnummer, falls vorhanden</Tbd>
        </p>
        <h2>Verbraucherstreitbeilegung</h2>
        <p>Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      </div>
    </section>
  )
}
