import React, { useState } from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { LazyImage } from './LazyImage'
import { TeamModal } from './TeamModal'

interface TeamMember {
  name: string
  position: string
  description: string
  image: string
  alt: string
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Mallam Umar Sani',
    position: 'CHAIRMAN',
    description: 'Is a seasoned executive management professional with many years of experience in portfolio management, development finance & revenue generation, asset management, capital markets, supply chain management, treasury management, pension & tax administration in Nigeria. He is a graduate of BSc. Accounting from Ahmadu Bello University Zaria, and a Master\'s degree from the same university, Post Graduate Programs in AI and Machine Learning & Data Science, USA. He is a graduate of the Energy Project Finance – oil, gas and power program of the EuroMoney Training EMEA. He has attended various leadership training and courses including the Leadership Program – creating public value at Harvard University (Harvard Kennedy School of Government) USA, and the Building Capability by Delivering Results Program at the Harvard Center for International Development, Harvard University USA. He is involved in many oil & gas transactions both in the Upstream & Downstream sector and is an expert in resource mobilization with local and international networks within the financial and energy industry.',
    image: '/Mallam Umar Sani t.jpg',
    alt: 'Mallam Umar Sani - Professional headshot'
  },
  {
    name: 'Monday Udo',
    position: 'MANAGING DIRECTOR',
    description: 'Is a maritime professional with over twenty years of industry experience in the maritime and oil & gas sector. He is trained and experienced in shipping & logistics management, marine and offshore operations, terminal operations, vessel safety management, crude oil handling and export (commercial), with diligence performance. His personal values have been accountability, transparency, honesty, and equity of treatment. He is a United Kingdom licensed marine officer who attended Maritime Academy of Nigeria, Fleetwood Nautical Campus, United Kingdom. He holds a Higher National Diploma in Nautical Science from North East Scotland College, United Kingdom, a Postgraduate Diploma in Maritime Administration & Management and a Master\'s Degree in Business Administration (MBA) from The University of Lagos, Nigeria. He is a member of The Nigerian Institute of Shipping and The Nautical Institute, United Kingdom. He has worked with Shell Nigeria Exploration & Production Company (SNEPCO), BW Offshore and other companies in Nigeria and the United Kingdom.',
    image: '/public/Monday Udo, MNI (1).png',
    alt: 'Monday Udo - Professional headshot'
  },
  {
    name: 'Victor Aghedo',
    position: 'GM, MARINE',
    description: 'Is an expert with over forty years in the industry. His experience spans various maritime and oil & gas operations including tanker mooring, pilotage, rig moving, ship handling, vessel inspections, terminal operations, crude oil export operations, amongst other experiences. He is a master mariner with a United Kingdom License. He attended South Tyneside College, United Kingdom, Fleetwood Nautical Campus, United Kingdom, and Ladoke Akintola University of Technology, Oyo, Nigeria. He started his career with the Nigerian National Shipping Line (NNSL), serving on different tankers as a master. He worked as a loading master and marine coordinator with Shell Petroleum Development Company (SPDC) and as a consultant for pilotage/mooring master operations with various companies.',
    image: '/Victor Aghedo.jpg',
    alt: 'Victor Aghedo - Professional headshot'
  },
  {
    name: 'Theophilus Urua, MILT',
    position: 'CHARTERING MANAGER',
    description: 'Has a National Diploma in Maritime Transport and Business Studies from the Maritime Academy of Nigeria, a Bachelor of Science degree in Accounting from the University of Uyo, Nigeria and a Master\'s degree in International Maritime Studies, Ship and Shipping Management from Southampton Solent University, United Kingdom. He is a member of The Chartered Institute of Logistics and Transport, United Kingdom. Is a marine logistics specialist and expert in supply chain management, procurement management, vessel chartering, goods and services for marine operations. He has worked in various shipping and logistics organizations around the world in varying capacities.',
    image: '/Theophilus Urua, MILT.jpg',
    alt: 'Theophilus Urua, MILT - Professional headshot'
  },
  {
    name: 'Salisu Aminu, FIMC, AMNIM',
    position: 'HUMAN RESOURCES & TRAINING SERVICES',
    description: 'Is a certified national business development service provider (BDSP), certified management consultant (CMC), and a professional manager (MNIM) with over fifteen years of progressive experience in the corporate world. He is a certified member of various local and international professional bodies. He holds a Bachelor\'s Degree in Economics from Ahmadu Bello University, Kaduna, Nigeria, a Postgraduate Diploma in Management Studies from Obafemi Awolowo University, Osun, Nigeria, a Postgraduate Diploma in Education from Usmanu Danfodiyo University, Sokoto, Nigeria, and multiple Master\'s Degrees from Ahmadu Bello University and Nigerian Defence Academy. He worked with the Nigeria Tobacco Company Plc (BAT Nig. Ltd), Heartbeat Investment Ltd, and as an assistant general manager operation with ICT Consulting Firm.',
    image: '/Salisu Aminu, FIMC, AMNIM.jpg',
    alt: 'Salisu Aminu, FIMC, AMNIM - Professional headshot'
  },
  {
    name: 'Victoria Alanza',
    position: 'FINANCE AND RISK MANAGEMENT',
    description: 'Is a treasury and finance professional in the banking and fintech space with expertise in treasury sales, FX and fixed income markets, risk management, derivatives and structured products, regulatory compliance, financial books management and stakeholder management. She has over fourteen years of experience working with leading Pan-African financial services institutions. She holds a Bachelor\'s Degree in Pure and Industrial Chemistry from Nnamdi Azikiwe University, Awka, Anambra, Nigeria, and a Bachelor\'s Degree in Applied Accounting from Oxford Brookes University, Oxford, United Kingdom. She is a Charter holder (member) of the Association of Certified Chartered Accountants (ACCA). She has worked with Zenith Bank Plc in various positions and departments, Leatherback Limited, and Wylout Designs Limited.',
    image: 'public/Victoria Alanza (1).png',
    alt: 'Victoria Alanza - Professional headshot'
  },
  {
    name: 'Oluwaseyi Oladunjoye',
    position: 'HEAD, OPERATIONS',
    description: 'He holds a Bachelor\'s Degree in Mechanical Engineering from the University of Sunderland, United Kingdom and a Master\'s Degree in Petroleum Production Engineering from Robert Gordon University, United Kingdom. He is a member of Nigeria Society of Engineers (NSE) and member Council for the Regulation of Engineering in Nigeria (COREN). Is a mechanical engineer and has spent over eighteen years in the oil & gas industry as operations, maintenance, reliability, and asset management professional with experience in rotating equipment maintenance, asset reliability and operations readiness. He has served in several technical and leadership roles and started his career with Shell in Nigeria, subsequently as a reliability specialist and mechanical professional to a multinational mining company in North America.',
    image: '/Oluwaseyi Oladunjoye.jpg',
    alt: 'Oluwaseyi Oladunjoye - Professional headshot'
  },
  {
    name: 'Happiness Nwagwu',
    position: 'SAFETY & COMPLIANCE',
    description: 'Is a health and safety professional with experience in road transport safety management, project management, safety systems development and implementation, hazard identification and risk assessment, policy crafting, contractors\' management, process improvement, JSA/JHA, PTW, leadership and team building, audit and inspection, emergency response, and root cause analysis. She has served in different capacities and organizations as HSE officer, safety auditor, and safety supervisor. She holds a Higher National Diploma in Environmental Health Technology from Rivers State College of Health Science and Technology, Port Harcourt, and a Post Graduate Diploma in Maritime Environmental Studies from University of Lagos. She has attended various professional training and certifications including NEBOSH, IOSH, ISPON, ISO 45001, and is a Member of the Institute of Safety Professionals of Nigeria (ISPON).',
    image: '/Happiness Nwagwu.jpg',
    alt: 'Happiness Nwagwu - Professional headshot'
  },
  {
    name: 'Tom Fredfish',
    position: 'PUBLIC AFFAIRS AND PUBLIC RELATIONS',
    description: 'Is a registered member of the Nigerian Union of Journalists (NUJ), a brand specialist, public affairs commentator and has been a media consultant to several media organizations and personalities. He possesses a National Diploma in Personnel Management, a Bachelor\'s Degree in Policy and Administrative Study from The University of Calabar, Cross River, Nigeria, and a Postgraduate Diploma in Journalism, a Master\'s Degree in International Relations, and a PhD in International Relations from the International Institute of Journalism and the University of Uyo, Akwa Ibom, Nigeria. He is a fellow of the Institute of Professional Managers and Administrators of Nigeria, a senior member of the Chartered Institute of Diplomacy and Management, and a member of the National Political Science Association. He has spent over fourteen years in media practice. He has been the editor-in-chief of Pioneer Extra Magazine, publisher of Pioneer Applause Magazine, publisher of Real News Newspaper, editor-in-chief of Peace letters Newspaper, editor of Politics Today Magazine, and a host of other media channels.',
    image: '/Tom Fredfish, PhD (1).png',
    alt: 'Tom Fredfish - Professional headshot'
  },
  {
    name: 'Frederick Adefarati',
    position: 'LEGAL COUNSEL',
    description: 'Is a qualified and practising solicitor and advocate of the supreme court of Nigeria, with extensive legal literature to his credit. He holds a Bachelor\'s Degree in Law from the University of Benin, Nigeria. He attended the Nigerian Law School and was called to the Nigerian Bar in 2008. Frederick obtained a Master\'s Degree in Oil & Gas Law from Swansea University, United Kingdom. He has attended various local and international certified training courses as part of his continuous legal education. He has garnered considerable experience in corporate and commercial practice, company secretariat, energy and natural resources, oil & gas, shipping and maritime, real estate and succession planning, business advisory, and food & agriculture matters.',
    image: '/Frederick Adefarati.jpg',
    alt: 'Frederick Adefarati - Professional headshot'
  },
  {
    name: 'Ide Owodiong-Idemeko',
    position: 'NON EXECUTIVE DIRECTOR',
    description: 'Is an accomplished human resources, security and external relations manager, political scientist, administrator, change agent, project manager, community service leader, advocate and public speaker. He is considered an expert in human resources, business leadership, planning and strategy, compensation and benefits design and administration, policy development and administration, performance management, and organizational effectiveness. He holds a BSc degree in Political Science & Public Administration from University of Cross River State and MSc degree in Comparative Politics from University of Ibadan. He has extensive professional and managerial studies from top institutions including INSEAD School of Business and Thunderbird School of Global Management. He is a Chartered Human Resources Practitioner and Fellow of Chartered Institute of Personnel Management of Nigeria (CIPMN). He possesses over 30 years of experience in leadership and management, with more than 20 years at Supervisory and Senior Managerial levels working for Exxon Mobil in Nigeria, Europe, Middle East and the Americas.',
    image: 'public/Mkpisong (Obong) (1).png',
    alt: 'Ide Owodiong-Idemeko - Professional headshot'
  }
]

export const TeamCards: React.FC = () => {
  const { isMd } = useBreakpoint()
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleReadMore = (member: TeamMember) => {
    setSelectedMember(member)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedMember(null)
  }

  const section: React.CSSProperties = {
    padding: isMd ? '80px 0' : '60px 0',
    width: '100%'
  }

  const container: React.CSSProperties = {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 16px'
  }

  const heading: React.CSSProperties = {
    textAlign: 'center',
    color: '#1E293B',
    fontWeight: 800,
    fontSize: isMd ? 36 : 28,
    margin: '0 0 16px',
    lineHeight: 1.2
  }

  const subheading: React.CSSProperties = {
    textAlign: 'center',
    color: '#6B7280',
    fontSize: isMd ? 18 : 16,
    margin: '0 0 48px',
    lineHeight: 1.5
  }

  const grid: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMd ? 'repeat(auto-fit, minmax(280px, 1fr))' : 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: isMd ? 32 : 24,
    alignItems: 'start'
  }

  const card: React.CSSProperties = {
    background: '#FFFFFF',
    borderRadius: 16,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    textAlign: 'center'
  }

  const imageContainer: React.CSSProperties = {
    width: '100%',
    height: isMd ? 320 : 280,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const image: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    transition: 'transform 0.3s ease'
  }

  const content: React.CSSProperties = {
    padding: isMd ? '24px 20px' : '20px 16px'
  }

  const name: React.CSSProperties = {
    color: '#1E293B',
    fontWeight: 700,
    fontSize: isMd ? 18 : 16,
    margin: '0 0 16px',
    lineHeight: 1.3
  }

  const button: React.CSSProperties = {
    background: '#00703C',
    color: '#FFFFFF',
    border: '1px solid transparent',
    borderRadius: 8,
    padding: '12px 24px',
    fontSize: isMd ? 14 : 13,
    fontWeight: 600,
    letterSpacing: 0.5,
    textTransform: 'uppercase' as const,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    width: '100%'
  }

  return (
    <section className="bg-dots" style={section}>
      <div style={container}>
        <h2 style={heading}>Meet Our Team</h2>
        <p style={subheading}>
          Our dedicated professionals bring years of experience and expertise to deliver exceptional maritime services.
        </p>
        
        <div style={grid}>
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              style={card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0, 0, 0, 0.12)'
                const img = e.currentTarget.querySelector('img')
                if (img) {
                  img.style.transform = 'scale(1.05)'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)'
                const img = e.currentTarget.querySelector('img')
                if (img) {
                  img.style.transform = 'scale(1)'
                }
              }}
            >
              <div style={imageContainer}>
                <LazyImage
                  src={member.image}
                  alt={member.alt}
                  style={image}
                />
              </div>
              <div style={content}>
                <h3 style={name}>{member.name}</h3>
                <button
                  style={button}
                  onClick={() => handleReadMore(member)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#00894E'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#00703C'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <TeamModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}
