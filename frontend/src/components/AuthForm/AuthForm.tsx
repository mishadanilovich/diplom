import React from 'react'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'
import { Button } from '../Button'
import { StyledInput } from '../StyledField'
import { Values } from './types'
import { authValidationSchema } from './authFormValidation'
import { AuthContainer, StyledForm } from './styles'
import { LOGIN, EMAIL_LABEL, PASSWORD_LABEL, REGISTER } from '../../constants'
import { RootState } from '../../redux'

export const AuthForm: React.FC = () => {
  const { loading } = useSelector((state: RootState) => state.auth)

  const handleSubmit = (values: Values) => {
    console.log(values)
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
              textLabel={EMAIL_LABEL}
              isError={!!errors.login && !!touched.login}
            />
            <StyledInput
              id="password"
              name="password"
              textLabel={PASSWORD_LABEL}
              type="password"
              isError={!!errors.password && !!touched.password}
            />

            <Button
              type="submit"
              disabled={!(Object.keys(errors).length === 0)}
              isLoading={loading}
            >
              {LOGIN}
            </Button>
            <Button
              isSecondary
              disabled={!(Object.keys(errors).length === 0)}
              isLoading={loading}
            >
              {REGISTER}
            </Button>
          </StyledForm>
        )}
      </Formik>
    </AuthContainer>
  )
}
