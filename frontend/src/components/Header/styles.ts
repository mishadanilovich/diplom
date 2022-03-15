import styled from 'styled-components'
import { IconButton } from '../IconButton'

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  min-height: 72px;
  width: 100%;
  padding: 0 22px;
  border-bottom: ${(props) => props.theme.borders.header};
  margin-bottom: 22px;
`

export const RightContainer = styled.div`
  display: flex;
  margin-left: auto;
`

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 22px;
`

export const StyledProfileButton = styled(IconButton)`
  & > svg {
    stroke: ${({ theme }) => theme.colors.darkGray};
  }
`
