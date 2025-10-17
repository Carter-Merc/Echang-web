import React, { useEffect, useState } from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'

const COLORS = {
  navy: '#1E293B',
  teal: '#00703C',
  light: '#f3f4f6',
  white: '#ffffff',
}

type Service = {
  title: string
  img: string
  alt: string
}

const SERVICES: Service[] = [
  { title: 'Technical Management and Consultancy', img: 'https://images.unsplash.com/photo-1454179083322-2ae3ebd93f7e?q=80&w=1600&auto=format&fit=crop', alt: 'Technical management consultancy - industrial controls' },
  { title: 'Data Management', img: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1600&auto=format&fit=crop', alt: 'Data management - servers and cables' },
  { title: 'Corporate Training and Consultancy', img: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1600&auto=format&fit=crop', alt: 'Corporate training - team workshop' },
  { title: 'Marine and Offshore Support', img: 'https://images.unsplash.com/photo-1557962927-6d7a9a4d1c6f?q=80&w=1600&auto=format&fit=crop', alt: 'Marine and offshore support vessel' },
  { title: 'Pilotage and Mooring', img: 'https://images.unsplash.com/photo-1544551763-7ef42064ca47?q=80&w=1600&auto=format&fit=crop', alt: 'Pilotage and mooring with ship hull and platform' },
  { title: 'Marine Logistics', img: 'https://images.unsplash.com/photo-1516239322114-5ceab2acd7c1?q=80&w=1600&auto=format&fit=crop', alt: 'Marine logistics on ship deck' },
  { title: 'Engineering and Material Supply', img: 'https://images.unsplash.com/photo-1581093588401-16af1cbdc9b0?q=80&w=1600&auto=format&fit=crop', alt: 'Engineering and material supply - safety equipment over ocean' },
]

export const ServicesGrid: React.FC = () => {
  const { isMd } = useBreakpoint()
  const [vw, setVw] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1200)

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const section: React.CSSProperties = {
    width: '100%',
    padding: isMd ? '56px 0' : '32px 0',
    backgroundColor: '#f6f7f9',
    backgroundImage: 'radial-gradient(#d9dee7 1px, transparent 1px)',
    backgroundSize: '16px 16px',
  }
  const container: React.CSSProperties = {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 16px',
  }
  const heading: React.CSSProperties = {
    textAlign: 'center',
    color: COLORS.navy,
    fontWeight: 800,
    fontSize: isMd ? 28 : 24,
    margin: '0 0 24px',
  }

  const row: React.CSSProperties = {
    display: 'flex',
    gap: 16,
    overflowX: 'auto',
    padding: '0 4px 8px',
    scrollSnapType: 'x mandatory' as const,
    WebkitOverflowScrolling: 'touch' as any,
  }

  const safeVw = Math.max(320, vw)
  const mobileCardWidth = Math.min(360, Math.floor(safeVw - 64))
  const cardWidth = isMd ? 300 : mobileCardWidth

  const card: React.CSSProperties = {
    background: COLORS.white,
    borderRadius: 12,
    boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
    overflow: 'hidden',
    transition: 'transform .2s ease, box-shadow .2s ease',
    minWidth: cardWidth,
    maxWidth: cardWidth,
    scrollSnapAlign: 'start',
    flex: `0 0 ${cardWidth}px`,
  }
  const imgHeight = isMd ? 180 : 160
  const imgStyle: React.CSSProperties = {
    width: '100%',
    height: imgHeight,
    objectFit: 'cover',
    display: 'block',
  }
  const body: React.CSSProperties = { padding: 16 }
  const titleStyle: React.CSSProperties = { color: COLORS.navy, fontWeight: 800, margin: '0 0 8px', fontSize: isMd ? 16 : 15 }
  const link: React.CSSProperties = { color: COLORS.teal, textDecoration: 'none', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8 }

  return (
    <section style={section}>
      <div style={container}>
        <h2 style={heading}>Our Services</h2>
        <div style={row} aria-label="Services list" role="list">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              style={card}
              role="listitem"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 28px rgba(0,0,0,0.12)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)'
              }}
            >
              <img src={s.img} alt={s.alt} style={imgStyle} />
              <div style={body}>
                <h3 style={titleStyle}>{s.title}</h3>
                <a href="#" style={link}>
                  <span style={{ width: 12, height: 2, background: COLORS.teal, display: 'inline-block' }} />
                  READ MORE
                </a>
              </div>
            </article>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 16 }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} style={{ width: 8, height: 8, borderRadius: 9999, background: i === 0 ? COLORS.navy : '#cbd5e1' }} />
          ))}
        </div>
      </div>
    </section>
  )
}
