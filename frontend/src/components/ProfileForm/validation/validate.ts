import { Values } from '../types'
import * as naming from '../../../constants'

export const validate = (values: Values) => {
  const errors: any = {}

  if (values.role === naming.STUDENT && !values.teacher)
    errors.teacher = naming.REQUIRED_TEACHER

  return errors
}
