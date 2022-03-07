import { createAction } from '@reduxjs/toolkit'

export const loginRequest =
  createAction<{ password: string; login: string }>('loginRequest')
export const setUser = createAction('setUser')
