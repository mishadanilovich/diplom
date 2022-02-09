import styled from 'styled-components'
import { Form } from 'formik'

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
  max-width: 520px;
  padding: 40px 30px;
  border-radius: 5px;
`

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  margin-right: auto;
  margin-bottom: 5px;
`
