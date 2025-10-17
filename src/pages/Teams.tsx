import React from 'react'
import { TeamHero } from '@/components/TeamHero'
import { ContactBanner } from '@/components/ContactBanner'

const Teams: React.FC = () => {
  return (
    <div>
      <TeamHero />
      <ContactBanner />
    </div>
  )
}

export default Teams

