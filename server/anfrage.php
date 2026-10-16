<?php
/**
 * Kontaktformular von andreaherold-coaching.de
 * Nimmt die Anfrage entgegen und schickt sie per SMTP (t-online) an Andrea.
 * Zugangsdaten stehen NICHT hier, sondern in anfrage-config.php eine Ebene ÜBER dem Web-Ordner
 * (Vorlage: server/anfrage-config.example.php).
 */
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
header('X-Robots-Tag: noindex');

function antwort(int $code, array $daten): void {
    http_response_code($code);
    echo json_encode($daten, JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') antwort(405, ['ok' => false, 'fehler' => 'methode']);

// Nur Anfragen von der eigenen Seite
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && parse_url($origin, PHP_URL_HOST) !== ($_SERVER['HTTP_HOST'] ?? '')) antwort(403, ['ok' => false, 'fehler' => 'herkunft']);

$configDatei = dirname(__DIR__) . '/anfrage-config.php';
if (!is_file($configDatei)) antwort(500, ['ok' => false, 'fehler' => 'konfiguration']);
$cfg = require $configDatei;

// Spam-Falle: Dieses Feld füllen nur Bots aus
if (trim((string)($_POST['bot-field'] ?? '')) !== '') antwort(200, ['ok' => true]);

$feld = fn(string $n, int $max) => mb_substr(trim(str_replace(["\r", "\0"], '', (string)($_POST[$n] ?? ''))), 0, $max);
$name = $feld('name', 120);
$kontakt = $feld('kontakt', 160);
$anliegen = $feld('anliegen', 20);
$nachricht = $feld('nachricht', 5000);
$einwilligung = ($_POST['einwilligung'] ?? '') === 'ja';

$istMail = (bool)filter_var($kontakt, FILTER_VALIDATE_EMAIL);
$istTelefon = strlen(preg_replace('/\D/', '', $kontakt)) >= 6;
if (mb_strlen($name) < 2 || (!$istMail && !$istTelefon) || !$einwilligung) antwort(422, ['ok' => false, 'fehler' => 'eingabe']);

// Einfache Bremse: höchstens 5 Anfragen pro Stunde und Adresse
$sperre = sys_get_temp_dir() . '/anfrage-' . hash('sha256', ($_SERVER['REMOTE_ADDR'] ?? '') . date('YmdH'));
$anzahl = is_file($sperre) ? (int)file_get_contents($sperre) : 0;
if ($anzahl >= 5) antwort(429, ['ok' => false, 'fehler' => 'zu-viele']);
file_put_contents($sperre, (string)($anzahl + 1));

$themen = ['ich' => 'Coaching für mich', 'kind' => 'Test für mein Kind', 'anderes' => 'Etwas anderes'];
$thema = $themen[$anliegen] ?? 'Etwas anderes';
$einzeilig = fn(string $s) => preg_replace('/[\r\n]+/', ' ', $s);

$text = "Neue Anfrage über die Website\n\n"
    . "Name: " . $einzeilig($name) . "\n"
    . "Erreichbar unter: " . $einzeilig($kontakt) . "\n"
    . "Worum geht es: $thema\n"
    . "Einwilligung Datenschutz: ja (" . date('d.m.Y H:i') . ")\n\n"
    . "Nachricht:\n" . ($nachricht !== '' ? $nachricht : '(keine)') . "\n";

$betreff = '=?UTF-8?B?' . base64_encode('Neue Anfrage: ' . $thema . ' – ' . $einzeilig($name)) . '?=';
$kopf = [
    'Date: ' . date('r'),
    'From: =?UTF-8?B?' . base64_encode('Website Andrea Herold') . '?= <' . $cfg['absender'] . '>',
    'To: <' . $cfg['empfaenger'] . '>',
    'Subject: ' . $betreff,
    'Message-ID: <' . bin2hex(random_bytes(12)) . '@' . ($_SERVER['HTTP_HOST'] ?? 'localhost') . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
];
if ($istMail) $kopf[] = 'Reply-To: <' . $kontakt . '>';

try {
    smtp_senden($cfg, implode("\r\n", $kopf) . "\r\n\r\n" . str_replace("\n", "\r\n", $text));
    antwort(200, ['ok' => true]);
} catch (Throwable $e) {
    error_log('anfrage.php: ' . $e->getMessage());
    antwort(502, ['ok' => false, 'fehler' => 'versand']);
}

/** Schlanker SMTP-Versand mit Verschlüsselung (Port 465 = SSL, 587 = STARTTLS) und Anmeldung. */
function smtp_senden(array $cfg, string $mail): void {
    $ssl = (int)$cfg['port'] === 465;
    $s = stream_socket_client(($ssl ? 'ssl://' : 'tcp://') . $cfg['host'] . ':' . $cfg['port'], $errno, $errstr, 15);
    if (!$s) throw new RuntimeException("Verbindung: $errstr");
    stream_set_timeout($s, 15);
    $lesen = function () use ($s): string {
        $antwort = '';
        while (($zeile = fgets($s, 515)) !== false) { $antwort .= $zeile; if (isset($zeile[3]) && $zeile[3] === ' ') break; }
        return $antwort;
    };
    $befehl = function (string $cmd, array $ok) use ($s, $lesen): string {
        if ($cmd !== '') fwrite($s, $cmd . "\r\n");
        $a = $lesen();
        if (!in_array((int)substr($a, 0, 3), $ok, true)) throw new RuntimeException('SMTP: ' . trim($a));
        return $a;
    };
    $ich = $_SERVER['HTTP_HOST'] ?? 'localhost';
    $befehl('', [220]);
    $befehl("EHLO $ich", [250]);
    if (!$ssl) {
        $befehl('STARTTLS', [220]);
        if (!stream_socket_enable_crypto($s, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) throw new RuntimeException('STARTTLS fehlgeschlagen');
        $befehl("EHLO $ich", [250]);
    }
    $befehl('AUTH LOGIN', [334]);
    $befehl(base64_encode($cfg['benutzer']), [334]);
    $befehl(base64_encode($cfg['passwort']), [235]);
    $befehl('MAIL FROM:<' . $cfg['absender'] . '>', [250]);
    $befehl('RCPT TO:<' . $cfg['empfaenger'] . '>', [250, 251]);
    $befehl('DATA', [354]);
    $inhalt = preg_replace('/^\./m', '..', $mail); // Zeilen mit Punkt am Anfang schützen
    $befehl($inhalt . "\r\n.", [250]);
    $befehl('QUIT', [221]);
    fclose($s);
}
