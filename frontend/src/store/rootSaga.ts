import { all, fork } from 'redux-saga/effects'
import { authSaga } from '../hoc/AuthHoc/store/saga'
import { fakeRequestsSaga } from './fakeRequests/saga'
import { profileSaga } from '../components/ProfileForm/store/saga'

function* Saga() {
  yield all([fork(authSaga), fork(fakeRequestsSaga), fork(profileSaga)])
}

export default Saga
