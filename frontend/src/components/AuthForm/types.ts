import { FormikHelpers } from 'formik'
import { User } from '../RegisterForm/types'
import { NavigateFunction } from 'react-router-dom'

export interface Values {
  login: string
  password: string
}

export interface Login extends Values {
  formikProps: FormikHelpers<Values>
}

export interface Register {
  login: string
  password: string
  roles: string
  formikProps: FormikHelpers<User>
  navigate: NavigateFunction
}
