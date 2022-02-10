import { combineReducers } from '@reduxjs/toolkit'
import authReducer from '../hoc/AuthHoc/store/reducer'

export const createRootReducer = () =>
  combineReducers({
    auth: authReducer,
  })
