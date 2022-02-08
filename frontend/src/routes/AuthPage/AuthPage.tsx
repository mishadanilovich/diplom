import React from 'react'
import { AuthForm } from '../../components'
import { Logo } from '../../icons'

import { Container, LogoWrapper } from './styles'

export const AuthPage = (): JSX.Element => {
  return (
    <Container>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <AuthForm />
    </Container>
  )
}
