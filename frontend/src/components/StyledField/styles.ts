import styled from 'styled-components'
import { Field } from 'formik'
import { ErrorProps } from './types'

export const StyledDiv = styled.div<ErrorProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: ${({ isError, theme }) =>
    isError ? theme.colors.red : theme.colors.black};
`

export const StyledLabel = styled.label`
  margin-left: 15px;
  color: ${({ theme }) => theme.colors.labelColor};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  margin-right: auto;
  margin-bottom: 5px;
`

export const StyledField = styled(Field)<ErrorProps>`
  width: 100%;
  padding: 5px 10px;
  border-radius: 100px;
  background: ${({ theme }) => theme.colors.lightGray};
  margin-bottom: 20px;

  box-shadow: ${({ isError, theme }) =>
    isError ? theme.boxShadow.error : 'none'};
  border: ${({ isError, theme }) =>
    isError ? theme.borders.error : theme.borders.main};
  outline: none;

  font-family: ${(props) => props.theme.fonts[0]};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0;
`

export const OptionalLabel = styled.span`
  color: ${(props) => props.theme.colors.gray};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  margin-bottom: 5px;
  margin-left: auto;
`
