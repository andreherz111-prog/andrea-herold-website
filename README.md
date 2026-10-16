# Website Andrea Herold – Coaching & Beratung

Next.js 16 als statische Seite (`out/`).

- **Vorschau zum Vorzeigen:** Netlify, https://andrea-herold-coaching.netlify.app (Push auf `main` = automatisch aktualisiert, nicht bei Google).
- **Echte Seite:** Andreas eigener Server (Apache, Ubuntu) unter https://andreaherold-coaching.de, Upload per SSH.

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

## Echte Seite auf Andreas Server hochladen
1. Einmalig: `server/anfrage-config.example.php` als `anfrage-config.php` **eine Ebene über dem Web-Ordner** auf dem Server ablegen und das t-online-E-Mail-Passwort eintragen (`chmod 640`). Auf dem Server muss PHP laufen (`php -v`) und Apache `AllowOverride All` sowie die Module rewrite, headers, expires, deflate haben.
2. Hochladen: `sh scripts/deploy-server.sh benutzer@217.154.84.217:/pfad/zum/web-ordner`
   Das Skript baut mit `npm run build:server` (ohne noindex, Formular über `anfrage.php`), sichert die alte Seite auf dem Server, zeigt einen Probelauf und lädt erst nach „ja“ hoch.
3. Danach prüfen: alle Seiten, Formular mit einer Testanfrage, alte Adressen (impressum.html usw.) leiten um.

Die Netlify-Vorschau baut mit `npm run build` (Formular über Netlify Forms, noindex aus `netlify.toml`).
