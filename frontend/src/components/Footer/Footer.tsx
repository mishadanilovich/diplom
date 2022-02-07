import React from 'react'
import { Button, GitHubLink } from '../../components'
import { Format } from './components'

import { FooterContainer } from './styles'
import { SUBMIT_CONSOLE } from '../../constants'

export const Footer = (): JSX.Element => {
  return (
    <FooterContainer>
      <Button type="submit">{SUBMIT_CONSOLE}</Button>
      <GitHubLink />
      <Format />
    </FooterContainer>
  )
}
