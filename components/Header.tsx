'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

const links = [
  { href: '/hypnose-coaching/', label: 'Hypnose-Coaching' },
  { href: '/kinder/', label: 'Für Kinder' },
  { href: '/ueber-mich/', label: 'Über mich' },
  { href: '/ablauf-und-preise/', label: 'Ablauf & Preise' },
  { href: '/kontakt/', label: 'Kontakt' },
]
const mobileLinks = [...links.slice(0, 4), { href: '/fragen/', label: 'Häufige Fragen' }, links[4]]

export default function Header() {
  const path = usePathname()
  const menu = useRef<HTMLDetailsElement>(null)
  const current = (href: string) => (path === href || path + '/' === href ? 'page' : undefined)

  // Mobiles Menü nach dem Seitenwechsel schließen
  useEffect(() => {
    if (menu.current) menu.current.open = false
  }, [path])

  return (
    <header className="nav">
      <div className="in">
        <Link className="brand" href="/">
          <img src="/img/logo-emblem.webp" alt="" width={240} height={147} />
          <span>
            <b>ANDREA HEROLD</b>
            <small>COACHING &amp; BERATUNG</small>
          </span>
        </Link>
        <nav className="links" aria-label="Hauptmenü">
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={current(l.href)}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link className="btn-o" href="/kontakt/">
          Erstgespräch
        </Link>
        <details className="menu" ref={menu}>
          <summary aria-label="Menü">
            Menü
            <svg className="ico-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M4 8h16M4 16h16" />
            </svg>
            <svg className="ico-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </summary>
          <nav aria-label="Hauptmenü mobil">
            {mobileLinks.map((l) => (
              <Link key={l.href} href={l.href} aria-current={current(l.href)}>
                {l.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  )
}
