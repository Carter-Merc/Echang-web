import React from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { LazyImage } from './LazyImage'

interface TeamMember {
  name: string
  position: string
  description: string
  image: string
  alt: string
}

interface TeamModalProps {
  member: TeamMember | null
  isOpen: boolean
  onClose: () => void
}

export const TeamModal: React.FC<TeamModalProps> = ({ member, isOpen, onClose }) => {
  const { isMd } = useBreakpoint()

  if (!isOpen || !member) return null

  const overlay: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '20px'
  }

  const modal: React.CSSProperties = {
    background: '#FFFFFF',
    borderRadius: 16,
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    maxWidth: isMd ? 600 : '100%',
    width: '100%',
    maxHeight: '90vh',
    overflow: 'auto',
    position: 'relative'
  }

  const closeButton: React.CSSProperties = {
    position: 'absolute',
    top: 16,
    right: 16,
    background: 'rgba(0, 0, 0, 0.1)',
    border: 'none',
    borderRadius: '50%',
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: 20,
    color: '#666',
    zIndex: 1,
    transition: 'all 0.3s ease'
  }

  const content: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMd ? '200px 1fr' : '1fr',
    gap: isMd ? 32 : 24,
    padding: isMd ? '40px' : '24px'
  }

  const imageContainer: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const image: React.CSSProperties = {
    width: '100%',
    maxWidth: 180,
    height: 'auto',
    borderRadius: 12,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
  }

  const textContent: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }

  const name: React.CSSProperties = {
    color: '#1E293B',
    fontWeight: 800,
    fontSize: isMd ? 28 : 24,
    margin: '0 0 8px',
    lineHeight: 1.2
  }

  const position: React.CSSProperties = {
    color: '#00703C',
    fontWeight: 700,
    fontSize: isMd ? 18 : 16,
    margin: '0 0 20px',
    textTransform: 'uppercase' as const,
    letterSpacing: 0.5
  }

  const description: React.CSSProperties = {
    color: '#4B5563',
    fontSize: isMd ? 16 : 15,
    lineHeight: 1.6,
    margin: 0
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div style={overlay} onClick={handleOverlayClick}>
      <div style={modal}>
        <button
          style={closeButton}
          onClick={onClose}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.2)'
            e.currentTarget.style.color = '#333'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.1)'
            e.currentTarget.style.color = '#666'
          }}
        >
          ×
        </button>
        
        <div style={content}>
          <div style={imageContainer}>
            <LazyImage
              src={member.image}
              alt={member.alt}
              style={image}
            />
          </div>
          
          <div style={textContent}>
            <h2 style={name}>{member.name}</h2>
            <h3 style={position}>{member.position}</h3>
            <p style={description}>{member.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
