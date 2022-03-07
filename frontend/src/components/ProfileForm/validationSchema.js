import * as yup from 'yup'
import { INCORRECT_PASSWORD } from '../../constants'
import { passwordRegex } from '../../regex'

export const validationSchema = yup.object().shape({
  password: yup
    .string()
    .test(
      'password',
      INCORRECT_PASSWORD,
      (value) => value && value.match(passwordRegex)
    ),
})
