import React, { useState, useEffect } from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'

interface ServiceSlide {
  title: string
  subtext: string
  buttonText: string
  backgroundImage: string
}

export const ServicesHero: React.FC = () => {
  const { isMd } = useBreakpoint()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides: ServiceSlide[] = [
    {
      title: "Marine and Offshore Support Services",
      subtext: "Marine vessels supply and Operations",
      buttonText: "Read More",
      backgroundImage: "url('https://images.unsplash.com/photo-1559027615-5a1c7c7a5f9b?q=80&w=1920&auto=format&fit=crop')"
    },
    {
      title: "Technical Management and Consultancy",
      subtext: "Vessel management and Chatering",
      buttonText: "Read More",
      backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1920&auto=format&fit=crop')"
    },
    {
      title: "Pilotage and Mooring Services",
      subtext: "Pilot and Mooring Operation",
      buttonText: "Read More",
      backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1920&auto=format&fit=crop')"
    },
    {
      title: "Marine Logistics",
      subtext: "Shipping: Transport Broker & Agency",
      buttonText: "Read More",
      backgroundImage: "url('https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=1920&auto=format&fit=crop')"
    },
    {
      title: "Engineering & Material Supply Services",
      subtext: "Supply Installations and Maintanance of Marine Equipments",
      buttonText: "Read More",
      backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920&auto=format&fit=crop')"
    },
    {
      title: "Data and Measurement Services",
      subtext: "Record Reconcilliation and Documentation",
      buttonText: "Read More",
      backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920&auto=format&fit=crop')"
    },
    {
      title: "Corporate Training and Consultancy",
      subtext: "Maritime Operations and Technical Awareness",
      buttonText: "Read More",
      backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1920&auto=format&fit=crop')"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

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
    backgroundImage: slides[currentSlide].backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    transition: 'background-image 1s ease-in-out'
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
    color: '#FFFFFF',
    margin: '0 0 12px',
    letterSpacing: 2,
    textTransform: 'uppercase' as const
  }

  const mainHeading: React.CSSProperties = {
    fontSize: isMd ? 48 : 32,
    fontWeight: 800,
    color: '#FFFFFF',
    margin: '0 0 16px',
    lineHeight: 1.2
  }

  const subtext: React.CSSProperties = {
    fontSize: isMd ? 20 : 16,
    fontWeight: 400,
    color: '#FFFFFF',
    margin: '0 0 32px',
    lineHeight: 1.4,
    opacity: 0.9
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
              <div style={eyebrow}>Our Services</div>
              <h1 style={mainHeading}>{slide.title}</h1>
              <p style={subtext}>{slide.subtext}</p>
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
