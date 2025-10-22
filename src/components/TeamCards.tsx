import React, { useState } from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { LazyImage } from './LazyImage'
import { TeamModal } from './TeamModal'

interface TeamMember {
  name: string
  position: string
  description: string
  image: string
  alt: string
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Frederick Adefarati',
    position: 'LEGAL COUNSEL',
    description: 'Qualified solicitor and advocate of the Supreme Court of Nigeria with extensive legal publications. LLB (Uniben), BL (Nigerian Law School, 2008), and LLM in Oil & Gas Law (Swansea University, UK).',
    image: '/Frederick Adefarati.png',
    alt: 'Frederick Adefarati - Professional headshot'
  },
  {
    name: 'Happiness Nwagwu',
    position: 'TEAM MEMBER',
    description: 'Professional team member with expertise in maritime operations and client relations.',
    image: '/Happiness Nwagwu.png',
    alt: 'Happiness Nwagwu - Professional headshot'
  },
  {
    name: 'Mallam Umar Sani',
    position: 'CHAIRMAN',
    description: 'Seasoned in executive management with extensive experience in portfolio management, development finance and revenue generation, asset management, capital markets, supply chain, treasury management, and pension & tax administration in Nigeria.',
    image: '/Mallam Umar Sani t.png',
    alt: 'Mallam Umar Sani - Professional headshot'
  },
  {
    name: 'Oluwaseyi Oladunjoye',
    position: 'HEAD, OPERATIONS',
    description: 'Mechanical Engineer with over eighteen years in oil & gas as operations, maintenance, reliability, and asset management professional; experienced in rotating equipment maintenance, asset reliability and operations readiness.',
    image: '/Oluwaseyi Oladunjoye.png',
    alt: 'Oluwaseyi Oladunjoye - Professional headshot'
  },
  {
    name: 'Salisu Aminu, FIMC, AMNIM',
    position: 'HUMAN RESOURCES & TRAINING SERVICES',
    description: 'Certified business development service provider and professional manager with over fifteen years of progressive experience.',
    image: '/Salisu Aminu, FIMC, AMNIM.png',
    alt: 'Salisu Aminu, FIMC, AMNIM - Professional headshot'
  },
  {
    name: 'Theophilus Urua, MILT',
    position: 'CHARTERING MANAGER',
    description: 'Marine logistics specialist with expertise in supply chain, procurement, vessel chartering and offshore operations; holds a National Diploma in Maritime Studies.',
    image: '/Theophilus Urua, MILT.png',
    alt: 'Theophilus Urua, MILT - Professional headshot'
  },
  {
    name: 'Victor Aghedo',
    position: 'GM, MARINE',
    description: 'Expert with over forty years in the industry. Experience spans maritime and oil & gas operations including tanker mooring, pilotage, rig moving, ship handling, vessel inspections, terminal operations, and crude oil export operations.',
    image: '/Victor Aghedo.png',
    alt: 'Victor Aghedo - Professional headshot'
  }
]

export const TeamCards: React.FC = () => {
  const { isMd } = useBreakpoint()
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleReadMore = (member: TeamMember) => {
    setSelectedMember(member)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedMember(null)
  }

  const section: React.CSSProperties = {
    padding: isMd ? '80px 0' : '60px 0',
    width: '100%'
  }

  const container: React.CSSProperties = {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 16px'
  }

  const heading: React.CSSProperties = {
    textAlign: 'center',
    color: '#1E293B',
    fontWeight: 800,
    fontSize: isMd ? 36 : 28,
    margin: '0 0 16px',
    lineHeight: 1.2
  }

  const subheading: React.CSSProperties = {
    textAlign: 'center',
    color: '#6B7280',
    fontSize: isMd ? 18 : 16,
    margin: '0 0 48px',
    lineHeight: 1.5
  }

  const grid: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMd ? 'repeat(auto-fit, minmax(280px, 1fr))' : 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: isMd ? 32 : 24,
    alignItems: 'start'
  }

  const card: React.CSSProperties = {
    background: '#FFFFFF',
    borderRadius: 16,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    textAlign: 'center'
  }

  const imageContainer: React.CSSProperties = {
    width: '100%',
    height: isMd ? 320 : 280,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const image: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    transition: 'transform 0.3s ease'
  }

  const content: React.CSSProperties = {
    padding: isMd ? '24px 20px' : '20px 16px'
  }

  const name: React.CSSProperties = {
    color: '#1E293B',
    fontWeight: 700,
    fontSize: isMd ? 18 : 16,
    margin: '0 0 16px',
    lineHeight: 1.3
  }

  const button: React.CSSProperties = {
    background: '#00703C',
    color: '#FFFFFF',
    border: '1px solid transparent',
    borderRadius: 8,
    padding: '12px 24px',
    fontSize: isMd ? 14 : 13,
    fontWeight: 600,
    letterSpacing: 0.5,
    textTransform: 'uppercase' as const,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    width: '100%'
  }

  return (
    <section className="bg-dots" style={section}>
      <div style={container}>
        <h2 style={heading}>Meet Our Team</h2>
        <p style={subheading}>
          Our dedicated professionals bring years of experience and expertise to deliver exceptional maritime services.
        </p>
        
        <div style={grid}>
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              style={card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0, 0, 0, 0.12)'
                const img = e.currentTarget.querySelector('img')
                if (img) {
                  img.style.transform = 'scale(1.05)'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)'
                const img = e.currentTarget.querySelector('img')
                if (img) {
                  img.style.transform = 'scale(1)'
                }
              }}
            >
              <div style={imageContainer}>
                <LazyImage
                  src={member.image}
                  alt={member.alt}
                  style={image}
                />
              </div>
              <div style={content}>
                <h3 style={name}>{member.name}</h3>
                <button
                  style={button}
                  onClick={() => handleReadMore(member)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#00894E'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#00703C'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <TeamModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}
