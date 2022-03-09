import React, { useCallback } from 'react'
import { Props } from './types'
import { DefaultAvatar, StyledAvatar, StyledImg } from './styles'

const capitalizeLetter = (str: string) => str?.[0]?.toLocaleUpperCase()

export const Avatar = ({ imgUrl = '', firstName, lastName }: Props) => {
  const getAvatar = useCallback(() => {
    if (imgUrl) return <StyledImg src={imgUrl} />
    if (firstName && lastName)
      return (
        <>
          {capitalizeLetter(firstName)}
          {capitalizeLetter(lastName)}
        </>
      )
    return <DefaultAvatar />
  }, [firstName, lastName, imgUrl])

  return <StyledAvatar>{getAvatar()}</StyledAvatar>
}
