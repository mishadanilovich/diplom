import styled from 'styled-components'

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  min-height: 72px;
  width: 100%;
  padding: 0 22px;
  border-bottom: ${(props) => props.theme.borders.header};
`

export const RightContainer = styled.div`
  display: flex;
  margin-left: auto;
`

export const LeftContainer = styled.div`
  display: flex;
`
