import React from 'react'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'
import { Button } from '../Button'
import { StyledInput } from '../StyledField'
import { Values } from './types'
import { authValidationSchema } from './authFormValidation'
import { AuthContainer, StyledForm } from './styles'
import {
  EMAIL_LABEL,
  PASSWORD_LABEL,
  BACK,
  CONTINUE,
  ROLE_LABEL,
  ROLES,
} from '../../constants'
import { RootState } from '../../redux'
import Select from '../Select'

export const RegisterForm: React.FC = () => {
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
            <Select
              onChange={(valer) => console.log(valer)}
              label={ROLE_LABEL}
              items={ROLES}
            />
            <Button
              type="submit"
              disabled={!(Object.keys(errors).length === 0)}
              isLoading={loading}
            >
              {CONTINUE}
            </Button>
            <Button
              isSecondary
              disabled={!(Object.keys(errors).length === 0)}
              isLoading={loading}
            >
              {BACK}
            </Button>
          </StyledForm>
        )}
      </Formik>
    </AuthContainer>
  )
}
