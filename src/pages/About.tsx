import React from 'react'
import { AboutHero } from '@/components/AboutHero'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { VisionMission } from '@/components/VisionMission'
import { TeamBanner } from '@/components/TeamBanner'
import { ServicesGrid } from '@/components/ServicesGrid'
import { ContactBanner } from '@/components/ContactBanner'

const About: React.FC = () => {
  const { isMd } = useBreakpoint()

  const sectionStyle: React.CSSProperties = {
    background: '#FFFFFF',
    padding: isMd ? '56px 0' : '32px 0',
  }
  const container: React.CSSProperties = {
    width: '100%',
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 16px',
  }
  const grid: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMd ? '1fr 1fr' : '1fr',
    gap: isMd ? 96 : 24,
    alignItems: 'start',
  }
  const header: React.CSSProperties = {
    color: '#1E293B',
    fontWeight: 800,
    fontSize: isMd ? 28 : 22,
    margin: '0 0 12px',
  }
  const companyText: React.CSSProperties = {
    color: '#1E293B',
    lineHeight: 1.7,
    marginTop: 12,
  }
  const valueTitle: React.CSSProperties = {
    color: '#1E293B',
    fontWeight: 800,
    margin: '0 0 8px',
    fontSize: 18,
  }
  const valueText: React.CSSProperties = {
    color: '#1E293B',
    lineHeight: 1.7,
    margin: 0,
  }

  return (
    <div>
      <AboutHero />

      <section style={sectionStyle}>
        <div style={container}>
          <div style={grid}>
            {/* Left: Company info */}
            <div>
              <h2 style={header}>ECHANG INTEGRATED SERVICES LIMITED (EIS)</h2>
              <div style={{ width: '100%', overflow: 'hidden', borderRadius: 16 }}>
                <img
                  src={'/Echang 8.png'}
                  alt="Professional business meeting and consultation"
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
              </div>
              <p style={companyText}>
                Was incorporated in 2019 as a limited liability company, to carry out specialized activities and
                operations in the Maritime and Oil & Gas industry.
              </p>
              <p style={companyText}>
                We are strategically positioned with firsthand professionals with vast experience and proven track
                records in the industry.
              </p>
            </div>

            {/* Right: Values */}
            <div>
              <h2 style={header}>Our Values</h2>

              <div style={{ marginBottom: 20 }}>
                <h3 style={valueTitle}>Integrity</h3>
                <p style={valueText}>
                  We have a high reputation and a knack for professional standards, efficiency and trustworthiness in
                  all our endeavours.
                </p>
              </div> 

              <div style={{ marginBottom: 20 }}>
                <h3 style={valueTitle}>Diligence</h3>
                <p style={valueText}>
                  We are painstakingly committed to the efficient delivery of all our services by devoting quality
                  resources towards meeting our partners' business targets.
                </p>
              </div>

              <div>
                <h3 style={valueTitle}>Honesty</h3>
                <p style={valueText}>
                  We uphold our moral, legal, and fiduciary duty and obligation of openness in all our operations
                  knowing that businesses thrive better in a trustworthy environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VisionMission dotted />
      <TeamBanner />
      <ServicesGrid />
      <ContactBanner />
    </div>
  )
}

export default About
