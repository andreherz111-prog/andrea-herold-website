import Link from 'next/link'
import kontakt from '@/content/kontakt.json'
import preise from '@/content/preise.json'
import type { Metadata } from 'next'
import { Arrow, Tbd } from '@/components/Icons'
import { Contact, Faq, Prices, Steps } from '@/components/Sections'
import Px from '@/components/Px'

export const metadata: Metadata = { alternates: { canonical: '/' } }

export default function Start() {
  return (
    <>
      <section className="hero" aria-labelledby="h-hero">
        <Px className="p1" src="/img/schilf.webp" width={1800} height={1200} sizes="42vw" />
        <Px className="p2" src="/img/baum-nebel.webp" width={1200} height={1800} position="50% 72%" priority sizes="(max-width: 980px) 100vw, 60vw" />
        <div className="card">
          <h1 id="h-hero">Blockaden lösen. Potenziale entfalten.</h1>
          <p>
            Hypnose- und Mental-Coaching in Magdeburg: für Erwachsene, die eine Gewohnheit hinter sich lassen möchten, und für
            Eltern, die ihr Kind besser verstehen wollen.
          </p>
          <div className="doors">
            <Link className="door" href="#erwachsene">
              <span>
                <b>Für mich</b>
                <small>Gewohnheiten, Druck, Stress</small>
              </span>
              <Arrow />
            </Link>
            <Link className="door" href="#kinder">
              <span>
                <b>Für mein Kind</b>
                <small>Händigkeit, Schulreife</small>
              </span>
              <Arrow />
            </Link>
          </div>
          <p className="call">
            Kostenloses Erstgespräch: <a href={`tel:${kontakt.telefonLink}`}>{kontakt.telefon}</a>
          </p>
        </div>
      </section>

      <section className="s" id="erwachsene" aria-labelledby="h-erw">
        <div className="split">
          <Px className="ph" src="/img/wiese-pfad.webp" width={1800} height={1200} />
          <div>
            <h2 id="h-erw">Für Sie selbst</h2>
            <p>
              Rauchen, Essen, Druck vor Prüfungen oder Gesprächen: Vieles läuft automatisch ab, obwohl wir es anders wollen. Im
              Hypnose-Coaching schauen wir gemeinsam, was dahintersteckt, und üben neue Wege ein. Sie bleiben dabei die ganze Zeit
              wach und behalten die Kontrolle.
            </p>
            <ul className="list">
              <li className="link">
                <Link className="row" href="/rauchfrei/">
                  <span>
                    <b>Rauchfrei werden</b>
                    <span>Die Zigarette nicht mehr brauchen, statt sie sich zu verbieten.</span>
                  </span>
                  <Arrow />
                </Link>
              </li>
              <li className="link">
                <Link className="row" href="/essgewohnheiten/">
                  <span>
                    <b>Essgewohnheiten ändern</b>
                    <span>Verstehen, wann und warum Sie essen, ohne Diät.</span>
                  </span>
                  <Arrow />
                </Link>
              </li>
              <li className="link">
                <Link className="row" href="/druck-und-stress/">
                  <span>
                    <b>Druck, Nervosität &amp; Stress</b>
                    <span>Ruhiger bleiben in Prüfungen, bei Vorträgen und in wichtigen Gesprächen.</span>
                  </span>
                  <Arrow />
                </Link>
              </li>
              <li>
                <b>Berufliche Orientierung</b>
                <span>Eher kreativ oder eher rational? Talente erkennen, die bisher zu kurz kommen.</span>
              </li>
            </ul>
            <div className="acts">
              <Link className="btn" href="/kontakt/#anfrage">
                Erstgespräch vereinbaren
              </Link>
              <Link className="more" href="/hypnose-coaching/">
                Mehr zum Hypnose-Coaching
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="s alt" id="kinder" aria-labelledby="h-kind">
        <div className="split">
          <div>
            <h2 id="h-kind">Für Ihr Kind</h2>
            <p>
              „Mein Kind wechselt beim Malen die Hand. Ist es Links- oder Rechtshänder? Ist es bereit für die Schule?“ Mit
              spielerischen Tests sehe ich mir an, wie Ihr Kind Hände, Augen und Ohren einsetzt, sich bewegt und den Raum
              wahrnimmt. Die Ergebnisse bespreche ich in Ruhe mit Ihnen.
            </p>
            <ul className="list">
              <li>
                <b>Händigkeit</b>
                <span>Welche Hand führt? Wichtig, bevor Ihr Kind schreiben lernt.</span>
              </li>
              <li>
                <b>Dominanzen</b>
                <span>Welches Auge, welches Ohr, welches Bein übernimmt die Führung?</span>
              </li>
              <li>
                <b>Motorik &amp; Wahrnehmung</b>
                <span>Geschicklichkeit, räumliche Orientierung, Zusammenspiel von Augen, Ohren und Bewegung.</span>
              </li>
              <li>
                <b>Schulreife</b>
                <span>Was kann Ihr Kind schon, wo braucht es vor der Einschulung noch Unterstützung?</span>
              </li>
            </ul>
            <dl className="facts">
              <dt>Alter</dt>
              <dd>{preise.kindertest.alter || <Tbd />}</dd>
              <dt>Dauer</dt>
              <dd>{preise.kindertest.dauer || <Tbd />}</dd>
              <dt>Preis</dt>
              <dd>{preise.kindertest.preis}</dd>
            </dl>
            <div className="acts">
              <Link className="btn" href="/kontakt/?anliegen=kind#anfrage">
                Test für mein Kind anfragen
              </Link>
              <Link className="more" href="/kinder/">
                Mehr zu den Tests
              </Link>
            </div>
          </div>
          <Px className="ph first drop" src="/img/kind-malen.webp" alt="Kinderhand mit Wachsmalstift beim Ausmalen" width={1800} height={1200} />
        </div>
      </section>

      <section className="s" id="ueber" aria-labelledby="h-ueber">
        <div className="about">
          <Px src="/img/portrait.webp" alt="Andrea Herold" width={849} height={1200} position="50% 35%" />
          <div>
            <h2 id="h-ueber">Andrea Herold</h2>
            <p>
              Ich begleite Menschen auf ihrem Weg zu mehr Lebensqualität und innerem Frieden. Mein Schwerpunkt sind vorgeburtliche
              Prägungen: Muster, die so früh entstanden sind, dass wir sie gar nicht als „gelernt“ erkennen und deshalb für einen
              festen Teil von uns halten.
            </p>
            <p>
              Bei mir müssen Sie sich nicht erklären oder rechtfertigen. Wir arbeiten auf Augenhöhe und in Ihrem Tempo. Was Sie mir
              erzählen, bleibt unter uns.
            </p>
            <p className="quals">
              <b>Seit über 10 Jahren in Magdeburg</b>
              Hypnose-Coaching · Mental-Coaching nach Andreas Winter
            </p>
            <Link className="more" href="/ueber-mich/">
              Mehr über mich
            </Link>
          </div>
        </div>
      </section>

      <section className="s alt" id="preise" aria-labelledby="h-ablauf">
        <h2 id="h-ablauf" className="center">
          So läuft es ab
        </h2>
        <p className="lead center">Ohne Pakete, ohne Abo. Sie entscheiden nach jeder Sitzung, ob und wie es weitergeht.</p>
        <Steps
          items={[
            { t: 'Kennenlernen', p: `Kostenloses Erstgespräch, ${preise.erstgespraech.dauer}. Sie erzählen von Ihrem Anliegen, wir klären, ob ich Ihnen helfen kann.` },
            { t: 'Coaching oder Test', p: 'In meiner Praxis am Florapark in Magdeburg, in Ihrem Tempo.' },
            { t: 'Alltag', p: 'Sie probieren das Neue aus. Bei Fragen erreichen Sie mich auch zwischen den Terminen.' },
          ]}
        />
        <Prices />
      </section>

      <section className="s" id="fragen" aria-labelledby="h-faq">
        <h2 id="h-faq" className="center">
          Häufige Fragen
        </h2>
        <p className="lead center">Antworten auf Fragen, die viele vor dem ersten Termin haben.</p>
        <Faq onlyStart />
        <p className="small">
          <Link className="more" href="/fragen/">
            Alle Fragen ansehen
          </Link>
        </p>
      </section>

      <Contact />
    </>
  )
}
