import React, { useState, useEffect } from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'

export const ContactHero: React.FC = () => {
  const { isMd } = useBreakpoint()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      subheading: "Get In Touch",
      heading: "Contact Us",
      buttonText: "Send Message"
    },
    {
      subheading: "We're Here to Help",
      heading: "Let's Talk",
      buttonText: "Send Message"
    },
    {
      subheading: "Start a Conversation",
      heading: "Reach Out",
      buttonText: "Send Message"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slides.length])

  const section: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    minHeight: isMd ? '50vh' : '40vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    backgroundImage: "url('/Echang 8.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden'
  }

  const overlay: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(rgba(30,27,84,0.75), rgba(30,27,84,0.75))'
  }

  const content: React.CSSProperties = {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    padding: '0 16px'
  }

  const eyebrow: React.CSSProperties = {
    fontSize: isMd ? 16 : 14,
    fontWeight: 600,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#FFFFFF',
    marginBottom: 16,
    opacity: 0.9
  }

  const heading: React.CSSProperties = {
    fontSize: isMd ? 56 : 36,
    fontWeight: 900,
    margin: 0,
    marginBottom: 24,
    lineHeight: 1.1
  }

  const button: React.CSSProperties = {
    background: '#00703C',
    color: '#FFFFFF',
    border: '1px solid transparent',
    borderRadius: 9999,
    padding: '16px 40px',
    fontSize: 16,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: 'uppercase',
    cursor: 'pointer',
    boxShadow: '0 8px 24px rgba(0,112,60,0.30)',
    transition: 'all 0.3s ease'
  }

  return (
    <section style={section}>
      <div style={overlay} />
      <div style={content}>
        <div style={eyebrow}>{slides[currentSlide].subheading}</div>
        <h1 style={heading}>{slides[currentSlide].heading}</h1>
        <button
          style={button}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#00894E'
            e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,137,78,0.35)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#00703C'
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,112,60,0.30)'
          }}
        >
          {slides[currentSlide].buttonText}
        </button>
      </div>
    </section>
  )
}

