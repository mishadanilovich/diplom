import styled from 'styled-components'
import { Cross } from '../../icons'

export const FilterContainer = styled.div`
  position: relative;
`

export const StyledCross = styled(Cross)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);

  height: 15px;
`

export const StyledInput = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  padding: 5px 10px;
  border-radius: 100px;
  background: ${({ theme }) => theme.colors.lightGray};

  border: ${({ theme }) => theme.borders.main};

  font-family: ${(props) => props.theme.fonts[0]};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0;
`
