import React from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'

export const ContactBanner: React.FC = () => {
  const { isMd } = useBreakpoint()

  const section: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    minHeight: isMd ? '52vh' : '44vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    backgroundImage: "url('/Echang 7.png')",
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
    fontSize: isMd ? 34 : 22,
    lineHeight: 1.4,
    margin: 0,
    color: '#FFFFFF',
  }

  const btn: React.CSSProperties = {
    marginTop: 20,
    background: '#1E1B54',
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
        <h2 style={heading}>We Believe In Collaboration And We Would Love To Hear About Your Project</h2>
        <button
          style={btn}
          onMouseEnter={(e) => ((e.currentTarget.style.background = '#17143F'))}
          onMouseLeave={(e) => ((e.currentTarget.style.background = '#1E1B54'))}
        >
          CONTACT US
        </button>
      </div>
    </section>
  )
}
