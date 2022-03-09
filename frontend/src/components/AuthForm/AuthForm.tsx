import React from 'react'
import { Formik, FormikHelpers, Form } from 'formik'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { Button } from '../Button'
import { StyledInput } from '../StyledInput'
import { Values } from './types'
import { authValidationSchema } from './authFormValidation'
import { AuthContainer } from './styles'
import * as naming from '../../constants'
import * as routes from '../../routes/constantsRoutes'
import { useNavigate } from 'react-router-dom'
import { loginRequest } from '../../hoc/AuthHoc/store/actions'
import { getLoading } from '../../hoc/AuthHoc/store/selector'

export const AuthForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(getLoading)
  const navigate = useNavigate()

  const handleSubmit = (
    { login, password }: Values,
    formikHelpers: FormikHelpers<Values>
  ) => {
    dispatch(loginRequest({ login, password, formikProps: formikHelpers }))
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
          <Form className={'form'}>
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
            <div className={'flex-center'}>
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
                style={{ minWidth: 'fit-content' }}
              >
                {naming.REGISTER}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </AuthContainer>
  )
}
