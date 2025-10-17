import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer style={{ background: 'var(--nav-bg)', color: 'var(--nav-text)', padding: '24px 0', marginTop: 48 }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <div>© {new Date().getFullYear()} Echang Integrated Services Limited</div>
        <nav style={{ display: 'flex', gap: 16 }}>
          <a href="#" style={{ color: 'var(--nav-text)' }}>Privacy</a>
          <a href="#" style={{ color: 'var(--nav-text)' }}>Terms</a>
          <a href="#" style={{ color: 'var(--nav-text)' }}>Contact</a>
        </nav>
      </div>
    </footer>
  )
}
