import React from 'react'
import { Formik } from 'formik'
import { Button } from '../Button'
import { StyledInput } from '../StyledField'
import { Values } from './types'
import { authValidationSchema } from './authFormValidation'
import { AuthContainer, StyledForm } from './styles'
import * as naming from '../../constants'
import * as routes from '../../routes/constantsRoutes'
import { RootState } from '../../store/store'
import Select from '../Select'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'

export const RegisterForm: React.FC = () => {
  const { isLoading } = useAppSelector((state: RootState) => state.auth)
  const navigate = useNavigate()

  const handleSubmit = ({ login, roles, password }: Values) => {
    if (login && roles && password) handleClick()
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
          roles: '',
        }}
        validationSchema={authValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, setFieldValue }) => (
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
            <input
              style={{ display: 'none' }}
              type="text"
              name="roles"
              id="roles"
            />
            <Select
              onChange={({ value }) => setFieldValue('roles', value)}
              label={naming.ROLE_LABEL}
              items={naming.ROLES}
            />
            <Button
              type="submit"
              disabled={!(Object.keys(errors).length === 0)}
              isLoading={isLoading}
            >
              {naming.CONTINUE}
            </Button>
            <Button onClick={handleClick} isSecondary isLoading={isLoading}>
              {naming.BACK}
            </Button>
          </StyledForm>
        )}
      </Formik>
    </AuthContainer>
  )
}
