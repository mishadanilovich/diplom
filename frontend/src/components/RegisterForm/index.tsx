import React from 'react'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'
import { Button } from '../Button'
import { StyledInput } from '../StyledField'
import { Values } from './types'
import { authValidationSchema } from './authFormValidation'
import { AuthContainer, StyledForm } from './styles'
import * as naming from '../../constants'
import * as routes from '../../routes/constantsRoutes'
import { RootState } from '../../redux'
import Select from '../Select'
import { useNavigate } from 'react-router-dom'

export const RegisterForm: React.FC = () => {
  const { loading } = useSelector((state: RootState) => state.auth)
  const navigate = useNavigate()

  const handleSubmit = (values: Values) => {
    console.log(values)
  }

  const handleClick = () => {
    navigate(routes.AUTH)
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
            <Select
              onChange={(value) => console.log(value)}
              label={naming.ROLE_LABEL}
              items={naming.ROLES}
            />
            <Button
              onClick={handleClick}
              disabled={!(Object.keys(errors).length === 0)}
              isLoading={loading}
            >
              {naming.CONTINUE}
            </Button>
            <Button
              onClick={handleClick}
              isSecondary
              disabled={!(Object.keys(errors).length === 0)}
              isLoading={loading}
            >
              {naming.BACK}
            </Button>
          </StyledForm>
        )}
      </Formik>
    </AuthContainer>
  )
}
