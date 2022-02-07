import styled from 'styled-components'

export const FormatContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  padding: 4px;
  min-width: 166px;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;

  transition: color 0.2s;

  .format-icon {
    transition: stroke 0.2s;
  }

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.blue};
    cursor: pointer;

    .format-icon {
      stroke: ${(props) => props.theme.colors.blue};
    }
  }

  &:focus {
    border: ${(props) => props.theme.borders.lightBlue};
    border-radius: 7px;
  }
`
