import React from 'react'
import { Logo } from '../../icons'
import { StyledHeader, Title } from './styles'
import { APPLICATION_NAME } from '../../constants'
import { HeaderAction } from './components'

export const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <Title>
        <Logo />
        <p>{APPLICATION_NAME}</p>
      </Title>
      <HeaderAction />
    </StyledHeader>
  )
}
