import styled from 'styled-components'

interface Props {
  isSecondary?: boolean
}

export const StyledButton = styled.button<Props>`
  height: 40px;
  border-radius: 100px;
  min-width: 190px;
  background: ${({ isSecondary = false, theme }) =>
    isSecondary ? 'none' : theme.colors.gray};

  &:focus {
  }

  &:hover,
  &:active {
  }

  &:hover {
  }

  &:active {
  }

  &:disabled {
  }
`
