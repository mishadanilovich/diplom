import { createAction } from '@reduxjs/toolkit'
import { Login, Register } from '../../../components/AuthForm/types'
import { IdentifyUser } from './types'

export const loginRequest = createAction<Login>('loginRequest')
export const registerRequest = createAction<Register>('registerUser')
export const identifyUser = createAction<IdentifyUser>('identifyUser')
