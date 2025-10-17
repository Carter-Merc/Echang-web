import React from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'

type VisionMissionProps = {
  dotted?: boolean
}

const COLORS = {
  navy: '#1E1B54',
  green: '#00703C',
  white: '#FFFFFF',
  gray: '#333333',
  purpleLight: '#E5E1FF',
}

export const VisionMission: React.FC<VisionMissionProps> = ({ dotted = false }) => {
  const { isMd } = useBreakpoint()

  const sectionStyle: React.CSSProperties = dotted
    ? {
        width: '100%',
        padding: isMd ? '56px 0' : '32px 0',
        backgroundColor: '#f6f7f9',
        backgroundImage: 'radial-gradient(#d9dee7 1px, transparent 1px)',
        backgroundSize: '16px 16px',
      }
    : {
        width: '100%',
        padding: isMd ? '56px 0' : '32px 0',
        backgroundColor: COLORS.white,
      }
  const container: React.CSSProperties = {
    width: '100%',
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 16px',
  }

  const eyebrow: React.CSSProperties = {
    textAlign: 'center',
    color: COLORS.green,
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: 800,
    fontSize: 12,
  }
  const title: React.CSSProperties = {
    textAlign: 'center',
    color: '#1E293B',
    fontWeight: 800,
    fontSize: 28,
    margin: '6px 0 24px',
  }

  const grid: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMd ? '1fr 1fr' : '1fr',
    gap: isMd ? 24 : 16,
  }

  const card: React.CSSProperties = {
    background: COLORS.white,
    borderRadius: 16,
    boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
    padding: 20,
    display: 'grid',
    gridTemplateColumns: '72px 1fr',
    gap: 16,
    position: 'relative',
    borderLeft: `6px solid ${'#1E1B54'}`,
  }
  const logoCircle: React.CSSProperties = { width: 64, height: 64, borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#eef1f8' }
  const logo: React.CSSProperties = { width: 56, height: 56, objectFit: 'contain' }
  const label: React.CSSProperties = { fontWeight: 800, color: '#1E293B', margin: 0 }
  const company: React.CSSProperties = { color: COLORS.green, fontWeight: 800 }
  const text: React.CSSProperties = { color: '#1E293B', lineHeight: 1.6 }
  const quote: React.CSSProperties = { position: 'absolute', right: 16, bottom: 12, fontSize: 48, color: COLORS.purpleLight }

  return (
    <section style={sectionStyle}>
      <div style={container}>
        <div style={eyebrow}>VISION & MISSION</div>
        <h2 style={title}>Statements</h2>

        <div style={grid}>
          {/* Vision */}
          <article style={card}>
            <div style={logoCircle}><img src="/echang_log3.png" alt="EIS logo" style={logo} /></div>
            <div>
              <p style={text}>"To be the first-choice partner, delivering most efficient solutions in the Maritime and Oil & Gas industry"</p>
              <p style={label}>Our Vision</p>
              <div style={company}>EIS</div>
            </div>
            <div style={quote}>”</div>
          </article>

        {/* Mission */}
          <article style={card}>
            <div style={logoCircle}><img src="/echang_log3.png" alt="EIS logo" style={logo} /></div>
            <div>
              <p style={text}>"Using human and material resources harnessed in all facets, to carry out an unrivalled operations and services in the maritime and oil & gas industry in a safe and defined culture, as a corporation with the utmost values and integrity."</p>
              <p style={label}>Our Mission</p>
              <div style={company}>EIS</div>
            </div>
            <div style={quote}>”</div>
          </article>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
          <div style={{ width: 10, height: 10, borderRadius: 9999, background: COLORS.navy }} />
        </div>
      </div>
    </section>
  )
}
