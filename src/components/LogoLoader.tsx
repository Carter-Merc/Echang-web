import React from 'react'

export const LogoLoader: React.FC = () => {
  const backdrop: React.CSSProperties = {
    position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: '#FFFFFF', zIndex: 2000
  }

  const imgStyle: React.CSSProperties = {
    width: 120, height: 'auto', animation: 'pulse-scale 1.2s ease-in-out infinite'
  }

  return (
    <div style={backdrop} aria-label="Loading" role="status">
      <style>
        {`
        @keyframes pulse-scale {
          0% { transform: scale(0.9); opacity: 0.85; }
          50% { transform: scale(1.06); opacity: 1; }
          100% { transform: scale(0.9); opacity: 0.85; }
        }
        `}
      </style>
      <img src="/echang_log3.png" alt="Echang logo" style={imgStyle} />
    </div>
  )
}
