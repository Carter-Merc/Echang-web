import React from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { LazyImage } from './LazyImage'

const services = [
  { title: 'Marine & Offshore Support Services', icon: 'ship' },
  { title: 'Technical Management & Consultancy', icon: 'wrench' },
  { title: 'Pilotage & Mooring Services', icon: 'anchor' },
  { title: 'Marine Logistics', icon: 'boxes' },
  { title: 'Engineering & Material Supply Services', icon: 'tools' },
  { title: 'Data and Measurement Services', icon: 'chart-bar' },
  { title: 'Corporate Training & Consultancy', icon: 'graduation-cap' },
]

// Icon Component
const IconComponent: React.FC<{ icon: string; color: string }> = ({ icon, color }) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    ship: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 21h20M6.5 5l7.5-3 7.5 3v3H6.5zM6.5 8v7h11V8M9 12h6M7 21v-7M17 21v-7M12 9v3" />
      </svg>
    ),
    wrench: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 1 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    anchor: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3" />
        <line x1="12" y1="8" x2="12" y2="17" />
        <path d="M8.5 14c-1.933 2-4.5 4-4.5 6 0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4 0-2-2.567-4-4.5-6" />
      </svg>
    ),
    boxes: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 16.5v-6a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6M7 16.5c0 1.66 1.34 3 3 3h4c1.66 0 3-1.34 3-3" />
        <line x1="7" y1="13" x2="17" y2="13" />
        <line x1="7" y1="9" x2="17" y2="9" />
      </svg>
    ),
    tools: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 1 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        <circle cx="18" cy="5" r="2" />
      </svg>
    ),
    'chart-bar': (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
    'graduation-cap': (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 20.06 6.94 12 11.89 3.94 6.94 12 2" />
        <polyline points="3.94 6.94 12 11.89 20.06 6.94" />
        <line x1="12" y1="11.88" x2="12" y2="20.88" />
        <polyline points="20.06 17.94 12 22.89 3.94 17.94" />
      </svg>
    ),
  }

  return <>{iconMap[icon] || iconMap['ship']}</>
}

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
    width: 56, 
    height: 56, 
    borderRadius: 9999, 
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(79,70,229,0.08)',
    transition: 'all 0.25s ease',
  }  

  const renderIcon = (iconName: string, color: string) => {
    return <IconComponent icon={iconName} color={color} />
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
                <LazyImage src="/Echang 4.jpg" alt="Maritime operations" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <blockquote style={{ marginTop: 16, fontStyle: 'italic', color: 'var(--heading-navy)', fontSize: isMd ? 16 : 14 }}>
                <b>"Quality means doing it right when no one is looking" – Henry Ford.</b>
              </blockquote>
              <p style={{ color: 'var(--heading-navy)', marginTop: 8, fontSize: isMd ? 16 : 14 }}>
                <b>At Echang Integrated Services Limited (EIS), we deliver effective and efficient services across the Maritime and Oil & Gas industry, providing marine logistics, offshore support, vessel chartering and management, technical management and consultancy, engineering solutions, procurement and material supplies.</b>
              </p>
              <div style={{ marginTop: 16 }}>
                <button className="btn" style={{ background: 'var(--cta-navy)', color: '#FFFFFF', borderRadius: 9999, width: isMd ? undefined : '100%' }}>OUR SERVICES</button>
              </div>
            </div> 

            {/* Right: services grid */}
            <div style={{ display: 'grid', gridTemplateColumns: isMd ? '1fr 1fr' : '1fr', gap: 20 }}>
              {services.slice(0,6).map((s) => {
                let currentIconColor = navy
                return (
                <div 
                  key={s.title}
                  className="service-card"
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    const card = e.currentTarget as HTMLDivElement
                    card.style.background = navy
                    card.style.color = '#FFFFFF'
                    const icon = card.querySelector('[data-icon]') as HTMLDivElement | null
                    const svg = card.querySelector('svg') as SVGElement | null
                    if (icon) {
                      icon.style.background = navy
                    }
                    if (svg) {
                      svg.style.stroke = '#FFFFFF'
                    }
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget as HTMLDivElement
                    card.style.background = '#FFFFFF'
                    card.style.color = navy
                    const icon = card.querySelector('[data-icon]') as HTMLDivElement | null
                    const svg = card.querySelector('svg') as SVGElement | null
                    if (icon) {
                      icon.style.background = 'rgba(79,70,229,0.08)'
                    }
                    if (svg) {
                      svg.style.stroke = navy
                    }
                  }}
                >
                  <div style={iconCircle} data-icon aria-hidden>{renderIcon(s.icon, navy)}</div>
                  <h4 style={{ marginTop: 0, color: 'inherit' }}>{s.title}</h4>
                </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
