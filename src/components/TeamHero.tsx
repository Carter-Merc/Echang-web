import React, { useEffect, useState } from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'

interface TeamSlide {
  eyebrow: string
  mainText: string
  buttonText: string
}

export const TeamHero: React.FC = () => {
  const { isMd } = useBreakpoint()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides: TeamSlide[] = [
    { eyebrow: 'Team Member', mainText: 'Umar Sani.', buttonText: 'Read More' },
    { eyebrow: 'Team Member', mainText: 'Monday Udo.', buttonText: 'Read More' },
    { eyebrow: 'Team Member', mainText: 'Victor Aghedo', buttonText: 'Read More' },
  ]

  useEffect(() => {
    const id = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), 5000)
    return () => clearInterval(id)
  }, [slides.length])

  const section: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    minHeight: isMd ? '66vh' : '56vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    backgroundImage: "url('/Echang 7.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
  }

  const overlay: React.CSSProperties = { position: 'absolute', inset: 0, background: 'rgba(30,27,84,0.65)' }

  const container: React.CSSProperties = { position: 'relative', width: '100%', maxWidth: 1200, padding: '0 16px', textAlign: 'center', zIndex: 2 }

  const slideContainer: React.CSSProperties = { position: 'relative', minHeight: isMd ? 200 : 150, display: 'flex', alignItems: 'center', justifyContent: 'center' }

  const slideContent: React.CSSProperties = { position: 'absolute', width: '100%', opacity: 0, transform: 'translateY(20px)', transition: 'all 0.8s ease-in-out' }
  const activeSlide: React.CSSProperties = { opacity: 1, transform: 'translateY(0)' }

  const eyebrowStyle: React.CSSProperties = { fontSize: isMd ? 18 : 16, fontWeight: 600, color: '#FFFFFF', margin: '0 0 12px', letterSpacing: 2, textTransform: 'uppercase' as const }
  const mainHeading: React.CSSProperties = { fontSize: isMd ? 56 : 38, fontWeight: 800, color: '#FFFFFF', margin: '0 0 18px', lineHeight: 1.1 }
  const ctaButton: React.CSSProperties = { background: '#00703C', color: '#FFFFFF', border: '1px solid transparent', borderRadius: 8, padding: isMd ? '16px 32px' : '14px 28px', fontSize: isMd ? 16 : 14, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase' as const, cursor: 'pointer', boxShadow: '0 6px 16px rgba(0,0,0,0.25)', transition: 'all 0.3s ease' }

  const pagination: React.CSSProperties = { position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 12, zIndex: 3 }
  const dot: React.CSSProperties = { width: 12, height: 12, borderRadius: '50%', background: 'rgba(255,255,255,0.4)', cursor: 'pointer', transition: 'all 0.3s ease' }
  const activeDot: React.CSSProperties = { background: '#FFFFFF' }

  const goTo = (i: number) => setCurrentSlide(i)

  return (
    <section style={section}>
      <div style={overlay} />
      <div style={container}>
        <div style={slideContainer}>
          {slides.map((s, i) => (
            <div key={i} style={{ ...slideContent, ...(i === currentSlide ? activeSlide : {}) }}>
              <div style={eyebrowStyle}>{s.eyebrow}</div>
              <h1 style={mainHeading}>{s.mainText}</h1>
              <button
                style={ctaButton}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#00894E'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#00703C'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {s.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div style={pagination}>
        {slides.map((_, i) => (
          <button key={i} style={{ ...dot, ...(i === currentSlide ? activeDot : {}) }} onClick={() => goTo(i)} />
        ))}
      </div>
    </section>
  )
}

