import { takeLatest } from 'redux-saga/effects'
import { loginRequest } from './actions'

function* login() {
  yield console.log('asdasd')
}

export function* authSaga() {
  yield takeLatest(loginRequest, login)
}
