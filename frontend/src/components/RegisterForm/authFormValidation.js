import * as yup from 'yup'
import { passwordRegex } from '../../regex'
import { INCORRECT_PASSWORD, REQUIRED_FIELD } from '../../constants'
import * as naming from '../../constants'

export const authValidationSchema = yup.object().shape({
  login: yup.string().required(REQUIRED_FIELD),
  password: yup
    .string()
    .required(REQUIRED_FIELD)
    .test(
      'password',
      INCORRECT_PASSWORD,
      (value) => value && value.match(passwordRegex)
    )
    .min(6, naming.PASSWORD_MIN_LENGTH),
})
