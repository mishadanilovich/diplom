import styled from 'styled-components'
import { ActionItemProps } from './types'

export const Container = styled.ul`
  flex-direction: column;
  justify-content: space-between;
  width: 133px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 1px 4px ${(props) => props.theme.colors.lightBlack};

  position: absolute;
  right: 0;
  bottom: -143px;

  margin: 0;
  padding: 5px 0;
  list-style: none;
  z-index: 9999999;
`

export const Divider = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  border: ${(props) => props.theme.borders.main};
  border-radius: 5px;
  margin: 5px 0;
`

export const StyledActionItem = styled.li<ActionItemProps>`
  display: flex;
  align-items: center;
  height: 40px;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;

  transition: background 0.2s;

  &:hover {
    background: ${({ theme, isDestructive }) =>
      isDestructive ? theme.colors.red : theme.colors.blue};

    .action-button {
      color: ${(props) => props.theme.colors.white};
    }
  }
`

export const StyledAction = styled.button`
  margin-left: 15px;
  transition: color 0.2s;

  &:hover {
    cursor: pointer;
  }
`
