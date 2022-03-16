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
    children,
    ...props
  }: Props): JSX.Element => {
    return (
      <StyledContainer>
        {!(!textLabel && !isOptional) && (
          <StyledDiv isError={isError}>
            {textLabel && <StyledLabel htmlFor={id}>{textLabel}</StyledLabel>}
            {isOptional && <OptionalLabel>Опцонально</OptionalLabel>}
          </StyledDiv>
        )}
        <div style={{ position: 'relative' }}>
          <StyledField
            id={id}
            name="login"
            autocomplete="off"
            isError={isError}
            {...props}
          />
          {children}
        </div>
        {isError && errorText && <StyledErrorText>{errorText}</StyledErrorText>}
      </StyledContainer>
    )
  }
)

StyledInput.displayName = 'StyledInput'

export { StyledInput }
