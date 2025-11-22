import React, { useMemo, useState } from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'

const COLORS = {
  navy: '#1E1B54',
  teal: '#0d9488',
  white: '#ffffff',
  grayLight: '#e5e7eb',
  grayText: '#cbd5e1',
}

const logos = [
  { alt: 'Safe Transfer', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/OOH_placeholder.svg/320px-OOH_placeholder.svg.png' },
  { alt: 'Nigerian Ports Authority', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Placeholder_no_text.svg/320px-Placeholder_no_text.svg.png' },
  { alt: 'NUPRC', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Crystal_Clear_app_kgpg.svg/320px-Crystal_Clear_app_kgpg.svg.png' },
  { alt: 'NIMASA', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/320px-Placeholder_view_vector.svg.png' },
  { alt: 'NipeX', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/No-image-available.png/320px-No-image-available.png' },
  { alt: 'Viking', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/No-image-available.png/320px-No-image-available.png' },
]

export const SiteFooter: React.FC = () => {
  const { isMd } = useBreakpoint()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const ok = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email) 
    if (!ok) {
      setError('Enter a valid email')
      return
    }
    setError('')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2500)
  }

  const colsStyle: React.CSSProperties = useMemo(() => ({
    display: 'grid',
    gridTemplateColumns: isMd ? '1fr 1fr 1fr 1fr' : '1fr',
    gap: isMd ? 24 : 16,
  }), [isMd])

  return (
    <footer>
      {/* Footer main in Grey background */}
      <section style={{ background: COLORS.grayLight, color: '#1E293B', padding: isMd ? '48px 0' : '32px 0', position: 'relative' }}>
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <div style={colsStyle}>
            {/* Company */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <img src="/echang_log3.jpg" alt="Echang" style={{ height: 42 }} />
              </div>
              <p style={{ color: '#475569', marginTop: 12 }}>Get us involved today. Give us a call or send us a message.</p>
            </div>

            {/* Links */}
            <div>
              <h4 style={{ margin: '0 0 8px', color: '#1E293B' }}>EIS</h4>
              <nav style={{ display: 'grid', gap: 6 }}>
                {[
                  { label: 'About Us', href: '#' },
                  { label: 'Services', href: '#' },
                  { label: 'Our Values', href: '#' },
                  { label: 'Contact Us', href: '#' },
                ].map((l) => (
                  <a key={l.label} href={l.href} style={{ color: COLORS.teal, textDecoration: 'none' }} onMouseEnter={(e) => ((e.currentTarget.style.color = '#10b981'))} onMouseLeave={(e) => ((e.currentTarget.style.color = COLORS.teal))}>{l.label}</a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ margin: '0 0 8px', color: '#1E293B' }}>Head Office</h4>
              <address style={{ color: '#475569', fontStyle: 'normal' }}>
                Suite 41, Ikorodu Crescent, Dolphin Estate<br />
                Ikoyi, Lagos State, Nigeria
              </address>
              <div style={{ marginTop: 8 }}>
                <a href="mailto:contact@echang.com.ng" style={{ color: COLORS.teal, textDecoration: 'none' }}>contact@echang.com.ng</a><br />
                <a href="mailto:eisldesk@gmail.com" style={{ color: COLORS.teal, textDecoration: 'none' }}>eisldesk@gmail.com</a>
              </div>
              <div style={{ marginTop: 8, color: '#475569' }}>
                <a href="tel:+2348030583531" style={{ color: '#475569', textDecoration: 'none' }}>+234803 0583 531</a><br />
                <a href="tel:+2347060472367" style={{ color: '#475569', textDecoration: 'none' }}>+234706 0472 367</a>
              </div>
            </div>

            {/* Abuja Office */}
            <div>
              <h4 style={{ margin: '0 0 8px', color: '#1E293B' }}>Abuja Office</h4>
              <address style={{ color: '#475569', fontStyle: 'normal' }}>
                GF1 AGA Memorial Complex<br />
                No. 16 Nkwere Street, Area 11 Garki<br />
                Abuja, Nigeria
              </address>
              <div style={{ marginTop: 8, color: '#475569' }}>
                <a href="tel:+2348036888230" style={{ color: '#475569', textDecoration: 'none' }}>+234803 6888 230</a><br />
                <a href="tel:+2347060472367" style={{ color: '#475569', textDecoration: 'none' }}>+234706 0472 367</a>
              </div>
            </div>

            {/* UK Contact */}
            <div>
              <h4 style={{ margin: '0 0 8px', color: '#1E293B' }}>UK Contact</h4>
              <address style={{ color: '#475569', fontStyle: 'normal' }}>
                32 Argyle Road, Southampton<br />
                Hampshire, SO14 0BQ<br />
                United Kingdom
              </address>
              <div style={{ marginTop: 8, color: '#475569' }}>
                <a href="tel:+447555733413" style={{ color: '#475569', textDecoration: 'none' }}>+44 755 573 3413</a>
              </div>
            </div>
            
          </div>

          <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: 24, paddingTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
            <small style={{ color: '#6b7280' }}>Handel Core IT.</small>
            <button aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ width: 40, height: 40, borderRadius: 9999, background: 'rgba(0,0,0,0.6)', color: COLORS.white, border: 'none', cursor: 'pointer' }}>↑</button>
          </div>
        </div>
      </section>
    </footer>
  )
}