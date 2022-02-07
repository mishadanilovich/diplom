import React from 'react'
import { GITHUB_LINK } from '../../constants'
import { StyledLink } from '../Link'

export const GitHubLink = (): JSX.Element => {
  return (
    <StyledLink href="https://github.com/mishadanilovich">
      {GITHUB_LINK}
    </StyledLink>
  )
}
