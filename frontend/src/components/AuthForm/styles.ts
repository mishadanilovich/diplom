import styled from 'styled-components'
import { Field, Form } from 'formik'

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
  max-width: 520px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0 4px 10px 0 ${(props) => props.theme.colors.lightBoxShadow};
  padding: 40px 30px;
  border-radius: 5px;
`

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  .button-submit {
    margin-right: auto;
  }
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

export const StyledField = styled(Field)`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 20px;
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
`
