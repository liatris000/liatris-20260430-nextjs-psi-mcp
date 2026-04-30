import Image from 'next/image'

// Before: <img src="/hero.jpg" alt="hero" style={{ width: '100%' }} />
// After: next/image with priority + sizes for LCP optimization

export function HeroSection() {
  return (
    <section>
      <Image
        src="/hero.jpg"
        alt="hero"
        width={1200}
        height={600}
        priority
        sizes="(max-width: 768px) 100vw, 1200px"
      />
    </section>
  )
}
