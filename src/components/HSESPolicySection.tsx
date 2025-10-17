import React from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'

export const HSESPolicySection: React.FC = () => {
  const { isMd } = useBreakpoint()

  const section: React.CSSProperties = {
    background: '#FFFFFF',
    padding: isMd ? '80px 0' : '60px 0',
    width: '100%'
  }

  const container: React.CSSProperties = {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 16px'
  }

  // Two-column layout
  const contentGrid: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMd ? '45% 55%' : '1fr',
    gap: isMd ? '60px' : '40px',
    alignItems: 'start'
  }

  // Left Column - Visual & Overview
  const leftColumn: React.CSSProperties = {
    order: isMd ? 1 : 1
  }

  const sectionHeaders: React.CSSProperties = {
    marginBottom: '32px'
  }

  const smallHeader: React.CSSProperties = {
    fontSize: isMd ? 16 : 14,
    fontWeight: 400,
    color: '#1E293B', // Navy blue from your color scheme
    margin: '0 0 8px',
    lineHeight: 1.2
  }

  const mainHeader: React.CSSProperties = {
    fontSize: isMd ? 32 : 28,
    fontWeight: 800,
    color: '#1E293B', // Navy blue from your color scheme
    margin: '0 0 24px',
    lineHeight: 1.2
  }

  const illustrationContainer: React.CSSProperties = {
    position: 'relative',
    marginBottom: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const illustration: React.CSSProperties = {
    width: '100%',
    maxWidth: 400,
    height: 'auto'
  }

  const additionalIcon: React.CSSProperties = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    width: 32,
    height: 32,
    color: '#1E293B' // Navy blue from your color scheme
  }

  const overviewText: React.CSSProperties = {
    fontSize: isMd ? 16 : 15,
    fontWeight: 400,
    color: '#1E293B', // Navy blue from your color scheme
    lineHeight: 1.6,
    textAlign: 'justify' as const,
    margin: 0
  }

  // Right Column - Policy Details
  const rightColumn: React.CSSProperties = {
    order: isMd ? 2 : 2
  }

  const policySection: React.CSSProperties = {
    marginBottom: isMd ? '40px' : '32px'
  }

  const sectionHeading: React.CSSProperties = {
    fontSize: isMd ? 24 : 20,
    fontWeight: 800,
    color: '#1E293B', // Navy blue from your color scheme
    margin: '0 0 16px',
    lineHeight: 1.3
  }

  const sectionContent: React.CSSProperties = {
    fontSize: isMd ? 16 : 15,
    fontWeight: 400,
    color: '#1E293B', // Navy blue from your color scheme
    lineHeight: 1.6,
    margin: '0 0 20px'
  }

  const policyList: React.CSSProperties = {
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

  const gearIcon: React.CSSProperties = {
    position: 'absolute',
    top: '8px',
    right: '0',
    width: 20,
    height: 20,
    color: '#1E293B' // Navy blue from your color scheme
  }

  const policyCommitments = [
    "Prioritize the Health, Safety, and Security of all personnel of the company, and their properties that may be affected during our operations.",
    "Ensure that all employees are properly trained for any task they may be assigned to do.",
    "To provide and maintain safe plant and equipment.",
    "To guarantee safe handling and use of substances.",
    "To affirm considerable and trustworthy working conditions.",
    "To ensure all activities are analyzed to systemically identify health related hazards and risks.",
    "To make all efforts to obviate hazards, risk and sensitivities and deal with unpropitious consequences should they arise.",
    "To give proper regard to the protection and conservation of the environment by continually assessing environmental impact of work activities and reduce any negative fallout to a negligible level as practically possible.",
    "To show sensitivity to the plights of host communities by involving them in the promotion of this policy.",
    "Promote a culture in which all employees share this commitment."
  ]

  return (
    <section style={section}>
      <div style={container}>
        <div style={contentGrid}>
          {/* Left Column - Visual & Overview */}
          <div style={leftColumn}>
            {/* Section Headers */}
            <div style={sectionHeaders}>
              <div style={smallHeader}>Our</div>
              <h2 style={mainHeader}>HSES & CA Policy</h2>
            </div>

            {/* Central Illustration */}
            <div style={illustrationContainer}>
              <img
                src="/hse icon.png"
                alt="HSES & CA Policy illustration with interconnected gears"
                style={illustration}
              />
            </div>

            {/* Policy Overview Text */}
            <p style={overviewText}>
              Health, Safety, Environment, Security and Community Affairs (HSES & CA) Policy, is our established policy document on health and safety of all persons involved in our operations, including members of the public that may be affected and preventing harmful impact of our activities on the environment in which our operations are carried out, as well as responsibility for good working relationship with the society and particularly the communities in which we have our operations.
            </p>
          </div>

          {/* Right Column - Policy Details */}
          <div style={rightColumn}>
            {/* Section 1 - Management Commitment */}
            <div style={policySection}>
              <h3 style={sectionHeading}>Management Commitment</h3>
              <p style={sectionContent}>
                The policy addresses the management commitment to mitigate and control potential risks of our operations to Health, Safety, Environment, Security implications relating to our employees, contractors and Community Affairs – giving proper regard and respect to the people, their safety, culture and environment.
              </p>
            </div>

            {/* Section 2 - Sustainability */}
            <div style={policySection}>
              <h3 style={sectionHeading}>Sustainability</h3>
              <p style={sectionContent}>
                Therefore, it shall be our policy to:
              </p>
              <ul style={policyList}>
                {policyCommitments.map((commitment, index) => (
                  <li key={index} style={listItem}>
                    <span style={bulletPoint}></span>
                    {commitment}
                  </li>
                ))}
              </ul>
              {/* Gear Icon */}
              <div style={gearIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
