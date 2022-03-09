import { takeLatest, put } from 'redux-saga/effects'
import * as Lockr from 'lockr'
import { identifyUser, loginRequest, registerRequest } from './actions'
import { Users } from '../../../components/RegisterForm/types'
import * as naming from '../../../constants'
import * as routes from '../../../routes/constantsRoutes'
import { Login, Register } from '../../../components/AuthForm/types'
import { IdentifyUser, Student, Teacher } from './types'
import { setUserData } from './reducer'
import { RECURRING_MAIL } from '../../../constants'
import { Action } from '../../../store/types'
import { request, setUser } from '../../../store/sagas'

function* getUser({ payload }: Action<IdentifyUser>) {
  const { login } = payload || {}
  const tempUsers = Lockr.get<Users>('users')
  const users = [...tempUsers?.students, ...tempUsers?.teachers]
  if (login) {
    const user = users.find((el) => el.login === login) as Teacher | Student
    yield put(setUserData(user))
  }
}

function* loginUser({ payload }: Action<Login>) {
  const { login, password, formikProps } = payload || {}
  if (login && password && formikProps) {
    const tempUsers: Users | null = Lockr.get('users')
    if (tempUsers) {
      const users = [...tempUsers?.students, ...tempUsers?.teachers]
      const user = users?.find((el) => el.login === login) as Teacher | Student
      if (user && user.password === password) {
        Lockr.set('user', login)
        yield setUser(user)
      }
      if (user && user.password !== password)
        formikProps.setFieldError('password', naming.INCORRECT_PASSWORD)
      if (!user) formikProps.setFieldError('login', naming.NON_EXISTENT_USER)
    }
  }
}

function* registerUser({ payload }: Action<Register>) {
  const { login, password, roles, formikProps, navigate } = payload || {}
  if (login && roles && password && formikProps && navigate) {
    const newUserType = roles === naming.STUDENT ? 'students' : 'teachers'
    const users: Users | null = Lockr.get('users')

    if (users) {
      const user = [...users.students, ...users.teachers].find(
        (el) => el.login === login
      )
      if (user) formikProps.setFieldError('login', RECURRING_MAIL)
      else {
        users[newUserType] = [
          ...users[newUserType],
          { login, password, role: roles },
        ]
        Lockr.set('users', users)
        yield request()
        navigate(routes.AUTH)
      }
    } else {
      const users: Users = {
        students: [],
        teachers: [],
      }
      users[newUserType] = [{ login, password, role: roles }]
      Lockr.set('users', users)
      yield request()
      navigate(routes.AUTH)
    }
  }
}

export function* authSaga() {
  yield takeLatest(loginRequest, loginUser)
  yield takeLatest(identifyUser, getUser)
  yield takeLatest(registerRequest, registerUser)
}
