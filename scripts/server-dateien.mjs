// Nach `npm run build:server`: Dateien für Andreas eigenen Apache-Server ergänzen
// und reine Netlify-Dateien aus out/ entfernen.
import { copyFileSync, rmSync } from 'node:fs'

copyFileSync('server/.htaccess', 'out/.htaccess')
copyFileSync('server/anfrage.php', 'out/anfrage.php')
rmSync('out/__forms.html', { force: true })
rmSync('out/_redirects', { force: true })
console.log('Server-Dateien ergänzt: .htaccess, anfrage.php (Netlify-Dateien entfernt)')
