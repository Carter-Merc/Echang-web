import React from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'

const COLORS = {
  navy: '#1E1B54',
  green: '#00703C',
  gray: '#333333',
  white: '#FFFFFF',
  aqua: '#2E8BC0',
}

export const Contact: React.FC = () => {
  const { isMd } = useBreakpoint()

  const sectionStyle: React.CSSProperties = {
    width: '100%',
    padding: isMd ? '56px 0' : '32px 0',
  }

  const wrap: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMd ? '1fr 1fr' : '1fr',
    alignItems: 'center',
    gap: isMd ? 32 : 16,
  }

  const container: React.CSSProperties = {
    width: '100%',
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 16px',
  }

  const imgBox: React.CSSProperties = {
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
    boxShadow: '0 10px 24px rgba(0,0,0,0.12)'
  }

  const imgStyle: React.CSSProperties = {
    width: '100%',
    height: isMd ? 360 : 220,
    objectFit: 'cover',
    display: 'block',
  }

  const tag: React.CSSProperties = {
    color: COLORS.green,
    fontWeight: 800,
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontSize: 12,
    marginBottom: 8,
  }

  const h2: React.CSSProperties = {
    color: COLORS.navy,
    fontSize: isMd ? 36 : 28,
    fontWeight: 800,
    margin: 0,
  }

  const p: React.CSSProperties = {
    color: COLORS.gray,
    fontSize: isMd ? 16 : 15,
    lineHeight: 1.7,
    marginTop: 12,
    marginBottom: 20,
    maxWidth: 600,
  }

  const btn: React.CSSProperties = {
    background: COLORS.navy,
    color: COLORS.white,
    padding: '12px 18px',
    border: '1px solid transparent',
    borderRadius: 9999,
    textTransform: 'uppercase',
    fontWeight: 700,
    cursor: 'pointer',
    boxShadow: '0 6px 16px rgba(30,27,84,0.30)',
    width: isMd ? undefined : '100%'
  }

  return (
    <section style={sectionStyle}>
      <div style={container}>
        <div style={wrap}>
          <div>
            <div style={imgBox}>
              <img
                style={imgStyle}
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop"
                alt="Professional on the phone in modern office"
              />
            </div>
          </div>
          <div>
            <div style={tag}>REACH OUT TO US</div>
            <h2 style={h2}>Get In Touch</h2>
            <p style={p}>We Believe In Collaboration And We Would Love To Hear About Your Project.</p>
            <button
              style={btn}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = '#17143F'
                ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 20px rgba(23,20,63,0.35)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = COLORS.navy
                ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 16px rgba(30,27,84,0.30)'
              }}
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
