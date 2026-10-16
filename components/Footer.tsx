import Link from 'next/link'
import kontakt from '@/content/kontakt.json'
import { Phone } from './Icons'

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <img src="/img/logo.webp" alt="Logo Andrea Herold" loading="lazy" width={420} height={297} />
        <div>
          {kontakt.name} · {kontakt.titel} · {kontakt.ort}
        </div>
        <nav aria-label="Weitere Seiten">
          <Link href="/fragen/">Häufige Fragen</Link>
          <Link href="/kontakt/">Kontakt</Link>
          <Link href="/impressum/">Impressum</Link>
          <Link href="/datenschutz/">Datenschutz</Link>
        </nav>
        <p className="note-s">
          Coaching und Hypnose-Coaching ersetzen keine ärztliche oder psychotherapeutische Behandlung. Bei Erkrankungen wenden Sie
          sich bitte an eine Ärztin oder einen Arzt.
        </p>
      </footer>
      <nav className="bar" aria-label="Schnellkontakt">
        <a className="pri" href={`tel:${kontakt.telefonLink}`}>
          <Phone />
          Anrufen
        </a>
        <Link href="/kontakt/#anfrage">Nachricht schreiben</Link>
      </nav>
    </>
  )
}
