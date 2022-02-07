import React from 'react'
import { Spinner } from '../../icons'
import { StyledButton } from './styles'
import { Props } from './types'

export const Button = ({
  isLoading,
  children,
  ...props
}: Props): JSX.Element => {
  return (
    <StyledButton {...props}>
      {!isLoading ? children : <Spinner />}
    </StyledButton>
  )
}

Button.defaultProps = {
  isLoading: false,
}
