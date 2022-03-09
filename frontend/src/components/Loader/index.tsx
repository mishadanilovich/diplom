import React from 'react'
import { Container } from './styles'
import { Props } from './types'
import { Logo } from '../../icons'

export const Loader = ({ children, ...props }: Props): JSX.Element => {
  // @ts-ignore
  return <Container {...props}>{children || <Logo />}</Container>
}
