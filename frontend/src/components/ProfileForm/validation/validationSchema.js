import * as yup from 'yup'
import * as naming from '../../../constants'
import { passwordRegex } from '../../../regex'

export const validationSchema = yup.object().shape({
  firstName: yup.string().required(naming.REQUIRED_FIELD),
  secondName: yup.string().required(naming.REQUIRED_FIELD),
  password: yup
    .string()
    .test('password', naming.INCORRECT_PASSWORD, (value) => {
      if (!value) return true
      return value.match(passwordRegex)
    })
    .min(6, naming.PASSWORD_MIN_LENGTH),
})
