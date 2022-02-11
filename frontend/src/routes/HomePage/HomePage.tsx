import React from 'react'
import { Header } from '../../components'
import { Container, SectionItem, SectionsContainer } from './styles'
import { useAppSelector } from '../../store/hooks'
import { RootState } from '../../store/store'

const mockArray = [{ title: 'Теория графов' }, { title: 'Линейная система' }]

export const HomePage = () => {
  const { error, token } = useAppSelector((state: RootState) => state.auth)

  console.log(error, token)

  return (
    <Container>
      <Header />
      <SectionsContainer>
        {mockArray &&
          mockArray.map((section, i) => (
            <SectionItem key={i}>{section.title}</SectionItem>
          ))}
      </SectionsContainer>
    </Container>
  )
}
