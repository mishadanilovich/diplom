import React from 'react'
import { ActionsContainer, Container } from './styles'
import { Props } from './types'
import { actions } from './constants'
import { useNavigate } from 'react-router-dom'
import { Button } from '../Button'

export const TopicCard = ({ topic }: Props) => {
  const navigate = useNavigate()

  return (
    <Container>
      <h2 style={{ marginBottom: 0 }}>{topic.title}</h2>
      <ActionsContainer>
        {actions(navigate).map((el, i) => (
          <Button key={i} onClick={el.action} style={{ height: '60px' }}>
            {el.title}
          </Button>
        ))}
      </ActionsContainer>
    </Container>
  )
}
