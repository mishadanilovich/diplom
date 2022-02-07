import React from 'react'
import { Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { Notification, StyledInput, Button } from '../../components'

import { authenticate } from '../../redux/actions'

import { Values } from './types'
import { authValidationSchema } from './authFormValidation'
import { AuthContainer, StyledForm } from './styles'
import {
  LOGIN,
  LOGIN_LABEL,
  PASSWORD_LABEL,
  SUB_LOGIN_LABEL,
} from '../../constants'
import { RootState } from '../../redux'

export const AuthForm: React.FC = () => {
  const dispatch = useDispatch()
  const { loading, error } = useSelector((state: RootState) => state.auth)

  const handleSubmit = (values: Values) => {
    dispatch(authenticate(values))
  }

  return (
    <AuthContainer>
      <h1>API-консолька</h1>
      {error && (
        <Notification type="error" header="Вход не вышел" description={error} />
      )}
      <Formik
        initialValues={{
          login: '',
          subLogin: '',
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
              textLabel={LOGIN_LABEL}
              isError={!!errors.login && !!touched.login}
            />
            <StyledInput
              id="subLogin"
              name="subLogin"
              textLabel={SUB_LOGIN_LABEL}
              isError={!!errors.subLogin && !!touched.subLogin}
              isOptional
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
              className="button-submit"
              disabled={!(Object.keys(errors).length === 0)}
              isLoading={loading}
            >
              {LOGIN}
            </Button>
          </StyledForm>
        )}
      </Formik>
    </AuthContainer>
  )
}
