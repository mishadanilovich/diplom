import { delay, put } from 'redux-saga/effects'
import { setLoading, setUserData } from '../hoc/AuthHoc/store/reducer'
import { Student, Teacher, User } from '../hoc/AuthHoc/store/types'

export function* request() {
  yield put(setLoading(true))
  yield delay(2000)
  yield put(setLoading(false))
}

export function* setUser(user: User | Teacher | Student) {
  yield put(setLoading(true))
  yield delay(3000)
  yield put(setUserData(user))
  yield put(setLoading(false))
}
