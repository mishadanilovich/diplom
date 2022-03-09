import { takeLatest } from 'redux-saga/effects'
import * as Lockr from 'lockr'
import { updateTeacherTopics } from './actions'
import { Action } from '../../../store/types'
import { request } from '../../../store/sagas'
import { Users } from '../../../hoc/AuthHoc/store/types'
import { UpdateData } from '../../ProfileForm/store/types'

function* updateTopics({ payload }: Action<UpdateData>) {
  const { topics, login } = payload || {}
  if (topics && login) {
    const users = Lockr.get<Users>('users')
    yield request()
    users['teachers'] = users.teachers?.map((el) =>
      el.login === login ? { ...el, topics } : el
    )
    Lockr.set('users', users)
  }
}

export function* topicsSaga() {
  yield takeLatest(updateTeacherTopics, updateTopics)
}
