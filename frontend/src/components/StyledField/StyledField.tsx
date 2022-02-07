import React from 'react'
import { StyledField, StyledLabel, OptionalLabel, StyledDiv } from './styles'
import { Props } from './types'

const StyledInput = React.memo(
  ({
    isOptional = false,
    textLabel,
    isError = false,
    id,
    ...props
  }: Props): JSX.Element => {
    return (
      <>
        <StyledDiv isError={isError}>
          {textLabel && <StyledLabel htmlFor={id}>{textLabel}</StyledLabel>}
          {isOptional && <OptionalLabel>Опцонально</OptionalLabel>}
        </StyledDiv>
        <StyledField id={id} name="login" isError={isError} {...props} />
      </>
    )
  }
)

StyledInput.displayName = 'StyledInput'

export { StyledInput }
