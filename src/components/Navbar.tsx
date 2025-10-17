import React, { useEffect, useState } from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'

export const Navbar: React.FC = () => {
  const { isMd } = useBreakpoint()
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#/about' },
    { label: 'Our Values', href: '#/values' },
    { label: 'Services', href: '#/services' },
    { label: 'HSE Policy', href: '#/hse-policy' },
    { label: 'Team', href: '#/team' },
  ]

  useEffect(() => {
    const onHashChange = () => setOpen(false)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const navWrap: React.CSSProperties = isMd
    ? { display: 'flex', alignItems: 'center', gap: 24 }
    : { display: 'grid', gap: 16 }

  const headerStyle: React.CSSProperties = { position: 'sticky', top: 0, zIndex: 1000, background: '#FFFFFF', color: 'var(--text-muted)', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }

  return (
    <header style={headerStyle}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src="/echang_log3.png" alt="Echang" style={{ height: 40 }} />
        </div>
        {!isMd && (
          <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} style={{ background: 'transparent', border: 'none', fontSize: 22, cursor: 'pointer', color: '#333333' }}>☰</button>
        )}
        {isMd && (
          <nav style={navWrap}>
            {links.map((item) => (
              <a key={item.label} href={item.href} style={{ color: '#333333', fontWeight: 600, textDecoration: 'none' }}>{item.label}</a>
            ))}
            <button className="btn btn-accent" style={{ borderRadius: 8, background: 'var(--color-navy)' }}>Contact Us</button>
          </nav>
        )}
      </div>

      {!isMd && open && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000 }}>
          {/* Backdrop */}
          <div onClick={() => setOpen(false)} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.45)' }} />
          {/* Panel */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, background: '#FFFFFF', padding: 16, borderBottom: '1px solid #e5e7eb' }}>
            <nav style={navWrap}>
              {links.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setOpen(false)} style={{ color: '#333333', fontWeight: 600, textDecoration: 'none' }}>{item.label}</a>
              ))}
              <button className="btn btn-accent" onClick={() => setOpen(false)} style={{ borderRadius: 8, background: 'var(--color-navy)' }}>Contact Us</button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
