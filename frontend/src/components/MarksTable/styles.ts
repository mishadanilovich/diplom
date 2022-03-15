import styled from 'styled-components'

export const MarksContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 0 22px 22px;
`

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 45px 110px;
  grid-column-gap: 20px;

  align-items: center;
`

export const TableHeaderItem = styled.span`
  font-size: 22px;
  text-align: center;
`

export const TableItem = styled.span`
  font-size: 19px;
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.8;
  text-align: center;
`
