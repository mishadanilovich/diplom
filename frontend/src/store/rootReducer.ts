import { combineReducers } from '@reduxjs/toolkit'
import authReducer from '../hoc/AuthHoc/store/reducer'
import chaptersReducer from './chaptersStore/reducer'

export const createRootReducer = () =>
  combineReducers({
    auth: authReducer,
    chapters: chaptersReducer,
  })
