import React from 'react'
import { Logo } from '../../icons'

import { Container } from './styles'
import { RegisterForm } from '../../components/RegisterForm'

export const AuthPage = (): JSX.Element => {
  return (
    <Container>
      <Logo />
      <RegisterForm />
    </Container>
  )
}
