<?php
/**
 * Vorlage für die Zugangsdaten des Kontaktformulars.
 * 1. Kopieren nach anfrage-config.php
 * 2. EINE EBENE ÜBER dem Web-Ordner ablegen (Beispiel: Web-Ordner /var/www/andrea/html → Datei /var/www/andrea/anfrage-config.php),
 *    damit sie nie über den Browser abrufbar ist.
 * 3. Rechte einschränken: chmod 640, Besitzer = Webserver-Gruppe.
 * Bei t-online braucht man für SMTP das separate „E-Mail-Passwort“ (im Kundencenter unter E-Mail-Einstellungen anlegen),
 * nicht das normale Login-Passwort.
 */
return [
    'host'       => 'securesmtp.t-online.de',
    'port'       => 465,                                  // 465 = SSL, 587 = STARTTLS
    'benutzer'   => 'andreaherold67-md@t-online.de',
    'passwort'   => 'HIER-DAS-E-MAIL-PASSWORT-EINTRAGEN',
    'absender'   => 'andreaherold67-md@t-online.de',      // muss zum Konto passen
    'empfaenger' => 'andreaherold67-md@t-online.de',      // wohin die Anfragen gehen
];
