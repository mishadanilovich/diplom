import { put, takeLatest } from 'redux-saga/effects'
import * as Lockr from 'lockr'
import { updateTeacherTopics } from './actions'
import { Action } from '../../../store/types'
import { request } from '../../../store/sagas'
import { Users } from '../../../hoc/AuthHoc/store/types'
import { UpdateData } from '../../ProfileForm/store/types'
import { updateChapter } from '../../../store/chaptersStore/reducer'

function* updateTopics({ payload }: Action<UpdateData>) {
  if (payload) {
    const { topics, login, chapterName } = payload
    const users = Lockr.get<Users>('users')
    yield request()
    users['teachers'] = users.teachers?.map((user) => {
      if (user.login === login)
        return {
          ...user,
          chapters: user.chapters.map((item) =>
            item.name === chapterName ? { ...item, topics } : item
          ),
        }
      return user
    })
    Lockr.set('users', users)
    yield put(updateChapter({ chapterName, topics }))
  }
}

export function* topicsSaga() {
  yield takeLatest(updateTeacherTopics, updateTopics)
}
