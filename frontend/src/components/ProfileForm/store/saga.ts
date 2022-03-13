import { takeLatest } from 'redux-saga/effects'
import * as Lockr from 'lockr'
import { updateUser } from './actions'
import { Action } from '../../../store/types'
import { User, Users } from '../../../hoc/AuthHoc/store/types'
import * as naming from '../../../constants'
import { setUser } from '../../../store/sagas'
import { initializeChapters } from '../../../store/chaptersStore/saga'

const updateObjectByDifferences = (preData: any, newData: any) => {
  const result = { ...preData }
  for (const key in newData) {
    if (key) {
      if (!preData[key] || preData[key] !== newData[key]) {
        result[key] = newData[key]
      }
    }
  }
  return result
}

function* updateUserData({ payload }: Action<User>) {
  const users = Lockr.get<Users>('users')
  const userType = payload?.role === naming.STUDENT ? 'students' : 'teachers'
  const user = users[userType]?.find((el) => el.login === payload?.login)
  const userNewData = updateObjectByDifferences(user, payload)
  users[userType] = users[userType]?.map((item) => {
    if (item.login === payload?.login) return userNewData
    return item
  })
  Lockr.set('users', users)
  yield setUser(userNewData)
  yield initializeChapters({ user: userNewData, users })
}

export function* profileSaga() {
  yield takeLatest(updateUser, updateUserData)
}
