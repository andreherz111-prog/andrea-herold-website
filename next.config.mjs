/** @type {import('next').NextConfig} */
const nextConfig = {
  // Statische Seite: schnell, günstig zu hosten (Netlify), keine Server-Wartung
  output: 'export',
  trailingSlash: true,
  // Bilder liegen bereits optimiert als WebP in public/img
  images: { unoptimized: true },
  reactStrictMode: true,
}

export default nextConfig
