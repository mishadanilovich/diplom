import React, { useCallback } from 'react'
import { Props } from './types'
import { StyledImg } from './styles'

const Avtar = ({ imgUrl = '', firstName, lastName }: Props) => {
  const capitalizeLetter = useCallback(
    (str) => str?.[0].toLocaleUpperCase(),
    []
  )

  if (imgUrl) {
    return <StyledImg />
  }
  return (
    <div>
      {capitalizeLetter(firstName)}
      {capitalizeLetter(lastName)}
    </div>
  )
}

export default Avtar
