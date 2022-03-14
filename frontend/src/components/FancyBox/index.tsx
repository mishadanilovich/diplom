import React from 'react'
import { FancyBoxContainer, ThumbnailImage } from './styles'
import { Props } from './types'

export const FancyBox = ({ url }: Props) => {
  return (
    <FancyBoxContainer>
      <ThumbnailImage src={url} />
    </FancyBoxContainer>
  )
}
