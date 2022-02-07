import React from 'react'
import {
  Container,
  Content,
  StyledDescription,
  StyledEmoji,
  StyledHeader,
} from './styles'
import { Props } from './types'
import { ErrorEmoji } from '../../icons'

export const Notification = ({
  type,
  header,
  description = '',
}: Props): JSX.Element => {
  return (
    <Container type={type}>
      <StyledEmoji>
        <ErrorEmoji />
      </StyledEmoji>
      <Content>
        <StyledHeader>{header}</StyledHeader>
        {description && <StyledDescription>{description}</StyledDescription>}
      </Content>
    </Container>
  )
}
