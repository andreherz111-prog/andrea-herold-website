import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Seite nicht gefunden', robots: { index: false } }

export default function NotFound() {
  return (
    <section className="s ctaband" aria-labelledby="h-404">
      <h1 id="h-404" style={{ fontSize: 'clamp(40px, 4.4vw, 60px)', marginBottom: 16 }}>
        Diese Seite gibt es nicht (mehr).
      </h1>
      <p>Vielleicht hat sich die Adresse geändert. Hier geht es weiter:</p>
      <div className="acts">
        <Link className="btn" href="/">
          Zur Startseite
        </Link>
        <Link className="more" href="/kontakt/">
          Kontakt
        </Link>
      </div>
    </section>
  )
}
