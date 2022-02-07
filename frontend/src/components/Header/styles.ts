import styled from 'styled-components'

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 15px;
  border-bottom: ${(props) => props.theme.borders.main};
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  column-gap: 20px;
`
