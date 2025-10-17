import React from 'react'
import { ValuesHero } from '@/components/ValuesHero'
import { CompanyValues } from '@/components/CompanyValues'
import { ContactBanner } from '@/components/ContactBanner'

const Values: React.FC = () => {
  return (
    <div>
      <ValuesHero />
      <CompanyValues />
      <ContactBanner />
    </div>
  )
}

export default Values
