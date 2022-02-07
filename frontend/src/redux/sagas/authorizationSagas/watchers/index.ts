import { all, takeLatest } from 'redux-saga/effects'
import { authenticateCheckSaga, authenticateSaga, logoutSaga } from '../workers'
import { ActionTypes } from '../../../constants'

export default function* root() {
  yield all([
    takeLatest(ActionTypes.AUTHENTICATE, authenticateSaga),
    takeLatest(ActionTypes.AUTHENTICATE_CHECK, authenticateCheckSaga),
    takeLatest(ActionTypes.LOGOUT, logoutSaga),
  ])
}
