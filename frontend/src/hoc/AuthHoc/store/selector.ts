import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../../store/store'

const getAuth = (state: RootState) => state.auth

export const getLoading = createSelector([getAuth], (auth) => auth.isLoading)
export const getUser = createSelector([getAuth], (auth) => auth.user)
