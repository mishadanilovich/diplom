import React from 'react'
import { Formik, FormikHelpers } from 'formik'
import * as Lockr from 'lockr'
import { Button } from '../Button'
import { StyledInput } from '../StyledField'
import { User, Users } from './types'
import { authValidationSchema } from './authFormValidation'
import { AuthContainer, StyledForm } from './styles'
import * as naming from '../../constants'
import * as routes from '../../routes/constantsRoutes'
import { RootState } from '../../store/store'
import Select from '../Select'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'
import { RECURRING_MAIL } from '../../constants'

export const RegisterForm: React.FC = () => {
  const { isLoading } = useAppSelector((state: RootState) => state.auth)
  const navigate = useNavigate()

  const handleSubmit = (
    { login, roles, password }: User,
    { setFieldError }: FormikHelpers<User>
  ) => {
    if (login && roles && password) {
      const newUserType = roles === 'student' ? 'students' : 'teachers'
      const users: Users | null = Lockr.get('users')

      if (users) {
        const user = [...users.students, ...users.teachers].find(
          (el) => el.login === login
        )
        if (user) setFieldError('login', RECURRING_MAIL)
        else {
          users[newUserType] = [
            ...users[newUserType],
            { login, password, role: roles },
          ]
          Lockr.set('users', users)
          handleClick()
        }
      } else {
        const users: Users = {
          students: [],
          teachers: [],
        }
        users[newUserType] = [{ login, password, role: roles }]
        Lockr.set('users', users)
        handleClick()
      }
    }
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
