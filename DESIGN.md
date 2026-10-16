---
name: Andrea Herold – Coaching und Beratung
description: Ruhige, helle Praxis-Seite wie ein Feldweg im Morgennebel – Naturbilder, weiße Papierkarte, Haarlinien, Gold nur als Linie.
colors:
  taupe: "#7a6a57"
  taupe-deep: "#5f5243"
  sage: "#7b876c"
  gold: "#b48a3c"
  gold-light: "#e9dcc0"
  ground: "#f8f7f5"
  paper: "#ffffff"
  ink: "#2e322b"
  ink-soft: "#585c52"
  line: "#d9d5ca"
  error: "#9a3b2e"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(42px, 4.8vw, 68px)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.015em"
    fontFeature: "lnum"
  display-card:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(40px, 4vw, 60px)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.015em"
    fontFeature: "lnum"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(36px, 3.5vw, 52px)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  headline-prose:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(32px, 3vw, 44px)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "25px"
    fontWeight: 500
    lineHeight: 1.25
  price:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "40px"
    fontWeight: 500
    lineHeight: 1.05
    fontFeature: "lnum"
  wordmark:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.16em"
  body:
    fontFamily: "Mulish, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  body-small:
    fontFamily: "Mulish, system-ui, sans-serif"
    fontSize: "15.5px"
    fontWeight: 400
    lineHeight: 1.65
  button:
    fontFamily: "Mulish, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.02em"
  nav-label:
    fontFamily: "Mulish, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    letterSpacing: "0.12em"
  field-label:
    fontFamily: "Mulish, system-ui, sans-serif"
    fontSize: "12.5px"
    fontWeight: 400
    letterSpacing: "0.14em"
rounded:
  none: "0px"
  ring: "50%"
spacing:
  gutter: "clamp(16px, 4vw, 56px)"
  section: "clamp(80px, 9vw, 128px)"
  column-gap: "clamp(32px, 6vw, 96px)"
  container: "1180px"
  nav-height: "86px"
  nav-height-mobile: "70px"
components:
  button-primary:
    backgroundColor: "{colors.taupe}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "15px 26px"
  button-primary-hover:
    backgroundColor: "{colors.taupe-deep}"
    textColor: "{colors.paper}"
  button-outline:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  hero-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(34px, 3.6vw, 52px) clamp(24px, 4vw, 60px)"
    width: "700px"
  door:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "16px 18px"
  input:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 14px"
    height: "48px"
  mobile-call-bar:
    backgroundColor: "{colors.paper}"
    height: "48px"
---

# Design System: Andrea Herold – Coaching und Beratung

> Stand 16.10.2026, nach dem Bau in Next.js aus dem fertigen Code (`app/globals.css`, `components/`) aktualisiert. Richtung **„Feldweg“** (gewählt vom User), angelehnt an den Look von shonaghwrightphillips.co.uk. Frühe Referenz-Umsetzung: `../Referenzen/design/feldweg.html`; maßgeblich ist jetzt der gebaute Code.

## Richtungsvertrag
- **THESIS:** Eine ruhige, helle Praxis-Seite wie ein Feldweg im Morgennebel. Sie verzichtet auf das Kachel-Raster und den Gold-Verlauf der alten Seite und baut stattdessen auf versetzte Naturbilder und eine weiße Papierkarte.
- **OWN-WORLD:** Off-White `#f8f7f5`, weißes Papier, Tinte `#2e322b`, Taupe-Knöpfe `#7a6a57`, Gold `#b48a3c` nur als Linie, Ring oder Pfeil. Cormorant Garamond 500 für Überschriften, Mulish für Text. Haarlinien statt Kästen, echte Fotos mit leichtem Parallax.
- **STORY:** Die Besucherin erkennt sofort Ort (Magdeburg) und Angebot, wählt ihre Tür (für mich / für mein Kind), liest konkret, wie gearbeitet wird und was es kostet, und ruft an oder schreibt.
- **FIRST VIEWPORT:** Desktop: links niedrigeres Schilfbild mit freier Fläche oben, rechts hohes Nebelbild, mittig weiße Karte mit Goldlinie, Leitsatz „Blockaden lösen. Potenziale entfalten.“, ein Satz Angebot, zwei Türen, Telefonnummer. Mobil: Bild oben (30 % Höhe), Karte überlappt, beide Türen über der Anruf-Leiste sichtbar.
- **FORM:** Kein Seed. Die Richtung hat der User festgelegt: shonaghwrightphillips.co.uk, „hier gefällt mir der ganze Look sehr gut“ (16.10.2026), danach Wahl von Entwurf I „Feldweg“.

So ist es gelandet: Der Bau hält den Vertrag ein. Einzige Abweichung von der OWN-WORLD-Zeile: Mulish wird nur in 400, 500 und 600 geladen (nicht 300).

## Overview

**Creative North Star: „Der Feldweg im Morgennebel“**

Still, hell und natürlich. Zwei versetzte Naturbilder, darüber eine weiße Papierkarte mit Andreas Leitsatz und zwei „Türen“: **Für mich** und **Für mein Kind**. Danach folgt eine ruhige Reihe von Abschnitten mit viel Luft, dünnen Linien und einem einzigen warmen Akzent: dem Gold aus Andreas Logo.

Die Seite arbeitet mit Fläche statt mit Kästen. Abschnitte wechseln zwischen Off-White-Grund und weißem Papier; Inhalte werden durch 1px-Haarlinien gegliedert, nicht durch Kacheln oder Karten mit Schatten. Fotos tragen die Stimmung und gleiten beim Scrollen leicht in ihrem Rahmen. Text, Knöpfe und Formulare stehen still. Die Dichte ist niedrig, die Sprache konkret, die Form eckig und leise.

**Key Characteristics:**
- Zwei Flächen (Off-White-Grund, weißes Papier) im Wechsel statt Kachel-Raster.
- Gold ausschließlich als Linie, Ring, Pfeil, Winkel oder Unterstreichung.
- Cormorant Garamond 500 für alles, was gelesen werden *soll*; Mulish für alles, was erklärt.
- Keine Rundungen außer dem Ring um Schrittnummern.
- Echte Naturfotos mit CSS-Parallax; sonst kaum Bewegung.

## Colors

Eine helle, neblige Palette aus Off-White, Papier und grünlicher Tinte, mit Taupe für Handlungen und Gold nur als Zeichenstrich.

### Primary
- **Feldweg-Taupe** (#7a6a57): Hauptknöpfe („Erstgespräch anfragen“), gefüllter Anruf-Knopf der mobilen Leiste, Fokusring, Häkchen der Einwilligung. Weiß darauf 5,2:1.
- **Tiefes Taupe** (#5f5243): Hover-Zustand der Hauptknöpfe (Weiß darauf 7,6:1).

### Secondary
- **Salbei** (#7b876c): Rahmen der Erfolgsmeldung nach dem Absenden. Nebenakzent, sonst nirgends.

### Tertiary
- **Logo-Gold** (#b48a3c): Haarlinie über der Hero-Karte und über Unterseiten-Überschriften, Ringe um Schrittnummern, Unterstreichungen von Menü und Links, Pfeile in Türen und Themenzeilen, FAQ-Winkel, Listenpunkte im Fließtext, gestrichelte Platzhalter-Markierung. 3,2:1 auf Papier, 2,95:1 auf Grund: reicht für Linien und Formen, nicht für Text.
- **Helles Gold** (#e9dcc0): nur Textmarkierung (`::selection`).

### Neutral
- **Morgennebel-Grund** (#f8f7f5): Seitenhintergrund, Formularfelder, Notizfelder in Papier-Abschnitten. Gemessen am Vorbild (Prüfung 16.10.2026; vorher zu warm `#f3f1eb`).
- **Papier** (#ffffff): Hero-Karte, wechselnde Abschnitte, Kontaktbereich, mobile Leiste, mobiles Menü.
- **Tinte** (#2e322b): Überschriften, Text, Rahmen-Knopf (12,2:1 auf Grund).
- **Weiche Tinte** (#585c52): Fließtext, Erklärzeilen, Feldbezeichnungen, Fußzeile (6,4:1 auf Grund).
- **Linie** (#d9d5ca): alle Trennlinien und ruhenden Rahmen (Türen, Listen, Preise, FAQ, Navigation).
- **Fehler** (#9a3b2e): Formularfehler, Rahmen ungültiger Felder (6,9:1 auf Papier).

### Named Rules
**The Gold-ist-Strich Rule.** Gold erscheint nur als Linie, Ring, Pfeil, Winkel oder Unterstreichung, nie als Textfarbe und nie als Fläche.

**The Zwei-Flächen Rule.** Abschnitte wechseln zwischen Grund und Papier; ein Element auf Papier bekommt Grund als Hintergrund und umgekehrt (Notiz, Faktenbox). Weitere Flächenfarben gibt es nicht.

## Typography

**Display Font:** Cormorant Garamond 500 (mit Georgia, serif)
**Body Font:** Mulish 400/500/600 (mit system-ui, sans-serif)

**Character:** Wie beim Vorbild shonaghwrightphillips.co.uk (Wunsch des Users, 16.10.2026): eine weiche, klassische Antiqua für Überschriften neben einer runden, leichten Grotesk für Text. Cormorant Garamond ist dieselbe Schrift wie beim Vorbild (SIL Open Font License). Mulish ersetzt **Sofia Pro**, die das Vorbild nutzt: Sofia Pro ist eine kostenpflichtige Adobe-Fonts-Schrift, die man nicht selbst hosten darf und die beim Laden Daten an Adobe schicken würde (Cookie-Banner nötig). Mulish ist frei und optisch sehr ähnlich (geometrisch, rund, leicht). Alle Schriften liegen lokal als `woff2` in `app/fonts/` (über `next/font/local`), keine Verbindung zu Google Fonts oder Adobe.

### Hierarchy
- **Display** (500, clamp(42px, 4.8vw, 68px), 1,02): Seitentitel der Unterseiten.
- **Display Karte** (500, clamp(40px, 4vw, 60px), 1,04): Leitsatz in der Hero-Karte.
- **Headline** (500, clamp(36px, 3.5vw, 52px), 1,08): Abschnittsüberschriften, Kontakt.
- **Headline Text** (500, clamp(32px, 3vw, 44px), 1,1): Zwischenüberschriften in Textseiten.
- **Title** (500, 24–28px, 1,15–1,25): Türen, Listentitel, Schritt-Titel, FAQ-Fragen, Notiz-Titel, Einträge im mobilen Menü.
- **Preis** (500, 40px, 1,05; mobil 30px; Tabellen 26px): Preise, immer Versalziffern.
- **Wortmarke** (500, 24px, 0,16em gesperrt, Versalien; mobil 18px/0,08em): „ANDREA HEROLD“ in der Navigation.
- **Body** (400, 17px, 1,65): Fließtext, max. 44–62ch je nach Ort, Textseiten 68ch; Intro-Text 18px.
- **Body klein** (400, 14–15,5px): Anrufzeile, Preiserklärung, Fußzeile, Formularhinweise.
- **Knopf** (600, 15px, 0,02em): Hauptknöpfe; Rahmen-Knopf und mobile Leiste 500.
- **Menü** (400, 13px, 0,12em, Versalien): Hauptmenü Desktop.
- **Feldbezeichnung** (400, 12,5px, 0,14em, Versalien): Begriffe in Fakten- und Kontaktlisten.

### Named Rules
**The Leise-Versalien Rule.** Versalien mit Sperrung nur für Menü (13px), kleine Feldbezeichnungen (12,5px) und die Wortmarke. Nie für Knöpfe, Überschriften oder längere Texte.

**The Versalziffern Rule.** Überschriften und Preise in Cormorant Garamond setzen Ziffern als Versalziffern (`lining-nums`), Überschriften leicht negativ gesperrt (−0,015em) und ausbalanciert umbrochen.

## Layout

Zentrierter Inhalt bis 1180px, seitlicher Rand fließend clamp(16px, 4vw, 56px). Abschnitte haben oben und unten clamp(80px, 9vw, 128px) Luft; ein Abschnitt kann oben auf 0 gehen, wenn er an den vorigen anschließt.

- **Hero (Startseite):** 12-Spalten-Raster, Höhe min(800px, Bildschirmhöhe minus Navigation), mindestens 640px. Links schmaleres Bild (Spalten 1–5, 84 % Höhe, unten bündig, oben bleibt bewusst Fläche frei), rechts hohes Bild (Spalten 6–12), Karte mittig über Spalten 3–10, max. 700px.
- **Zweispalter:** Bild und Text je zur Hälfte (Über mich 5:6, Kontakt 5:7, Unterseiten-Intro 6:5), Spaltenabstand clamp(32px, 6vw, 96px). Bilder im Hochformat 4:5; ein Bild kann versetzt tiefer starten (clamp(48px, 9vw, 140px)), damit die Bilder wie im Hero gegeneinander stehen.
- **Ablauf:** drei (oder vier) Spalten, zentriert.
- **Textseiten:** eine Spalte, 68ch.
- **Navigation:** klebend, 86px hoch (mobil 70px), Anker springen mit Abstand zur Navigation.

**Mobil (bis 980px):** alles einspaltig. Im Hero entfällt das linke Bild, das rechte wird 30 % der Bildschirmhöhe (mind. 200px) und die Karte überlappt es um 56px. Bilder werden 4:3, Bilder stehen vor dem Text. Preise werden zu Zeilen „Bezeichnung … Preis“. Unten liegt eine feste Leiste mit zwei Knöpfen; der Seiteninhalt bekommt 76px Abstand nach unten.

## Elevation & Depth

Die Seite ist flach. Tiefe entsteht durch den Wechsel Grund/Papier, durch Haarlinien und durch die Fotos, die beim Scrollen leicht gleiten. Schatten gibt es genau an zwei schwebenden Flächen, beide weich, tief versetzt und stark nach innen gezogen, sodass nur ein Hauch unter der Kante liegt.

### Shadow Vocabulary
- **Kartenschatten** (`box-shadow: 0 24px 60px -34px rgba(40, 44, 36, .5)`): nur die Hero-Karte über den Bildern.
- **Menüschatten** (`box-shadow: 0 24px 40px -28px rgba(40, 44, 36, .5)`): nur das aufgeklappte mobile Menü.
- Die Navigation ist leicht durchscheinend (Grund zu 95 %, 8px Weichzeichner) mit Haarlinie unten.

### Named Rules
**The Zwei-Schatten Rule.** Nur Dinge, die über etwas anderem schweben (Hero-Karte, mobiles Menü), bekommen Schatten. Alles andere liegt flach und wird durch Linien oder Flächenwechsel abgegrenzt.

## Shapes

Durchgehend eckig: Knöpfe, Karten, Türen, Felder und Notizen haben keine Rundung (0px). Einzige runde Form ist der goldene Ring (48px, 1px) um Schrittnummern. Rahmen sind immer 1px. Gold zeichnet kleine Formen: eine 44px lange Haarlinie als Auftakt (über der Hero-Karte zentriert, über Unterseiten-Titeln linksbündig), der FAQ-Winkel aus zwei Linien, der Pfeil mit 1,5px Strich. Platzhalter sind gestrichelt gold umrandet oder unterstrichen.

## Components

### Buttons
Ruhig und eindeutig, nie verspielt.
- **Shape:** eckig (0px).
- **Primary:** Taupe mit weißer Schrift, Mulish 600 15px, Innenabstand 15px 26px. Hover: tiefes Taupe (Übergang 0,25s). Deaktiviert: 60 % Deckkraft.
- **Rahmen-Knopf („Erstgespräch“ in der Navigation):** 1px Tinte-Rahmen, transparent, 12px 20px, Mulish 500 15px. Hover: Fläche Tinte, Schrift Papier.
- **Textlink „mehr“:** Mulish 500, Gold-Unterstreichung 1px (6px Abstand); Hover 2px.
- **Fokus:** überall 2px Taupe-Kontur mit 3px Abstand.

### Türen
Die zwei Wege in der Hero-Karte. 1px Linie-Rahmen, 16px 18px Innenabstand, Titel in Cormorant Garamond 25px, Unterzeile Mulish 14,5px weich, goldener Pfeil rechts. Hover: Rahmen wird Gold, Fläche leicht getönt, Pfeil rückt 3px nach rechts (0,3s, weiches Ausrollen). Mobil untereinander, 12px 14px, Titel 22px.

### Cards / Containers
- **Hero-Karte:** Papier, eckig, Kartenschatten, zentrierter Inhalt, goldene Auftaktlinie oben, max. 700px.
- **Notiz und Faktenbox:** 1px Linie-Rahmen, Fläche gegenläufig zum Abschnitt (Zwei-Flächen-Regel), 18–24px Innenabstand. Faktenbox als zweispaltige Liste mit Feldbezeichnung links.
- **Hinweis-Entwurf:** gestrichelter Gold-Rahmen für Inhalte, die Andrea noch bestätigen muss.

### Listen und Themenzeilen
Keine Kacheln. Oben eine Linie, zwischen den Einträgen Linien, jeder Eintrag: Titel in Cormorant Garamond 25px plus eine Zeile Erklärung in Mulish 16px weich. Verlinkte Zeilen tragen rechts den goldenen Pfeil; Hover unterstreicht den Titel gold und schiebt den Pfeil 3px.

### Ablauf
Drei (oder vier) Schritte nebeneinander, zentriert: Ziffer in Tinte (Cormorant Garamond 23px) in einem goldenen 48px-Ring, darunter Titel 28px und Text bis 34ch.

### Preise
Desktop: drei Felder zwischen zwei Linien, durch senkrechte Linien getrennt, Preis 40px Versalziffern, Erklärung 15,5px weich. Mobil: Zeilen „Bezeichnung … Preis“ mit Preis rechts (30px). Preistabellen auf Unterseiten: Zeilen mit Linie, Preis 26px.

### FAQ
Aufklappbare Fragen zwischen Linien, Frage in Cormorant Garamond 26px, goldener Winkel rechts, der sich beim Öffnen dreht (0,3s). Antwort weich, bis 62ch.

### Inputs / Fields
- **Style:** Grund-Fläche, 1px Rahmen, eckig, 12px 14px, mindestens 48px hoch, Schrift 16px (kein Zoom auf iOS). Bezeichnung darüber Mulish 500 14,5px, optionale Felder mit weichem Zusatz.
- **Focus:** 2px Taupe-Kontur ohne Abstand, Rahmen Taupe.
- **Error:** Rahmen in Fehlerrot, Meldung 14px Fehlerrot unter dem Feld, verständlich formuliert. Erfolg: Salbei-Rahmen auf hellem Salbei; Fehler beim Senden: Fehler-Rahmen auf hellem Rot.
- **Einwilligung:** Kästchen 22px, Häkchen Taupe, Text 15px weich.

### Navigation
- **Desktop:** Logo-Emblem (76px) + Wortmarke mit Unterzeile „COACHING & BERATUNG“ (11,5px, 0,26em, weich), fünf Menüpunkte in Versalien 13px, Rahmen-Knopf „Erstgespräch“. Aktiver Punkt und Hover: goldene Unterstreichung 1px mit 7px Abstand.
- **Mobil:** Emblem 60px, „Menü“-Klappliste (natives Aufklappen) mit Strich-Symbol, Liste auf Papier mit Menüschatten, Einträge in Cormorant Garamond 25px zwischen Linien, aktiver Eintrag Taupe. Sechs Einträge (zusätzlich „Häufige Fragen“).

### Mobile Anruf-Leiste
Fest am unteren Rand, Papier mit Linie oben, zwei gleich breite Knöpfe (48px hoch, eckig): „Anrufen“ gefüllt Taupe, „Nachricht schreiben“ mit Tinte-Rahmen. Berücksichtigt den unteren Sicherheitsbereich des Telefons.

### Parallax-Bildrahmen
Bilder gleiten beim Scrollen leicht in ihrem Rahmen (Baustein `components/Px.tsx`, Klasse `.px`; seit 16.10.2026, Wunsch des Users).
- Startbereich: linkes Bild bis 14 %, rechtes bis 8 % (unterschiedliche Tiefe, Bilder auf 130 % vergrößert), gekoppelt an das Scrollen der Seite über die ersten 100vh.
- Abschnittsbilder: ±9 %, auf 120 % vergrößert, gekoppelt an die Sichtbarkeit des Bildes.
- Auf Wunsch des Users etwas verstärkt; geprüft: an keiner Scrollposition entstehen Lücken am Bildrand.
- Bild im Rahmen absolut positioniert (`position:absolute; inset:0`), weil `height:100%` bei Rahmen mit `aspect-ratio` nicht greift.
- Umsetzung über CSS „scroll-driven animations“ (`animation-timeline`), kein JavaScript. Rahmen mit `overflow: clip` (nicht `hidden`, sonst bezieht sich die Animation auf den Rahmen statt auf die Seite; `hidden` steht nur als Rückfall davor).
- Bei „Bewegung reduzieren“ und in Browsern ohne Unterstützung bleiben die Bilder ruhig (leicht vergrößert, 112 %).
- Jedes Foto hat eine kleinere Fassung `-sm.webp` fürs Handy.

## Do's and Don'ts

### Do:
- **Do** Abschnitte zwischen Grund (#f8f7f5) und Papier (#ffffff) wechseln lassen und Inhalte mit 1px-Linien (#d9d5ca) gliedern.
- **Do** Gold (#b48a3c) nur als Linie, Ring, Pfeil, Winkel oder Unterstreichung einsetzen.
- **Do** Überschriften, Titel und Preise in Cormorant Garamond 500 setzen, Text und Knöpfe in Mulish.
- **Do** jede Bewegung auf Bilder (Parallax), Pfeile (3px) und den FAQ-Winkel beschränken und bei „Bewegung reduzieren“ abschalten.
- **Do** Tap-Ziele mindestens 44px hoch halten und Formularfelder mit 16px Schrift setzen.
- **Do** Platzhalter für fehlende Angaben sichtbar markieren („wird ergänzt“, gestrichelt gold), bis Andrea die Daten liefert.

### Don't:
- **Don't** Gold als Textfarbe oder Fläche verwenden (2,95:1 auf Grund, zu wenig Kontrast).
- **Don't** Kachel-Raster, Karten mit Schatten oder Gold-Verläufe wie auf der alten Seite bauen.
- **Don't** Ecken runden; die einzige runde Form ist der Schritt-Ring.
- **Don't** Text, Knöpfe oder Formulare bewegen, einrasten lassen oder das Scrollen bremsen.
- **Don't** Versalien für Knöpfe, Überschriften oder längere Texte nutzen.
- **Don't** Schriften von Google Fonts oder Adobe nachladen; alles liegt lokal.
- **Don't** das Logo groß im Hero zeigen.

## Bildsprache
Ruhige, natürliche Fotos mit weichem Licht: Wiesen, Nebel, Gräser, Schilf, für Kinder warme Tageslicht-Motive (Hände, Stifte). Keine Symbolbilder von Gehirnen, Pendeln oder Händen auf Stirnen.
**Porträt:** neues professionelles Foto von Andrea (`Quelldateien/portrait-neu-2026-10.webp`, Seite: `img/portrait.webp` 849×1200).
**Naturbilder: Unsplash-Platzhalter** (siehe WEBSITE-STATUS.md). Ziel: eigene Fotos von Andrea und der Praxis am Florapark.

## Logo
**Neues Logo seit 16.10.2026** (vom User geliefert, zweite Fassung): goldene Hände, AH-Kreis, Zweige, Schriftzug „ANDREA HEROLD“ in Gold, 1536×1024, bereits mit transparentem Hintergrund (`Quelldateien/logo-neu-2026-10-v2.webp`).
- Navigation: nur das Zeichen ohne Schriftzug (`img/logo-emblem.webp`, 240×147, angezeigt 76px breit, mobil 60px), daneben die Wortmarke in Cormorant Garamond.
- Footer: ganzes Logo (`img/logo.webp`, 420×297, angezeigt 200px).
- Das Logo ist plastisch-glänzend. Deshalb nur in Navigation und Footer einsetzen, nicht groß im Hero, damit die ruhige Seite nicht überstrahlt wird.
- Für Favicon, Druck und sehr kleine Größen später eine flache Vektor-Version (SVG) anfertigen lassen.
- Altes Logo (flach, Creme-Grund) liegt weiter in `Quelldateien/logo.png`, wird nicht mehr verwendet.

## Prüfstand (16.10.2026)
- Impeccable-Kritik: 21/32 vor der Überarbeitung; alle 5 Hauptpunkte umgesetzt.
- Detektor danach: nur noch „Creme-Palette“ (bewusst, vom Vorbild vorgegeben) und „cramped-padding“ (Fehlalarme: der statische Scan rechnet `clamp()`-Abstände nicht aus, der Browser-Scan meldet sie nicht).
- Kontraste AA, kein seitliches Scrollen bei 390px, Tap-Ziele ≥ 44px (außer Inline-Link im Einwilligungstext).
- Abschließende Prüfung dieser Runde: alle wesentlichen Korrekturen umgesetzt. Die verbleibenden Platzhalter („wird ergänzt“) sind gewollt, bis Andrea die Daten liefert.

- Nachtrag 16.10.2026: Rahmen der Formularfelder als Token `--field: #8c877b` (3,6:1 auf Papier, 3,3:1 auf Grund); ungenutztes `--sage-l` entfernt.
