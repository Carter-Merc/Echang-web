import React from 'react'
import { ServicesHero } from '@/components/ServicesHero'
import { ServicesDetail } from '@/components/ServicesDetail'
import { ServicesDetailDotted } from '@/components/ServicesDetailDotted'
import { ServicesDetailPilotage } from '@/components/ServicesDetailPilotage'
import { ServicesDetailLogistics } from '@/components/ServicesDetailLogistics'
import { ServicesDetailEngineering } from '@/components/ServicesDetailEngineering'
import { ServicesDetailData } from '@/components/ServicesDetailData'
import { ServicesDetailTraining } from '@/components/ServicesDetailTraining'
import { ContactBanner } from '@/components/ContactBanner'

const Services: React.FC = () => {
  return (
    <div>
      <ServicesHero />
      <ServicesDetail />
      <ServicesDetailDotted />
      <ServicesDetailPilotage />
      <ServicesDetailLogistics />
      <ServicesDetailEngineering />
      <ServicesDetailData />
      <ServicesDetailTraining />
      <ContactBanner />
    </div>
  )
}

export default Services
