import React, { useEffect, useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Welcome } from '@/components/Welcome'
import { Contact } from '@/components/Contact'
import { TeamCarousel } from '@/components/TeamCarousel'
import { VisionMission } from '@/components/VisionMission'
import { SiteFooter } from '@/components/SiteFooter'
import { LogoLoader } from '@/components/LogoLoader'
import About from '@/pages/About'
import Values from '@/pages/Values'
import Services from '@/pages/Services'
import HSEPolicy from '@/pages/HSEPolicy'
import Team from '@/pages/Team'

const Home: React.FC = () => (
  <>
    <Hero />
    <Welcome />
    <Contact />
    <TeamCarousel />
    <VisionMission />
  </>
)

const App: React.FC = () => {
  const [route, setRoute] = useState<string>(typeof window !== 'undefined' ? window.location.hash : '')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const initial = setTimeout(() => setLoading(false), 1600)
    return () => clearTimeout(initial)
  }, [])

  useEffect(() => {
    const onHashChange = () => {
      setLoading(true)
      setRoute(window.location.hash)
      setTimeout(() => setLoading(false), 900)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const isAbout = route === '#/about'
  const isValues = route === '#/values'
  const isServices = route === '#/services'
  const isHSEPolicy = route === '#/hse-policy'
  const isTeam = route === '#/team'

  return (
    <div>
      {loading && <LogoLoader />}
      <Navbar />
      <main>
        {isAbout ? <About /> : isValues ? <Values /> : isServices ? <Services /> : isHSEPolicy ? <HSEPolicy /> : isTeam ? <Team /> : <Home />}
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
