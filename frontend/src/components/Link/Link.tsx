import React from 'react'
import { Link } from './styles'
import { Props } from './types'

export const StyledLink = ({ children, ...props }: Props): JSX.Element => {
  // @ts-ignore
  return <Link {...props}>{children}</Link>
}
