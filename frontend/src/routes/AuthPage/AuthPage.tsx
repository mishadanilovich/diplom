import React from 'react'
import { Logo } from '../../icons'

import { Container } from './styles'
import { AuthForm } from '../../components'

export const AuthPage = (): JSX.Element => {
  return (
    <Container>
      <Logo />
      <AuthForm />
    </Container>
  )
}
