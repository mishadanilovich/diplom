import { all, fork } from 'redux-saga/effects'
import { authSaga } from '../hoc/AuthHoc/store/saga'

function* Saga() {
  yield all([fork(authSaga)])
}

export default Saga
