import React from 'react'
import { ActionsContainer } from './styles'
import { Props } from './types'
import { actions } from './constants'
import { useNavigate } from 'react-router-dom'
import { Button } from '../Button'

export const TopicCard = ({ topic }: Props) => {
  const navigate = useNavigate()

  return (
    <div style={{ height: '100%' }}>
      <h2>{topic.title}</h2>
      <ActionsContainer>
        {actions(navigate).map((el, i) => (
          <Button key={i} onClick={el.action}>
            {el.title}
          </Button>
        ))}
      </ActionsContainer>
    </div>
  )
}
