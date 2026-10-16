/**
 * Bild im Rahmen, das beim Scrollen leicht mitgleitet (Parallax).
 * Nur CSS (scroll-driven animations), siehe .px in globals.css.
 * Ohne Browser-Unterstützung oder bei „Bewegung reduzieren“ bleibt das Bild ruhig.
 * Zu jedem Foto gibt es eine kleinere Fassung „-sm.webp“ fürs Handy.
 */
export default function Px({
  src,
  alt = '',
  width,
  height,
  className = '',
  position,
  priority = false,
  sizes = '(max-width: 980px) 100vw, 50vw',
}: {
  src: string
  alt?: string
  width: number
  height: number
  className?: string
  position?: string
  priority?: boolean
  sizes?: string
}) {
  const smW = width < 1000 ? 520 : 800
  const srcSet = `${src.replace(/\.webp$/, '-sm.webp')} ${smW}w, ${src} ${width}w`
  return (
    <div className={`px ${className}`}>
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? undefined : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding={priority ? undefined : 'async'}
        style={position ? { objectPosition: position } : undefined}
      />
    </div>
  )
}
