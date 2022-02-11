import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components'
import { SectionItem, SectionsContainer } from './styles'
import { useAppSelector } from '../../store/hooks'
import { RootState } from '../../store/store'
import * as routes from '../../routes/constantsRoutes'

const mockArray = [{ title: 'Теория графов' }, { title: 'Линейная система' }]

export const HomePage = () => {
  const navigate = useNavigate()
  const { error, token } = useAppSelector((state: RootState) => state.auth)

  console.log(error, token)

  const handleSectionClick = () => {
    navigate(routes.ROADMAP)
  }

  return (
    <div className="layout-container">
      <Header />
      <SectionsContainer>
        {mockArray &&
          mockArray.map((section, i) => (
            <SectionItem key={i} onClick={handleSectionClick}>
              {section.title}
            </SectionItem>
          ))}
      </SectionsContainer>
    </div>
  )
}
