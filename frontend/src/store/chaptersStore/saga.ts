import { put, takeLatest } from 'redux-saga/effects'
import { Chapters, InitializeChapters } from './types'
import { Action } from '../types'
import { setInitialChapters } from './actions'
import { request } from '../sagas'
import { setChapters } from './reducer'
import * as naming from '../../constants'

export function* initializeChapters({ user, users }: InitializeChapters) {
  if (user.role === naming.STUDENT) {
    const chapters = users.teachers
      .find((el) => el.login === user.teacher)
      ?.chapters?.map((el) => ({
        ...el,
        topics: el.topics.filter((item) => item.show),
      })) as Chapters
    yield put(setChapters(chapters))
  } else yield put(setChapters(user.chapters))
}

export function* initialChapters({ payload }: Action<Chapters>) {
  yield request()
  yield put(setChapters(payload as Chapters))
}

export function* chaptersSaga() {
  yield takeLatest(setInitialChapters, initialChapters)
}
