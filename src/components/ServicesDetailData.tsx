import React from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'

export const ServicesDetailData: React.FC = () => {
  const { isMd } = useBreakpoint()

  const section: React.CSSProperties = {
    padding: isMd ? '80px 0' : '60px 0',
    width: '100%'
  }

  const container: React.CSSProperties = {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 16px'
  }

  // Service Details
  const detailSection: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMd ? '1fr 1fr' : '1fr',
    gap: isMd ? '60px' : '40px',
    alignItems: 'center'
  }

  // Left Column - Image
  const imageColumn: React.CSSProperties = {
    order: isMd ? 1 : 2
  }

  const serviceImage: React.CSSProperties = {
    width: '100%',
    height: 'auto',
    borderRadius: 12,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
    objectFit: 'cover' as const,
    display: 'block'
  }

  // Right Column - Content
  const contentColumn: React.CSSProperties = {
    order: isMd ? 2 : 1
  }

  const eyebrow: React.CSSProperties = {
    fontSize: isMd ? 14 : 12,
    fontWeight: 600,
    color: '#6B7280', // Light gray
    margin: '0 0 12px',
    textTransform: 'uppercase' as const,
    letterSpacing: 1
  }

  const serviceHeading: React.CSSProperties = {
    fontSize: isMd ? 32 : 28,
    fontWeight: 800,
    color: '#1E293B', // Navy blue from your color scheme
    margin: '0 0 24px',
    lineHeight: 1.2
  }

  const serviceList: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  }

  const listItem: React.CSSProperties = {
    fontSize: isMd ? 16 : 15,
    fontWeight: 400,
    color: '#1E293B', // Navy blue from your color scheme
    marginBottom: '12px',
    paddingLeft: '20px',
    position: 'relative',
    lineHeight: 1.5
  }

  const bulletPoint: React.CSSProperties = {
    position: 'absolute',
    left: 0,
    top: '8px',
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#1E293B', // Navy blue from your color scheme
    display: 'block'
  }

  return (
    <section className="bg-dots" style={section}>
      <div style={container}>
        {/* Service Details */}
        <div style={detailSection}>
          {/* Left Column - Service Image */}
          <div style={imageColumn}>
            <img
              src="/Echang 13.png"
              alt="Data and measurement services"
              style={serviceImage}
            />
          </div>

          {/* Right Column - Service Content */}
          <div style={contentColumn}>
            <div style={eyebrow}>EXPLORE THE FEATURES</div>
            <h2 style={serviceHeading}>Data and Measurement</h2>
            <ul style={serviceList}>
              <li style={listItem}>
                <span style={bulletPoint}></span>
                Cargo Surveying.
              </li>
              <li style={listItem}>
                <span style={bulletPoint}></span>
                Pre-Shipment Inspection Services (Oil).
              </li>
              <li style={listItem}>
                <span style={bulletPoint}></span>
                Record Reconciliation & Documentation.
              </li>
              <li style={listItem}>
                <span style={bulletPoint}></span>
                Equipment & Systems Calibration.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
