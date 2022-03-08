import styled from 'styled-components'
import { Button } from '../Button'
import { Form } from 'formik'
import { ToastContainer } from 'react-toastify'

export const StyledProfileContainer = styled.div`
  height: 100%;
  padding: 0 30px 40px;
`

export const SubmitButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  column-gap: 12px;
  color: ${({ theme }) => theme.colors.black};
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: 25px;

  &:disabled {
    opacity: 70%;
  }
`

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  row-gap: 20px;
`

export const StyledToastContainer = styled(ToastContainer)`
  @media only screen and (max-width: 480px) {
    &&&.Toastify__toast-container {
      padding: 4px;
      width: 300px;
      top: 40px;
      right: 1em;
      left: auto;
    }
  }
`
