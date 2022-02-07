import styled from 'styled-components'
import { ContainerProps } from './types'

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 5px;
  background: ${(props) => props.theme.background.error};
  ${({ theme, type }) =>
    type === 'error' ? `color: ${theme.colors.red}` : ''};
  padding: 10px;
`

export const StyledEmoji = styled.span`
  align-self: flex-start;
  margin-top: 3px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`

export const StyledHeader = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
`

export const StyledDescription = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;

  opacity: 0.5;
`
