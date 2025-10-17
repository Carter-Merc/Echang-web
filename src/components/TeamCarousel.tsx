import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'

type Member = {
  name: string
  title: string
  bio: string
  photo: string
}

const COLORS = {
  navy: '#1E1B54',
  green: '#00703C',
  white: '#FFFFFF',
  gray: '#333333',
  purpleLight: '#E5E1FF',
}

const TEAM: Member[] = [
  {
    name: 'Victor Aghedo',
    title: 'GM, MARINE',
    bio: 'Expert with over forty years in the industry. Experience spans maritime and oil & gas operations including tanker mooring, pilotage, rig moving, ship handling, vessel inspections, terminal operations, and crude oil export operations.',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Monday Udo',
    title: 'MANAGING DIRECTOR',
    bio: 'Maritime professional with over twenty years of experience in the maritime and oil & gas sector: shipping & logistics management, marine and offshore operations, terminal operations, vessel safety management, and crude oil handling and export.',
    photo: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Victoria Alanza',
    title: 'FINANCE & RISK MANAGEMENT',
    bio: 'Treasury and finance professional covering treasury sales, FX and fixed income markets, risk management, derivatives and structured products, regulatory compliance, financial books, and stakeholder management.',
    photo: 'https://images.unsplash.com/photo-1544005316-04ce1f3d3fc3?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Oluwaseyi Oladunjoye',
    title: 'HEAD, OPERATIONS',
    bio: 'Mechanical Engineer with over eighteen years in oil & gas as operations, maintenance, reliability, and asset management professional; experienced in rotating equipment maintenance, asset reliability and operations readiness.',
    photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Umar Sani',
    title: 'CHAIRMAN',
    bio: 'Seasoned in executive management with extensive experience in portfolio management, development finance and revenue generation, asset management, capital markets, supply chain, treasury management, and pension & tax administration in Nigeria.',
    photo: 'https://images.unsplash.com/photo-1603415527035-56978ea1fd3b?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Tom FredFish',
    title: 'HEAD, PUBLIC AFFAIRS & GOVERNMENT RELATIONS',
    bio: 'Registered member of the Nigerian Union of Journalists (NUJ), brand specialist, public affairs commentator and media consultant to several organizations and personalities.',
    photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Frederick Adefarati',
    title: 'LEGAL COUNSEL',
    bio: 'Qualified solicitor and advocate of the Supreme Court of Nigeria with extensive legal publications. LLB (Uniben), BL (Nigerian Law School, 2008), and LLM in Oil & Gas Law (Swansea University, UK).',
    photo: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Theophilus Urua',
    title: 'CHARTERING MANAGER',
    bio: 'Marine logistics specialist with expertise in supply chain, procurement, vessel chartering and offshore operations; holds a National Diploma in Maritime Studies.',
    photo: 'https://images.unsplash.com/photo-1603415527035-56978ea1fd3b?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Salisu Aminu',
    title: 'HUMAN RESOURCES & TRAINING SERVICES',
    bio: 'Certified business development service provider and professional manager with over fifteen years of progressive experience.',
    photo: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Ide Owodiong-Idemeko',
    title: 'Non Executive Director',
    bio: 'Is a seasoned expert in the human resources value chain, project management, security management, external corporate relations, with over 38 years of experience in business leadership and management. He is a community developer with his contributions to society widely recognized with several awards.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
  }
  
]

export const TeamCarousel: React.FC = () => {
  const { isMd } = useBreakpoint()
  const itemsPerSlide = isMd ? 2 : 1

  const slides = useMemo(() => {
    const chunks: Member[][] = []
    for (let i = 0; i < TEAM.length; i += itemsPerSlide) {
      chunks.push(TEAM.slice(i, i + itemsPerSlide))
    }
    return chunks
  }, [itemsPerSlide])

  const [index, setIndex] = useState(0)
  const [hovering, setHovering] = useState(false)
  const timerRef = useRef<number | null>(null)
  const slideCount = slides.length

  useEffect(() => {
    if (index >= slideCount) setIndex(0)
  }, [slideCount])

  useEffect(() => {
    start()
    return stop
  }, [slideCount, hovering])

  function start() {
    stop()
    timerRef.current = window.setInterval(() => {
      if (!hovering) {
        setIndex((prev) => (prev + 1) % slideCount)
      }
    }, 60000) // extremely slow: 60s per slide
  }

  function stop() {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  const sectionStyle: React.CSSProperties = {
    width: '100%',
    padding: '56px 0',
    backgroundColor: '#f6f7f9',
    backgroundImage: 'radial-gradient(#d9dee7 1px, transparent 1px)',
    backgroundSize: '16px 16px',
  }
  const container: React.CSSProperties = {
    width: '100%',
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 16px',
  }

  const headerH2: React.CSSProperties = {
    textAlign: 'center',
    color: COLORS.navy,
    fontSize: 32,
    fontWeight: 800,
    margin: 0,
  }
  const subtitle: React.CSSProperties = {
    textAlign: 'center',
    color: COLORS.gray,
    maxWidth: 900,
    margin: '8px auto 32px',
    lineHeight: 1.6,
  }

  const viewportWrap: React.CSSProperties = { position: 'relative' }
  const viewport: React.CSSProperties = {
    overflow: 'hidden',
    width: '100%',
  }
  const track: React.CSSProperties = {
    display: 'flex',
    transition: 'transform 1000ms ease',
    transform: `translateX(-${(index * 100) / slideCount}%)`,
    width: `${slideCount * 100}%`,
  }
  const slideStyle: React.CSSProperties = {
    width: `${100 / slideCount}%`,
    display: 'grid',
    gridTemplateColumns: itemsPerSlide === 2 ? '1fr 1fr' : '1fr',
    gap: 24,
    padding: '8px 0',
  }

  const card: React.CSSProperties = {
    background: COLORS.white,
    borderRadius: 16,
    boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
    padding: 20,
    display: 'grid',
    gridTemplateColumns: '72px 1fr',
    gap: 16,
    position: 'relative',
    borderLeft: `6px solid ${COLORS.navy}`,
  }
  const avatarWrap: React.CSSProperties = { display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }
  const avatar: React.CSSProperties = {
    width: 64,
    height: 64,
    borderRadius: '50%',
    objectFit: 'cover',
  }
  const name: React.CSSProperties = { color: '#111827', fontWeight: 800, margin: '0 0 4px' }
  const role: React.CSSProperties = { color: COLORS.green, fontWeight: 800, fontSize: 12, letterSpacing: 0.5 }
  const bio: React.CSSProperties = { color: COLORS.gray, lineHeight: 1.6, marginTop: 6 }
  const quote: React.CSSProperties = {
    position: 'absolute',
    right: 16,
    bottom: 12,
    fontSize: 48,
    color: COLORS.purpleLight,
    lineHeight: 1,
    userSelect: 'none',
  }

  const dotsWrap: React.CSSProperties = { display: 'flex', justifyContent: 'center', gap: 10, marginTop: 16 }
  const dot = (active: boolean): React.CSSProperties => ({
    width: 12,
    height: 12,
    borderRadius: 9999,
    background: active ? COLORS.navy : '#c7cbe0',
    cursor: 'pointer',
  })

  const arrow: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: COLORS.white,
    border: '1px solid rgba(0,0,0,0.08)',
    borderRadius: 9999,
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
    cursor: 'pointer',
    color: COLORS.navy,
  }

  const prev = () => setIndex((i) => (i - 1 + slideCount) % slideCount)
  const next = () => setIndex((i) => (i + 1) % slideCount)

  return (
    <section
      style={sectionStyle}
      aria-label="Team members carousel"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div style={container}>
        <h2 style={headerH2}>Our Team Members</h2>
        <p style={subtitle}>Our Team Of Specialists Works With Our Partners To Develop, Execute And Deliver Projects Within Dynamically Adaptable Timelines.</p>

        <div style={viewportWrap}>
          <div style={viewport}>
            <div style={track}>
              {slides.map((group, i) => (
                <div key={i} style={slideStyle} aria-roledescription="slide" aria-label={`Slide ${i + 1} of ${slideCount}`}>
                  {group.map((m) => (
                    <article key={m.name} style={card}>
                      <div style={avatarWrap}>
                        <img src={m.photo} alt={`${m.name} – ${m.title}`} style={avatar} />
                      </div>
                      <div>
                        <h4 style={name}>{m.name}</h4>
                        <div style={role}>{m.title}</div>
                        <p style={bio}>{m.bio}</p>
                      </div>
                      <div style={quote}>”</div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
          {/* Arrows */}
          <button aria-label="Previous slide" onClick={prev} style={{ ...arrow, left: -6 }}>‹</button>
          <button aria-label="Next slide" onClick={next} style={{ ...arrow, right: -6 }}>›</button>
        </div>

        <div style={dotsWrap} role="tablist" aria-label="Carousel Pagination">
          {Array.from({ length: slideCount }).map((_, i) => (
            <div
              key={i}
              role="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              style={dot(i === index)}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
