import React from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'

export const AboutHero: React.FC = () => {
  const { isMd } = useBreakpoint()

  const heroStyle: React.CSSProperties = {
    position: 'relative',
    minHeight: isMd ? '60vh' : '50vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    backgroundImage: 'linear-gradient(rgba(30,27,84,0.45), rgba(30,27,84,0.45)), url("/Echang 1.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <section style={heroStyle}>
      <div className="container" style={{ textAlign: 'center', padding: isMd ? '0' : '0 16px' }}>
        <h1 style={{ color: 'var(--color-white)', fontSize: isMd ? 40 : 28, marginTop: 8 }}>Learn about EIS</h1>
        <div style={{ marginTop: 24 }}>
          <button className="btn btn-primary" style={{ borderRadius: 9999 }}>Learn More</button>
        </div>
      </div>
    </section>
  )
}
