import { all, fork } from 'redux-saga/effects'
import { authSaga } from '../hoc/AuthHoc/store/saga'
import { fakeRequestsSaga } from './fakeRequests/saga'
import { profileSaga } from '../components/ProfileForm/store/saga'
import { topicsSaga } from '../components/Roadmap/store/saga'
import { chaptersSaga } from './chaptersStore/saga'
import { testSaga } from '../components/Test/store/saga'

function* Saga() {
  yield all([
    fork(authSaga),
    fork(fakeRequestsSaga),
    fork(profileSaga),
    fork(topicsSaga),
    fork(chaptersSaga),
    fork(testSaga),
  ])
}

export default Saga
