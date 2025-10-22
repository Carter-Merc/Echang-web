import React, { useState, useEffect } from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'

interface HeroSlide {
  eyebrow: string
  mainText: string
  buttonText: string
}

export const ValuesHero: React.FC = () => {
  const { isMd } = useBreakpoint()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides: HeroSlide[] = [
    {
      eyebrow: "Our Values",
      mainText: "Honesty.",
      buttonText: "Learn More"
    },
    {
      eyebrow: "Our Values", 
      mainText: "Integrity.",
      buttonText: "Learn More"
    },
    {
      eyebrow: "Our Values",
      mainText: "Diligence",
      buttonText: "Learn More"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  const section: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    minHeight: isMd ? '70vh' : '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    backgroundImage: "url('/Echang 3.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden'
  }

  const overlay: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    background: 'rgba(30, 27, 84, 0.7)', // Deep Navy Blue overlay
  }

  const container: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    maxWidth: 1200,
    padding: '0 16px',
    textAlign: 'center',
    zIndex: 2
  }

  const slideContainer: React.CSSProperties = {
    position: 'relative',
    minHeight: isMd ? 200 : 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const slideContent: React.CSSProperties = {
    position: 'absolute',
    width: '100%',
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'all 0.8s ease-in-out'
  }

  const activeSlide: React.CSSProperties = {
    opacity: 1,
    transform: 'translateY(0)'
  }

  const eyebrow: React.CSSProperties = {
    fontSize: isMd ? 18 : 16,
    fontWeight: 600,
    color: '#FFFFFF', // White color
    margin: '0 0 12px',
    letterSpacing: 2,
    textTransform: 'uppercase' as const
  }

  const mainHeading: React.CSSProperties = {
    fontSize: isMd ? 64 : 42,
    fontWeight: 800,
    color: '#FFFFFF',
    margin: '0 0 24px',
    lineHeight: 1.1
  }

  const ctaButton: React.CSSProperties = {
    background: '#00703C', // Green background
    color: '#FFFFFF',
    border: '1px solid transparent',
    borderRadius: 8,
    padding: isMd ? '16px 32px' : '14px 28px',
    fontSize: isMd ? 16 : 14,
    fontWeight: 700,
    letterSpacing: 0.5,
    textTransform: 'uppercase' as const,
    cursor: 'pointer',
    boxShadow: '0 6px 16px rgba(0,0,0,0.25)',
    transition: 'all 0.3s ease'
  }

  const pagination: React.CSSProperties = {
    position: 'absolute',
    bottom: 30,
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: 12,
    zIndex: 3
  }

  const dot: React.CSSProperties = {
    width: 12,
    height: 12,
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.4)',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  }

  const activeDot: React.CSSProperties = {
    background: '#FFFFFF'
  }

  const arrow: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255, 255, 255, 0.2)',
    border: 'none',
    borderRadius: '50%',
    width: 48,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#FFFFFF',
    fontSize: 20,
    zIndex: 3,
    transition: 'all 0.3s ease'
  }

  const leftArrow: React.CSSProperties = {
    ...arrow,
    left: 20
  }

  const rightArrow: React.CSSProperties = {
    ...arrow,
    right: 20
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section style={section}>
      <div style={overlay} />
      
      {/* Navigation Arrows */}
      <button
        style={leftArrow}
        onClick={goToPrevious}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
        }}
      >
        ‹
      </button>
      
      <button
        style={rightArrow}
        onClick={goToNext}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
        }}
      >
        ›
      </button>

      <div style={container}>
        <div style={slideContainer}>
          {slides.map((slide, index) => (
            <div
              key={index}
              style={{
                ...slideContent,
                ...(index === currentSlide ? activeSlide : {})
              }}
            >
              <div style={eyebrow}>{slide.eyebrow}</div>
              <h1 style={mainHeading}>{slide.mainText}</h1>
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
                {slide.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div style={pagination}>
        {slides.map((_, index) => (
          <button
            key={index}
            style={{
              ...dot,
              ...(index === currentSlide ? activeDot : {})
            }}
            onClick={() => goToSlide(index)}
            onMouseEnter={(e) => {
              if (index !== currentSlide) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.6)'
              }
            }}
            onMouseLeave={(e) => {
              if (index !== currentSlide) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.4)'
              }
            }}
          />
        ))}
      </div>
    </section>
  )
}
