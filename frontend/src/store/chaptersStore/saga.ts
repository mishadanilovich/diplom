import { put, takeLatest } from 'redux-saga/effects'
import { Chapters } from './types'
import { Action } from '../types'
import { setInitialChapters } from './actions'
import { request } from '../sagas'
import { setChapters } from './reducer'

export function* initializeChapters({ payload }: Action<Chapters>) {
  yield request()
  yield put(setChapters(payload as Chapters))
}

export function* chaptersSaga() {
  yield takeLatest(setInitialChapters, initializeChapters)
}
