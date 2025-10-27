import React, { useState } from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'

export const ContactForm: React.FC = () => {
  const { isMd } = useBreakpoint()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.')
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    })
  }

  const section: React.CSSProperties = {
    width: '100%',
    padding: isMd ? '80px 0' : '48px 0',
    background: '#f6f7f9',
    backgroundImage: 'radial-gradient(#d9dee7 1px, transparent 1px)',
    backgroundSize: '16px 16px'
  }

  const container: React.CSSProperties = {
    width: '100%',
    maxWidth: 900,
    margin: '0 auto',
    padding: '0 16px'
  }

  const content: React.CSSProperties = {
    background: '#FFFFFF',
    borderRadius: 16,
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
    padding: isMd ? '48px' : '32px',
    width: '100%'
  }

  const title: React.CSSProperties = {
    color: '#1E293B',
    fontWeight: 800,
    fontSize: isMd ? 28 : 24,
    margin: '0 0 8px',
    lineHeight: 1.2
  }

  const subtitle: React.CSSProperties = {
    color: '#6B7280',
    fontSize: isMd ? 16 : 14,
    margin: '0 0 32px',
    lineHeight: 1.5
  }

  const form: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  }

  const row: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMd ? '1fr 1fr' : '1fr',
    gap: 20
  }

  const inputGroup: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }

  const label: React.CSSProperties = {
    color: '#374151',
    fontWeight: 600,
    fontSize: 14,
    margin: 0
  }

  const input: React.CSSProperties = {
    padding: '12px 16px',
    border: '2px solid #E5E7EB',
    borderRadius: 8,
    fontSize: 16,
    color: '#1F2937',
    transition: 'border-color 0.3s ease',
    outline: 'none'
  }

  const textarea: React.CSSProperties = {
    ...input,
    minHeight: 120,
    resize: 'vertical' as const
  }

  const button: React.CSSProperties = {
    background: '#00703C',
    color: '#FFFFFF',
    border: '1px solid transparent',
    borderRadius: 8,
    padding: '16px 32px',
    fontSize: 16,
    fontWeight: 700,
    letterSpacing: 0.5,
    textTransform: 'uppercase' as const,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    alignSelf: 'flex-start'
  }

  return (
    <section style={section}>
      <div style={container}>
        <div style={content}>
          <h2 style={title}>Get In Touch</h2>
          <p style={subtitle}>
            Send us a message and we'll get back to you as soon as possible.
          </p>
          
          <form style={form} onSubmit={handleSubmit}>
            <div style={row}>
              <div style={inputGroup}>
                <label style={label} htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={input}
                  required
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#00703C'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#E5E7EB'
                  }}
                />
              </div>
              
              <div style={inputGroup}>
                <label style={label} htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={input}
                  required
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#00703C'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#E5E7EB'
                  }}
                />
              </div>
            </div>
            
            <div style={row}>
              <div style={inputGroup}>
                <label style={label} htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={input}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#00703C'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#E5E7EB'
                  }}
                />
              </div>
              
              <div style={inputGroup}>
                <label style={label} htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  style={input}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#00703C'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#E5E7EB'
                  }}
                />
              </div>
            </div>
            
            <div style={inputGroup}>
              <label style={label} htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                style={input}
                required
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#00703C'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB'
                }}
              />
            </div>
            
            <div style={inputGroup}>
              <label style={label} htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                style={textarea}
                required
                placeholder="Tell us about your project or how we can help you..."
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#00703C'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB'
                }}
              />
            </div>
            
            <button
              type="submit"
              style={button}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#00894E'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#00703C'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
