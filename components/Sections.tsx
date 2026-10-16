import Link from 'next/link'
import kontakt from '@/content/kontakt.json'
import preise from '@/content/preise.json'
import { fragen } from '@/content/fragen'
import ContactForm from './ContactForm'
import Px from './Px'
import { Tbd } from './Icons'

/** Kopf einer Unterseite: Überschrift, Einleitung, Knöpfe, Bild */
export function Intro({
  title,
  children,
  img,
  imgAlt = '',
  imgSize = [1800, 1200],
  cta = { href: '/kontakt/#anfrage', label: 'Kostenloses Erstgespräch' },
}: {
  title: string
  children: React.ReactNode
  img: string
  imgAlt?: string
  imgSize?: [number, number]
  cta?: { href: string; label: string }
}) {
  return (
    <section className="intro" aria-labelledby="h-intro">
      <div>
        <h1 id="h-intro">{title}</h1>
        {children}
        <div className="acts">
          <Link className="btn" href={cta.href}>
            {cta.label}
          </Link>
          <p className="call">
            oder anrufen: <a href={`tel:${kontakt.telefonLink}`}>{kontakt.telefon}</a>
          </p>
        </div>
      </div>
      <Px className="ph" src={img} alt={imgAlt} width={imgSize[0]} height={imgSize[1]} priority />
    </section>
  )
}

export function Steps({ items, four = false }: { items: { t: string; p: React.ReactNode }[]; four?: boolean }) {
  return (
    <ol className={`steps${four ? ' four' : ''}`}>
      {items.map((s) => (
        <li key={s.t}>
          <h3>{s.t}</h3>
          <p>{s.p}</p>
        </li>
      ))}
    </ol>
  )
}

export function Prices() {
  return (
    <>
      <div className="prices">
        <div>
          <b>{preise.erstgespraech.preis}</b>
          <span>Erstgespräch</span>
        </div>
        <div>
          <b>{preise.sitzung.preis}</b>
          <span>Coaching-Sitzung, {preise.sitzung.einheit}</span>
        </div>
        <div>
          <b>{preise.kindertest.preis}</b>
          <span>Händigkeitstest &amp; Schulreife</span>
        </div>
      </div>
      <p className="small">
        {preise.endpreise} Ratenzahlung ist auf Anfrage möglich. Coaching ist eine Selbstzahlerleistung.
      </p>
    </>
  )
}

export function Faq({ onlyStart = false }: { onlyStart?: boolean }) {
  const list = onlyStart ? fragen.filter((f) => f.start) : fragen
  return (
    <div className="faq">
      {list.map((f) => (
        <details key={f.frage}>
          <summary>{f.frage}</summary>
          <p>{f.antwort}</p>
        </details>
      ))}
    </div>
  )
}

export function FaqJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: fragen.map((f) => ({ '@type': 'Question', name: f.frage, acceptedAnswer: { '@type': 'Answer', text: f.antwort } })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export function Reach() {
  return (
    <dl className="reach">
      <div>
        <dt>Telefon</dt>
        <dd>
          <a href={`tel:${kontakt.telefonLink}`}>{kontakt.telefon}</a>
        </dd>
      </div>
      <div>
        <dt>E-Mail</dt>
        <dd>
          <a href={`mailto:${kontakt.email}`}>{kontakt.email}</a>
        </dd>
      </div>
      <div>
        <dt>Praxis</dt>
        <dd>
          {kontakt.strasse}
          {kontakt.hausnummer ? ` ${kontakt.hausnummer}` : ''}, {kontakt.zusatz}
          <br />
          {kontakt.plz} {kontakt.ort}
          <br />
          <a href={kontakt.kartenLink} target="_blank" rel="noopener">
            Route planen
          </a>
        </dd>
      </div>
      {kontakt.whatsapp && (
        <div>
          <dt>WhatsApp</dt>
          <dd>
            <a href={`https://wa.me/${kontakt.whatsapp}`} target="_blank" rel="noopener">
              Nachricht schreiben
            </a>
          </dd>
        </div>
      )}
      <div>
        <dt>Anfahrt</dt>
        <dd>{kontakt.anfahrt || <Tbd>Haltestelle und Parken werden ergänzt</Tbd>}</dd>
      </div>
    </dl>
  )
}

/** Kontaktbereich mit Bild, Kontaktdaten und Formular */
export function Contact({ headingLevel = 2 }: { headingLevel?: 1 | 2 }) {
  const H = headingLevel === 1 ? 'h1' : 'h2'
  return (
    <section className="contact" id="kontakt" aria-labelledby="h-kontakt">
      <Px className="ph" src="/img/aue-nebel.webp" width={1800} height={1200} sizes="(max-width: 980px) 100vw, 42vw" priority={headingLevel === 1} />
      <div className="box">
        <H id="h-kontakt">{headingLevel === 1 ? 'Kontakt & Anfahrt' : 'Lassen Sie uns sprechen.'}</H>
        <p>
          Ein erstes Gespräch kostet nichts und verpflichtet zu nichts. Rufen Sie an oder schreiben Sie mir, ich melde mich
          schnellstmöglich bei Ihnen.
        </p>
        <Reach />
        <ContactForm />
      </div>
    </section>
  )
}

/** Kurzer Abschluss am Ende von Unterseiten */
export function CtaBand({ title = 'Lassen Sie uns sprechen.', text, kind = false }: { title?: string; text?: string; kind?: boolean }) {
  return (
    <section className="s alt ctaband" aria-labelledby="h-cta">
      <h2 id="h-cta">{title}</h2>
      <p>{text ?? 'Das Erstgespräch ist kostenlos und unverbindlich. Wir lernen uns kennen und klären, ob ich Ihnen helfen kann.'}</p>
      <div className="acts">
        <Link className="btn" href={kind ? '/kontakt/?anliegen=kind#anfrage' : '/kontakt/#anfrage'}>
          {kind ? 'Test für mein Kind anfragen' : 'Kostenloses Erstgespräch'}
        </Link>
        <p className="call">
          oder anrufen: <a href={`tel:${kontakt.telefonLink}`}>{kontakt.telefon}</a>
        </p>
      </div>
    </section>
  )
}
