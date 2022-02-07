import React from 'react'
import styled from 'styled-components'
import { AuthForm } from '../components/AuthForm'
import { StyledLink } from '../components/Link'
import { Logo } from '../icons'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  row-gap: 20px;
`

export const AuthPage = (): JSX.Element => {
  return (
    <Container>
      <Logo />
      <AuthForm />
      <StyledLink href="https://github.com/mishadanilovich">
        @mishadanilovich
      </StyledLink>
    </Container>
  )
}
