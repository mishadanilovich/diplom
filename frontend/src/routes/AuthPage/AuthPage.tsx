import React from 'react'
import { AuthForm, GitHubLink } from '../../components'
import { Logo } from '../../icons'

import { Container } from './styles'

export const AuthPage = (): JSX.Element => {
  return (
    <Container>
      <Logo />
      <AuthForm />
      <GitHubLink />
    </Container>
  )
}
