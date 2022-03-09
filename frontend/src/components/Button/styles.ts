import styled from 'styled-components'

interface Props {
  isSecondary?: boolean
}

export const StyledButton = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;
  height: 40px;
  border-radius: 100px;
  min-width: 190px;
  background: ${({ isSecondary = false, theme }) =>
    isSecondary ? 'none' : theme.colors.gray};

  color: ${({ theme }) => theme.colors.black};
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: 25px;

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
