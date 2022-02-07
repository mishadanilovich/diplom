import { all, fork } from 'redux-saga/effects'
import login from './authorizationSagas'

export default function* rootSaga() {
  yield all([fork(login)])
}
