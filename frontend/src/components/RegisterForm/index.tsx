import React from 'react'
import { Formik, FormikHelpers } from 'formik'
import { Button } from '../Button'
import { StyledInput } from '../StyledField'
import { User } from './types'
import { authValidationSchema } from './authFormValidation'
import { AuthContainer, StyledForm } from './styles'
import * as naming from '../../constants'
import * as routes from '../../routes/constantsRoutes'
import Select from '../Select'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { registerRequest } from '../../hoc/AuthHoc/store/actions'
import { getLoading } from '../../hoc/AuthHoc/store/selector'

export const RegisterForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(getLoading)
  const navigate = useNavigate()

  const handleSubmit = (
    { login, roles, password }: User,
    formikHelpers: FormikHelpers<User>
  ) => {
    dispatch(
      registerRequest({
        login,
        roles,
        password,
        formikProps: formikHelpers,
        navigate,
      })
    )
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
        {({ errors, touched, setFieldValue }) => {
          return (
            <StyledForm>
              <StyledInput
                id="login"
                name="login"
                textLabel={naming.EMAIL_LABEL}
                isError={!!errors.login && !!touched.login}
                errorText={errors.login}
              />
              <StyledInput
                id="password"
                name="password"
                textLabel={naming.PASSWORD_LABEL}
                type="password"
                isError={!!errors.password && !!touched.password}
                errorText={errors.password}
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
          )
        }}
      </Formik>
    </AuthContainer>
  )
}
