# Website Andrea Herold – Coaching & Beratung

Next.js 16 als statische Seite (`out/`), gehostet bei Netlify. Push auf `main` = automatisch online.

## Inhalte selbst ändern
- Telefon, E-Mail, Adresse, WhatsApp, Anfahrt: `content/kontakt.json`
- Preise, Dauer und Alter der Kinder-Tests, Zahlung, Absagen: `content/preise.json`
- Häufige Fragen: `content/fragen.ts`
- Leere Felder erscheinen auf der Seite als „wird ergänzt“ und müssen vor dem Livegang gefüllt sein.

## Lokal ansehen
```bash
npm install
npm run dev
```

## Design
Siehe `DESIGN.md` (Farben, Schriften, Bausteine) und `PRODUCT.md` (Zielgruppe, Ton, rechtlicher Rahmen).

## Vor dem Umzug auf die echte Domain
In `netlify.toml` die Zeile `NEXT_PUBLIC_NOINDEX = "1"` löschen, sonst nimmt Google die Seite nicht auf.
