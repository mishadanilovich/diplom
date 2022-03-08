import { createAction } from '@reduxjs/toolkit'
import { User } from '../../../hoc/AuthHoc/store/types'

export const updateUser = createAction<User>('updateUser')
