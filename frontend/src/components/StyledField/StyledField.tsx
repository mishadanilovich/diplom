import React from 'react'
import {
  StyledContainer,
  StyledField,
  StyledLabel,
  OptionalLabel,
  StyledDiv,
  StyledErrorText,
} from './styles'
import { Props } from './types'

const StyledInput = React.memo(
  ({
    isOptional = false,
    textLabel,
    isError = false,
    errorText,
    id,
    ...props
  }: Props): JSX.Element => {
    return (
      <StyledContainer>
        <StyledDiv isError={isError}>
          {textLabel && <StyledLabel htmlFor={id}>{textLabel}</StyledLabel>}
          {isOptional && <OptionalLabel>Опцонально</OptionalLabel>}
        </StyledDiv>
        <StyledField id={id} name="login" isError={isError} {...props} />
        {isError && errorText && <StyledErrorText>{errorText}</StyledErrorText>}
      </StyledContainer>
    )
  }
)

StyledInput.displayName = 'StyledInput'

export { StyledInput }
