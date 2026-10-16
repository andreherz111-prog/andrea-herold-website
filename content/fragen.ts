import preise from './preise.json'

// Häufige Fragen. `start: true` = erscheint auch auf der Startseite.
export const fragen: { frage: string; antwort: string; start?: boolean }[] = [
  {
    frage: 'Bin ich in Hypnose bewusstlos?',
    antwort: 'Nein. Sie sind tief entspannt, aber wach, hören alles und können jederzeit selbst die Augen öffnen und aufhören. Mit Bühnenhypnose hat das nichts zu tun.',
    start: true,
  },
  {
    frage: 'Kann ich in Hypnose zu etwas gebracht werden, das ich nicht will?',
    antwort: 'Nein. Sie behalten die Kontrolle. Mit Bühnenhypnose oder Shows hat Hypnose-Coaching nichts zu tun.',
  },
  {
    frage: 'Kann jeder in Hypnose gehen?',
    antwort: 'Fast jeder Mensch kann sich so tief entspannen. Wichtig ist, dass Sie es selbst möchten. Es gibt dabei kein Richtig oder Falsch.',
  },
  {
    frage: 'Wie viele Sitzungen brauche ich?',
    antwort: 'Das hängt vom Thema ab. Wir besprechen es im Erstgespräch, und Sie entscheiden nach jeder Sitzung selbst, ob Sie weitermachen.',
    start: true,
  },
  {
    frage: 'Was kostet das Coaching?',
    antwort: `Das Erstgespräch ist ${preise.erstgespraech.preis}. Eine Coaching-Sitzung kostet ${preise.sitzung.preis} ${preise.sitzung.einheit}. Ratenzahlung ist auf Anfrage möglich.`,
  },
  {
    frage: 'Zahlt die Krankenkasse?',
    antwort: 'Coaching ist eine Selbstzahlerleistung. Die Kosten tragen Sie selbst.',
    start: true,
  },
  {
    frage: 'Ersetzt Coaching eine Therapie?',
    antwort: 'Nein. Coaching und Hypnose-Coaching ersetzen keine ärztliche oder psychotherapeutische Behandlung. Wenn Sie in Behandlung sind, sprechen Sie das Coaching bitte mit Ihrer Ärztin oder Ihrem Therapeuten ab.',
    start: true,
  },
  {
    frage: 'Wann ist Hypnose-Coaching nicht das Richtige?',
    antwort: 'Wenn Sie in einer akuten Krise sind oder in psychiatrischer Behandlung, ist Coaching nicht der richtige erste Schritt. Bitte wenden Sie sich dann an eine Ärztin oder einen Arzt. Wenn ich im Erstgespräch merke, dass Ihnen jemand anderes besser helfen kann, sage ich es Ihnen.',
  },
  {
    frage: 'Arbeiten Sie auch online?',
    antwort: 'Nein. Ich arbeite ausschließlich persönlich in meiner Praxis am Florapark in Magdeburg, weil mir die Atmosphäre im Raum wichtig ist.',
  },
]
