import React from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'

export const TeamBanner: React.FC = () => {
  const { isMd } = useBreakpoint()

  const section: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    minHeight: isMd ? '60vh' : '48vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    backgroundImage:
      "url('https://images.unsplash.com/photo-1581091215367-59ab6dcef4d9?q=80&w=1920&auto=format&fit=crop')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  const overlay: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    background: 'rgba(30, 58, 138, 0.8)',
  }

  const container: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    maxWidth: 1200,
    padding: '0 16px',
    textAlign: 'center',
  }

  const heading: React.CSSProperties = {
    fontWeight: 800,
    fontSize: isMd ? 36 : 22,
    lineHeight: 1.4,
    margin: 0,
    color: '#FFFFFF',
  }

  const btn: React.CSSProperties = {
    marginTop: 20,
    background: '#00703C',
    color: '#FFFFFF',
    border: '1px solid transparent',
    borderRadius: 8,
    padding: '12px 18px',
    fontWeight: 800,
    letterSpacing: 0.5,
    textTransform: 'uppercase' as const,
    cursor: 'pointer',
    boxShadow: '0 6px 16px rgba(0,0,0,0.25)'
  }

  return (
    <section style={section}>
      <div style={overlay} />
      <div style={container}>
        <h2 style={heading}>Our Team Of Specialists Works With Our Partners To Develop,
          <br />Execute And Deliver Projects Within Dynamically Adaptable Timelines.</h2>
        <button
          style={btn}
          onMouseEnter={(e) => ((e.currentTarget.style.background = '#00894E'))}
          onMouseLeave={(e) => ((e.currentTarget.style.background = '#00703C'))}
        >
          MEET THEM
        </button>
      </div>
    </section>
  )
}
