import styled from 'styled-components'

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 110px;
  height: 40px;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) =>
    `linear-gradient(180deg, ${props.theme.colors.lightBlue} 0%, ${props.theme.colors.blue} 100%)`};
  border-radius: 5px;
  transition: all 0.2s;

  font-family: ${(props) => props.theme.fonts[0]};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0;
  text-align: center;

  &:focus {
    border: ${(props) => props.theme.borders.blue};
  }

  &:hover,
  &:active {
    border: none;
    cursor: pointer;
  }

  &:hover {
    background: ${(props) => props.theme.background.hover};
  }

  &:active {
    background: ${(props) => props.theme.background.active};
  }

  &:disabled {
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.disabled};
    cursor: default;
  }
`
