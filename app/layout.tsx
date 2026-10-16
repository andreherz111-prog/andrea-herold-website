import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import kontakt from '@/content/kontakt.json'
import './globals.css'

// Schriften lokal eingebunden (keine Verbindung zu Google Fonts oder Adobe)
const serif = localFont({
  src: [{ path: './fonts/cormorant-garamond-500-normal.woff2', weight: '500', style: 'normal' }],
  variable: '--font-serif',
  display: 'swap',
})
const sans = localFont({
  src: [
    { path: './fonts/mulish-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/mulish-500-normal.woff2', weight: '500', style: 'normal' },
    { path: './fonts/mulish-600-normal.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-sans',
  display: 'swap',
})

// Solange die Seite nur unter der Netlify-Vorschauadresse läuft: nicht von Google aufnehmen lassen.
// Beim Umzug auf die echte Domain NEXT_PUBLIC_NOINDEX in netlify.toml entfernen.
const noindex = process.env.NEXT_PUBLIC_NOINDEX === '1'

export const metadata: Metadata = {
  metadataBase: new URL(kontakt.website),
  ...(noindex ? { robots: { index: false, follow: false } } : {}),
  title: {
    default: 'Hypnose-Coaching in Magdeburg | Andrea Herold',
    template: '%s | Andrea Herold',
  },
  description:
    'Hypnose-Coaching in Magdeburg: rauchfrei werden, Essgewohnheiten ändern, Druck abbauen. Händigkeitstest und Schulreife für Kinder. Erstgespräch kostenlos.',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Andrea Herold – Coaching & Beratung',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Andrea Herold – Coaching & Beratung in Magdeburg' }],
  },
}

export const viewport: Viewport = { themeColor: '#f8f7f5' }

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Andrea Herold – Coaching & Beratung',
  description: 'Hypnose- und Mental-Coaching für Erwachsene sowie Händigkeitstests und Schulreife-Einschätzung für Kinder in Magdeburg.',
  url: kontakt.website,
  image: `${kontakt.website}/og.jpg`,
  logo: `${kontakt.website}/img/logo.webp`,
  telephone: kontakt.telefonIntl,
  priceRange: 'Erstgespräch kostenlos, Coaching 150 € pro Stunde',
  email: kontakt.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${kontakt.strasse}${kontakt.hausnummer ? ' ' + kontakt.hausnummer : ''}`,
    postalCode: kontakt.plz,
    addressLocality: kontakt.ort,
    addressCountry: 'DE',
  },
  areaServed: { '@type': 'City', name: 'Magdeburg' },
  founder: { '@type': 'Person', name: kontakt.name },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a className="skip" href="#inhalt">
          Zum Inhalt springen
        </a>
        <Header />
        <main id="inhalt">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      </body>
    </html>
  )
}
