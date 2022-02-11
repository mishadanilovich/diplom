import { createSelector } from 'reselect'
import { RootState } from '../../../store/store'

const getAuth = (state: RootState) => state.auth

export const getLoading = createSelector([getAuth], (auth) => auth.isLoading)
export const getTokenAndError = createSelector(
  [getAuth],
  ({ token, error }) => ({ token, error })
)
