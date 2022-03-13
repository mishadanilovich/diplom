import { takeLatest, put } from 'redux-saga/effects'
import * as Lockr from 'lockr'
import {
  identifyUser,
  loginRequest,
  registerRequest,
  sendRequest,
} from './actions'
import * as naming from '../../../constants'
import * as routes from '../../../routes/constantsRoutes'
import { Login, Register } from '../../../components/AuthForm/types'
import { Users as RegisterUser } from '../../../components/RegisterForm/types'
import { IdentifyUser, Student, Teacher, User, Users } from './types'
import { setUserData } from './reducer'
import { Action } from '../../../store/types'
import { request, setUser } from '../../../store/sagas'
import { initializeChapters } from '../../../store/chaptersStore/saga'

function* getUser({ payload }: Action<IdentifyUser>) {
  try {
    const { login } = payload || {}
    const tempUsers = Lockr.get<RegisterUser>('users')
    const users = [...tempUsers?.students, ...tempUsers?.teachers]
    if (login) {
      const user = users.find((el) => el.login === login) as User
      yield put(setUserData(user))

      yield initializeChapters({ user, users: tempUsers as Users })
    }
  } catch (e) {
    console.log(e)
  }
}

function* loginUser({ payload }: Action<Login>) {
  try {
    const { login, password, formikProps } = payload || {}
    if (login && password && formikProps) {
      const tempUsers: Users | null = Lockr.get('users')
      if (tempUsers) {
        const users = [...tempUsers?.students, ...tempUsers?.teachers]
        const user = users?.find((el) => el.login === login) as
          | Teacher
          | Student
        if (user && user.password === password) {
          Lockr.set('user', login)
          yield setUser(user)
        }
        if (user && user.password !== password)
          formikProps.setFieldError('password', naming.INCORRECT_PASSWORD)
        if (!user) formikProps.setFieldError('login', naming.NON_EXISTENT_USER)
      }
    }
  } catch (e) {
    console.log(e)
  }
}

function* registerUser({ payload }: Action<Register>) {
  try {
    if (!payload) return
    const { login, password, roles, formikProps, navigate } = payload
    const newUserType = roles === naming.STUDENT ? 'students' : 'teachers'
    const users: RegisterUser | null = Lockr.get('users')

    if (users) {
      const user = [...users.students, ...users.teachers].find(
        (el) => el.login === login
      )
      if (user) formikProps.setFieldError('login', naming.RECURRING_MAIL)
      else {
        if (newUserType === 'students')
          users[newUserType] = [
            ...users[newUserType],
            { login, password, role: roles },
          ]
        else
          users[newUserType] = [
            ...users[newUserType],
            { login, password, role: roles, chapters: [naming.initialChapter] },
          ]
        Lockr.set('users', users)
        yield request()
        navigate(routes.AUTH)
      }
    } else {
      const users: RegisterUser = {
        students: [],
        teachers: [],
      }
      if (newUserType === 'students')
        users[newUserType] = [{ login, password, role: roles }]
      else
        users[newUserType] = [
          { login, password, role: roles, chapters: [naming.initialChapter] },
        ]
      Lockr.set('users', users)
      yield request()
      navigate(routes.AUTH)
    }
  } catch (e) {
    console.log(e)
  }
}

export function* authSaga() {
  yield takeLatest(loginRequest, loginUser)
  yield takeLatest(identifyUser, getUser)
  yield takeLatest(registerRequest, registerUser)
  yield takeLatest(sendRequest, request)
}
