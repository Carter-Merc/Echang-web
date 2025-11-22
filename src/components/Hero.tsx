import React, { useState, useEffect } from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'

interface HeroSlide {
  eyebrow: string
  mainText: string
  backgroundImage: string
  buttonText: string
}

export const Hero: React.FC = () => {
  const { isMd } = useBreakpoint()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const slides: HeroSlide[] = [
    {
      eyebrow: "LIFE CHANGING",
      mainText: "To Enhance Operations And Services",
      backgroundImage: "url('/Echang 1.jpg')",
      buttonText: "Learn More"
    },
    {
      eyebrow: "Our Values",
      mainText: "Honesty.",
      backgroundImage: "url('/Echang 9.jpg')",
      buttonText: "Learn More"
    },
    {
      eyebrow: "Our Values",
      mainText: "Integrity.",
      backgroundImage: "url('/Echang 3.jpg')",
      buttonText: "Learn More"
    },
    {
      eyebrow: "Our Values",
      mainText: "Diligence",
      backgroundImage: "url('/Echang 4.jpg')",
      buttonText: "Learn More"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setIsTransitioning(false)
      }, 1500) // Extended to 1.5 seconds for slower transition
    }, 5000) // Increased to 5 seconds on each slide

    return () => clearInterval(interval)
  }, [slides.length])

  const heroStyle: React.CSSProperties = {
    position: 'relative',
    minHeight: isMd ? '72vh' : '56vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    backgroundImage: `linear-gradient(rgba(30,27,84,0.45), rgba(30,27,84,0.45)), ${slides[currentSlide].backgroundImage}`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
    transition: 'opacity 2s ease-in-out',
    opacity: isTransitioning ? 0 : 1
  }

  const container: React.CSSProperties = {
    textAlign: 'center',
    padding: isMd ? '0' : '0 16px',
    position: 'relative',
    zIndex: 2,
    transition: 'opacity 2s ease-in-out',
    opacity: isTransitioning ? 0 : 1
  }

  const eyebrow: React.CSSProperties = {
    letterSpacing: 1.5,
    fontWeight: 800,
    color: 'var(--color-white)',
    fontSize: isMd ? 14 : 12,
    transition: 'all 2s ease-in-out'
  }

  const mainHeading: React.CSSProperties = {
    color: 'var(--color-white)',
    fontSize: isMd ? 40 : 28,
    marginTop: 8,
    transition: 'all 2s ease-in-out'
  }

  const buttonContainer: React.CSSProperties = {
    marginTop: 24,
    transition: 'all 2s ease-in-out'
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
    transition: 'all 0.3s ease',
    border: 'none'
  }

  const activeDot: React.CSSProperties = {
    background: '#FFFFFF'
  }

  const goToSlide = (index: number) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide(index)
      setIsTransitioning(false)
    }, 1500) // Extended to 1.5 seconds for slower transition
  }

  return (
    <section style={heroStyle}>
      <div className="container" style={container}>
        <div style={eyebrow}>{slides[currentSlide].eyebrow}</div>
        <h1 style={mainHeading}>{slides[currentSlide].mainText}</h1>
        <div style={buttonContainer}>
          <button className="btn btn-primary" style={{ borderRadius: 9999 }}>
            {slides[currentSlide].buttonText}
          </button>
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
