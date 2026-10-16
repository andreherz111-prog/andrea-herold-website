#!/bin/sh
# Lädt die Seite auf Andreas eigenen Server hoch.
# Aufruf:  sh scripts/deploy-server.sh benutzer@217.154.84.217:/pfad/zum/web-ordner
# Vorher: Zugangsdaten für das Formular als anfrage-config.php EINE EBENE ÜBER dem Web-Ordner ablegen
# (Vorlage: server/anfrage-config.example.php).
set -e

ZIEL="$1"
if [ -z "$ZIEL" ]; then
  echo "Bitte Ziel angeben, z. B.: sh scripts/deploy-server.sh benutzer@217.154.84.217:/var/www/andrea/html"
  exit 1
fi
HOST="${ZIEL%%:*}"
PFAD="${ZIEL#*:}"

echo "1/4 Seite für den Server bauen (ohne noindex, Formular über anfrage.php) ..."
npm run build:server

echo "2/4 Sicherung der bisherigen Seite auf dem Server anlegen ..."
ssh "$HOST" "tar czf ~/sicherung-website-\$(date +%Y%m%d-%H%M).tgz -C '$PFAD' ."

echo "3/4 Was sich ändern würde (Probelauf):"
rsync -anv --delete --exclude '.well-known' --exclude 'anfrage-config.php' out/ "$ZIEL/" | tail -n 25
printf "Jetzt wirklich hochladen? (ja/nein) "
read ANTWORT
[ "$ANTWORT" = "ja" ] || { echo "Abgebrochen, nichts geändert."; exit 0; }

echo "4/4 Hochladen ..."
rsync -avz --delete --exclude '.well-known' --exclude 'anfrage-config.php' out/ "$ZIEL/"
echo "Fertig. Bitte https://andreaherold-coaching.de prüfen."
