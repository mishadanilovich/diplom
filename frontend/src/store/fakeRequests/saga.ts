import { takeLatest } from 'redux-saga/effects'
import { request } from '../sagas'
import { fakeRequest } from './actions'

function* requests() {
  yield request()
}

export function* fakeRequestsSaga() {
  yield takeLatest(fakeRequest, requests)
}
