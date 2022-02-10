import React from 'react'
import { RightContainer, StyledHeader } from './styles'
import { IconButton } from '../IconButton'
import { ACCOUNT_CIRCLE } from '../../icons/constants'

export const Header = () => {
  return (
    <StyledHeader>
      <RightContainer>
        <IconButton iconName={ACCOUNT_CIRCLE} />
      </RightContainer>
    </StyledHeader>
  )
}
