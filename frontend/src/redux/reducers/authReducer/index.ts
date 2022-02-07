import { ActionTypes } from '../../constants'
import { initialState } from './initialState'
import { Action } from './types'

export const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.AUTHENTICATE:
      return {
        ...state,
        loading: true,
      }
    case ActionTypes.AUTHENTICATE_SUCCESS:
      return {
        ...state,
        loading: false,
        sessionKey: action.payload?.sessionKey,
        login: action.payload?.login,
        subLogin: action.payload?.subLogin,
        error: '',
      }
    case ActionTypes.AUTHENTICATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload?.error,
      }
    case ActionTypes.LOGOUT:
      return {
        ...state,
        loading: true,
      }
    case ActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        login: '',
        subLogin: '',
        sessionKey: null,
      }
    default:
      return { ...state }
  }
}
