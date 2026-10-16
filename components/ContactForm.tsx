'use client'

import Link from 'next/link'
import { FormEvent, useEffect, useRef, useState } from 'react'
import kontakt from '@/content/kontakt.json'

type Fehler = { name?: string; kontakt?: string; ok?: string }

// Versand: auf Andreas Server über anfrage.php (NEXT_PUBLIC_FORM_ENDPOINT=/anfrage.php, siehe server/),
// in der Netlify-Vorschau über Netlify Forms (Formular-Vorlage: public/__forms.html).
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || '/__forms.html'
export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null)
  const [fehler, setFehler] = useState<Fehler>({})
  const [status, setStatus] = useState<'' | 'sending' | 'ok' | 'bad'>('')

  // ?anliegen=kind aus Links wie „Test für mein Kind anfragen“ vorauswählen
  useEffect(() => {
    const a = new URLSearchParams(window.location.search).get('anliegen')
    const sel = form.current?.elements.namedItem('anliegen') as HTMLSelectElement | null
    if (a && sel && [...sel.options].some((o) => o.value === a)) sel.value = a
  }, [])

  async function senden(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = e.currentTarget
    const data = new FormData(f)
    const name = String(data.get('name') || '').trim()
    const erreichbar = String(data.get('kontakt') || '').trim()
    const neu: Fehler = {}
    if (name.length < 2) neu.name = 'Bitte geben Sie Ihren Namen an.'
    if (!/@.+\./.test(erreichbar) && erreichbar.replace(/\D/g, '').length < 6)
      neu.kontakt = 'Bitte geben Sie eine Telefonnummer oder E-Mail-Adresse an, unter der ich Sie erreiche.'
    if (!data.get('einwilligung')) neu.ok = 'Bitte bestätigen Sie die Einwilligung, damit ich Ihnen antworten darf.'
    setFehler(neu)
    if (Object.keys(neu).length) {
      const erstes = neu.name ? 'name' : neu.kontakt ? 'kontakt' : 'einwilligung'
      ;(f.elements.namedItem(erstes) as HTMLElement | null)?.focus()
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('ok')
      f.reset()
    } catch {
      setStatus('bad')
    }
  }

  if (status === 'ok') {
    return (
      <p className="status ok" role="status">
        Danke! Ihre Nachricht ist angekommen. Ich melde mich schnellstmöglich bei Ihnen.
      </p>
    )
  }

  return (
    <form ref={form} className="form" id="anfrage" name="anfrage" onSubmit={senden} noValidate>
      <input type="hidden" name="form-name" value="anfrage" />
      <p className="hp" aria-hidden="true">
        <label>
          Nicht ausfüllen: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="f">
        <label htmlFor="f-name">Ihr Name</label>
        <input id="f-name" name="name" autoComplete="name" aria-required="true" aria-invalid={!!fehler.name} aria-describedby="e-name" />
        <span className="msg" id="e-name">{fehler.name}</span>
      </div>
      <div className="f">
        <label htmlFor="f-kontakt">Telefon oder E-Mail</label>
        <input id="f-kontakt" name="kontakt" autoComplete="off" inputMode="email" aria-required="true" aria-invalid={!!fehler.kontakt} aria-describedby="e-kontakt" />
        <span className="msg" id="e-kontakt">{fehler.kontakt}</span>
      </div>
      <div className="f full">
        <label htmlFor="f-anliegen">Worum geht es?</label>
        <select id="f-anliegen" name="anliegen" defaultValue="ich">
          <option value="ich">Coaching für mich</option>
          <option value="kind">Test für mein Kind</option>
          <option value="anderes">Etwas anderes</option>
        </select>
      </div>
      <div className="f full">
        <label htmlFor="f-text">
          Ihre Nachricht <span className="opt">(optional)</span>
        </label>
        <textarea id="f-text" name="nachricht" placeholder="Zum Beispiel, wann Sie gut erreichbar sind" />
      </div>
      <div className="f full">
        <label className="consent">
          <input type="checkbox" name="einwilligung" value="ja" aria-required="true" aria-invalid={!!fehler.ok} aria-describedby="e-ok" />
          <span>
            Ich bin einverstanden, dass meine Angaben, auch solche mit Gesundheitsbezug, zur Bearbeitung meiner Anfrage verarbeitet
            werden. Die Einwilligung kann ich jederzeit widerrufen. Mehr in der{' '}
            <Link href="/datenschutz/">Datenschutzerklärung</Link>.
          </span>
        </label>
        <span className="msg" id="e-ok">{fehler.ok}</span>
      </div>
      <div className="f full">
        <button className="btn" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Wird gesendet …' : 'Nachricht senden'}
        </button>
      </div>
      <p className={`status${status === 'bad' ? ' bad' : ''}`} role="status" aria-live="polite">
        {status === 'bad' && (
          <>
            Das Senden hat leider nicht geklappt. Bitte versuchen Sie es noch einmal oder rufen Sie mich direkt an:{' '}
            <a href={`tel:${kontakt.telefonLink}`}>{kontakt.telefon}</a>.
          </>
        )}
      </p>
    </form>
  )
}
