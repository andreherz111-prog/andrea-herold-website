import type { Metadata } from 'next'
import kontakt from '@/content/kontakt.json'
import { Tbd } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  robots: { index: false },
  alternates: { canonical: '/datenschutz/' },
}

// Auf Andreas eigenem Server (npm run build:server) gilt ein anderer Hosting- und Formulartext als in der Netlify-Vorschau.
const server = process.env.NEXT_PUBLIC_HOSTING === 'server'

export default function Datenschutz() {
  return (
    <section className="s legal" aria-labelledby="h-ds">
      <div className="prose">
        <p className="draft">
          Entwurf, keine Rechtsberatung. Passend zu den tatsächlich genutzten Diensten (keine Cookies, kein Tracking). Bitte vor dem Livegang prüfen lassen.
        </p>
        <h1 id="h-ds" style={{ fontSize: 'clamp(40px, 4.4vw, 60px)', marginBottom: 24 }}>
          Datenschutzerklärung
        </h1>

        <h2>Verantwortliche</h2>
        <p>
          {kontakt.name}, {kontakt.strasse} {kontakt.hausnummer || <Tbd>Hausnummer</Tbd>}, {kontakt.plz} {kontakt.ort}
          <br />
          Telefon: {kontakt.telefon} · E-Mail: <a href={`mailto:${kontakt.email}`}>{kontakt.email}</a>
        </p>

        <h2>Das Wichtigste in Kürze</h2>
        <p>
          Diese Website setzt keine Cookies, nutzt keine Analyse- oder Werbedienste und lädt keine Inhalte von fremden Servern.
          Schriften und Bilder liegen auf dem eigenen Webspace. Personenbezogene Daten verarbeite ich nur, wenn Sie mir über das
          Formular, per E-Mail oder telefonisch schreiben.
        </p>

        <h2>Hosting</h2>
        {server ? (
          <p>
            Die Website liegt auf einem gemieteten Server in Deutschland bei <Tbd>Anbieter des Servers (vermutlich IONOS SE, Elgendorfer
            Str. 57, 56410 Montabaur) bestätigen</Tbd>. Beim Aufruf verarbeitet der Server technisch notwendige Daten wie IP-Adresse,
            Datum und Uhrzeit, aufgerufene Seite und Browsertyp (Server-Logfiles), um die Seite sicher auszuliefern. Rechtsgrundlage
            ist mein berechtigtes Interesse an einem sicheren Betrieb (Art. 6 Abs. 1 lit. f DSGVO). Mit dem Anbieter besteht ein
            Vertrag zur Auftragsverarbeitung. Server-Logfiles werden nach <Tbd>Speicherdauer der Logfiles auf dem Server prüfen</Tbd>{' '}
            gelöscht.
          </p>
        ) : (
          <p>
            Die Website wird bei Netlify, Inc. (USA) gehostet. Beim Aufruf verarbeitet der Server technisch notwendige Daten wie
            IP-Adresse, Datum und Uhrzeit, aufgerufene Seite und Browsertyp (Server-Logfiles), um die Seite sicher auszuliefern.
            Rechtsgrundlage ist mein berechtigtes Interesse an einem sicheren Betrieb (Art. 6 Abs. 1 lit. f DSGVO). Netlify ist unter
            dem EU-US Data Privacy Framework zertifiziert; mit Netlify wird ein Vertrag zur Auftragsverarbeitung geschlossen.
            Anschrift: Netlify, Inc., 101 2nd Street, San Francisco, CA 94105, USA.
          </p>
        )}

        <h2>Kontaktformular, E-Mail und Telefon</h2>
        <p>
          Wenn Sie mir schreiben oder anrufen, verarbeite ich Ihre Angaben (Name, Telefonnummer oder E-Mail-Adresse, Ihr Anliegen
          und Ihre Nachricht), um Ihre Anfrage zu beantworten.{' '}
          {server
            ? 'Nachrichten aus dem Formular werden von dieser Website direkt per verschlüsselter E-Mail an mein Postfach bei der Telekom (t-online) geschickt. Auf dem Webserver selbst wird die Nachricht nicht gespeichert.'
            : 'Nachrichten aus dem Formular werden über den Dienst Netlify Forms an mich übermittelt, dort gespeichert und mir per E-Mail an mein Postfach bei der Telekom (t-online) weitergeleitet.'}
        </p>
        <p>
          Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und, wenn es um einen Termin geht, die Anbahnung eines
          Vertrags (Art. 6 Abs. 1 lit. b DSGVO). Wenn Sie mir Angaben zu Ihrer Gesundheit machen, verarbeite ich sie nur mit Ihrer
          ausdrücklichen Einwilligung (Art. 9 Abs. 2 lit. a DSGVO). Bitte schreiben Sie in das Formular nur, was für eine erste
          Antwort nötig ist; Einzelheiten besprechen wir gern persönlich.
        </p>
        <p>
          Ich lösche Anfragen spätestens <Tbd>Frist festlegen, z. B. 6 Monate</Tbd> nach Abschluss der Bearbeitung, sofern keine
          gesetzlichen Aufbewahrungspflichten bestehen. Ihre Einwilligung können Sie jederzeit mit Wirkung für die Zukunft
          widerrufen, eine kurze Nachricht genügt.
        </p>

        <h2>Links zu anderen Websites</h2>
        <p>
          Der Link „Route planen“ öffnet Google Maps in einem neuen Fenster. Erst dann gelten die Datenschutzbestimmungen von Google.
          Auf dieser Website selbst ist keine Karte eingebunden.
        </p>

        <h2>Verschlüsselung</h2>
        <p>Die Website wird ausschließlich verschlüsselt (SSL/TLS) übertragen. Das erkennen Sie am Schloss-Symbol und an „https://“ in der Adresszeile.</p>

        <h2>Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten, auf
          Datenübertragbarkeit sowie auf Widerspruch gegen Verarbeitungen, die auf berechtigtem Interesse beruhen. Schreiben Sie mir
          dazu einfach an die oben genannte Adresse.
        </p>
        <p>
          Sie können sich außerdem bei einer Datenschutz-Aufsichtsbehörde beschweren, zum Beispiel beim Landesbeauftragten für den
          Datenschutz Sachsen-Anhalt, Leiterstraße 9, 39104 Magdeburg.
        </p>
        <h2>Widerspruchsrecht (Art. 21 DSGVO)</h2>
        <p>
          <strong>
            Soweit ich Daten auf Grundlage meines berechtigten Interesses verarbeite (Art. 6 Abs. 1 lit. f DSGVO), können Sie dieser
            Verarbeitung jederzeit aus Gründen widersprechen, die sich aus Ihrer besonderen Situation ergeben.
          </strong>
        </p>
        <p>Stand: Oktober 2026</p>
      </div>
    </section>
  )
}
