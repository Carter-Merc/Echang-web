import React from 'react'
import { TeamHero } from '@/components/TeamHero'
import { TeamCards } from '@/components/TeamCards'
import { ContactBanner } from '@/components/ContactBanner'

const Team: React.FC = () => {
  return (
    <div>
      <TeamHero />
      <TeamCards />
      <ContactBanner />
    </div>
  )
}

export default Team
