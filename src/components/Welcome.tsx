import React from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { LazyImage } from './LazyImage'

const services = [
  { title: 'Marine & Offshore Support Services', icon: '🛥️' },
  { title: 'Technical Management & Consultancy', icon: '🧭' },
  { title: 'Pilotage & Mooring Services', icon: '⚓' },
  { title: 'Marine Logistics', icon: '🚢' },
  { title: 'Engineering & Material Supply Services', icon: '🧰' },
  { title: 'Data and Measurement Services', icon: '📊' },
  { title: 'Corporate Training & Consultancy', icon: '🎓' },
]

export const Welcome: React.FC = () => {
  const { isMd } = useBreakpoint()
  const navy = '#1E293B'

  const cardStyle: React.CSSProperties = {
    background: '#FFFFFF',
    borderRadius: 16,
    boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
    padding: 20,
    display: 'grid',
    gridTemplateColumns: '44px 1fr',
    gap: 16,
    alignItems: 'center',
    transition: 'all 0.25s ease',
    cursor: 'pointer' as const,
    color: navy,
  }

  const iconCircle: React.CSSProperties = {
    width: 44,
    height: 44,
    borderRadius: 9999,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(79,70,229,0.08)',
    color: navy,
    fontSize: 20,
    fontWeight: 700,
    transition: 'all 0.25s ease',
  }

  return (
    <section className="bg-dots" style={{ padding: isMd ? '56px 0' : '32px 0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: isMd ? 32 : 20 }}>
        <header>
          <div style={{ color: 'var(--welcome-accent)', fontWeight: 800, letterSpacing: 1 }}>WELCOME TO</div>
          <h2 style={{ color: 'var(--heading-navy)', marginTop: 6, fontSize: isMd ? 28 : 22 }}>Echang Integrated Services Limited</h2>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: isMd ? 32 : 20 }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMd ? '1fr 1fr' : '1fr', gap: isMd ? 32 : 16 }}>
            {/* Left: circular image + text */}
            <div>
              <div style={{ width: '100%', aspectRatio: '1/1', borderRadius: '9999px', overflow: 'hidden', boxShadow: '0 10px 24px rgba(0,0,0,0.15)' }}>
                <LazyImage src="/Echang 4.png" alt="Maritime operations" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <blockquote style={{ marginTop: 16, fontStyle: 'italic', color: 'var(--heading-navy)', fontSize: isMd ? 16 : 14 }}>
                "Quality means doing it right when no one is looking" – Henry Ford.
              </blockquote>
              <p style={{ color: 'var(--heading-navy)', marginTop: 8, fontSize: isMd ? 16 : 14 }}>
                At Echang Integrated Services Limited (EIS), we deliver effective and efficient services across the Maritime and Oil & Gas industry, providing marine logistics, offshore support, vessel chartering and management, technical management and consultancy, engineering solutions, procurement and material supplies.
              </p>
              <div style={{ marginTop: 16 }}>
                <button className="btn" style={{ background: 'var(--cta-navy)', color: '#FFFFFF', borderRadius: 9999, width: isMd ? undefined : '100%' }}>OUR SERVICES</button>
              </div>
            </div>

            {/* Right: services grid */}
            <div style={{ display: 'grid', gridTemplateColumns: isMd ? '1fr 1fr' : '1fr', gap: 20 }}>
              {services.slice(0,6).map((s) => (
                <div
                  key={s.title}
                  className="service-card"
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    const card = e.currentTarget as HTMLDivElement
                    card.style.background = navy
                    card.style.color = '#FFFFFF'
                    const icon = card.querySelector('[data-icon]') as HTMLDivElement | null
                    if (icon) {
                      icon.style.background = navy
                      icon.style.color = '#FFFFFF'
                    }
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget as HTMLDivElement
                    card.style.background = '#FFFFFF'
                    card.style.color = navy
                    const icon = card.querySelector('[data-icon]') as HTMLDivElement | null
                    if (icon) {
                      icon.style.background = 'rgba(79,70,229,0.08)'
                      icon.style.color = navy
                    }
                  }}
                >
                  <div style={iconCircle} data-icon aria-hidden>{s.icon}</div>
                  <h4 style={{ marginTop: 0, color: 'inherit' }}>{s.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
