import React from 'react'
import { HSEHero } from '@/components/HSEHero'
import { HSESPolicySection } from '@/components/HSESPolicySection'
import { ContactBanner } from '@/components/ContactBanner'

const HSEPolicy: React.FC = () => {
  return (
    <div>
      <HSEHero />
      <HSESPolicySection />
      <ContactBanner />
    </div>
  )
}

export default HSEPolicy
