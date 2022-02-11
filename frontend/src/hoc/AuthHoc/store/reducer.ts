import { createSlice } from '@reduxjs/toolkit'
import { AUTH_REDUCER } from './constants'
import { AppState } from './types'
import * as emptySagaActions from './actions'

const initialState: AppState = {
  token: undefined,
  error: undefined,
  isLoading: false,
}

export const AuthReducer = createSlice({
  name: AUTH_REDUCER,
  initialState,
  reducers: {
    reset: (state: AppState) => {
      state.token = undefined
    },
    loginSuccess: (state, { payload }) => {
      state.token = payload?.token
    },
    loginFailed: (state, { payload }) => {
      state.error = payload
      state.token = undefined
    },
  },
})

const allActions = { ...AuthReducer.actions, ...emptySagaActions }

export const { reset, loginSuccess, loginFailed } = allActions

export default AuthReducer.reducer
