import React from 'react'
import { AuthForm } from '../../components'
import { Logo } from '../../icons'

import { Container } from './styles'

export const AuthPage = (): JSX.Element => {
  return (
    <Container>
      <Logo />
      <AuthForm />
    </Container>
  )
}
