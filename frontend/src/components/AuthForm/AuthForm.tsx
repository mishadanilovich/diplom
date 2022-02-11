import React from 'react'
import { Formik } from 'formik'
import { useAppSelector } from '../../store/hooks'
import { Button } from '../Button'
import { StyledInput } from '../StyledField'
import { Values } from './types'
import { authValidationSchema } from './authFormValidation'
import { AuthContainer, StyledForm } from './styles'
import * as naming from '../../constants'
import { RootState } from '../../store/store'
import * as routes from '../../routes/constantsRoutes'
import { useNavigate } from 'react-router-dom'

export const AuthForm: React.FC = () => {
  const { isLoading } = useAppSelector((state: RootState) => state.auth)
  const navigate = useNavigate()

  const handleSubmit = ({ login, password }: Values) => {
    if (login && password) {
      navigate(routes.HOME)
    }
  }

  const handleClickRegister = () => {
    navigate(routes.REGISTER)
  }

  return (
    <AuthContainer>
      <Formik
        initialValues={{
          login: '',
          password: '',
        }}
        validationSchema={authValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <StyledForm>
            <StyledInput
              id="login"
              name="login"
              textLabel={naming.EMAIL_LABEL}
              isError={!!errors.login && !!touched.login}
            />
            <StyledInput
              id="password"
              name="password"
              textLabel={naming.PASSWORD_LABEL}
              type="password"
              isError={!!errors.password && !!touched.password}
            />

            <Button
              type="submit"
              disabled={!(Object.keys(errors).length === 0)}
              isLoading={isLoading}
            >
              {naming.LOGIN}
            </Button>
            <Button
              onClick={handleClickRegister}
              isSecondary
              isLoading={isLoading}
            >
              {naming.REGISTER}
            </Button>
          </StyledForm>
        )}
      </Formik>
    </AuthContainer>
  )
}
