import styled from 'styled-components'

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: ${(props) => props.theme.colors.gray};
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }
`
