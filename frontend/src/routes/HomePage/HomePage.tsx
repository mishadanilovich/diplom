import React from 'react'
import { Header } from '../../components'
import { Container, SectionItem, SectionsContainer } from './styles'

const mockArray = [{ title: 'Теория графов' }, { title: 'Линейная система' }]

export const HomePage = () => {
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
