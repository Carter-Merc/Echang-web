import React from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'

export const CompanyValues: React.FC = () => {
  const { isMd } = useBreakpoint()

  const sectionStyle: React.CSSProperties = {
    background: '#FFFFFF',
    padding: isMd ? '80px 0' : '48px 0',
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
    gap: isMd ? 96 : 32,
    alignItems: 'start',
  }

  const leftColumn: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  }

  const rightColumn: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
  }

  const sectionHeader: React.CSSProperties = {
    color: '#1E1B54',
    fontWeight: 800,
    fontSize: isMd ? 36 : 28,
    margin: 0,
    lineHeight: 1.2,
  }

  const companyName: React.CSSProperties = {
    color: '#1E1B54',
    fontWeight: 800,
    fontSize: isMd ? 24 : 20,
    margin: 0,
    lineHeight: 1.3,
  }

  const overviewText: React.CSSProperties = {
    color: '#1E1B54',
    fontSize: isMd ? 16 : 15,
    lineHeight: 1.7,
    margin: 0,
    textAlign: 'left',
  }

  const valueItem: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  }

  const valueName: React.CSSProperties = {
    color: '#1E1B54',
    fontWeight: 800,
    fontSize: isMd ? 20 : 18,
    margin: 0,
    lineHeight: 1.3,
  }

  const valueDescription: React.CSSProperties = {
    color: '#1E1B54',
    fontSize: isMd ? 16 : 15,
    lineHeight: 1.7,
    margin: 0,
  }

  const values = [
    {
      name: 'Integrity',
      description: 'We have a high reputation and a knack for professional standards, efficiency and trustworthiness in all our endeavours.'
    },
    {
      name: 'Diligence',
      description: 'We are painstakingly committed to the efficient delivery of all our services by devoting quality resources towards meeting our partners\' business targets.'
    },
    {
      name: 'Honesty',
      description: 'We uphold our moral, legal, and fiduciary duty and obligation of openness in all our operations knowing that businesses thrive better in a trustworthy environment.'
    }
  ]

  return (
    <section style={sectionStyle}>
      <div style={container}>
        <div style={grid}>
          {/* Left Column - Company Overview */}
          <div style={leftColumn}>
            <h2 style={sectionHeader}>Our Values</h2>
            <h3 style={companyName}>ECHANG INTEGRATED SERVICES LIMITED (EIS)</h3>
            <p style={overviewText}>
              Our business principles are guided by Our Core Values of Integrity, Diligence and Honesty in every sphere of our operations while totally complying with every piece of established legislation and regulations in the industry.
            </p>
          </div>

          {/* Right Column - Core Values */}
          <div style={rightColumn}>
            {values.map((value, index) => (
              <div key={index} style={valueItem}>
                <h4 style={valueName}>{value.name}</h4>
                <p style={valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
