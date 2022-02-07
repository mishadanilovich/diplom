import React from 'react'

import { Container, Divider, StyledAction, StyledActionItem } from './styles'

import { Props } from './types'

export const Dropdown = ({ actions, className }: Props): JSX.Element => {
  return (
    <Container className={className}>
      {actions.map((action, index) => (
        <React.Fragment key={index}>
          {action.isDestructive && <Divider />}
          <StyledActionItem isDestructive={action.isDestructive}>
            <StyledAction className="action-button">{action.name}</StyledAction>
          </StyledActionItem>
        </React.Fragment>
      ))}
    </Container>
  )
}
