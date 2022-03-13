import React from 'react'
import { TheoryContainer } from './styles'
import { Props } from './types'

export const Theory = ({ topic }: Props) => {
  return (
    <TheoryContainer>
      <h2>{topic.title}</h2>
    </TheoryContainer>
  )
}
