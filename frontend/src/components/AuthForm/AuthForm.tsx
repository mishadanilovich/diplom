import React from 'react'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'
import { Button } from '../Button'
import { StyledInput } from '../StyledField'
import { Values } from './types'
import { authValidationSchema } from './authFormValidation'
import { AuthContainer, StyledForm } from './styles'
import * as naming from '../../constants'
import { RootState } from '../../redux'
import * as routes from '../../routes/constantsRoutes'
import { useNavigate } from 'react-router-dom'

export const AuthForm: React.FC = () => {
  const { loading } = useSelector((state: RootState) => state.auth)
  const navigate = useNavigate()

  const handleSubmit = (values: Values) => {
    console.log(values)
  }

  const handleClickLogin = () => {
    navigate(routes.HOME)
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
              onClick={handleClickLogin}
              disabled={!(Object.keys(errors).length === 0)}
              isLoading={loading}
            >
              {naming.LOGIN}
            </Button>
            <Button
              onClick={handleClickRegister}
              isSecondary
              disabled={!(Object.keys(errors).length === 0)}
              isLoading={loading}
            >
              {naming.REGISTER}
            </Button>
          </StyledForm>
        )}
      </Formik>
    </AuthContainer>
  )
}
