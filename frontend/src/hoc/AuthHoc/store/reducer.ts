import { createSlice } from '@reduxjs/toolkit'
import { AUTH_REDUCER } from './constants'
import { AppState, Student, Teacher } from './types'
import * as emptySagaActions from './actions'

const initialState: AppState = {
  token: undefined,
  error: undefined,
  isLoading: false,
  user: null,
}

export const AuthReducer = createSlice({
  name: AUTH_REDUCER,
  initialState,
  reducers: {
    setUserData: (state, { payload }: { payload: Student | Teacher }) => {
      state.user = payload
    },
    setLoading: (state, { payload }: { payload: boolean }) => {
      state.isLoading = payload
    },
    reset: (state: AppState) => {
      state.user = null
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

export const { reset, loginSuccess, setUserData, setLoading, loginFailed } =
  allActions

export default AuthReducer.reducer
