import { takeLatest, put, delay } from 'redux-saga/effects'
import { loginRequest } from './actions'
import { save } from './reducer'

function* login({ payload }: any) {
  console.log(payload)
  yield delay(5000)
  yield put(save(payload))
}

export function* authSaga() {
  yield takeLatest(loginRequest, login)
}
